<template>
    <div class="github-readme font-sans text-slate-800 mx-auto leading-relaxed p-5 max-w-5xl">

        <!-- Core Vision & Purpose -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-bullseye text-rose-500"></i> The Core Mission
        </h2>
        <p class="mt-0 mb-4 text-base text-slate-600">
            <strong>CodeWithDotNet</strong> is more than just a website; it is an active portfolio, a sandbox for
            front-end architecture, and a structured knowledge base. The philosophy is simple: <em
                class="text-indigo-600 font-semibold not-italic">Learn in public, build with intent, and document
                everything.</em>
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-md flex items-start gap-2.5">
                <i class="fa-solid fa-graduation-cap text-indigo-500 mt-1"></i>
                <div><strong class="block text-sm text-slate-900 font-semibold">Learn by Doing</strong><span
                        class="text-xs text-slate-500">Translating abstract backend .NET concepts into clean front-end
                        explanations.</span></div>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-md flex items-start gap-2.5">
                <i class="fa-solid fa-cloud-arrow-up text-emerald-500 mt-1"></i>
                <div><strong class="block text-sm text-slate-900 font-semibold">Continuous Deployment</strong><span
                        class="text-xs text-slate-500">Every single learning module is committed to Git and instantly
                        deployed.</span></div>
            </div>
        </div>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Tech Stack & Setup -->
        <div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-5">

            <!-- Section: Architecture & Pipeline -->
            <h2
                class="pb-2 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
                <i class="fa-solid fa-network-wired text-indigo-600"></i> CodeWithDotNet: Infrastructure & Pipeline
                Architecture
            </h2>
            <p class="mt-0 mb-6 text-base text-slate-600">
                The modern web infrastructure relies on decoupling code creation from its hosting platform. Below is the
                automated continuous integration and continuous deployment (CI/CD) workflow configured for
                <strong>CodeWithDotNet</strong>, showing how a local change goes live globally in seconds.
            </p>

            <!-- Informative Infographic Layer -->
            <div class="my-6 p-6 bg-slate-900 text-slate-100 rounded-xl shadow-lg border border-slate-800">
                <h4 class="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-6 flex items-center gap-1.5">
                    <i class="fa-solid fa-circle-nodes"></i> Automated CI/CD Lifecycle Diagram
                </h4>

                <div class="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">

                    <!-- Box 1: Local IDE -->
                    <div
                        class="flex-1 w-full p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center relative group">
                        <div class="text-blue-400 text-lg mb-1.5"><i class="fa-solid fa-laptop-code"></i></div>
                        <span class="font-bold block text-slate-200 mb-1">1. Local Workstation</span>
                        <span class="text-[11px] text-slate-400 block">Vue 3 + Vite + Tailwind CSS Development</span>
                    </div>

                    <!-- Arrow -->
                    <div class="text-indigo-500 text-lg font-bold md:rotate-0 rotate-90"><i
                            class="fa-solid fa-chevron-right"></i></div>

                    <!-- Box 2: Version Control -->
                    <div
                        class="flex-1 w-full p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center relative">
                        <div class="text-purple-400 text-lg mb-1.5"><i class="fa-brands fa-github"></i></div>
                        <span class="font-bold block text-slate-200 mb-1">2. Git / GitHub</span>
                        <span class="text-[11px] text-slate-400 block">Remote Repository Source of Truth</span>
                    </div>

                    <!-- Arrow -->
                    <div class="text-indigo-500 text-lg font-bold md:rotate-0 rotate-90"><i
                            class="fa-solid fa-chevron-right"></i></div>

                    <!-- Box 3: Vercel Compilation -->
                    <div
                        class="flex-1 w-full p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center relative">
                        <div class="text-amber-400 text-lg mb-1.5"><i
                                class="fa-solid fa-triangle-exclamation animate-pulse"></i></div>
                        <span class="font-bold block text-slate-200 mb-1">3. Vercel Hook</span>
                        <span class="text-[11px] text-slate-400 block">Automatic Trigger & Production Build</span>
                    </div>

                    <!-- Arrow -->
                    <div class="text-indigo-500 text-lg font-bold md:rotate-0 rotate-90"><i
                            class="fa-solid fa-chevron-right"></i></div>

                    <!-- Box 4: Edge CDN -->
                    <div
                        class="flex-1 w-full p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-200 rounded-lg text-center relative">
                        <div class="text-emerald-400 text-lg mb-1.5"><i class="fa-solid fa-cloud-arrow-up"></i></div>
                        <span class="font-bold block text-emerald-100 mb-1">4. Live Platform</span>
                        <span class="text-[11px] text-emerald-400 block">Global CDN Deployment Network</span>
                    </div>

                </div>
            </div>

            <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

            <!-- Detailed Processes -->
            <h3 class="text-xl font-bold mt-6 mb-4 text-slate-900 flex items-center gap-2">
                <i class="fa-solid fa-list-check text-slate-700"></i> Core Execution Mechanics
            </h3>

            <div class="space-y-6">
                <!-- Milestone 1 -->
                <div class="flex gap-4 items-start">
                    <div class="p-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-600 mt-1">
                        <i class="fa-solid fa-bolt text-lg w-5 text-center"></i>
                    </div>
                    <div>
                        <h4 class="text-base font-semibold text-slate-900">1. Vue 3 Initialization via Vite Engine</h4>
                        <p class="text-sm text-slate-600 mt-0.5">
                            Instead of legacy bundlers, the project leverages native ES Module imports during
                            development via <strong>Vite</strong>. This prevents upfront bundling of the entire asset
                            tree, loading modules instantly on-demand and accelerating HMR (Hot Module Replacement)
                            speeds.
                        </p>
                    </div>
                </div>

                <!-- Milestone 2 -->
                <div class="flex gap-4 items-start">
                    <div class="p-2 bg-cyan-50 border border-cyan-200 rounded-lg text-cyan-600 mt-1">
                        <i class="fa-solid fa-wand-magic-sparkles text-lg w-5 text-center"></i>
                    </div>
                    <div>
                        <h4 class="text-base font-semibold text-slate-900">2. Utility-First PostCSS Parsing (Tailwind
                            CSS)</h4>
                        <p class="text-sm text-slate-600 mt-0.5">
                            Tailwind operates on an active compilation scanner. During development, it reads our Vue
                            component structure dynamically, generating utility classes only for the components
                            explicitly typed. On full deployment, its scanning module eliminates dead CSS code
                            completely, shipping an ultra-minified CSS payload.
                        </p>
                    </div>
                </div>

                <!-- Milestone 3 -->
                <div class="flex gap-4 items-start">
                    <div class="p-2 bg-purple-50 border border-purple-200 rounded-lg text-purple-600 mt-1">
                        <i class="fa-solid fa-code-commit text-lg w-5 text-center"></i>
                    </div>
                    <div>
                        <h4 class="text-base font-semibold text-slate-900">3. Version Control Synchronization</h4>
                        <p class="text-sm text-slate-600 mt-0.5">
                            Local mutations are tracked atomically using decentralized Git architectures. When code
                            commits are dispatched to the remote repository source via
                            <code>git push origin main</code>, GitHub processes the update snapshot and fires webhook
                            protocols out to downstream cloud platforms.
                        </p>
                    </div>
                </div>

                <!-- Milestone 4 -->
                <div class="flex gap-4 items-start">
                    <div class="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-600 mt-1">
                        <i class="fa-solid fa-server text-lg w-5 text-center"></i>
                    </div>
                    <div>
                        <h4 class="text-base font-semibold text-slate-900">4. CI/CD Orchestration Layer (Vercel Edge
                            Platform)</h4>
                        <p class="text-sm text-slate-600 mt-0.5">
                            Vercel catches the incoming GitHub repository commit webhook trigger instantly. It launches
                            isolated virtualization containers to run <code>npm run build</code>, transpiling Vue
                            templates, routing schemas, and JavaScript arrays down into standard high-efficiency HTML,
                            JS, and CSS static bundles distributed right onto global global Edge servers.
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Directory Structure -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-folder-tree text-blue-500"></i> Project Directory Structure
        </h2>
        <p class="mt-0 mb-3 text-base text-slate-600">A clean separation of concerns has been implemented within the
            <code>src/</code> directory:
        </p>

        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code>src/
