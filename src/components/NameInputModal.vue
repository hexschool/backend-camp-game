<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

const props = defineProps<{
  title: string
  placeholder?: string
  initialValue?: string
}>()

const emit = defineEmits<{
  (e: 'submit', value: string): void
  (e: 'cancel'): void
}>()

const value = ref(props.initialValue ?? '')
watchEffect(() => {
  if (props.initialValue != null && !value.value) value.value = props.initialValue
})

const canSubmit = computed(() => value.value.trim().length > 0)

function onSubmit() {
  if (!canSubmit.value) return
  emit('submit', value.value.trim())
}
</script>

<template>
  <div class="absolute inset-0 z-50 grid place-items-center bg-slate-950/70" role="dialog" aria-modal="true">
    <div
      class="w-[min(520px,calc(100vw-32px))] rounded-2xl border border-slate-900/15 bg-white/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
    >
      <div class="font-extrabold text-slate-900">{{ title }}</div>
      <input
        class="mt-3 w-full rounded-xl border border-slate-900/20 px-3 py-3 text-base outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20"
        type="text"
        :placeholder="placeholder ?? '輸入名字...'"
        v-model="value"
        @keydown.enter="onSubmit"
      />

      <div class="mt-3 flex justify-end gap-2.5">
        <button
          class="rounded-xl border border-slate-900/15 bg-white/80 px-3 py-2 font-bold text-slate-900 hover:bg-white active:scale-[0.99]"
          type="button"
          @click="$emit('cancel')"
        >
          取消
        </button>
        <button
          class="rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          type="button"
          :disabled="!canSubmit"
          @click="onSubmit"
        >
          確定
        </button>
      </div>
    </div>
  </div>
</template>

