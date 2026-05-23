<template>
    <section class="space-y-16 py-8">
        <!-- Hero Section -->
        <div
            class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-50 to-white px-8 py-20 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-100 sm:px-16 sm:py-28">

            <!-- Decorative Background Blurs (Glassmorphic Feel) -->
            <div
                class="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-200/40 mix-blend-multiply blur-3xl filter">
            </div>
            <div
                class="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-200/40 mix-blend-multiply blur-3xl filter">
            </div>

            <div class="relative z-10 mx-auto max-w-4xl">
                <!-- Badge -->
                <div class="mb-8 flex justify-center">
                    <span
                        class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-md">
                        <span
                            class="flex h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
                        Learn .NET publicly 🚀
                    </span>
                </div>

                <!-- Headline -->
                <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl sm:leading-tight">
                    Build your .NET journey with <br class="hidden sm:block" />
                    <span
                        class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">CodeWithDotNet</span>
                </h1>

                <!-- Subtitle -->
                <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                    A documentation-style learning platform where I share everything I learn about
                    .NET, C#, ASP.NET Core, frontend development, and real-world projects.
                </p>

                <!-- CTA Buttons -->
                <div class="mt-10 flex flex-wrap justify-center gap-4">
                    <RouterLink to="/lessons/what-is-dotnet"
                        class="group flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/40">
                        Start Learning
                        <i class="fa-solid fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                    </RouterLink>

                    <a href="#topics"
                        class="rounded-2xl border border-slate-200 bg-white/80 px-8 py-3.5 font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50">
                        Explore Topics
                    </a>
                </div>
            </div>
        </div>

        <!-- Stats Banner -->
        <div
            class="mx-auto max-w-5xl rounded-3xl bg-white p-2 shadow-[0_2px_20px_rgb(0,0,0,0.03)] ring-1 ring-slate-100">
            <div class="grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div class="p-8 text-center transition-colors hover:bg-slate-50/50 sm:rounded-l-3xl">
                    <p class="text-4xl font-extrabold text-blue-600">3+</p>
                    <p class="mt-2 font-medium text-slate-500">Lessons added</p>
                </div>
                <div class="p-8 text-center transition-colors hover:bg-slate-50/50">
                    <p class="text-4xl font-extrabold text-slate-900">Vue</p>
                    <p class="mt-2 font-medium text-slate-500">Frontend framework</p>
                </div>
                <div class="p-8 text-center transition-colors hover:bg-slate-50/50 sm:rounded-r-3xl">
                    <p class="text-4xl font-extrabold text-slate-900">.NET</p>
                    <p class="mt-2 font-medium text-slate-500">Backend goal</p>
                </div>
            </div>
        </div>

        <!-- Topics Section -->
        <div id="topics" class="pt-8">
            <div class="mb-12 text-center">
                <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    What you will learn
                </h2>
                <p class="mt-4 text-lg text-slate-600">Step-by-step guidance from fundamentals to advanced backend.</p>
            </div>

            <div class="grid gap-6 md:grid-cols-3">
                <!-- Topic 1 -->
                <div
                    class="group relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:ring-blue-100">
                    <div
                        class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <i class="fa-solid fa-code text-2xl"></i>
                    </div>
                    <h3 class="mb-3 text-xl font-bold text-slate-900">C# Basics</h3>
                    <p class="leading-relaxed text-slate-600">
                        Learn variables, conditions, loops, functions, classes, and OOP step by step.
                    </p>
                </div>

                <!-- Topic 2 -->
                <div
                    class="group relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:ring-blue-100">
                    <div
                        class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                        <i class="fa-solid fa-layer-group text-2xl"></i>
                    </div>
                    <h3 class="mb-3 text-xl font-bold text-slate-900">ASP.NET Core</h3>
                    <p class="leading-relaxed text-slate-600">
                        Understand MVC, Web API, routing, controllers, services, and real backend flow.
                    </p>
                </div>

                <!-- Topic 3 -->
                <div
                    class="group relative rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:ring-blue-100">
                    <div
                        class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                        <i class="fa-solid fa-database text-2xl"></i>
                    </div>
                    <h3 class="mb-3 text-xl font-bold text-slate-900">Database</h3>
                    <p class="leading-relaxed text-slate-600">
                        Learn SQL Server and Entity Framework Core when the backend journey begins.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>