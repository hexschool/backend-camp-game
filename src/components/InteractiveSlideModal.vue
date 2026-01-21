<script setup lang="ts">
import { computed, defineAsyncComponent, ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  slideId: string
  title: string
  isMusicPlaying?: boolean
}>(), {
  isMusicPlaying: false,
})

export type SqlPracticeResult = {
  score: number
  total: number
  isPerfect: boolean
}

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'cancel'): void
  (e: 'sqlPracticeComplete', result: SqlPracticeResult): void
  (e: 'toggleMusic'): void
  (e: 'switchToEndingMusic'): void
}>()

// === RWD 偵測 ===
const MOBILE_BREAKPOINT = 768 // md breakpoint
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// 動態載入對應的互動簡報元件
const slideComponents: Record<string, ReturnType<typeof defineAsyncComponent>> = {
  'git-intro': defineAsyncComponent(() => import('./interactive-slides/GitIntroSlide.vue')),
  'docker-intro': defineAsyncComponent(() => import('./interactive-slides/DockerIntroSlide.vue')),
  'architecture-intro': defineAsyncComponent(() => import('./interactive-slides/ArchitectureIntroSlide.vue')),
  'static-dynamic': defineAsyncComponent(() => import('./interactive-slides/StaticDynamicSlide.vue')),
  'coach-backend': defineAsyncComponent(() => import('./interactive-slides/CoachBackendSlide.vue')),
  'url-request': defineAsyncComponent(() => import('./interactive-slides/UrlRequestSlide.vue')),
  'network-request': defineAsyncComponent(() => import('./interactive-slides/NetworkRequestSlide.vue')),
  'api-intro': defineAsyncComponent(() => import('./interactive-slides/ApiIntroSlide.vue')),
  'api-demo': defineAsyncComponent(() => import('./interactive-slides/ApiDemoSlide.vue')),
  'drag-quiz': defineAsyncComponent(() => import('./interactive-slides/DragQuizSlide.vue')),
  'drag-sort': defineAsyncComponent(() => import('./interactive-slides/DragSortSlide.vue')),
  'data-flow': defineAsyncComponent(() => import('./interactive-slides/DataFlowSlide.vue')),
  'third-party': defineAsyncComponent(() => import('./interactive-slides/ThirdPartySlide.vue')),
  'database-intro': defineAsyncComponent(() => import('./interactive-slides/DatabaseIntroSlide.vue')),
  'table-design': defineAsyncComponent(() => import('./interactive-slides/TableDesignSlide.vue')),
  'livefit-database': defineAsyncComponent(() => import('./interactive-slides/LivefitDatabaseSlide.vue')),
  'database-access': defineAsyncComponent(() => import('./interactive-slides/DatabaseAccessSlide.vue')),
  'sql-practice': defineAsyncComponent(() => import('./interactive-slides/SqlPracticeSlide.vue')),
  'sql-basics': defineAsyncComponent(() => import('./interactive-slides/SqlBasicsSlide.vue')),
  'video-message': defineAsyncComponent(() => import('./interactive-slides/VideoMessageSlide.vue')),
  // Day 8
  'jwt-intro': defineAsyncComponent(() => import('./interactive-slides/JwtIntroSlide.vue')),
  'jwt-storage': defineAsyncComponent(() => import('./interactive-slides/JwtStorageSlide.vue')),
  // 之後新增更多簡報時，在這裡註冊
}

const SlideComponent = computed(() => {
  return slideComponents[props.slideId] || null
})

// 全螢幕沉浸式簡報（隱藏 Header）
const isFullscreenSlide = computed(() => {
  return ['video-message'].includes(props.slideId)
})

function handleComplete(result?: SqlPracticeResult) {
  // 如果是 SQL 練習，傳遞分數資料
  if (props.slideId === 'sql-practice' && result) {
    emit('sqlPracticeComplete', result)
  }
  emit('close')
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <!-- 全螢幕沉浸式模式 -->
    <div
      v-if="isFullscreenSlide"
      class="relative h-full w-full overflow-hidden bg-black"
    >
      <component
        v-if="SlideComponent"
        :is="SlideComponent"
        :isMobile="isMobile"
        :isMusicPlaying="isMusicPlaying"
        @complete="handleComplete"
        @toggleMusic="emit('toggleMusic')"
        @switchToEndingMusic="emit('switchToEndingMusic')"
      />
    </div>

    <!-- 一般模式（有 Header） -->
    <div
      v-else
      class="relative flex h-[95vh] w-[95vw] max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-100 shadow-2xl"
    >
      <!-- Header -->
      <header class="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
        <h2 class="text-lg font-bold text-slate-800">{{ title }}</h2>
        <button
          type="button"
          class="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          @click="emit('cancel')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </header>

      <!-- 互動簡報內容區 -->
      <main class="flex-1 overflow-y-auto">
        <component
          v-if="SlideComponent"
          :is="SlideComponent"
          :isMobile="isMobile"
          @complete="handleComplete"
        />
        <div v-else class="flex h-full items-center justify-center text-slate-500">
          找不到簡報元件：{{ slideId }}
        </div>
      </main>
    </div>
  </div>
</template>
