import { defineStore } from 'pinia'

const STORAGE_KEY = 'livefit.player'

type PlayerState = {
  name: string
}

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export const usePlayerStore = defineStore('player', {
  state: (): PlayerState => ({
    name: '',
  }),
  actions: {
    loadFromStorage() {
      const data = safeParse<PlayerState>(localStorage.getItem(STORAGE_KEY))
      if (data?.name) this.name = data.name
    },
    setName(name: string) {
      this.name = name.trim()
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ name: this.name }))
    },
    clear() {
      this.name = ''
      localStorage.removeItem(STORAGE_KEY)
    },
  },
})

