export const lessons = [
    {
        id: 1,
        title: 'What is .NET?',
        slug: 'what-is-dotnet',
        category: '.NET Basics',
        content: `
<div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-5">

  <!-- Section: Introduction -->
  <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-compass text-blue-600"></i> Comprehensive Introduction
  </h2>
  <p class="mt-0 mb-4 text-base text-slate-600">
    <span class="text-blue-600 font-semibold">.NET</span> (pronounced as <em>Dot Net</em>) is a free, open-source, developer platform created by Microsoft for building many different types of applications. It is not just a framework or a single programming language; it is an entire <span class="text-blue-600 font-semibold">ecosystem</span> that provides the tooling, programming models, libraries, and runtime optimization needed to build high-performance software systems.
  </p>

  <blockquote>
    <div class="bg-blue-50 border-l-4 border-l-blue-500 p-4 my-4 rounded-r-md text-sm text-blue-900">
      <strong>Historical Context:</strong> Originally launched in 2002 as ".NET Framework" (which only ran on Windows Systems), the platform was completely rebuilt from scratch in 2016. Today, modern <strong>.NET (version 5, 6, 7, 8, and beyond)</strong> is entirely open-source, highly cross-platform, and modular.
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
        The <span class="text-indigo-600 font-semibold">Common Language Runtime (CLR)</span> is the execution engine of .NET. It handles thread execution, code compilation via JIT (Just-In-Time), memory allocation, and automated **Garbage Collection (GC)**. The CLR abstracts hardware operations, making your application safe and robust.
      </p>
    </div>

    <!-- Component 2 -->
    <div class="p-4 border border-slate-200 bg-slate-50/50 rounded-lg">
      <h4 class="text-base font-semibold text-slate-900 flex items-center gap-2">
        <i class="fa-solid fa-book-bookmark text-emerald-600"></i> 2. The Base Class Library (BCL)
      </h4>
      <p class="text-sm text-slate-600 mt-1 pl-7">
        Instead of rewriting fundamental operations from scratch, .NET ships with a massive suite of standard libraries called the <span class="text-emerald-600 font-semibold">Base Class Library (BCL)</span>. This gives developers out-of-the-box access to APIs for reading/writing files, networking, data collection handling, encryption, and JSON serialization.
      </p>
    </div>

    <!-- Component 3 -->
    <div class="p-4 border border-slate-200 bg-slate-50/50 rounded-lg">
      <h4 class="text-base font-semibold text-slate-900 flex items-center gap-2">
        <i class="fa-solid fa-screwdriver-wrench text-amber-600"></i> 3. The Tooling & SDKs
      </h4>
      <p class="text-sm text-slate-600 mt-1 pl-7">
        The <span class="text-amber-600 font-semibold">.NET SDK</span> contains compilers (like Roslyn) and the <span class="text-amber-600 font-semibold">CLI (Command Line Interface)</span>. It enables developers to create, build, restore, and run applications using simple shell commands.
      </p>
    </div>
  </div>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Multi-Language Support -->
  <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-language text-purple-600"></i> Language Agnostic Nature
  </h2>
  <p class="mt-0 mb-3 text-base text-slate-600">
    One of the major engineering triumphs of .NET is its <span class="text-purple-600 font-semibold">multi-language runtime</span>. You can write source code in different programming languages, and they all compile down to the exact same bytecode format so they can communicate seamlessly.
  </p>
  
  <ul class="pl-5 mt-0 mb-4 list-none space-y-2 text-base text-slate-700">
    <li class="flex items-center gap-2.5"><i class="fa-solid fa-circle-play text-blue-600 text-xs"></i> <div><strong>C# (C-Sharp):</strong> The flagship modern, object-oriented, type-safe programming language used globally.</div></li>
    <li class="flex items-center gap-2.5"><i class="fa-solid fa-circle-play text-orange-500 text-xs"></i> <div><strong>F# (F-Sharp):</strong> A functional-first language tailored for mathematical, data-scientific, and complex analytical systems.</div></li>
    <li class="flex items-center gap-2.5"><i class="fa-solid fa-circle-play text-slate-500 text-xs"></i> <div><strong>VB.NET:</strong> A legacy object-oriented dialect optimized for fast-paced corporate business modules.</div></li>
  </ul>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: The Application Matrix -->
  <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-earth-americas text-emerald-600"></i> What Can You Build with .NET?
  </h2>
  <p class="mt-0 mb-4 text-base text-slate-600">
    Modern .NET is a unified platform. One single installation enables you to target almost every active computing form factor:
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
    To spin up a new application, developers do not need huge visual utilities. The entire framework controls cleanly via the terminal.
  </p>

  <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">1. Spin up a new Console Template:</h4>
  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code>dotnet new console -o MyFirstDotNetApp</code></pre>

  <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-4 mb-2">2. The Auto-Generated C# Program (Program.cs):</h4>
  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#6a9955]">// The modern top-level statement format</span>
<span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Welcome to the .NET Platform!"</span>);</code></pre>

  <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-4 mb-2">3. Execute the code directly on local CPU:</h4>
  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code>dotnet run</code></pre>

  <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2 mb-1">Visual Console Screen Result:</h4>
  <pre class="p-3 overflow-x-auto text-sm leading-normal bg-[#252526] border border-[#2d2d2d] rounded-md font-mono text-[#b5cea8] shadow-sm"><code>Welcome to the .NET Platform!</code></pre>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Why Choose .NET? -->
  <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-chart-line text-rose-500"></i> Why Enterprise Businesses Rely on .NET
  </h2>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-2 text-base text-slate-600">
    <li><strong>Blazing Fast Performance:</strong> ASP.NET Core consistently dominates the top charts of TechEmpower benchmarks, serving millions of requests per second with tiny memory footprints.</li>
    <li><strong>Asynchronous Architecture:</strong> Native implementation of <code>async/await</code> workflows ensures highly scalable web operations without bottlenecking server processor threads.</li>
    <li><strong>Unified Ecosystem:</strong> One single runtime tool chains your backend enterprise logic, security models, data processing layers, and API microservices together cleanly.</li>
  </ul>

</div>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">
  <!-- Section: Flow & Code Example -->
  <section class="grid gap-4 lg:grid-cols-1 max-w-3xl mx-auto">
    <!-- Architecture Flow (Terminal Style) -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 justify-center"> Simple .NET Flow</h3>
      <div class="overflow-hidden rounded-2xl bg-slate-950 shadow-xl ring-1 ring-slate-800">
        <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
          <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
          <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
          <span class="text-xs text-slate-400 ml-2 font-mono">architecture-flow.diagram</span>
        </div>
        <div class="p-6 font-mono text-sm space-y-3 text-center">
          <div class="text-cyan-400 bg-cyan-950/40 py-2 rounded-xl border border-cyan-500/20">Frontend Interface</div>
          <div class="text-slate-500 text-xs">▼</div>
          <div class="text-blue-400 bg-blue-950/40 py-2 rounded-xl border border-blue-500/20">ASP.NET Core API Gateway</div>
          <div class="text-slate-500 text-xs">▼</div>
          <div class="text-purple-400 bg-purple-950/40 py-2 rounded-xl border border-purple-500/20">Business Logic Layer</div>
          <div class="text-slate-500 text-xs">▼</div>
          <div class="text-emerald-400 bg-emerald-950/40 py-2 rounded-xl border border-emerald-500/20">Database Storage</div>
        </div>
      </div>
    </div>

    <!-- Code Block -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 justify-center"> Example .NET Code</h3>
      <div class="overflow-hidden rounded-2xl bg-slate-950 shadow-xl ring-1 ring-slate-800">
        <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <div class="h-3 w-3 rounded-full bg-red-500/80"></div>
          <div class="h-3 w-3 rounded-full bg-yellow-500/80"></div>
          <div class="h-3 w-3 rounded-full bg-green-500/80"></div>
          <span class="text-xs text-slate-400 ml-2 font-mono">Program.cs</span>
        </div>
        <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Hello .NET"</span>);</code></pre>
        <div class="bg-slate-900 border-t border-white/5 p-4 font-mono text-xs">
          <span class="text-slate-500 block mb-1">// Output:</span>
          <span class="text-slate-300">Hello .NET</span>
        </div>
      </div>
    </div>
  </section>

  <hr style="height: 0.25em; padding: 0; margin: 24px 0; background-color: #d0d7de; border: 0;">

<!-- Section: Final Summary -->
  <div class="my-8 p-6 bg-gradient-to-br from-emerald-950/20 via-slate-50 to-emerald-950/10 rounded-xl border border-emerald-500/20 shadow-sm relative overflow-hidden">
    <div class="absolute right-4 bottom-2 opacity-5 text-8xl text-emerald-900"><i class="fa-solid fa-flag-checkered"></i></div>
    
    <h2 class="text-xl font-bold text-slate-950 flex items-center gap-2 mb-3">
      <i class="fa-solid fa-circle-check text-emerald-600"></i> Architectural Synthesis
    </h2>
    
    <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
      <strong class="text-emerald-700 font-semibold">.NET</strong> is engineered as a highly optimized, cross-platform ecosystem designed to power high-scale modern application runtimes. By leveraging an integrated toolkit, it enables seamless development across distributed topologies, empowering creators to build robust web applications, enterprise APIs, native mobile platforms, desktop solutions, and cloud-native systems using a unified stack:
    </p>

    <!-- Highlighted Technology Matrix Layer -->
    <div class="flex flex-wrap items-center gap-2 font-mono text-xs font-bold pt-1">
      <span class="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200/60 rounded-md shadow-sm">C# Core</span>
      <span class="text-slate-400 font-normal"><i class="fa-solid fa-plus text-[10px]"></i></span>
      <span class="px-3 py-1.5 bg-red-50 text-red-700 border border-red-200/60 rounded-md shadow-sm">ASP.NET Core</span>
      <span class="text-slate-400 font-normal"><i class="fa-solid fa-plus text-[10px]"></i></span>
      <span class="px-3 py-1.5 bg-orange-50 text-orange-700 border border-orange-200/60 rounded-md shadow-sm">Persistent DBs</span>
      <span class="text-slate-400 font-normal"><i class="fa-solid fa-plus text-[10px]"></i></span>
      <span class="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200/60 rounded-md shadow-sm">Cloud Infrastructures</span>
    </div>
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
      <div class="group rounded-xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
        <div class="mb-2.5">
          <span class="inline-flex items-center rounded-md bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/10">ASP.NET Core</span>
        </div>
        <p class="text-sm leading-relaxed text-slate-600">The primary framework used for high-performance web development, robust APIs, and scalable backend services.</p>
      </div>

      <!-- Card 2 -->
      <div class="group rounded-xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
        <div class="mb-2.5">
          <span class="inline-flex items-center rounded-md bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/10">Entity Framework Core</span>
        </div>
        <p class="text-sm leading-relaxed text-slate-600">Simplifies complex database operations. Instead of writing heavy raw SQL queries, developers work effortlessly with C# objects.</p>
      </div>

      <!-- Card 3 -->
      <div class="group rounded-xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
        <div class="mb-2.5">
          <span class="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10">Blazor</span>
        </div>
        <p class="text-sm leading-relaxed text-slate-600">Allows developers to create completely interactive full-stack web UI using C#. Build frontend applications without touching JavaScript.</p>
      </div>

      <!-- Card 4 -->
      <div class="group rounded-xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
        <div class="mb-2.5">
          <span class="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-500/10">.NET MAUI</span>
        </div>
        <p class="text-sm leading-relaxed text-slate-600">The next-gen toolkit used for native cross-platform mobile and desktop applications. One shared codebase targets multiple platforms instantly.</p>
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
      A structured, end-to-end industrial learning roadmap designed to transform conceptual syntax familiarity into professional production-grade system architecture capability.
    </p>

    <!-- Infographic Timeline Container -->
    <div class="relative pl-6 sm:pl-8 space-y-6 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-blue-500 before:to-emerald-500">
      
      <!-- Step 1 -->
      <div class="relative group">
        <!-- Timeline Dot Indicator -->
        <div class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-indigo-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500">
          <div class="h-1.5 w-1.5 rounded-full bg-indigo-500 transition-colors duration-300 group-hover:bg-white"></div>
        </div>
        <!-- Roadmap Card -->
        <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Phase 01</span>
          <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
            <i class="fa-solid fa-code text-indigo-500"></i> C# Core Foundations & OOP
          </h3>
          <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Master Object-Oriented Programming (OOP), memory management (Stack/Heap), generics, delegates, and unified data streaming syntax using advanced LINQ queries.
          </p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="relative group">
        <div class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-400">
          <div class="h-1.5 w-1.5 rounded-full bg-indigo-400 transition-colors duration-300 group-hover:bg-white"></div>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">Phase 02</span>
          <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
            <i class="fa-solid fa-cubes text-indigo-400"></i> ASP.NET Core Engine Architecture
          </h3>
          <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Deep dive into HTTP pipelines, custom middleware orchestration, built-in IoC Container configurations, and strict dependency injection lifecycles (Transient, Scoped, Singleton).
          </p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="relative group">
        <div class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500">
          <div class="h-1.5 w-1.5 rounded-full bg-blue-500 transition-colors duration-300 group-hover:bg-white"></div>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Phase 03</span>
          <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
            <i class="fa-solid fa-cloud-arrow-up text-blue-500"></i> High-Scale RESTful Web APIs
          </h3>
          <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Construct standard industry controllers, configure routing structures, leverage clean Data Transfer Objects (DTOs), and implement explicit global exception filters.
          </p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="relative group">
        <div class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-400">
          <div class="h-1.5 w-1.5 rounded-full bg-blue-400 transition-colors duration-300 group-hover:bg-white"></div>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-500 bg-blue-50 px-2 py-0.5 rounded">Phase 04</span>
          <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
            <i class="fa-solid fa-database text-blue-400"></i> Enterprise Data Layer with EF Core
          </h3>
          <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Manage database state decoupling using robust ORM patterns, configure multi-tier entity relations via Fluent API, execute schema migrations, and prevent performance leaks like N+1 queries.
          </p>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="relative group">
        <div class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500">
          <div class="h-1.5 w-1.5 rounded-full bg-emerald-500 transition-colors duration-300 group-hover:bg-white"></div>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Phase 05</span>
          <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
            <i class="fa-solid fa-shield-halved text-emerald-500"></i> Cryptographic Auth & Identity
          </h3>
          <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Isolate system vectors using stateless JSON Web Token (JWT) Bearer validations, map comprehensive claims, and setup secure Role-Based Access Control (RBAC).
          </p>
        </div>
      </div>

      <!-- Step 6 -->
      <div class="relative group">
        <div class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400">
          <div class="h-1.5 w-1.5 rounded-full bg-emerald-400 transition-colors duration-300 group-hover:bg-white"></div>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded">Phase 06</span>
          <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
            <i class="fa-solid fa-server text-emerald-400"></i> SQL Server Engine Tuning
          </h3>
          <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Ensure transactional atomicity and speed through relational architecture designs, optimal database clustering/non-clustered indexing, and pre-compiled Stored Procedures.
          </p>
        </div>
      </div>

      <!-- Step 7 -->
      <div class="relative group">
        <div class="absolute -left-[23px] sm:-left-[27px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-teal-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500">
          <div class="h-1.5 w-1.5 rounded-full bg-teal-500 transition-colors duration-300 group-hover:bg-white"></div>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-md">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded">Phase 07</span>
          <h3 class="mt-1 text-base font-bold text-slate-900 flex items-center gap-1.5">
            <i class="fa-solid fa-infinity text-teal-500"></i> Containerized CI/CD & Cloud Deployment
          </h3>
          <p class="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Encapsulate scalable runtimes inside specialized Docker multi-stage images, map deployment steps via automated GitHub Actions engines, and orchestrate clouds or standard Windows IIS hostings.
          </p>
        </div>
      </div>

    </div>
  </section>

</div>

</div>

</div>

`,
    },

    {
        id: 2,
        title: 'What is C#?',
        slug: 'what-is-csharp',
        category: 'C# Basics',
        content: `
<div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-5">
  <!-- Section: Introduction -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-terminal text-blue-600"></i> Introduction
  </h2>
  <p class="mt-0 mb-4 text-base">
    <span class="text-blue-600 font-semibold">C#</span> (pronounced C Sharp) is a modern, object-oriented programming language developed by Microsoft.
  </p>
  <p class="mt-0 mb-4 text-base">
    It serves as the <strong class="font-semibold italic">primary language</strong> used within the powerful .NET ecosystem.
  </p>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: What C# is Used For -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-layer-group text-indigo-500"></i> What C# is Used For
  </h2>
  <p class="mt-0 mb-2 text-base">With C#, developers can write core business logic, create structured classes and objects, handle data efficiently, and build complete software systems. It is widely applied in:</p>
  <ul class="pl-5 mt-0 mb-4 list-none space-y-2">
    <li class="flex items-center gap-2"><i class="fa-solid fa-server text-slate-500 w-5"></i> <em class="not-implemented">Backend development</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-globe text-slate-500 w-5"></i> <em class="not-implemented">Web applications</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-code text-slate-500 w-5"></i> <em class="not-implemented">APIs and microservices</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-desktop text-slate-500 w-5"></i> <em class="not-implemented">Desktop software</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-mobile-screen text-slate-500 w-5"></i> <em class="not-implemented">Mobile applications</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-gamepad text-slate-500 w-5"></i> <em class="not-implemented">Game development with Unity</em></li>
  </ul>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Why C# is Powerful -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-bolt text-yellow-500"></i> Why C# is Powerful
  </h2>
  <p class="mt-0 mb-2 text-base">C# is frequently recognized as one of the finest languages for mastering professional enterprise software development because it is:</p>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-1">
    <li><strong class="font-semibold italic">Easy to read and maintain</strong></li>
    <li><strong class="font-semibold italic">Strongly typed</strong> (catches errors early at compile time)</li>
    <li><strong class="font-semibold italic">Fully Object-Oriented (OOP)</strong></li>
    <li><strong class="font-semibold italic">Highly secure and safe</strong></li>
    <li><strong class="font-semibold italic">Engineered for high performance</strong></li>
    <li><strong class="font-semibold italic">Perfect for large, massive enterprise applications</strong></li>
  </ul>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Code Examples -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-laptop-code text-slate-700"></i> Code Examples
  </h2>

  <h3 class="mt-4 mb-2 font-semibold text-lg text-slate-800">1. Simple C# Program</h3>
  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Hello World"</span>);</code></pre>
  
  <p class="mt-2 mb-1 text-sm"><strong class="font-semibold text-slate-500">Output:</strong></p>
  <pre class="p-3 overflow-x-auto text-sm leading-normal bg-[#252526] border border-[#2d2d2d] rounded-md font-mono text-[#b5cea8]"><code>Hello World</code></pre>

  <h3 class="mt-6 mb-2 font-semibold text-lg text-slate-800">2. Variables Example</h3>
  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#569cd6] font-semibold">string</span> name = <span class="text-[#ce9178]">"Argho"</span>;
<span class="text-[#569cd6] font-semibold">int</span> age = <span class="text-[#b5cea8]">22</span>;

<span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(name);
<span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(age);</code></pre>

  <h3 class="mt-6 mb-2 font-semibold text-lg text-slate-800">3. Conditional Statements</h3>
  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#c586c0] font-semibold">if</span> (age &gt;= <span class="text-[#b5cea8]">18</span>)
{
    <span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Adult"</span>);
}</code></pre>
 
  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Important Concepts -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-brain text-purple-600"></i> Important Concepts in C#
  </h2>
  <p class="mt-0 mb-2 text-base">To build intermediate and advanced systems, every developer needs to master these core pillars:</p>
  <div class="grid grid-cols-2 gap-2 max-w my-4">
    <div class="flex items-center gap-2 text-base"><i class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Variables</span></div>
    <div class="flex items-center gap-2 text-base"><i class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Objects</span></div>
    <div class="flex items-center gap-2 text-base"><i class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Functions</span></div>
    <div class="flex items-center gap-2 text-base"><i class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>OOP (Object-Oriented Programming)</span></div>
    <div class="flex items-center gap-2 text-base"><i class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Loops</span></div>
    <div class="flex items-center gap-2 text-base"><i class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>LINQ (Language Integrated Query)</span></div>
    <div class="flex items-center gap-2 text-base"><i class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Classes</span></div>
    <div class="flex items-center gap-2 text-base"><i class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Async / Await (Asynchronous)</span></div>
  </div>

</div>
    `,
    },

    {
        id: 3,
        title: '.NET Code Journey',
        slug: 'dotnet-code-journey',
        category: '.NET Basics',
        content: `
<div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-5">

  

  <!-- Main Section: The C# Code Execution Journey -->
  <h2 class="pb-2 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-gears text-blue-600"></i> The Inner Workings: How C# Code Runs
  </h2>
  <p class="mt-0 mb-4 text-base text-slate-600">
    When a developer writes a line of C# code like <code>Console.WriteLine("Hello");</code>, the computer's CPU cannot understand or execute it directly. Computers only speak in binary (0s and 1s). To bridge this gap, the .NET ecosystem utilizes a powerful multi-stage compilation process. 
  </p>

  <!-- Flowchart Container -->
  <div class="my-6 p-5 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
    <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
      <i class="fa-solid fa-diagram-project"></i> Execution Pipeline Flowchart
    </h4>
    <div class="flex flex-col items-center gap-2 font-mono text-sm font-semibold">
      <div class="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-md shadow-sm w-64 text-center">Step 1: C# Source Code</div>
      <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
      <div class="px-4 py-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-md shadow-sm w-64 text-center">Step 2: C# Compiler (Roslyn)</div>
      <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
      <div class="px-4 py-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-md shadow-sm w-64 text-center">Step 3: Intermediate Language (IL)</div>
      <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
      <div class="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-md shadow-sm w-64 text-center">Step 4: CLR & JIT Compiler</div>
      <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
      <div class="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-md shadow-sm w-64 text-center">Step 5: Native Machine Code</div>
      <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
      <div class="px-4 py-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-md shadow-sm w-64 text-center">Step 6: Live Output</div>
    </div>
  </div>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Step 1 Elaborated -->
  <h3 class="mt-6 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
    <span class="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-mono font-bold">1</span> Source Code Layer
  </h3>
  <p class="mt-0 mb-3 text-base text-slate-600">
    The journey begins here. Source code is the human-readable text written by programmers using syntax rules defined by the C# language. It is saved in files with a <code>.cs</code> extension. It contains the business logic, variables, loops, and structure that define what the application should do.
  </p>
  <p class="mt-0 mb-2 font-semibold text-sm text-slate-500">Example Source Code:</p>
  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Hello"</span>);</code></pre>

  <!-- Step 2 Elaborated -->
  <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
    <span class="flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white text-sm font-mono font-bold">2</span> The Compiler (Roslyn)
  </h3>
  <p class="mt-0 mb-3 text-base text-slate-600">
    When you hit the <strong>Build</strong> or <strong>Run</strong> button, the C# Compiler (known as <strong>Roslyn</strong>) takes over. The compiler performs structural diagnostics, syntax checking, and type-safety verification. If there are syntax errors (like a missing semicolon), the compilation stops here and throws an error.
  </p>
  <div class="bg-purple-50 border-l-4 border-l-purple-500 p-4 my-4 rounded-r-md text-sm text-purple-900">
    <strong>Key Responsibility:</strong> It acts as a translator, ensuring your code obeys language guidelines before converting it from high-level C# into something the platform framework can process.
  </div>

  <!-- Step 3 Elaborated -->
  <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
    <span class="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white text-sm font-mono font-bold">3</span> Intermediate Language (IL) Code
  </h3>
  <p class="mt-0 mb-3 text-base text-slate-600">
    The compiler does not output machine code directly. Instead, it converts C# into **IL (Intermediate Language)** or **MSIL (Microsoft Intermediate Language)**. IL is a lower-level, CPU-independent set of instructions. This IL code is packaged inside compiled binaries like <code>.dll</code> or <code>.exe</code> files along with **Metadata** (information describing classes, methods, and parameters).
  </p>
  <p class="mt-0 mb-2 font-semibold text-sm text-slate-500">Conceptual IL Representation (Behind the Scenes):</p>
  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#6a9955]">// IL representation of Console.WriteLine</span>
<span class="text-[#569cd6]">IL_0001:</span> ldstr <span class="text-[#ce9178]">"Hello"</span>
<span class="text-[#569cd6]">IL_0006:</span> call <span class="text-[#4ec9b0]">void</span> [<span class="text-[#9cdcfe]">System.Console</span>]::<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#4ec9b0]">string</span>)
<span class="text-[#569cd6]">IL_000b:</span> nop</code></pre>

  <!-- Step 4 Elaborated -->
  <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
    <span class="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-mono font-bold">4</span> Common Language Runtime (CLR)
  </h3>
  <p class="mt-0 mb-3 text-base text-slate-600">
    The **CLR** is essentially the engine and heart of the .NET framework. When an application runs, the CLR manages the environment. Inside the CLR, an essential sub-component called the **JIT (Just-In-Time) Compiler** takes the IL code and translates it on-the-fly into real native code optimized precisely for the local machine's operating system and architecture (x64, ARM, etc.).
  </p>
  
  <p class="mt-4 mb-2 font-semibold text-slate-700 text-sm">Critical Core Operations Managed by CLR:</p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
    <div class="p-3 border border-slate-200 rounded-md bg-white shadow-sm flex items-start gap-2.5">
      <i class="fa-solid fa-memory text-indigo-500 mt-1"></i>
      <div>
        <strong class="block text-slate-900 text-sm font-semibold">Memory Management</strong>
        <span class="text-xs text-slate-500">Allocates system memory dynamically for objects and executing variables.</span>
      </div>
    </div>
    <div class="p-3 border border-slate-200 rounded-md bg-white shadow-sm flex items-start gap-2.5">
      <i class="fa-solid fa-trash-can text-red-500 mt-1"></i>
      <div>
        <strong class="block text-slate-900 text-sm font-semibold">Garbage Collection (GC)</strong>
        <span class="text-xs text-slate-500">Automatically tracking, cleaning, and freeing up unused objects in memory.</span>
      </div>
    </div>
    <div class="p-3 border border-slate-200 rounded-md bg-white shadow-sm flex items-start gap-2.5">
      <i class="fa-solid fa-triangle-exclamation text-amber-500 mt-1"></i>
      <div>
        <strong class="block text-slate-900 text-sm font-semibold">Exception Handling</strong>
        <span class="text-xs text-slate-500">Intercepting runtime crashes gracefully using robust try-catch mechanisms.</span>
      </div>
    </div>
    <div class="p-3 border border-slate-200 rounded-md bg-white shadow-sm flex items-start gap-2.5">
      <i class="fa-solid fa-shield-halved text-emerald-500 mt-1"></i>
      <div>
        <strong class="block text-slate-900 text-sm font-semibold">Security Enforcement</strong>
        <span class="text-xs text-slate-500">Verifying code type-safety and enforcing application authorization constraints.</span>
      </div>
    </div>
  </div>

  <!-- Step 5 Elaborated -->
  <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
    <span class="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-mono font-bold">5</span> Native Machine Code
  </h3>
  <p class="mt-0 mb-3 text-base text-slate-600">
    Once the JIT compiler has translated the IL, you get **Machine Code**. These are low-level CPU binary instructions that execute directly on hardware silicon. At this level, the language abstracts completely into native machine architecture logic.
  </p>
  <p class="mt-0 mb-2 font-semibold text-sm text-slate-500">Conceptual CPU Instruction Level:</p>
  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#569cd6]">01001000</span> <span class="text-[#b5cea8]">10001001</span> <span class="text-[#ce9178]">11100101</span> <span class="text-[#6a9955]">// Pure processor execution patterns</span></code></pre>

  <!-- Step 6 Elaborated -->
  <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
    <span class="flex items-center justify-center w-7 h-7 rounded-full bg-rose-600 text-white text-sm font-mono font-bold">6</span> Runtime Output
  </h3>
  <p class="mt-0 mb-3 text-base text-slate-600">
    Finally, the operating system executes the compiled machine native stream instructions on behalf of the CPU thread, producing the expected visual or systematic application output.
  </p>
  <p class="mt-0 mb-2 font-semibold text-sm text-slate-500">Visual Screen Output:</p>
  <pre class="p-3 overflow-x-auto text-sm leading-normal bg-[#252526] border border-[#2d2d2d] rounded-md font-mono text-[#b5cea8] shadow-sm"><code>Hello</code></pre>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Summary Card -->
  <div class="bg-blue-50 border border-blue-100 rounded-lg p-5">
    <h3 class="text-blue-900 font-bold text-lg mb-2 flex items-center gap-2">
      <i class="fa-solid fa-bolt-lightning text-amber-500"></i> Summary Matrix
    </h3>
    <p class="text-sm text-blue-800 mb-4">
      Although this pipeline has multiple distinct layers, the transition happens seamlessly in fractions of a millisecond, giving C# applications high flexibility, cross-platform portability, and native performance execution speeds.
    </p>
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse text-xs md:text-sm">
        <thead>
          <tr class="border-b border-blue-200 text-blue-900 font-semibold bg-blue-100/50">
            <th class="p-2">Stage</th>
            <th class="p-2">Format</th>
            <th class="p-2">Processor / Engine</th>
          </tr>
        </thead>
        <tbody class="text-blue-950">
          <tr class="border-b border-blue-100">
            <td class="p-2 font-semibold">1. Source</td>
            <td class="p-2">C# Plain Text (<code>.cs</code>)</td>
            <td class="p-2">Developer / IDE</td>
          </tr>
          <tr class="border-b border-blue-100">
            <td class="p-2 font-semibold">2. Assembly</td>
            <td class="p-2">Intermediate Code (<code>.dll</code> / <code>.exe</code>)</td>
            <td class="p-2">Roslyn Compiler</td>
          </tr>
          <tr class="border-b border-blue-100">
            <td class="p-2 font-semibold">3. Execution</td>
            <td class="p-2">Native Hardware Instructions</td>
            <td class="p-2">CLR & JIT Compiler</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
    `,
    },


    {
        id: 4,
        title: 'CodeWithDotNet',
        slug: 'codewithdotnet-documentation',
        category: 'Project Journey',
        content: `
<div class="github-readme font-sans text-slate-800 mx-auto leading-relaxed p-5">

  <!-- Core Vision & Purpose -->
  <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-bullseye text-rose-500"></i> The Core Mission
  </h2>
  <p class="mt-0 mb-4 text-base text-slate-600">
    <strong>CodeWithDotNet</strong> is more than just a website; it is an active portfolio, a sandbox for front-end architecture, and a structured knowledge base. The philosophy is simple: <em class="text-indigo-600 font-semibold not-italic">Learn in public, build with intent, and document everything.</em>
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
    <div class="p-3 bg-slate-50 border border-slate-200 rounded-md flex items-start gap-2.5">
      <i class="fa-solid fa-graduation-cap text-indigo-500 mt-1"></i>
      <div><strong class="block text-sm text-slate-900 font-semibold">Learn by Doing</strong><span class="text-xs text-slate-500">Translating abstract backend .NET concepts into clean front-end explanations.</span></div>
    </div>
    <div class="p-3 bg-slate-50 border border-slate-200 rounded-md flex items-start gap-2.5">
      <i class="fa-solid fa-cloud-arrow-up text-emerald-500 mt-1"></i>
      <div><strong class="block text-sm text-slate-900 font-semibold">Continuous Deployment</strong><span class="text-xs text-slate-500">Every single learning module is committed to Git and instantly deployed.</span></div>
    </div>
  </div>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Tech Stack & Setup -->
  <div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-5">

  <!-- Section: Architecture & Pipeline -->
  <h2 class="pb-2 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-network-wired text-indigo-600"></i> CodeWithDotNet: Infrastructure & Pipeline Architecture
  </h2>
  <p class="mt-0 mb-6 text-base text-slate-600">
    The modern web infrastructure relies on decoupling code creation from its hosting platform. Below is the automated continuous integration and continuous deployment (CI/CD) workflow configured for <strong>CodeWithDotNet</strong>, showing how a local change goes live globally in seconds.
  </p>

  <!-- Informative Infographic Layer -->
  <div class="my-6 p-6 bg-slate-900 text-slate-100 rounded-xl shadow-lg border border-slate-800">
    <h4 class="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-6 flex items-center gap-1.5">
      <i class="fa-solid fa-circle-nodes"></i> Automated CI/CD Lifecycle Diagram
    </h4>
    
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
      
      <!-- Box 1: Local IDE -->
      <div class="flex-1 w-full p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center relative group">
        <div class="text-blue-400 text-lg mb-1.5"><i class="fa-solid fa-laptop-code"></i></div>
        <span class="font-bold block text-slate-200 mb-1">1. Local Workstation</span>
        <span class="text-[11px] text-slate-400 block">Vue 3 + Vite + Tailwind CSS Development</span>
      </div>

      <!-- Arrow -->
      <div class="text-indigo-500 text-lg font-bold md:rotate-0 rotate-90"><i class="fa-solid fa-chevron-right"></i></div>

      <!-- Box 2: Version Control -->
      <div class="flex-1 w-full p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center relative">
        <div class="text-purple-400 text-lg mb-1.5"><i class="fa-brands fa-github"></i></div>
        <span class="font-bold block text-slate-200 mb-1">2. Git / GitHub</span>
        <span class="text-[11px] text-slate-400 block">Remote Repository Source of Truth</span>
      </div>

      <!-- Arrow -->
      <div class="text-indigo-500 text-lg font-bold md:rotate-0 rotate-90"><i class="fa-solid fa-chevron-right"></i></div>

      <!-- Box 3: Vercel Compilation -->
      <div class="flex-1 w-full p-4 bg-slate-800/80 border border-slate-700 rounded-lg text-center relative">
        <div class="text-amber-400 text-lg mb-1.5"><i class="fa-solid fa-triangle-exclamation animate-pulse"></i></div>
        <span class="font-bold block text-slate-200 mb-1">3. Vercel Hook</span>
        <span class="text-[11px] text-slate-400 block">Automatic Trigger & Production Build</span>
      </div>

      <!-- Arrow -->
      <div class="text-indigo-500 text-lg font-bold md:rotate-0 rotate-90"><i class="fa-solid fa-chevron-right"></i></div>

      <!-- Box 4: Edge CDN -->
      <div class="flex-1 w-full p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-200 rounded-lg text-center relative">
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
          Instead of legacy bundlers, the project leverages native ES Module imports during development via <strong>Vite</strong>. This prevents upfront bundling of the entire asset tree, loading modules instantly on-demand and accelerating HMR (Hot Module Replacement) speeds.
        </p>
      </div>
    </div>

    <!-- Milestone 2 -->
    <div class="flex gap-4 items-start">
      <div class="p-2 bg-cyan-50 border border-cyan-200 rounded-lg text-cyan-600 mt-1">
        <i class="fa-solid fa-wand-magic-sparkles text-lg w-5 text-center"></i>
      </div>
      <div>
        <h4 class="text-base font-semibold text-slate-900">2. Utility-First PostCSS Parsing (Tailwind CSS)</h4>
        <p class="text-sm text-slate-600 mt-0.5">
          Tailwind operates on an active compilation scanner. During development, it reads our Vue component structure dynamically, generating utility classes only for the components explicitly typed. On full deployment, its scanning module eliminates dead CSS code completely, shipping an ultra-minified CSS payload.
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
          Local mutations are tracked atomically using decentralized Git architectures. When code commits are dispatched to the remote repository source via <code>git push origin main</code>, GitHub processes the update snapshot and fires webhook protocols out to downstream cloud platforms.
        </p>
      </div>
    </div>

    <!-- Milestone 4 -->
    <div class="flex gap-4 items-start">
      <div class="p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-600 mt-1">
        <i class="fa-solid fa-server text-lg w-5 text-center"></i>
      </div>
      <div>
        <h4 class="text-base font-semibold text-slate-900">4. CI/CD Orchestration Layer (Vercel Edge Platform)</h4>
        <p class="text-sm text-slate-600 mt-0.5">
          Vercel catches the incoming GitHub repository commit webhook trigger instantly. It launches isolated virtualization containers to run <code>npm run build</code>, transpiling Vue templates, routing schemas, and JavaScript arrays down into standard high-efficiency HTML, JS, and CSS static bundles distributed right onto global global Edge servers.
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
  <p class="mt-0 mb-3 text-base text-slate-600">A clean separation of concerns has been implemented within the <code>src/</code> directory:</p>

  <pre class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code>src/
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
      Instead of treating web interfaces as huge monolithic blobs of HTML, UI elements are broken down into self-contained, modular, reusable blocks.
    </p>
    <div class="pl-6 font-semibold text-xs text-slate-500 uppercase tracking-wider mb-1">Architectural Realization:</div>
    <div class="pl-6"><pre class="p-3 overflow-x-auto text-xs leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4]"><code><span class="text-[#6a9955]">&lt;!-- Inside App.vue --&gt;</span>
<span class="text-[#569cd6]">&lt;template&gt;</span>
  <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex"</span><span class="text-[#569cd6]">&gt;</span>
    <span class="text-[#4ec9b0]">&lt;Sidebar /&gt;</span> <span class="text-[#6a9955]">&lt;!-- Isolated scope component --&gt;</span>
    <span class="text-[#569cd6]">&lt;main</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex-1"</span><span class="text-[#569cd6]">&gt;&lt;router-view /&gt;&lt;/main&gt;</span>
  <span class="text-[#569cd6]">&lt;/div&gt;</span>
<span class="text-[#569cd6]">&lt;/template&gt;</span></code></pre></div>
  </div>

  <!-- Concept 2 -->
  <div class="mb-5">
    <h3 class="text-lg font-semibold text-slate-900 flex items-center gap-2 mb-1.5">
      <i class="fa-solid fa-route text-blue-500"></i> 2. Client-Side Decoupled Routing
    </h3>
    <p class="text-sm text-slate-600 mb-2 pl-6">
      Vue Router intercepts standard browser server requests. When navigating from <code>/lessons/what-is-dotnet</code> to another lesson, the browser does not trigger a full refresh. Instead, components swap out instantly, preserving internal application state and providing a modern, desktop-like app experience.
    </p>
  </div>

  <!-- Concept 3 & 4 Combined Dynamic / Data Driven UI -->
  <div class="mb-5">
    <h3 class="text-lg font-semibold text-slate-900 flex items-center gap-2 mb-1.5">
      <i class="fa-solid fa-database text-amber-500"></i> 3. Data-Driven UI & Dynamic Routing
    </h3>
    <p class="text-sm text-slate-600 mb-2 pl-6">
      Hardcoding text files for every new lesson introduces technical debt. By shifting structural data to a centralized JavaScript object configuration array inside <code>lessons.js</code>, the user interface acts strictly as a reactive shell.
    </p>
    <div class="pl-6 font-semibold text-xs text-slate-500 uppercase tracking-wider mb-1">Structural Configuration Matrix (lessons.js):</div>
    <div class="pl-6"><pre class="p-3 overflow-x-auto text-xs leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4]"><code><span class="text-[#569cd6]">export const</span> <span class="text-[#9cdcfe]">lessons</span> = [
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
];</code></pre></div>
    <div class="bg-amber-50 border-l-4 border-l-amber-500 p-4 my-3 ml-6 rounded-r-md text-xs text-amber-900">
      <strong>The Automation Payoff:</strong> Adding a new item to the object array instantly populates the Sidebar navigation and sets up a dynamic listener route automatically without touching route view templates.
    </div>
  </div>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Implementation Architecture (App.vue) -->
  <h2 class="pb-1 text-2xl font-bold mt-10 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-code-branch text-blue-600"></i> Layout Implementation: <code>App.vue</code>
  </h2>
  <p class="mt-0 mb-4 text-base text-slate-600">
    The conceptual responsive workflow discussed above is fully orchestrated via declarative bindings inside the main entry layout component. Here is the concrete implementation architecture of <strong>CodeWithDotNet</strong>:
  </p>

  <!-- VS Code Styled Full Code Block -->
  <div class="my-4 shadow-md rounded-md overflow-hidden border border-[#2d2d2d]">
    <!-- Top Window Bar for Design -->
    <div class="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between text-xs font-mono text-[#neutral-400]">
      <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-regular fa-file-code text-emerald-500"></i> App.vue</span>
      <span class="text-slate-500">Vue 3 Composition API</span>
    </div>
    
    <pre class="p-4 overflow-x-auto text-xs sm:text-sm leading-normal bg-[#1e1e1e] font-mono text-[#d4d4d4] max-h-[450px] overflow-y-auto"><code><span class="text-[#569cd6]">&lt;script</span> <span class="text-[#9cdcfe]">setup</span><span class="text-[#569cd6]">&gt;</span>
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
        <div><strong>Dynamic Array Bindings:</strong> Tailwind's classes are evaluated inside an array matrix (<code>:class="[...]"</code>), allowing modern conditional toggles based on the reactive state of <code>isSidebarOpen</code>.</div>
      </li>
      <li class="flex items-start gap-2">
        <i class="fa-solid fa-caret-right text-indigo-500 mt-1"></i>
        <div><strong>Screen Space Separation (<code>lg:static</code>):</strong> The layout completely shifts behavior at the <code>1024px</code> grid mark (Large Viewports). On desktop screens, mobile overrides like translation modifications are completely bypassed, locking the navigation natively into the application container layout.</div>
      </li>
    </ul>
  </div>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Roadmap & Ultimate Target -->
  <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-map text-emerald-600"></i> Future Roadmap Strategy
  </h2>
  <p class="mt-0 mb-4 text-base text-slate-600">
    The architecture built today scales horizontally. The roadmap ahead ensures CodeWithDotNet evolves from a simple template into a full-scale ecosystem engine:
  </p>

  <!-- Timeline Flow -->
  <div class="pl-4 border-l-2 border-slate-200 space-y-4 my-4 font-sans text-sm">
    <div class="relative">
      <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
      <span class="font-bold text-slate-900 block">Phase 1: Core Fundamentals (Current)</span>
      <span class="text-xs text-slate-500">Documenting basic .NET runtimes, CLR compilation, and core C# types/structures.</span>
    </div>
    <div class="relative">
      <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400"></div>
      <span class="font-bold text-slate-700 block">Phase 2: Backend Architecture & APIs</span>
      <span class="text-xs text-slate-500">Implementing patterns with ASP.NET Core, building robust RESTful APIs, and understanding routing mechanics.</span>
    </div>
    <div class="relative">
      <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400"></div>
      <span class="font-bold text-slate-700 block">Phase 3: Data Layer Integration</span>
      <span class="text-xs text-slate-500">Connecting persistent database instances using SQL Server and Entity Framework Core (EF Core).</span>
    </div>
    <div class="relative">
      <div class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400"></div>
      <span class="font-bold text-slate-700 block">Phase 4: Full Stack Project Synthesis</span>
      <span class="text-xs text-slate-500">Deploying unified real-world administrative dashboards and full-fledged ERP microservices.</span>
    </div>
  </div>

</div>  `,
    },

    // Project Journey and flow
    {
        id: 5,
        title: 'Vue 3 Helper',
        slug: 'vue-3-helper',
        category: 'Project Journey',
        content: `
<div class="max-w-5xl mx-auto py-10 px-4">
  <!-- Infographic Header -->
  <div class="text-center mb-12">
    <span class="text-blue-500 font-bold tracking-widest text-xs uppercase">Project Blueprint</span>
    <h2 class="text-4xl font-black text-slate-900 mt-2">CodeWithDotNet: Workflow Architecture</h2>
  </div>

  <!-- Infographic Timeline/Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <!-- Using a loop structure in mind, these are the visual cards -->
    <div class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300">
      <div class="absolute -top-3 -left-3 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">01</div>
      <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">main.js</h3>
      <p class="text-slate-600 text-sm leading-relaxed">Vue app এর entry point. ব্রাউজার app open করলে এখান থেকেই execution শুরু হয়। </p>
    </div>

    <div class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300">
      <div class="absolute -top-3 -left-3 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">02</div>
      <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">App.vue</h3>
      <p class="text-slate-600 text-sm leading-relaxed">Root component. পুরো অ্যাপের কঙ্কাল বা মেইন লেআউট এখানেই তৈরি হয়।</p>
    </div>

    <div class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300">
      <div class="absolute -top-3 -left-3 bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">03</div>
      <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">Sidebar.vue</h3>
      <p class="text-slate-600 text-sm leading-relaxed">Reusable navigation. অ্যাপের সমস্ত লিঙ্কগুলো ডাইনামিকালি এখানে শো করে।</p>
    </div>

        <!-- 04. lessons.js -->
<div class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-emerald-500">
  <div class="absolute -top-3 -left-3 bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">04</div>

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
<div class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-sky-500">
  <div class="absolute -top-3 -left-3 bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">05</div>

  <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">
    Vue Router (Navigation Engine)
  </h3>

  <p class="text-slate-600 text-sm leading-7">
    Vue Router পুরো app এর route system control করে।
    User কোন URL এ গেলে কোন page render হবে সেটা Vue Router decide করে।
  </p>

  <div class="mt-4 rounded-xl bg-slate-950 p-4 text-xs text-cyan-300 font-mono overflow-x-auto">
/                  → HomePage
/lessons/:slug    → LessonPage
  </div>
</div>

<!-- 06. RouterLink -->
<div class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-orange-500">
  <div class="absolute -top-3 -left-3 bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">06</div>

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
  {{ lesson.title }}
&lt;/RouterLink&gt;
  </div>
</div>

<!-- 07. RouterView -->
<div class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-pink-500">
  <div class="absolute -top-3 -left-3 bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">07</div>

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
<div class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-rose-500">
  <div class="absolute -top-3 -left-3 bg-rose-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">08</div>

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
<div class="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 hover:scale-105 transition-transform duration-300 border-l-4 border-l-violet-500">
  <div class="absolute -top-3 -left-3 bg-violet-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">09</div>

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
<div class="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 lg:col-span-3 border-l-4 border-l-indigo-500 group">
  
  <!-- Number Badge -->
  <div class="absolute -top-4 -left-4 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-white group-hover:bg-indigo-500 transition-colors">
    10
  </div>

  <!-- Title -->
  <h3 class="text-2xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
    Full Browser Rendering Journey
  </h3>

  <!-- Description -->
  <p class="text-slate-600 text-base leading-relaxed mb-8 max-w-4xl">
    পুরো Vue app এর journey শুরু হয় browser থেকে। Browser প্রথমে <code class="text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded font-mono text-sm">index.html</code> load করে। তারপর <code class="text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded font-mono text-sm">main.js</code> Vue app start করে। <code class="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-mono text-sm">App.vue</code> পুরো layout তৈরি করে। Sidebar lessons.js থেকে links render করে। User যখন RouterLink এ click করে, Vue Router URL match করে। এরপর RouterView এর ভিতরে LessonPage inject হয় এবং lessons.js থেকে matching content খুঁজে browser এ render করে।
  </p>

  <!-- Dark Mode Journey Flow Visualizer -->
  <div class="rounded-2xl bg-[#0f172a] border border-slate-800 p-6 md:p-8 overflow-x-auto shadow-inner relative">
    
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
        <span class="text-slate-500 font-normal italic text-xs ml-4">// User visits the website</span>
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
        <span class="text-slate-500 font-normal italic text-xs ml-4">// Vue Instance Initialized</span>
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
        <span class="text-emerald-300 bg-emerald-900/30 px-2 py-0.5 rounded border border-emerald-800/50">Sidebar.vue</span> 
        <span class="text-slate-500">+</span> 
        <span class="text-indigo-400 bg-indigo-900/30 px-2 py-0.5 rounded border border-indigo-800/50">&lt;RouterView /&gt;</span>
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
      <div class="text-blue-400 font-bold ml-64 px-4 py-2 bg-blue-900/20 border border-blue-500/30 rounded-lg inline-block shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        ✨ Final Browser Render
      </div>

    </div>
  </div>
</div>

  </div>

  <!-- Footer/Summary -->
  <div class="mt-12 bg-slate-900 rounded-3xl p-8 text-center text-slate-300">
    <p class="text-lg font-light italic">"From entry point (main.js) to deployment (Vercel), this is the optimized flow for your professional documentation system."</p>
  </div>
</div>

<div class="github-readme font-sans text-slate-800 max-w-6xl mx-auto leading-relaxed">

  <!-- Section: Main Header -->
  <div class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/20 p-8 shadow-sm mb-12">
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
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-bolt text-amber-500"></i> 1. main.js
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> main.js হলো Vue app এর starting point।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> Browser যখন app open করে, Vue app কোথা থেকে start হবে সেটা main.js ঠিক করে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> hospitality App.vue import করে, router connect করে, CSS load করে, তারপর app কে #app div এর ভিতরে mount করে।</p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
        <span class="text-[#61afef]">createApp</span><span class="text-[#abb2bf]">(</span><span class="text-[#e06c75]">App</span><span class="text-[#abb2bf]">).</span><span class="text-[#56b6c2]">use</span><span class="text-[#abb2bf]">(</span><span class="text-[#e06c75]">router</span><span class="text-[#abb2bf]">).</span><span class="text-[#56b6c2]">mount</span><span class="text-[#abb2bf]">(</span><span class="text-[#98c379]">'#app'</span><span class="text-[#abb2bf]">)</span>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন project start হয়, তখন automatically main.js প্রথমে run হয়।</p>
    </div>

    <!-- 2. App.vue -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
      <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <i class="fa-solid fa-box text-indigo-500"></i> 2. App.vue
      </h3>
      <div class="space-y-3 text-sm text-slate-600">
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> App.vue হলো root component। পুরো app এর main layout এখানে থাকে।</p>
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> Sidebar, main content, mobile navbar, RouterView — এগুলো এক জায়গায় manage করার জন্য।</p>
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> এখানে আমরা layout বানাই: Sidebar | Main Content আর &lt;RouterView /&gt; current page show করে।</p>
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন app load হয়, main.js প্রথমে App.vue render করে।</p>
      </div>
    </div>

    <!-- 3. Sidebar.vue -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-compass text-teal-500"></i> 3. Sidebar.vue
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Sidebar হলো আলাদা reusable component।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> সব code App.vue এর ভিতরে রাখলে messy হয়ে যায়। তাই sidebar আলাদা file এ রাখি।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> Sidebar.vue lessons.js থেকে data নিয়ে v-for দিয়ে links বানায়।</p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
        <span class="text-[#d19a66]">v-for</span><span class="text-[#56b6c2]">=</span><span class="text-[#98c379]">"lesson in lessons"</span>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন app layout render হয়, তখন sidebar সবসময় show হয় desktop এ। mobile এ hamburger click করলে show হয়।</p>
    </div>

    <!-- 4. lessons.js -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
      <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <i class="fa-solid fa-database text-rose-500"></i> 4. lessons.js
      </h3>
      <div class="space-y-3 text-sm text-slate-600">
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> এটা lesson data রাখার file।</p>
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> যদি প্রতিটা lesson manually sidebar এ লিখি, project বড় হলে manage করা impossible হবে।</p>
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> আমরা lesson data array হিসেবে রাখি। Sidebar এই data থেকে link বানায়, আর LessonPage এই data থেকে content show করে।</p>
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন নতুন lesson add করতে চাই, শুধু lessons.js এ নতুন object add করি।</p>
      </div>
    </div>

    <!-- 5. Vue Router -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200">
      <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <i class="fa-solid fa-route text-sky-500"></i> 5. Vue Router
      </h3>
      <div class="space-y-3 text-sm text-slate-600">
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Vue Router page navigation handle করে।</p>
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> আমাদের দরকার <span class="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">/</span > , <span class="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">/lessons/what-is-dotnet</span> , <span class="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">/lessons/what-is-csharp</span> এরকম page system।</p>
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> router/index.js এ route define করি।</p>
        <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন user sidebar link click করে, Router URL দেখে ঠিক page render করে।</p>
      </div>
    </div>

    <!-- 6. RouterLink -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-link text-blue-500"></i> 6. RouterLink
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Vue Router এর special link component।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> Normal &lt;a&gt; দিলে page reload হয়। RouterLink দিলে Vue app reload না করেই page change করে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
        <span class="text-[#e06c75]">&lt;RouterLink</span> <span class="text-[#d19a66]">:to</span><span class="text-[#56b6c2]">=</span><span class="text-[#98c379]">"'/lessons/' + lesson.slug"</span><span class="text-[#e06c75]">&gt;</span>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Internal page navigation এর জন্য use করি।</p>
    </div>

    <!-- 7. RouterView -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-eye text-purple-500"></i> 7. RouterView
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Current route এর component যেখানে show হবে সেটা হলো RouterView।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> App.vue এর main area dynamic রাখতে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> URL যদি / হয়, HomePage show হয়। URL যদি /lessons/what-is-dotnet হয়, LessonPage show হয়।</p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
        <span class="text-[#e06c75]">&lt;RouterView</span> <span class="text-[#e06c75]/80">/&gt;</span>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন route অনুযায়ী page content দেখাতে হয়।</p>
    </div>

    <!-- 8. Dynamic Lesson Page -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-file-code text-orange-500"></i> 8. Dynamic Lesson Page
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> একটা single LessonPage.vue, কিন্তু অনেক lesson show করতে পারে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> প্রতিটা lesson এর জন্য আলাদা file বানালে project messy হবে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> URL থেকে slug নেয় এবং matching lesson খুঁজে বের করে।</p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
        <span class="text-[#e06c75]">route</span><span class="text-[#abb2bf]">.</span><span class="text-[#e5c07b]">params</span><span class="text-[#abb2bf]">.</span><span class="text-[#61afef]">slug</span>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন user sidebar থেকে যেকোনো lesson click করে।</p>
    </div>

    <!-- 9. ref -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-battery-three-quarters text-emerald-500"></i> 9. ref
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Vue এর reactive variable।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> কোনো value change হলে UI automatically update করার জন্য।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
        <span class="text-[#c678dd]">const</span> <span class="text-[#e06c75]">isSidebarOpen</span> <span class="text-[#56b6c2]">=</span> <span class="text-[#61afef]">ref</span><span class="text-[#abb2bf]">(</span><span class="text-[#d19a66]">false</span><span class="text-[#abb2bf]">)</span>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Sidebar open/close, form input, toggle, dark mode — এসব state manage করতে।</p>
    </div>

    <!-- 10. Mobile Sidebar -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-mobile-screen text-fuchsia-500"></i> 10. Mobile Sidebar
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Mobile screen এ sidebar hide/show system।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> Mobile এ sidebar সবসময় visible থাকলে পুরো screen ঢেকে ফেলবে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong> আমরা isSidebarOpen state এবং Tailwind classes use করি:</p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800 space-y-1">
        <div><span class="text-[#e06c75]">-translate-x-full</span> <span class="text-[#5c6370]">// Hidden</span></div>
        <div><span class="text-[#98c379]">translate-x-0</span> <span class="text-[#5c6370]">// Visible</span></div>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Mobile responsive design করার সময়।</p>
    </div>

    <!-- 11. Overlay -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-moon text-slate-600"></i> 11. Overlay
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Sidebar open হলে dark background।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> User যেন বুঝতে পারে sidebar active আছে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
        <span class="text-[#d19a66]">v-if</span><span class="text-[#56b6c2]">=</span><span class="text-[#98c379]">"isSidebarOpen"</span> <span class="text-[#e06c75]">@click</span><span class="text-[#56b6c2]">=</span><span class="text-[#98c379]">"isSidebarOpen = false"</span>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Mobile drawer/sidebar/menu system এ use হয়।</p>
    </div>

    <!-- 12. Separate Scroll -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-scroll text-cyan-600"></i> 12. Separate Scroll
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Sidebar আর main content আলাদা আলাদা scroll করবে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> Documentation website এ sidebar fixed থাকে, main content scroll হয়।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800 space-y-1">
        <div><span class="text-[#e5c07b]">Parent:</span> <span class="text-[#98c379]">h-screen overflow-hidden</span></div>
        <div><span class="text-[#e5c07b]">Child:</span> <span class="text-[#98c379]">overflow-y-auto</span></div>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Docs website, dashboard, admin panel layout এ।</p>
    </div>

    <!-- 13. Route Change Scroll Fix -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-arrows-spin text-indigo-600"></i> 13. Route Change Scroll Fix
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> নতুন lesson click করলে main content top এ চলে যাবে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> আগের page এ নিচে scroll করা থাকলে নতুন page-ও নিচে open হচ্ছিল।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
        <span class="text-[#e06c75]">mainContent</span><span class="text-[#abb2bf]">.</span><span class="text-[#e5c07b]">value</span><span class="text-[#abb2bf]">.</span><span class="text-[#e06c75]">scrollTop</span> <span class="text-[#56b6c2]">=</span> <span class="text-[#b5cea8]">0</span>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> যখন scroll container browser window না হয়ে custom div/main হয়।</p>
    </div>

    <!-- 14. Tailwind CSS -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-palette text-pink-500"></i> 14. Tailwind CSS
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> Utility-first CSS framework।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> CSS file আলাদা করে না লিখে directly class দিয়ে design করা যায়।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800">
        <span class="text-[#e06c75]">&lt;div</span> <span class="text-[#d19a66]">class</span><span class="text-[#56b6c2]">=</span><span class="text-[#98c379]">"bg-white p-8 rounded-3xl"</span><span class="text-[#e06c75]">&gt;</span>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> Modern frontend UI দ্রুত এবং clean ভাবে design করতে।</p>
    </div>

    <!-- 15. GitHub + Vercel -->
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col justify-between">
      <div>
        <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-rocket text-emerald-600"></i> 15. GitHub + Vercel
        </h3>
        <div class="space-y-3 text-sm text-slate-600">
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">What is it?</strong> GitHub code রাখে। Vercel website live করে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">Why?</strong> তোমার project public portfolio হবে।</p>
          <p><strong class="block text-xs uppercase text-slate-400 tracking-wider">How?</strong></p>
        </div>
      </div>
      <div class="mt-4 rounded-xl overflow-hidden bg-[#1e1e1e] p-3 font-mono text-xs shadow-inner border border-zinc-800 space-y-1">
        <div><span class="text-[#61afef]">git</span> <span class="text-[#abb2bf]">add . &amp;&amp;</span> <span class="text-[#61afef]">git</span> <span class="text-[#abb2bf]">commit</span></div>
        <div><span class="text-[#61afef]">git</span> <span class="text-[#abb2bf]">push origin main</span></div>
      </div>
      <p class="text-sm text-slate-600 mt-3"><strong class="block text-xs uppercase text-slate-400 tracking-wider">When?</strong> প্রতিটা meaningful progress এর পর।</p>
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
          <div class="text-cyan-400 bg-cyan-950/40 py-2 rounded-xl border border-cyan-500/20">User Clicks RouterLink (Sidebar)</div>
          <div class="text-zinc-600 text-xs">▼</div>
          <div class="text-blue-400 bg-blue-950/40 py-2 rounded-xl border border-blue-500/20">URL Changes Without Page Reload</div>
          <div class="text-zinc-600 text-xs">▼</div>
          <div class="text-purple-400 bg-purple-950/40 py-2 rounded-xl border border-purple-500/20">Router Matches Slug from lessons.js</div>
          <div class="text-zinc-600 text-xs">▼</div>
          <div class="text-emerald-400 bg-emerald-950/40 py-2 rounded-xl border border-emerald-500/20">Dynamic Content Renders inside RouterView</div>
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
  <div class="my-8 p-6 bg-gradient-to-br from-blue-950/20 via-slate-50 to-blue-950/10 rounded-xl border border-blue-500/20 shadow-sm relative overflow-hidden">
    <h2 class="text-xl font-bold text-slate-950 flex items-center gap-2 mb-3">
      <i class="fa-solid fa-flag-checkered text-blue-900"></i> Architectural Synthesis
    </h2>
    <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
      এই ১৫টি কোর কনসেপ্টের সঠিক ইমপ্লিমেন্টেশন একটি সাধারণ SPA (Single Page Application)-কে কর্পোরেট স্ট্যান্ডার্ড প্রজেক্টে রূপান্তর করে। সেন্ট্রালাইজড ডেটা হ্যান্ডলিং (<span class="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">lessons.js</span>) থেকে শুরু করে রেসপনসিভ মেকানিজম এবং স্ক্রোল কারেকশন ইউজার এক্সপেরিয়েন্সকে অনেক বেশি প্রফেশনাল করে তোলে:
    </p>

    <!-- Highlighted Technology Matrix Layer -->
    <div class="flex flex-wrap items-center gap-2 font-mono text-xs font-bold pt-1">
      <span class="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200/60 rounded-md shadow-sm">Vue 3 Core</span>
      <span class="text-slate-400 font-normal">+</span>
      <span class="px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-md shadow-sm">Vue Router</span>
      <span class="text-slate-400 font-normal">+</span>
      <span class="px-3 py-1.5 bg-sky-50 text-sky-700 border border-sky-200/60 rounded-md shadow-sm">Tailwind Core</span>
      <span class="text-slate-400 font-normal">+</span>
      <span class="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200/60 rounded-md shadow-sm">Vercel Deploy</span>
    </div>
  </div>

</div>

<div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-6">

  <!-- Header Section -->
  <div class="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 p-8 shadow-sm mb-10">
    <h1 class="text-3xl font-black text-slate-900 flex items-center gap-3">
      <i class="fa-solid fa-network-wired text-blue-600"></i> Vue 3 Lifecycle & Router Flow Architecture
    </h1>
    <p class="text-slate-500 text-sm mt-2 font-mono">How index.html, main.js, App.vue, and Vue Router connect seamlessly</p>
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

    <div class="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200/60">
      
      <!-- Step 1 -->
      <div class="relative pl-12">
        <div class="absolute left-2 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-white text-emerald-700 font-mono text-xs font-bold">1</div>
        <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
          <i class="fa-solid fa-code text-emerald-600 text-sm"></i> index.html ও main.js এর কানেকশন
        </h3>
        <p class="text-slate-500 text-xs font-mono uppercase tracking-wider mt-0.5">The Entry Point</p>
        <p class="text-slate-600 text-sm mt-2">
          ব্রাউজার যখন অ্যাপ্লিকেশনটি ওপেন করে, সে সবার আগে bg-[#1e1e1e] <span class="bg-[#1e1e1e] text-[#98c379] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">index.html</span> ফাইলটি লোড করে। এই ফাইলে একটি মাত্র খালি <span class="bg-[#1e1e1e] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800"><span class="text-[#e06c75]">&lt;div</span> <span class="text-[#d19a66]">id</span>=<span class="text-[#98c379]">"app"</span><span class="text-[#e06c75]">&gt;&lt;/div&gt;</span></span> থাকে। আধুনিক বিল্ড টুল (Vite) এই ফাইলের স্ক্রিপ্ট ট্যাগ দিয়ে <span class="bg-[#1e1e1e] text-[#61afef] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">main.js</span>-কে যুক্ত করে দেয়, যা অ্যাপের মেইন ইঞ্জিন চালু করার নির্দেশ দেয়।
        </p>
      </div>

      <!-- Step 2 -->
      <div class="relative pl-12">
        <div class="absolute left-2 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-4 ring-white text-blue-700 font-mono text-xs font-bold">2</div>
        <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
          <i class="fa-solid fa-bolt text-blue-600 text-sm"></i> main.js এ ইঞ্জিন চালু ও রাউটার ইনজেকশন
        </h3>
        <p class="text-slate-500 text-xs font-mono uppercase tracking-wider mt-0.5">The Initialization</p>
        <p class="text-slate-600 text-sm mt-2">
          <span class="bg-[#1e1e1e] text-[#61afef] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">main.js</span> ফাইলে Vue এর <span class="bg-[#1e1e1e] text-[#56b6c2] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">createApp</span> ফাংশন রান করে কোর ইঞ্জিন তৈরি করা হয়। এখানে দুটি মেইন মডিউল ইমপোর্ট করা হয়: অ্যাপের পুরো কঙ্কাল বা মেইন লেআউট <span class="bg-[#1e1e1e] text-[#e5c07b] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">App.vue</span> এবং অ্যাপের রাস্তার গাইড ম্যাপ <span class="bg-[#1e1e1e] text-[#e06c75] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">router (router/index.js)</span>। এরপর <span class="bg-[#1e1e1e] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800"><span class="text-[#e06c75]">app</span>.<span class="text-[#56b6c2]">use</span>(<span class="text-[#e06c75]">router</span>).<span class="text-[#56b6c2]">mount</span>(<span class="text-[#98c379]">'#app'</span>)</span> কোডটি দিয়ে রাউটারসহ পুরো সিস্টেমটাকে index.html-এর সেই খালি ডিভের ভেতর ইনজেক্ট করে দেওয়া হয়।
        </p>
      </div>

      <!-- Step 3 -->
      <div class="relative pl-12">
        <div class="absolute left-2 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 ring-4 ring-white text-orange-700 font-mono text-xs font-bold">3</div>
        <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
          <i class="fa-solid fa-border-all text-orange-600 text-sm"></i> App.vue এর মেইন লেআউট সেটআপ
        </h3>
        <p class="text-slate-500 text-xs font-mono uppercase tracking-wider mt-0.5">The Layout Root</p>
        <p class="text-slate-600 text-sm mt-2">
          এখন স্ক্রিনে <span class="bg-[#1e1e1e] text-[#e5c07b] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">App.vue</span> লোড হয়ে গেছে। এটি একটি গ্লোবাল লেআউট বা মেইন হোল্ডার শেল হিসেবে কাজ করে। এর ভেতরে সাধারণত আমরা দুটি মূল কম্পোনেন্ট জোন ডিফাইন করি:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-2 text-sm text-slate-600">
          <li><span class="bg-[#1e1e1e] text-[#e5c07b] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">Sidebar.vue</span> Component: যা স্ক্রিনের একপাশে ফিক্সড হিসেবে রেন্ডার হয়।</li>
          <li><span class="bg-[#1e1e1e] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800"><span class="text-[#e06c75]">&lt;RouterView</span> <span class="text-[#e06c75]/80">/&gt;</span></span>: এটি একটি ডায়নামিক প্লেসহোল্ডার। ইউজার যখন যে পেজে যাবে, রাউটার সেই পেজের কন্টেন্ট এনে এই খালি প্লাগ পয়েন্টে রেন্ডার করবে।</li>
        </ul>
      </div>

      <!-- Step 4 -->
      <div class="relative pl-12">
        <div class="absolute left-2 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 ring-4 ring-white text-yellow-700 font-mono text-xs font-bold">4</div>
        <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
          <i class="fa-solid fa-link text-yellow-600 text-sm"></i> Sidebar এ RouterLink এর নেভিগেশন ট্রিপ
        </h3>
        <p class="text-slate-500 text-xs font-mono uppercase tracking-wider mt-0.5">The Navigation Trigger</p>
        <p class="text-slate-600 text-sm mt-2">
          সাইডবারের ভেতরে আমরা <span class="bg-[#1e1e1e] text-[#e06c75] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">lessons.js</span> ফাইল থেকে লুপ চালিয়ে প্রতিটি লেসনের জন্য আলাদা লিংক তৈরি করি। প্রথাগত HTML এর <span class="bg-[#1e1e1e] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800"><span class="text-[#e06c75]">&lt;a</span> <span class="text-[#d19a66]">href</span>=<span class="text-[#98c379]">"..."</span><span class="text-[#e06c75]">&gt;</span></span> ট্যাগের পরিবর্তে আমরা ব্যবহার করি <span class="bg-[#1e1e1e] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800"><span class="text-[#e06c75]">&lt;RouterLink</span> <span class="text-[#d19a66]">:to</span>=<span class="text-[#98c379]">"..."</span><span class="text-[#e06c75]">&gt;</span></span>। ইউজার যখন কোনো লিংকে ক্লিক করে, এটি ব্রাউজারকে সম্পূর্ণ পেজ রিফ্রেশ হতে দেয় না, সে কেবল ব্রাউজারের URL পাথটি পরিবর্তন করে দেয় (যেমন: <span class="bg-[#1e1e1e] text-[#98c379] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">/lessons/what-is-dotnet</span>)।
        </p>
      </div>

      <!-- Step 5 -->
      <div class="relative pl-12">
        <div class="absolute left-2 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 ring-4 ring-white text-pink-700 font-mono text-xs font-bold">5</div>
        <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
          <i class="fa-solid fa-file-invoice text-pink-600 text-sm"></i> RouterView ও Dynamic Content রেন্ডারিং
        </h3>
        <p class="text-slate-500 text-xs font-mono uppercase tracking-wider mt-0.5">The Final Destination</p>
        <p class="text-slate-600 text-sm mt-2">
          URL বার পরিবর্তন হওয়া মাত্রই ব্যাকএন্ডে সজাগ হয়ে যায় <span class="bg-[#1e1e1e] text-[#e06c75] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">router/index.js</span>। সে তার ডিফাইন করা ম্যাপের সাথে বর্তমান URL মিলিয়ে দেখে। যখন সে দেখে যে এই প্যাটার্নের সাথে <span class="bg-[#1e1e1e] text-[#e5c07b] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">LessonPage.vue</span> কম্পোনেন্টটি অ্যাসাইন করা আছে, সে তৎক্ষণাৎ সেই কম্পোনেন্টটিকে ডেকে এনে <span class="bg-[#1e1e1e] text-[#e5c07b] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">App.vue</span>-এর ভেতরে থাকা <span class="bg-[#1e1e1e] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800"><span class="text-[#e06c75]">&lt;RouterView</span> <span class="text-[#e06c75]/80">/&gt;</span></span>-এর জায়গায় সোয়াপ বা রিপ্লেস করে দেয়। <span class="bg-[#1e1e1e] text-[#e5c07b] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">LessonPage</span> তখন URL-এর ডাইনামিক <span class="bg-[#1e1e1e] text-[#d19a66] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">:slug</span> প্যারামিটার রিড করে <span class="bg-[#1e1e1e] text-[#e06c75] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">lessons.js</span> থেকে নির্দিষ্ট অবজেক্টটি ফিল্টার করে স্ক্রিনে শো করে।
        </p>
      </div>

    </div>
  </div>

  <!-- Summary Alert/Quote Box -->
  <div class="mt-10 p-5 bg-blue-50/50 rounded-2xl border border-blue-200/60 shadow-sm flex items-start gap-3">
    <i class="fa-solid fa-circle-info text-blue-600 mt-1 text-lg"></i>
    <div>
      <h4 class="text-sm font-bold text-blue-950 uppercase tracking-wide">Architectural Core Summary</h4>
      <p class="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
        সংক্ষেপে: <span class="bg-[#1e1e1e] text-[#98c379] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">index.html</span> এর ভেতর <span class="bg-[#1e1e1e] text-[#61afef] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">main.js</span> লোড হয় ──► <span class="bg-[#1e1e1e] text-[#61afef] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">main.js</span> রাউটার আর <span class="bg-[#1e1e1e] text-[#e5c07b] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">App.vue</span>-কে মাউন্ট করে ──► <span class="bg-[#1e1e1e] text-[#e5c07b] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800">App.vue</span> তার লেআউটে <span class="bg-[#1e1e1e] font-mono px-1.5 py-0.5 rounded text-xs border border-zinc-800"><span class="text-[#e06c75]">&lt;RouterView</span> <span class="text-[#e06c75]/80">/&gt;</span></span> হোল্ডার রাখে ──► ইউজার সাইডবারে ক্লিক করলে রাউটার URL রিড করে এবং ম্যাচিং ডাইনামিক পেজ কন্টেন্ট সেই প্লেসহোল্ডারে সোয়াপ করে দেয়।
      </p>
    </div>
  </div>

</div>
    `
    }

]