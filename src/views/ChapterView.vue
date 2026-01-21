<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getChapter, chapters } from '../content/chapters'
import type { ChapterNode, InputNameNode, SlidesNode, QuizNode, CelebrationNode, InteractiveSlideNode, ChoiceNode, ChoiceOption, PasswordInputNode, EndingCompleteNode, DialogueNode } from '../content/types'
import { verifyPassword } from '../utils/cipher'
import { usePlayerStore } from '../stores/player'
import { useProgressStore } from '../stores/progress'
import { generatePassword } from '../utils/cipher'
import { endings, type EndingType } from '../config/endings'
import { MAX_AVAILABLE_CHAPTER } from '../config/game'
import NameInputModal from '../components/NameInputModal.vue'
import SlidesModal from '../components/SlidesModal.vue'
import QuizModal from '../components/QuizModal.vue'
import CelebrationModal from '../components/CelebrationModal.vue'
import InteractiveSlideModal, { type SqlPracticeResult } from '../components/InteractiveSlideModal.vue'
import ChoiceModal from '../components/ChoiceModal.vue'

const route = useRoute()
const router = useRouter()
const player = usePlayerStore()
const progress = useProgressStore()

// 從路由取得章節 ID
const chapterId = computed(() => Number(route.params.id) || 1)

// 取得章節配置
const chapter = computed(() => getChapter(chapterId.value))

// 如果章節不存在或尚未開放，導向首頁
watch(chapter, (c) => {
  // 章節不存在
  if (!c) {
    router.push({ name: 'start' })
    return
  }
  // 遊戲章節 (id <= 100) 且超過開放範圍
  if (chapterId.value <= 100 && chapterId.value > MAX_AVAILABLE_CHAPTER) {
    router.push({ name: 'start' })
  }
}, { immediate: true })

// 當章節改變時（例如從第一關進入第二關），重新初始化對話
watch(chapterId, () => {
  // 確保在章節切換時啟動第一句對話的打字機效果
  if (node.value) enterNode(node.value)
})

onMounted(() => {
  player.loadFromStorage()
  progress.loadFromStorage()
  // 進入結局章節時顯示成就提示
  if (isEndingChapter.value) {
    setTimeout(() => {
      showEndingAchievement()
    }, 500)
  }
})

// 背景音樂 - 根據章節選擇對應音樂
// 完美結局 (103) 一開始用一般背景音樂，等到影片簡報才切換
function getBgmPath(chapterId: number, useEndingMusic = false): string {
  const base = import.meta.env.BASE_URL
  // 結局章節使用對應的結局音樂
  if (chapterId === 101) return `${base}audio/bgm-ending-bad.mp3`
  if (chapterId === 102) return `${base}audio/bgm-ending-normal.mp3`
  // 完美結局：只有指定 useEndingMusic 時才用結局音樂
  if (chapterId === 103 && useEndingMusic) return `${base}audio/bgm-ending-true.mp3`
  // 一般章節使用預設背景音樂
  return `${base}audio/background.mp3`
}

const bgm = ref(new Audio(getBgmPath(chapterId.value)))
bgm.value.loop = true
bgm.value.volume = 0.1

const isMusicPlaying = ref(false)

// 監聽章節變化，切換對應音樂
watch(chapterId, (newId) => {
  const wasPlaying = isMusicPlaying.value
  // 停止舊音樂
  bgm.value.pause()
  bgm.value.currentTime = 0
  // 建立新音樂
  bgm.value = new Audio(getBgmPath(newId))
  bgm.value.loop = true
  bgm.value.volume = 0.1
  // 如果之前有播放，繼續播放新音樂
  if (wasPlaying) {
    bgm.value.play().catch(() => {})
  }
})

function toggleMusic() {
  if (isMusicPlaying.value) {
    bgm.value.pause()
  } else {
    bgm.value.play().catch(() => {})
  }
  isMusicPlaying.value = !isMusicPlaying.value
}

// 是否已切換到結局音樂（避免重複切換）
const hasSwichedToEndingMusic = ref(false)

