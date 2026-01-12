<script setup lang="ts">
/**
 * Git 互動實驗室：同一個屋簷下
 * 這是一個互動式簡報元件，用於教導 Git Repository 的基本概念
 *
 * 使用方式：
 * 1. 在 chapter 的 nodes 裡加入 InteractiveSlideNode
 * 2. slideId 設為 'git-intro'
 *
 * 範例：
 * {
 *   type: 'interactiveSlide',
 *   slideId: 'git-intro',
 *   title: 'Git 互動實驗室',
 *   scene: 'normal',
 *   coachExpression: 'normal',
 * }
 */
import { ref, computed, watch } from 'vue'

// 接收來自 InteractiveSlideModal 的 isMobile prop
defineProps<{
  isMobile?: boolean
}>()

const emit = defineEmits<{
  (e: 'complete'): void
}>()

// === 資料定義 ===

type CommitFile = {
  name: string
  status: 'A' | 'M' | 'D'
  diffOld: Array<{ line: number; text: string; type: string }>
  diffNew: Array<{ line: number; text: string; type: string }>
}

type CommitData = {
  id: string
  hash: string
  msg: string
  files: CommitFile[]
}

const COMMIT_DATA: Record<string, CommitData> = {
  v1: {
    id: 'c1',
    hash: '8a9b2c',
    msg: '初次提交 (Init)',
    files: [
      {
        name: 'index.html',
        status: 'A',
        diffOld: [],
        diffNew: [
          { line: 1, text: '<html>...</html>', type: 'normal' },
          { line: 3, text: '<h1>Hello</h1>', type: 'add' },
        ],
      },
    ],
  },
  v2: {
    id: 'c2',
    hash: 'd4e5f6',
    msg: '修改標題並加入 CSS',
    files: [
      {
        name: 'index.html',
        status: 'M',
        diffOld: [{ line: 3, text: '<h1>Hello</h1>', type: 'del' }],
        diffNew: [{ line: 3, text: '<h1>Hello World</h1>', type: 'add' }],
      },
      {
        name: 'style.css',
        status: 'A',
        diffOld: [],
        diffNew: [{ line: 1, text: 'body { background: #f0f0f0; }', type: 'add' }],
      },
    ],
  },
}

type StepView = 'intro' | 'split'

type Step = {
  id: number
  view: StepView
  title: string
  desc: string
  folderContent?: 'empty' | 'has-git'
  htmlStatus?: string
  cssStatus?: string
  commits?: string[]
  snapshotAnim?: boolean
  highlightRepo?: boolean
}

