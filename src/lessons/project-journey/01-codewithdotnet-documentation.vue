<template>

    <div class="bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white antialiased">

        <!-- Top Glow Effects -->
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute top-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-5xl mx-auto px-4 py-12 relative z-10">

            <!-- Header Section -->
            <header class="text-center mb-16 border-b border-slate-800 pb-10">
                <div
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-4 uppercase tracking-wider">
                    <i class="fas fa-graduation-cap text-xs"></i> Lesson 02
                </div>
                <h1
                    class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent mb-4 tracking-tight">
                    .NET Code Journey
                </h1>
                <p class="text-lg text-slate-400 max-w-2xl mx-auto font-light">
                    <i class="fas fa-route text-indigo-400 mr-2"></i> C#/.NET basic coding journey শুরু করা
                </p>
            </header>

            <!-- Dashboard: Objective & Tools Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <!-- Objective Card -->
                <div
                    class="md:col-span-2 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition duration-300">
                    <div
                        class="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition duration-300">
                    </div>
                    <div class="flex items-start gap-4">
                        <div
                            class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 text-xl">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-200 mb-2">Lesson Objective</h3>
                            <p class="text-slate-400 leading-relaxed text-sm">
                                এই lesson শেষে learner বুঝবে কীভাবে .NET project তৈরি ও run করতে হয়, basic C# syntax
                                লিখতে হয়, এবং console output/input ব্যবহার করতে হয়।
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Required Tools Card -->
                <div
                    class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition duration-300">
                    <div
                        class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition duration-300">
                    </div>
                    <div class="flex items-start gap-4">
                        <div
                            class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 text-xl">
                            <i class="fas fa-tools"></i>
                        </div>
                        <div class="w-full">
                            <h3 class="text-lg font-bold text-slate-200 mb-2">Required Tools</h3>
                            <ul class="space-y-1.5 text-sm text-slate-400">
                                <li class="flex items-center gap-2"><i
                                        class="fab fa-microsoft text-blue-400 text-xs w-4"></i> VS Code / Visual Studio
                                </li>
                                <li class="flex items-center gap-2"><i
                                        class="fas fa-cubes text-purple-400 text-xs w-4"></i> .NET SDK</li>
                                <li class="flex items-center gap-2"><i
                                        class="fas fa-terminal text-emerald-400 text-xs w-4"></i> Terminal / CMD</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- What students will learn Card -->
            <div
                class="bg-gradient-to-r from-slate-900 via-indigo-950/20 to-slate-900 border border-indigo-500/20 p-6 rounded-2xl mb-16">
                <h3 class="text-lg font-bold text-indigo-300 mb-4 flex items-center gap-2">
                    <i class="fas fa-star text-amber-400 animate-pulse"></i> এই লেসন থেকে আমরা কী কী শিখবো?
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    <div
                        class="flex items-center gap-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 text-slate-300">
                        <i class="fas fa-check-circle text-indigo-400"></i> .NET project structure
                    </div>
                    <div
                        class="flex items-center gap-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 text-slate-300">
                        <i class="fas fa-check-circle text-indigo-400"></i> Program.cs file এর কাজ
                    </div>
                    <div
                        class="flex items-center gap-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 text-slate-300">
                        <i class="fas fa-check-circle text-indigo-400"></i> Console.WriteLine() ব্যবহার
                    </div>
                    <div
                        class="flex items-center gap-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 text-slate-300">
                        <i class="fas fa-check-circle text-indigo-400"></i> Variable declare করা
                    </div>
                    <div
                        class="flex items-center gap-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 text-slate-300">
                        <i class="fas fa-check-circle text-indigo-400"></i> Basic data types
                    </div>
                    <div
                        class="flex items-center gap-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 text-slate-300">
                        <i class="fas fa-check-circle text-indigo-400"></i> User input নেওয়া
                    </div>
                </div>
            </div>

            <!-- Course Contents Sections -->
            <div class="space-y-12">

                <!-- Section 1 -->
                <section
                    class="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold shadow-lg shadow-indigo-500/20">
                        1</div>
                    <h2 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        Introduction <i class="fas fa-hand-wave text-amber-400 text-sm"></i>
                    </h2>
                    <p class="text-slate-400 leading-relaxed text-base">
                        স্বাগতম আপনার প্রথম <span class="text-indigo-400 font-semibold">.NET Code Journey</span>-তে! C#
                        হচ্ছে একটি অত্যন্ত শক্তিশালী এবং আধুনিক প্রোগ্রামিং ল্যাঙ্গুয়েজ। এই লেসনে আমরা কোনো জটিল থিওরিতে
                        না গিয়ে সরাসরি কোডিংয়ের দুনিয়ায় পা রাখবো এবং দেখবো কীভাবে একটি রিয়েল প্রজেক্ট কাজ করে।
                    </p>
                </section>

                <!-- Section 2 -->
                <section
                    class="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold shadow-lg shadow-indigo-500/20">
                        2</div>
                    <h2 class="text-xl font-bold text-white mb-3">.NET project create করা</h2>
                    <p class="text-slate-400 mb-4">
                        সবার প্রথমে আপনার টার্মিনাল বা কমান্ড প্রম্পট ওপেন করুন এবং নিচের কমান্ডটি রান করে একটি নতুন
                        কনসোল অ্যাপ্লিকেশন তৈরি করুন:
                    </p>
                    <!-- Terminal UI Box -->
                    <div class="bg-[#181824] rounded-xl border border-slate-800 overflow-hidden shadow-2xl max-w-2xl">
                        <div class="bg-[#11111a] px-4 py-2 flex items-center gap-2 border-b border-slate-800/60">
                            <span class="w-3 h-3 rounded-full bg-red-500/70 inline-block"></span>
                            <span class="w-3 h-3 rounded-full bg-yellow-500/70 inline-block"></span>
                            <span class="w-3 h-3 rounded-full bg-green-500/70 inline-block"></span>
                            <span class="text-xs text-slate-500 ml-2 code-font">Terminal</span>
                        </div>
                        <div class="p-4 code-font text-sm leading-6">
                            <div class="text-slate-500"># Create a new console application</div>
                            <div><span class="text-pink-400">dotnet</span> new console -n <span
                                    class="text-emerald-400">DotnetCodeJourney</span></div>
                            <div class="text-slate-500 mt-2"># Navigate inside the project folder</div>
                            <div><span class="text-pink-400">cd</span> <span
                                    class="text-emerald-400">DotnetCodeJourney</span></div>
                        </div>
                    </div>
                </section>

                <!-- Section 3 -->
                <section
                    class="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold shadow-lg shadow-indigo-500/20">
                        3</div>
                    <h2 class="text-xl font-bold text-white mb-3">Program.cs file বোঝা</h2>
                    <p class="text-slate-400 leading-relaxed">
                        প্রজেক্ট ফোল্ডারে ঢোকার পর আপনি <span
                            class="text-teal-400 code-font font-medium">Program.cs</span> নামের একটি ফাইল দেখতে পাবেন।
                        এটিই হলো আমাদের অ্যাপ্লিকেশনের <span class="text-amber-400 font-semibold">Entry Point</span> বা
                        মূল চালিকাশক্তি। আমরা যত কোড লিখবো, তার এক্সিকিউশন বা রান হওয়া এখান থেকেই শুরু হবে।
                    </p>
                </section>

                <!-- Section 4 -->
                <section
                    class="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold shadow-lg shadow-indigo-500/20">
                        4</div>
                    <h2 class="text-xl font-bold text-white mb-3">First Console Output</h2>
                    <p class="text-slate-400 mb-4">
                        কনসোলে বা স্ক্রিনে যেকোনো টেক্সট প্রিন্ট করার জন্য আমরা ব্যবহার করি <code
                            class="text-pink-400 bg-pink-500/10 px-1.5 py-0.5 rounded code-font text-sm">Console.WriteLine()</code>।
                        যেমন:
                    </p>
                    <!-- VS Code Style Code Block -->
                    <div class="bg-[#1e1e1e] rounded-xl border border-slate-800 overflow-hidden shadow-2xl max-w-xl">
                        <div
                            class="bg-[#181818] px-4 py-2 flex items-center justify-between border-b border-slate-800/60">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-full bg-red-500/50 inline-block"></span>
                                <span class="w-3 h-3 rounded-full bg-yellow-500/50 inline-block"></span>
                                <span class="w-3 h-3 rounded-full bg-green-500/50 inline-block"></span>
                                <span class="text-xs text-slate-400 ml-2 code-font">Program.cs</span>
                            </div>
                            <i class="text-xs text-slate-600 fab fa-csharp"></i>
                        </div>
                        <div class="p-4 code-font text-sm leading-6 text-slate-300">
                            <div><span class="text-[#4ec9b0]">Console</span>.<span
                                    class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Welcome to
                                    .NET Code Journey"</span>);</div>
                        </div>
                    </div>
                </section>

                <!-- Section 5 -->
                <section
                    class="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold shadow-lg shadow-indigo-500/20">
                        5</div>
                    <h2 class="text-xl font-bold text-white mb-3">Variables and Data Types</h2>
                    <p class="text-slate-400 mb-4">
                        ডাটা বা তথ্য মেমোরিতে সাময়িকভাবে সেভ রাখার জন্য আমরা <span
                            class="text-indigo-400 font-semibold">Variable</span> ব্যবহার করি। ডাটার ধরনের ওপর ভিত্তি
                        করে বিভিন্ন রকম <span class="text-indigo-400 font-semibold">Data Types</span> যেমন লেখা বা
                        টেক্সটের জন্য <code class="text-indigo-300 bg-indigo-950 px-1 py-0.5 rounded">string</code> এবং
                        পূর্ণসংখ্যার জন্য <code class="text-indigo-300 bg-indigo-950 px-1 py-0.5 rounded">int</code>
                        ব্যবহৃত হয়।
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                        <div class="bg-slate-900/40 border border-slate-800 p-4 rounded-xl">
                            <span class="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">String
                                (লেখা)</span>
                            <div class="code-font text-sm text-slate-300 mb-2"><span class="text-blue-400">string</span>
                                name = <span class="text-orange-300">"Rahim"</span>;</div>
                            <p class="text-xs text-slate-500">নাম বা যেকোনো টেক্সট ডাবল কোটেশনের মধ্যে রাখতে হয়।</p>
                        </div>
                        <div class="bg-slate-900/40 border border-slate-800 p-4 rounded-xl">
                            <span class="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">Int
                                (পূর্ণসংখ্যা)</span>
                            <div class="code-font text-sm text-slate-300 mb-2"><span class="text-blue-400">int</span>
                                age = <span class="text-teal-300">20</span>;</div>
                            <p class="text-xs text-slate-500">যেকোনো পূর্ণসংখ্যা বা নাম্বার রাখার জন্য ব্যবহৃত হয়।</p>
                        </div>
                    </div>
                </section>

                <!-- Section 6 -->
                <section
                    class="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold shadow-lg shadow-indigo-500/20">
                        6</div>
                    <h2 class="text-xl font-bold text-white mb-3">User Input</h2>
                    <p class="text-slate-400 leading-relaxed">
                        ইউজার বা কিবোর্ড থেকে সরাসরি কোনো ইনপুট বা লেখা রিসিভ করতে আমরা <code
                            class="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded code-font text-sm">Console.ReadLine()</code>
                        ব্যবহার করি। এটি ইউজারের টাইপ করা ডেটাকে একটি <code
                            class="text-slate-300 font-semibold">string</code> হিসেবে আমাদের কোডে ফিরিয়ে দেয়।
                    </p>
                </section>

                <!-- Section 7 -->
                <section
                    class="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold shadow-lg shadow-indigo-500/20">
                        7</div>
                    <h2 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        Full Example Code <span class="text-xs font-normal text-slate-500 code-font">(Real VS Code
                            Theme)</span>
                    </h2>
                    <!-- Complete VS Code UI -->
                    <div class="bg-[#1e1e1e] rounded-xl border border-slate-800 overflow-hidden shadow-2xl max-w-2xl">
                        <div
                            class="bg-[#181818] px-4 py-2 flex items-center justify-between border-b border-slate-800/60">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
                                <span class="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
                                <span class="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
                                <span class="text-xs text-slate-400 ml-2 code-font">Program.cs</span>
                            </div>
                            <span class="text-xs text-indigo-400/70 code-font">C#</span>
                        </div>
                        <div class="p-5 code-font text-sm leading-7 text-slate-300 overflow-x-auto">
                            <div><span class="text-slate-500 italic">// 1. Displaying a welcome message</span></div>
                            <div class="pl-0"><span class="text-[#4ec9b0]">Console</span>.<span
                                    class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Welcome to
                                    .NET Code Journey"</span>);</div>
                            <div class="h-4"></div>
                            <div><span class="text-slate-500 italic">// 2. Declaring variables</span></div>
                            <div><span class="text-[#569cd6]">string</span> name = <span
                                    class="text-[#ce9178]">"Rahim"</span>;</div>
                            <div><span class="text-[#569cd6]">int</span> age = <span class="text-[#b5cea8]">20</span>;
                            </div>
                            <div class="h-4"></div>
                            <div><span class="text-slate-500 italic">// 3. Printing variables with string
                                    concatenation</span></div>
                            <div><span class="text-[#4ec9b0]">Console</span>.<span
                                    class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Name: "</span>
                                + name);</div>
                            <div><span class="text-[#4ec9b0]">Console</span>.<span
                                    class="text-[#dcdcaa]">WriteLine</span>(<span class="text-[#ce9178]">"Age: "</span>
                                + age);</div>
                        </div>
                    </div>
                </section>

                <!-- Section 8 -->
                <section
                    class="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold shadow-lg shadow-indigo-500/20">
                        8</div>
                    <h2 class="text-xl font-bold text-white mb-3">Code Explanation</h2>
                    <div class="space-y-3 max-w-3xl">
                        <div class="flex items-start gap-3 bg-slate-900/30 p-3 rounded-xl border border-slate-800/60">
                            <div
                                class="w-6 h-6 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs text-indigo-400 code-font font-bold shrink-0 mt-0.5">
                                01</div>
                            <p class="text-sm text-slate-400"><code
                                    class="text-slate-300 font-semibold code-font">Console.WriteLine(...)</code> এর
                                মাধ্যমে আমরা প্রথমে স্ক্রিনে একটি ওয়েলকাম মেসেজ প্রিন্ট করেছি।</p>
                        </div>
                        <div class="flex items-start gap-3 bg-slate-900/30 p-3 rounded-xl border border-slate-800/60">
                            <div
                                class="w-6 h-6 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs text-indigo-400 code-font font-bold shrink-0 mt-0.5">
                                02</div>
                            <p class="text-sm text-slate-400"><code
                                    class="text-slate-300 font-semibold code-font">string name = "Rahim";</code> কোডটি
                                মেমোরিতে "name" নামের একটি বক্স বা ভ্যারিয়েবল তৈরি করে তার মধ্যে "Rahim" টেক্সটটি স্টোর
                                করে।</p>
                        </div>
                        <div class="flex items-start gap-3 bg-slate-900/30 p-3 rounded-xl border border-slate-800/60">
                            <div
                                class="w-6 h-6 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs text-indigo-400 code-font font-bold shrink-0 mt-0.5">
                                03</div>
                            <p class="text-sm text-slate-400"><code
                                    class="text-slate-300 font-semibold code-font">int age = 20;</code> এখানে একই উপায়ে
                                একটি সংখ্যা বা ইন্টিজার মেমোরিতে জমা রাখা হয়েছে।</p>
                        </div>
                        <div class="flex items-start gap-3 bg-slate-900/30 p-3 rounded-xl border border-slate-800/60">
                            <div
                                class="w-6 h-6 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs text-indigo-400 code-font font-bold shrink-0 mt-0.5">
                                04</div>
                            <p class="text-sm text-slate-400"><code
                                    class="text-slate-300 font-semibold code-font">"Name: " + name</code> এখানে <code
                                    class="text-amber-400 font-semibold text-xs code-font">+</code> অপারেটরটি দুটি
                                স্ট্রিং বা লেখাকে একসাথে জোড়া (Concatenation) দিতে সাহায্য করেছে।</p>
                        </div>
                    </div>
                </section>

                <!-- Section 9 -->
                <section
                    class="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center text-[10px] text-emerald-400 font-bold shadow-lg shadow-emerald-500/20">
                        9</div>
                    <h2 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        Practice Task <i class="fas fa-laptop-code text-emerald-400 text-sm"></i>
                    </h2>
                    <!-- Glowing Task Card -->
                    <div
                        class="bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/30 p-6 rounded-2xl max-w-2xl relative overflow-hidden">
                        <div
                            class="absolute -right-4 -bottom-4 text-emerald-500/5 text-8xl pointer-events-none font-bold">
                            <i class="fas fa-code"></i>
                        </div>
                        <h4
                            class="text-emerald-400 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <i class="fas fa-bolt"></i> Hands-on Challenge
                        </h4>
                        <p class="text-slate-300 font-medium text-base mb-4">
                            User থেকে name এবং age input নিয়ে console এ show করো।
                        </p>
                        <div
                            class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-400 leading-5">
                            <span class="text-amber-400 font-bold"><i class="fas fa-lightbulb"></i> হিন্টস:</span>
                            প্রথমে <code
                                class="text-slate-200 code-font bg-slate-900 px-1 py-0.5 rounded">Console.ReadLine()</code>
                            দিয়ে ইনপুট নিন, একটি ভ্যারিয়েবলে রাখুন, তারপর <code
                                class="text-slate-200 code-font bg-slate-900 px-1 py-0.5 rounded">Console.WriteLine()</code>
                            দিয়ে সেটি প্রিন্ট করে দিন!
                        </div>
                    </div>
                </section>

                <!-- Section 10 -->
                <section class="relative pl-8 md:pl-10">
                    <div
                        class="absolute left-[-11px] top-1 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-400 font-bold shadow-lg shadow-indigo-500/20">
                        10</div>
                    <h2 class="text-xl font-bold text-white mb-3">Summary</h2>
                    <!-- Glassmorphic Summary box -->
                    <div
                        class="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl max-w-2xl flex items-center gap-4">
                        <div
                            class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 text-xl">
                            <i class="fas fa-clipboard-check"></i>
                        </div>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            দারুণ! এই lesson এ আমরা সফলভাবে <span class="text-slate-200 font-semibold">.NET project
                                setup</span> করা, basic <span class="text-slate-200 font-semibold">C# code
                                structure</span> বোঝা, <span class="text-slate-200 font-semibold">variable</span>
                            ব্যবহার করা এবং কনসোলে ডাটা <span class="text-slate-200 font-semibold">output</span> ও <span
                                class="text-slate-200 font-semibold">input</span> নেওয়ার নিয়মগুলো শিখে ফেললাম।
                        </p>
                    </div>
                </section>

            </div>

            <!-- Footer Progress / Navigation -->
            <footer
                class="mt-20 pt-8 border-t border-slate-900 flex justify-between items-center text-sm text-slate-500">
                <div>
                    <span class="code-font text-indigo-400/60">02 - .NET Code Journey</span>
                </div>
                <div
                    class="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800 text-slate-300 font-medium cursor-pointer hover:bg-slate-800 transition">
                    Next Lesson <i class="fas fa-arrow-right text-xs text-indigo-400"></i>
                </div>
            </footer>

        </div>

    </div>
</template>