// 切換到結局音樂（用於完美結局的影片簡報）
function switchToEndingMusic() {
  if (chapterId.value !== 103) return
  // 避免重複切換
  if (hasSwichedToEndingMusic.value) return
  hasSwichedToEndingMusic.value = true

  bgm.value.pause()
  bgm.value.currentTime = 0
  bgm.value = new Audio(getBgmPath(103, true))
  bgm.value.loop = true
  bgm.value.volume = 0.1

  // 自動開啟音樂（影片體驗）
  bgm.value.play().catch(() => {})
  isMusicPlaying.value = true
}

onUnmounted(() => {
  bgm.value.pause()
  bgm.value.currentTime = 0
})

// 取得目前章節的節點陣列
const nodes = computed(() => chapter.value?.nodes ?? [])

// Chapter 103 使用本地索引（不儲存進度，每次進入從頭開始）
const localNodeIndex = ref(0)

// 取得目前節點索引
const nodeIndex = computed(() => {
  // Chapter 103 不儲存進度，使用本地索引
  if (chapterId.value === 103) {
    return Math.min(localNodeIndex.value, nodes.value.length - 1)
  }
  const idx = progress.getNodeIndex(chapterId.value)
  return Math.min(idx, nodes.value.length - 1)
})

// 設定節點索引（Chapter 103 不儲存到 localStorage）
function setNodeIndex(chapterId: number, idx: number) {
  if (chapterId === 103) {
    localNodeIndex.value = idx
  } else {
    progress.setNodeIndex(chapterId, idx)
  }
}

const node = computed<ChapterNode>(() => nodes.value[nodeIndex.value]!)

const showNameModal = computed(() => node.value?.type === 'inputName')
const showSlidesModal = computed(() => node.value?.type === 'slides')
const showQuizModal = computed(() => node.value?.type === 'quiz')
const showCelebrationModal = computed(() => node.value?.type === 'celebration')
const showInteractiveSlideModal = computed(() => node.value?.type === 'interactiveSlide')
const showChoiceModal = computed(() => node.value?.type === 'choice')
const showPasswordInput = computed(() => node.value?.type === 'passwordInput')
const showEndingComplete = computed(() => node.value?.type === 'endingComplete')

const nameNode = computed<InputNameNode | null>(() =>
  node.value?.type === 'inputName' ? (node.value as InputNameNode) : null,
)
const slidesNode = computed<SlidesNode | null>(() => (node.value?.type === 'slides' ? (node.value as SlidesNode) : null))
const quizNode = computed<QuizNode | null>(() => (node.value?.type === 'quiz' ? (node.value as QuizNode) : null))
const celebrationNode = computed<CelebrationNode | null>(() => (node.value?.type === 'celebration' ? (node.value as CelebrationNode) : null))
const interactiveSlideNode = computed<InteractiveSlideNode | null>(() => (node.value?.type === 'interactiveSlide' ? (node.value as InteractiveSlideNode) : null))
const choiceNode = computed<ChoiceNode | null>(() => (node.value?.type === 'choice' ? (node.value as ChoiceNode) : null))
const passwordInputNode = computed<PasswordInputNode | null>(() => (node.value?.type === 'passwordInput' ? (node.value as PasswordInputNode) : null))
const endingCompleteNode = computed<EndingCompleteNode | null>(() => (node.value?.type === 'endingComplete' ? (node.value as EndingCompleteNode) : null))

// 結局密碼輸入
const passwordInput = ref('')
const passwordError = ref('')

// SQL 練習結果（Day 7 用）
const sqlPracticeResult = ref<SqlPracticeResult | null>(null)

// 是否為結局章節（id >= 100）
const isEndingChapter = computed(() => chapterId.value >= 100)

// 成就提示
const showAchievement = ref(false)
const achievementIcon = ref('')
const achievementTitle = ref('')

// 結局成就對應表（從統一的 endings 設定檔產生）
const endingAchievements: Record<number, { icon: string; title: string; type: EndingType }> = {
  [endings.bad.chapterId]: { icon: endings.bad.icon, title: endings.bad.description, type: 'bad' },
  [endings.normal.chapterId]: { icon: endings.normal.icon, title: endings.normal.description, type: 'normal' },
  [endings.true.chapterId]: { icon: endings.true.icon, title: endings.true.description, type: 'true' },
}

