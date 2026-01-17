import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import ChapterView from '../views/ChapterView.vue'
import DevView from '../views/DevView.vue'
import { CHAPTERS_FOR_ENDING, MAX_AVAILABLE_CHAPTER } from '../config/game'

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
    } else {
      // 一般章節：檢查是否開放
      if (!canAccessChapter(chapterId)) {
        return next({ name: 'start' })
      }
    }
  }

  next()
})