const STEPS: Step[] = [
  // INTRO PHASE
  {
    id: 0,
    view: 'intro',
    title: '1. 一切的起點',
    desc: '來，看這裡。這是你電腦桌面上的資料夾 `my-project`。現在它只是個普通的空資料夾，什麼魔法都沒有。',
    folderContent: 'empty',
  },
  {
    id: 1,
    view: 'intro',
    title: '2. 賦予魔法 (git init)',
    desc: '接下來，在這個資料夾輸入 `git init` 指令。看到了嗎？Git 偷偷生出一個隱藏資料夾 `.git`。這就是所有版本控制魔法發生的地方！',
    folderContent: 'has-git',
  },
  // SPLIT VIEW PHASE
  {
    id: 2,
    view: 'split',
    title: '3. 開啟透視模式',
    desc: '好，海姐帶你戴上「X 光眼鏡」，把資料夾切開來看：左邊是你工作的地方，右邊是那個隱藏的 `.git` 紀錄區。',
    htmlStatus: 'hidden',
    cssStatus: 'hidden',
    commits: [],
    snapshotAnim: false,
  },
  {
    id: 3,
    view: 'split',
    title: '4. 建立檔案',
    desc: '你在資料夾裡新增了 index.html。它現在是綠色的，代表這是新檔案，還沒建立存檔點。',
    htmlStatus: 'untracked',
    cssStatus: 'hidden',
    commits: [],
    snapshotAnim: false,
  },
  {
    id: 4,
    view: 'split',
    title: '5. 建立第一個存檔點',
    desc: '按下存檔！Git 幫你記住了現在的樣子。看右邊，多了一個存檔點。之後不管怎麼改，你都能回到這一刻。',
    htmlStatus: 'clean',
    cssStatus: 'hidden',
    commits: ['v1'],
    snapshotAnim: true,
  },
  {
    id: 5,
    view: 'split',
    title: '6. 繼續修改',
    desc: '你改了 html（變黃色），又加了 css（變綠色）。這些改動還沒存檔，只是你目前的工作進度。',
    htmlStatus: 'modified',
    cssStatus: 'new',
    commits: ['v1'],
    snapshotAnim: false,
  },
  {
    id: 6,
    view: 'split',
    title: '7. 建立第二個存檔點',
    desc: '再存一次！現在你有兩個存檔點了。想像打遊戲時存檔，之後打輸了可以讀取舊存檔重來。',
    htmlStatus: 'clean',
    cssStatus: 'clean',
    commits: ['v1', 'v2'],
    snapshotAnim: true,
  },
  {
    id: 7,
    view: 'split',
    title: '8. 隨時回到過去',
    desc: '這就是 Git 的魔力！你可以隨時回到任何一個存檔點。改壞了？沒關係，讀取舊存檔就好。試試點擊右邊的存檔點看看！',
    htmlStatus: 'clean',
    cssStatus: 'clean',
    commits: ['v1', 'v2'],
    snapshotAnim: false,
    highlightRepo: true,
  },
]

// === 狀態 ===

const currentStep = ref(0)
const viewingCommit = ref<string | null>(null)
const animating = ref(false)
const diffFileIdx = ref(0)

// 手機版 Tab 切換：'working' = 工作區, 'git' = .git 紀錄區
const mobileTab = ref<'working' | 'git'>('working')

const stepData = computed(() => STEPS[currentStep.value])
const totalSteps = STEPS.length
const isLastStep = computed(() => currentStep.value === totalSteps - 1)

// 監聽步驟變化，觸發動畫
watch(currentStep, (newVal) => {
  const step = STEPS[newVal]
  if (step.snapshotAnim) {
    animating.value = true
    setTimeout(() => (animating.value = false), 1000)
  }
})

// === 方法 ===

