import type { ChapterConfig, ChapterNode } from './types'

// 測試用章節 - Day 7（包含解鎖 Day 7 道具）
const nodes: ChapterNode[] = [
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '【測試模式】Day 7 - 這是測試用章節，所有答案都選 A',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) {name}，你做得很棒！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對了，有個東西要先給你。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '什麼東西？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '對了，你還沒告訴我你的名字呢！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'inputName',
    prompt: '請告訴海姐你的名字',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好的 {name}，這是之後要用的一組密碼，是打開某個服務用的。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '密碼是：「{password}」',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '好的，我記下來了。這是什麼服務的密碼？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(撓撓頭) 呃...我忘了是什麼服務了。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(眨眨眼) 總之先記下來吧，以後一定會用到的！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'quiz',
    title: 'Day 7 測試題',
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
    chapterTitle: '第七天：測試章節（含隱藏道具）',
    scene: 'normal',
    coachExpression: 'praise',
  },
]

export const chapter7: ChapterConfig = {
  id: 7,
  title: '第七天：測試章節（含隱藏道具）',
  nodes,
}
