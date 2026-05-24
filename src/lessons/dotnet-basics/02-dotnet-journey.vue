<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <!-- Header & Course Flow Summary -->
        <div class="max-w-4xl mx-auto mb-16">
            <div class="text-center mb-10">
                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Dotnet Code Journey
                </h1>
                <p class="text-blue-600 font-mono text-lg tracking-widest uppercase">Full Flow & Roadmap</p>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-8 shadow-md">
                <h2 class="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Course Flow Summary
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 1:</span> Setup and basic output</div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 2:</span> Variables, data types, operators</div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 3:</span> Conditions, loops, arrays</div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 4:</span> Methods and reusable code</div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 5:</span> OOP concepts</div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 6:</span> Collections, LINQ, file handling</div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 7:</span> ASP.NET Core and Web API</div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 8:</span> Database and CRUD</div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 9:</span> Authentication and structure</div>
                    <div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><span
                            class="text-blue-600 font-bold">Phase 10:</span> Final real-world project</div>
                </div>
            </div>
        </div>

        <!-- MAIN LESSONS CONTAINER -->
        <div class="max-w-4xl mx-auto space-y-12">

            <!-- ========================================== -->
            <!-- Lesson 1 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">1.</span> Welcome to
                    Dotnet Code Journey</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective
                            (Goal)</h3>
                        <p class="text-slate-700">Beginner থেকে step-by-step C# এবং .NET development শেখানো। Student
                            বুঝবে .NET শেখার roadmap কেমন হবে এবং Course শেষে কী বানাতে পারবে সেটা clear হবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                            & Topics</h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><strong class="text-slate-900">.NET কী:</strong> এটি একটি ফ্রেমওয়ার্ক বা প্ল্যাটফর্ম।
                                <span class="text-slate-500 italic">Example:</span> আপনি যদি গাড়ি (App) বানান, .NET হলো
                                সেই গাড়ি বানানোর কারখানা।
                            </li>
                            <li><strong class="text-slate-900">C# কী:</strong> এটি একটি প্রোগ্রামিং ভাষা। <span
                                    class="text-slate-500 italic">Example:</span> কারখানার মেশিন চালানোর জন্য যে ভাষায়
                                ইনস্ট্রাকশন দিতে হয়।</li>
                            <li><strong class="text-slate-900">.NET দিয়ে কী কী বানানো যায়:</strong> Console app
                                (কমান্ড লাইন প্রোগ্রাম), Web API (সার্ভার সাইড ডেটা আদান-প্রদান), Website (ওয়েব পেজ),
                                Desktop app (কম্পিউটার সফটওয়্যার), Mobile app (অ্যান্ড্রয়েড/আইওএস অ্যাপ) — সবকিছুর
                                basic idea।</li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Next, we will move to: <strong
                                    class="text-slate-900">Environment Setup</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 2 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">2.</span> Setup Your
                    .NET Development Environment</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student নিজের computer-এ .NET project run করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><strong class="text-slate-900">.NET SDK install:</strong> SDK ছাড়া .NET project run করা
                                যায় না। <span class="text-slate-500 italic">Example:</span> SDK (Software Development
                                Kit) হলো মিস্ত্রির টুলবক্স।</li>
                            <li><strong class="text-slate-900">Visual Studio Code / Visual Studio setup:</strong> Editor
                                code লেখার জন্য লাগে। <span class="text-slate-500 italic">Example:</span> যেখানে আপনি C#
                                কোড টাইপ করবেন।</li>
                            <li><strong class="text-slate-900">Terminal / Command Prompt use:</strong> Terminal দিয়ে
                                project create/run করা হয়।</li>
                            <li><strong class="text-slate-900">First project folder create:</strong> প্রজেক্টের ফাইলগুলো
                                গুছিয়ে রাখার ফোল্ডার।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example
                            (Commands)</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-emerald-400 overflow-x-auto">
