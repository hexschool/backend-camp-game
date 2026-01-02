import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import ChapterView from '../views/ChapterView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'start', component: StartView },
    { path: '/chapter/:id', name: 'chapter', component: ChapterView },
  ],
})

