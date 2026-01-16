import { defineStore } from 'pinia'
import { endings, type EndingType } from '../config/endings'

const STORAGE_KEY = 'livefit.progress'

type QuizScore = {
  correct: number
  total: number
  percentage: number  // 百分比，方便查看
}

// 成就類型
type AchievementId = 'ending_bad' | 'ending_normal' | 'ending_true' | 'ending_hidden'

// 成就定義（從統一的 endings 設定檔產生）
export const achievementDefinitions: Record<AchievementId, { icon: string; title: string; description: string }> = {
  ending_bad: { icon: endings.bad.icon, title: endings.bad.title, description: endings.bad.description },
  ending_normal: { icon: endings.normal.icon, title: endings.normal.title, description: endings.normal.description },
  ending_true: { icon: endings.true.icon, title: endings.true.title, description: endings.true.description },
  ending_hidden: { icon: endings.hidden.icon, title: endings.hidden.title, description: endings.hidden.description },
}

type ProgressState = {
  currentChapter: number
  chapterNodeIndices: Record<number, number>
  quizScores: Record<number, QuizScore>  // 每日測驗分數（key = chapter/day）
  hasDay7Item: boolean  // Day 7 解鎖道具（彩蛋結局用）
  achievements: AchievementId[]  // 已解鎖的成就
}

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export const useProgressStore = defineStore('progress', {
  state: (): ProgressState => ({
    currentChapter: 1,
    chapterNodeIndices: { 1: 0 },
    quizScores: {},
    hasDay7Item: false,
    achievements: [],
  }),
  getters: {
    // 取得指定章節的進度
    getNodeIndex: (state) => (chapterId: number) => {
      return state.chapterNodeIndices[chapterId] ?? 0
    },
    // 向後相容：取得第一章進度
    chapter1NodeIndex: (state) => state.chapterNodeIndices[1] ?? 0,
    // 取得指定章節的測驗分數
    getQuizScore: (state) => (chapterId: number) => {
      return state.quizScores[chapterId] ?? null
    },
    // 計算 Day 4-10 的平均正確率（結局用，回傳百分比 0-100）
    endingScore: (state) => {
      const days = [4, 5, 6, 7, 8, 9, 10]
      const scores: number[] = []

      for (const day of days) {
        const score = state.quizScores[day]
        if (score && score.total > 0) {
          scores.push((score.correct / score.total) * 100)
        }
      }

      if (scores.length === 0) return 0
      return Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length)
    },
    // 檢查是否已解鎖某成就
    hasAchievement: (state) => (id: AchievementId) => {
      return state.achievements.includes(id)
    },
    // 取得所有成就狀態
    allAchievements: (state) => {
      const allIds: AchievementId[] = ['ending_bad', 'ending_normal', 'ending_true', 'ending_hidden']
      return allIds.map(id => ({
        id,
        ...achievementDefinitions[id],
        unlocked: state.achievements.includes(id),
      }))
    },
    // 已解鎖成就數量
    unlockedCount: (state) => state.achievements.length,
    // 總成就數量
    totalAchievements: () => Object.keys(achievementDefinitions).length,
    // 判定結局類型
    endingType: (state): EndingType => {
      const days = [4, 5, 6, 7, 8, 9, 10]
      const scores: number[] = []

      for (const day of days) {
        const score = state.quizScores[day]
        if (score && score.total > 0) {
          scores.push((score.correct / score.total) * 100)
        }
      }

      if (scores.length === 0) return 'bad'

      const avgScore = Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length)
      const isPerfect = scores.every(s => s === 100) && scores.length === 7

      // 彩蛋結局：100% + Day 7 道具（在完美結局後額外觸發）
      if (isPerfect && state.hasDay7Item) {
        return 'hidden'
      }
      // 完美結局：= 100%
      if (avgScore === 100) {
        return 'true'
      }
      // 普通結局：85% ~ 99%
      if (avgScore >= 85) {
        return 'normal'
      }
      // 壞結局：< 85%
      return 'bad'
    },
  },
  actions: {
    loadFromStorage() {
      const data = safeParse<ProgressState>(localStorage.getItem(STORAGE_KEY))
      if (data) {
        if (typeof data.currentChapter === 'number') {
          this.currentChapter = data.currentChapter
        }
        if (data.chapterNodeIndices) {
          this.chapterNodeIndices = data.chapterNodeIndices
        }
        if (data.quizScores) {
          // 向後相容：補上舊資料缺少的 percentage
          for (const key in data.quizScores) {
            const score = data.quizScores[key]
            if (score && typeof score.percentage !== 'number') {
              score.percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0
            }
          }
          this.quizScores = data.quizScores
        }
        if (typeof data.hasDay7Item === 'boolean') {
          this.hasDay7Item = data.hasDay7Item
        }
        if (Array.isArray(data.achievements)) {
          this.achievements = data.achievements
        }
        // 向後相容舊格式
        if ('chapter1NodeIndex' in data && typeof (data as { chapter1NodeIndex?: number }).chapter1NodeIndex === 'number') {
          this.chapterNodeIndices[1] = (data as { chapter1NodeIndex: number }).chapter1NodeIndex
        }
      }
    },
    // 設定指定章節的進度
    setNodeIndex(chapterId: number, idx: number) {
      this.chapterNodeIndices[chapterId] = idx
      this._save()
    },
    // 向後相容
    setChapter1NodeIndex(idx: number) {
      this.setNodeIndex(1, idx)
    },
    // 設定目前章節
    setCurrentChapter(chapterId: number) {
      this.currentChapter = chapterId
      // 初始化該章節進度（如果不存在）
      if (!(chapterId in this.chapterNodeIndices)) {
        this.chapterNodeIndices[chapterId] = 0
      }
      this._save()
    },
    // 完成章節，解鎖下一章
    completeChapter(chapterId: number) {
      const nextChapter = chapterId + 1
      this.currentChapter = nextChapter
      if (!(nextChapter in this.chapterNodeIndices)) {
        this.chapterNodeIndices[nextChapter] = 0
      }
      this._save()
    },
    // 儲存測驗分數（重玩時會覆寫）
    saveQuizScore(chapterId: number, correct: number, total: number) {
      const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
      this.quizScores[chapterId] = { correct, total, percentage }
      this._save()
    },
    // 設定 Day 7 解鎖道具
    setDay7Item(has: boolean) {
      this.hasDay7Item = has
      this._save()
    },
    // 解鎖成就（根據結局類型）
    unlockEndingAchievement(endingType: EndingType) {
      const achievementMap: Record<EndingType, AchievementId> = {
        bad: 'ending_bad',
        normal: 'ending_normal',
        true: 'ending_true',
        hidden: 'ending_hidden',
      }
      const achievementId = achievementMap[endingType]
      if (!this.achievements.includes(achievementId)) {
        this.achievements.push(achievementId)
        this._save()
      }
    },
    reset() {
      this.currentChapter = 1
      this.chapterNodeIndices = { 1: 0 }
      this.quizScores = {}
      this.hasDay7Item = false
      // 成就不重置，保留玩家的解鎖紀錄
      this._save()
    },
    // 完全重置（包含成就）
    resetAll() {
      this.currentChapter = 1
      this.chapterNodeIndices = { 1: 0 }
      this.quizScores = {}
      this.hasDay7Item = false
      this.achievements = []
      this._save()
    },
    _save() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        currentChapter: this.currentChapter,
        chapterNodeIndices: this.chapterNodeIndices,
        quizScores: this.quizScores,
        hasDay7Item: this.hasDay7Item,
        achievements: this.achievements,
      }))
    },
  },
})

