import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import ChapterView from '../views/ChapterView.vue'
import DevView from '../views/DevView.vue'
import { CHAPTERS_FOR_ENDING, MAX_AVAILABLE_CHAPTER } from '../config/game'
import type { EndingType } from '../config/endings'

// 從 localStorage 讀取進度資料
function getProgressData() {
  try {
    const raw = localStorage.getItem('livefit.progress')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

// 檢查是否可以進入結局（Day 4-10 都有測驗分數）
function canAccessEnding(): boolean {
  const data = getProgressData()
  const quizScores = data.quizScores || {}
  return CHAPTERS_FOR_ENDING.every(day => {
    const score = quizScores[day]
    return score && score.total > 0
  })
}

// 計算玩家的結局類型（與 progress store 的 endingType getter 邏輯一致）
function calculateEndingType(): EndingType {
  const data = getProgressData()
  const quizScores = data.quizScores || {}
  const days = [4, 5, 6, 7, 8, 9, 10]
  const scores: number[] = []

  for (const day of days) {
    const score = quizScores[day]
    if (score && score.total > 0) {
      // 支援 correct（新格式）和 score（舊格式）
      const correct = score.correct ?? score.score ?? 0
      scores.push((correct / score.total) * 100)
    }
  }

  if (scores.length === 0) return 'bad'

  const avgScore = Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length)
  const isPerfect = scores.every(s => s === 100) && scores.length === 7

  // 彩蛋結局：100% + Day 7 道具（在完美結局後額外觸發，但路由仍是 103）
  if (isPerfect && data.hasDay7Item) {
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
}

// 取得結局類型對應的章節 ID
function getEndingChapterIdByType(type: EndingType): number {
  const mapping: Record<EndingType, number> = {
    bad: 101,
    normal: 102,
    true: 103,
    hidden: 103, // 彩蛋結局也在 103
  }
  return mapping[type]
}

// 檢查是否可以進入一般章節
function canAccessChapter(chapterId: number): boolean {
  // 超過目前開放的章節，不允許
  if (chapterId > MAX_AVAILABLE_CHAPTER) {
    return false
  }
  return true
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'start', component: StartView },
    { path: '/chapter/:id', name: 'chapter', component: ChapterView },
    { path: '/dev', name: 'dev', component: DevView },
  ],
})

// 路由守衛
router.beforeEach((to, _from, next) => {
  // 只檢查 chapter 路由
  if (to.name === 'chapter') {
    const chapterId = Number(to.params.id)

    // 結局章節（101-103）：檢查是否有資格進入
    if (chapterId >= 100) {
      if (!canAccessEnding()) {
        // 沒有資格，導回首頁
        return next({ name: 'start' })
      }

      // 檢查玩家是否進入正確的結局路由
      const playerEndingType = calculateEndingType()
      const correctChapterId = getEndingChapterIdByType(playerEndingType)

      if (chapterId !== correctChapterId) {
        // 導向正確的結局
        return next({ name: 'chapter', params: { id: correctChapterId.toString() } })
      }
    } else {
      // 一般章節：檢查是否開放
      if (!canAccessChapter(chapterId)) {
        return next({ name: 'start' })
      }
    }
  }

  next()
})