├── <span class="text-[#4ec9b0]">components/</span>
│   └── <span class="text-[#ce9178]">Sidebar.vue</span>       <span class="text-[#6a9955]">// Reusable sidebar, reactive navigation links</span>
├── <span class="text-[#4ec9b0]">data/</span>
│   └── <span class="text-[#ce9178]">lessons.js</span>        <span class="text-[#6a9955]">// Centralized database for lesson metadata</span>
├── <span class="text-[#4ec9b0]">pages/</span>
│   └── <span class="text-[#ce9178]">LessonPage.vue</span>     <span class="text-[#6a9955]">// Dynamic routing target for parsing active lessons</span>
├── <span class="text-[#4ec9b0]">router/</span>
│   └── <span class="text-[#ce9178]">index.js</span>          <span class="text-[#6a9955]">// Vue Router mapping configuration</span>
├── <span class="text-[#4ec9b0]">assets/</span>
│   └── <span class="text-[#ce9178]">main.css</span>          <span class="text-[#6a9955]">// Global Tailwind styles and directive configuration</span>
├── App.vue               <span class="text-[#6a9955]">// Main shell component layout wrapper</span>
└── main.js               <span class="text-[#6a9955]">// Application entry point and bootstrapping</span></code></pre>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Engineering Concepts Learned -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-brain text-purple-600"></i> Core Engineering Paradigms Mastered
        </h2>

        <!-- Concept 1 -->
        <div class="mb-5">
            <h3 class="text-lg font-semibold text-slate-900 flex items-center gap-2 mb-1.5">
                <i class="fa-solid fa-puzzle-piece text-indigo-500"></i> 1. Component-Driven Architecture
            </h3>
            <p class="text-sm text-slate-600 mb-2 pl-6">
                Instead of treating web interfaces as huge monolithic blobs of HTML, UI elements are broken down into
                self-contained, modular, reusable blocks.
            </p>
            <div class="pl-6 font-semibold text-xs text-slate-500 uppercase tracking-wider mb-1">Architectural
                Realization:</div>
            <div class="pl-6">
                <pre
                    class="p-3 overflow-x-auto text-xs leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4]"><code><span class="text-[#6a9955]">&lt;!-- Inside App.vue --&gt;</span>
