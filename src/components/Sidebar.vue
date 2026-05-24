<script setup>
import { ref } from 'vue'
import { courses } from '@/utils/lessonLoader'
import { useRoute } from 'vue-router'

const route = useRoute()

const openCourses = ref({})

if (courses.length > 0) {
    openCourses.value[courses[0].title] = true
}

function toggleCourse(courseTitle) {
    openCourses.value[courseTitle] = !openCourses.value[courseTitle]
}

function isCourseOpen(courseTitle) {
    return openCourses.value[courseTitle]
}
</script>

<template>
    <aside class="h-screen w-64 bg-slate-900 p-6 text-white">
        <h1 class="text-2xl font-bold">
            CodeWithDotNet
        </h1>
        <p class="mt-2 text-sm text-slate-400">
            Learn .NET and C# for free with interactive lessons and projects.
        </p>

        <p class="mt-2 text-sm text-slate-400">
            Developed by <a href="https://github.com/Argho" class="underline">Argho</a>
        </p>

        <nav class="mt-10 space-y-3">
            <RouterLink to="/" :class="[
                'block rounded-lg px-4 py-3 transition',
                route.path === '/'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
            ]">
                Home
            </RouterLink>

            <div v-for="course in courses" :key="course.title">
                <button
                    class="mt-8 mb-3 flex w-full items-center justify-between rounded-lg px-2 py-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:bg-slate-800 hover:text-white"
                    @click="toggleCourse(course.title)">
                    <span>{{ course.title }}</span>

                    <i :class="[
                        'fa-solid transition-transform duration-300',
                        isCourseOpen(course.title) ? 'fa-chevron-down' : 'fa-chevron-right'
                    ]"></i>
                </button>

                <div v-if="isCourseOpen(course.title)" class="mt-3 space-y-2">

                    <RouterLink v-for="lesson in course.lessons" :key="lesson.slug" :to="`/lessons/${lesson.slug}`"
                        :class="[
                            'block rounded-lg px-4 py-3 text-sm transition',

                            route.path === `/lessons/${lesson.slug}`
                                ? 'bg-slate-800 text-white'
                                : 'text-slate-300 hover:bg-slate-800'
                        ]">
                        {{ lesson.title }}
                    </RouterLink>

                </div>
            </div>
        </nav>
    </aside>
</template>