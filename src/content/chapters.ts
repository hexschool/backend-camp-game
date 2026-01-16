import { chapter1 } from './chapter1'
import { chapter2 } from './chapter2'
import { chapter3 } from './chapter3'
import { chapter4 } from './chapter4'
import { chapter5 } from './chapter5'
import { chapter6 } from './chapter6'
import { chapter7 } from './chapter7'
import { chapter8 } from './chapter8'
import { chapter9 } from './chapter9'
import { chapter10 } from './chapter10'
import { endingBad } from './endingBad'
import { endingNormal } from './endingNormal'
import { endingTrue } from './endingTrue'
import type { ChapterConfig } from './types'

// 所有章節的索引
export const chapters: Record<number, ChapterConfig> = {
  1: chapter1,
  2: chapter2,
  3: chapter3,
  4: chapter4,
  5: chapter5,
  6: chapter6,
  7: chapter7,
  8: chapter8,
  9: chapter9,
  10: chapter10,
  // 結局章節 (id >= 100)
  101: endingBad,
  102: endingNormal,
  103: endingTrue,
}

// 取得章節配置
export function getChapter(id: number): ChapterConfig | undefined {
  return chapters[id]
}

// 取得所有章節 ID
export function getChapterIds(): number[] {
  return Object.keys(chapters).map(Number).sort((a, b) => a - b)
}

// 重新導出類型
export type { ChapterConfig, ChapterNode } from './types'
