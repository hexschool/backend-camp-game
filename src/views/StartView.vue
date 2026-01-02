<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayerStore } from '../stores/player'
import { useProgressStore } from '../stores/progress'
import { chapters } from '../content/chapters'
import LogoThreeFx from '../components/LogoThreeFx.vue'

const router = useRouter()
const player = usePlayerStore()
const progress = useProgressStore()

const baseUrl = import.meta.env.BASE_URL

onMounted(() => {
  player.loadFromStorage()
  progress.loadFromStorage()
})

const canContinue = computed(() => !!player.name)

// 取得最大章節 ID
const maxChapterId = computed(() => Math.max(...Object.keys(chapters).map(Number)))

// 確保 currentChapter 不超過現有章節
const displayChapter = computed(() => Math.min(progress.currentChapter, maxChapterId.value))

// 是否已全部通關
const isCompleted = computed(() => progress.currentChapter > maxChapterId.value)

function startNew() {
  progress.reset()
  router.push({ name: 'chapter', params: { id: '1' } })
}

function continueGame() {
  // 如果已全部通關，從最後一關開始
  const targetChapter = isCompleted.value ? maxChapterId.value : progress.currentChapter
  router.push({ name: 'chapter', params: { id: String(targetChapter) } })
}

function resetAll() {
  player.clear()
  progress.reset()
}

// 章節選單
const showChapterSelect = ref(false)
const chapterList = computed(() => {
  return Object.values(chapters).map((ch) => ({
    id: ch.id,
    title: ch.title,
    // 已通關 = currentChapter 大於此章節
    completed: progress.currentChapter > ch.id,
  }))
})

function openChapterSelect() {
  showChapterSelect.value = true
}

function closeChapterSelect() {
  showChapterSelect.value = false
}

function selectChapter(id: number) {
  progress.setCurrentChapter(id)
  progress.setNodeIndex(id, 0)
  showChapterSelect.value = false
  router.push({ name: 'chapter', params: { id: String(id) } })
}

