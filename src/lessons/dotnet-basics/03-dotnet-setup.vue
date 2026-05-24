<template>
    <!-- Global Container -->
    <div class="max-w-5xl mx-auto p-5 font-sans text-slate-800">

        <!-- Section Header -->
        <header class="border-b border-slate-200 pb-4 mb-6 flex items-center gap-3">
            <i class="fa-solid fa-code text-blue-600 text-2xl"></i>
            <h1 class="text-3xl font-bold text-slate-900">02 - Setup Your .NET Development Environment</h1>
        </header>

        <!-- Summary Highlight (Objective) -->
        <div
            class="relative overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl p-6 mb-8 border border-blue-100 shadow-sm">
            <i class="fa-brands fa-microsoft absolute -right-4 -bottom-4 text-9xl text-blue-500 opacity-10"></i>
            <div class="relative z-10">
                <span
                    class="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3 tracking-wider uppercase">Lesson
                    Objective</span>
                <p class="text-lg text-slate-700 font-medium">
                    এই lesson শেষে student নিজের computer-এ সম্পূর্ণ .NET development environment setup করতে পারবে এবং
                    terminal ব্যবহার করে একটি নতুন project create ও run করতে পারবে।
                </p>
            </div>
        </div>

        <!-- Information Callout (Prerequisites) -->
        <div class="bg-amber-50 border-l-4 border-l-amber-500 p-4 mb-8 rounded-r-md">
            <h3 class="font-bold text-amber-800 flex items-center gap-2 mb-1">
                <i class="fa-solid fa-triangle-exclamation"></i> Prerequisites
            </h3>
            <p class="text-amber-700 text-sm">Computer-এর basic operation (file management, software installation) জানা
                থাকা প্রয়োজন।</p>
        </div>

        <!-- Feature Block (Concept Explanation) -->
        <section class="bg-slate-50/50 rounded-xl p-6 mb-8 border border-slate-200">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-book-open text-indigo-500"></i> Concept Explanation
            </h2>
            <ul class="space-y-3">
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-play text-indigo-400 mt-1"></i>
                    <span><strong>.NET SDK:</strong> Software Development Kit. এটি ছাড়া C# code compile বা run করা যায়
                        না।</span>
                </li>
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-play text-indigo-400 mt-1"></i>
                    <span><strong>Editor:</strong> Visual Studio Code বা Visual Studio হলো আমাদের code লেখার
                        খাতা।</span>
                </li>
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-play text-indigo-400 mt-1"></i>
                    <span><strong>Terminal:</strong> মাউস ছাড়া সরাসরি command দিয়ে computer-কে নির্দেশ দেওয়ার
                        জায়গা।</span>
                </li>
            </ul>
        </section>

        <!-- Terminal Block (Commands) -->
        <section class="mb-8">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-terminal text-emerald-500"></i> Essential Commands
            </h2>
            <div class="bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden font-mono text-sm">
                <!-- Mac-style Window Controls -->
                <div class="flex items-center px-4 py-3 bg-[#2d2d2d] gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    <span class="ml-2 text-slate-400 text-xs">cmd / terminal</span>
                </div>
                <div class="p-4 text-emerald-400">
                    <p class="mb-2"><span class="text-pink-500">~</span> <span class="text-blue-400">dotnet</span>
                        --version</p>
                    <p class="mb-2 text-slate-400">/* Check installed version */</p>
                    <p class="mb-2"><span class="text-pink-500">~</span> <span class="text-blue-400">dotnet</span> new
                        console</p>
                    <p class="mb-2 text-slate-400">/* Create a new console project */</p>
                    <p class=""><span class="text-pink-500">~</span> <span class="text-blue-400">dotnet</span> run</p>
                </div>
            </div>
        </section>

        <!-- Interactive Grid (Common Mistakes & Practice) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <!-- Mistakes Card -->
            <div
                class="bg-white p-6 rounded-xl border border-rose-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 class="text-rose-600 font-bold mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-bug"></i> Common Mistakes
                </h3>
                <p class="text-slate-600 text-sm">SDK install করার পর terminal restart না দেওয়া। এর ফলে `dotnet` command
                    not found error আসে।</p>
            </div>

            <!-- Practice Card -->
            <div
                class="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 class="text-blue-600 font-bold mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-keyboard"></i> Practice Task
                </h3>
                <p class="text-slate-600 text-sm">তোমার Desktop-এ "MyFirstApp" নামে একটি folder তৈরি করো এবং terminal
                    দিয়ে সেখানে একটি নতুন .NET project initialize করো।</p>
            </div>

        </div>

        <!-- Next Lesson Footer -->
        <footer class="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
            <div>
                <p class="text-slate-500 text-sm uppercase tracking-wider font-bold">Summary</p>
                <p class="text-slate-700 font-medium">SDK, VS Code & Terminal = Development Environment.</p>
            </div>
            <button
                class="bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                Next: Your First C# Program <i class="fa-solid fa-arrow-right"></i>
            </button>
        </footer>

    </div>
</template>