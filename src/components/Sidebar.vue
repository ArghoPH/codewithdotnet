<script setup>
import { computed, ref, watch } from 'vue'
import { courses } from '@/utils/lessonLoader'
import { useRoute } from 'vue-router'

const route = useRoute()

const searchQuery = ref('')
const openCourses = ref({})

if (courses.length > 0) {
    openCourses.value[courses[0].title] = true
}

const filteredCourses = computed(() => {
    if (!searchQuery.value) {
        return courses
    }

    return courses
        .map((course) => {
            return {
                ...course,
                lessons: course.lessons.filter((lesson) =>
                    lesson.title.toLowerCase().includes(searchQuery.value.toLowerCase())
                ),
            }
        })

        .filter((course) => course.lessons.length > 0)
})

function toggleCourse(courseTitle) {
    openCourses.value[courseTitle] = !openCourses.value[courseTitle]
}

function isCourseOpen(courseTitle) {
    if (searchQuery.value) {
        const course = filteredCourses.value.find(
            (item) => item.title === courseTitle
        )

        return course && course.lessons.length > 0
            ? openCourses.value[courseTitle] !== false
            : false
    }


    return openCourses.value[courseTitle]
}

watch(searchQuery, () => {
    filteredCourses.value.forEach((course) => {
        openCourses.value[course.title] = true
    })
})
</script>

<template>
    <aside class="h-screen overflow-y-auto bg-slate-900 p-6 text-white">
        <h1 class="text-2xl font-bold">
            CodeWithDotNet
        </h1>
        <p class="mt-2 text-sm text-slate-400">
            Learn .NET and C# for free with interactive lessons and projects.
        </p>

        <p class="mt-2 text-sm text-slate-400">
            Developed by <a href="https://github.com/Argho" class="underline">Argho</a>
        </p>

        <div class="mt-5">
            <input v-model="searchQuery" type="text" placeholder="Search lessons..."
                class="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none" />
        </div>
        <nav class="mt-10 space-y-3">

            <RouterLink to="/" :class="[
                'block rounded-lg px-4 py-3 transition',
                route.path === '/'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
            ]">
                Home
            </RouterLink>


            <div v-for="course in filteredCourses" :key="course.title">
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
            <p v-if="filteredCourses.length === 0" class="mt-6 rounded-xl bg-slate-800 p-4 text-sm text-slate-400">
                No lesson found.
            </p>
        </nav>
    </aside>
</template>