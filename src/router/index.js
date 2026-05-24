import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import { lessons } from '../utils/lessonLoader' // Import the lessons array from the lessonLoader module, which contains information about all the lessons and their components

const lessonRoutes = lessons.map((lesson) => { // For each lesson in the lessons array, create a route object with the path and component for that lesson. The path is generated based on the lesson's slug, and the component is the imported Vue component for that lesson.
  return {
    path: `/lessons/${lesson.slug}`,  // The path for the lesson route is generated using the lesson's slug, e.g., "/lessons/my-lesson"
    component: lesson.component,      // The component is the imported Vue component for the lesson
  }
})

const router = createRouter({ // Create a new router instance using the createRouter function from vue-router. The router is configured with the history mode and the routes for the application, including the home page and the dynamically generated lesson routes.
  history: createWebHistory(),  // Use HTML5 history mode for cleaner URLs without hash fragments

  routes: [
    {
      path: '/',
      component: HomePage,
    },

    ...lessonRoutes, // Add the dynamically generated lesson routes
  ],
})

export default router