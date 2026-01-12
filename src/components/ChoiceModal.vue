<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ChoiceOption } from '../content/types'

const props = defineProps<{
  prompt: string
  options: ChoiceOption[]
  /** 提問時的表情（預設 normal） */
  coachExpression?: string
}>()

const emit = defineEmits<{
  (e: 'select', option: ChoiceOption): void
}>()

const selectedOption = ref<ChoiceOption | null>(null)
const selectedIndex = ref<number | null>(null)
const showResponse = ref(false)

// 根據狀態決定顯示的教練表情
const currentExpression = computed(() => {
  if (showResponse.value && selectedOption.value) {
    return selectedOption.value.responseExpression || 'normal'
  }
  return props.coachExpression || 'normal'
})

const coachUrl = computed(() => `${import.meta.env.BASE_URL}images/coach/${currentExpression.value}.png`)

// 是否答對
const isCorrect = computed(() => selectedOption.value?.isCorrect === true)

function handleSelect(option: ChoiceOption, index: number) {
  selectedOption.value = option
  selectedIndex.value = index
  showResponse.value = true
}

function handleRetry() {
  // 重新作答
  selectedOption.value = null
  selectedIndex.value = null
  showResponse.value = false
}

function handleContinue() {
  if (selectedOption.value && isCorrect.value) {
    emit('select', selectedOption.value)
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <div class="relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl md:flex-row">
      <!-- 左側：海克絲圖片 -->
      <div class="hidden w-64 shrink-0 flex-col items-center justify-center border-r border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 p-6 md:flex">
        <img
          :src="coachUrl"
          alt="海克絲"
          class="h-auto max-h-[300px] w-full object-contain transition-all duration-300"
        />
        <div class="mt-4 text-center">
          <span class="inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/20 px-3 py-1 text-sm font-black text-amber-100">
            海克絲
          </span>
        </div>
      </div>

      <!-- 右側：內容 -->
      <div class="flex flex-1 flex-col">
        <!-- Header -->
        <header class="border-b border-slate-700 bg-slate-800 px-6 py-4">
          <div class="flex items-center gap-3">
            <!-- 手機版顯示小頭像 -->
            <img
              :src="coachUrl"
              alt="海克絲"
              class="h-12 w-12 rounded-full border-2 border-amber-400/50 object-cover md:hidden"
            />
            <div>
              <h2 class="text-lg font-bold text-white">海克絲的提問</h2>
              <p class="text-xs text-slate-400">選擇你認為正確的答案</p>
            </div>
          </div>
        </header>

        <!-- Content -->
        <main class="flex-1 overflow-y-auto p-6">
          <!-- 問題 -->
          <div class="mb-6 rounded-xl border-2 border-amber-400/50 bg-gradient-to-br from-amber-900/30 to-orange-900/20 p-4">
            <p class="text-lg font-medium leading-relaxed text-amber-50">{{ prompt }}</p>
          </div>

          <!-- 選項（尚未選擇時顯示） -->
          <div v-if="!showResponse" class="space-y-3">
            <button
              v-for="(option, index) in options"
              :key="option.id"
              class="flex w-full items-center gap-3 rounded-xl border-2 border-slate-600 bg-slate-800 p-4 text-left transition-all hover:border-amber-400 hover:bg-slate-700"
              @click="handleSelect(option, index)"
            >
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-500 bg-slate-700 text-sm font-bold text-slate-300">
                {{ index + 1 }}
              </span>
              <span class="text-white">{{ option.label }}</span>
            </button>
          </div>

          <!-- 回應（選擇後顯示） -->
          <div v-else class="space-y-4">
            <!-- 玩家選擇 -->
            <div class="rounded-xl border-2 bg-slate-800 p-4" :class="selectedOption?.isCorrect ? 'border-green-500' : 'border-orange-500'">
              <div class="mb-2 flex items-center gap-2">
                <span class="text-sm text-slate-400">你的回答</span>
                <span v-if="selectedOption?.isCorrect" class="rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-bold text-green-400">正確！</span>
                <span v-else class="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-bold text-orange-400">不太對喔</span>
              </div>
              <div class="flex items-center gap-3">
                <span
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold"
                  :class="selectedOption?.isCorrect ? 'border-green-500 bg-green-500/20 text-green-400' : 'border-orange-500 bg-orange-500/20 text-orange-400'"
                >
                  {{ selectedIndex !== null ? selectedIndex + 1 : '' }}
                </span>
                <p class="text-white">{{ selectedOption?.label }}</p>
              </div>
            </div>

            <!-- 海克絲回應 -->
            <div class="rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-4">
              <div class="mb-2 flex items-center gap-2">
                <span class="inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/20 px-2 py-0.5 text-xs font-black text-amber-100">海克絲</span>
              </div>
              <p class="leading-relaxed text-white">{{ selectedOption?.response }}</p>
            </div>
          </div>
        </main>

        <!-- Footer -->
        <footer v-if="showResponse" class="border-t border-slate-700 bg-slate-800 px-6 py-4">
          <!-- 答對：顯示繼續按鈕 -->
          <button
            v-if="isCorrect"
            class="w-full rounded-xl border border-amber-300/35 bg-amber-300/20 py-3 font-bold text-white transition-all hover:bg-amber-300/30 active:scale-[0.99]"
            @click="handleContinue"
          >
            繼續
          </button>
          <!-- 答錯：顯示重新作答按鈕 -->
          <button
            v-else
            class="w-full rounded-xl border border-orange-400/35 bg-orange-400/20 py-3 font-bold text-white transition-all hover:bg-orange-400/30 active:scale-[0.99]"
            @click="handleRetry"
          >
            再想想看
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>
