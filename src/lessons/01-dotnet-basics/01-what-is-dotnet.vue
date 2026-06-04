<template>
    <div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-5">

        <!-- Section: Introduction -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-compass text-blue-600"></i> Comprehensive Introduction
        </h2>
        <p class="mt-0 mb-4 text-base text-slate-600">
            <span class="text-blue-600 font-semibold">.NET</span> (pronounced as <em>Dot Net</em>) is a free,
            open-source, developer platform created by Microsoft for building many different types of applications. It
            is not just a framework or a single programming language; it is an entire <span
                class="text-blue-600 font-semibold">ecosystem</span> that provides the tooling, programming models,
            libraries, and runtime optimization needed to build high-performance software systems.
        </p>

        <blockquote>
            <div class="bg-blue-50 border-l-4 border-l-blue-500 p-4 my-4 rounded-r-md text-sm text-blue-900">
                <strong>Historical Context:</strong> Originally launched in 2002 as ".NET Framework" (which only ran on
                Windows Systems), the platform was completely rebuilt from scratch in 2016. Today, modern <strong>.NET
                    (version 5, 6, 7, 8, and beyond)</strong> is entirely open-source, highly cross-platform, and
                modular.
            </div>
        </blockquote>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Section: The Core Components -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-gears text-indigo-500"></i> The Core Architecture of .NET
        </h2>
        <p class="mt-0 mb-4 text-base text-slate-600">
            To understand how .NET works under the hood, we must explore its three foundational pillars:
        </p>

        <div class="space-y-6 my-4">
            <!-- Component 1 -->
            <div class="p-4 border border-slate-200 bg-slate-50/50 rounded-lg">
                <h4 class="text-base font-semibold text-slate-900 flex items-center gap-2">
                    <i class="fa-solid fa-microchip text-indigo-600"></i> 1. The Runtime (CLR)
                </h4>
                <p class="text-sm text-slate-600 mt-1 pl-7">
                    The <span class="text-indigo-600 font-semibold">Common Language Runtime (CLR)</span> is the
                    execution engine of .NET. It handles thread execution, code compilation via JIT (Just-In-Time),
                    memory allocation, and automated **Garbage Collection (GC)**. The CLR abstracts hardware operations,
                    making your application safe and robust.
                </p>
            </div>

            <!-- Component 2 -->
            <div class="p-4 border border-slate-200 bg-slate-50/50 rounded-lg">
                <h4 class="text-base font-semibold text-slate-900 flex items-center gap-2">
                    <i class="fa-solid fa-book-bookmark text-emerald-600"></i> 2. The Base Class Library (BCL)
                </h4>
                <p class="text-sm text-slate-600 mt-1 pl-7">
                    Instead of rewriting fundamental operations from scratch, .NET ships with a massive suite of
                    standard libraries called the <span class="text-emerald-600 font-semibold">Base Class Library
                        (BCL)</span>. This gives developers out-of-the-box access to APIs for reading/writing files,
                    networking, data collection handling, encryption, and JSON serialization.
                </p>
            </div>

            <!-- Component 3 -->
            <div class="p-4 border border-slate-200 bg-slate-50/50 rounded-lg">
                <h4 class="text-base font-semibold text-slate-900 flex items-center gap-2">
                    <i class="fa-solid fa-screwdriver-wrench text-amber-600"></i> 3. The Tooling & SDKs
                </h4>
                <p class="text-sm text-slate-600 mt-1 pl-7">
                    The <span class="text-amber-600 font-semibold">.NET SDK</span> contains compilers (like Roslyn) and
                    the <span class="text-amber-600 font-semibold">CLI (Command Line Interface)</span>. It enables
                    developers to create, build, restore, and run applications using simple shell commands.
                </p>
            </div>
        </div>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Section: Multi-Language Support -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-language text-purple-600"></i> Language Agnostic Nature
        </h2>
        <p class="mt-0 mb-3 text-base text-slate-600">
            One of the major engineering triumphs of .NET is its <span
                class="text-purple-600 font-semibold">multi-language runtime</span>. You can write source code in
            different programming languages, and they all compile down to the exact same bytecode format so they can
            communicate seamlessly.
        </p>

        <ul class="pl-5 mt-0 mb-4 list-none space-y-2 text-base text-slate-700">
            <li class="flex items-center gap-2.5"><i class="fa-solid fa-circle-play text-blue-600 text-xs"></i>
                <div><strong>C# (C-Sharp):</strong> The flagship modern, object-oriented, type-safe programming language
                    used globally.</div>
            </li>
            <li class="flex items-center gap-2.5"><i class="fa-solid fa-circle-play text-orange-500 text-xs"></i>
                <div><strong>F# (F-Sharp):</strong> A functional-first language tailored for mathematical,
                    data-scientific, and complex analytical systems.</div>
            </li>
            <li class="flex items-center gap-2.5"><i class="fa-solid fa-circle-play text-slate-500 text-xs"></i>
                <div><strong>VB.NET:</strong> A legacy object-oriented dialect optimized for fast-paced corporate
                    business modules.</div>
            </li>
        </ul>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Section: The Application Matrix -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-earth-americas text-emerald-600"></i> What Can You Build with .NET?
        </h2>
        <p class="mt-0 mb-4 text-base text-slate-600">
            Modern .NET is a unified platform. One single installation enables you to target almost every active
            computing form factor:
        </p>

        <div class="overflow-x-auto my-4 border border-slate-200 rounded-lg shadow-sm">
            <table class="w-full text-left border-collapse text-sm">
                <thead>
                    <tr class="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                        <th class="p-3">Application Type</th>
                        <th class="p-3">Core Technology Framework</th>
                        <th class="p-3">Target Platform</th>
                    </tr>
                </thead>
                <tbody class="text-slate-600 divide-y divide-slate-100">
                    <tr>
                        <td class="p-3 font-semibold text-slate-900">Web Apps & APIs</td>
                        <td class="p-3"><code>ASP.NET Core</code></td>
                        <td class="p-3">Linux, macOS, Windows</td>
                    </tr>
                    <tr>
                        <td class="p-3 font-semibold text-slate-900">Mobile Native</td>
                        <td class="p-3"><code>.NET MAUI</code></td>
                        <td class="p-3">iOS, Android, Mac Catalina</td>
                    </tr>
                    <tr>
                        <td class="p-3 font-semibold text-slate-900">Desktop Apps</td>
                        <td class="p-3"><code>WPF, WinForms, MAUI</code></td>
                        <td class="p-3">Windows, macOS</td>
                    </tr>
                    <tr>
                        <td class="p-3 font-semibold text-slate-900">Cloud Services</td>
                        <td class="p-3"><code>Microservices / Worker Pools</code></td>
                        <td class="p-3">Docker, Kubernetes, Azure</td>
                    </tr>
                    <tr>
                        <td class="p-3 font-semibold text-slate-900">Game Engines</td>
                        <td class="p-3"><code>Unity Integration</code></td>
                        <td class="p-3">Xbox, PlayStation, PC, Mobile</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Section: How .NET Compiles and Runs (Brief Syntax Example) -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-code text-slate-700"></i> Basic Code and CLI Execution Example
        </h2>
        <p class="mt-0 mb-3 text-base text-slate-600">
            To spin up a new application, developers do not need huge visual utilities. The entire framework controls
            cleanly via the terminal.
        </p>

        <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">1. Spin up a new Console
            Template:</h4>
        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code>dotnet new console -o MyFirstDotNetApp</code></pre>

        <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-4 mb-2">2. The Auto-Generated C#
            Program (Program.cs):</h4>
        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#6a9955]">// The modern top-level statement format</span>
