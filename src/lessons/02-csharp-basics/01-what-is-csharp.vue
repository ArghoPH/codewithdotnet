<template>
    <div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-5">
        <!-- Section: Introduction -->
        <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-terminal text-blue-600"></i> Introduction
        </h2>
        <p class="mt-0 mb-4 text-base">
            <span class="text-blue-600 font-semibold">C#</span> (pronounced C Sharp) is a modern, object-oriented
            programming language developed by Microsoft.
        </p>
        <p class="mt-0 mb-4 text-base">
            It serves as the <strong class="font-semibold italic">primary language</strong> used within the powerful
            .NET ecosystem.
        </p>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Section: What C# is Used For -->
        <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-layer-group text-indigo-500"></i> What C# is Used For
        </h2>
        <p class="mt-0 mb-2 text-base">With C#, developers can write core business logic, create structured classes and
            objects, handle data efficiently, and build complete software systems. It is widely applied in:</p>
        <ul class="pl-5 mt-0 mb-4 list-none space-y-2">
            <li class="flex items-center gap-2"><i class="fa-solid fa-server text-slate-500 w-5"></i> <em
                    class="not-implemented">Backend development</em></li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-globe text-slate-500 w-5"></i> <em
                    class="not-implemented">Web applications</em></li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-code text-slate-500 w-5"></i> <em
                    class="not-implemented">APIs and microservices</em></li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-desktop text-slate-500 w-5"></i> <em
                    class="not-implemented">Desktop software</em></li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-mobile-screen text-slate-500 w-5"></i> <em
                    class="not-implemented">Mobile applications</em></li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-gamepad text-slate-500 w-5"></i> <em
                    class="not-implemented">Game development with Unity</em></li>
        </ul>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Section: Why C# is Powerful -->
        <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-bolt text-yellow-500"></i> Why C# is Powerful
        </h2>
        <p class="mt-0 mb-2 text-base">C# is frequently recognized as one of the finest languages for mastering
            professional enterprise software development because it is:</p>
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
        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Hello World"</span>);</code></pre>

        <p class="mt-2 mb-1 text-sm"><strong class="font-semibold text-slate-500">Output:</strong></p>
        <pre
            class="p-3 overflow-x-auto text-sm leading-normal bg-[#252526] border border-[#2d2d2d] rounded-md font-mono text-[#b5cea8]"><code>Hello World</code></pre>

        <h3 class="mt-6 mb-2 font-semibold text-lg text-slate-800">2. Variables Example</h3>
        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#569cd6] font-semibold">string</span> name = <span class="text-[#ce9178]">"Argho"</span>;
        <span class="text-[#569cd6] font-semibold">int</span> age = <span class="text-[#b5cea8]">22</span>;

        <span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(name);
        <span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(age);</code>
        </pre>

        <h3 class="mt-6 mb-2 font-semibold text-lg text-slate-800">3. Conditional Statements</h3>
        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#c586c0] font-semibold">if</span> (age &gt;= <span class="text-[#b5cea8]">18</span>)
{
    <span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Adult"</span>);
}</code></pre>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Section: Important Concepts -->
        <h2 class="pb-1 text-2xl font-semibold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-brain text-purple-600"></i> Important Concepts in C#
        </h2>
        <p class="mt-0 mb-2 text-base">To build intermediate and advanced systems, every developer needs to master these
            core pillars:</p>
        <div class="grid grid-cols-2 gap-2 max-w my-4">
            <div class="flex items-center gap-2 text-base"><i
                    class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Variables</span></div>
            <div class="flex items-center gap-2 text-base"><i
                    class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Objects</span></div>
            <div class="flex items-center gap-2 text-base"><i
                    class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Functions</span></div>
            <div class="flex items-center gap-2 text-base"><i
                    class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>OOP (Object-Oriented
                    Programming)</span></div>
            <div class="flex items-center gap-2 text-base"><i
                    class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Loops</span></div>
            <div class="flex items-center gap-2 text-base"><i
                    class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>LINQ (Language Integrated
                    Query)</span></div>
            <div class="flex items-center gap-2 text-base"><i
                    class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Classes</span></div>
            <div class="flex items-center gap-2 text-base"><i
                    class="fa-solid fa-circle-check text-green-600 text-xs"></i> <span>Async / Await
                    (Asynchronous)</span></div>
        </div>

    </div>


    <div class="github-readme font-sans text-slate-800 max-w-5xl mx-auto leading-relaxed p-5">



        <!-- Main Section: The C# Code Execution Journey -->
        <h2 class="pb-2 text-2xl font-bold mt-6 mb-4 border-b border-slate-200 flex items-center gap-2 text-slate-900">
            <i class="fa-solid fa-gears text-blue-600"></i> The Inner Workings: How C# Code Runs
        </h2>
        <p class="mt-0 mb-4 text-base text-slate-600">
            When a developer writes a line of C# code like <code>Console.WriteLine("Hello");</code>, the computer's CPU
            cannot understand or execute it directly. Computers only speak in binary (0s and 1s). To bridge this gap,
            the .NET ecosystem utilizes a powerful multi-stage compilation process.
        </p>

        <!-- Flowchart Container -->
        <div class="my-6 p-5 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
                <i class="fa-solid fa-diagram-project"></i> Execution Pipeline Flowchart
            </h4>
            <div class="flex flex-col items-center gap-2 font-mono text-sm font-semibold">
                <div
                    class="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-md shadow-sm w-64 text-center">
                    Step 1: C# Source Code</div>
                <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
                <div
                    class="px-4 py-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-md shadow-sm w-64 text-center">
                    Step 2: C# Compiler (Roslyn)</div>
                <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
                <div
                    class="px-4 py-2 bg-amber-50 border border-amber-200 text-amber-700 rounded-md shadow-sm w-64 text-center">
                    Step 3: Intermediate Language (IL)</div>
                <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
                <div
                    class="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-md shadow-sm w-64 text-center">
                    Step 4: CLR & JIT Compiler</div>
                <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
                <div
                    class="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-md shadow-sm w-64 text-center">
                    Step 5: Native Machine Code</div>
                <div class="text-slate-400 text-lg"><i class="fa-solid fa-arrow-down"></i></div>
                <div
                    class="px-4 py-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-md shadow-sm w-64 text-center">
                    Step 6: Live Output</div>
            </div>
        </div>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Step 1 Elaborated -->
        <h3 class="mt-6 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
            <span
                class="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-mono font-bold">1</span>
            Source Code Layer
        </h3>
        <p class="mt-0 mb-3 text-base text-slate-600">
            The journey begins here. Source code is the human-readable text written by programmers using syntax rules
            defined by the C# language. It is saved in files with a <code>.cs</code> extension. It contains the business
            logic, variables, loops, and structure that define what the application should do.
        </p>
        <p class="mt-0 mb-2 font-semibold text-sm text-slate-500">Example Source Code:</p>
        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#4ec9b0] font-semibold">Console</span>.<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Hello"</span>);</code></pre>

        <!-- Step 2 Elaborated -->
        <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
            <span
                class="flex items-center justify-center w-7 h-7 rounded-full bg-purple-600 text-white text-sm font-mono font-bold">2</span>
            The Compiler (Roslyn)
        </h3>
        <p class="mt-0 mb-3 text-base text-slate-600">
            When you hit the <strong>Build</strong> or <strong>Run</strong> button, the C# Compiler (known as
            <strong>Roslyn</strong>) takes over. The compiler performs structural diagnostics, syntax checking, and
            type-safety verification. If there are syntax errors (like a missing semicolon), the compilation stops here
            and throws an error.
        </p>
        <div class="bg-purple-50 border-l-4 border-l-purple-500 p-4 my-4 rounded-r-md text-sm text-purple-900">
            <strong>Key Responsibility:</strong> It acts as a translator, ensuring your code obeys language guidelines
            before converting it from high-level C# into something the platform framework can process.
        </div>

        <!-- Step 3 Elaborated -->
        <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
            <span
                class="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white text-sm font-mono font-bold">3</span>
            Intermediate Language (IL) Code
        </h3>
        <p class="mt-0 mb-3 text-base text-slate-600">
            The compiler does not output machine code directly. Instead, it converts C# into **IL (Intermediate
            Language)** or **MSIL (Microsoft Intermediate Language)**. IL is a lower-level, CPU-independent set of
            instructions. This IL code is packaged inside compiled binaries like <code>.dll</code> or <code>.exe</code>
            files along with **Metadata** (information describing classes, methods, and parameters).
        </p>
        <p class="mt-0 mb-2 font-semibold text-sm text-slate-500">Conceptual IL Representation (Behind the Scenes):</p>
        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#6a9955]">// IL representation of Console.WriteLine</span>
