<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { lessons } from '@/data/lessons'



const route = useRoute()

const lesson = computed(() => {
    return lessons.find((item) => item.slug === route.params.slug)
})
</script>

<template>
    <article v-if="lesson" class="mx-auto max-w-6xl">

        <!-- Header Section -->
        <div
            class="mb-8 p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-xl text-white shadow-md relative overflow-hidden">
            <div class="absolute right-4 top-4 opacity-10 text-7xl"><i class="fa-solid fa-layer-group"></i></div>
            <span
                class="px-2.5 py-1 text-xs font-semibold bg-blue-500/30 text-blue-300 rounded-full border border-blue-500/20 uppercase tracking-wider">
                {{ lesson.category }}</span>
            <h1 class="text-3xl font-extrabold mt-2 mb-2 tracking-tight text-white flex items-center gap-2.5">
                <i class="fa-solid fa-cubes text-blue-400"></i> {{ lesson.title }}
            </h1>
            <p class="text-slate-300 text-sm max-w-2xl leading-relaxed">
                A beginner-friendly lesson from the CodeWithDotNet documentation journey.
            </p>
        </div>

        <!-- Content -->
        <div class="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div class="prose max-w-none">
                <div class="text-lg leading-9 text-slate-700" v-html="lesson.content"></div>
            </div>
        </div>

        <!-- Bottom Navigation -->
        <div class="mt-8 flex items-center justify-between rounded-3xl bg-slate-900 p-6 text-white">
            <div>
                <p class="text-sm text-slate-400">
                    CodeWithDotNet
                </p>

                <h3 class="mt-1 text-xl font-bold">
                    Keep learning step by step
                </h3>
            </div>

            <RouterLink to="/" class="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100">
                Back Home
            </RouterLink>
        </div>
    </article>

    <div v-else class="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm">
        <h1 class="text-4xl font-bold text-slate-900">
            Lesson not found
        </h1>
    </div>
</template>