<script setup>
import { lessons } from '@/data/lessons'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <aside class="w-64 bg-slate-900 p-6 text-white">
        <h1 class="text-2xl font-bold">
            CodeWithDotNet
        </h1>

        <p class="mt-2 text-sm text-slate-400">
            Learn publicly 🚀
        </p>

        <nav class="mt-10 space-y-3">
            <RouterLink to="/" class="block rounded-lg px-4 py-3 hover:bg-slate-800">
                Home
            </RouterLink>

            <RouterLink v-for="lesson in lessons" :key="lesson.id" :to="`/lessons/${lesson.slug}`" :class="[
                'block rounded-lg px-4 py-3 transition',
                route.path === `/lessons/${lesson.slug}`
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
            ]">
                {{ lesson.title }}
            </RouterLink>
        </nav>
    </aside>
</template>