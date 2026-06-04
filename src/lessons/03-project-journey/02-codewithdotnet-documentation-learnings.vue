<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-emerald-50/40 px-4 py-10 text-slate-800">
        <div class="mx-auto max-w-6xl space-y-10">
            <!-- Hero -->
            <section
                class="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-xl shadow-slate-200/60 backdrop-blur">
                <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"></div>
                <div class="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl"></div>

                <div class="relative">
                    <div
                        class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                        <i class="fa-solid fa-route"></i>
                        Frontend Engineering Journey
                    </div>

                    <h1 class="mt-6 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                        CodeWithDotNet
                        <span
                            class="block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                            Full Project Documentation
                        </span>
                    </h1>

                    <p class="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
                        This documentation explains the complete journey of building a modern Vue documentation
                        platform:
                        project setup, routing, sidebar architecture, file-based lesson system, auto routing, search,
                        collapsible categories, deployment, and real frontend engineering concepts.
                    </p>

                    <div class="mt-8 grid gap-4 md:grid-cols-4">
                        <div class="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                            <p class="text-3xl font-black text-blue-700">Vue 3</p>
                            <p class="mt-2 text-sm text-blue-900/70">Frontend Framework</p>
                        </div>

                        <div class="rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
                            <p class="text-3xl font-black text-cyan-700">Router</p>
                            <p class="mt-2 text-sm text-cyan-900/70">Page Navigation</p>
                        </div>

                        <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                            <p class="text-3xl font-black text-emerald-700">Auto</p>
                            <p class="mt-2 text-sm text-emerald-900/70">Lesson Loading</p>
                        </div>

                        <div class="rounded-2xl border border-orange-100 bg-orange-50 p-5">
                            <p class="text-3xl font-black text-orange-700">Live</p>
                            <p class="mt-2 text-sm text-orange-900/70">Vercel Deploy</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mindmap -->
            <section class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                <div class="mb-5 flex items-center gap-3">
                    <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
                        <i class="fa-solid fa-diagram-project"></i>
                    </div>

                    <div>
                        <h2 class="text-3xl font-black text-slate-950">
                            Full Vue App Flow
                        </h2>
                        <p class="mt-1 text-slate-500">
                            Browser থেকে lesson render হওয়া পর্যন্ত complete lifecycle.
                        </p>
                    </div>
                </div>

                <div class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-3">
                        <span class="h-3 w-3 rounded-full bg-red-500"></span>
                        <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
                        <span class="h-3 w-3 rounded-full bg-green-500"></span>
                        <span class="ml-3 font-mono text-xs text-slate-400">project-flow.mindmap</span>
                    </div>

                    <pre class="overflow-x-auto p-6 font-mono text-xs leading-7 text-slate-300 md:text-sm"><code><span class="font-bold text-[#98c379]">[ index.html ]</span>
  <span class="text-slate-500">Browser first loads this file. It contains the blank canvas:</span>
  <span class="text-[#e06c75]">&lt;div</span> <span class="text-[#d19a66]">id</span>=<span class="text-[#98c379]">"app"</span><span class="text-[#e06c75]">&gt;&lt;/div&gt;</span>
       │
       ▼
<span class="font-bold text-[#61afef]">[ main.js ]</span> <span class="text-slate-500">Starts Vue app, loads CSS, connects router</span>
       │
       ├──► <span class="text-[#c678dd]">import</span> <span class="text-[#56b6c2]">createApp</span> <span class="text-slate-500">from Vue</span>
       ├──► <span class="text-[#c678dd]">import</span> <span class="text-[#e06c75]">App.vue</span> <span class="text-slate-500">root layout</span>
       ├──► <span class="text-[#c678dd]">import</span> <span class="text-[#e06c75]">router</span> <span class="text-slate-500">route system</span>
       │
       ▼
<span class="text-[#e5c07b]">createApp(App).use(router).mount('#app')</span>
       │
       ├─────────────────────────────────────────────┐
       ▼                                             ▼
