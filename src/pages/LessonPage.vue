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
        <!-- Enhanced Premium Header Container -->
        <div
            class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/20 p-6 sm:p-10 shadow-sm transition-all duration-300">

            <!-- Background Decorative Elements (Glassmorphic Glows) -->
            <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl pointer-events-none">
            </div>
            <div
                class="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-indigo-400/5 blur-3xl pointer-events-none">
            </div>

            <!-- Vertical Structural Line Accent -->
            <div
                class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent">
            </div>

            <div class="relative z-10 space-y-5">
                <!-- Dynamic Category Badge -->
                <div
                    class="inline-flex items-center gap-2 rounded-full bg-blue-50/80 border border-blue-200/60 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-blue-700 backdrop-blur-sm shadow-sm">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    <i class="fa-solid fa-layer-group text-blue-500 text-xs"></i>
                    {{ lesson.category }}
                </div>

                <!-- Main Semantic Title -->
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
                    {{ lesson.title }}
                </h1>

                <!-- Meta Information Section -->
                <div
                    class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-200/60">
                    <p class="text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl">
                        A step-by-step developer guide curated specifically for the <span
                            class="text-indigo-600 font-semibold">CodeWithDotNet</span> industrial compilation pipeline.
                    </p>

                    <!-- Quick Meta Badges -->
                    <div
                        class="flex items-center gap-2.5 font-mono text-[11px] font-bold text-slate-500 self-start sm:self-center">
                        <span
                            class="flex items-center gap-1 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                            <i class="fa-regular fa-clock text-blue-500"></i> Beginner Friendly
                        </span>
                        <span
                            class="flex items-center gap-1 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                            <i class="fa-solid fa-book-open text-indigo-500"></i> Core Guide
                        </span>
                    </div>
                </div>
            </div>
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