<script setup>
import { courses } from '@/utils/lessonLoader'
import { useRoute } from 'vue-router'

const route = useRoute()
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
                <h2 class="mt-8 mb-3 px-2 text-xs font-black uppercase tracking-widest text-slate-500">
                    {{ course.title }}
                </h2>

                <div class="mt-3 space-y-2">

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