<span class="font-bold text-[#e5c07b]">[ App.vue ]</span>                               <span class="font-bold text-[#61afef]">[ router/index.js ]</span>
<span class="text-slate-500">Main shell/layout</span>                            <span class="text-slate-500">URL guide/map</span>
       │                                             │
       ├──► <span class="text-[#e06c75]">&lt;Sidebar /&gt;</span>                         ├──► Defines <span class="text-[#98c379]">/</span>
       ├──► <span class="text-[#e06c75]">&lt;RouterView /&gt;</span>                      ├──► Defines <span class="text-[#98c379]">/lessons/:slug</span>
       ├──► Mobile sidebar state                     └──► Auto lesson routes
       ├──► Main content scroll
       └──► Route change scroll reset
                     │
                     ▼
            <span class="font-bold text-[#c678dd]">[ lessonLoader.js ]</span>
            <span class="text-slate-500">Scans lesson files using import.meta.glob()</span>
                     │
                     ├──► Creates <span class="text-[#98c379]">slug</span>
                     ├──► Creates <span class="text-[#98c379]">title</span>
                     ├──► Creates <span class="text-[#98c379]">category</span>
                     ├──► Groups into <span class="text-[#98c379]">courses</span>
                     └──► Sends data to Sidebar + Router
                     │
                     ▼
            <span class="font-bold text-[#e5c07b]">[ Lesson .vue Component ]</span>
            <span class="text-slate-500">The actual documentation UI rendered in browser</span></code></pre>
                </div>
            </section>

            <!-- Project Structure -->
            <section class="grid gap-6 lg:grid-cols-2">
                <div class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                    <div class="mb-5 flex items-center gap-3">
                        <div
                            class="flex h-12 w-12 items-center justify-center rounded-2xl text-orange-700 bg-orange-100">
                            <i class="fa-solid fa-folder-tree"></i>
                        </div>

                        <div>
                            <h2 class="text-2xl font-black text-slate-950">
                                Final Folder Structure
                            </h2>
                            <p class="text-sm text-slate-500">
                                Clean, scalable, and file-based.
                            </p>
                        </div>
                    </div>

                    <div class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
                        <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-3">
                            <span class="h-3 w-3 rounded-full bg-red-500"></span>
                            <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
                            <span class="h-3 w-3 rounded-full bg-green-500"></span>
                            <span class="ml-3 font-mono text-xs text-slate-400">folder-structure.txt</span>
                        </div>

                        <pre class="overflow-x-auto max-h-100 p-5 font-mono text-xs leading-7 text-slate-300"><code><span class="text-[#61afef]">src/</span>