<span class="text-[#569cd6]">&lt;template&gt;</span>
  <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex"</span><span class="text-[#569cd6]">&gt;</span>
    <span class="text-[#4ec9b0]">&lt;Sidebar /&gt;</span> <span class="text-[#6a9955]">&lt;!-- Isolated scope component --&gt;</span>
    <span class="text-[#569cd6]">&lt;main</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex-1"</span><span class="text-[#569cd6]">&gt;&lt;router-view /&gt;&lt;/main&gt;</span>
  <span class="text-[#569cd6]">&lt;/div&gt;</span>
<span class="text-[#569cd6]">&lt;/template&gt;</span></code></pre>
            </div>
        </div>

        <!-- Concept 2 -->
        <div class="mb-5">
            <h3 class="text-lg font-semibold text-slate-900 flex items-center gap-2 mb-1.5">
                <i class="fa-solid fa-route text-blue-500"></i> 2. Client-Side Decoupled Routing
            </h3>
            <p class="text-sm text-slate-600 mb-2 pl-6">
                Vue Router intercepts standard browser server requests. When navigating from
                <code>/lessons/what-is-dotnet</code> to another lesson, the browser does not trigger a full refresh.
                Instead, components swap out instantly, preserving internal application state and providing a modern,
                desktop-like app experience.
            </p>
        </div>

        <!-- Concept 3 & 4 Combined Dynamic / Data Driven UI -->
        <div class="mb-5">
            <h3 class="text-lg font-semibold text-slate-900 flex items-center gap-2 mb-1.5">
                <i class="fa-solid fa-database text-amber-500"></i> 3. Data-Driven UI & Dynamic Routing
            </h3>
            <p class="text-sm text-slate-600 mb-2 pl-6">
                Hardcoding text files for every new lesson introduces technical debt. By shifting structural data to a
                centralized JavaScript object configuration array inside <code>lessons.js</code>, the user interface
                acts strictly as a reactive shell.
            </p>
            <div class="pl-6 font-semibold text-xs text-slate-500 uppercase tracking-wider mb-1">Structural
                Configuration Matrix (lessons.js):</div>
            <div class="pl-6">
                <pre
                    class="p-3 overflow-x-auto text-xs leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4]"><code><span class="text-[#569cd6]">export const</span> <span class="text-[#9cdcfe]">lessons</span> = [
  {
    <span class="text-[#9cdcfe]">id:</span> <span class="text-[#ce9178]">"what-is-dotnet"</span>,
    <span class="text-[#9cdcfe]">title:</span> <span class="text-[#ce9178]">"What is .NET?"</span>,
    <span class="text-[#9cdcfe]">category:</span> <span class="text-[#ce9178]">"Basics"</span>
  },
  {
    <span class="text-[#9cdcfe]">id:</span> <span class="text-[#ce9178]">"csharp-introduction"</span>,
    <span class="text-[#9cdcfe]">title:</span> <span class="text-[#ce9178]">"Introduction to C#"</span>,
    <span class="text-[#9cdcfe]">category:</span> <span class="text-[#ce9178]">"C#"</span>
  }
];</code></pre>
            </div>
            <div class="bg-amber-50 border-l-4 border-l-amber-500 p-4 my-3 ml-6 rounded-r-md text-xs text-amber-900">
                <strong>The Automation Payoff:</strong> Adding a new item to the object array instantly populates the
                Sidebar navigation and sets up a dynamic listener route automatically without touching route view
                templates.
            </div>
        </div>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Section: Implementation Architecture (App.vue) -->
        <h2 class="pb-1 text-2xl font-bold mt-10 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-code-branch text-blue-600"></i> Layout Implementation: <code>App.vue</code>
        </h2>
        <p class="mt-0 mb-4 text-base text-slate-600">
            The conceptual responsive workflow discussed above is fully orchestrated via declarative bindings inside the
            main entry layout component. Here is the concrete implementation architecture of
            <strong>CodeWithDotNet</strong>:
        </p>

        <!-- VS Code Styled Full Code Block -->
        <div class="my-4 shadow-md rounded-md overflow-hidden border border-[#2d2d2d]">
            <!-- Top Window Bar for Design -->
            <div class="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between text-xs font-mono text-[#neutral-400]">
                <span class="text-slate-400 flex items-center gap-1.5"><i
                        class="fa-regular fa-file-code text-emerald-500"></i> App.vue</span>
                <span class="text-slate-500">Vue 3 Composition API</span>
            </div>

            <pre
                class="p-4 overflow-x-auto text-xs sm:text-sm leading-normal bg-[#1e1e1e] font-mono text-[#d4d4d4] max-h-[450px] overflow-y-auto"><code><span class="text-[#569cd6]">&lt;script</span> <span class="text-[#9cdcfe]">setup</span><span class="text-[#569cd6]">&gt;</span>
<span class="text-[#569cd6]">import</span> { <span class="text-[#9cdcfe]">ref</span> } <span class="text-[#569cd6]">from</span> <span class="text-[#ce9178]">'vue'</span>
<span class="text-[#569cd6]">import</span> { <span class="text-[#9cdcfe]">RouterView</span> } <span class="text-[#569cd6]">from</span> <span class="text-[#ce9178]">'vue-router'</span>
<span class="text-[#569cd6]">import</span> <span class="text-[#9cdcfe]">Sidebar</span> <span class="text-[#569cd6]">from</span> <span class="text-[#ce9178]">'./components/Sidebar.vue'</span>

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">isSidebarOpen</span> = <span class="text-[#dcdcaa]">ref</span>(<span class="text-[#569cd6]">false</span>)
<span class="text-[#569cd6]">&lt;/script&gt;</span>

<span class="text-[#569cd6]">&lt;template&gt;</span>
  <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex h-screen overflow-hidden bg-slate-100"</span><span class="text-[#569cd6]">&gt;</span>

    <span class="text-[#6a9955]">&lt;!-- Mobile Overlay Backdrop --&gt;</span>
    <span class="text-[#569cd6]">&lt;div</span> 
      <span class="text-[#9cdcfe]">v-if</span>=<span class="text-[#ce9178]">"isSidebarOpen"</span> 
      <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"fixed inset-0 z-40 bg-black/50 lg:hidden"</span> 
      <span class="text-[#4ec9b0]">@click</span>=<span class="text-[#9cdcfe]">"isSidebarOpen = <span class="text-[#569cd6]">false</span>"</span>
    <span class="text-[#569cd6]">&gt;&lt;/div&gt;</span>

    <span class="text-[#6a9955]">&lt;!-- Drawer Sidebar Panel --&gt;</span>
    <span class="text-[#569cd6]">&lt;aside</span> <span class="text-[#4ec9b0]">:class</span>=<span class="text-[#ce9178]">"[
      'fixed left-0 top-0 z-50 h-screen w-72 transform overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]"</span><span class="text-[#569cd6]">&gt;</span>
      <span class="text-[#569cd6]">&lt;Sidebar</span> <span class="text-[#569cd6]">/&gt;</span>
    <span class="text-[#569cd6]">&lt;/aside&gt;</span>

    <span class="text-[#6a9955]">&lt;!-- Main Content Viewport Portals --&gt;</span>
    <span class="text-[#569cd6]">&lt;main</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex-1 overflow-y-auto"</span><span class="text-[#569cd6]">&gt;</span>

      <span class="text-[#6a9955]">&lt;!-- Responsive Mobile Header (Hidden on Desktop viewports) --&gt;</span>
      <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 lg:hidden"</span><span class="text-[#569cd6]">&gt;</span>
        <span class="text-[#569cd6]">&lt;button</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white"</span> <span class="text-[#4ec9b0]">@click</span>=<span class="text-[#9cdcfe]">"isSidebarOpen = <span class="text-[#569cd6]">true</span>"</span><span class="text-[#569cd6]">&gt;</span>
          <span class="text-[#569cd6]">&lt;i</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"fa-solid fa-bars"</span><span class="text-[#569cd6]">&gt;&lt;/i&gt;</span>
        <span class="text-[#569cd6]">&lt;/button&gt;</span>
        <span class="text-[#569cd6]">&lt;h1</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"text-lg font-bold text-slate-900"</span><span class="text-[#569cd6]">&gt;</span>CodeWithDotNet<span class="text-[#569cd6]">&lt;/h1&gt;</span>
      <span class="text-[#569cd6]">&lt;/div&gt;</span>

      <span class="text-[#6a9955]">&lt;!-- Dynamic Injection View Node --&gt;</span>
      <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"p-5 lg:p-10"</span><span class="text-[#569cd6]">&gt;</span>
        <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mx-auto max-w-6xl"</span><span class="text-[#569cd6]">&gt;</span>
          <span class="text-[#4ec9b0]">&lt;RouterView</span> <span class="text-[#569cd6]">/&gt;</span>
        <span class="text-[#569cd6]">&lt;/div&gt;</span>
      <span class="text-[#569cd6]">&lt;/div&gt;</span>

    <span class="text-[#569cd6]">&lt;/main&gt;</span>
  <span class="text-[#569cd6]">&lt;/div&gt;</span>
<span class="text-[#569cd6]">&lt;/template&gt;</span></code></pre>
        </div>

        <!-- Code Metrics / Key Takeaways -->
        <div class="mt-4 border border-slate-200 rounded-xl bg-white p-4">
            <h4 class="text-sm font-semibold text-slate-900 flex items-center gap-1.5 mb-2">
                <i class="fa-solid fa-square-poll-horizontal text-indigo-500"></i> Code Architecture Highlights:
            </h4>
            <ul class="pl-5 list-none space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li class="flex items-start gap-2">
                    <i class="fa-solid fa-caret-right text-indigo-500 mt-1"></i>
                    <div><strong>Dynamic Array Bindings:</strong> Tailwind's classes are evaluated inside an array
                        matrix (<code>:class="[...]"</code>), allowing modern conditional toggles based on the reactive
                        state of <code>isSidebarOpen</code>.</div>
                </li>
                <li class="flex items-start gap-2">
                    <i class="fa-solid fa-caret-right text-indigo-500 mt-1"></i>
                    <div><strong>Screen Space Separation (<code>lg:static</code>):</strong> The layout completely shifts
                        behavior at the <code>1024px</code> grid mark (Large Viewports). On desktop screens, mobile
                        overrides like translation modifications are completely bypassed, locking the navigation
                        natively into the application container layout.</div>
                </li>
            </ul>
        </div>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Roadmap & Ultimate Target -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-map text-emerald-600"></i> Future Roadmap Strategy
        </h2>
        <p class="mt-0 mb-4 text-base text-slate-600">
            The architecture built today scales horizontally. The roadmap ahead ensures CodeWithDotNet evolves from a
            simple template into a full-scale ecosystem engine:
        </p>

        <!-- Timeline Flow -->
        <div class="pl-4 border-l-2 border-slate-200 space-y-4 my-4 font-sans text-sm">
            <div class="relative">
                <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                <span class="font-bold text-slate-900 block">Phase 1: Core Fundamentals (Current)</span>
                <span class="text-xs text-slate-500">Documenting basic .NET runtimes, CLR compilation, and core C#
                    types/structures.</span>
            </div>
            <div class="relative">
                <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                <span class="font-bold text-slate-700 block">Phase 2: Backend Architecture & APIs</span>
                <span class="text-xs text-slate-500">Implementing patterns with ASP.NET Core, building robust RESTful
                    APIs, and understanding routing mechanics.</span>
            </div>
            <div class="relative">
                <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                <span class="font-bold text-slate-700 block">Phase 3: Data Layer Integration</span>
                <span class="text-xs text-slate-500">Connecting persistent database instances using SQL Server and
                    Entity Framework Core (EF Core).</span>
            </div>
            <div class="relative">
                <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                <span class="font-bold text-slate-700 block">Phase 4: Full Stack Project Synthesis</span>
                <span class="text-xs text-slate-500">Deploying unified real-world administrative dashboards and
                    full-fledged ERP microservices.</span>
            </div>
        </div>

    </div>
</template>