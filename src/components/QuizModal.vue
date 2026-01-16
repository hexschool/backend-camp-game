<script setup lang="ts">
import { computed, ref } from 'vue'
import type { QuizQuestion } from '../content/types'

const props = defineProps<{
  title: string
  questions: QuizQuestion[]
  chapterId?: number  // 用於儲存分數到 progressStore
}>()

const emit = defineEmits<{
  (e: 'done', payload: { correctCount: number; total: number; firstAttemptCorrect: number }): void
  (e: 'cancel'): void
}>()

const idx = ref(0)
const selected = ref<string | null>(null)
const submitted = ref(false)
const correctCount = ref(0)  // 最終答對數（重試後）
const firstAttemptCorrect = ref(0)  // 第一次就答對的題數（計分用）
const hasAttempted = ref(false)  // 這題是否已經嘗試過（用於追蹤第一次作答）

const q = computed(() => props.questions[idx.value])
const total = computed(() => props.questions.length)
const isLast = computed(() => idx.value >= props.questions.length - 1)

const isCorrect = computed(() => submitted.value && selected.value === q.value.correctOptionId)

function submit() {
  if (!selected.value) return
  if (submitted.value) return
  submitted.value = true

  const correct = selected.value === q.value.correctOptionId

  // 第一次作答才計入 firstAttemptCorrect
  if (!hasAttempted.value && correct) {
    firstAttemptCorrect.value += 1
  }
  hasAttempted.value = true

  if (correct) correctCount.value += 1
}

// 答錯時重新作答
function retry() {
  selected.value = null
  submitted.value = false
  // hasAttempted 保持 true，因為已經嘗試過了
}

function next() {
  if (!submitted.value) return
  if (isLast.value) {
    emit('done', {
      correctCount: correctCount.value,
      total: total.value,
      firstAttemptCorrect: firstAttemptCorrect.value,  // 第一次就答對的題數
    })
    return
  }
  idx.value += 1
  selected.value = null
  submitted.value = false
  hasAttempted.value = false  // 重置，新的一題
}
</script>

<template>
  <div class="fixed inset-0 z-50 grid place-items-center bg-slate-950/70" role="dialog" aria-modal="true">
    <div class="flex max-h-[90vh] w-[min(760px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-slate-900/15 bg-white/95">
      <header class="flex items-center justify-between gap-2.5 border-b border-slate-900/10 px-4 py-3.5">
        <div class="font-black text-slate-900">{{ title }}</div>
        <div class="text-sm font-extrabold text-slate-500">第 {{ idx + 1 }}/{{ total }} 題</div>
      </header>

      <div class="flex-1 overflow-y-auto px-4 py-4">
        <div class="text-lg font-black text-slate-900">{{ q.prompt }}</div>
        <div class="mt-3 grid gap-2.5">
          <label
            v-for="opt in q.options"
            :key="opt.id"
            class="flex cursor-pointer items-center gap-2.5 rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-3"
            :class="submitted ? 'cursor-default opacity-90' : 'hover:bg-white'"
          >
            <input type="radio" name="quiz" :value="opt.id" v-model="selected" :disabled="submitted" />
            <span class="font-extrabold text-slate-700">{{ opt.label }}</span>
          </label>
        </div>

        <div
          v-if="submitted"
          class="mt-3 rounded-2xl border px-3 py-3"
          :class="
            isCorrect
              ? 'border-emerald-500/25 bg-emerald-500/10'
              : 'border-amber-500/25 bg-amber-500/10'
          "
        >
          <div class="font-black text-slate-900">{{ isCorrect ? '答對了' : '差一點' }}</div>
          <div class="mt-1.5 font-bold leading-7 text-slate-700">{{ q.explanation }}</div>
        </div>
      </div>

      <footer class="flex shrink-0 justify-between border-t border-slate-900/10 px-4 pb-4 pt-3">
        <!-- 取消按鈕 -->
        <button
          class="rounded-xl border border-slate-300 bg-white px-3 py-2 font-bold text-slate-600 hover:bg-slate-50 active:scale-[0.99]"
          type="button"
          @click="emit('cancel')"
        >
          取消測驗
        </button>

        <div class="flex gap-2.5">
        <!-- 提交前顯示「提交」按鈕 -->
        <button
          v-if="!submitted"
          class="rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-55"
          type="button"
          :disabled="!selected"
          @click="submit"
        >
          提交
        </button>
        <!-- 答對後顯示「下一題」按鈕 -->
        <button
          v-else-if="isCorrect"
          class="rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]"
          type="button"
          @click="next"
        >
          {{ isLast ? '完成' : '下一題' }}
        </button>
        <!-- 答錯後顯示「重新作答」按鈕 -->
        <button
          v-else
          class="rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]"
          type="button"
          @click="retry"
        >
          重新作答
        </button>
        </div>
      </footer>
    </div>
  </div>
</template>