<span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Welcome to the .NET Platform!"</span>);</code></pre>

        <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-4 mb-2">3. Execute the code directly
            on local CPU:</h4>
        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code>dotnet run</code></pre>

        <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2 mb-1">Visual Console Screen
            Result:</h4>
        <pre
            class="p-3 overflow-x-auto text-sm leading-normal bg-[#252526] border border-[#2d2d2d] rounded-md font-mono text-[#b5cea8] shadow-sm"><code>Welcome to the .NET Platform!</code></pre>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Section: Why Choose .NET? -->
        <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-chart-line text-rose-500"></i> Why Enterprise Businesses Rely on .NET
        </h2>
        <ul class="pl-8 mt-0 mb-4 list-disc space-y-2 text-base text-slate-600">
            <li><strong>Blazing Fast Performance:</strong> ASP.NET Core consistently dominates the top charts of
                TechEmpower benchmarks, serving millions of requests per second with tiny memory footprints.</li>
            <li><strong>Asynchronous Architecture:</strong> Native implementation of <code>async/await</code> workflows
                ensures highly scalable web operations without bottlenecking server processor threads.</li>
            <li><strong>Unified Ecosystem:</strong> One single runtime tool chains your backend enterprise logic,
                security models, data processing layers, and API microservices together cleanly.</li>
        </ul>



        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">
        <!-- Section: Flow & Code Example -->
        <section class="grid gap-4 lg:grid-cols-1 max-w-3xl mx-auto">
            <!-- Architecture Flow (Terminal Style) -->
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 justify-center"> Simple .NET Flow
                </h3>
                <div class="overflow-hidden rounded-2xl bg-slate-950 shadow-xl ring-1 ring-slate-800">
                    <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                        <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
                        <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                        <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
                        <span class="text-xs text-slate-400 ml-2 font-mono">architecture-flow.diagram</span>
                    </div>
                    <div class="p-6 font-mono text-sm space-y-3 text-center">
                        <div class="text-cyan-400 bg-cyan-950/40 py-2 rounded-xl border border-cyan-500/20">Frontend
                            Interface</div>
                        <div class="text-slate-500 text-xs">▼</div>
                        <div class="text-blue-400 bg-blue-950/40 py-2 rounded-xl border border-blue-500/20">ASP.NET Core
                            API
                            Gateway</div>
                        <div class="text-slate-500 text-xs">▼</div>
                        <div class="text-purple-400 bg-purple-950/40 py-2 rounded-xl border border-purple-500/20">
                            Business
                            Logic Layer</div>
                        <div class="text-slate-500 text-xs">▼</div>
                        <div class="text-emerald-400 bg-emerald-950/40 py-2 rounded-xl border border-emerald-500/20">
                            Database Storage</div>
                    </div>
                </div>
            </div>

            <!-- Code Block -->
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 justify-center"> Example .NET Code
                </h3>
                <div class="overflow-hidden rounded-2xl bg-slate-950 shadow-xl ring-1 ring-slate-800">
                    <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                        <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
                        <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                        <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
                        <span class="text-xs text-slate-400 ml-2 font-mono">Program.cs</span>
                    </div>
                    <pre
                        class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Hello .NET"</span>);</code></pre>
                    <div class="bg-slate-900 border-t border-white/5 p-4 font-mono text-xs">
                        <span class="text-slate-500 block mb-1">// Output:</span>
                        <span class="text-slate-300">Hello .NET</span>
                    </div>
                </div>
            </div>
        </section>


        <hr style="height: 0.25em; padding: 0; margin: 24px 0; background-color: #d0d7de; border: 0;">

        <!-- Section: Final Summary -->
        <div
            class=" p-6 bg-gradient-to-br from-emerald-950/20 via-slate-50 to-emerald-950/10 rounded-xl border border-emerald-500/20 shadow-sm relative overflow-hidden">
            <div class="absolute right-4 bottom-2 opacity-5 text-8xl text-emerald-900"><i
                    class="fa-solid fa-flag-checkered"></i></div>

            <h2 class="text-xl font-bold text-slate-950 flex items-center gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-emerald-600"></i> Architectural Synthesis
            </h2>

            <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                <strong class="text-emerald-700 font-semibold">.NET</strong> is engineered as a highly optimized,
                cross-platform ecosystem designed to power high-scale modern application runtimes. By leveraging an
                integrated toolkit, it enables seamless development across distributed topologies, empowering creators
                to
                build robust web applications, enterprise APIs, native mobile platforms, desktop solutions, and
                cloud-native
                systems using a unified stack:
            </p>

            <!-- Highlighted Technology Matrix Layer -->
            <div class="flex flex-wrap items-center gap-2 font-mono text-xs font-bold pt-1">
                <span class="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200/60 rounded-md shadow-sm">C#
                    Core</span>
                <span class="text-slate-400 font-normal"><i class="fa-solid fa-plus text-[10px]"></i></span>
                <span class="px-3 py-1.5 bg-red-50 text-red-700 border border-red-200/60 rounded-md shadow-sm">ASP.NET
                    Core</span>
                <span class="text-slate-400 font-normal"><i class="fa-solid fa-plus text-[10px]"></i></span>
                <span
                    class="px-3 py-1.5 bg-orange-50 text-orange-700 border border-orange-200/60 rounded-md shadow-sm">Persistent
                    DBs</span>
                <span class="text-slate-400 font-normal"><i class="fa-solid fa-plus text-[10px]"></i></span>
                <span
                    class="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200/60 rounded-md shadow-sm">Cloud
                    Infrastructures</span>
            </div>
        </div>



        <hr class="h-1 p-0 my-8 bg-slate-200 border-0">

        <!-- Section: Popular Technologies Grid -->
        <section class="space-y-6 mt-6">
            <h2 class="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-slate-900">
                <i class="fa-solid fa-cubes text-blue-500"></i> Popular Technologies in the .NET Ecosystem
            </h2>

            <div class="grid gap-4 md:grid-cols-2">
                <!-- Card 1 -->
                <div
                    class="group rounded-xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
                    <div class="mb-2.5">
                        <span
                            class="inline-flex items-center rounded-md bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/10">ASP.NET
                            Core</span>
                    </div>
                    <p class="text-sm leading-relaxed text-slate-600">The primary framework used for high-performance
                        web
                        development, robust APIs, and scalable backend services.</p>
                </div>

                <!-- Card 2 -->
                <div
                    class="group rounded-xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
                    <div class="mb-2.5">
                        <span
                            class="inline-flex items-center rounded-md bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/10">Entity
                            Framework Core</span>
                    </div>
                    <p class="text-sm leading-relaxed text-slate-600">Simplifies complex database operations. Instead of
                        writing heavy raw SQL queries, developers work effortlessly with C# objects.</p>
                </div>

                <!-- Card 3 -->
                <div
                    class="group rounded-xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
                    <div class="mb-2.5">
                        <span
                            class="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">Blazor</span>
                    </div>
                    <p class="text-sm leading-relaxed text-slate-600">Allows developers to create completely interactive
                        full-stack web UI using C#. Build frontend applications without touching JavaScript.</p>
                </div>

                <!-- Card 4 -->
                <div
                    class="group rounded-xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
                    <div class="mb-2.5">
                        <span
                            class="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-500/10">.NET
                            MAUI</span>
                    </div>
                    <p class="text-sm leading-relaxed text-slate-600">The next-gen toolkit used for native
                        cross-platform
                        mobile and desktop applications. One shared codebase targets multiple platforms instantly.</p>
                </div>
            </div>
        </section>

        <hr class="h-1 p-0 my-8 bg-slate-200 border-0">

        <!-- Section: Infographic Roadmap -->
        <section class="mt-12 space-y-6">
            <h2 class="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-slate-900">
                <i class="fa-solid fa-map-location-dot text-indigo-600"></i> .NET Learning Roadmap
            </h2>
            <p class="text-sm sm:text-base text-slate-600">
                A structured, end-to-end industrial learning roadmap designed to transform conceptual syntax familiarity
                into professional production-grade system architecture capability.
            </p>

            <!-- Infographic Timeline Container -->
            <div
                class="relative pl-6 sm:pl-8 space-y-6 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-blue-500 before:to-emerald-500">

                <!-- Step 1 -->
                <div class="relative group">
                    <!-- Timeline Dot Indicator -->
                    <div
                        class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-indigo-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500">
                        <div
                            class="h-1.5 w-1.5 rounded-full bg-indigo-500 transition-colors duration-300 group-hover:bg-white">
                        </div>
                    </div>
                    <!-- Roadmap Card -->
                    <div
                        class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md">
                        <span
                            class="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Phase
                            01</span>
                        <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
                            <i class="fa-solid fa-code text-indigo-500"></i> C# Core Foundations & OOP
                        </h3>
                        <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Master Object-Oriented Programming (OOP), memory management (Stack/Heap), generics,
                            delegates,
                            and unified data streaming syntax using advanced LINQ queries.
                        </p>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="relative group">
                    <div
                        class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-400">
                        <div
                            class="h-1.5 w-1.5 rounded-full bg-indigo-400 transition-colors duration-300 group-hover:bg-white">
                        </div>
                    </div>
                    <div
                        class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md">
                        <span
                            class="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">Phase
                            02</span>
                        <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
                            <i class="fa-solid fa-cubes text-indigo-400"></i> ASP.NET Core Engine Architecture
                        </h3>
                        <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Deep dive into HTTP pipelines, custom middleware orchestration, built-in IoC Container
                            configurations, and strict dependency injection lifecycles (Transient, Scoped, Singleton).
                        </p>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="relative group">
                    <div
                        class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500">
                        <div
                            class="h-1.5 w-1.5 rounded-full bg-blue-500 transition-colors duration-300 group-hover:bg-white">
                        </div>
                    </div>
                    <div
                        class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
                        <span
                            class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Phase
                            03</span>
                        <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
                            <i class="fa-solid fa-cloud-arrow-up text-blue-500"></i> High-Scale RESTful Web APIs
                        </h3>
                        <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Construct standard industry controllers, configure routing structures, leverage clean Data
                            Transfer Objects (DTOs), and implement explicit global exception filters.
                        </p>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="relative group">
                    <div
                        class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-400">
                        <div
                            class="h-1.5 w-1.5 rounded-full bg-blue-400 transition-colors duration-300 group-hover:bg-white">
                        </div>
                    </div>
                    <div
                        class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
                        <span
                            class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-500 bg-blue-50 px-2 py-0.5 rounded">Phase
                            04</span>
                        <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
                            <i class="fa-solid fa-database text-blue-400"></i> Enterprise Data Layer with EF Core
                        </h3>
                        <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Manage database state decoupling using robust ORM patterns, configure multi-tier entity
                            relations via Fluent API, execute schema migrations, and prevent performance leaks like N+1
                            queries.
                        </p>
                    </div>
                </div>

                <!-- Step 5 -->
                <div class="relative group">
                    <div
                        class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500">
                        <div
                            class="h-1.5 w-1.5 rounded-full bg-emerald-500 transition-colors duration-300 group-hover:bg-white">
                        </div>
                    </div>
                    <div
                        class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
                        <span
                            class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Phase
                            05</span>
                        <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
                            <i class="fa-solid fa-shield-halved text-emerald-500"></i> Cryptographic Auth & Identity
                        </h3>
                        <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Isolate system vectors using stateless JSON Web Token (JWT) Bearer validations, map
                            comprehensive claims, and setup secure Role-Based Access Control (RBAC).
                        </p>
                    </div>
                </div>

                <!-- Step 6 -->
                <div class="relative group">
                    <div
                        class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400">
                        <div
                            class="h-1.5 w-1.5 rounded-full bg-emerald-400 transition-colors duration-300 group-hover:bg-white">
                        </div>
                    </div>
                    <div
                        class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
                        <span
                            class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded">Phase
                            06</span>
                        <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
                            <i class="fa-solid fa-server text-emerald-400"></i> SQL Server Engine Tuning
                        </h3>
                        <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Ensure transactional atomicity and speed through relational architecture designs, optimal
                            database clustering/non-clustered indexing, and pre-compiled Stored Procedures.
                        </p>
                    </div>
                </div>

                <!-- Step 7 -->
                <div class="relative group">
                    <div
                        class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-teal-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500">
                        <div
                            class="h-1.5 w-1.5 rounded-full bg-teal-500 transition-colors duration-300 group-hover:bg-white">
                        </div>
                    </div>
                    <div
                        class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-md">
                        <span
                            class="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">Phase
                            07</span>
                        <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
                            <i class="fa-solid fa-infinity text-teal-500"></i> Containerized CI/CD & Cloud Deployment
                        </h3>
                        <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Encapsulate scalable runtimes inside specialized Docker multi-stage images, map deployment
                            steps
                            via automated GitHub Actions engines, and orchestrate clouds or standard Windows IIS
                            hostings.
                        </p>
                    </div>
                </div>

            </div>
        </section>

    </div>
</template>