dotnet --version    <span class="text-slate-400">// Check if .NET is installed</span>
dotnet new console  <span class="text-slate-400">// Create a new console app</span>
dotnet run          <span class="text-slate-400">// Run the application</span></pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Next, we will move to: <strong
                                    class="text-slate-900">First C# Program</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 3 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">3.</span> Your First
                    C# Program</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student first C# console output করতে পারবে। Example idea: Welcome
                            message print করা।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><strong class="text-slate-900">Program.cs:</strong> Program.cs হলো main file। প্রোগ্রাম
                                এখান থেকেই শুরু হয়।</li>
                            <li><strong class="text-slate-900">Code execution flow:</strong> Program run হলে code top
                                থেকে bottom (উপর থেকে নিচে) execute হয়।</li>
                            <li><strong class="text-slate-900">Console.WriteLine():</strong> Console.WriteLine() দিয়ে
                                output দেখানো হয়। <span class="text-slate-500 italic">Example:</span> স্ক্রিনে কোনো
                                লেখা প্রিন্ট করতে এটি ব্যবহৃত হয়।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">using</span> System;

<span class="text-purple-400">class</span> Program {
    <span class="text-purple-400">static void</span> Main() {
        Console.WriteLine(<span class="text-amber-300">"Welcome to Dotnet Code Journey!"</span>);
    }
}</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Practice this output, then next: <strong
                                    class="text-slate-900">Variables in C#</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 4 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">4.</span> Variables
                    in C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student data store এবং use করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><strong class="text-slate-900">Variable কী:</strong> Variable হলো data store করার
                                container। <span class="text-slate-500 italic">Example:</span> name, age, price, email
                                রাখার বাক্স।</li>
                            <li><strong class="text-slate-900">Variable declare করা:</strong> মেমোরিতে একটি জায়গা তৈরি
                                করা।</li>
                            <li><strong class="text-slate-900">Value assign করা:</strong> সেই জায়গায় ডেটা রাখা।</li>
                            <li><strong class="text-slate-900">Variable update করা:</strong> পুরানো ডেটা মুছে নতুন ডেটা
                                রাখা।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example & Data
                            examples</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">string</span> name = <span class="text-amber-300">"Karim"</span>;  <span class="text-slate-400">// declare & assign</span>
<span class="text-purple-400">int</span> age = <span class="text-emerald-400">25</span>;
<span class="text-purple-400">double</span> price = <span class="text-emerald-400">99.99</span>;
<span class="text-purple-400">bool</span> isActive = <span class="text-sky-400">true</span>;

age = <span class="text-emerald-400">26</span>; <span class="text-slate-400">// update variable</span></pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Next, deeply understand these types in: <strong
                                    class="text-slate-900">C# Data Types</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 5 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">5.</span> C# Data
                    Types</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student বুঝবে কোন data এর জন্য কোন type use করতে হবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">Different type-এর value store করার জন্য different data type লাগে।
                            Number, text, true/false আলাদা আলাদা type।</p>
                        <ul class="space-y-2 text-slate-700 shadow-inner bg-slate-50 p-4 rounded-xl">
                            <li><strong class="text-slate-900">string:</strong> Text data. <span
                                    class="text-slate-500 italic">Example:</span> "Hello"</li>
                            <li><strong class="text-slate-900">int:</strong> Whole numbers. <span
                                    class="text-slate-500 italic">Example:</span> 10</li>
                            <li><strong class="text-slate-900">double:</strong> Fractional numbers. <span
                                    class="text-slate-500 italic">Example:</span> 10.5</li>
                            <li><strong class="text-slate-900">decimal:</strong> Financial precision numbers. <span
                                    class="text-slate-500 italic">Example:</span> 10.99M</li>
                            <li><strong class="text-slate-900">bool:</strong> True or False. <span
                                    class="text-slate-500 italic">Example:</span> true</li>
                            <li><strong class="text-slate-900">char:</strong> Single character. <span
                                    class="text-slate-500 italic">Example:</span> 'A'</li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Learn how to work with these using: <strong
                                    class="text-slate-900">Operators in C#</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 6 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">6.</span> Operators
                    in C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student simple calculation এবং condition logic লিখতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">Operators দিয়ে calculation, comparison এবং logic তৈরি করা হয়।
                        </p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl">
                            <li><strong class="text-slate-900">Arithmetic operators:</strong> +, -, *, / <span
                                    class="text-slate-500 italic">(Example: 5 + 3 = 8)</span></li>
                            <li><strong class="text-slate-900">Assignment operators:</strong> = <span
                                    class="text-slate-500 italic">(Example: int x = 5;)</span></li>
                            <li><strong class="text-slate-900">Comparison operators:</strong> ==, !=, >, &lt; <span
                                    class="text-slate-500 italic">(Example: 5 > 3 returns true)</span></li>
                            <li><strong class="text-slate-900">Logical operators:</strong> &&, ||, ! <span
                                    class="text-slate-500 italic">(Example: (age > 18) && (hasID == true))</span></li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Now let's take data from user: <strong
                                    class="text-slate-900">Taking User Input</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 7 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">7.</span> Taking
                    User Input</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student user থেকে name, age, number input নিতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <ul class="space-y-2 text-slate-700">
                            <li>User থেকে value নেওয়ার জন্য input লাগে।</li>
                            <li><strong class="text-slate-900">Console.ReadLine()</strong>: Console input normally
                                string হিসেবে আসে।</li>
                            <li><strong class="text-slate-900">Number conversion:</strong> Number হিসেবে use করতে হলে
                                convert করতে হয়। <span class="text-slate-500 italic">(Example:
                                    Convert.ToInt32())</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
