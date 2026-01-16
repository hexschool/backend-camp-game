export type Speaker = '海克絲' | '旁白' | '你'

export type DialogueNode = {
  type: 'dialogue'
  speaker: Speaker
  text: string
  scene: string
  coachExpression: string
  image?: string
  showSaveHint?: boolean
}

export type InputNameNode = {
  type: 'inputName'
  prompt: string
  scene: string
  coachExpression: string
}

export type SlideCommit = {
  sha: string
  message: string
  when: string
  files: Array<{ path: string; change: 'A' | 'M' | 'D' }>
  diffPreview: string
}

export type Slide = {
  title: string
  subtitle?: string
  body?: string
  commit?: SlideCommit
}

export type SlidesNode = {
  type: 'slides'
  title: string
  slides: Slide[]
  scene: string
  coachExpression: string
  mustFinish: true
}

export type QuizQuestion = {
  id: string
  prompt: string
  options: Array<{ id: string; label: string }>
  correctOptionId: string
  explanation: string
}

export type QuizNode = {
  type: 'quiz'
  title: string
  questions: QuizQuestion[]
  scene: string
  coachExpression: string
}

export type CelebrationNode = {
  type: 'celebration'
  chapterTitle: string
  scene: string
  coachExpression: string
}

// 密碼輸入節點 - 用於彩蛋結局輸入密碼
export type PasswordInputNode = {
  type: 'passwordInput'
  /** 輸入提示文字 */
  prompt: string
  /** 提示訊息 */
  hint?: string
  scene: string
  coachExpression: string
}

// 結局完成節點 - 顯示結局完成畫面
export type EndingCompleteNode = {
  type: 'endingComplete'
  /** 結局類型 */
  endingType: 'bad' | 'normal' | 'true' | 'hidden'
  /** 結局標題 */
  title: string
  /** 結局圖示 */
  icon: string
  /** 顏色主題 */
  color: 'rose' | 'sky' | 'emerald' | 'amber'
  /** 是否可以觸發彩蛋結局 */
  canTriggerHidden?: boolean
  scene: string
  coachExpression: string
}

// 互動式簡報節點 - 用於嵌入自訂的 Vue 互動元件
export type InteractiveSlideNode = {
  type: 'interactiveSlide'
  /** 簡報的唯一識別碼，對應到 src/components/interactive-slides/ 裡的元件名稱 */
  slideId: string
  /** 簡報標題（顯示在 header） */
  title: string
  scene: string
  coachExpression: string
}

// 選擇對話節點 - 讓玩家選擇選項，根據選擇顯示不同回應
export type ChoiceOption = {
  id: string
  label: string
  /** 選擇後海克絲的回應對話 */
  response: string
  /** 回應時的表情 */
  responseExpression: string
  /** 是否為正確答案（會影響回應語氣，但不計分） */
  isCorrect?: boolean
}

export type ChoiceNode = {
  type: 'choice'
  /** 海克絲提出的問題 */
  prompt: string
  /** 可選擇的選項 */
  options: ChoiceOption[]
  scene: string
  coachExpression: string
}

export type ChapterNode = DialogueNode | InputNameNode | SlidesNode | QuizNode | CelebrationNode | InteractiveSlideNode | ChoiceNode | PasswordInputNode | EndingCompleteNode

export type ChapterConfig = {
  id: number
  title: string
  nodes: ChapterNode[]
}