<span class="text-[#569cd6]">IL_0001:</span> ldstr <span class="text-[#ce9178]">"Hello"</span>
<span class="text-[#569cd6]">IL_0006:</span> call <span class="text-[#4ec9b0]">void</span> [<span class="text-[#9cdcfe]">System.Console</span>]::<span class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#4ec9b0]">string</span>)
<span class="text-[#569cd6]">IL_000b:</span> nop</code></pre>

        <!-- Step 4 Elaborated -->
        <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
            <span
                class="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-mono font-bold">4</span>
            Common Language Runtime (CLR)
        </h3>
        <p class="mt-0 mb-3 text-base text-slate-600">
            The **CLR** is essentially the engine and heart of the .NET framework. When an application runs, the CLR
            manages the environment. Inside the CLR, an essential sub-component called the **JIT (Just-In-Time)
            Compiler** takes the IL code and translates it on-the-fly into real native code optimized precisely for the
            local machine's operating system and architecture (x64, ARM, etc.).
        </p>

        <p class="mt-4 mb-2 font-semibold text-slate-700 text-sm">Critical Core Operations Managed by CLR:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
            <div class="p-3 border border-slate-200 rounded-md bg-white shadow-sm flex items-start gap-2.5">
                <i class="fa-solid fa-memory text-indigo-500 mt-1"></i>
                <div>
                    <strong class="block text-slate-900 text-sm font-semibold">Memory Management</strong>
                    <span class="text-xs text-slate-500">Allocates system memory dynamically for objects and executing
                        variables.</span>
                </div>
            </div>
            <div class="p-3 border border-slate-200 rounded-md bg-white shadow-sm flex items-start gap-2.5">
                <i class="fa-solid fa-trash-can text-red-500 mt-1"></i>
                <div>
                    <strong class="block text-slate-900 text-sm font-semibold">Garbage Collection (GC)</strong>
                    <span class="text-xs text-slate-500">Automatically tracking, cleaning, and freeing up unused objects
                        in memory.</span>
                </div>
            </div>
            <div class="p-3 border border-slate-200 rounded-md bg-white shadow-sm flex items-start gap-2.5">
                <i class="fa-solid fa-triangle-exclamation text-amber-500 mt-1"></i>
                <div>
                    <strong class="block text-slate-900 text-sm font-semibold">Exception Handling</strong>
                    <span class="text-xs text-slate-500">Intercepting runtime crashes gracefully using robust try-catch
                        mechanisms.</span>
                </div>
            </div>
            <div class="p-3 border border-slate-200 rounded-md bg-white shadow-sm flex items-start gap-2.5">
                <i class="fa-solid fa-shield-halved text-emerald-500 mt-1"></i>
                <div>
                    <strong class="block text-slate-900 text-sm font-semibold">Security Enforcement</strong>
                    <span class="text-xs text-slate-500">Verifying code type-safety and enforcing application
                        authorization constraints.</span>
                </div>
            </div>
        </div>

        <!-- Step 5 Elaborated -->
        <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
            <span
                class="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-mono font-bold">5</span>
            Native Machine Code
        </h3>
        <p class="mt-0 mb-3 text-base text-slate-600">
            Once the JIT compiler has translated the IL, you get **Machine Code**. These are low-level CPU binary
            instructions that execute directly on hardware silicon. At this level, the language abstracts completely
            into native machine architecture logic.
        </p>
        <p class="mt-0 mb-2 font-semibold text-sm text-slate-500">Conceptual CPU Instruction Level:</p>
        <pre
            class="p-4 overflow-x-auto text-sm leading-normal bg-[#1e1e1e] border border-[#2d2d2d] rounded-md font-mono text-[#d4d4d4] shadow-md"><code><span class="text-[#569cd6]">01001000</span> <span class="text-[#b5cea8]">10001001</span> <span class="text-[#ce9178]">11100101</span> <span class="text-[#6a9955]">// Pure processor execution patterns</span></code></pre>

        <!-- Step 6 Elaborated -->
        <h3 class="mt-8 mb-3 font-semibold text-xl flex items-center gap-2 text-slate-900">
            <span
                class="flex items-center justify-center w-7 h-7 rounded-full bg-rose-600 text-white text-sm font-mono font-bold">6</span>
            Runtime Output
        </h3>
        <p class="mt-0 mb-3 text-base text-slate-600">
            Finally, the operating system executes the compiled machine native stream instructions on behalf of the CPU
            thread, producing the expected visual or systematic application output.
        </p>
        <p class="mt-0 mb-2 font-semibold text-sm text-slate-500">Visual Screen Output:</p>
        <pre
            class="p-3 overflow-x-auto text-sm leading-normal bg-[#252526] border border-[#2d2d2d] rounded-md font-mono text-[#b5cea8] shadow-sm"><code>Hello</code></pre>

        <hr class="h-1 p-0 my-6 bg-slate-200 border-0">

        <!-- Summary Card -->
        <div class="bg-blue-50 border border-blue-100 rounded-lg p-5">
            <h3 class="text-blue-900 font-bold text-lg mb-2 flex items-center gap-2">
                <i class="fa-solid fa-bolt-lightning text-amber-500"></i> Summary Matrix
            </h3>
            <p class="text-sm text-blue-800 mb-4">
                Although this pipeline has multiple distinct layers, the transition happens seamlessly in fractions of a
                millisecond, giving C# applications high flexibility, cross-platform portability, and native performance
                execution speeds.
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
</template>