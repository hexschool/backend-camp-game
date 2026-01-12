import { chapter1 } from './chapter1'
import { chapter2 } from './chapter2'
import { chapter3 } from './chapter3'
import type { ChapterConfig } from './types'

// 所有章節的索引
export const chapters: Record<number, ChapterConfig> = {
  1: chapter1,
  2: chapter2,
  3: chapter3,
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
