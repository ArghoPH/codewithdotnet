export const lessons = [
    {
        id: 1,
        title: 'What is .NET?',
        slug: 'what-is-dotnet',
        category: '.NET Basics',
        content: `
<div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-5">

  <!-- Header Section -->
  <div class="mb-8 p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-xl text-white shadow-md relative overflow-hidden">
    <div class="absolute right-4 top-4 opacity-10 text-7xl"><i class="fa-solid fa-layer-group"></i></div>
    <span class="px-2.5 py-1 text-xs font-semibold bg-blue-500/30 text-blue-300 rounded-full border border-blue-500/20 uppercase tracking-wider">Lesson 01</span>
    <h1 class="text-3xl font-extrabold mt-2 mb-2 tracking-tight text-white flex items-center gap-2.5">
      <i class="fa-solid fa-cubes text-blue-400"></i> What is .NET?
    </h1>
    <p class="text-slate-300 text-sm max-w-2xl leading-relaxed">
      An in-depth guide to understanding the modern, open-source, cross-platform development engine created by Microsoft.
    </p>
  </div>

  <!-- Section: Introduction -->
  <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-compass text-blue-600"></i> Comprehensive Introduction
  </h2>
  <p class="mt-0 mb-4 text-base text-slate-600">
    <span class="text-blue-600 font-semibold">.NET</span> (pronounced as <em>Dot Net</em>) is a free, open-source, developer platform created by Microsoft for building many different types of applications. It is not just a framework or a single programming language; it is an entire **ecosystem** that provides the tooling, programming models, libraries, and runtime optimization needed to build high-performance software systems.
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
        The **Common Language Runtime (CLR)** is the execution engine of .NET. It handles thread execution, code compilation via JIT (Just-In-Time), memory allocation, and automated **Garbage Collection (GC)**. The CLR abstracts hardware operations, making your application safe and robust.
      </p>
    </div>

    <!-- Component 2 -->
    <div class="p-4 border border-slate-200 bg-slate-50/50 rounded-lg">
      <h4 class="text-base font-semibold text-slate-900 flex items-center gap-2">
        <i class="fa-solid fa-book-bookmark text-emerald-600"></i> 2. The Base Class Library (BCL)
      </h4>
      <p class="text-sm text-slate-600 mt-1 pl-7">
        Instead of rewriting fundamental operations from scratch, .NET ships with a massive suite of standard libraries called the **Base Class Library**. This gives developers out-of-the-box access to APIs for reading/writing files, networking, data collection handling, encryption, and JSON serialization.
      </p>
    </div>

    <!-- Component 3 -->
    <div class="p-4 border border-slate-200 bg-slate-50/50 rounded-lg">
      <h4 class="text-base font-semibold text-slate-900 flex items-center gap-2">
        <i class="fa-solid fa-screwdriver-wrench text-amber-600"></i> 3. The Tooling & SDKs
      </h4>
      <p class="text-sm text-slate-600 mt-1 pl-7">
        The **.NET SDK** contains compilers (like Roslyn) and the **CLI (Command Line Interface)**. It enables developers to create, build, restore, and run applications using simple shell commands.
      </p>
    </div>
  </div>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Multi-Language Support -->
  <h2 class="pb-1 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
    <i class="fa-solid fa-language text-purple-600"></i> Language Agnostic Nature
  </h2>
  <p class="mt-0 mb-3 text-base text-slate-600">
    One of the major engineering triumphs of .NET is its **multi-language runtime**. You can write source code in different programming languages, and they all compile down to the exact same bytecode format so they can communicate seamlessly.
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
  <!-- Header Section -->
  <div class="mb-8 p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-xl text-white shadow-md relative overflow-hidden">
    <div class="absolute right-4 top-4 opacity-10 text-7xl"><i class="fa-solid fa-layer-group"></i></div>
    <span class="px-2.5 py-1 text-xs font-semibold bg-blue-500/30 text-blue-300 rounded-full border border-blue-500/20 uppercase tracking-wider">Lesson 01</span>
    <h1 class="text-3xl font-extrabold mt-2 mb-2 tracking-tight text-white flex items-center gap-2.5">
      <i class="fa-solid fa-cubes text-blue-400"></i> What is C#?
    </h1>
    <p class="text-slate-300 text-sm max-w-2xl leading-relaxed">
      An in-depth guide to understanding the modern, open-source, cross-platform development engine created by Microsoft.
    </p>
  </div>

  <!-- Section: Introduction -->
  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-terminal text-blue-600"></i> Introduction
  </h3>
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

  <!-- Header Section -->
  <div class="mb-8 p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-xl text-white shadow-md relative overflow-hidden">
    <div class="absolute right-4 top-4 opacity-10 text-7xl"><i class="fa-solid fa-layer-group"></i></div>
    <span class="px-2.5 py-1 text-xs font-semibold bg-blue-500/30 text-blue-300 rounded-full border border-blue-500/20 uppercase tracking-wider">Lesson 01</span>
    <h1 class="text-3xl font-extrabold mt-2 mb-2 tracking-tight text-white flex items-center gap-2.5">
      <i class="fa-solid fa-cubes text-blue-400"></i> .NET Code Journey
    </h1>
    <p class="text-slate-300 text-sm max-w-2xl leading-relaxed"> 
      An in-depth guide to understanding the modern, open-source, cross-platform development engine created by Microsoft.
    </p>
  </div>

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

  <!-- Header Section -->
  <div class="mb-8 p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-xl text-white shadow-md relative overflow-hidden">
    <div class="absolute right-4 top-4 opacity-10 text-7xl"><i class="fa-solid fa-code-branch"></i></div>
    <span class="px-2.5 py-1 text-xs font-semibold bg-indigo-500/30 text-indigo-300 rounded-full border border-indigo-500/20 uppercase tracking-wider">Devlog #01</span>
    <h1 class="text-3xl font-extrabold mt-2 mb-2 tracking-tight text-white flex items-center gap-2.5">
      <i class="fa-solid fa-cubes text-indigo-400"></i> Project Inception: CodeWithDotNet
    </h1>
    <p class="text-slate-300 text-sm max-w-2xl leading-relaxed">
      Building a modern, documentation-style learning platform to publicly document my journey into the .NET ecosystem, step-by-step.
    </p>
  </div>

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


]