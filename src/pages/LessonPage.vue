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
    <article v-if="lesson">
        <p class="text-sm font-semibold text-blue-600">
            {{ lesson.category }}
        </p>

        <h1 class="mt-2 text-5xl font-bold text-slate-900">
            {{ lesson.title }}
        </h1>

        <div class="mt-8 whitespace-pre-line rounded-2xl bg-white p-6 leading-8 text-slate-700 shadow-sm">
            {{ lesson.content }}
        </div>
    </article>

    <div v-else>
        <h1 class="text-4xl font-bold text-slate-900">
            Lesson not found
        </h1>
    </div>
</template>