├── <span class="text-[#98c379]">assets/</span>
│   └── <span class="text-[#e5c07b]">main.css</span>
│
├── <span class="text-[#98c379]">components/</span>
│   └── <span class="text-[#e5c07b]">Sidebar.vue</span>
│
├── <span class="text-[#98c379]">lessons/</span>
│   ├── <span class="text-[#61afef]">01-dotnet-basics/</span>
│   │   └── <span class="text-[#e5c07b]">01-what-is-dotnet.vue</span>
│   │
│   ├── <span class="text-[#61afef]">02-csharp-basics/</span>
│   │   └── <span class="text-[#e5c07b]">01-what-is-csharp.vue</span>
│   │
│   └── <span class="text-[#61afef]">03-project-journey/</span>
│       └── <span class="text-[#e5c07b]">01-codewithdotnet-documentation.vue</span>
│
├── <span class="text-[#98c379]">pages/</span>
│   └── <span class="text-[#e5c07b]">HomePage.vue</span>
│
├── <span class="text-[#98c379]">router/</span>
│   └── <span class="text-[#e5c07b]">index.js</span>
│
├── <span class="text-[#98c379]">utils/</span>
│   └── <span class="text-[#e5c07b]">lessonLoader.js</span>
│
├── <span class="text-[#e5c07b]">App.vue</span>
└── <span class="text-[#e5c07b]">main.js</span></code></pre>
                    </div>
                </div>

                <div class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                    <div class="mb-5 flex items-center gap-3">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl text-green-700 bg-green-100">
                            <i class="fa-solid fa-bolt"></i>
                        </div>

                        <div>
                            <h2 class="text-2xl font-black text-slate-950">
                                What This Structure Solves
                            </h2>
                            <p class="text-sm text-slate-500">
                                Why this architecture is better than one huge lessons.js file.
                            </p>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div class="rounded-2xl border border-red-100 bg-red-50 p-5">
                            <h3 class="font-black text-red-700">
                                Before
                            </h3>
                            <p class="mt-2 text-sm leading-7 text-red-900/70">
                                All lesson content was inside one large lessons.js file. Huge HTML strings caused broken
                                divs,
                                blank pages, hard debugging, and poor maintainability.
                            </p>
                        </div>

                        <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                            <h3 class="font-black text-emerald-700">
                                Now
                            </h3>
                            <p class="mt-2 text-sm leading-7 text-emerald-900/70">
                                Every lesson is its own Vue component. One folder is one category, one file is one
                                lesson.
                                Routes and sidebar links are generated automatically.
                            </p>
                        </div>

                        <div class="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                            <h3 class="font-black text-blue-700">
                                Result
                            </h3>
                            <p class="mt-2 text-sm leading-7 text-blue-900/70">
                                The project became scalable, readable, professional, and ready for hundreds of lessons.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Core Concepts Cards -->
            <section class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                <div class="mb-8 text-center">
                    <p class="text-sm font-black uppercase tracking-[0.3em] text-blue-600">
                        Core Concepts
                    </p>
                    <h2 class="mt-3 text-4xl font-black text-slate-950">
                        What, Why, How, When
                    </h2>
                </div>

                <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <!-- main.js -->
                    <article class="rounded-3xl border border-blue-100 bg-blue-50 p-6">
                        <div class="flex items-center gap-3">
                            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                                <i class="fa-solid fa-power-off"></i>
                            </div>
                            <h3 class="text-xl font-black text-blue-950">
                                main.js
                            </h3>
                        </div>

                        <p class="mt-4 text-sm leading-7 text-blue-950/70">
                            <strong>What:</strong> Vue app এর entry point.
                            <br>
                            <strong>Why:</strong> App start, router connect, CSS load করার জন্য.
                            <br>
                            <strong>How:</strong> createApp(App).use(router).mount('#app') দিয়ে.
                            <br>
                            <strong>When:</strong> Website first load হওয়ার সময়.
                        </p>
                    </article>

                    <!-- App.vue -->
                    <article class="rounded-3xl border border-purple-100 bg-purple-50 p-6">
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-white">
                                <i class="fa-solid fa-window-maximize"></i>
                            </div>
                            <h3 class="text-xl font-black text-purple-950">
                                App.vue
                            </h3>
                        </div>

                        <p class="mt-4 text-sm leading-7 text-purple-950/70">
                            <strong>What:</strong> Root layout component.
                            <br>
                            <strong>Why:</strong> Sidebar, RouterView, mobile menu, scroll layout hold করার জন্য.
                            <br>
                            <strong>How:</strong> Sidebar + main content + RouterView render করে.
                            <br>
                            <strong>When:</strong> App start হলে immediately render হয়.
                        </p>
                    </article>

                    <!-- Sidebar.vue -->
                    <article class="rounded-3xl border border-orange-100 bg-orange-50 p-6">
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600 text-white">
                                <i class="fa-solid fa-bars-staggered"></i>
                            </div>
                            <h3 class="text-xl font-black text-orange-950">
                                Sidebar.vue
                            </h3>
                        </div>

                        <p class="mt-4 text-sm leading-7 text-orange-950/70">
                            <strong>What:</strong> Navigation component.
                            <br>
                            <strong>Why:</strong> Lessons/category links cleanly manage করার জন্য.
                            <br>
                            <strong>How:</strong> lessonLoader থেকে courses নিয়ে nested links বানায়.
                            <br>
                            <strong>When:</strong> User navigation/search/collapse use করলে.
                        </p>
                    </article>

                    <!-- lessonLoader -->
                    <article class="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                                <i class="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <h3 class="text-xl font-black text-emerald-950">
                                lessonLoader.js
                            </h3>
                        </div>

                        <p class="mt-4 text-sm leading-7 text-emerald-950/70">
                            <strong>What:</strong> Auto lesson scanner.
                            <br>
                            <strong>Why:</strong> Manual imports avoid করার জন্য.
                            <br>
                            <strong>How:</strong> import.meta.glob দিয়ে all lesson files scan করে.
                            <br>
                            <strong>When:</strong> New .vue lesson file add করলে.
                        </p>
                    </article>

                    <!-- Vue Router -->
                    <article class="rounded-3xl border border-cyan-100 bg-cyan-50 p-6">
                        <div class="flex items-center gap-3">
                            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-white">
                                <i class="fa-solid fa-route"></i>
                            </div>
                            <h3 class="text-xl font-black text-cyan-950">
                                Vue Router
                            </h3>
                        </div>

                        <p class="mt-4 text-sm leading-7 text-cyan-950/70">
                            <strong>What:</strong> Page navigation system.
                            <br>
                            <strong>Why:</strong> SPA route manage করার জন্য.
                            <br>
                            <strong>How:</strong> URL match করে correct component render করে.
                            <br>
                            <strong>When:</strong> User RouterLink click করলে.
                        </p>
                    </article>

                    <!-- File Based Lessons -->
                    <article class="rounded-3xl border border-rose-100 bg-rose-50 p-6">
                        <div class="flex items-center gap-3">
                            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-600 text-white">
                                <i class="fa-solid fa-file-code"></i>
                            </div>
                            <h3 class="text-xl font-black text-rose-950">
                                Lesson .vue Files
                            </h3>
                        </div>

                        <p class="mt-4 text-sm leading-7 text-rose-950/70">
                            <strong>What:</strong> Each lesson is a Vue component.
                            <br>
                            <strong>Why:</strong> Better UI, easier maintenance, no huge string.
                            <br>
                            <strong>How:</strong> Template এর ভিতরে Tailwind UI লিখে.
                            <br>
                            <strong>When:</strong> New lesson/documentation add করার সময়.
                        </p>
                    </article>
                </div>
            </section>

            <!-- Code Blocks -->
            <section class="space-y-8">
                <div class="text-center">
                    <p class="text-sm font-black uppercase tracking-[0.3em] text-slate-500">
                        Implementation
                    </p>
                    <h2 class="mt-3 text-4xl font-black text-slate-950">
                        Code Blocks
                    </h2>
                </div>

                <!-- main.js block -->
                <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                        <div class="flex items-center gap-2">
                            <span class="h-3 w-3 rounded-full bg-red-500"></span>
                            <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
                            <span class="h-3 w-3 rounded-full bg-green-500"></span>
                            <span class="ml-3 font-mono text-xs text-slate-400">main.js</span>
                        </div>
                        <span class="text-xs text-slate-500">Entry Point</span>
                    </div>

                    <pre
                        class="overflow-x-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#c586c0]">import</span> <span class="text-[#ce9178]">'./assets/main.css'</span>