function nextStep() {
  if (currentStep.value < totalSteps - 1) {
    currentStep.value++
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

function getCommit(key: string) {
  return COMMIT_DATA[key]
}

function openDiffModal(commitKey: string) {
  viewingCommit.value = commitKey
  diffFileIdx.value = 0
}

function closeDiffModal() {
  viewingCommit.value = null
}

function handleComplete() {
  emit('complete')
}

// 檔案卡片顏色
function getFileCardColors(status: string) {
  if (status === 'untracked' || status === 'new') return { border: 'border-green-400', bg: 'bg-white' }
  if (status === 'modified') return { border: 'border-yellow-400', bg: 'bg-yellow-50' }
  return { border: 'border-slate-200', bg: 'bg-white' }
}

function getFileBadge(status: string) {
  if (status === 'untracked' || status === 'new') return { text: 'NEW', color: 'bg-green-500' }
  if (status === 'modified') return { text: 'MOD', color: 'bg-yellow-500' }
  return null
}
</script>

<template>
  <div class="flex h-full flex-col bg-slate-100">
    <!-- Header -->
    <div class="flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 md:px-6 md:py-4">
      <div class="min-w-0 flex-1">
        <h1 class="flex items-center gap-2 text-lg font-bold text-slate-800 md:gap-3 md:text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 text-yellow-500 md:h-7 md:w-7" viewBox="0 0 256 256" fill="currentColor">
            <path d="M245,110.64,145.36,11a28,28,0,0,0-39.6,0L95.12,21.67l25,25a28,28,0,0,1,35.73,35.73l24.1,24.1a28,28,0,1,1-16.16,15.27l-22.5-22.5V176a28,28,0,1,1-24-1.26V99.27a28,28,0,0,1-15.27-37.09L77,37.21,11,103.12a28,28,0,0,0,0,39.6l99.64,99.64a28,28,0,0,0,39.6,0l94.72-94.72A28,28,0,0,0,245,110.64Z"/>
          </svg>
          <span class="truncate">Git 互動實驗室</span>
        </h1>
        <p class="mt-1 hidden text-sm text-slate-500 md:block">
          {{ stepData.view === 'intro' ? '前導觀念：什麼是 Repository？' : '觀念修正：同一個資料夾，不同的時空' }}
        </p>
      </div>
      <div class="shrink-0 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-500 shadow-sm md:px-4 md:py-2 md:text-sm">
        Step {{ currentStep + 1 }}/{{ totalSteps }}
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative flex flex-1 flex-col overflow-hidden">
      <!-- Folder Tab -->
      <div class="absolute left-0 top-0 z-20 flex items-center gap-2 rounded-br-xl bg-slate-300 px-6 py-1 text-sm font-bold text-slate-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
          <path d="M245,110.64,145.36,11a28,28,0,0,0-39.6,0L95.12,21.67l25,25a28,28,0,0,1,35.73,35.73l24.1,24.1a28,28,0,1,1-16.16,15.27l-22.5-22.5V176a28,28,0,1,1-24-1.26V99.27a28,28,0,0,1-15.27-37.09L77,37.21,11,103.12a28,28,0,0,0,0,39.6l99.64,99.64a28,28,0,0,0,39.6,0l94.72-94.72A28,28,0,0,0,245,110.64Z"/>
        </svg>
        ~/my-project
      </div>

      <!-- INTRO VIEW -->
      <div v-if="stepData.view === 'intro'" class="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-slate-50">
        <!-- 網格背景 -->
        <div class="absolute inset-0 opacity-20" style="background-size: 40px 40px; background-image: radial-gradient(circle, #000 1px, transparent 1px)"></div>

        <div class="relative z-10 flex flex-col items-center">
          <!-- 資料夾視覺 -->
          <div class="relative flex h-56 w-64 items-center justify-center rounded-t-lg rounded-b-2xl border-4 border-yellow-500 bg-yellow-400 shadow-2xl">
            <div class="absolute -top-6 left-0 h-8 w-24 rounded-t-lg bg-yellow-500"></div>

            <!-- .git 隱藏資料夾 -->
            <div v-if="stepData.folderContent === 'has-git'" class="absolute bottom-4 right-4">
              <div class="flex h-16 w-20 flex-col items-center justify-center rounded-lg border-2 border-slate-500 bg-slate-700/80 shadow-lg backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M245,110.64,145.36,11a28,28,0,0,0-39.6,0L95.12,21.67l25,25a28,28,0,0,1,35.73,35.73l24.1,24.1a28,28,0,1,1-16.16,15.27l-22.5-22.5V176a28,28,0,1,1-24-1.26V99.27a28,28,0,0,1-15.27-37.09L77,37.21,11,103.12a28,28,0,0,0,0,39.6l99.64,99.64a28,28,0,0,0,39.6,0l94.72-94.72A28,28,0,0,0,245,110.64Z"/>
                </svg>
                <span class="mt-1 font-mono text-[10px] text-white">.git</span>
              </div>
              <div class="absolute -right-8 -top-8 animate-bounce rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-md">
                Hidden!
              </div>
            </div>

            <div v-if="stepData.folderContent === 'empty'" class="text-xl font-bold text-yellow-600/50">Empty Folder</div>
            <div v-else class="text-xl font-bold text-yellow-700">Git Project</div>
          </div>

          <div class="mt-6 rounded-lg border border-slate-200 bg-white px-4 py-2 font-mono text-slate-400 shadow-sm">
            ~/Desktop/my-project
          </div>
        </div>
      </div>

      <!-- SPLIT VIEW -->
      <div v-else class="mt-8 flex flex-1 flex-col md:flex-row">
        <!-- 手機版 Tab 切換按鈕 -->
        <div v-if="isMobile" class="flex border-b border-slate-200 bg-white">
          <button
            class="flex-1 px-4 py-3 text-sm font-bold transition-colors"
            :class="mobileTab === 'working' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-slate-500'"
            @click="mobileTab = 'working'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 inline h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
              <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/>
            </svg>
            工作區
          </button>
          <button
            class="flex-1 px-4 py-3 text-sm font-bold transition-colors"
            :class="mobileTab === 'git' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-slate-500'"
            @click="mobileTab = 'git'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1.5 inline h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
              <path d="M245,110.64,145.36,11a28,28,0,0,0-39.6,0L95.12,21.67l25,25a28,28,0,0,1,35.73,35.73l24.1,24.1a28,28,0,1,1-16.16,15.27l-22.5-22.5V176a28,28,0,1,1-24-1.26V99.27a28,28,0,0,1-15.27-37.09L77,37.21,11,103.12a28,28,0,0,0,0,39.6l99.64,99.64a28,28,0,0,0,39.6,0l94.72-94.72A28,28,0,0,0,245,110.64Z"/>
            </svg>
            .git 紀錄
            <span v-if="stepData.commits && stepData.commits.length > 0" class="ml-1 rounded-full bg-blue-500 px-1.5 py-0.5 text-[10px] text-white">
              {{ stepData.commits.length }}
            </span>
          </button>
        </div>

        <!-- LEFT: Working Directory (桌面版永遠顯示，手機版只在 working tab 時顯示) -->
        <div
          v-show="!isMobile || mobileTab === 'working'"
          class="relative flex-1 border-slate-200 bg-slate-50 p-4 md:w-7/12 md:flex-none md:border-r-2 md:border-dashed md:p-8"
        >
          <h3 class="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 md:mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
              <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/>
            </svg>
            目前檔案 (Working Directory)
          </h3>

          <div class="grid grid-cols-2 gap-4 p-2 md:gap-6 md:p-4">
            <!-- index.html -->
            <div v-if="stepData.htmlStatus !== 'hidden'" class="group relative">
              <div
                class="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 rounded-xl border-2 shadow-sm transition-all hover:shadow-md"
                :class="[getFileCardColors(stepData.htmlStatus!).border, getFileCardColors(stepData.htmlStatus!).bg]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-orange-500" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-40-60a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V164H104a8,8,0,0,1,0-16h16V132a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,156Z"/>
                </svg>
                <span class="text-sm font-bold text-slate-700">index.html</span>
                <span
                  v-if="getFileBadge(stepData.htmlStatus!)"
                  class="absolute -right-2 -top-2 rounded px-1.5 py-0.5 text-[10px] font-bold text-white shadow"
                  :class="getFileBadge(stepData.htmlStatus!)!.color"
                >
                  {{ getFileBadge(stepData.htmlStatus!)!.text }}
                </span>
              </div>
              <!-- Snapshot animation -->
              <div
                v-if="animating && (stepData.htmlStatus === 'clean' || stepData.htmlStatus === 'modified')"
                class="pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-xl border-2 border-slate-300 bg-slate-200"
                style="animation: snapshot-fly 1s ease-out forwards"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-slate-500" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.72,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"/>
                </svg>
              </div>
            </div>

            <!-- style.css -->
            <div v-if="stepData.cssStatus !== 'hidden'" class="group relative">
              <div
                class="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 rounded-xl border-2 shadow-sm transition-all hover:shadow-md"
                :class="[getFileCardColors(stepData.cssStatus!).border, getFileCardColors(stepData.cssStatus!).bg]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-500" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/>
                </svg>
                <span class="text-sm font-bold text-slate-700">style.css</span>
                <span
                  v-if="getFileBadge(stepData.cssStatus!)"
                  class="absolute -right-2 -top-2 rounded px-1.5 py-0.5 text-[10px] font-bold text-white shadow"
                  :class="getFileBadge(stepData.cssStatus!)!.color"
                >
                  {{ getFileBadge(stepData.cssStatus!)!.text }}
                </span>
              </div>
              <!-- Snapshot animation -->
              <div
                v-if="animating && (stepData.cssStatus === 'clean' || stepData.cssStatus === 'new')"
                class="pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-xl border-2 border-slate-300 bg-slate-200"
                style="animation: snapshot-fly 1s ease-out forwards"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-slate-500" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.72,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="absolute bottom-4 left-4 hidden max-w-xs text-sm leading-relaxed text-slate-400 md:bottom-6 md:left-8 md:block">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 inline h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"/>
            </svg>
            這是透視圖：實際上檔案就在資料夾裡，哪兒都沒去。
          </div>
        </div>

        <!-- RIGHT: .git Repository (桌面版永遠顯示，手機版只在 git tab 時顯示) -->
        <div
          v-show="!isMobile || mobileTab === 'git'"
          class="relative flex flex-1 flex-col p-4 text-slate-300 transition-colors duration-500 md:w-5/12 md:flex-none md:p-8"
          :class="stepData.highlightRepo ? 'bg-slate-700' : 'bg-slate-800'"
        >
          <div class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

          <h3 class="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
              <path d="M245,110.64,145.36,11a28,28,0,0,0-39.6,0L95.12,21.67l25,25a28,28,0,0,1,35.73,35.73l24.1,24.1a28,28,0,1,1-16.16,15.27l-22.5-22.5V176a28,28,0,1,1-24-1.26V99.27a28,28,0,0,1-15.27-37.09L77,37.21,11,103.12a28,28,0,0,0,0,39.6l99.64,99.64a28,28,0,0,0,39.6,0l94.72-94.72A28,28,0,0,0,245,110.64Z"/>
            </svg>
            .git 隱藏資料夾 (History)
          </h3>

          <div class="relative flex-1 overflow-y-auto pr-2">
            <!-- Timeline line -->
            <div class="absolute bottom-4 left-[19px] top-4 w-0.5 bg-slate-600"></div>

            <div class="relative space-y-6">
              <div v-if="!stepData.commits || stepData.commits.length === 0" class="mt-10 text-center text-sm italic text-slate-600">
                尚無紀錄...
              </div>

              <div
                v-for="(commitKey, index) in stepData.commits"
                :key="getCommit(commitKey).id"
                class="group relative flex cursor-pointer items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-3 transition-all hover:border-slate-500 hover:bg-slate-700"
                :class="{
                  'border-yellow-400 bg-slate-700 ring-1 ring-yellow-400': viewingCommit === commitKey,
                  'animate-commit-glow': stepData.highlightRepo && !viewingCommit
                }"
                @click="openDiffModal(commitKey)"
              >
                <div
                  class="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-slate-900 font-mono text-xs font-bold text-blue-400 shadow-lg shadow-blue-900/50"
                  :class="{ 'animate-pulse-ring': stepData.highlightRepo && !viewingCommit }"
                >
                  {{ getCommit(commitKey).hash }}
                </div>
                <div class="min-w-0 flex-1 pt-1">
                  <div class="mb-1 font-mono text-xs text-slate-500">
                    {{ index === 0 ? 'Root Commit' : 'Commit #' + (index + 1) }}
                  </div>
                  <div class="truncate text-sm font-bold text-slate-200 transition-colors group-hover:text-white">
                    {{ getCommit(commitKey).msg }}
                  </div>
                </div>
                <div class="pt-2 text-slate-600 group-hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Controls -->
    <div class="z-20 mt-auto flex flex-col gap-3 border-t border-slate-200 bg-white p-4 md:flex-row md:items-center md:justify-between md:gap-0 md:p-6">
      <div class="max-w-xl">
        <h3 class="mb-1 text-base font-bold text-slate-800 md:text-lg">{{ stepData.title }}</h3>
        <p class="text-sm text-slate-500 md:text-base">{{ stepData.desc }}</p>
      </div>
      <div class="flex w-full gap-2 md:w-auto md:gap-3">
        <button
          :disabled="currentStep === 0"
          class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50 md:flex-none md:px-5 md:text-base"
          @click="prevStep"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"/>
          </svg>
          上一步
        </button>
        <button
          v-if="!isLastStep"
          class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 hover:bg-blue-700 md:flex-none md:px-6 md:text-base"
          @click="nextStep"
        >
          下一步
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69l-58.35-58.34a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
          </svg>
        </button>
        <button
          v-else
          class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-200 transition-all hover:-translate-y-0.5 hover:bg-green-700 md:flex-none md:px-6 md:text-base"
          @click="handleComplete"
        >
          完成學習
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor">
            <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Diff Modal -->
    <Teleport to="body">
      <div
        v-if="viewingCommit"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        @click="closeDiffModal"
      >
        <div class="flex h-[500px] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" @click.stop>
          <!-- Modal Header -->
          <div class="flex items-center justify-between border-b border-slate-100 bg-slate-50 p-4">
            <div>
              <div class="text-xs font-bold uppercase text-slate-500">Commit {{ getCommit(viewingCommit).hash }}</div>
              <div class="font-bold text-slate-800">{{ getCommit(viewingCommit).msg }}</div>
            </div>
            <button class="flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-200" @click="closeDiffModal">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 256 256" fill="currentColor">
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
              </svg>
            </button>
          </div>

          <div class="flex flex-1 overflow-hidden">
            <!-- File List -->
            <div class="w-64 space-y-1 border-r border-slate-200 bg-slate-50 p-2">
              <button
                v-for="(f, i) in getCommit(viewingCommit).files"
                :key="i"
                class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium"
                :class="i === diffFileIdx ? 'bg-white text-blue-600 shadow' : 'text-slate-600 hover:bg-slate-200'"
                @click="diffFileIdx = i"
              >
                <svg v-if="f.name.endsWith('.css')" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Z"/>
                </svg>
                {{ f.name }}
              </button>
            </div>

            <!-- Diff Content -->
            <div class="flex flex-1 flex-col">
              <div class="flex justify-between border-b border-slate-100 bg-slate-50/50 p-3 font-mono text-sm text-slate-500">
                <span>{{ getCommit(viewingCommit).files[diffFileIdx].name }}</span>
                <span class="text-xs">Diff View</span>
              </div>
              <div class="flex-1 overflow-auto bg-white p-4 font-mono text-sm">
                <div
                  v-if="getCommit(viewingCommit).files[diffFileIdx].diffOld.length === 0 && getCommit(viewingCommit).files[diffFileIdx].diffNew.length > 0"
                  class="mb-2 italic text-slate-400"
                >
                  // New File Created
                </div>

                <div
                  v-for="(line, k) in getCommit(viewingCommit).files[diffFileIdx].diffOld"
                  :key="'old-' + k"
                  class="mb-0.5 flex border-l-2 border-red-400 bg-red-50 px-2 py-0.5 text-red-800"
                >
                  <span class="w-6 select-none opacity-50">-</span>{{ line.text }}
                </div>

                <div
                  v-for="(line, k) in getCommit(viewingCommit).files[diffFileIdx].diffNew"
                  :key="'new-' + k"
                  class="mb-0.5 flex border-l-2 border-green-400 bg-green-50 px-2 py-0.5 text-green-800"
                >
                  <span class="w-6 select-none opacity-50">+</span>{{ line.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
@keyframes snapshot-fly {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(150px, -20px) scale(0.8);
    opacity: 0.6;
  }
  100% {
    transform: translate(300px, 0) scale(0);
    opacity: 0;
  }
}

@keyframes commit-glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(250, 204, 21, 0.3);
    border-color: rgb(250, 204, 21);
  }
  50% {
    box-shadow: 0 0 20px rgba(250, 204, 21, 0.6), 0 0 30px rgba(250, 204, 21, 0.3);
    border-color: rgb(250, 204, 21);
  }
}

@keyframes pulse-ring {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
  }
}

.animate-commit-glow {
  animation: commit-glow 1.5s ease-in-out infinite;
}

.animate-pulse-ring {
  animation: pulse-ring 1.5s ease-in-out infinite;
}
</style>