// 進入結局章節時顯示成就提示並解鎖成就
function showEndingAchievement() {
  const achievement = endingAchievements[chapterId.value]
  if (achievement) {
    achievementIcon.value = achievement.icon
    achievementTitle.value = achievement.title
    showAchievement.value = true
    // 立即解鎖成就到 localStorage
    progress.unlockEndingAchievement(achievement.type)
    setTimeout(() => {
      showAchievement.value = false
    }, 3000)
  }
}

// 顯示彩蛋結局成就並解鎖
function showHiddenEndingAchievement() {
  achievementIcon.value = endings.hidden.icon
  achievementTitle.value = endings.hidden.description
  showAchievement.value = true
  // 立即解鎖彩蛋結局成就到 localStorage
  progress.unlockEndingAchievement('hidden')
  setTimeout(() => {
    showAchievement.value = false
  }, 3000)
}

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

const showSaveHint = computed(() => {
  // 只有設定 showSaveHint: true 的圖片才顯示「右鍵另存」提示
  if (node.value?.type === 'dialogue' && node.value.image) {
    return (node.value as any).showSaveHint === true
  }
  return false
})

const typingText = ref('')
const typingTimer = ref<number | null>(null)

function resolveText(raw: string) {
  const name = player.name || '你'
  let text = raw.split('{name}').join(name)
  // 替換密碼（Day 7 用）
  if (text.includes('{password}') && player.name) {
    text = text.split('{password}').join(generatePassword(player.name))
  }
  return text
}

// Day 7 密碼顯示時，如果沒有名字要強制輸入
const showDay7NameModal = ref(false)

// 檢查是否需要強制輸入名字（Day 7 且對話包含 {password} 且沒有名字）
const needsNameForPassword = computed(() => {
  if (chapterId.value !== 7) return false
  if (player.name) return false
  if (node.value?.type !== 'dialogue') return false
  return node.value.text.includes('{password}')
})

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
  // Day 7 密碼對話：如果沒有名字，先顯示輸入名字的 Modal
  if (n?.type === 'dialogue' && n.text.includes('{password}') && !player.name) {
    showDay7NameModal.value = true
    return
  }

  if (n?.type === 'dialogue') startTypewriter(resolveText(n.text))
  else {
    if (typingTimer.value) window.clearInterval(typingTimer.value)
    typingTimer.value = null
    typingText.value = ''
  }
}

// Day 7 輸入名字後繼續
function onDay7NameSubmit(name: string) {
  player.setName(name)
  showDay7NameModal.value = false
  // 重新進入當前節點，這次會正常顯示密碼
  if (node.value) enterNode(node.value)
}

function onDay7NameCancel() {
  // 取消的話回到上一個節點
  showDay7NameModal.value = false
  const prevIdx = Math.max(nodeIndex.value - 1, 0)
  setNodeIndex(chapterId.value, prevIdx)
  enterNode(nodes.value[prevIdx]!)
}

onMounted(() => {
  if (node.value) enterNode(node.value)
})

// 檢查節點是否符合條件（用於條件對話）
function shouldShowNode(n: ChapterNode): boolean {
  if (n.type === 'dialogue' && (n as DialogueNode).condition) {
    const condition = (n as DialogueNode).condition
    if (condition === 'sqlPerfect') {
      // 只有 SQL 練習完美通過時才顯示
      return sqlPracticeResult.value?.isPerfect === true
    }
  }
  return true
}

// 找到下一個應該顯示的節點索引（跳過不符合條件的節點）
function findNextVisibleNodeIndex(fromIdx: number): number {
  let nextIdx = fromIdx
  while (nextIdx < nodes.value.length - 1) {
    nextIdx++
    if (shouldShowNode(nodes.value[nextIdx]!)) {
      return nextIdx
    }
  }
  return nodes.value.length - 1
}

