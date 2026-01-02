<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getChapter, chapters } from '../content/chapters'
import type { ChapterNode, InputNameNode, SlidesNode, QuizNode, CelebrationNode } from '../content/types'
import { usePlayerStore } from '../stores/player'
import { useProgressStore } from '../stores/progress'
import NameInputModal from '../components/NameInputModal.vue'
import SlidesModal from '../components/SlidesModal.vue'
import QuizModal from '../components/QuizModal.vue'
import CelebrationModal from '../components/CelebrationModal.vue'

const route = useRoute()
const router = useRouter()
const player = usePlayerStore()
const progress = useProgressStore()

// 從路由取得章節 ID
const chapterId = computed(() => Number(route.params.id) || 1)

// 取得章節配置
const chapter = computed(() => getChapter(chapterId.value))

// 如果章節不存在，導向首頁
watch(chapter, (c) => {
  if (!c) router.push({ name: 'start' })
}, { immediate: true })

onMounted(() => {
  player.loadFromStorage()
  progress.loadFromStorage()
})

// 背景音樂
const bgm = new Audio(`${import.meta.env.BASE_URL}audio/background.mp3`)
bgm.loop = true
bgm.volume = 0.1

const isMusicPlaying = ref(false)

function toggleMusic() {
  if (isMusicPlaying.value) {
    bgm.pause()
  } else {
    bgm.play().catch(() => {})
  }
  isMusicPlaying.value = !isMusicPlaying.value
}

onUnmounted(() => {
  bgm.pause()
  bgm.currentTime = 0
})

// 取得目前章節的節點陣列
const nodes = computed(() => chapter.value?.nodes ?? [])

// 取得目前節點索引
const nodeIndex = computed(() => {
  const idx = progress.getNodeIndex(chapterId.value)
  return Math.min(idx, nodes.value.length - 1)
})

const node = computed<ChapterNode>(() => nodes.value[nodeIndex.value]!)

const showNameModal = computed(() => node.value?.type === 'inputName')
const showSlidesModal = computed(() => node.value?.type === 'slides')
const showQuizModal = computed(() => node.value?.type === 'quiz')
const showCelebrationModal = computed(() => node.value?.type === 'celebration')

const nameNode = computed<InputNameNode | null>(() =>
  node.value?.type === 'inputName' ? (node.value as InputNameNode) : null,
)
const slidesNode = computed<SlidesNode | null>(() => (node.value?.type === 'slides' ? (node.value as SlidesNode) : null))
const quizNode = computed<QuizNode | null>(() => (node.value?.type === 'quiz' ? (node.value as QuizNode) : null))
const celebrationNode = computed<CelebrationNode | null>(() => (node.value?.type === 'celebration' ? (node.value as CelebrationNode) : null))

const dialogueImage = computed(() => {
  if (node.value?.type === 'dialogue' && node.value.image) {
    // 處理絕對路徑，加上 base URL
    const img = node.value.image
    if (img.startsWith('/')) {
      return `${import.meta.env.BASE_URL}${img.slice(1)}`
    }
    return img
  }
  return null
})

const typingText = ref('')
const typingTimer = ref<number | null>(null)

function resolveText(raw: string) {
  const name = player.name || '你'
  return raw.split('{name}').join(name)
}

// 將文字中的 URL 轉換為可點擊的連結
function linkifyText(text: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-amber-400 underline hover:text-amber-300">[連結]</a>')
}

function startTypewriter(text: string) {
  if (typingTimer.value) window.clearInterval(typingTimer.value)
  typingText.value = ''
  let i = 0
  typingTimer.value = window.setInterval(() => {
    i += 1
    typingText.value = text.slice(0, i)
    if (i >= text.length) {
      if (typingTimer.value) window.clearInterval(typingTimer.value)
      typingTimer.value = null
    }
  }, 16)
}

function enterNode(n: ChapterNode) {
  if (n?.type === 'dialogue') startTypewriter(resolveText(n.text))
  else {
    if (typingTimer.value) window.clearInterval(typingTimer.value)
    typingTimer.value = null
    typingText.value = ''
  }
}

onMounted(() => {
  if (node.value) enterNode(node.value)
})

