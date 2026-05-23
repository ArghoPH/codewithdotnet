import { createRouter, createWebHistory } from 'vue-router'
import LessonPage from '@/pages/LessonPage.vue'

const HomePage = {
  template: `
    <div>
      <p class="text-sm font-semibold text-blue-600">
        Welcome to
      </p>

      <h1 class="mt-2 text-5xl font-bold text-slate-900">
        CodeWithDotNet
      </h1>

      <p class="mt-6 text-lg leading-8 text-slate-600">
        Learn .NET publicly. Build consistently. Improve every day.
      </p>
    </div>
  `,
}

const router = createRouter({
  history: createWebHistory(),
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