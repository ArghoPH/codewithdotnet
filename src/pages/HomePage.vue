<template>
    <section class="space-y-16 py-6 selection:bg-blue-500 selection:text-white">
        <!-- Hero Section -->
        <div
            class="relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-gradient-to-b from-slate-50 via-white to-slate-50/40 px-6 py-16 text-center shadow-[0_12px_40px_rgba(0,0,0,0.02)] sm:px-16 sm:py-24">

            <!-- Decorative Backdrop Blurs (Premium Glassmorphic Ambient Glow) -->
            <div
                class="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 mix-blend-multiply blur-3xl pointer-events-none">
            </div>
            <div
                class="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 mix-blend-multiply blur-3xl pointer-events-none">
            </div>

            <div class="relative z-10 mx-auto max-w-4xl space-y-6">
                <!-- Interactive Badge -->
                <div class="flex justify-center">
                    <span
                        class="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-blue-700 shadow-sm backdrop-blur-md">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span
                                class="relative inline-flex rounded-full h-2 w-2 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
                        </span>

                        Learn .NET for free with interactive lessons and projects
                    </span>
                </div>

                <!-- Semantic Main Title -->
                <h1 class="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.15]">
                    Build your .NET journey with <br class="hidden sm:block" />
                    <span
                        class="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">CodeWithDotNet</span>
                </h1>

                <!-- Captivating Subtitle -->
                <p class="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
                    A documentation-style learning platform where I share everything I learn about
                    <span class="text-slate-900 font-semibold">.NET, C#, ASP.NET Core</span>, frontend integration, and
                    real-world microfinance/ERP projects.
                </p>

                <!-- CTA Action Buttons -->
                <div class="pt-4 flex flex-wrap justify-center gap-4">
                    <RouterLink to="/lessons/what-is-dotnet"
                        class="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30">
                        <span>Start Learning</span>
                        <i
                            class="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1.5"></i>
                    </RouterLink>

                    <a href="#topics"
                        class="rounded-2xl border border-slate-200 bg-white/90 px-8 py-4 font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900">
                        Explore Topics
                    </a>
                </div>
            </div>
        </div>

        <!-- Metrics / Stats Banner Container -->
        <div
            class="mx-auto max-w-5xl rounded-3xl border border-slate-200/60 bg-white/70 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.015)] backdrop-blur-md">
            <div class="grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <!-- Stat Card 1 -->
                <div
                    class="p-6 text-center transition-all duration-300 hover:bg-slate-50/60 sm:rounded-l-3xl flex flex-col justify-center items-center">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-book-bookmark text-blue-500 text-lg"></i>
                        <p class="text-3xl font-black text-slate-900">3+</p>
                    </div>
                    <p class="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Lessons Published</p>
                </div>

                <!-- Stat Card 2 -->
                <div
                    class="p-6 text-center transition-all duration-300 hover:bg-slate-50/60 flex flex-col justify-center items-center">
                    <div class="flex items-center gap-2">
                        <i class="fa-brands fa-vuejs text-emerald-500 text-xl"></i>
                        <p class="text-3xl font-black text-slate-900">Vue 3</p>
                    </div>
                    <p class="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Frontend Framework</p>
                </div>

                <!-- Stat Card 3 -->
                <div
                    class="p-6 text-center transition-all duration-300 hover:bg-slate-50/60 sm:rounded-r-3xl flex flex-col justify-center items-center">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-circle-nodes text-indigo-500 text-lg"></i>
                        <p class="text-3xl font-black text-indigo-600">.NET</p>
                    </div>
                    <p class="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">Enterprise Backend
                        Goal</p>
                </div>
            </div>
        </div>

        <!-- Topics Grid Section -->
        <div id="topics" class="pt-4 scroll-mt-6">
            <div class="mb-10 text-center space-y-2">
                <h2
                    class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl flex items-center justify-center gap-2.5">
                    <i class="fa-solid fa-layer-group text-blue-600 text-2xl"></i> Core Matrix
                </h2>
                <p class="mx-auto max-w-xl text-sm sm:text-base text-slate-500">
                    A systematic learning architecture spanning syntax fundamentals up to structural backend
                    engineering.
                </p>
            </div>

            <div class="grid gap-6 md:grid-cols-3">
                <!-- Card: Topic 1 -->
                <RouterLink to="/lessons/what-is-csharp"
                    class="group relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-100">
                    <div
                        class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100/50 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 group-hover:rotate-3">
                        <i class="fa-solid fa-code text-xl"></i>
                    </div>
                    <h3 class="mb-2 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">C#
                        Core Basics</h3>
                    <p class="text-xs sm:text-sm leading-relaxed text-slate-500">
                        Deconstruct typed variables, logic control flow statements, data structures, and foundational
                        Object-Oriented Programming (OOP).
                    </p>
                </RouterLink>

                <!-- Card: Topic 2 -->
                <router-link to="/lessons/what-is-dotnet"
                    class="group relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-100">
                    <div
                        class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100/50 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-105 group-hover:rotate-3">
                        <i class="fa-solid fa-cubes text-xl"></i>
                    </div>
                    <h3 class="mb-2 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        ASP.NET Core Systems</h3>
                    <p class="text-xs sm:text-sm leading-relaxed text-slate-500">
                        Deep dive into underlying HTTP routing architectures, custom execution pipelines, middleware
                        chains, and RESTful API structures.
                    </p>
                </router-link>

                <!-- Card: Topic 3 -->
                <div
                    class="group relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-100">
                    <div
                        class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100/50 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white group-hover:scale-105 group-hover:rotate-3">
                        <i class="fa-solid fa-database text-xl"></i>
                    </div>
                    <h3 class="mb-2 text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                        Relational Data & ORM</h3>
                    <p class="text-xs sm:text-sm leading-relaxed text-slate-500">
                        Map relational data engines via Entity Framework Core, execute migrations, and build highly
                        performant analytical queries.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>