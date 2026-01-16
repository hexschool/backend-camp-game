import type { ChapterConfig, ChapterNode } from './types'
import { endings } from '../config/endings'

// 壞結局 - 過勞
const nodes: ChapterNode[] = [
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '專案勉強上線了，但到處都是 Bug。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你看著滿屏的錯誤回報，開始瘋狂地修復。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '凌晨一點...兩點...三點...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '螢幕上的字開始變得模糊。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '你',
    text: '再一下...再修一個就好...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '突然，手機響起。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '喂？{name}？你還在公司嗎？',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '你想回答，但聲音發不出來。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '喂？你還好嗎？喂！',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '旁白',
    text: '畫面逐漸變暗...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '我以前也是這樣的...',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '休息不是偷懶，是為了走更長的路。',
    scene: 'normal',
    coachExpression: 'normal',
  },
  {
    type: 'dialogue',
    speaker: '海克絲',
    text: '好好休息吧。等你準備好了，我們再一起努力。',
    scene: 'normal',
    coachExpression: 'praise',
  },
  {
    type: 'endingComplete',
    endingType: 'bad',
    title: endings.bad.title,
    icon: endings.bad.icon,
    color: endings.bad.color,
    scene: 'normal',
    coachExpression: 'normal',
  },
]

export const endingBad: ChapterConfig = {
  id: endings.bad.chapterId,
  title: `結局：${endings.bad.title}`,
  nodes,
}
