export type Speaker = '海克絲' | '旁白' | '你'

export type DialogueNode = {
  type: 'dialogue'
  speaker: Speaker
  text: string
  scene: string
  coachExpression: string
  image?: string
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

export type ChapterNode = DialogueNode | InputNameNode | SlidesNode | QuizNode | CelebrationNode

export type ChapterConfig = {
  id: number
  title: string
  nodes: ChapterNode[]
}
