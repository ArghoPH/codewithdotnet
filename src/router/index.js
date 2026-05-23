import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LessonPage from '@/pages/LessonPage.vue'

const router = createRouter({

  history: createWebHistory(),
  scrollBehavior() {
    return {
      top: 0,
    }
  },

  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/lessons/:slug',
      component: LessonPage,
    },
  ],
})

export default router