import { defineStore } from 'pinia'

const STORAGE_KEY = 'livefit.progress'

type ProgressState = {
  currentChapter: number
  chapterNodeIndices: Record<number, number>
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
  }),
  getters: {
    // 取得指定章節的進度
    getNodeIndex: (state) => (chapterId: number) => {
      return state.chapterNodeIndices[chapterId] ?? 0
    },
    // 向後相容：取得第一章進度
    chapter1NodeIndex: (state) => state.chapterNodeIndices[1] ?? 0,
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
    reset() {
      this.currentChapter = 1
      this.chapterNodeIndices = { 1: 0 }
      this._save()
    },
    _save() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        currentChapter: this.currentChapter,
        chapterNodeIndices: this.chapterNodeIndices,
      }))
    },
  },
})