<span class="text-[#c586c0]">import</span> <span class="text-[#ce9178]">'@fortawesome/fontawesome-free/css/all.min.css'</span>

<span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">createApp</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'vue'</span>
<span class="text-[#c586c0]">import</span> <span class="text-[#9cdcfe]">App</span> <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'./App.vue'</span>
<span class="text-[#c586c0]">import</span> <span class="text-[#9cdcfe]">router</span> <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'./router'</span>

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">app</span> = <span class="text-[#dcdcaa]">createApp</span>(<span class="text-[#9cdcfe]">App</span>)

<span class="text-[#9cdcfe]">app</span>.<span class="text-[#dcdcaa]">use</span>(<span class="text-[#9cdcfe]">router</span>)
<span class="text-[#9cdcfe]">app</span>.<span class="text-[#dcdcaa]">mount</span>(<span class="text-[#ce9178]">'#app'</span>)</code></pre>
                </div>

                <!-- lessonLoader block -->
                <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                        <div class="flex items-center gap-2">
                            <span class="h-3 w-3 rounded-full bg-red-500"></span>
                            <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
                            <span class="h-3 w-3 rounded-full bg-green-500"></span>
                            <span class="ml-3 font-mono text-xs text-slate-400">lessonLoader.js</span>
                        </div>
                        <span class="text-xs text-slate-500">Auto Scanner</span>
                    </div>

                    <pre class="overflow-x-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">lessonModules</span> = <span class="text-[#569cd6]">import</span>.<span class="text-[#9cdcfe]">meta</span>.<span class="text-[#dcdcaa]">glob</span>(<span class="text-[#ce9178]">'../lessons/**/*.vue'</span>)

<span class="text-[#569cd6]">function</span> <span class="text-[#dcdcaa]">removeOrderPrefix</span>(<span class="text-[#9cdcfe]">text</span>) {
  <span class="text-[#c586c0]">return</span> <span class="text-[#9cdcfe]">text</span>.<span class="text-[#dcdcaa]">replace</span>(<span class="text-[#d16969]">/^\d+-/</span>, <span class="text-[#ce9178]">''</span>)
}

<span class="text-[#569cd6]">function</span> <span class="text-[#dcdcaa]">removeExtension</span>(<span class="text-[#9cdcfe]">text</span>) {
  <span class="text-[#c586c0]">return</span> <span class="text-[#9cdcfe]">text</span>.<span class="text-[#dcdcaa]">replace</span>(<span class="text-[#d16969]">/\.vue$/</span>, <span class="text-[#ce9178]">''</span>)
}

<span class="text-[#569cd6]">function</span> <span class="text-[#dcdcaa]">formatTitle</span>(<span class="text-[#9cdcfe]">text</span>) {
  <span class="text-[#c586c0]">return</span> <span class="text-[#dcdcaa]">removeOrderPrefix</span>(<span class="text-[#9cdcfe]">text</span>)
    .<span class="text-[#dcdcaa]">replace</span>(<span class="text-[#d16969]">/-/g</span>, <span class="text-[#ce9178]">' '</span>)
    .<span class="text-[#dcdcaa]">replace</span>(<span class="text-[#d16969]">/\b\w/g</span>, (<span class="text-[#9cdcfe]">char</span>) =&gt; <span class="text-[#9cdcfe]">char</span>.<span class="text-[#dcdcaa]">toUpperCase</span>())
}</code></pre>
                </div>

                <!-- router block -->
                <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                    <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                        <div class="flex items-center gap-2">
                            <span class="h-3 w-3 rounded-full bg-red-500"></span>
                            <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
                            <span class="h-3 w-3 rounded-full bg-green-500"></span>
                            <span class="ml-3 font-mono text-xs text-slate-400">router/index.js</span>
                        </div>
                        <span class="text-xs text-slate-500">Auto Routes</span>
                    </div>

                    <pre class="overflow-x-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">createRouter</span>, <span class="text-[#9cdcfe]">createWebHistory</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'vue-router'</span>
<span class="text-[#c586c0]">import</span> <span class="text-[#9cdcfe]">HomePage</span> <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'../pages/HomePage.vue'</span>
<span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">lessons</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'../utils/lessonLoader'</span>

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">lessonRoutes</span> = <span class="text-[#9cdcfe]">lessons</span>.<span class="text-[#dcdcaa]">map</span>((<span class="text-[#9cdcfe]">lesson</span>) =&gt; {
  <span class="text-[#c586c0]">return</span> {
    <span class="text-[#9cdcfe]">path</span>: <span class="text-[#ce9178]">`/lessons/${lesson.slug}`</span>,
    <span class="text-[#9cdcfe]">component</span>: <span class="text-[#9cdcfe]">lesson</span>.<span class="text-[#9cdcfe]">component</span>,
  }
})</code></pre>
                </div>
            </section>

            <!-- Features Timeline -->
            <section class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                <div class="mb-8">
                    <p class="text-sm font-black uppercase tracking-[0.3em] text-emerald-600">
                        Features Completed
                    </p>
                    <h2 class="mt-3 text-4xl font-black text-slate-950">
                        What I Built Step by Step
                    </h2>
                </div>

                <div class="relative space-y-6 border-l-4 border-slate-200 pl-6">
                    <div class="relative rounded-2xl border border-blue-100 bg-blue-50 p-5">
                        <span
                            class="absolute -left-[39px] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">
                            1
                        </span>
                        <h3 class="text-xl font-black text-blue-950">
                            Vue Project Setup
                        </h3>
                        <p class="mt-2  leading-7 text-blue-950/70">
                            I created the base Vue project and understood how index.html, main.js, App.vue, and
                            RouterView connect together.
                        </p>
                    </div>

                    <div class="relative rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
                        <span
                            class="absolute -left-[39px] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-xs font-black text-white">
                            2
                        </span>
                        <h3 class="text-xl font-black text-cyan-950">
                            Tailwind + FontAwesome
                        </h3>
                        <p class="mt-2 leading-7 text-cyan-950/70">
                            I added Tailwind for utility-first UI styling and FontAwesome for professional icons.
                        </p>
                    </div>

                    <div class="relative rounded-2xl border border-orange-100 bg-orange-50 p-5">
                        <span
                            class="absolute -left-[39px] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-xs font-black text-white">
                            3
                        </span>
                        <h3 class="text-xl font-black text-orange-950">
                            Sidebar + Router
                        </h3>
                        <p class="mt-2 leading-7 text-orange-950/70">
                            I built a Sidebar component, used RouterLink for navigation, and RouterView for dynamic
                            page rendering.
                        </p>
                    </div>

                    <div class="relative rounded-2xl border border-purple-100 bg-purple-50 p-5">
                        <span
                            class="absolute -left-[39px] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-black text-white">
                            4
                        </span>
                        <h3 class="text-xl font-black text-purple-950">
                            Mobile Responsive Sidebar
                        </h3>
                        <p class="mt-2 leading-7 text-purple-950/70">
                            Added hamburger menu, overlay, sidebar slide animation, and route-change auto close for
                            mobile UX.
                        </p>
                    </div>

                    <div class="relative rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                        <span
                            class="absolute -left-[39px] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-black text-white">
                            5
                        </span>
                        <h3 class="text-xl font-black text-emerald-950">
                            File-Based Auto Lesson System
                        </h3>
                        <p class="mt-2 leading-7 text-emerald-950/70">
                            I moved from one huge lessons.js file to independent Vue lesson components and auto
                            generated sidebar + routes.
                        </p>
                    </div>

                    <div class="relative rounded-2xl border border-rose-100 bg-rose-50 p-5">
                        <span
                            class="absolute -left-[39px] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-rose-600 text-xs font-black text-white">
                            6
                        </span>
                        <h3 class="text-xl font-black text-rose-950">
                            Search + Collapse Sidebar
                        </h3>
                        <p class="mt-2 leading-7 text-rose-950/70">
                            Added searchable nested categories, collapsible menus, active navigation highlight, and
                            flexible search behavior.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Final Architecture Flow -->
            <section
                class="rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 text-white shadow-2xl">
                <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p class="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                            Final System
                        </p>

                        <h2 class="mt-3 text-4xl font-black">
                            Current Architecture Flow
                        </h2>

                        <p class="mt-5 leading-8 text-slate-300">
                            Now the developer only creates a new Vue lesson file. The system automatically scans it,
                            generates slug/title/category, creates routes, updates the nested sidebar, and renders it in
                            the browser.
                        </p>
                    </div>

                    <div
                        class="rounded-3xl border border-white/10 bg-white/5 p-6 font-mono text-sm leading-8 text-slate-300">
                        <div class="text-cyan-300">Create new lesson file</div>
                        <div class="text-slate-500">↓</div>
                        <div class="text-blue-300">import.meta.glob scans folders</div>
                        <div class="text-slate-500">↓</div>
                        <div class="text-purple-300">lessonLoader creates metadata</div>
                        <div class="text-slate-500">↓</div>
                        <div class="text-orange-300">Sidebar auto groups categories</div>
                        <div class="text-slate-500">↓</div>
                        <div class="text-emerald-300">Router auto creates route</div>
                        <div class="text-slate-500">↓</div>
                        <div class="text-rose-300">RouterView renders lesson UI</div>
                    </div>
                </div>
            </section>

            <!-- Next Steps -->
            <section class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                <div class="mb-8 text-center">
                    <p class="text-sm font-black uppercase tracking-[0.3em] text-orange-600">
                        Next Upgrades
                    </p>
                    <h2 class="mt-3 text-4xl font-black text-slate-950">
                        What Is Not Done Yet
                    </h2>
                </div>

                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h3 class="font-black text-slate-950">
                            Previous / Next Navigation
                        </h3>
                        <p class="mt-2 text-sm leading-7 text-slate-600">
                            Lesson page bottom এ previous এবং next lesson link থাকবে.
                        </p>
                    </div>

                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h3 class="font-black text-slate-950">
                            Dark Mode
                        </h3>
                        <p class="mt-2 text-sm leading-7 text-slate-600">
                            localStorage দিয়ে theme save করে dark/light toggle.
                        </p>
                    </div>

                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h3 class="font-black text-slate-950">
                            Search by Content
                        </h3>
                        <p class="mt-2 text-sm leading-7 text-slate-600">
                            শুধু title না, lesson content এর ভিতরেও search.
                        </p>
                    </div>

                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h3 class="font-black text-slate-950">
                            Breadcrumb
                        </h3>
                        <p class="mt-2 text-sm leading-7 text-slate-600">
                            Home / Category / Current Lesson navigation trail.
                        </p>
                    </div>

                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h3 class="font-black text-slate-950">
                            Copy Code Button
                        </h3>
                        <p class="mt-2 text-sm leading-7 text-slate-600">
                            VS Code style blocks এ one-click copy button.
                        </p>
                    </div>

                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h3 class="font-black text-slate-950">
                            .NET Backend
                        </h3>
                        <p class="mt-2 text-sm leading-7 text-slate-600">
                            Later Vue frontend এর সাথে ASP.NET Core API connect করা.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>