function advance() {
  if (node.value?.type !== 'dialogue') return
  const nextIdx = findNextVisibleNodeIndex(nodeIndex.value)
  setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

// 找到上一個可回退的對話節點（跳過 inputName、slides、quiz 以及不符合條件的節點）
function findPrevDialogueIndex(currentIdx: number): number {
  for (let i = currentIdx - 1; i >= 0; i--) {
    const n = nodes.value[i]
    if (n?.type === 'dialogue' && shouldShowNode(n)) return i
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
    setNodeIndex(chapterId.value, prevIdx)
    enterNode(nodes.value[prevIdx]!)
  }
}

function backToStart() {
  router.push({ name: 'start' })
}

function onSubmitName(name: string) {
  player.setName(name)
  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

function onSlidesClose() {
  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

function onInteractiveSlideClose() {
  // 如果是 video-message（彩蛋影片），直接回到首頁
  if (interactiveSlideNode.value?.slideId === 'video-message') {
    // 解鎖彩蛋結局成就
    showHiddenEndingAchievement()
    router.push({ name: 'start' })
    return
  }

  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

function onInteractiveSlideCancel() {
  // 未完成簡報，關閉 modal 但不推進進度（重新進入當前節點）
  enterNode(node.value!)
}

function onSqlPracticeComplete(result: SqlPracticeResult) {
  // 儲存 SQL 練習結果
  sqlPracticeResult.value = result
  // 儲存分數到 progress store
  progress.saveQuizScore(chapterId.value, result.score, result.total)
  // 100% 答對時，解鎖 Day 7 隱藏道具
  if (result.isPerfect) {
    progress.setDay7Item(true)
  }
}

function onChoiceSelect(_option: ChoiceOption) {
  // 選擇完成後，進入下一個節點
  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

function onQuizDone(payload: { correctCount: number; total: number; firstAttemptCorrect: number }) {
  // 儲存測驗分數（只計算第一次作答的結果）
  progress.saveQuizScore(chapterId.value, payload.firstAttemptCorrect, payload.total)

  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

function onQuizCancel() {
  // 回到上一個對話節點
  const prevIdx = Math.max(nodeIndex.value - 1, 0)
  setNodeIndex(chapterId.value, prevIdx)
  enterNode(nodes.value[prevIdx]!)
}

function onCelebrationClose() {
  // Day 7 完成時解鎖隱藏道具
  if (chapterId.value === 7) {
    progress.setDay7Item(true)
  }

  // 完成本章
  progress.completeChapter(chapterId.value)

  // 檢查是否有下一關
  const nextChapterId = chapterId.value + 1

  // 如果已經是最後開放的關卡，回到首頁
  if (chapterId.value >= MAX_AVAILABLE_CHAPTER) {
    router.push({ name: 'start' })
    return
  }

  if (chapters[nextChapterId]) {
    // 有下一關，直接進入
    router.push({ name: 'chapter', params: { id: String(nextChapterId) } })
  } else {
    // Day 10 完成後，根據分數進入對應結局章節
    const endingType = progress.endingType
    const endingChapterId = {
      bad: 101,
      normal: 102,
      true: 103,
      hidden: 103, // hidden 從 true 結局開始
    }[endingType] || 101
    router.push({ name: 'chapter', params: { id: String(endingChapterId) } })
  }
}

// 密碼驗證
function onPasswordSubmit() {
  if (!player.name) {
    passwordError.value = '找不到玩家名字，請重新開始遊戲'
    return
  }

  if (verifyPassword(passwordInput.value, player.name)) {
    passwordError.value = ''
    passwordInput.value = ''
    // 顯示彩蛋結局成就
    showHiddenEndingAchievement()
    // 進入下一個節點
    const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
    setNodeIndex(chapterId.value, nextIdx)
    enterNode(nodes.value[nextIdx]!)
  } else {
    passwordError.value = '密碼錯誤，請再試一次'
  }
}

// 結局完成
function onEndingComplete() {
  router.push({ name: 'start' })
}

// 觸發彩蛋結局（繼續到下一個節點）
function onTriggerHiddenEnding() {
  // 切換到結局音樂
  switchToEndingMusic()
  const nextIdx = Math.min(nodeIndex.value + 1, nodes.value.length - 1)
  setNodeIndex(chapterId.value, nextIdx)
  enterNode(nodes.value[nextIdx]!)
}

// 是否可以觸發彩蛋結局（完美結局完成節點直接繼續）
const canTriggerHidden = computed(() => {
  if (!showEndingComplete.value) return false
  const node = endingCompleteNode.value
  return node?.canTriggerHidden === true
})

// 暗黑場景判斷（壞結局使用）
const isDarkScene = computed(() => node.value?.scene === 'dark')

// 隱藏海姐判斷（home/end 場景不顯示海姐）
const shouldHideCoach = computed(() => {
  const scene = node.value?.scene ?? 'normal'
  return scene === 'dark' || scene === 'home' || scene === 'end'
})

// 場景圖片 - dark/home 場景使用 normal 圖片，end 場景使用 end.png
const sceneUrl = computed(() => {
  const scene = node.value?.scene ?? 'normal'
  // dark 和 home 場景使用 normal 背景，透過 CSS 濾鏡處理
  if (scene === 'dark' || scene === 'home') {
    return `${import.meta.env.BASE_URL}images/scene/normal.png`
  }
  // end 場景使用 end.png
  if (scene === 'end') {
    return `${import.meta.env.BASE_URL}images/scene/end.png`
  }
  return `${import.meta.env.BASE_URL}images/scene/${scene}.png`
})
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
  // 如果正在輸入名字、看簡報、答題、慶祝畫面、互動簡報或選擇對話，不處理
  if (showNameModal.value || showSlidesModal.value || showQuizModal.value || showCelebrationModal.value || showInteractiveSlideModal.value || showChoiceModal.value) return

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
      <!-- 一般場景背景 -->
      <div v-if="!isDarkScene" class="absolute inset-0 bg-cover bg-center scale-[1.02] saturate-95" :style="{ backgroundImage: `url(${sceneUrl})` }" />
      <div v-if="!isDarkScene" class="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_90%,rgba(2,6,23,0),rgba(2,6,23,0.7))]" />

      <!-- 暗黑場景背景（壞結局用）：背景圖 + 陰暗濾鏡 + 緩慢閃爍效果 -->
      <div v-if="isDarkScene" class="dark-bg-flicker absolute inset-0 bg-cover bg-center scale-[1.02] saturate-50" :style="{ backgroundImage: `url(${sceneUrl})` }" />
      <!-- 暗角效果 -->
      <div v-if="isDarkScene" class="dark-vignette absolute inset-0" />
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
      <!-- 教練圖片區域：fixed 定位，底部貼齊對話框上緣（quiz/slides/celebration/interactiveSlide/choice/endingComplete/隱藏海姐場景 時隱藏） -->
      <div v-if="!dialogueImage && !showQuizModal && !showSlidesModal && !showCelebrationModal && !showInteractiveSlideModal && !showChoiceModal && !showEndingComplete && !shouldHideCoach" class="pointer-events-none fixed inset-x-0 z-0 flex items-end justify-center" style="top: 56px; bottom: 160px;">
        <img
          class="h-full w-auto max-w-[85vw] object-contain object-bottom"
          :src="coachUrl"
          alt="教練"
        />
      </div>

      <!-- 圖片模式：可滾動區域顯示圖片，限制最大高度讓對話框始終可見 -->
      <div v-if="dialogueImage" class="relative z-10 mb-4 max-h-[45vh] flex-1 overflow-y-auto px-4 md:max-h-[55vh]">
        <div class="flex min-h-full items-center justify-center py-4">
          <div class="relative">
            <img
              :src="dialogueImage"
              alt="展示圖片"
              class="max-h-[40vh] max-w-full rounded-xl border-2 border-white/30 bg-black/50 p-6 object-contain shadow-2xl md:max-h-[50vh]"
            />
            <!-- 箭頭引導（只在需要下載時顯示） -->
            <template v-if="showSaveHint">
              <div class="absolute -left-12 top-1/2 -translate-y-1/2 text-3xl md:-left-16 md:text-4xl">
                👉
              </div>
              <div class="absolute -left-12 top-1/2 mt-8 -translate-y-1/2 rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg md:-left-16">
                右鍵另存
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- 結局完成畫面 -->
      <div v-if="showEndingComplete && endingCompleteNode" class="flex flex-1 flex-col items-center justify-center px-4">
        <!-- 壞結局特殊畫面 -->
        <div v-if="endingCompleteNode.endingType === 'bad'" class="ending-bad-fade w-full max-w-md rounded-2xl border border-rose-500/30 bg-black/80 px-8 py-10 text-center backdrop-blur-md relative overflow-hidden">
          <!-- 靜態雜訊效果 -->
          <div class="glitch-overlay absolute inset-0 pointer-events-none"></div>

          <!-- 骷髏頭圖示 + 心電圖 -->
          <div class="mb-4 flex flex-col items-center gap-2">
            <div class="text-4xl">{{ endingCompleteNode.icon }}</div>
            <div class="flex justify-center items-center text-rose-500/60">
              <svg class="w-28 h-6" viewBox="0 0 120 30" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M0,15 L30,15 L35,5 L40,25 L45,10 L50,20 L55,15 L120,15" class="heartbeat-line" />
              </svg>
            </div>
          </div>

          <p class="mb-2 text-lg font-semibold text-white/70">壞結局</p>
          <h1 class="mb-2 text-4xl font-bold text-rose-400 glitch-text">
            「{{ endingCompleteNode.title }}」
          </h1>
          <p class="mb-6 text-xl font-bold text-rose-300/80 tracking-widest">燃 燒 殆 盡</p>
          <div class="mx-auto max-w-sm rounded-xl border border-rose-900/50 bg-rose-950/30 px-6 py-4">
            <p class="text-base text-white/90 leading-relaxed">
              「你的身體比你誠實。它替你按下了那個你不敢按的暫停鍵。」
            </p>
          </div>
          <p class="mt-6 text-sm text-white/50 italic">進入章節選擇，將每個關卡刷到完美吧！</p>
          <button
            class="mt-4 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800"
            @click="onEndingComplete"
          >
            再試一次
          </button>
        </div>

        <!-- 普通結局特殊畫面 -->
        <div v-else-if="endingCompleteNode.endingType === 'normal'" class="ending-normal-fade w-full max-w-md rounded-2xl border border-sky-500/30 bg-slate-900/90 px-8 py-10 text-center backdrop-blur-md relative overflow-hidden">
          <!-- 微光效果 -->
          <div class="moon-glow absolute inset-0 pointer-events-none"></div>

          <!-- 月亮圖示 -->
          <div class="mb-4 flex flex-col items-center gap-2">
            <div class="text-5xl moon-float">{{ endingCompleteNode.icon }}</div>
          </div>

          <p class="mb-2 text-lg font-semibold text-white/70">普通結局</p>
          <h1 class="mb-2 text-4xl font-bold text-sky-400">
            「{{ endingCompleteNode.title }}」
          </h1>
          <p class="mb-6 text-xl font-bold text-sky-300/80 tracking-widest">穩 健 前 行</p>
          <div class="mx-auto max-w-sm rounded-xl border border-sky-900/50 bg-sky-950/30 px-6 py-4">
            <p class="text-base text-white/90 leading-relaxed">
              「你已經做得很好了，但你還沒學會這樣告訴自己。」
            </p>
          </div>
          <p class="mt-6 text-sm text-white/50 italic">進入章節選擇，挑戰完美結局吧！</p>
          <button
            class="mt-4 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800"
            @click="onEndingComplete"
          >
            繼續努力
          </button>
        </div>

        <!-- 其他結局畫面（真結局、彩蛋結局） -->
        <div v-else class="w-full max-w-md rounded-2xl border border-white/20 bg-black/80 px-8 py-10 text-center backdrop-blur-md">
          <div class="mb-4 text-6xl">{{ endingCompleteNode.icon }}</div>
          <h1 class="mb-2 text-3xl font-bold text-white">
            {{ endingCompleteNode.endingType === 'hidden' ? '達成彩蛋結局' : '結局' }}
          </h1>
          <p
            class="text-2xl font-bold"
            :class="{
              'text-rose-400': endingCompleteNode.color === 'rose',
              'text-sky-400': endingCompleteNode.color === 'sky',
              'text-emerald-400': endingCompleteNode.color === 'emerald',
              'text-amber-400': endingCompleteNode.color === 'amber',
            }"
          >
            「{{ endingCompleteNode.title }}」
          </p>

          <!-- 彩蛋結局觸發按鈕（完美結局才顯示） -->
          <div v-if="canTriggerHidden" class="mt-6 text-center">
            <p class="mb-4 text-white/60">下班後，你手機收到一封 Email...</p>
            <button
              class="rounded-xl border border-amber-500/50 bg-amber-900/30 px-6 py-3 font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-900/50"
              @click="onTriggerHiddenEnding"
            >
              查看 Email
            </button>
          </div>

          <!-- 返回首頁按鈕（非完美結局） -->
          <button
            v-if="!canTriggerHidden"
            class="mt-6 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800"
            @click="onEndingComplete"
          >
            返回首頁
          </button>
        </div>
      </div>

      <!-- 對話框區域：在底部，內容多時往上長蓋住教練（quiz/slides/celebration/interactiveSlide/choice/endingComplete/passwordInput 時隱藏） -->
      <div v-if="!showQuizModal && !showSlidesModal && !showCelebrationModal && !showInteractiveSlideModal && !showChoiceModal && !showEndingComplete && !showPasswordInput" class="relative z-20 px-3 pb-safe-bottom md:pb-6">
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

      <!-- 密碼輸入對話框 -->
      <div v-if="showPasswordInput && passwordInputNode" class="relative z-20 px-3 pb-safe-bottom md:pb-6">
        <div class="mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur">
          <div class="mb-2 inline-flex items-center rounded-full border border-amber-400/35 bg-amber-400/20 px-3 py-1 text-sm font-black text-amber-200">
            輸入密碼
          </div>
          <div class="min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold">
            <p class="mb-4">{{ passwordInputNode.prompt }}</p>
            <input
              v-model="passwordInput"
              type="text"
              class="mb-3 w-full max-w-md rounded-xl border border-white/20 bg-slate-800 px-4 py-3 text-white placeholder-white/40 focus:border-amber-400/50 focus:outline-none"
              placeholder="輸入密碼..."
              @keyup.enter="onPasswordSubmit"
            />
            <p v-if="passwordError" class="mb-3 text-sm text-rose-400">
              {{ passwordError }}
            </p>
            <button
              class="rounded-xl border border-amber-500/50 bg-amber-900/30 px-6 py-3 font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-900/50"
              @click="onPasswordSubmit"
            >
              確認
            </button>
            <p v-if="passwordInputNode.hint" class="mt-3 text-xs text-white/30">
              {{ passwordInputNode.hint }}
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- 結局成就提示 -->
    <Transition name="achievement">
      <div
        v-if="showAchievement"
        class="fixed right-4 top-16 z-30 rounded-xl border border-white/20 bg-slate-900/95 px-4 py-3 shadow-lg backdrop-blur"
      >
        <div class="flex items-center gap-3">
          <span class="text-2xl">{{ achievementIcon }}</span>
          <div>
            <p class="text-xs text-white/50">恭喜達成成就</p>
            <p class="font-bold text-white">{{ achievementTitle }}</p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Modals -->
    <NameInputModal
      v-if="showNameModal && nameNode"
      :title="nameNode.prompt"
      placeholder="例如：小明"
      :initialValue="player.name"
      @submit="onSubmitName"
      @cancel="backToStart"
    />

    <!-- Day 7 密碼顯示前的名字輸入 -->
    <NameInputModal
      v-if="showDay7NameModal"
      title="在解鎖序號前，請先告訴我你的名字"
      placeholder="輸入你的名字"
      :initialValue="player.name"
      @submit="onDay7NameSubmit"
      @cancel="onDay7NameCancel"
    />

    <SlidesModal
      v-if="showSlidesModal && slidesNode"
      :title="slidesNode.title"
      :slides="slidesNode.slides"
      :mustFinish="slidesNode.mustFinish"
      @close="onSlidesClose"
    />

    <QuizModal v-if="showQuizModal && quizNode" :title="quizNode.title" :questions="quizNode.questions" :chapterId="chapterId" @done="onQuizDone" @cancel="onQuizCancel" />

    <CelebrationModal
      v-if="showCelebrationModal && celebrationNode"
      :playerName="player.name || '你'"
      :chapterTitle="celebrationNode.chapterTitle"
      :reward="chapterId === 7 && sqlPracticeResult?.isPerfect ? { icon: '🔑', title: '獲得隱藏道具！', description: '海克絲的神秘序號', code: generatePassword(player.name) } : undefined"
      @close="onCelebrationClose"
    />

    <InteractiveSlideModal
      v-if="showInteractiveSlideModal && interactiveSlideNode"
      :slideId="interactiveSlideNode.slideId"
      :title="interactiveSlideNode.title"
      :isMusicPlaying="isMusicPlaying"
      @close="onInteractiveSlideClose"
      @cancel="onInteractiveSlideCancel"
      @sqlPracticeComplete="onSqlPracticeComplete"
      @toggleMusic="toggleMusic"
      @switchToEndingMusic="switchToEndingMusic"
    />

    <ChoiceModal
      v-if="showChoiceModal && choiceNode"
      :prompt="choiceNode.prompt"
      :options="choiceNode.options"
      :coachExpression="choiceNode.coachExpression"
      @select="onChoiceSelect"
    />
  </div>
</template>

<style scoped>
.pb-safe-bottom {
  padding-bottom: max(1.5rem, env(safe-area-inset-bottom));
}

/* 成就提示動畫 */
.achievement-enter-active,
.achievement-leave-active {
  transition: all 0.3s ease;
}

.achievement-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.achievement-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

/* 暗黑場景 - 背景緩慢閃爍（像眼睛快閉起來） */
.dark-bg-flicker {
  animation: bg-blink 6s ease-in-out infinite;
}

.dark-vignette {
  background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.85) 100%);
  animation: vignette-blink 6s ease-in-out infinite;
}

@keyframes bg-blink {
  0%, 100% {
    filter: brightness(0.25);
  }
  /* 緩慢變亮一點（像眼睛稍微睜開） */
  40% {
    filter: brightness(0.35);
  }
  50% {
    filter: brightness(0.4);
  }
  60% {
    filter: brightness(0.35);
  }
  /* 緩慢變暗（像眼睛快閉上） */
  80% {
    filter: brightness(0.2);
  }
  90% {
    filter: brightness(0.15);
  }
}

@keyframes vignette-blink {
  0%, 100% {
    opacity: 1;
  }
  /* 眼睛睜開時暗角稍微減輕 */
  50% {
    opacity: 0.7;
  }
  /* 眼睛快閉上時暗角加重 */
  90% {
    opacity: 1.1;
  }
}

/* 壞結局完成畫面動畫 */
.ending-bad-fade {
  animation: bad-fade-in 2s ease-out forwards;
}

@keyframes bad-fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.ending-icon-pulse {
  animation: icon-pulse 3s ease-in-out infinite;
}

@keyframes icon-pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

/* 靜態雜訊效果 */
.glitch-overlay {
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.03) 2px,
    rgba(255, 255, 255, 0.03) 4px
  );
  animation: glitch-noise 0.5s steps(10) infinite;
}

@keyframes glitch-noise {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

/* 心電圖動畫 - 重複播放 */
.heartbeat-line {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw-heartbeat 4s ease-in-out infinite;
}

@keyframes draw-heartbeat {
  0% {
    stroke-dashoffset: 200;
    opacity: 0.3;
  }
  20% {
    opacity: 1;
  }
  50% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  70% {
    opacity: 0.5;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
}

/* 故障文字效果 */
.glitch-text {
  animation: glitch 5s ease-in-out infinite;
}

@keyframes glitch {
  0%, 90%, 100% {
    text-shadow: none;
  }
  92% {
    text-shadow: -2px 0 #ff0040, 2px 0 #00ffff;
  }
  94% {
    text-shadow: 2px 0 #ff0040, -2px 0 #00ffff;
  }
  96% {
    text-shadow: none;
  }
}

/* 普通結局動畫 */
.ending-normal-fade {
  animation: normal-fade-in 2s ease-out forwards;
}

@keyframes normal-fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 月亮微光效果 */
.moon-glow {
  background: radial-gradient(ellipse at 50% 30%, rgba(56, 189, 248, 0.1) 0%, transparent 60%);
  animation: moon-pulse 4s ease-in-out infinite;
}

@keyframes moon-pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* 月亮浮動效果 */
.moon-float {
  animation: moon-float 6s ease-in-out infinite;
}

@keyframes moon-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
</style>