function advance() {
  if (node.value?.type !== 'dialogue') return
  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  progress.setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

// 找到上一個可回退的對話節點（跳過 inputName、slides、quiz）
function findPrevDialogueIndex(currentIdx: number): number {
  for (let i = currentIdx - 1; i >= 0; i--) {
    if (nodes.value[i]?.type === 'dialogue') return i
  }
  return -1
}

const canGoBack = computed(() => {
  if (node.value?.type !== 'dialogue') return false
  return findPrevDialogueIndex(nodeIndex.value) >= 0
})

function goBack() {
  if (node.value?.type !== 'dialogue') return
  const prevIdx = findPrevDialogueIndex(nodeIndex.value)
  if (prevIdx >= 0) {
    progress.setNodeIndex(chapterId.value, prevIdx)
    enterNode(nodes.value[prevIdx]!)
  }
}

function backToStart() {
  router.push({ name: 'start' })
}

function onSubmitName(name: string) {
  player.setName(name)
  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  progress.setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

function onSlidesClose() {
  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  progress.setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

function onQuizDone() {
  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  progress.setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

function onQuizCancel() {
  // 回到上一個對話節點
  const prevIdx = Math.max(nodeIndex.value - 1, 0)
  progress.setNodeIndex(chapterId.value, prevIdx)
  enterNode(nodes.value[prevIdx]!)
}

function onCelebrationClose() {
  // 完成本章
  progress.completeChapter(chapterId.value)

  // 檢查是否有下一關
  const nextChapterId = chapterId.value + 1
  if (chapters[nextChapterId]) {
    // 有下一關，直接進入
    router.push({ name: 'chapter', params: { id: String(nextChapterId) } })
  } else {
    // 沒有下一關，返回開始畫面
    router.push({ name: 'start' })
  }
}

const sceneUrl = computed(() => `${import.meta.env.BASE_URL}images/scene/${node.value?.scene ?? 'normal'}.png`)
const coachUrl = computed(() => `${import.meta.env.BASE_URL}images/coach/${node.value?.coachExpression ?? 'normal'}.png`)

const speakerLabel = computed(() => {
  if (node.value?.type !== 'dialogue') return '海克絲'
  if (node.value.speaker === '你') return player.name || '你'
  return node.value.speaker
})

// 根據說話者返回不同的標籤樣式
const speakerTagClass = computed(() => {
  if (node.value?.type !== 'dialogue') return 'border-amber-300/35 bg-amber-300/20 text-amber-100'
  if (node.value.speaker === '海克絲') return 'border-amber-300/35 bg-amber-300/20 text-amber-100'
  if (node.value.speaker === '你') return 'border-sky-400/35 bg-sky-400/20 text-sky-100'
  // 旁白
  return 'border-slate-400/35 bg-slate-400/20 text-slate-200'
})

const canFastForward = computed(() => node.value?.type === 'dialogue' && typingTimer.value != null)
function fastForward() {
  if (node.value?.type !== 'dialogue') return
  if (typingTimer.value) window.clearInterval(typingTimer.value)
  typingTimer.value = null
  typingText.value = resolveText(node.value.text)
}

// 鍵盤支援：Enter/空白鍵/方向鍵
function onKeyDown(e: KeyboardEvent) {
  // 如果正在輸入名字、看簡報、答題或慶祝畫面，不處理
  if (showNameModal.value || showSlidesModal.value || showQuizModal.value || showCelebrationModal.value) return

  if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
    e.preventDefault()
    if (canFastForward.value) {
      fastForward()
    } else if (node.value?.type === 'dialogue') {
      advance()
    }
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    if (canGoBack.value) {
      goBack()
    }
  }
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onUnmounted(() => window.removeEventListener('keydown', onKeyDown))
</script>

<template>
  <!-- 主容器：使用 flex column，確保內容自然流動 -->
  <div v-if="chapter" class="flex min-h-screen min-h-[100dvh] flex-col bg-slate-950 pt-14">
    <!-- 背景層（fixed 定位，不影響佈局） -->
    <div class="pointer-events-none fixed inset-0 z-0">
      <div class="absolute inset-0 bg-cover bg-center scale-[1.02] saturate-95" :style="{ backgroundImage: `url(${sceneUrl})` }" />
      <div class="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_90%,rgba(2,6,23,0),rgba(2,6,23,0.7))]" />
    </div>

    <!-- 頂部導航列 -->
    <header class="fixed inset-x-0 top-0 z-20 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 px-4 py-3">
      <button
        class="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-extrabold text-white hover:bg-white/15 active:scale-[0.99]"
        type="button"
        @click="backToStart"
      >
        返回開始
      </button>
      <div class="text-center text-sm font-black text-white/90">{{ chapter.title }}</div>
      <button
        class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]"
        type="button"
        :title="isMusicPlaying ? '關閉音樂' : '開啟音樂'"
        @click="toggleMusic"
      >
        <!-- 音樂開啟 icon -->
        <svg v-if="isMusicPlaying" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
        <!-- 音樂關閉 icon -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
          <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" />
        </svg>
      </button>
    </header>

    <!-- 中間內容區：flex-1 填滿剩餘空間，使用 justify-end 讓內容靠底部 -->
    <main class="relative z-10 flex flex-1 flex-col justify-end">
      <!-- 教練圖片區域：fixed 定位，底部貼齊對話框上緣（quiz/slides/celebration 時隱藏） -->
      <div v-if="!dialogueImage && !showQuizModal && !showSlidesModal && !showCelebrationModal" class="pointer-events-none fixed inset-x-0 z-0 flex items-end justify-center" style="top: 56px; bottom: 160px;">
        <img
          class="h-full w-auto max-w-[85vw] object-contain object-bottom"
          :src="coachUrl"
          alt="教練"
        />
      </div>

      <!-- 圖片模式：可滾動區域顯示圖片 -->
      <div v-if="dialogueImage" class="relative z-10 mb-4 flex-1 overflow-y-auto px-4">
        <div class="flex min-h-full items-center justify-center py-4">
          <img
            :src="dialogueImage"
            alt="展示圖片"
            class="max-w-full rounded-lg border border-white/20 object-contain shadow-2xl"
          />
        </div>
      </div>

      <!-- 對話框區域：在底部，內容多時往上長蓋住教練（quiz/slides/celebration 時隱藏） -->
      <div v-if="!showQuizModal && !showSlidesModal && !showCelebrationModal" class="relative z-20 px-3 pb-6">
        <div class="mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur">
          <div class="mb-2 inline-flex items-center rounded-full border px-3 py-1 text-sm font-black" :class="speakerTagClass">
            {{ speakerLabel }}
          </div>
          <div class="min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold">
            <span v-if="node?.type === 'dialogue'" v-html="linkifyText(typingText)"></span>
            <template v-else-if="node?.type === 'inputName'">{{ nameNode?.prompt }}</template>
            <template v-else-if="node?.type === 'slides'">我們先看一段簡報，把 Git 的重點抓起來。</template>
            <template v-else>來，快速確認一下你抓到重點了沒有。</template>
          </div>

          <div class="mt-3 flex justify-end gap-2.5">
            <button
              class="rounded-xl border border-white/20 bg-white/10 px-3 py-2 font-black text-white hover:bg-white/15 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30"
              type="button"
              :disabled="!canGoBack"
              @click="goBack"
            >
              上一句
            </button>
            <button
              class="rounded-xl border border-amber-300/35 bg-amber-300/20 px-3 py-2 font-black text-white hover:bg-amber-300/25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              :disabled="node?.type !== 'dialogue'"
              @click="advance"
            >
              下一句
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Modals -->
    <NameInputModal
      v-if="showNameModal && nameNode"
      :title="nameNode.prompt"
      placeholder="例如：小明"
      :initialValue="player.name"
      @submit="onSubmitName"
      @cancel="backToStart"
    />

    <SlidesModal
      v-if="showSlidesModal && slidesNode"
      :title="slidesNode.title"
      :slides="slidesNode.slides"
      :mustFinish="slidesNode.mustFinish"
      @close="onSlidesClose"
    />

    <QuizModal v-if="showQuizModal && quizNode" :title="quizNode.title" :questions="quizNode.questions" @done="onQuizDone" @cancel="onQuizCancel" />

    <CelebrationModal
      v-if="showCelebrationModal && celebrationNode"
      :playerName="player.name || '你'"
      :chapterTitle="celebrationNode.chapterTitle"
      @close="onCelebrationClose"
    />
  </div>
</template>
