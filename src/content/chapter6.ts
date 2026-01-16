import type { ChapterConfig, ChapterNode } from './types'

// 測試用章節 - Day 6
const nodes: ChapterNode[] = [
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '【測試模式】Day 6 - 這是測試用章節，所有答案都選 A',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'quiz',
    title: 'Day 6 測試題',
    scene: 'normal',
    coachExpression: 'normal',
    questions: [
      { id: 'q1', prompt: '1 + 0 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
      { id: 'q2', prompt: '2 - 1 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
      { id: 'q3', prompt: '1 × 1 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
      { id: 'q4', prompt: '1 ÷ 1 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
      { id: 'q5', prompt: '0 + 1 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
      { id: 'q6', prompt: '3 - 2 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
      { id: 'q7', prompt: '1 × 1 × 1 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
      { id: 'q8', prompt: '2 ÷ 2 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
      { id: 'q9', prompt: '10 - 9 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
      { id: 'q10', prompt: '100 ÷ 100 = ?', options: [{ id: 'a', label: '1' }, { id: 'b', label: '2' }], correctOptionId: 'a', explanation: '答案是 1' },
    ],
  },
  {
    type: 'celebration',
    chapterTitle: '第六天：測試章節',
    scene: 'normal',
    coachExpression: 'praise',
  },
]

export const chapter6: ChapterConfig = {
  id: 6,
  title: '第六天：測試章節',
  nodes,
}
