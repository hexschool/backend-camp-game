<script setup lang="ts">
/**
 * 開發者金手指頁面
 * 可以直接預覽各種互動式簡報，不用跑完整遊戲流程
 *
 * 訪問方式：http://localhost:5173/dev (開發環境)
 */
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InteractiveSlideModal from '../components/InteractiveSlideModal.vue'

const router = useRouter()

// 可用的互動簡報列表
const slides = [
  { id: 'git-intro', title: 'Git 互動實驗室：Repository 概念', description: '教導 Git Repository 的基本概念，包含 git init、Working Directory 和 .git 隱藏資料夾' },
  // 之後新增更多簡報時，在這裡加入
  // { id: 'git-branch', title: 'Git 分支教學', description: '...' },
]

// 當前預覽的簡報
const previewSlide = ref<{ id: string; title: string } | null>(null)

function openPreview(slide: { id: string; title: string }) {
  previewSlide.value = slide
}

function closePreview() {
  previewSlide.value = null
}

function backToStart() {
  router.push({ name: 'start' })
}
</script>

<template>
  <div class="min-h-screen bg-slate-900 p-8">
    <!-- Header -->
    <div class="mx-auto max-w-4xl">
      <div class="mb-8 flex items-center justify-between">
        <div>
          <h1 class="flex items-center gap-3 text-2xl font-bold text-white">
            <span class="rounded bg-amber-500 px-2 py-1 text-sm">DEV</span>
            開發者金手指
          </h1>
          <p class="mt-2 text-slate-400">直接預覽互動式簡報，不用跑完整遊戲流程</p>
        </div>
        <button
          class="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700"
          @click="backToStart"
        >
          返回遊戲
        </button>
      </div>

      <!-- 互動簡報列表 -->
      <section class="mb-8">
        <h2 class="mb-4 flex items-center gap-2 text-lg font-bold text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 256 256" fill="currentColor">
            <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"/>
          </svg>
          互動式簡報
        </h2>

        <div class="grid gap-4 md:grid-cols-2">
          <div
            v-for="slide in slides"
            :key="slide.id"
            class="group cursor-pointer rounded-xl border border-slate-700 bg-slate-800 p-5 transition-all hover:border-blue-500 hover:bg-slate-750"
            @click="openPreview(slide)"
          >
            <div class="mb-2 flex items-start justify-between">
              <h3 class="font-bold text-white group-hover:text-blue-400">{{ slide.title }}</h3>
              <span class="rounded bg-slate-700 px-2 py-0.5 font-mono text-xs text-slate-400">{{ slide.id }}</span>
            </div>
            <p class="text-sm text-slate-400">{{ slide.description }}</p>
            <div class="mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"/>
              </svg>
              點擊預覽
            </div>
          </div>

          <!-- 新增簡報提示卡 -->
          <div class="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 p-5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mb-2 h-8 w-8 text-slate-600" viewBox="0 0 256 256" fill="currentColor">
              <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/>
            </svg>
            <p class="text-sm text-slate-500">新增更多簡報</p>
            <p class="mt-1 text-xs text-slate-600">在 interactive-slides/ 資料夾</p>
          </div>
        </div>
      </section>

      <!-- 使用說明 -->
      <section class="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
        <h2 class="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"/>
          </svg>
          如何新增互動簡報
        </h2>
        <ol class="space-y-2 text-sm text-slate-300">
          <li class="flex gap-2">
            <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">1</span>
            <span>在 <code class="rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs">src/components/interactive-slides/</code> 建立新的 Vue 元件</span>
          </li>
          <li class="flex gap-2">
            <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">2</span>
            <span>在 <code class="rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs">InteractiveSlideModal.vue</code> 的 slideComponents 註冊</span>
          </li>
          <li class="flex gap-2">
            <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">3</span>
            <span>在本頁的 slides 陣列加入簡報資訊，即可在這裡預覽</span>
          </li>
          <li class="flex gap-2">
            <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">4</span>
            <span>在章節的 nodes 裡加入 <code class="rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs">type: 'interactiveSlide'</code> 節點</span>
          </li>
        </ol>
      </section>

      <!-- 快捷連結 -->
      <div class="mt-6 flex flex-wrap gap-3 text-sm">
        <a
          href="https://github.com/hexschool/backend-camp-game"
          target="_blank"
          class="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
            <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.55a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.55a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"/>
          </svg>
          GitHub Repo
        </a>
        <span class="flex items-center gap-1.5 rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-slate-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h56A8,8,0,0,1,192,128Z"/>
          </svg>
          此頁面僅在開發環境顯示
        </span>
      </div>
    </div>

    <!-- 簡報預覽 Modal -->
    <InteractiveSlideModal
      v-if="previewSlide"
      :slideId="previewSlide.id"
      :title="previewSlide.title"
      @close="closePreview"
    />
  </div>
</template>
