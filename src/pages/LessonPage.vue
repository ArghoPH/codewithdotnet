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
    <article v-if="lesson" class="mx-auto max-w-4xl">
        <!-- Header -->
        <div class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p class="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                {{ lesson.category }}
            </p>

            <h1 class="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
                {{ lesson.title }}
            </h1>

            <p class="mt-5 text-lg leading-8 text-slate-600">
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
                    Keep learning step by step 🚀
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