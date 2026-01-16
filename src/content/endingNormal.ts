import type { ChapterConfig, ChapterNode } from './types'
import { endings } from '../config/endings'

// 普通結局 - 封印
const nodes: ChapterNode[] = [
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你被系統通知吵醒。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: 'LiveFit 已成功部署上線。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你打開手機，沒有海克絲的訊息。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '打開後台一看，發現有幾個小 Bug 被回報了。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '果然...還是有漏掉的地方。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你嘆了口氣，開始修 Bug。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '雖然專案上線了，但心裡總覺得...好像少了什麼。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '也許...我還需要再努力一點。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'endingComplete',
    endingType: 'normal',
    title: endings.normal.title,
    icon: endings.normal.icon,
    color: endings.normal.color,
    scene: 'normal',
    coachExpression: 'normal',
  },
]

export const endingNormal: ChapterConfig = {
  id: endings.normal.chapterId,
  title: `結局：${endings.normal.title}`,
  nodes,
}