function onKeyDown(e: KeyboardEvent) {
  if (showChapterSelect.value && e.key === 'Escape') {
    closeChapterSelect()
    return
  }
  if (e.key === 'Enter') startNew()
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onUnmounted(() => window.removeEventListener('keydown', onKeyDown))
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-slate-950">
    <!-- 背景 -->
    <div
      class="absolute inset-0 animate-bgSlowZoom bg-cover bg-center saturate-95"
      :style="{ backgroundImage: `url(${baseUrl}images/scene/normal.png)` }"
    />

    <!-- 暗角遮罩 - 手機版整體變暗，桌面版左側較暗 -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_30%,transparent_20%,rgba(2,6,23,0.9)_60%)] md:bg-[radial-gradient(ellipse_120%_100%_at_75%_50%,transparent_30%,rgba(2,6,23,0.85)_70%)]"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent md:from-slate-950/90 md:via-transparent md:to-slate-950/40"
    />

    <!-- 角色立繪 - 手機版在上半部（按鈕前裁切），桌面版在右側大圖 -->
    <div class="absolute inset-x-0 bottom-[220px] top-0 flex items-end justify-center overflow-hidden md:bottom-0 md:block" aria-hidden="true">
      <img
        class="pointer-events-none h-auto w-[85vw] max-w-[380px] object-contain object-bottom opacity-80 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] motion-safe:animate-coachBreath md:absolute md:bottom-0 md:right-0 md:h-[85vh] md:max-h-[900px] md:w-auto md:max-w-none md:translate-x-[5%] md:opacity-100"
        :src="`${baseUrl}images/coach/normal.png`"
        alt="教練"
      />
    </div>

    <!-- 主要內容區 -->
    <main class="relative z-10 flex min-h-screen flex-col justify-end px-5 pt-4 md:justify-center md:px-16 md:py-12 lg:px-24" style="padding-bottom: calc(2rem + env(safe-area-inset-bottom, 0px))">
      <div class="w-full max-w-md md:max-w-md">
        <!-- Logo 區塊 -->
        <div class="relative mb-6 inline-block md:mb-10">
          <img
            :src="`${baseUrl}images/logo.png`"
            alt="新人後端生存指南"
            class="block w-[min(320px,80vw)] select-none drop-shadow-[0_18px_60px_rgba(255,255,255,0.14)] md:w-[min(420px,75vw)]"
            draggable="false"
          />
          <!-- 閃爍效果層 -->
          <LogoThreeFx
            class="pointer-events-none absolute inset-0 z-10"
            :sparkleCount="50"
            :padding="40"
          />
          <!-- Logo 光暈 -->
          <div
            class="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_40%_40%,rgba(251,191,36,0.15),transparent_60%),radial-gradient(circle_at_60%_60%,rgba(251,191,36,0.1),transparent_65%)] blur-2xl md:-inset-8"
          />
        </div>

        <!-- 選單區塊 -->
        <nav class="space-y-2.5 md:space-y-3">
          <button
            class="group relative w-full overflow-hidden rounded-xl border border-white/20 bg-slate-900/80 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-amber-400/40 hover:bg-slate-800/80 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-amber-400/50 md:px-5 md:py-4"
            type="button"
            @click="startNew"
          >
            <span class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600" />
            <span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span class="relative flex items-center justify-between">
              <span class="text-base md:text-lg">開始遊戲</span>
              <span class="hidden rounded bg-white/10 px-2 py-0.5 text-xs text-white/60 sm:inline-block">Enter</span>
            </span>
          </button>

          <button
            class="group relative w-full overflow-hidden rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-slate-800/60 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-40 md:px-5 md:py-4"
            type="button"
            :disabled="!canContinue"
            @click="continueGame"
          >
            <span class="absolute left-0 top-0 h-full w-1 bg-white/30" />
            <span class="relative flex items-center justify-between">
              <span class="text-base md:text-lg">
                繼續遊戲
                <span v-if="canContinue" class="ml-2 text-sm font-normal text-white/50">{{ player.name }}</span>
              </span>
              <span v-if="canContinue" class="text-xs text-white/40">{{ isCompleted ? '已通關' : `Day ${displayChapter}` }}</span>
            </span>
          </button>

          <button
            class="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-sky-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sky-400/40 md:px-5"
            type="button"
            @click="openChapterSelect"
          >
            <span class="absolute left-0 top-0 h-full w-1 bg-sky-500/50 opacity-0 transition-opacity group-hover:opacity-100" />
            <span class="relative flex items-center justify-between">
              <span class="text-sm md:text-base">章節選擇</span>
              <span class="text-xs text-white/30">跳關</span>
            </span>
          </button>

          <button
            class="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-rose-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-rose-400/40 md:px-5"
            type="button"
            @click="resetAll"
          >
            <span class="absolute left-0 top-0 h-full w-1 bg-rose-500/50 opacity-0 transition-opacity group-hover:opacity-100" />
            <span class="relative flex items-center justify-between">
              <span class="text-sm md:text-base">刪除存檔</span>
              <span class="hidden text-xs text-white/30 sm:inline-block">⌫</span>
            </span>
          </button>
        </nav>

        <!-- 版本資訊 -->
        <p class="mt-6 text-center text-xs text-white/30 md:mt-8 md:text-left">
          v1.0 · 2025 後端新手生存指南
        </p>
      </div>
    </main>

    <!-- 章節選擇 Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="showChapterSelect"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          @click.self="closeChapterSelect"
        >
          <div class="mx-4 w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl">
            <div class="mb-4 flex items-center justify-between">
              <h2 class="text-lg font-bold text-white">章節選擇</h2>
              <button
                class="rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white"
                @click="closeChapterSelect"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <p class="mb-4 text-sm text-white/50">選擇要跳轉的章節，進度將從該章節開始重新計算。</p>

            <div class="space-y-2">
              <button
                v-for="ch in chapterList"
                :key="ch.id"
                class="group w-full rounded-xl border px-4 py-3 text-left transition-all hover:border-amber-400/40 hover:bg-slate-800"
                :class="ch.completed ? 'border-emerald-500/30 bg-emerald-900/20' : 'border-white/10 bg-slate-800/50'"
                @click="selectChapter(ch.id)"
              >
                <div class="flex items-center justify-between">
                  <span class="flex items-center gap-2">
                    <span v-if="ch.completed" class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="font-semibold text-white">{{ ch.title }}</span>
                  </span>
                  <span class="text-xs" :class="ch.completed ? 'text-emerald-400' : 'text-white/40'">
                    {{ ch.completed ? '已通關' : `Day ${ch.id}` }}
                  </span>
                </div>
              </button>
            </div>

            <p class="mt-4 text-center text-xs text-white/30">按 ESC 關閉</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

