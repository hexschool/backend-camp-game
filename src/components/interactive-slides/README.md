# 互動式簡報元件指南

這個資料夾存放所有互動式簡報的 Vue 元件。每個簡報都是獨立的 Vue SFC 檔案。

## 目錄結構

```
interactive-slides/
├── README.md              # 本文件
├── GitIntroSlide.vue      # Git Repository 入門
├── GitBranchSlide.vue     # Git Branch 教學（範例）
└── ...
```

## 如何使用

### 1. 在章節中加入互動簡報節點

在 `src/content/chapterX.ts` 的 nodes 陣列中加入：

```typescript
{
  type: 'interactiveSlide',
  slideId: 'git-intro',  // 對應元件的 ID
  title: 'Git 互動實驗室',
  scene: 'normal',
  coachExpression: 'normal',
}
```

### 2. 註冊新的簡報元件

在 `src/components/InteractiveSlideModal.vue` 中的 `slideComponents` 物件加入：

```typescript
const slideComponents: Record<string, ReturnType<typeof defineAsyncComponent>> = {
  'git-intro': defineAsyncComponent(() => import('./interactive-slides/GitIntroSlide.vue')),
  'git-branch': defineAsyncComponent(() => import('./interactive-slides/GitBranchSlide.vue')),
  // 新增更多...
}
```

---

## Gemini Prompt 範本

使用以下 prompt 請 Gemini 生成互動式簡報，然後轉換成 Vue 元件：

```
請幫我生成一個互動式教學簡報，主題是「[你的主題]」。

要求：
1. 使用 Vue 3 Composition API (<script setup lang="ts">)
2. 使用 Tailwind CSS 做樣式
3. 簡報要有多個步驟 (steps)，每個步驟有：
   - title: 標題
   - desc: 說明文字
   - 對應的視覺呈現
4. 包含「上一步」「下一步」按鈕
5. 最後一步要有「完成學習」按鈕，點擊後觸發 emit('complete')
6. 可以包含動畫效果讓教學更生動

結構參考：
- 資料定義放在 <script setup> 裡
- 使用 ref 管理當前步驟
- 使用 computed 取得當前步驟資料
- template 根據步驟資料渲染不同視圖

我會把這個簡報整合到現有的 Vue 專案中，所以：
- 不需要 <!DOCTYPE html> 和 <html> 標籤
- 只需要輸出 .vue 單檔元件格式
- emit('complete') 是唯一需要的事件

教學內容重點：
[在這裡描述你想教的內容]
```

---

## 範例：GitIntroSlide.vue 結構

```vue
<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const emit = defineEmits<{
  (e: 'complete'): void
}>()

// 1. 定義步驟資料
type Step = {
  id: number
  view: 'intro' | 'split' | 'demo'  // 不同視圖類型
  title: string
  desc: string
  // ... 其他步驟專屬資料
}

const STEPS: Step[] = [
  { id: 0, view: 'intro', title: '步驟一', desc: '說明...' },
  { id: 1, view: 'split', title: '步驟二', desc: '說明...' },
  // ...
]

// 2. 狀態管理
const currentStep = ref(0)
const stepData = computed(() => STEPS[currentStep.value])
const isLastStep = computed(() => currentStep.value === STEPS.length - 1)

// 3. 導航方法
function nextStep() {
  if (currentStep.value < STEPS.length - 1) currentStep.value++
}

function prevStep() {
  if (currentStep.value > 0) currentStep.value--
}

function handleComplete() {
  emit('complete')
}
</script>

<template>
  <div class="flex h-full flex-col">
    <!-- Header -->
    <header>...</header>

    <!-- 主要內容區 - 根據 stepData.view 顯示不同視圖 -->
    <main class="flex-1">
      <div v-if="stepData.view === 'intro'">...</div>
      <div v-else-if="stepData.view === 'split'">...</div>
    </main>

    <!-- Footer 控制區 -->
    <footer>
      <div>
        <h3>{{ stepData.title }}</h3>
        <p>{{ stepData.desc }}</p>
      </div>
      <div>
        <button @click="prevStep" :disabled="currentStep === 0">上一步</button>
        <button v-if="!isLastStep" @click="nextStep">下一步</button>
        <button v-else @click="handleComplete">完成學習</button>
      </div>
    </footer>
  </div>
</template>
```

---

## 設計建議

1. **視覺一致性**：使用 Tailwind 的 slate 色系作為主色調
2. **動畫**：善用 CSS animation 和 Vue transition
3. **響應式**：確保在手機和桌機都能正常顯示
4. **互動性**：加入可點擊的元素讓使用者參與
5. **步驟指示**：顯示目前進度（如 Step 3/8）

## 已建立的簡報

| slideId | 檔案名稱 | 主題 |
|---------|----------|------|
| git-intro | GitIntroSlide.vue | Git Repository 基本概念 |
