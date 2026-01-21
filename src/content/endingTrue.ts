import type { ChapterConfig, ChapterNode } from './types'
import { endings } from '../config/endings'

// 完美結局 - 覺醒（含彩蛋結局 - 傳承）
const nodes: ChapterNode[] = [
  // === 完美結局部分 ===
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '辦公室裡，系統穩健上線中。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '早安，正式的後端工程師。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: 'LiveFit 第一天就有 500 人註冊，後端穩穩的，沒有任何 Bug。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你看著訊息，嘴角不自覺地上揚。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '還記得第一天你連環境都架不起來嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '現在的你，已經能獨立扛起整個後端了。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '這是你應得的。記住這種感覺——穩健帶來的踏實。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '後端的路還很長，但我相信你已經準備好了。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '加油，{name}。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  // 完美結局完成節點
  {
    type: 'endingComplete',
    endingType: 'true',
    title: endings.true.title,
    icon: endings.true.icon,
    color: endings.true.color,
    canTriggerHidden: true,
    scene: 'normal',
    coachExpression: 'praise',
  },
  // === 彩蛋結局部分 ===
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '下班了，走在回家的路上。',
    scene: 'end',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '街道傳來一段不同以往的旋律，你拿下耳機，靜靜聆聽...\n\n（建議：開啟音樂，聆聽結局配樂 🎵）',
    scene: 'end',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你正準備關掉手機，突然收到一封新信件。',
    scene: 'end',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '寄件者：海克絲\n主旨：給你的一封信',
    scene: 'end',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你點開信件。',
    scene: 'end',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '{name}，\n\n恭喜你正式成為正職員工！你好棒！\n\n附件裡有一個壓縮檔，是我想送給你的禮物。\n\n密碼的話...你應該知道的 😉\n\n—— 海姐',
    scene: 'end',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你看著附件，想起了第七天在資料庫裡看到的那串亂碼。',
    scene: 'end',
    coachExpression: 'normal',
  },
  {
    type: 'passwordInput',
    prompt: '請輸入解壓縮密碼...',
    hint: '提示：還記得第七天拿到的那串亂碼嗎？',
    scene: 'end',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '解壓縮成功！裡面是一個影片檔：「給未來的你.mp4」',
    scene: 'end',
    coachExpression: 'normal',
  },
  // 電影風格的影片簡報
  {
    type: 'interactiveSlide',
    slideId: 'video-message',
    title: '給未來的你',
    scene: 'normal',
    coachExpression: 'normal',
  },
  // 影片結束後的對話
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你關掉影片，看著窗外的陽光。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '謝謝你，海姐。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'endingComplete',
    endingType: 'hidden',
    title: endings.hidden.title,
    icon: endings.hidden.icon,
    color: endings.hidden.color,
    scene: 'normal',
    coachExpression: 'praise',
  },
]

export const endingTrue: ChapterConfig = {
  id: endings.true.chapterId,
  title: `結局：${endings.true.title} / ${endings.hidden.title}`,
  nodes,
}
