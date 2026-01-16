<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Slide } from '../content/types'

const props = defineProps<{
  title: string
  slides: Slide[]
  mustFinish: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const idx = ref(0)
const slide = computed(() => props.slides[idx.value])
const isLast = computed(() => idx.value >= props.slides.length - 1)

function prev() {
  idx.value = Math.max(0, idx.value - 1)
}
function next() {
  idx.value = Math.min(props.slides.length - 1, idx.value + 1)
}
function close() {
  if (props.mustFinish && !isLast.value) return
  emit('close')
}
</script>

<template>
  <div class="absolute inset-0 z-60 grid place-items-center bg-slate-950/70" role="dialog" aria-modal="true">
    <div
      class="grid h-[min(720px,calc(100vh-24px))] w-[min(1120px,calc(100vw-24px))] grid-rows-[auto_1fr_auto] overflow-hidden rounded-2xl border border-slate-900/15 bg-amber-50"
    >
      <header class="flex justify-between gap-4 border-b border-slate-900/10 bg-white/60 px-4 py-3.5">
        <div>
          <div class="font-black text-slate-900">{{ title }}</div>
          <div class="mt-0.5 font-extrabold text-slate-700">{{ slide.title }}</div>
          <div v-if="slide.subtitle" class="mt-1 text-xs font-semibold text-slate-600">
            {{ slide.subtitle }}
          </div>
        </div>
        <div class="flex items-center gap-2.5">
          <div class="font-extrabold text-slate-700">步驟 {{ idx + 1 }}/{{ slides.length }}</div>
          <button
            class="rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2 font-extrabold text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            :disabled="mustFinish && !isLast"
            @click="close"
          >
            關閉
          </button>
        </div>
      </header>

      <div class="grid grid-cols-1 gap-3.5 overflow-y-auto p-3.5 md:grid-cols-[1.1fr_1fr]">
        <section>
          <div class="h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5">
            <div class="inline-block rounded-full bg-amber-300/60 px-3 py-1 text-xs font-black text-slate-900">
              互動式簡報
            </div>

            <template v-if="slide.commit">
              <div class="mt-2.5 rounded-2xl border border-slate-900/10 bg-white/85 p-3">
                <div class="flex justify-between gap-2.5">
                  <div class="font-mono text-sm font-black text-slate-900">{{ slide.commit.sha }}</div>
                  <div class="text-sm font-extrabold text-slate-500">{{ slide.commit.when }}</div>
                </div>
                <div class="mt-1.5 font-black text-slate-700">{{ slide.commit.message }}</div>
              </div>

              <div class="mt-3">
                <div class="mb-2 font-black text-slate-900">本次變更檔案</div>
                <div class="grid gap-2">
                  <div
                    v-for="f in slide.commit.files"
                    :key="f.path"
                    class="flex items-center gap-2.5 rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2.5"
                  >
                    <span
                      class="grid h-6 w-7 place-items-center rounded-lg border border-slate-900/10 text-xs font-black"
                      :class="
                        f.change === 'A'
                          ? 'bg-emerald-500/15 text-emerald-800'
                          : f.change === 'M'
                            ? 'bg-blue-500/15 text-blue-700'
                            : 'bg-rose-500/15 text-rose-800'
                      "
                      >{{ f.change }}</span
                    >
                    <span class="font-mono text-xs font-extrabold text-slate-700">{{ f.path }}</span>
                  </div>
                </div>
              </div>
            </template>

            <template v-else>
              <div class="mt-2.5 text-xl font-black text-slate-900">{{ slide.title }}</div>
              <div class="mt-2.5 font-semibold leading-7 text-slate-700">{{ slide.body }}</div>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900"
                  >版本控制</span
                >
                <span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900"
                  >Commit 更新點</span
                >
                <span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900"
                  >看懂改動</span
                >
                <span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900"
                  >回到安全點</span
                >
              </div>
            </template>
          </div>
        </section>

        <section>
          <div class="h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5">
            <div class="font-mono text-sm font-black text-slate-900/75">
              {{ slide.commit ? 'changes.diff' : 'notes.txt' }}
            </div>
            <pre
              class="mt-2.5 h-[calc(100%-34px)] overflow-auto rounded-2xl bg-slate-900/95 p-3 text-[13px] leading-6 text-slate-200"
            ><code>{{ slide.commit ? slide.commit.diffPreview : (slide.body ?? '') }}</code></pre>
          </div>
        </section>
      </div>

      <footer class="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t border-slate-900/10 bg-white/60 px-3.5 py-3">
        <button
          class="justify-self-start rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 font-black text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          :disabled="idx === 0"
          @click="prev"
        >
          上一部
        </button>
        <div class="flex justify-center gap-2">
          <span
            v-for="n in slides.length"
            :key="n"
            class="h-2 w-2 rounded-full bg-slate-900/20"
            :class="n - 1 === idx ? 'bg-amber-500' : ''"
          />
        </div>
        <button
          class="justify-self-end rounded-full border border-amber-500/25 bg-amber-300/80 px-4 py-2 font-black text-slate-900 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          :disabled="isLast"
          @click="next"
        >
          下一部
        </button>
      </footer>
    </div>
  </div>
</template>

