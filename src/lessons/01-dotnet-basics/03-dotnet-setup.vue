<template>
    <div class="max-w-5xl mx-auto p-5 font-sans text-slate-800">

        <header class="border-b border-slate-200 pb-4 mb-6 flex items-center gap-3">
            <i class="fa-brands fa-accessible-icon text-blue-600 text-2xl"></i>
            <h1 class="text-3xl font-bold text-slate-900">Your First C# Program</h1>
        </header>

        <div
            class="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-slate-100 rounded-xl p-6 mb-8 border border-indigo-100 shadow-sm">
            <i class="fa-solid fa-rocket absolute -right-4 -bottom-4 text-9xl text-indigo-500 opacity-10"></i>
            <div class="relative z-10">
                <span
                    class="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full mb-3 tracking-wider uppercase">Lesson
                    Objective</span>
                <p class="text-lg text-slate-700 font-medium">
                    এই lesson শেষে student একটি C# program এর basic structure বুঝতে পারবে এবং `Console` ব্যবহার করে
                    স্ক্রিনে টেক্সট print করতে পারবে।
                </p>
            </div>
        </div>

        <div class="bg-amber-50 border-l-4 border-l-amber-500 p-4 mb-8 rounded-r-md">
            <h3 class="font-bold text-amber-800 flex items-center gap-2 mb-1">
                <i class="fa-solid fa-triangle-exclamation"></i> Prerequisites
            </h3>
            <p class="text-amber-700 text-sm">Lesson 03 অনুযায়ী .NET Development Environment setup সম্পূর্ণ করা থাকতে
                হবে।</p>
        </div>

        <section class="bg-slate-50/50 rounded-xl p-6 mb-8 border border-slate-200">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-book-open text-indigo-500"></i> Anatomy of a C# Program
            </h2>
            <ul class="space-y-3">
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-play text-indigo-400 mt-1"></i>
                    <span><strong>using System:</strong> এটি C# এর built-in library ইম্পোর্ট করে, যাতে আমরা Console এর
                        মতো ফিচার ব্যবহার করতে পারি।</span>
                </li>
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-play text-indigo-400 mt-1"></i>
                    <span><strong>class Program:</strong> C# একটি Object-Oriented ভাষা। এখানে সবকিছু class এর ভেতরে
                        থাকে।</span>
                </li>
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-play text-indigo-400 mt-1"></i>
                    <span><strong>Main() Method:</strong> এটি প্রোগ্রামের Entry Point. প্রোগ্রাম রান করলে ঠিক এখান থেকেই
                        কাজ শুরু হয়।</span>
                </li>
                <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-play text-indigo-400 mt-1"></i>
                    <span><strong>Console.WriteLine():</strong> এই কমান্ডটি টার্মিনালে কোনো কিছু প্রিন্ট করার জন্য
                        ব্যবহার করা হয়।</span>
                </li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-code text-emerald-500"></i> Program.cs
            </h2>
            <div class="bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden font-mono text-sm">
                <div class="flex items-center px-4 py-3 bg-[#2d2d2d] gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    <span class="ml-2 text-slate-400 text-xs">Program.cs</span>
                </div>
                <div class="p-4">
                    <p class="mb-1"><span class="text-blue-400">using</span> <span
                            class="text-emerald-300">System</span>;</p>
                    <br>
                    <p class="mb-1"><span class="text-blue-400">namespace</span> <span
                            class="text-white">MyFirstApp</span></p>
                    <p class="mb-1 text-white">{</p>
                    <p class="mb-1 ml-4"><span class="text-blue-400">class</span> <span
                            class="text-emerald-300">Program</span></p>
                    <p class="mb-1 ml-4 text-white">{</p>
                    <p class="mb-1 ml-8"><span class="text-blue-400">static void</span> <span
                            class="text-yellow-300">Main</span>(<span class="text-blue-400">string</span>[] args)</p>
                    <p class="mb-1 ml-8 text-white">{</p>
                    <p class="mb-1 ml-12 text-slate-400">/* Print text to the console */</p>
                    <p class="mb-1 ml-12"><span class="text-emerald-300">Console</span>.<span
                            class="text-yellow-300">WriteLine</span>(<span class="text-orange-300">"Hello, .NET
                            World!"</span>);</p>
                    <p class="mb-1 ml-8 text-white">}</p>
                    <p class="mb-1 ml-4 text-white">}</p>
                    <p class="text-white">}</p>
                </div>
            </div>
            <div class="mt-3 text-sm text-slate-500">
                <i class="fa-solid fa-lightbulb text-yellow-500"></i> <strong>Note:</strong> Modern .NET (v6.0+) এ চাইলে
                শুধুমাত্র <code>Console.WriteLine("Hello World!");</code> লিখলেও কাজ করে, একে Top-level statements বলা
                হয়।
            </div>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <div
                class="bg-white p-6 rounded-xl border border-rose-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 class="text-rose-600 font-bold mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-bug"></i> Common Mistakes
                </h3>
                <p class="text-slate-600 text-sm">লাইনের শেষে সেমিকোলন (<code>;</code>) দিতে ভুলে যাওয়া C# এর সবচেয়ে
                    সাধারণ ভুল। C# এ প্রতিটি স্টেটমেন্ট সেমিকোলন দিয়ে শেষ করতে হয়।</p>
            </div>

            <div
                class="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 class="text-blue-600 font-bold mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-keyboard"></i> Practice Task
                </h3>
                <p class="text-slate-600 text-sm"><code>Console.WriteLine()</code> ব্যবহার করে নিজের নাম এবং বয়স দুটি
                    আলাদা লাইনে টার্মিনালে প্রিন্ট করে দেখাও।</p>
            </div>

        </div>

        <footer class="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
            <div>
                <p class="text-slate-500 text-sm uppercase tracking-wider font-bold">Summary</p>
                <p class="text-slate-700 font-medium">Main() is the starting point & WriteLine prints text.</p>
            </div>
            <routerLink to="/lessons/dotnet-architecture"
                class="bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                Next: Architecture of .NET <i class="fa-solid fa-arrow-right"></i>
            </routerLink>
        </footer>

    </div>
</template>