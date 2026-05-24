<template>
    <!-- Main Outer Wrapper: Full Width & Height -->
    <div class="flex h-screen overflow-hidden bg-slate-900 text-slate-100 font-sans antialiased">

        <!-- RIGHT PANEL: CONTENT VIEW AREA (PIVOTED TO DIV) -->
        <div class="flex-1 overflow-y-auto flex flex-col">



            <!-- Main Dynamic/Hardcoded Content Container -->
            <div class="max-w-4xl w-full mx-auto p-8 flex-1">
                <div>

                    <!-- Title block -->
                    <div class="border-b border-slate-800 pb-6 mb-6">
                        <div class="flex items-center gap-3 mb-2">
                            <span
                                class="text-xs font-mono px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-md">LESSON
                                01</span>
                            <span
                                class="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-md font-medium">Phase
                                1: Setup and basic output</span>
                        </div>
                        <h2 class="text-3xl font-extrabold text-white tracking-tight">Welcome to Dotnet Code Journey
                        </h2>
                    </div>

                    <!-- Goal Card -->
                    <div
                        class="bg-gradient-to-br from-slate-800/40 to-slate-900 border border-slate-800 rounded-xl p-5 mb-6 relative overflow-hidden shadow-sm">
                        <div class="absolute right-0 top-0 p-6 text-slate-800 pointer-events-none opacity-25">
                            <i class="fa-solid fa-bullseye text-7xl"></i>
                        </div>
                        <div class="relative z-10">
                            <span
                                class="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Goal
                                / Objective</span>
                            <p class="text-base text-slate-200 mt-2 font-medium">Beginner থেকে step-by-step C# এবং .NET
                                development শেখানো।</p>
                        </div>
                    </div>

                    <!-- Curriculum Split Panel -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                        <!-- Left Grid Panel -->
                        <div class="bg-slate-950/40 border border-slate-800/80 rounded-xl p-5 min-h-[220px]">
                            <h3
                                class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800/60 flex items-center gap-2">
                                <i class="fa-solid fa-list-ul text-blue-500"></i> Core Curriculum Topics
                            </h3>
                            <ul class="space-y-2.5">
                                <li class="flex items-start gap-3 text-slate-300 text-sm">
                                    <i class="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                    <span>.NET কী</span>
                                </li>
                                <li class="flex items-start gap-3 text-slate-300 text-sm">
                                    <i class="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                    <span>C# কী</span>
                                </li>
                                <li class="flex items-start gap-3 text-slate-300 text-sm">
                                    <i class="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                    <span>.NET দিয়ে কী কী বানানো যায়</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Right Grid Panel -->
                        <div class="bg-slate-950/40 border border-slate-800/80 rounded-xl p-5 min-h-[220px]">
                            <h3
                                class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800/60 flex items-center gap-2">
                                <i class="fa-solid fa-circle-info text-indigo-400"></i> Explanation & Context
                            </h3>
                            <div class="text-slate-300 text-sm leading-relaxed space-y-2">
                                <p>.NET হলো একটি open-source এবং cross-platform developer platform যা দিয়ে বিভিন্ন ধরণের
                                    application তৈরি করা যায়।</p>
                                <p>C# হলো একটি modern, object-oriented programming language যা .NET framework-এ প্রধান
                                    ভাষা হিসেবে ব্যবহৃত হয়।</p>
                            </div>
                        </div>

                    </div>

                    <!-- Code / Command Terminals -->
                    <div class="mt-6">
                        <h4
                            class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <i class="fa-solid fa-terminal text-emerald-500"></i> Execution Commands
                        </h4>
                        <div
                            class="bg-slate-950 rounded-lg p-4 font-mono text-xs border border-slate-800 shadow-inner overflow-x-auto">
                            <p class="mb-1"><span class="text-pink-500 font-bold">$</span> <span
                                    class="text-emerald-400">dotnet --version</span></p>
                            <p class="mb-1"><span class="text-pink-500 font-bold">$</span> <span
                                    class="text-emerald-400">dotnet new console</span></p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h4
                            class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <i class="fa-solid fa-code text-indigo-400"></i> Syntax / Code Example
                        </h4>
                        <pre
                            class="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-blue-300 border border-slate-800 shadow-md overflow-x-auto"><code>using System;

class Program {
    static void Main() {
        Console.WriteLine("Welcome to Dotnet Code Journey!");
    }
}</code></pre>
                    </div>

                    <!-- Target Outcome Footer -->
                    <div
                        class="mt-8 bg-gradient-to-r from-emerald-950/30 to-slate-900 border-l-4 border-emerald-500 rounded-r-xl p-5 shadow-sm">
                        <h4
                            class="font-bold text-emerald-400 text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <i class="fa-solid fa-graduation-cap"></i> Learner Target Outcome
                        </h4>
                        <p class="text-slate-300 text-sm leading-relaxed">Student বুঝবে .NET শেখার roadmap কেমন হবে এবং
                            Course শেষে কী বানাতে পারবে সেটা clear হবে।</p>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>