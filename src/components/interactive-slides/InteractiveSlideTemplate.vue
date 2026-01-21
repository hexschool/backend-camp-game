<script setup lang="ts">
/**
 * 互動式簡報共用模版
 * 提供統一的 Header、底部說明區、Footer Controls
 * 內容區域由各簡報透過 slot 自行填入
 */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    // 標題區
    title: string
    subtitle?: string
    icon?: string // emoji 或留空
    // 步驟相關
    totalSteps: number
    currentStep: number
    stepTitle: string
    stepDesc: string
    // 主題色（用於按鈕和進度條）
    themeColor?: 'amber' | 'sky' | 'emerald' | 'purple'
    // 是否可以前往下一步（用於需要完成某些操作才能繼續的情境）
    canGoNext?: boolean
    // 下一步按鈕的提示文字（當 canGoNext 為 false 時顯示）
    nextStepHint?: string
  }>(),
  {
    subtitle: '',
    icon: '',
    themeColor: 'amber',
    canGoNext: true,
    nextStepHint: '',
  }
)

const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'complete'): void
}>()

const isLastStep = computed(() => props.currentStep === props.totalSteps - 1)
const canGoPrev = computed(() => props.currentStep > 0)

// 根據主題色取得對應的 class
const themeClasses = computed(() => {
  const colors = {
    amber: {
      progressActive: 'bg-amber-400',
      progressDone: 'bg-amber-400/50',
      nextBtn: 'from-amber-500 to-orange-500 shadow-amber-500/25 hover:shadow-amber-500/40',
      stepDot: 'bg-amber-400',
      stepDotDone: 'bg-amber-400/50',
    },
    sky: {
      progressActive: 'bg-sky-400',
      progressDone: 'bg-sky-400/50',
      nextBtn: 'from-sky-500 to-blue-500 shadow-sky-500/25 hover:shadow-sky-500/40',
      stepDot: 'bg-sky-400',
      stepDotDone: 'bg-sky-400/50',
    },
    emerald: {
      progressActive: 'bg-emerald-400',
      progressDone: 'bg-emerald-400/50',
      nextBtn: 'from-emerald-500 to-green-500 shadow-emerald-500/25 hover:shadow-emerald-500/40',
      stepDot: 'bg-emerald-400',
      stepDotDone: 'bg-emerald-400/50',
    },
    purple: {
      progressActive: 'bg-purple-400',
      progressDone: 'bg-purple-400/50',
      nextBtn: 'from-purple-500 to-violet-500 shadow-purple-500/25 hover:shadow-purple-500/40',
      stepDot: 'bg-purple-400',
      stepDotDone: 'bg-purple-400/50',
    },
  }
  return colors[props.themeColor]
})

function handlePrev() {
  if (canGoPrev.value) {
    emit('prev')
  }
}

function handleNext() {
  emit('next')
}

function handleComplete() {
  emit('complete')
}
</script>

<template>
  <div class="flex h-full flex-col overflow-hidden bg-slate-950">
    <!-- Header -->
    <div class="relative z-20 flex items-center justify-between gap-3 border-b border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur-xl md:px-6 md:py-4">
      <div class="min-w-0 flex-1">
        <h1 class="flex items-center gap-2 text-lg font-bold text-white md:gap-3 md:text-2xl">
          <span v-if="icon" class="text-2xl md:text-3xl">{{ icon }}</span>
          <slot name="icon" />
          <span class="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{{ title }}</span>
        </h1>
        <p v-if="subtitle" class="mt-0.5 text-xs text-slate-400 md:text-sm">{{ subtitle }}</p>
      </div>
      <!-- Step indicator -->
      <div class="flex items-center gap-3">
        <div class="hidden gap-1.5 md:flex">
          <div
            v-for="i in totalSteps"
            :key="i"
            class="h-2 rounded-full transition-all duration-300"
            :class="
              i - 1 === currentStep
                ? `w-8 ${themeClasses.progressActive}`
                : i - 1 < currentStep
                  ? `w-2 ${themeClasses.progressDone}`
                  : 'w-2 bg-slate-600'
            "
          ></div>
        </div>
        <div class="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-400 md:text-sm">
          {{ currentStep + 1 }} / {{ totalSteps }}
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative flex min-h-0 flex-1 flex-col">
      <!-- 內容區域 slot（可滾動） -->
      <div class="flex-1 overflow-y-auto">
        <slot />
      </div>

      <!-- 底部說明區（固定在內容區底部） -->
      <div class="shrink-0 border-t border-slate-800 bg-slate-900/80 backdrop-blur-xl">
        <div class="mx-auto max-w-4xl px-4 py-4 md:px-6 md:py-5">
          <h3 class="text-base font-bold text-white md:text-lg">{{ stepTitle }}</h3>
          <p class="mt-1 text-sm text-slate-400 md:text-base">{{ stepDesc }}</p>
        </div>
      </div>
    </div>

    <!-- Footer Controls -->
    <div class="relative z-20 border-t border-white/10 bg-slate-900/80 px-4 pb-6 pt-4 backdrop-blur-xl md:px-6 md:py-4">
      <!-- 手機版：提示文字獨立一行（當有提示時） -->
      <div v-if="!canGoNext && nextStepHint" class="mb-3 text-center md:hidden">
        <span class="text-sm text-amber-400 animate-pulse">
          👆 {{ nextStepHint }}
        </span>
      </div>

      <!-- 主要控制區 -->
      <div class="flex items-center justify-between gap-3">
        <button
          :disabled="!canGoPrev"
          class="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-3"
          @click="handlePrev"
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="hidden md:inline">上一步</span>
        </button>

        <!-- Mobile step indicator：當頁數超過 10 時只顯示數字 -->
        <div v-if="totalSteps <= 10" class="flex gap-1 md:hidden">
          <div
            v-for="i in totalSteps"
            :key="i"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="
              i - 1 === currentStep
                ? `w-4 ${themeClasses.stepDot}`
                : i - 1 < currentStep
                  ? `w-1.5 ${themeClasses.stepDotDone}`
                  : 'w-1.5 bg-slate-600'
            "
          ></div>
        </div>
        <!-- 頁數超過 10 時，手機版顯示簡化的進度條 -->
        <div v-else class="md:hidden">
          <div class="h-1.5 w-24 overflow-hidden rounded-full bg-slate-700">
            <div
              class="h-full rounded-full transition-all duration-300"
              :class="themeClasses.stepDot"
              :style="{ width: `${((currentStep + 1) / totalSteps) * 100}%` }"
            ></div>
          </div>
        </div>

        <div v-if="!isLastStep" class="flex items-center gap-3">
          <!-- 提示文字（桌面版：當無法下一步時顯示） -->
          <span v-if="!canGoNext && nextStepHint" class="hidden text-sm text-amber-400 animate-pulse md:inline">
            👆 {{ nextStepHint }}
          </span>
          <button
            :disabled="!canGoNext"
            class="flex items-center gap-2 rounded-xl bg-gradient-to-r px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all md:px-6 md:py-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            :class="themeClasses.nextBtn"
            @click="handleNext"
          >
            <span>下一步</span>
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <button
          v-else
          class="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 md:px-6 md:py-3"
          @click="handleComplete"
        >
          <span>完成學習</span>
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
