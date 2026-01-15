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
  { id: 'git-intro', title: 'Day 2｜Git 互動實驗室：Repository 概念', description: '教導 Git Repository 的基本概念，包含 git init、Working Directory 和 .git 隱藏資料夾' },
  { id: 'architecture-intro', title: 'Day 3｜系統架構入門：前端、後端、資料庫', description: '用電商購物流程說明三層架構，展示前端 → 後端 → 資料庫的資料流向' },
  { id: 'docker-intro', title: 'Day 3｜Docker 互動實驗室：容器化概念', description: '解釋 Docker 解決的問題，用貨櫃比喻容器，展示 LiveFit 的 3 個容器服務' },
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
            互動式簡報列表
          </h1>
          <p class="mt-2 text-slate-400">點擊卡片預覽簡報內容</p>
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
        <div class="grid gap-4 md:grid-cols-2">
          <div
            v-for="slide in slides"
            :key="slide.id"
            class="group cursor-pointer rounded-xl border border-slate-700 bg-slate-800 p-5 transition-all hover:border-blue-500 hover:bg-slate-750"
            @click="openPreview(slide)"
          >
            <div class="mb-2">
              <h3 class="font-bold text-white group-hover:text-blue-400">{{ slide.title }}</h3>
            </div>
            <p class="text-sm text-slate-400">{{ slide.description }}</p>
            <div class="mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"/>
              </svg>
              點擊預覽
            </div>
          </div>

        </div>
      </section>
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
