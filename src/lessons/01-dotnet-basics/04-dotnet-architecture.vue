<template>
    <!-- Global Container -->
    <div class="max-w-5xl mx-auto p-5 font-sans text-slate-800">

        <!-- Section Header -->
        <header class="border-b border-slate-200 pb-4 mb-6 flex items-center gap-3">
            <i class="fa-solid fa-sitemap text-blue-600 text-2xl"></i>
            <h1 class="text-3xl font-bold text-slate-900">.NET Architecture & Execution Flow</h1>
        </header>

        <!-- Summary Highlight (Objective) -->
        <div
            class="relative overflow-hidden bg-gradient-to-br from-cyan-50 to-slate-100 rounded-xl p-6 mb-8 border border-cyan-100 shadow-sm">
            <i class="fa-brands fa-hubspot absolute -right-4 -bottom-4 text-9xl text-cyan-500 opacity-10"></i>
            <div class="relative z-10">
                <span
                    class="inline-block px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded-full mb-3 tracking-wider uppercase">Lesson
                    Objective</span>
                <p class="text-lg text-slate-700 font-medium">
                    এই lesson শেষে student .NET এর সম্পূর্ণ ইকোসিস্টেম বুঝতে পারবে। একটি C# কোড লেখার পর রান করলে
                    কম্পিউটারের ভেতরে ঠিক কী কী ঘটে, তা একটি পরিষ্কার diagram-এর মাধ্যমে আয়ত্ত করতে পারবে।
                </p>
            </div>
        </div>

        <!-- The Visual Diagram Section (Flowchart) -->
        <section class="mb-10">
            <h2 class="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-project-diagram text-indigo-500"></i> Code to Machine: The Journey
            </h2>

            <div class="bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-inner overflow-x-auto">
                <div class="flex flex-col md:flex-row items-center justify-between min-w-[700px] gap-4">

                    <!-- Step 1: Source Code -->
                    <div class="flex flex-col items-center w-40">
                        <div
                            class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl shadow-sm border border-blue-200 mb-3">
                            <i class="fa-solid fa-file-code"></i>
                        </div>
                        <h4 class="font-bold text-slate-800 text-center">1. Source Code</h4>
                        <p class="text-xs text-slate-500 text-center mt-1">C#, F# or VB.NET</p>
                    </div>

                    <!-- Arrow -->
                    <div class="text-slate-300 flex-1 flex justify-center">
                        <i class="fa-solid fa-arrow-right-long text-2xl hidden md:block"></i>
                        <i class="fa-solid fa-arrow-down-long text-2xl md:hidden"></i>
                    </div>

                    <!-- Step 2: Compiler -->
                    <div class="flex flex-col items-center w-40">
                        <div
                            class="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl shadow-sm border border-amber-200 mb-3">
                            <i class="fa-solid fa-gears"></i>
                        </div>
                        <h4 class="font-bold text-slate-800 text-center">2. Compiler</h4>
                        <p class="text-xs text-slate-500 text-center mt-1">Roslyn translates code</p>
                    </div>

                    <!-- Arrow -->
                    <div class="text-slate-300 flex-1 flex justify-center">
                        <i class="fa-solid fa-arrow-right-long text-2xl hidden md:block"></i>
                        <i class="fa-solid fa-arrow-down-long text-2xl md:hidden"></i>
                    </div>

                    <!-- Step 3: IL Code -->
                    <div class="flex flex-col items-center w-40">
                        <div
                            class="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl shadow-sm border border-purple-200 mb-3">
                            <i class="fa-solid fa-file-export"></i>
                        </div>
                        <h4 class="font-bold text-slate-800 text-center">3. IL Code (.dll)</h4>
                        <p class="text-xs text-slate-500 text-center mt-1">Intermediate Language</p>
                    </div>

                    <!-- Arrow -->
                    <div class="text-slate-300 flex-1 flex justify-center">
                        <i class="fa-solid fa-arrow-right-long text-2xl hidden md:block"></i>
                        <i class="fa-solid fa-arrow-down-long text-2xl md:hidden"></i>
                    </div>

                    <!-- Step 4: CLR & JIT -->
                    <div class="flex flex-col items-center w-40">
                        <div
                            class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl shadow-sm border border-emerald-200 mb-3">
                            <i class="fa-solid fa-microchip"></i>
                        </div>
                        <h4 class="font-bold text-slate-800 text-center">4. CLR (JIT)</h4>
                        <p class="text-xs text-slate-500 text-center mt-1">Heart of .NET Engine</p>
                    </div>

                    <!-- Arrow -->
                    <div class="text-slate-300 flex-1 flex justify-center">
                        <i class="fa-solid fa-arrow-right-long text-2xl hidden md:block"></i>
                        <i class="fa-solid fa-arrow-down-long text-2xl md:hidden"></i>
                    </div>

                    <!-- Step 5: Machine Code -->
                    <div class="flex flex-col items-center w-40">
                        <div
                            class="w-16 h-16 bg-slate-800 text-green-400 rounded-full flex items-center justify-center text-2xl shadow-sm border border-slate-700 mb-3">
                            <i class="fa-solid fa-terminal"></i>
                        </div>
                        <h4 class="font-bold text-slate-800 text-center">5. Machine Code</h4>
                        <p class="text-xs text-slate-500 text-center mt-1">OS executes 0s & 1s</p>
                    </div>

                </div>
            </div>
        </section>

        <!-- Feature Block (Concept Explanation) -->
        <section class="bg-slate-50/50 rounded-xl p-6 mb-8 border border-slate-200">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-book-open text-indigo-500"></i> Diagram Explanation (সহজ ভাষায়)
            </h2>
            <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg border border-slate-100 shadow-sm flex gap-4">
                    <div class="mt-1 text-blue-500"><i class="fa-solid fa-1 text-xl"></i></div>
                    <div>
                        <h4 class="font-bold text-slate-800">Source Code (C#)</h4>
                        <p class="text-sm text-slate-600 mt-1">এটি হলো সেই কোড যা আমরা মানুষরা লিখি (যেমন আগের লেসনে
                            লেখা <code>Console.WriteLine</code>)। কম্পিউটার সরাসরি এই ইংরেজি ভাষার মতো কোড বোঝে না।</p>
                    </div>
                </div>

                <div class="bg-white p-4 rounded-lg border border-slate-100 shadow-sm flex gap-4">
                    <div class="mt-1 text-amber-500"><i class="fa-solid fa-2 text-xl"></i></div>
                    <div>
                        <h4 class="font-bold text-slate-800">Compiler</h4>
                        <p class="text-sm text-slate-600 mt-1">C# কোড লেখার পর যখন আমরা <code>dotnet run</code> কমান্ড
                            দেই, তখন C# এর নিজস্ব কম্পাইলার (যাকে Roslyn বলা হয়) কোডটিকে চেক করে এবং অনুবাদ করা শুরু
                            করে।</p>
                    </div>
                </div>

                <div class="bg-white p-4 rounded-lg border border-slate-100 shadow-sm flex gap-4">
                    <div class="mt-1 text-purple-500"><i class="fa-solid fa-3 text-xl"></i></div>
                    <div>
                        <h4 class="font-bold text-slate-800">IL (Intermediate Language)</h4>
                        <p class="text-sm text-slate-600 mt-1">কম্পাইলার কোডটিকে সরাসরি মেশিন কোডে রূপান্তর করে না। এর
                            বদলে সে একটি মাঝামাঝি ভাষায় কোডটিকে পরিণত করে, যাকে IL বলে। এটি সাধারণত <code>.dll</code> বা
                            <code>.exe</code> ফাইল হিসেবে সেভ হয়। এটি .NET এর নিজস্ব ভাষা।
                        </p>
                    </div>
                </div>

                <div class="bg-white p-4 rounded-lg border border-slate-100 shadow-sm flex gap-4">
                    <div class="mt-1 text-emerald-500"><i class="fa-solid fa-4 text-xl"></i></div>
                    <div>
                        <h4 class="font-bold text-slate-800">CLR (Common Language Runtime)</h4>
                        <p class="text-sm text-slate-600 mt-1">এটি .NET এর ইঞ্জিন! CLR এর ভেতরে <strong>JIT
                                (Just-In-Time)</strong> নামের একটি বিশেষ কম্পাইলার থাকে। যখন প্রোগ্রামটি রান হয়, JIT ওই
                            IL কোডটিকে পড়ে এবং একদম শেষ মুহূর্তে মেশিন কোডে রূপান্তর করে।</p>
                    </div>
                </div>

                <div class="bg-white p-4 rounded-lg border border-slate-100 shadow-sm flex gap-4">
                    <div class="mt-1 text-slate-700"><i class="fa-solid fa-5 text-xl"></i></div>
                    <div>
                        <h4 class="font-bold text-slate-800">Machine Code</h4>
                        <p class="text-sm text-slate-600 mt-1">অবশেষে তৈরি হয় ০ আর ১ (0s & 1s) এর ভাষা, যা তোমার
                            উইন্ডোজ, ম্যাক বা লিনাক্স অপারেটিং সিস্টেম বুঝতে পারে এবং স্ক্রিনে আউটপুট দেখায়।</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Interactive Grid (Common Mistakes & Practice) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <!-- Core Component Highlight Card -->
            <div class="bg-[#1e1e1e] p-6 rounded-xl border border-slate-700 shadow-sm">
                <h3 class="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-toolbox"></i> BCL (Base Class Library)
                </h3>
                <p class="text-slate-300 text-sm">ডায়গ্রামের বাইরেও .NET এ বিশাল একটি লাইব্রেরি থাকে যাকে BCL বলে। ফাইল
                    পড়া, ডেটাবেসে কানেক্ট করা বা ইন্টারনেটে রিকোয়েস্ট পাঠানোর মতো রেডিমেড কোড এখানে আগে থেকেই লেখা থাকে,
                    যাতে আমাদের শূন্য থেকে শুরু করতে না হয়।</p>
            </div>

            <!-- Practice Card -->
            <div
                class="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 class="text-blue-600 font-bold mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-brain"></i> Memory Check
                </h3>
                <p class="text-slate-600 text-sm">নিজেকে প্রশ্ন করো: <strong>C# কোড কি সরাসরি কম্পিউটার
                        বোঝে?</strong><br>উত্তর হলো: না। প্রথমে এটি IL কোডে পরিণত হয়, এরপর CLR (JIT) এটিকে মেশিন কোডে
                    রূপান্তর করে। এই ফ্লো-টি মনে রাখা একজন ভালো ডেভেলপারের লক্ষণ!</p>
            </div>

        </div>

        <!-- Next Lesson Footer -->
        <footer class="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
            <div>
                <p class="text-slate-500 text-sm uppercase tracking-wider font-bold">Summary</p>
                <p class="text-slate-700 font-medium">C# &rarr; Compiler &rarr; IL Code &rarr; CLR (JIT) &rarr; Machine
                    Code</p>
            </div>
            <routerLink to="/lessons/folder-structure"
                class="bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                Next: Structure of .NET <i class="fa-solid fa-arrow-right"></i>
            </routerLink>
        </footer>

    </div>
</template>