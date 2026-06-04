<template>
    <div class="max-w-5xl mx-auto py-10 px-4">
        <!-- Infographic Header -->
        <div class="text-center mb-12">
            <span class="text-blue-500 font-bold tracking-widest text-xs uppercase">Project Blueprint</span>
            <h2 class="text-4xl font-black text-slate-900 mt-2">CodeWithDotNet: Workflow Architecture</h2>
        </div>

        <!-- Infographic Timeline/Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <!-- Using a loop structure in mind, these are the visual cards -->
            <div
                class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300">
                <div
                    class="absolute -top-3 -left-3 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    01</div>
                <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">main.js</h3>
                <p class="text-slate-600 text-sm leading-relaxed">Vue app এর entry point. ব্রাউজার app open করলে এখান
                    থেকেই execution শুরু হয়। </p>
            </div>

            <div
                class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300">
                <div
                    class="absolute -top-3 -left-3 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    02</div>
                <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">App.vue</h3>
                <p class="text-slate-600 text-sm leading-relaxed">Root component. পুরো অ্যাপের কঙ্কাল বা মেইন লেআউট
                    এখানেই তৈরি হয়।</p>
            </div>

            <div
                class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300">
                <div
                    class="absolute -top-3 -left-3 bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    03</div>
                <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">Sidebar.vue</h3>
                <p class="text-slate-600 text-sm leading-relaxed">Reusable navigation. অ্যাপের সমস্ত লিঙ্কগুলো
                    ডাইনামিকালি এখানে শো করে।</p>
            </div>

            <!-- 04. lessons.js -->
            <div
                class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-emerald-500">
                <div
                    class="absolute -top-3 -left-3 bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    04</div>

                <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">
                    lessons.js (Data Layer)
                </h3>

                <p class="text-slate-600 text-sm leading-7">
                    lessons.js হলো আমাদের mini database। সব lesson এর title, slug, category, content এখানে store করা হয়।
                    Sidebar এই data loop করে links বানায় এবং LessonPage এই data থেকেই matching lesson render করে।
                </p>

                <div class="mt-4 rounded-xl bg-slate-950 p-4 text-xs text-cyan-300 font-mono overflow-x-auto">
                    {
                    title: 'What is .NET?',
                    slug: 'what-is-dotnet',
                    content: '...'
                    }
                </div>
            </div>

            <!-- 05. Vue Router -->
            <div
                class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-sky-500">
                <div
                    class="absolute -top-3 -left-3 bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    05</div>

                <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">
                    Vue Router (Navigation Engine)
                </h3>

                <p class="text-slate-600 text-sm leading-7">
                    Vue Router পুরো app এর route system control করে।
                    User কোন URL এ গেলে কোন page render হবে সেটা Vue Router decide করে।
                </p>

                <div class="mt-4 rounded-xl bg-slate-950 p-4 text-xs text-cyan-300 font-mono overflow-x-auto">
                    / → HomePage
                    /lessons/:slug → LessonPage
                </div>
            </div>

            <!-- 06. RouterLink -->
            <div
                class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-orange-500">
                <div
                    class="absolute -top-3 -left-3 bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    06</div>

                <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">
                    RouterLink (SPA Navigation)
                </h3>

                <p class="text-slate-600 text-sm leading-7">
                    Sidebar এর ভিতরে RouterLink use করা হয়।
                    এটা normal anchor tag এর মতো page reload করে না।
                    Instead, Vue internally component change করে fast navigation দেয়।
                </p>

                <div class="mt-4 rounded-xl bg-slate-950 p-4 text-xs text-cyan-300 font-mono overflow-x-auto">
                    &lt;RouterLink :to="/ lessons / $ { lesson.slug } "&gt;
                    { { lesson.title } }
                    &lt;/RouterLink&gt;
                </div>
            </div>

            <!-- 07. RouterView -->
            <div
                class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-pink-500">
                <div
                    class="absolute -top-3 -left-3 bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    07</div>

                <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">
                    RouterView (Dynamic Injection Layer)
                </h3>

                <p class="text-slate-600 text-sm leading-7">
                    RouterView হলো dynamic placeholder।
                    Current URL অনুযায়ী Vue Router এখানে correct page inject করে।
                </p>

                <div class="mt-4 rounded-xl bg-slate-950 p-4 text-xs text-cyan-300 font-mono overflow-x-auto">
                    &lt;RouterView /&gt;
                </div>

                <p class="mt-4 text-slate-500 text-xs leading-6">
                    Example:
                    <br>
                    / → HomePage render হয়
                    <br>
                    /lessons/what-is-dotnet → LessonPage render হয়
                </p>
            </div>

            <!-- 08. LessonPage.vue -->
            <div
                class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-rose-500">
                <div
                    class="absolute -top-3 -left-3 bg-rose-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    08</div>

                <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">
                    LessonPage.vue (Dynamic Rendering)
                </h3>

                <p class="text-slate-600 text-sm leading-7">
                    LessonPage URL থেকে slug নেয় এবং lessons.js থেকে matching lesson খুঁজে browser এ render করে।
                </p>

                <div class="mt-4 rounded-xl bg-slate-950 p-4 text-xs text-cyan-300 font-mono overflow-x-auto">
                    route.params.slug
                    ↓
                    lessons.find(...)
                    ↓
                    content render
                </div>
            </div>

            <!-- 09. Reactive State -->
            <div
                class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-violet-500">
                <div
                    class="absolute -top-3 -left-3 bg-violet-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    09</div>

                <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">
                    Reactive State (ref)
                </h3>

                <p class="text-slate-600 text-sm leading-7">
                    Vue এর ref() ব্যবহার করে reactive state তৈরি করা হয়।
                    Value change হলে UI automatically update হয়।
                </p>

                <div class="mt-4 rounded-xl bg-slate-950 p-4 text-xs text-cyan-300 font-mono overflow-x-auto">
                    const isSidebarOpen = ref(false)
                </div>

                <p class="mt-4 text-slate-500 text-xs leading-6">
                    Mobile sidebar open/close, dark mode, toggle system — এসব জায়গায় ref use হয়।
                </p>
            </div>
            <!-- 10. Browser Rendering Journey -->
            <div
                class="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 lg:col-span-3 border-l-4 border-l-indigo-500 group">

                <!-- Number Badge -->
                <div
                    class="absolute -top-4 -left-4 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-white group-hover:bg-indigo-500 transition-colors">
                    10
                </div>

                <!-- Title -->
                <h3 class="text-2xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
                    Full Browser Rendering Journey
                </h3>

                <!-- Description -->
                <p class="text-slate-600 text-base leading-relaxed mb-8 max-w-4xl">
                    পুরো Vue app এর journey শুরু হয় browser থেকে। Browser প্রথমে <code
                        class="text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded font-mono text-sm">index.html</code>
                    load করে। তারপর <code
                        class="text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded font-mono text-sm">main.js</code> Vue
                    app start করে। <code
                        class="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-mono text-sm">App.vue</code>
                    পুরো layout তৈরি করে। Sidebar lessons.js থেকে links render করে। User যখন RouterLink এ click করে, Vue
                    Router URL match করে। এরপর RouterView এর ভিতরে LessonPage inject হয় এবং lessons.js থেকে matching
                    content খুঁজে browser এ render করে।
                </p>

                <!-- Dark Mode Journey Flow Visualizer -->
                <div
                    class="rounded-2xl bg-[#0f172a] border border-slate-800 p-6 md:p-8 overflow-x-auto shadow-inner relative">

                    <!-- Mac-style Window Controls -->
                    <div class="absolute top-4 left-4 flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>

                    <!-- Code Flow Execution -->
                    <div class="font-mono text-sm md:text-base leading-loose mt-8">

                        <!-- Step 1 -->
                        <div class="text-blue-400 font-bold flex items-center gap-2">
                            <span>🌐 Browser</span>
                            <span class="text-slate-500 font-normal italic text-xs ml-4">// User visits the
                                website</span>
                        </div>
                        <div class="text-slate-700 ml-4 py-0.5">│</div>


                        <!-- Step 2 -->
                        <div class="text-orange-400 font-semibold ml-4">
                            📄 index.html
                        </div>

                        <div class="text-slate-600 ml-10 py-0.5">|</div>

                        <!-- Step 3 -->
                        <div class="text-yellow-300 font-semibold ml-10 flex items-center gap-2">
                            <span>⚡ main.js</span>
                            <span class="text-slate-500 font-normal italic text-xs ml-4">// Vue Instance
                                Initialized</span>
                        </div>

                        <div class="text-slate-600 ml-16 py-0.5">↓</div>

                        <!-- Step 4 -->
                        <div class="text-emerald-400 font-semibold ml-16 flex items-center gap-2">
                            <span>🧩 App.vue</span>
                            <span class="text-slate-500 font-normal italic text-xs ml-4">// Root Layout Mounts</span>
                        </div>

                        <div class="text-slate-600 ml-24 py-0.5">↓</div>

                        <!-- Step 5 -->
                        <div class="ml-24 flex items-center gap-3">
                            <span
                                class="text-emerald-300 bg-emerald-900/30 px-2 py-0.5 rounded border border-emerald-800/50">Sidebar.vue</span>
                            <span class="text-slate-500">+</span>
                            <span
                                class="text-indigo-400 bg-indigo-900/30 px-2 py-0.5 rounded border border-indigo-800/50">&lt;RouterView
                                /&gt;</span>
                        </div>

                        <div class="text-slate-600 ml-32 py-0.5">↓</div>

                        <!-- Step 6 -->
                        <div class="text-pink-400 ml-32 font-medium flex items-center gap-2">
                            <span>🖱️ RouterLink Click</span>
                            <span class="text-slate-500 font-normal italic text-xs ml-4">// User Action Triggered</span>
                        </div>

                        <div class="text-slate-600 ml-40 py-0.5">↓</div>

                        <!-- Step 7 -->
                        <div class="text-cyan-400 ml-40 font-medium">
                            🛣️ Vue Router Matches URL
                        </div>

                        <div class="text-slate-600 ml-48 py-0.5">↓</div>

                        <!-- Step 8 -->
                        <div class="text-emerald-400 font-semibold ml-48">
                            📄 LessonPage.vue
                        </div>

                        <div class="text-slate-600 ml-56 py-0.5">↓</div>

                        <!-- Step 9 -->
                        <div class="text-yellow-300 ml-56 flex items-center gap-2">
                            <span>📦 lessons.js</span>
                            <span class="text-slate-500 font-normal italic text-xs ml-4">// Fetches matching data</span>
                        </div>

                        <div class="text-slate-600 ml-64 py-0.5">↓</div>

                        <!-- Step 10 -->
                        <div
                            class="text-blue-400 font-bold ml-64 px-4 py-2 bg-blue-900/20 border border-blue-500/30 rounded-lg inline-block shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                            ✨ Final Browser Render
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <!-- Footer/Summary -->
        <div class="mt-12 bg-slate-900 rounded-3xl p-8 text-center text-slate-300">
            <p class="text-lg font-light italic">"From entry point (main.js) to deployment (Vercel), this is the
                optimized flow for your professional documentation system."</p>
        </div>
    </div>

    <div class="github-readme font-sans text-slate-800 max-w-6xl mx-auto leading-relaxed">

        <!-- Section: Main Header -->
        <div
            class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/20 p-8 shadow-sm mb-12">
            <h1 class="text-4xl font-black text-slate-900 flex items-center gap-3">
                <i class="fa-solid fa-folder-open text-blue-600"></i> Project Revision Summary
            </h1>
            <p class="text-slate-500 text-sm mt-2 font-mono">Vue 3 + Tailwind CSS Engine Core Concepts</p>
        </div>

        <!-- Section: The 15 Cards Grid Container -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-6 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-layer-group text-slate-700"></i> Architecture Pillars & Component Lifecycles
        </h2>

        <div class="grid gap-6 md:grid-cols-2 mx-auto lg:grid-cols-3">

            <!-- 1. main.js -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-bolt text-amber-500"></i> 1. main.js
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            main.js হলো Vue app এর starting point।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> Browser
                            যখন app open করে, Vue app কোথা থেকে start হবে সেটা main.js ঠিক করে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong>
                            hospitality App.vue import করে, router connect করে, CSS load করে, তারপর app কে #app div এর
                            ভিতরে mount করে।</p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
                    <span class="text-[#61afef]">createApp</span><span class="text-[#abb2bf]">(</span><span
                        class="text-[#e06c75]">App</span><span class="text-[#abb2bf]">).</span><span
                        class="text-[#56b6c2]">use</span><span class="text-[#abb2bf]">(</span><span
                        class="text-[#e06c75]">router</span><span class="text-[#abb2bf]">).</span><span
                        class="text-[#56b6c2]">mount</span><span class="text-[#abb2bf]">(</span><span
                        class="text-[#98c379]">'#app'</span><span class="text-[#abb2bf]">)</span>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন project start
                    হয়, তখন automatically main.js প্রথমে run হয়।</p>
            </div>

            <!-- 2. App.vue -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
                <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-box text-indigo-500"></i> 2. App.vue
                </h3>
                <div class="space-y-3 text-sm text-slate-600">
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                        App.vue হলো root component। পুরো app এর main layout এখানে থাকে।</p>
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> Sidebar, main
                        content, mobile navbar, RouterView — এগুলো এক জায়গায় manage করার জন্য।</p>
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> এখানে আমরা
                        layout বানাই: Sidebar | Main Content আর &lt;RouterView /&gt; current page show করে।</p>
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন app load
                        হয়, main.js প্রথমে App.vue render করে।</p>
                </div>
            </div>

            <!-- 3. Sidebar.vue -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-compass text-teal-500"></i> 3. Sidebar.vue
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            Sidebar হলো আলাদা reusable component।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> সব code
                            App.vue এর ভিতরে রাখলে messy হয়ে যায়। তাই sidebar আলাদা file এ রাখি।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong>
                            Sidebar.vue lessons.js থেকে data নিয়ে v-for দিয়ে links বানায়।</p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
                    <span class="text-[#d19a66]">v-for</span><span class="text-[#56b6c2]">=</span><span
                        class="text-[#98c379]">"lesson in lessons"</span>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন app layout
                    render হয়, তখন sidebar সবসময় show হয় desktop এ। mobile এ hamburger click করলে show হয়।</p>
            </div>

            <!-- 4. lessons.js -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
                <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-database text-rose-500"></i> 4. lessons.js
                </h3>
                <div class="space-y-3 text-sm text-slate-600">
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> এটা
                        lesson data রাখার file।</p>
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> যদি প্রতিটা
                        lesson manually sidebar এ লিখি, project বড় হলে manage করা impossible হবে।</p>
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> আমরা lesson
                        data array হিসেবে রাখি। Sidebar এই data থেকে link বানায়, আর LessonPage এই data থেকে content
                        show করে।</p>
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন নতুন
                        lesson add করতে চাই, শুধু lessons.js এ নতুন object add করি।</p>
                </div>
            </div>

            <!-- 5. Vue Router -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
                <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-route text-sky-500"></i> 5. Vue Router
                </h3>
                <div class="space-y-3 text-sm text-slate-600">
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Vue
                        Router page navigation handle করে।</p>
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> আমাদের দরকার
                        <span class="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">/</span> , <span
                            class="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">/lessons/what-is-dotnet</span> ,
                        <span class="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">/lessons/what-is-csharp</span>
                        এরকম page system।
                    </p>
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong>
                        router/index.js এ route define করি।</p>
                    <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন user
                        sidebar link click করে, Router URL দেখে ঠিক page render করে।</p>
                </div>
            </div>

            <!-- 6. RouterLink -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-link text-blue-500"></i> 6. RouterLink
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            Vue Router এর special link component।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> Normal
                            &lt;a&gt; দিলে page reload হয়। RouterLink দিলে Vue app reload না করেই page change করে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
                    <span class="text-[#e06c75]">&lt;RouterLink</span> <span class="text-[#d19a66]">:to</span><span
                        class="text-[#56b6c2]">=</span><span class="text-[#98c379]">"'/lessons/' +
                        lesson.slug"</span><span class="text-[#e06c75]">&gt;</span>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Internal page
                    navigation এর জন্য use করি।</p>
            </div>

            <!-- 7. RouterView -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-eye text-purple-500"></i> 7. RouterView
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            Current route এর component যেখানে show হবে সেটা হলো RouterView।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> App.vue
                            এর main area dynamic রাখতে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> URL যদি /
                            হয়, HomePage show হয়। URL যদি /lessons/what-is-dotnet হয়, LessonPage show হয়।</p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
                    <span class="text-[#e06c75]">&lt;RouterView</span> <span class="text-[#e06c75]/80">/&gt;</span>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন route অনুযায়ী
                    page content দেখাতে হয়।</p>
            </div>

            <!-- 8. Dynamic Lesson Page -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-file-code text-orange-500"></i> 8. Dynamic Lesson Page
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            একটা single LessonPage.vue, কিন্তু অনেক lesson show করতে পারে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> প্রতিটা
                            lesson এর জন্য আলাদা file বানালে project messy হবে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> URL থেকে
                            slug নেয় এবং matching lesson খুঁজে বের করে।</p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
                    <span class="text-[#e06c75]">route</span><span class="text-[#abb2bf]">.</span><span
                        class="text-[#e5c07b]">params</span><span class="text-[#abb2bf]">.</span><span
                        class="text-[#61afef]">slug</span>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন user sidebar
                    থেকে যেকোনো lesson click করে।</p>
            </div>

            <!-- 9. ref -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-battery-three-quarters text-emerald-500"></i> 9. ref
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            Vue এর reactive variable।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> কোনো
                            value change হলে UI automatically update করার জন্য।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
                    <span class="text-[#c678dd]">const</span> <span class="text-[#e06c75]">isSidebarOpen</span> <span
                        class="text-[#56b6c2]">=</span> <span class="text-[#61afef]">ref</span><span
                        class="text-[#abb2bf]">(</span><span class="text-[#d19a66]">false</span><span
                        class="text-[#abb2bf]">)</span>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Sidebar open/close,
                    form input, toggle, dark mode — এসব state manage করতে।</p>
            </div>

            <!-- 10. Mobile Sidebar -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-mobile-screen text-fuchsia-500"></i> 10. Mobile Sidebar
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            Mobile screen এ sidebar hide/show system।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> Mobile এ
                            sidebar সবসময় visible থাকলে পুরো screen ঢেকে ফেলবে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> আমরা
                            isSidebarOpen state এবং Tailwind classes use করি:</p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800 space-y-1">
                    <div><span class="text-[#e06c75]">-translate-x-full</span> <span class="text-[#5c6370]">//
                            Hidden</span></div>
                    <div><span class="text-[#98c379]">translate-x-0</span> <span class="text-[#5c6370]">//
                            Visible</span></div>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Mobile responsive
                    design করার সময়।</p>
            </div>

            <!-- 11. Overlay -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-moon text-slate-600"></i> 11. Overlay
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            Sidebar open হলে dark background।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> User যেন
                            বুঝতে পারে sidebar active আছে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
                    <span class="text-[#d19a66]">v-if</span><span class="text-[#56b6c2]">=</span><span
                        class="text-[#98c379]">"isSidebarOpen"</span> <span class="text-[#e06c75]">@click</span><span
                        class="text-[#56b6c2]">=</span><span class="text-[#98c379]">"isSidebarOpen = false"</span>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Mobile
                    drawer/sidebar/menu system এ use হয়।</p>
            </div>

            <!-- 12. Separate Scroll -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-scroll text-cyan-600"></i> 12. Separate Scroll
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            Sidebar আর main content আলাদা আলাদা scroll করবে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong>
                            Documentation website এ sidebar fixed থাকে, main content scroll হয়।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800 space-y-1">
                    <div><span class="text-[#e5c07b]">Parent:</span> <span class="text-[#98c379]">h-screen
                            overflow-hidden</span></div>
                    <div><span class="text-[#e5c07b]">Child:</span> <span class="text-[#98c379]">overflow-y-auto</span>
                    </div>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Docs website,
                    dashboard, admin panel layout এ।</p>
            </div>

            <!-- 13. Route Change Scroll Fix -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-arrows-spin text-indigo-600"></i> 13. Route Change Scroll Fix
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            নতুন lesson click করলে main content top এ চলে যাবে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> আগের page
                            এ নিচে scroll করা থাকলে নতুন page-ও নিচে open হচ্ছিল।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
                    <span class="text-[#e06c75]">mainContent</span><span class="text-[#abb2bf]">.</span><span
                        class="text-[#e5c07b]">value</span><span class="text-[#abb2bf]">.</span><span
                        class="text-[#e06c75]">scrollTop</span> <span class="text-[#56b6c2]">=</span> <span
                        class="text-[#b5cea8]">0</span>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন scroll
                    container browser window না হয়ে custom div/main হয়।</p>
            </div>

            <!-- 14. Tailwind CSS -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-palette text-pink-500"></i> 14. Tailwind CSS
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            Utility-first CSS framework।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> CSS file
                            আলাদা করে না লিখে directly class দিয়ে design করা যায়।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
                    <span class="text-[#e06c75]">&lt;div</span> <span class="text-[#d19a66]">class</span><span
                        class="text-[#56b6c2]">=</span><span class="text-[#98c379]">"bg-white p-8
                        rounded-3xl"</span><span class="text-[#e06c75]">&gt;</span>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Modern frontend UI
                    দ্রুত এবং clean ভাবে design করতে।</p>
            </div>

            <!-- 15. GitHub + Vercel -->
            <div
                class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <i class="fa-solid fa-rocket text-emerald-600"></i> 15. GitHub + Vercel
                    </h3>
                    <div class="space-y-3 text-sm text-slate-600">
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong>
                            GitHub code রাখে। Vercel website live করে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> তোমার
                            project public portfolio হবে।</p>
                        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
                    </div>
                </div>
                <div
                    class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800 space-y-1">
                    <div><span class="text-[#61afef]">git</span> <span class="text-[#abb2bf]">add . &amp;&amp;</span>
                        <span class="text-[#61afef]">git</span> <span class="text-[#abb2bf]">commit</span>
                    </div>
                    <div><span class="text-[#61afef]">git</span> <span class="text-[#abb2bf]">push origin main</span>
                    </div>
                </div>
                <p class="text-sm text-slate-600 mt-3"><strong
                        class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> প্রতিটা meaningful
                    progress এর পর।</p>
            </div>

        </div>

        <hr class="h-1 p-0 my-8 bg-slate-200 border-0">

        <!-- Section: Architecture Flow & Diagram Concept -->
        <section class="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto my-8">
            <!-- Flow System -->
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-slate-900 text-center">
                    <i class="fa-solid fa-network-wired"></i> Simple Vue Router Flow
                </h3>
                <div class="overflow-hidden rounded-2xl bg-[#1e1e1e] shadow-xl ring-1 ring-zinc-800">
                    <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                        <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
                        <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                        <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
                        <span class="text-xs text-slate-400 ml-2 font-mono">vue-router-flow.diagram</span>
                    </div>
                    <div class="p-6 font-mono text-sm space-y-3 text-center">
                        <div class="text-cyan-400 bg-cyan-950/40 py-2 rounded-xl border border-cyan-500/20">User Clicks
                            RouterLink (Sidebar)</div>
                        <div class="text-zinc-600 text-xs">▼</div>
                        <div class="text-blue-400 bg-blue-950/40 py-2 rounded-xl border border-blue-500/20">URL Changes
                            Without Page Reload</div>
                        <div class="text-zinc-600 text-xs">▼</div>
                        <div class="text-purple-400 bg-purple-950/40 py-2 rounded-xl border border-purple-500/20">Router
                            Matches Slug from lessons.js</div>
                        <div class="text-zinc-600 text-xs">▼</div>
                        <div class="text-emerald-400 bg-emerald-950/40 py-2 rounded-xl border border-emerald-500/20">
                            Dynamic Content Renders inside RouterView</div>
                    </div>
                </div>
            </div>

            <!-- Mini Code Block -->
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-slate-900 text-center">
                    <i class="fa-solid fa-code"></i> Dynamic Watch Scroll Fix
                </h3>
                <div class="overflow-hidden rounded-2xl bg-[#1e1e1e] shadow-xl ring-1 ring-zinc-800">
                    <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                        <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
                        <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                        <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
                        <span class="text-xs text-slate-400 ml-2 font-mono">RouteWatcher.js</span>
                    </div>
                    <pre class="p-4 overflow-x-auto text-xs leading-normal bg-[#1e1e1e] font-mono text-[#abb2bf]"><code><span class="text-[#5c6370]">// Watch route change to fix scroll position</span>
<span class="text-[#61afef]">watch</span><span class="text-[#abb2bf]">(</span><span class="text-[#c678dd]">() =&gt;</span> <span class="text-[#e06c75]">route</span><span class="text-[#abb2bf]">.</span><span class="text-[#e5c07b]">params</span><span class="text-[#abb2bf]">.</span><span class="text-[#e06c75]">slug</span><span class="text-[#abb2bf],">, () =&gt;</span> <span class="text-[#abb2bf]">{</span>
  <span class="text-[#c678dd]">if</span> <span class="text-[#abb2bf]">(</span><span class="text-[#e06c75]">mainContent</span><span class="text-[#abb2bf]">.</span><span class="text-[#e5c07b]">value</span><span class="text-[#abb2bf]">) {</span>
    <span class="text-[#e06c75]">mainContent</span><span class="text-[#abb2bf]">.</span><span class="text-[#e5c07b]">value</span><span class="text-[#abb2bf]">.</span><span class="text-[#e06c75]">scrollTop</span> <span class="text-[#56b6c2]">=</span> <span class="text-[#d19a66]">0</span><span class="text-[#abb2bf]">;</span>
  <span class="text-[#abb2bf]">}</span>
  <span class="text-[#e06c75]">isSidebarOpen</span><span class="text-[#abb2bf]">.</span><span class="text-[#e5c07b]">value</span> <span class="text-[#56b6c2]">=</span> <span class="text-[#d19a66]">false</span><span class="text-[#abb2bf]">;</span>
<span class="text-[#abb2bf] bags]">});</span></code></pre>
                </div>
            </div>
        </section>

        <hr class="h-1 p-0 my-8 bg-slate-200 border-0">

        <!-- Section: Final Summary -->
        <div
            class="my-8 p-6 bg-gradient-to-br from-blue-950/20 via-slate-50 to-blue-950/10 rounded-xl border border-blue-500/20 shadow-sm relative overflow-hidden">
            <h2 class="text-xl font-bold text-slate-950 flex items-center gap-2 mb-3">
                <i class="fa-solid fa-flag-checkered text-blue-900"></i> Architectural Synthesis
            </h2>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                এই ১৫টি কোর কনসেপ্টের সঠিক ইমপ্লিমেন্টেশন একটি সাধারণ SPA (Single Page Application)-কে কর্পোরেট
                স্ট্যান্ডার্ড প্রজেক্টে রূপান্তর করে। সেন্ট্রালাইজড ডেটা হ্যান্ডলিং (<span
                    class="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">lessons.js</span>) থেকে শুরু করে রেসপনসিভ
                মেকানিজম এবং স্ক্রোল কারেকশন ইউজার এক্সপেরিয়েন্সকে অনেক বেশি প্রফেশনাল করে তোলে:
            </p>

            <!-- Highlighted Technology Matrix Layer -->
            <div class="flex flex-wrap items-center gap-2 font-mono text-xs font-bold pt-1">
                <span class="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200/60 rounded-md shadow-sm">Vue 3
                    Core</span>
                <span class="text-slate-400 font-normal">+</span>
                <span
                    class="px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-md shadow-sm">Vue
                    Router</span>
                <span class="text-slate-400 font-normal">+</span>
                <span class="px-3 py-1.5 bg-sky-50 text-sky-700 border border-sky-200/60 rounded-md shadow-sm">Tailwind
                    Core</span>
                <span class="text-slate-400 font-normal">+</span>
                <span
                    class="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200/60 rounded-md shadow-sm">Vercel
                    Deploy</span>
            </div>
        </div>

    </div>

    <div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-6">

        <!-- Header Section -->
        <div
            class="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 p-8 shadow-sm mb-10">
            <h1 class="text-3xl font-black text-slate-900 flex items-center gap-3">
                <i class="fa-solid fa-network-wired text-blue-600"></i> Vue 3 Lifecycle & Router Flow Architecture
            </h1>
            <p class="text-slate-500 text-sm mt-2 font-mono">How index.html, main.js, App.vue, and Vue Router connect
                seamlessly</p>
        </div>

        <!-- Section 1: Interactive Mindmap Diagram -->
        <div class="mb-12">
            <h2 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
                <i class="fa-solid fa-sitemap text-indigo-600"></i> 1. Architectural Mindmap Flow
            </h2>

            <div class="overflow-hidden rounded-2xl bg-[#1e1e1e] shadow-xl ring-1 ring-zinc-800">
                <!-- Diagram Top Bar -->
                <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                    <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
                    <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                    <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
                    <span class="text-xs text-slate-400 ml-2 font-mono">architecture-map.diagram</span>
                </div>

                <!-- Mindmap Content -->
                <pre class="p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
<span class="text-[#98c379] font-bold">[ index.html ]</span> ─── (Contains <span class="text-[#e06c75]">&lt;div</span> <span class="text-[#d19a66]">id</span>=<span class="text-[#98c379]">"app"</span><span class="text-[#e06c75]">&gt;&lt;/div&gt;</span> as the blank canvas)
       │
       ▼
<span class="text-[#61afef] font-bold">[ main.js ]</span> 🚀 <span class="text-slate-500">(The Engine Starter - Executes First)</span>
       │
       ├──► <span class="text-[#c678dd]">Imports:</span> <span class="text-[#56b6c2]">createApp</span> <span class="text-slate-500">(from 'vue')</span>
       ├──► <span class="text-[#c678dd]">Imports:</span> <span class="text-[#e06c75]">App.vue</span> <span class="text-slate-500">(Root Layout Component)</span>
       ├──► <span class="text-[#c678dd]">Imports:</span> <span class="text-[#e06c75]">router</span> <span class="text-slate-500">(from 'router/index.js' Map)</span>
       │
       ▼ <span class="text-zinc-500">[The Mounting Process: app.use(router).mount('#app')]</span>
       │
       ├─────────────────────────────────────────┐
       ▼                                         ▼
<span class="text-[#e5c07b] font-bold">[ App.vue ]</span> 🏢 <span class="text-slate-500">(The Main Shell)</span>         <span class="text-[#61afef] font-bold">[ router/index.js ]</span> 🗺️ <span class="text-slate-500">(The Guide)</span>
   │                                        │
   ├──► <span class="text-slate-400">Sidebar.vue Component</span>               ├──► <span class="text-slate-400">Defines URL paths</span>
   │     └── Loops through <span class="text-[#e06c75]">lessons.js</span>            │     <span class="text-slate-500">(/, /lessons/:slug)</span>
   │     └── Renders <span class="text-[#e06c75]">&lt;RouterLink&gt;</span>           │
   │                                        ▼
   └──► <span class="text-[#e06c75] font-bold">&lt;RouterView /&gt;</span> ◄────────────────────┤ <span class="text-zinc-500">Matches current browser URL</span>
              │                               <span class="text-zinc-500">&amp; injects the active page</span>
              ▼
       <span class="text-[#e5c07b] font-bold">[ LessonPage.vue ]</span> 📄 <span class="text-slate-500">(Dynamic View Layer)</span>
              │
              └──► <span class="text-slate-400">Extracts</span> <span class="text-[#e06c75]">route</span>.<span class="text-[#e5c07b]">params</span>.<span class="text-[#61afef]">slug</span>
              └──► <span class="text-slate-400">Filters &amp; displays lesson content from</span> <span class="text-[#e06c75]">lessons.js</span>
      </pre>
            </div>
        </div>

        <!-- Section 2: Detailed Breakdown (Vertical Sequence) -->
        <div>
            <h2 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
                <i class="fa-solid fa-list-check text-blue-600"></i> 2. Deep-Dive Connection Steps
            </h2>

            <div
                class="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200/60">

                <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg max-w-4xl mx-auto">

                    <div class="mb-8 border-b border-slate-100 pb-4">
                        <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">Vue.js Architecture Flow</h2>
                        <p class="text-slate-500 text-sm mt-1">কিভাবে ব্রাউজার থেকে শুরু করে রাউটার পর্যন্ত ডেটা ফ্লো
                            কাজ করে তার বিস্তারিত ধাপ।</p>
                    </div>

                    <!-- Timeline Container with Vertical Line -->
                    <div
                        class="relative space-y-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">

                        <!-- Step 1 -->
                        <div class="relative pl-12 group">
                            <div
                                class="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-white text-emerald-700 font-mono text-xs font-bold z-10 group-hover:scale-110 group-hover:bg-emerald-200 transition-transform">
                                1</div>
                            <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                                <i class="fa-solid fa-code text-emerald-600 text-sm"></i> index.html ও main.js এর
                                কানেকশন
                            </h3>
                            <p class="text-slate-400 text-xs font-mono uppercase tracking-wider mt-0.5">The Entry Point
                            </p>
                            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
                                ব্রাউজার যখন অ্যাপ্লিকেশনটি ওপেন করে, সে সবার আগে <span
                                    class="bg-amber-50 text-amber-700 font-mono px-1.5 py-0.5 rounded text-xs border border-amber-200 shadow-sm">index.html</span>
                                ফাইলটি লোড করে। এই ফাইলে একটি মাত্র খালি <span
                                    class="bg-slate-50 font-mono px-1.5 py-0.5 rounded text-xs border border-slate-200 shadow-sm"><span
                                        class="text-indigo-600">&lt;div</span> <span
                                        class="text-sky-600">id</span>=<span class="text-emerald-600">"app"</span><span
                                        class="text-indigo-600">&gt;&lt;/div&gt;</span></span> থাকে। আধুনিক বিল্ড টুল
                                (Vite) এই ফাইলের স্ক্রিপ্ট ট্যাগ দিয়ে <span
                                    class="bg-blue-50 text-blue-700 font-mono px-1.5 py-0.5 rounded text-xs border border-blue-200 shadow-sm">main.js</span>-কে
                                যুক্ত করে দেয়, যা অ্যাপের মেইন ইঞ্জিন চালু করার নির্দেশ দেয়।
                            </p>
                        </div>

                        <!-- Step 2 -->
                        <div class="relative pl-12 group">
                            <div
                                class="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-4 ring-white text-blue-700 font-mono text-xs font-bold z-10 group-hover:scale-110 group-hover:bg-blue-200 transition-transform">
                                2</div>
                            <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                                <i class="fa-solid fa-bolt text-blue-600 text-sm"></i> main.js এ ইঞ্জিন চালু ও রাউটার
                                ইনজেকশন
                            </h3>
                            <p class="text-slate-400 text-xs font-mono uppercase tracking-wider mt-0.5">The
                                Initialization</p>
                            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
                                <span
                                    class="bg-blue-50 text-blue-700 font-mono px-1.5 py-0.5 rounded text-xs border border-blue-200 shadow-sm">main.js</span>
                                ফাইলে Vue এর <span
                                    class="bg-violet-50 text-violet-700 font-mono px-1.5 py-0.5 rounded text-xs border border-violet-200 shadow-sm">createApp</span>
                                ফাংশন রান করে কোর ইঞ্জিন তৈরি করা হয়। এখানে দুটি মেইন মডিউল ইমপোর্ট করা হয়: অ্যাপের
                                পুরো কঙ্কাল বা মেইন লেআউট <span
                                    class="bg-emerald-50 text-emerald-700 font-mono px-1.5 py-0.5 rounded text-xs border border-emerald-200 shadow-sm">App.vue</span>
                                এবং অ্যাপের রাস্তার গাইড ম্যাপ <span
                                    class="bg-rose-50 text-rose-700 font-mono px-1.5 py-0.5 rounded text-xs border border-rose-200 shadow-sm">router
                                    (router/index.js)</span>। এরপর <span
                                    class="bg-slate-50 font-mono px-1.5 py-0.5 rounded text-xs border border-slate-200 shadow-sm"><span
                                        class="text-slate-800">app</span>.<span class="text-violet-600">use</span>(<span
                                        class="text-slate-800">router</span>).<span
                                        class="text-violet-600">mount</span>(<span
                                        class="text-emerald-600">'#app'</span>)</span> কোডটি দিয়ে রাউটারসহ পুরো
                                সিস্টেমটাকে index.html-এর সেই খালি ডিভের ভেতর ইনজেক্ট করে দেওয়া হয়।
                            </p>
                        </div>

                        <!-- Step 3 -->
                        <div class="relative pl-12 group">
                            <div
                                class="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 ring-4 ring-white text-orange-700 font-mono text-xs font-bold z-10 group-hover:scale-110 group-hover:bg-orange-200 transition-transform">
                                3</div>
                            <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                                <i class="fa-solid fa-border-all text-orange-600 text-sm"></i> App.vue এর মেইন লেআউট
                                সেটআপ
                            </h3>
                            <p class="text-slate-400 text-xs font-mono uppercase tracking-wider mt-0.5">The Layout Root
                            </p>
                            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
                                এখন স্ক্রিনে <span
                                    class="bg-emerald-50 text-emerald-700 font-mono px-1.5 py-0.5 rounded text-xs border border-emerald-200 shadow-sm">App.vue</span>
                                লোড হয়ে গেছে। এটি একটি গ্লোবাল লেআউট বা মেইন হোল্ডার শেল হিসেবে কাজ করে। এর ভেতরে
                                সাধারণত আমরা দুটি মূল কম্পোনেন্ট জোন ডিফাইন করি:
                            </p>
                            <ul class="list-disc pl-5 mt-2 space-y-2 text-sm text-slate-600">
                                <li><span
                                        class="bg-emerald-50 text-emerald-700 font-mono px-1.5 py-0.5 rounded text-xs border border-emerald-200 shadow-sm">Sidebar.vue</span>
                                    Component: যা স্ক্রিনের একপাশে ফিক্সড হিসেবে রেন্ডার হয়।</li>
                                <li><span
                                        class="bg-slate-50 font-mono px-1.5 py-0.5 rounded text-xs border border-slate-200 shadow-sm"><span
                                            class="text-indigo-600">&lt;RouterView</span> <span
                                            class="text-indigo-600/80">/&gt;</span></span>: এটি একটি ডায়নামিক
                                    প্লেসহোল্ডার। ইউজার যখন যে পেজে যাবে, রাউটার সেই পেজের কন্টেন্ট এনে এই খালি প্লাগ
                                    পয়েন্টে রেন্ডার করবে।</li>
                            </ul>
                        </div>

                        <!-- Step 4 -->
                        <div class="relative pl-12 group">
                            <div
                                class="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 ring-4 ring-white text-yellow-700 font-mono text-xs font-bold z-10 group-hover:scale-110 group-hover:bg-yellow-200 transition-transform">
                                4</div>
                            <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                                <i class="fa-solid fa-link text-yellow-600 text-sm"></i> Sidebar এ RouterLink এর
                                নেভিগেশন ট্রিপ
                            </h3>
                            <p class="text-slate-400 text-xs font-mono uppercase tracking-wider mt-0.5">The Navigation
                                Trigger</p>
                            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
                                সাইডবারের ভেতরে আমরা <span
                                    class="bg-yellow-50 text-yellow-800 font-mono px-1.5 py-0.5 rounded text-xs border border-yellow-200 shadow-sm">lessons.js</span>
                                ফাইল থেকে লুপ চালিয়ে প্রতিটি লেসনের জন্য আলাদা লিংক তৈরি করি। প্রথাগত HTML এর <span
                                    class="bg-slate-50 font-mono px-1.5 py-0.5 rounded text-xs border border-slate-200 shadow-sm"><span
                                        class="text-indigo-600">&lt;a</span> <span
                                        class="text-sky-600">href</span>=<span
                                        class="text-emerald-600">"..."</span><span
                                        class="text-indigo-600">&gt;</span></span> ট্যাগের পরিবর্তে আমরা ব্যবহার করি
                                <span
                                    class="bg-slate-50 font-mono px-1.5 py-0.5 rounded text-xs border border-slate-200 shadow-sm"><span
                                        class="text-indigo-600">&lt;RouterLink</span> <span
                                        class="text-sky-600">:to</span>=<span class="text-emerald-600">"..."</span><span
                                        class="text-indigo-600">&gt;</span></span>। ইউজার যখন কোনো লিংকে ক্লিক করে, এটি
                                ব্রাউজারকে সম্পূর্ণ পেজ রিফ্রেশ হতে দেয় না, সে কেবল ব্রাউজারের URL পাথটি পরিবর্তন করে
                                দেয় (যেমন: <span
                                    class="bg-slate-100 text-slate-700 font-mono px-1.5 py-0.5 rounded text-xs border border-slate-300 shadow-sm">/lessons/what-is-dotnet</span>)।
                            </p>
                        </div>

                        <!-- Step 5 -->
                        <div class="relative pl-12 group">
                            <div
                                class="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 ring-4 ring-white text-pink-700 font-mono text-xs font-bold z-10 group-hover:scale-110 group-hover:bg-pink-200 transition-transform">
                                5</div>
                            <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                                <i class="fa-solid fa-file-invoice text-pink-600 text-sm"></i> RouterView ও Dynamic
                                Content রেন্ডারিং
                            </h3>
                            <p class="text-slate-400 text-xs font-mono uppercase tracking-wider mt-0.5">The Final
                                Destination</p>
                            <p class="text-slate-600 text-sm mt-2 leading-relaxed">
                                URL বার পরিবর্তন হওয়া মাত্রই ব্যাকএন্ডে সজাগ হয়ে যায় <span
                                    class="bg-rose-50 text-rose-700 font-mono px-1.5 py-0.5 rounded text-xs border border-rose-200 shadow-sm">router/index.js</span>।
                                সে তার ডিফাইন করা ম্যাপের সাথে বর্তমান URL মিলিয়ে দেখে। যখন সে দেখে যে এই প্যাটার্নের
                                সাথে <span
                                    class="bg-emerald-50 text-emerald-700 font-mono px-1.5 py-0.5 rounded text-xs border border-emerald-200 shadow-sm">LessonPage.vue</span>
                                কম্পোনেন্টটি অ্যাসাইন করা আছে, সে তৎক্ষণাৎ সেই কম্পোনেন্টটিকে ডেকে এনে <span
                                    class="bg-emerald-50 text-emerald-700 font-mono px-1.5 py-0.5 rounded text-xs border border-emerald-200 shadow-sm">App.vue</span>-এর
                                ভেতরে থাকা <span
                                    class="bg-slate-50 font-mono px-1.5 py-0.5 rounded text-xs border border-slate-200 shadow-sm"><span
                                        class="text-indigo-600">&lt;RouterView</span> <span
                                        class="text-indigo-600/80">/&gt;</span></span>-এর জায়গায় সোয়াপ বা রিপ্লেস করে
                                দেয়। <span
                                    class="bg-emerald-50 text-emerald-700 font-mono px-1.5 py-0.5 rounded text-xs border border-emerald-200 shadow-sm">LessonPage</span>
                                তখন URL-এর ডাইনামিক <span
                                    class="bg-cyan-50 text-cyan-700 font-mono px-1.5 py-0.5 rounded text-xs border border-cyan-200 shadow-sm">:slug</span>
                                প্যারামিটার রিড করে <span
                                    class="bg-yellow-50 text-yellow-800 font-mono px-1.5 py-0.5 rounded text-xs border border-yellow-200 shadow-sm">lessons.js</span>
                                থেকে নির্দিষ্ট অবজেক্টটি ফিল্টার করে স্ক্রিনে শো করে।
                            </p>
                        </div>

                    </div>

                    <!-- Summary Alert/Quote Box -->
                    <div
                        class="mt-10 p-5 bg-blue-50/50 rounded-2xl border border-blue-200/60 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                        <div class="mt-1 bg-blue-100 p-2 rounded-full">
                            <i class="fa-solid fa-code-branch text-blue-600 text-lg"></i>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold text-blue-950 uppercase tracking-wide">Architectural Core
                                Summary</h4>
                            <p class="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                                সংক্ষেপে: <span
                                    class="bg-amber-50 text-amber-700 font-mono px-1.5 py-0.5 rounded text-xs border border-amber-200">index.html</span>
                                এর ভেতর <span
                                    class="bg-blue-50 text-blue-700 font-mono px-1.5 py-0.5 rounded text-xs border border-blue-200">main.js</span>
                                লোড হয় <span class="text-blue-400 mx-1">──►</span> <span
                                    class="bg-blue-50 text-blue-700 font-mono px-1.5 py-0.5 rounded text-xs border border-blue-200">main.js</span>
                                রাউটার আর <span
                                    class="bg-emerald-50 text-emerald-700 font-mono px-1.5 py-0.5 rounded text-xs border border-emerald-200">App.vue</span>-কে
                                মাউন্ট করে <span class="text-blue-400 mx-1">──►</span> <span
                                    class="bg-emerald-50 text-emerald-700 font-mono px-1.5 py-0.5 rounded text-xs border border-emerald-200">App.vue</span>
                                তার লেআউটে <span
                                    class="bg-slate-50 font-mono px-1.5 py-0.5 rounded text-xs border border-slate-200"><span
                                        class="text-indigo-600">&lt;RouterView</span> <span
                                        class="text-indigo-600/80">/&gt;</span></span> হোল্ডার রাখে <span
                                    class="text-blue-400 mx-1">──►</span> ইউজার সাইডবারে ক্লিক করলে রাউটার URL রিড করে
                                এবং ম্যাচিং ডাইনামিক পেজ কন্টেন্ট সেই প্লেসহোল্ডারে সোয়াপ করে দেয়।
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>