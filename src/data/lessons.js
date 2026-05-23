export const lessons = [
    {
        id: 1,
        title: 'What is .NET?',
        slug: 'what-is-dotnet',
        category: '.NET Basics',
        content: `
<div class="github-readme font-sans text-slate-800 max-w-3xl mx-auto leading-relaxed p-5">

  <!-- Section: Introduction -->
  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-rocket text-blue-600"></i> Introduction
  </h3>
  <p class="mt-0 mb-4 text-base">
    .NET is a <strong class="font-semibold italic">modern development platform</strong> created by Microsoft.
  </p>
  <p class="mt-0 mb-4 text-base">
    <span class="text-green-600 font-semibold">.NET</span> provides tools, libraries, and runtime support for building modern software applications.
  </p>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Why .NET is Important -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-fire text-orange-500"></i> Why .NET is Important
  </h2>
  <p class="mt-0 mb-4 text-base">
    <span class="text-orange-500 font-semibold">.NET</span> is one of the most popular development platforms in the world.
  </p>
  
  <p class="mt-0 mb-2 text-base">It is used by:</p>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-1">
    <li><em class="not-implemented">Large companies</em></li>
    <li><em class="not-implemented">Startups</em></li>
    <li><em class="not-implemented">Enterprise businesses</em></li>
    <li><em class="not-implemented">Cloud platforms</em></li>
    <li><em class="not-implemented">Banking systems</em></li>
    <li><em class="not-implemented">Government software</em></li>
  </ul>

  <p class="mt-0 mb-2 text-base"><span class="text-orange-500 font-semibold">Because it is:</span></p>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-1">
    <li><strong class="font-semibold italic">Fast</strong></li>
    <li><strong class="font-semibold italic">Modern</strong></li>
    <li><strong class="font-semibold italic">Secure</strong></li>
    <li><strong class="font-semibold italic">Cross-platform</strong></li>
    <li><strong class="font-semibold italic">Scalable</strong></li>
  </ul>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: What Can You Build -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-earth-americas text-blue-500"></i> What Can You Build with .NET?
  </h2>
  <p class="mt-0 mb-4 text-base">.NET allows developers to build many types of applications.</p>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-globe text-slate-600"></i> Web Applications
  </h3>
  <p class="mt-0 mb-2 text-base">Build <em class="not-implemented">modern websites and dashboards</em>.</p>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-1">
    <li><em class="not-implemented">E-commerce websites</em></li>
    <li><em class="not-implemented">Admin panels</em></li>
    <li><em class="not-implemented">SaaS platforms</em></li>
  </ul>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-plug text-slate-600"></i> Web APIs
  </h3>
  <p class="mt-0 mb-4 text-base">APIs <em class="not-implemented">connect frontend and backend together</em>.</p>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-desktop text-slate-600"></i> Desktop Applications
  </h3>
  <p class="mt-0 mb-2 text-base">Build desktop software for <em class="not-implemented">Windows and cross-platform systems</em>.</p>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-1">
    <li><em class="not-implemented">Management software</em></li>
    <li><em class="not-implemented">POS systems</em></li>
    <li><em class="not-implemented">Design tools</em></li>
  </ul>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-mobile-screen-button text-slate-600"></i> Mobile Applications
  </h3>
  <p class="mt-0 mb-2 text-base">Using <span class="text-green-600 font-semibold">.NET MAUI</span>, developers can create:</p>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-1">
    <li><em class="not-implemented">Android apps</em></li>
    <li><em class="not-implemented">iPhone apps</em></li>
    <li><em class="not-implemented">Tablet applications</em></li>
  </ul>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-cloud text-slate-600"></i> Cloud Applications
  </h3>
  <p class="mt-0 mb-2 text-base">.NET works perfectly with cloud platforms like:</p>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-1">
    <li><em class="not-implemented">Microsoft Azure</em></li>
    <li><em class="not-implemented">AWS</em></li>
    <li><em class="not-implemented">Google Cloud</em></li>
  </ul>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Popular Technologies -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-bolt text-yellow-500"></i> Popular Technologies in the .NET Ecosystem
  </h2>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-globe text-slate-600"></i> ASP.NET Core
  </h3>
  <p class="mt-0 mb-2 text-base"><span class="text-red-600 font-semibold">ASP.NET Core</span> is used for web development. You can build:</p>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-1">
    <li><em class="not-implemented">Websites</em></li>
    <li><em class="not-implemented">APIs</em></li>
    <li><em class="not-implemented">Backend services</em></li>
  </ul>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-database text-slate-600"></i> Entity Framework Core
  </h3>
  <p class="mt-0 mb-4 text-base">
    <span class="text-orange-500 font-semibold">Entity Framework Core</span> <em class="not-implemented">simplifies database operations</em>. Instead of writing SQL all the time, developers can work directly with <em class="not-implemented">C# objects</em>.
  </p>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-gear text-slate-600"></i> Blazor
  </h3>
  <p class="mt-0 mb-4 text-base">
    <span class="text-green-600 font-semibold">Blazor</span> allows developers to create <em class="not-implemented">interactive web UI using C#</em>. This means developers can build frontend applications <em class="not-implemented">without JavaScript</em>.
  </p>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-mobile-button text-slate-600"></i> .NET MAUI
  </h3>
  <p class="mt-0 mb-2 text-base"><span class="text-slate-500 font-semibold">MAUI</span> is used for <em class="not-implemented">cross-platform mobile and desktop applications</em>.</p>
  <ul class="pl-8 mt-0 mb-4 list-disc space-y-1">
    <li><em class="not-implemented">One codebase → multiple platforms</em></li>
  </ul>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Real World Examples -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-building text-slate-700"></i> Real World Examples
  </h2>
  <p class="mt-0 mb-2 text-base">Companies use .NET to build:</p>
  <ul class="pl-5 mt-0 mb-4 list-none space-y-2">
    <li class="flex items-center gap-2"><i class="fa-solid fa-cart-shopping text-slate-500 w-5"></i> <em class="not-implemented">E-commerce platforms</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-hospital text-slate-500 w-5"></i> <em class="not-implemented">Hospital management systems</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-building-columns text-slate-500 w-5"></i> <em class="not-implemented">Banking software</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-cloud text-slate-500 w-5"></i> <em class="not-implemented">Cloud APIs</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-box text-slate-500 w-5"></i> <em class="not-implemented">ERP systems</em></li>
    <li class="flex items-center gap-2"><i class="fa-solid fa-chart-simple text-slate-500 w-5"></i> <em class="not-implemented">Dashboard applications</em></li>
  </ul>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

  <!-- Section: Why Developers Love .NET -->
  <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
    <i class="fa-solid fa-heart text-red-500"></i> Why Developers Love .NET
  </h2>
  
  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-gauge-high text-slate-600"></i> Fast Performance
  </h3>
  <p class="mt-0 mb-4 text-base">.NET is <em class="not-implemented">highly optimized and extremely fast</em>.</p>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-layer-group text-slate-600"></i> Cross-platform
  </h3>
  <p class="mt-0 mb-4 text-base">Run applications on <strong class="font-semibold">Windows, Linux, and macOS</strong>.</p>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-screwdriver-wrench text-slate-600"></i> Powerful Tooling
  </h3>
  <p class="mt-0 mb-4 text-base"><em class="not-implemented">Visual Studio</em> and the .NET ecosystem provide amazing developer tools.</p>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-up-right-and-down-left-from-center text-slate-600"></i> Scalable
  </h3>
  <p class="mt-0 mb-4 text-base">.NET can power everything from <em class="not-implemented">small projects</em> to <em class="not-implemented">large cloud systems</em>.</p>

  <h3 class="mt-6 mb-4 font-semibold text-xl flex items-center gap-2">
    <i class="fa-solid fa-shield-halved text-slate-600"></i> Secure
  </h3>
  <p class="mt-0 mb-4 text-base">Microsoft <em class="not-implemented">continuously improves</em> .NET security and performance.</p>

  <hr class="h-1 p-0 my-6 bg-slate-200 border-0">
  <!-- Section: Flow & Code Example -->
  <section class="grid gap-4 lg:grid-cols-1">
    <!-- Architecture Flow (Terminal Style) -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2"> Simple .NET Flow</h3>
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
      <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2"> Example .NET Code</h3>
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
  <h2 style="padding-bottom: .3em; font-size: 1.5em; border-b: 1px solid #d0d7de; font-weight: 600; margin-top: 24px; margin-bottom: 16px; border-bottom: 1px solid #eaecef;"> Final Summary</h2>
  <p style="margin-top: 0; margin-bottom: 16px; font-size: 16px;">
    <span class="font-bold text-green-700" >.NET</span> is a powerful ecosystem for building modern applications. It helps developers create <em>web apps, APIs, mobile apps, desktop software, and cloud systems</em> using:
  </p>
  <p style="margin-top: 0; margin-bottom: 16px; font-size: 16px;">
    <strong><em>C# + ASP.NET Core + Databases + Cloud Technologies</em></strong>
  </p>

  <hr style="height: 0.25em; padding: 0; margin: 24px 0; background-color: #d0d7de; border: 0;">

  <!-- Section: Next Steps -->
  <h2 style="padding-bottom: .3em; font-size: 1.5em; border-b: 1px solid #d0d7de; font-weight: 600; margin-top: 24px; margin-bottom: 16px; border-bottom: 1px solid #eaecef;"> Next Step</h2>
  <p style="margin-top: 0; margin-bottom: 8px; font-size: 16px;">After understanding .NET basics, developers usually learn:</p>
  <ol style="padding-left: 2em; margin-top: 0; margin-bottom: 16px; list-style-type: decimal;">
    <li style="margin-top: 0.25em;"><em>C#</em></li>
    <li style="margin-top: 0.25em;"><em>ASP.NET Core</em></li>
    <li style="margin-top: 0.25em;"><em>Web API</em></li>
    <li style="margin-top: 0.25em;"><em>Entity Framework Core</em></li>
    <li style="margin-top: 0.25em;"><em>Authentication</em></li>
    <li style="margin-top: 0.25em;"><em>SQL Server</em></li>
    <li style="margin-top: 0.25em;"><em>Deployment</em></li>
  </ol>

</div>

  <!-- Section: Popular Technologies -->
  <section class="space-y-8">
    <h2 class="flex items-center gap-3 text-3xl font-extrabold tracking-tight text-slate-900">
      <span class="h-8 w-1.5 rounded-full bg-blue-500"></span>
       Popular Technologies in the <span class="text-blue-500">.NET</span> Ecosystem
    </h2>

    <div class="grid gap-6 md:grid-cols-2">
      <div class="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:ring-blue-100">
        <div class="mb-4"><span class="inline-flex items-center rounded-md bg-red-50 px-2.5 py-1 text-sm font-semibold text-red-700 ring-1 ring-inset ring-red-600/10"> ASP.NET Core</span></div>
        <p class="leading-relaxed text-slate-600">The primary framework used for high-performance web development, robust APIs, and scalable backend services.</p>
      </div>

      <div class="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:ring-blue-100">
        <div class="mb-4"><span class="inline-flex items-center rounded-md bg-orange-50 px-2.5 py-1 text-sm font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/10"> Entity Framework Core</span></div>
        <p class="leading-relaxed text-slate-600">Simplifies complex database operations. Instead of writing heavy raw SQL queries, developers work effortlessly with C# objects.</p>
      </div>

      <div class="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:ring-blue-100">
        <div class="mb-4"><span class="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/10"> Blazor</span></div>
        <p class="leading-relaxed text-slate-600">Allows developers to create completely interactive full-stack web UI using C#. Build frontend applications without touching JavaScript.</p>
      </div>

      <div class="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:ring-blue-100">
        <div class="mb-4"><span class="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-500/10">.NET MAUI</span></div>
        <p class="leading-relaxed text-slate-600">The next-gen toolkit used for native cross-platform mobile and desktop applications. One shared codebase targets multiple platforms instantly.</p>
      </div>
    </div>
  </section>



  <!-- Section: Next Steps Roadmap -->
  <section class="rounded-3xl bg-gradient-to-br from-purple-700 to-slate-900 p-8 text-white shadow-xl sm:p-10 md:p-12 mt-12">
    <div class="max-w-3xl space-y-6">
      <h2 class="text-3xl font-extrabold tracking-tight">Your Next Steps Roadmap</h2>
      <p class="text-blue-100 text-lg">After understanding the high-level architecture of .NET, here is the chronological learning path highly recommended for developers:</p>
      
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 font-medium text-sm text-center">
        <div class="bg-white/10 p-3 rounded-xl ring-1 ring-white/20 backdrop-blur-sm">1. C# Core</div>
        <div class="bg-white/10 p-3 rounded-xl ring-1 ring-white/20 backdrop-blur-sm">2. ASP.NET Core</div>
        <div class="bg-white/10 p-3 rounded-xl ring-1 ring-white/20 backdrop-blur-sm">3. Web API</div>
        <div class="bg-white/10 p-3 rounded-xl ring-1 ring-white/20 backdrop-blur-sm">4. EF Core</div>
        <div class="bg-white/10 p-3 rounded-xl ring-1 ring-white/20 backdrop-blur-sm">5. Auth & Identity</div>
        <div class="bg-white/10 p-3 rounded-xl ring-1 ring-white/20 backdrop-blur-sm">6. SQL Server</div>
        <div class="bg-white/10 p-3 rounded-xl col-span-2 sm:col-span-1 md:col-span-2 ring-1 ring-white/20 backdrop-blur-sm">7. CI/CD & Deployment</div>
      </div>
    </div>
  </section>

</div>

`,
    },

    {
        id: 2,
        title: 'What is C#?',
        slug: 'what-is-csharp',
        category: 'C# Basics',
        content: `
<div class="github-readme font-sans text-slate-800 max-w-3xl mx-auto leading-relaxed p-5">

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
  <div class="grid grid-cols-2 gap-2 max-w-md my-4">
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
<div class="github-readme font-sans text-slate-800 max-w-3xl mx-auto leading-relaxed p-5">

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
        title: 'Making CodeWithDotNet Documentation',
        slug: 'making-codewithdotnet-documentation',
        category: 'Project Journey',
        content: `
<div class="github-readme font-sans text-slate-800 max-w-3xl mx-auto leading-relaxed p-5">

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
  <div class="github-readme font-sans text-slate-800 max-w-3xl mx-auto leading-relaxed p-5">

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