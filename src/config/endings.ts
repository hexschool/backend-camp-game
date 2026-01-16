/**
 * 結局定義 - 統一管理所有結局相關的名稱、圖示、顏色
 * 所有結局相關的顯示都應該從這裡取用，避免不一致
 */

export type EndingType = 'bad' | 'normal' | 'true' | 'hidden'

export interface EndingConfig {
  type: EndingType
  chapterId: number
  icon: string
  title: string           // 結局標題（如：過勞、封印、覺醒、傳承）
  description: string     // 完整描述（如：壞結局 - 燃燒殆盡）
  color: 'rose' | 'sky' | 'emerald' | 'amber'
}

// 所有結局的統一定義
export const endings: Record<EndingType, EndingConfig> = {
  bad: {
    type: 'bad',
    chapterId: 101,
    icon: '💀',
    title: '過勞',
    description: '壞結局 - 燃燒殆盡',
    color: 'rose',
  },
  normal: {
    type: 'normal',
    chapterId: 102,
    icon: '🌑',
    title: '封印',
    description: '普通結局 - 穩健前行',
    color: 'sky',
  },
  true: {
    type: 'true',
    chapterId: 103,
    icon: '🌟',
    title: '覺醒',
    description: '完美結局 - 破繭而出',
    color: 'emerald',
  },
  hidden: {
    type: 'hidden',
    chapterId: 103,  // 彩蛋結局在完美結局章節內
    icon: '🔮',
    title: '傳承',
    description: '彩蛋結局 - 傳承之路',
    color: 'amber',
  },
}

// 根據章節 ID 取得結局（用於進入結局時）
export function getEndingByChapterId(chapterId: number): EndingConfig | undefined {
  return Object.values(endings).find(e => e.chapterId === chapterId && e.type !== 'hidden')
}

// 根據結局類型取得結局
export function getEnding(type: EndingType): EndingConfig {
  return endings[type]
}

// 取得結局章節 ID
export function getEndingChapterId(type: EndingType): number {
  return endings[type].chapterId
}