Console.WriteLine(<span class="text-amber-300">"Enter your age:"</span>);
<span class="text-purple-400">string</span> input = Console.ReadLine();
<span class="text-purple-400">int</span> age = Convert.ToInt32(input); <span class="text-slate-400">// Conversion</span></pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Use this input to make decisions in: <strong
                                    class="text-slate-900">If Else Conditions</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 8 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">8.</span> If Else
                    Conditions</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student logic-based decision program লিখতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">Condition দিয়ে decision নেওয়া হয়। Example: age 18 হলে adult,
                            না হলে minor।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl">
                            <li><strong class="text-slate-900">if:</strong> শর্ত সত্য হলে রান করবে।</li>
                            <li><strong class="text-slate-900">else if:</strong> প্রথমটি মিথ্যা হলে এটি চেক করবে।</li>
                            <li><strong class="text-slate-900">else:</strong> কোনো শর্ত না মানলে রান করবে।</li>
                            <li><strong class="text-slate-900">Nested condition:</strong> if এর ভেতর আরেকটা if চেক করা।
                            </li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">For fixed options, learn: <strong
                                    class="text-slate-900">Switch Case in C#</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 9 to 13 -->
            <!-- ========================================== -->

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">9.</span> Switch
                    Case in C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student multiple option based program তৈরি করতে পারবে।</p>
                    <p><strong>Explanation:</strong> একাধিক fixed option থাকলে switch clean solution। Example: day
                        number দিয়ে day name print করা।</p>
                    <p><strong>Topics:</strong> switch, case, break, default.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Move to Loops in C#.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">10.</span> Loops in
                    C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student repeated task automate করতে পারবে।</p>
                    <p><strong>Explanation:</strong> Same কাজ বারবার করার জন্য loop use হয়। Example: 1 থেকে 10 print
                        করা।</p>
                    <p><strong>Topics:</strong> for, while, do while, Loop counter.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Learn to store multiple items in Arrays.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">11.</span> Arrays in
                    C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student multiple data একসাথে handle করতে পারবে।</p>
                    <p><strong>Explanation:</strong> Same type-এর multiple value store করার জন্য array use হয়। Index 0
                        থেকে শুরু হয়। <span class="text-slate-500 italic">(Example: string[] names = {"Ali",
                            "Hasan"};)</span></p>
                    <p><strong>Topics:</strong> Array কী, Array declare, Array index, Loop দিয়ে array access.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Move to Methods in C#.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">12.</span> Methods
                    in C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student clean এবং reusable code লিখতে পারবে।</p>
                    <p><strong>Explanation:</strong> Method দিয়ে code reusable করা হয়। একই code বারবার না লিখে method
                        call করা যায়।</p>
                    <p><strong>Topics:</strong> Method কী, Method create, Method call, Parameter, Return value.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Move to Working with Strings.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">13.</span> Working
                    with Strings</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student string data process করতে পারবে।</p>
                    <p><strong>Explanation:</strong> Real project-এ text data অনেক বেশি use হয়। Name, email, message,
                        address সব string।</p>
                    <p><strong>Topics:</strong> String concatenation, String interpolation, Length, ToUpper(),
                        ToLower(), Contains().</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Start Phase 5: Introduction to OOP.</p>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 14 to 18 (OOP Concepts) -->
            <!-- ========================================== -->

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">14.</span>
                    Introduction to OOP</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student class এবং object এর basic idea বুঝবে।</p>
                    <p><strong>Explanation:</strong> OOP দিয়ে real-world object কে code structure-এ represent করা হয়।
                        Example: Student, Product, User.</p>
                    <p><strong>Topics:</strong> Class, Object, Property, Method.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Dive deep into Classes and Objects in C#.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">15.</span> Classes
                    and Objects in C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student custom object বানাতে পারবে।</p>
                    <p><strong>Explanation:</strong> Class হলো blueprint। Object হলো সেই blueprint থেকে তৈরি real
                        instance।</p>
                    <p><strong>Topics:</strong> Class create, Object create, Property assign, Object method call.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Learn Constructor in C#.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">16.</span>
                    Constructor in C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student object initialization proper way-তে করতে পারবে।</p>
                    <p><strong>Explanation:</strong> Object create হওয়ার সময় initial value set করার জন্য constructor
                        use হয়।</p>
                    <p><strong>Topics:</strong> Constructor কী, Default constructor, Parameterized constructor.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Learn Inheritance in C#.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">17.</span>
                    Inheritance in C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student reusable OOP structure বুঝবে।</p>
                    <p><strong>Explanation:</strong> এক class-এর property/method অন্য class use করতে পারে। Example:
                        Person থেকে Student।</p>
                    <p><strong>Topics:</strong> Parent class, Child class, Code reuse.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Learn Encapsulation in C#.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">18.</span>
                    Encapsulation in C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student secure class design করতে পারবে।</p>
                    <p><strong>Explanation:</strong> Data কে secure রাখার জন্য encapsulation use হয়। Direct access বন্ধ
                        করে controlled access দেওয়া যায়।</p>
                    <p><strong>Topics:</strong> Access modifier (public, private), Getter setter.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Move to Error Handling.</p>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 19 to 22 -->
            <!-- ========================================== -->

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">19.</span> Error
                    Handling in C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student safer program লিখতে পারবে।</p>
                    <p><strong>Explanation:</strong> Program crash না করে error handle করার জন্য exception handling
                        লাগে।</p>
                    <p><strong>Topics:</strong> try, catch, finally, Common runtime errors.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Move to List and Collections.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">20.</span> List and
                    Collections</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student dynamic data collection manage করতে পারবে।</p>
                    <p><strong>Explanation:</strong> Array fixed size, কিন্তু List dynamic। Real project-এ List অনেক
                        বেশি use হয়।</p>
                    <p><strong>Topics:</strong> List&lt;T&gt;, Add item, Remove item, Loop through list.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Learn LINQ to filter Collections.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">21.</span> LINQ in
                    C#</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student list data query করতে পারবে।</p>
                    <p><strong>Explanation:</strong> LINQ দিয়ে collection থেকে data filter/search/sort করা সহজ হয়।</p>
                    <p><strong>Topics:</strong> Where, Select, FirstOrDefault, OrderBy.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Move to File Read and Write.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">22.</span> File Read
                    and Write</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student file-based simple storage করতে পারবে।</p>
                    <p><strong>Explanation:</strong> Local file-এ data save/read করার basic concept।</p>
                    <p><strong>Topics:</strong> File create, File write, File read.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Start Web Dev with ASP.NET Core Basics.</p>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 23 to 29 -->
            <!-- ========================================== -->

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">23.</span> ASP.NET
                    Core Basics</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student web development এর .NET side বুঝবে।</p>
                    <p><strong>Explanation:</strong> ASP.NET Core দিয়ে web application এবং API বানানো হয়।</p>
                    <p><strong>Topics:</strong> Web app কী, Server কী, Request/response, Routing.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Move to Create Your First Web API.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">24.</span> Create
                    Your First Web API</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student basic API endpoint বানাতে পারবে।</p>
                    <p><strong>Explanation:</strong> API হলো frontend/backend communication system। Frontend request
                        পাঠায়, backend response দেয়।</p>
                    <p><strong>Topics:</strong> Controller, Route, GET request, POST request.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Learn Database with .NET.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">25.</span> Database
                    with .NET</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student database এর basic structure বুঝবে।</p>
                    <p><strong>Explanation:</strong> Real app-এ data permanently save করার জন্য database লাগে।</p>
                    <p><strong>Topics:</strong> Database কী, Table, Row, Column, SQL basic idea.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Connect DB using EF Core Basics.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">26.</span> EF Core
                    Basics</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student code-first database workflow বুঝবে।</p>
                    <p><strong>Explanation:</strong> EF Core দিয়ে C# code ব্যবহার করে database manage করা যায়।</p>
                    <p><strong>Topics:</strong> Model, DbContext, Migration, Database update.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Implement CRUD in .NET.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">27.</span> CRUD in
                    .NET</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student complete data management feature বানাতে পারবে।</p>
                    <p><strong>Explanation:</strong> Almost every real project CRUD এর উপর based। Product add, user
                        edit, data delete — সব CRUD।</p>
                    <p><strong>Topics:</strong> Create, Read, Update, Delete.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Learn Login and Registration Concept.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">28.</span> Login and
                    Registration Concept</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student login system এর basic flow বুঝবে।</p>
                    <p><strong>Explanation:</strong> User-specific system বানাতে authentication লাগে।</p>
                    <p><strong>Topics:</strong> Register, Login, Password, Session/token basic idea.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Master Clean Project Structure.</p>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">29.</span> Clean
                    Project Structure</h2>
                <div class="space-y-4 text-slate-700">
                    <p><strong>Goal:</strong> Student professional project organize করতে পারবে।</p>
                    <p><strong>Explanation:</strong> বড় project clean রাখতে proper folder structure দরকার।</p>
                    <p><strong>Topics:</strong> Models, Controllers, Services, DTOs, Data folder.</p>
                    <p class="text-sm text-slate-500 mt-4 border-t border-slate-100 pt-4"><strong
                            class="text-slate-900">Follow up:</strong> Ready for Final Project.</p>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 30: Final Project -->
            <!-- ========================================== -->
            <section
                class="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-2xl p-8 shadow-md relative overflow-hidden">
                <i
                    class="fa-solid fa-trophy absolute right-[-20px] top-[-20px] text-9xl text-blue-600/5 rotate-12 pointer-events-none"></i>
                <h2 class="text-4xl font-extrabold text-slate-900 mb-6 relative z-10"><span
                        class="text-blue-600 mr-2">30.</span> Build a Student Management System</h2>

                <div class="space-y-6 relative z-10">
                    <div
                        class="bg-white p-5 rounded-xl border-l-4 border-emerald-600 shadow-sm border border-slate-200">
                        <h3 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Final Outcome</h3>
                        <p class="text-slate-700">Student real-world style .NET project complete করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 text-lg border-b border-slate-100 pb-4">পুরো course-এর শেখা topic গুলো
                            এক project-এ apply করা হবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">Project Features
                            (Topics Covered)</h3>
                        <div class="grid grid-cols-2 gap-3 text-slate-700 font-medium">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i> Add
                                student</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i> View
                                students</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i> Edit
                                student</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i>
                                Delete student</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i>
                                Search student</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i>
                                Store data</div>
                        </div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-slate-100 text-center">
                        <button
                            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition">Start
                            Coding Now!</button>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>