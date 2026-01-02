import type { ChapterConfig, ChapterNode } from './types'

const nodes: ChapterNode[] = [
  // ===== 開場對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '早安！看起來精神不錯嘛，昨天有好好休息吧？',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '早安海姐！我昨天回去又把規格書看了一遍，感覺更清楚了。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '很好，有這個態度我就放心了。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '不過在正式開始今天的工作之前，我想先幫你做個小複習。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '複習？是... 又要考試嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(笑) 別緊張，只是隨機抽三題，確認你昨天學的東西還記得。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '準備好了嗎？那我們開始吧！',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 抽考 3 題 =====
  {
    type: 'quiz',
    title: '海克絲的複習小考',
    scene: 'normal',
    coachExpression: 'praise',
    questions: [
      {
        id: 'r1',
        prompt: '海克絲提到「使用者故事 (User Story)」的標準公式是什麼？',
        options: [
          { id: 'a', label: '身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]' },
          { id: 'b', label: '在 [什麼時間]，系統應該 [執行什麼功能]，並且 [顯示什麼結果]' },
          { id: 'c', label: '如果 [發生錯誤]，系統需要 [跳出警告]，以便於 [通知管理員]' },
        ],
        correctOptionId: 'a',
        explanation: '使用者故事的標準公式是：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」，這樣可以清楚描述功能的目標與價值。',
      },
      {
        id: 'r2',
        prompt: '在 LiveFit 平台中，會員想要「報名課程」，必須透過什麼方式？',
        options: [
          { id: 'a', label: '直接刷信用卡支付單堂費用' },
          { id: 'b', label: '使用已購買的「堂數」來進行報名' },
          { id: 'c', label: '現場付現金給教練' },
        ],
        correctOptionId: 'b',
        explanation: '會員需要先購買堂數方案，再使用堂數來報名課程。',
      },
      {
        id: 'r3',
        prompt: '「泳道圖 (Swimlane Diagram)」最主要的功能是什麼？',
        options: [
          { id: 'a', label: '用來計算教練游泳的速度與距離' },
          { id: 'b', label: '展示系統資料庫的關聯架構 (ER Model)' },
          { id: 'c', label: '釐清不同角色（如學生、教練、系統）在同一個流程中分別做了什麼' },
        ],
        correctOptionId: 'c',
        explanation: '泳道圖的每一條跑道代表一個角色，可以清楚看到誰該在什麼時候做什麼事。',
      },
    ],
  },

  // ===== 測驗完成後的對話 =====
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(滿意地點頭) 很好很好，看來昨天的內容你都有記住！',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '恭喜你通過第二關的考驗！',
    scene: 'normal',
    coachExpression: 'biglaugh',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '太好了！那接下來我們要做什麼呢？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '(看了看手錶) 其實今天是上半天班啦。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '你可以回家休息囉！好好養精蓄銳，明天才有力氣面對真正的挑戰。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '真的嗎？那我就不客氣了！謝謝海姐！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '去吧去吧，記得好好休息，別熬夜打電動喔！',
    scene: 'normal',
    coachExpression: 'normal',
  },

  // ===== 慶祝完成 =====
  {
    type: 'celebration',
    chapterTitle: '第二天：複習小考',
    scene: 'normal',
    coachExpression: 'normal',
  },
]

export const chapter2: ChapterConfig = {
  id: 2,
  title: '第二天：複習小考',
  nodes,
}
