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
                                সেই গাড়ি বানানোর কারখানা।</li>
                            <li><strong class="text-slate-900">C# কী:</strong> এটি একটি প্রোগ্রামিং ভাষা। <span
                                    class="text-slate-500 italic">Example:</span> কারখানার মেশিন চালানোর জন্য যে ভাষায়
                                ইনস্ট্রাকশন দিতে হয়।</li>
                            <li><strong class="text-slate-900">.NET দিয়ে কী কী বানানো যায়:</strong> Console app, Web
                                API, Website, Desktop app, Mobile app — সবকিছুর basic idea।</li>
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
                                code লেখার জন্য লাগে।</li>
                            <li><strong class="text-slate-900">Terminal / Command Prompt use:</strong> Terminal দিয়ে
                                project create/run করা হয়।</li>
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
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
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
                        <p class="text-slate-700">Student first C# console output করতে পারবে। Welcome message print করা।
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><strong class="text-slate-900">Program.cs:</strong> Program.cs হলো main file। প্রোগ্রাম
                                এখান থেকেই শুরু হয়।</li>
                            <li><strong class="text-slate-900">Code execution flow:</strong> Program run হলে code top
                                থেকে bottom execute হয়।</li>
                            <li><strong class="text-slate-900">Console.WriteLine():</strong> স্ক্রিনে কোনো লেখা প্রিন্ট
                                করতে এটি ব্যবহৃত হয়।</li>
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
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
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
                                container। <span class="text-slate-500 italic">Example:</span> name, age, price রাখার
                                বাক্স।</li>
                            <li><strong class="text-slate-900">Variable declare ও assign:</strong> মেমোরিতে জায়গা তৈরি
                                করে সেখানে ডেটা রাখা।</li>
                            <li><strong class="text-slate-900">Variable update করা:</strong> পুরানো ডেটা মুছে নতুন ডেটা
                                রাখা।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">string</span> name = <span class="text-amber-300">"Karim"</span>;
<span class="text-purple-400">int</span> age = <span class="text-emerald-400">25</span>;
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
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
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
                        <p class="text-slate-700">Student বুঝবে কোন ধরনের Data এর জন্য কোন নির্দিষ্ট Type ব্যবহার করতে
                            হবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">Different type-এর value store করার জন্য different data type লাগে।
                            Number, text, true/false আলাদা আলাদা type।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">string:</strong> Text data বা যেকোনো লেখা। <span
                                    class="text-slate-500 italic">Example:</span> "Hello World"</li>
                            <li><strong class="text-slate-900">int:</strong> Whole numbers বা পূর্ণসংখ্যা। <span
                                    class="text-slate-500 italic">Example:</span> 10, -50</li>
                            <li><strong class="text-slate-900">double:</strong> Fractional numbers বা দশমীক সংখ্যা।
                                <span class="text-slate-500 italic">Example:</span> 10.5</li>
                            <li><strong class="text-slate-900">decimal:</strong> Financial precision numbers (টাকা-পয়সার
                                নিখুঁত হিসাব)। <span class="text-slate-500 italic">Example:</span> 10.99M</li>
                            <li><strong class="text-slate-900">bool:</strong> True or False (যেকোনো যৌক্তিক সিদ্ধান্ত)।
                                <span class="text-slate-500 italic">Example:</span> true</li>
                            <li><strong class="text-slate-900">char:</strong> Single character বা একটি মাত্র অক্ষর।
                                <span class="text-slate-500 italic">Example:</span> 'A'</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">string</span> message = <span class="text-amber-300">"Hello"</span>;
<span class="text-purple-400">int</span> count = <span class="text-emerald-400">10</span>;
<span class="text-purple-400">double</span> temperature = <span class="text-emerald-400">32.5</span>;
<span class="text-purple-400">decimal</span> balance = <span class="text-emerald-400">500.50M</span>;
<span class="text-purple-400">bool</span> isLogged = <span class="text-sky-400">false</span>;
<span class="text-purple-400">char</span> grade = <span class="text-amber-300">'A'</span>;</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Learn how to work with these using: <strong
                                    class="text-slate-900">Operators in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
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
                        <p class="text-slate-700">Student বিভিন্ন ধরনের calculation এবং condition logic তৈরি করতে পারবে।
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">Operators দিয়ে মূলত গাণিতিক হিসাব, তুলনা এবং লজিক তৈরি করা হয়।
                        </p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Arithmetic operators:</strong> +, -, *, / <span
                                    class="text-slate-500 italic">(যোগ, বিয়োগ, গুণ, ভাগ)</span></li>
                            <li><strong class="text-slate-900">Assignment operators:</strong> = <span
                                    class="text-slate-500 italic">(ডানপাশের ভ্যালু বামপাশের ভ্যারিয়েবলে রাখা)</span>
                            </li>
                            <li><strong class="text-slate-900">Comparison operators:</strong> ==, !=, >, &lt; <span
                                    class="text-slate-500 italic">(দুটি ভ্যালুর মধ্যে তুলনা করা)</span></li>
                            <li><strong class="text-slate-900">Logical operators:</strong> &&, ||, ! <span
                                    class="text-slate-500 italic">(একাধিক শর্ত একসাথে চেক করা)</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">int</span> sum = <span class="text-emerald-400">5</span> + <span class="text-emerald-400">3</span>; <span class="text-slate-400">// Arithmetic</span>
<span class="text-purple-400">bool</span> isEqual = (<span class="text-emerald-400">5</span> == <span class="text-emerald-400">5</span>); <span class="text-slate-400">// Comparison (True)</span>
<span class="text-purple-400">bool</span> checkLogic = (sum > <span class="text-emerald-400">5</span>) && (isEqual == <span class="text-sky-400">true</span>); <span class="text-slate-400">// Logical</span></pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Now let's take data from user: <strong
                                    class="text-slate-900">Taking User Input</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
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
                        <p class="text-slate-700">Student কিবোর্ড থেকে ব্যবহারকারীর নাম, বয়স বা যেকোনো ইনপুট নিতে পারবে।
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <ul class="space-y-3 text-slate-700">
                            <li><strong class="text-slate-900">Console.ReadLine():</strong> এর মাধ্যমে ইউজারের কাছ থেকে
                                টেক্সট ইনপুট নেওয়া হয়। এটি সবসময় ডাটা `string` হিসেবে রিটার্ন করে।</li>
                            <li><strong class="text-slate-900">Number conversion:</strong> যেহেতু ইনপুট `string` হিসেবে
                                আসে, তাই গাণিতিক কাজ করার জন্য তাকে সংখ্যায় রূপান্তর করতে হয়। <span
                                    class="text-slate-500 italic">Example: Convert.ToInt32()</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
Console.WriteLine(<span class="text-amber-300">"Enter your age:"</span>);
<span class="text-purple-400">string</span> input = Console.ReadLine();
<span class="text-purple-400">int</span> age = Convert.ToInt32(input); <span class="text-slate-400">// Conversion from string to int</span></pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Use this input to make decisions in: <strong
                                    class="text-slate-900">If Else Conditions</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
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
                        <p class="text-slate-700">Student লজিক বা শর্তের ওপর ভিত্তি করে সিদ্ধান্ত নেওয়ার কোড লিখতে
                            পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">শর্তের সত্য-মিথ্যার উপর ভিত্তি করে প্রোগ্রামের গতিপথ নির্ধারণ করা
                            হয়। <span class="text-slate-500 italic">Example:</span> বয়স ১৮ বা তার বেশি হলে Adult,
                            অন্যথায় Minor।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">if:</strong> যদি মূল শর্ত সত্য হয় তবে এর ভেতরের কোড কাজ
                                করবে।</li>
                            <li><strong class="text-slate-900">else if:</strong> আগের শর্ত মিথ্যা হলে নতুন আরেকটি শর্ত
                                চেক করার জন্য।</li>
                            <li><strong class="text-slate-900">else:</strong> উপরের কোনো শর্তই যদি সত্যি না হয়, তবে এটি
                                রান করবে।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">int</span> age = <span class="text-emerald-400">20</span>;
<span class="text-purple-400">if</span> (age >= <span class="text-emerald-400">18</span>) {
    Console.WriteLine(<span class="text-amber-300">"Adult"</span>);
} <span class="text-purple-400">else</span> {
    Console.WriteLine(<span class="text-amber-300">"Minor"</span>);
}</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">For fixed options, learn: <strong
                                    class="text-slate-900">Switch Case in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 9 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">9.</span> Switch
                    Case in C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student একাধিক নির্দিষ্ট অপশন যুক্ত ক্লিন সিদ্ধান্তমূলক কোড লিখতে
                            পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">যখন অনেকগুলো নির্দিষ্ট (fixed) অপশন থাকে, তখন অনেক `if-else` না
                            লিখে `switch` ব্যবহার করা কোডকে অনেক পরিচ্ছন্ন করে। <span
                                class="text-slate-500 italic">Example:</span> দিনের নম্বর (১-৭) দেখে বারের নাম প্রিন্ট
                            করা।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">switch:</strong> যে ভ্যারিয়েবলটি চেক করা হবে তা নির্ধারণ
                                করে।</li>
                            <li><strong class="text-slate-900">case:</strong> সম্ভাব্য নির্দিষ্ট মান বা অপশন।</li>
                            <li><strong class="text-slate-900">break:</strong> কাজ শেষ হলে সুইচ ব্লক থেকে বের হয়ে যাওয়ার
                                জন্য।</li>
                            <li><strong class="text-slate-900">default:</strong> কোনো কেস না মিললে এটি কাজ করে (যেমনটা
                                else করে)।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">int</span> day = <span class="text-emerald-400">1</span>;
<span class="text-purple-400">switch</span> (day) {
    <span class="text-purple-400">case</span> <span class="text-emerald-400">1</span>: Console.WriteLine(<span class="text-amber-300">"Saturday"</span>); <span class="text-purple-400">break</span>;
    <span class="text-purple-400">default</span>: Console.WriteLine(<span class="text-amber-300">"Other Day"</span>); <span class="text-purple-400">break</span>;
}</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Automate repeated tasks using: <strong
                                    class="text-slate-900">Loops in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 10 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">10.</span> Loops in
                    C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student একই কাজ বারবার করার জন্য কোড অটোমেট করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">একই কোড বারবার টাইপ না করে লুপের সাহায্যে নির্দিষ্ট শর্ত পর্যন্ত
                            অসংখ্যবার রান করানো যায়। <span class="text-slate-500 italic">Example:</span> ১ থেকে ১০০
                            পর্যন্ত সংখ্যা প্রিন্ট করা।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">for loop:</strong> যখন আগে থেকেই জানা থাকে লুপটি ঠিক
                                কতবার ঘুরবে।</li>
                            <li><strong class="text-slate-900">while loop:</strong> যখন একটি নির্দিষ্ট শর্ত সত্য থাকা
                                পর্যন্ত লুপ চালানো প্রয়োজন।</li>
                            <li><strong class="text-slate-900">Loop Counter:</strong> একটি ভ্যারিয়েবল যা ট্র্যাক রাখে
                                লুপটি কতবার ঘুরলো।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-emerald-400">1</span>; i &lt;= <span class="text-emerald-400">5</span>; i++) {
    Console.WriteLine(i); <span class="text-slate-400">// Prints 1 to 5</span>
}</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Learn to store multiple items in: <strong
                                    class="text-slate-900">Arrays in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 11 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">11.</span> Arrays in
                    C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student একই টাইপের অনেকগুলো ডেটা একসাথে একটি ভ্যারিয়েবলে হ্যান্ডেল
                            করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">আলাদা আলাদা ১০টি ভ্যারিয়েবল না বানিয়ে একটি মাত্র মেমোরি কালেকশনে
                            ডাটা রাখার জন্য Array ব্যবহার হয়। এর ইনডেক্স সবসময় ০ থেকে শুরু হয়।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Array Index:</strong> ডাটার পজিশন বা অবস্থান ট্র্যাকার।
                            </li>
                            <li><strong class="text-slate-900">Fixed Size:</strong> অ্যারে তৈরির সময় তার সাইজ বা উপাদান
                                সংখ্যা ফিক্সড করে দিতে হয়।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">string</span>[] names = { <span class="text-amber-300">"Ali"</span>, <span class="text-amber-300">"Hasan"</span>, <span class="text-amber-300">"Karim"</span> };
Console.WriteLine(names[<span class="text-emerald-400">0</span>]); <span class="text-slate-400">// Prints "Ali"</span></pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Write clean and reusable blocks using: <strong
                                    class="text-slate-900">Methods in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 12 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">12.</span> Methods
                    in C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student কোড বারবার না লিখে রিইউজেবল ফাংশনাল ব্লক বা মেথড তৈরি করতে
                            পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">মেথড বা ফাংশন হলো কিছু কোডের সমষ্টি যা একটি নির্দিষ্ট কাজ করে।
                            একই লজিক অ্যাপের বিভিন্ন জায়গায় লাগলে বারবার না লিখে মেথডটি কল করলেই হয়।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Parameter:</strong> মেথডের ভেতর বাইরে থেকে যে ডাটা পাস
                                করা হয়।</li>
                            <li><strong class="text-slate-900">Return Value:</strong> মেথডটি কাজ শেষে যে ফলাফলটি ফেরত
                                পাঠায়।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-slate-400">// Method Definition</span>
<span class="text-purple-400">static void</span> GreetUser(<span class="text-purple-400">string</span> name) {
    Console.WriteLine(<span class="text-amber-300">"Hello "</span> + name);
}
<span class="text-slate-400">// Method Call: GreetUser("Sohan");</span></pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Manipulate and process text data with: <strong
                                    class="text-slate-900">Working with Strings</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 13 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">13.</span> Working
                    with Strings</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student টেক্সট বা স্ট্রিং ডাটা প্রসেস এবং মডিফাই করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">রিয়েল প্রজেক্টে নাম, ইমেইল, মেসেজ ইত্যাদি টেক্সট ডাটা নিয়ে কাজ
                            করার জন্য বিভিন্ন বিল্ট-ইন স্ট্রিং মেথড জানা প্রয়োজন।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">String Interpolation:</strong> `$` চিহ্ন ব্যবহার করে
                                স্ট্রিংয়ের ভেতরে সরাসরি ভ্যারিয়েবল বসানো।</li>
                            <li><strong class="text-slate-900">Built-in Functions:</strong> ToUpper(), ToLower(),
                                Contains() দিয়ে লেখা বড়হাত-ছোটহাত বা খোঁজার কাজ করা।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">string</span> user = <span class="text-amber-300">"Sohan"</span>;
<span class="text-purple-400">string</span> welcome = <span class="text-amber-300">$"Welcome, {user}!"</span>; <span class="text-slate-400">// Interpolation</span>
Console.WriteLine(welcome.ToUpper()); <span class="text-slate-400">// "WELCOME, SOHAN!"</span></pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Enter the world of Objects: <strong
                                    class="text-slate-900">Introduction to OOP</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 14 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">14.</span>
                    Introduction to OOP</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) এর মূল আইডিয়া ও
                            প্রয়োজনীয়তা বুঝবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">OOP হলো কোড সাজানোর একটি আধুনিক পদ্ধতি যেখানে বাস্তব পৃথিবীর
                            যেকোনো বিষয়কে (যেমন: User, Product, Account) কোডের মাধ্যমে রিপ্রেজেন্ট করা হয়।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Class:</strong> অবজেক্ট তৈরির ব্লুপ্রিন্ট বা নকশা।</li>
                            <li><strong class="text-slate-900">Object:</strong> সেই নকশা দেখে তৈরি করা বাস্তব উপাদান বা
                                ইনস্ট্যান্স।</li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Learn to write custom objects in: <strong
                                    class="text-slate-900">Classes and Objects in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 15 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">15.</span> Classes
                    and Objects in C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student নিজে ক্লাস ডিফাইন করে কাস্টম অবজেক্ট তৈরি ও ব্যবহার করতে
                            পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">একটি ক্লাসের ভেতরে কিছু প্রোপার্টি (ডাটা) এবং মেথড (কাজ) থাকে।
                            সেই ক্লাস থেকে `new` কিওয়ার্ড ব্যবহার করে অবজেক্ট তৈরি করতে হয়।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">class</span> Car {
    <span class="text-purple-400">public string</span> brand;
}
<span class="text-slate-400">// Inside Main:</span>
Car myCar = <span class="text-purple-400">new</span> Car();
myCar.brand = <span class="text-amber-300">"Toyota"</span>;</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Initialize data instantly using: <strong
                                    class="text-slate-900">Constructor in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 16 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">16.</span>
                    Constructor in C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student অবজেক্ট তৈরি হওয়ার সাথে সাথে তার প্রাথমিক ডাটা সেট বা
                            ইনিশিয়ালাইজ করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">কনস্ট্রাক্টর হলো ক্লাসের ভেতরের একটি স্পেশাল মেথড যার নাম হুবহু
                            ক্লাসের নামের মতোই হয়। অবজেক্ট তৈরি হওয়ার মুহূর্তে এটি স্বয়ংক্রিয়ভাবে রান করে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">class</span> Student {
    <span class="text-purple-400">public string</span> name;
    <span class="text-purple-400">public</span> Student(<span class="text-purple-400">string</span> sName) { <span class="text-slate-400">// Constructor</span>
        name = sName;
    }
}</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Reuse properties from other classes: <strong
                                    class="text-slate-900">Inheritance in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 17 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">17.</span>
                    Inheritance in C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student এক ক্লাসের কোড অন্য ক্লাসে উত্তরাধিকার সূত্রে ব্যবহার (code
                            reuse) করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">ইনহেরিটেন্সের মাধ্যমে একটি চাইল্ড ক্লাস তার প্যারেন্ট ক্লাসের
                            সমস্ত পাবলিক প্রোপার্টি ও মেথড নিজের মধ্যে পেয়ে যায়। <span
                                class="text-slate-500 italic">Example:</span> `Person` ক্লাস থেকে `Student` বা `Teacher`
                            ক্লাস তৈরি করা।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">class</span> Vehicle { <span class="text-purple-400">public int</span> speed = <span class="text-emerald-400">60</span>; }
<span class="text-purple-400">class</span> Bike : Vehicle { } <span class="text-slate-400">// Bike inherits Vehicle</span></pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Protect and secure internal data with: <strong
                                    class="text-slate-900">Encapsulation in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 18 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">18.</span>
                    Encapsulation in C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student ক্লাসের ভেতরের সংবেদনশীল ডাটা বাইরের অনাকাঙ্ক্ষিত অ্যাক্সেস
                            থেকে সুরক্ষিত রাখতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">ডাটা হাইড বা সিকিউর করার জন্য এনক্যাপসুলেশন ব্যবহৃত হয়। ডিরেক্ট
                            অ্যাক্সেস বন্ধ করে গেটার ও সেটার (Properties) মাধ্যমে ডাটা ভ্যালিডেট করে অ্যাক্সেস দেওয়া হয়।
                        </p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Access Modifiers:</strong> `public` (সবার জন্য উন্মুক্ত),
                                `private` (শুধুমাত্র নিজস্ব ক্লাসে অ্যাক্সেসযোগ্য)।</li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Prevent app crashes by mastering: <strong
                                    class="text-slate-900">Error Handling in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 19 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">19.</span> Error
                    Handling in C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student অ্যাপ ক্র্যাশ না করিয়ে যেকোনো রানটাইম ভুল বা এক্সেপশন
                            হ্যান্ডেল করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">কোডে কোনো কারণে ভুল হলে (যেমন ০ দিয়ে ভাগ বা ডাটাবেজ কানেকশন ফেইল)
                            অ্যাপ যেন বন্ধ না হয়ে ইউজারকে সুন্দর মেসেজ দেখায়, তা `try-catch` দিয়ে করা হয়।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">try:</strong> যে কোডে ভুল হওয়ার সম্ভাবনা আছে তা এখানে
                                থাকে।</li>
                            <li><strong class="text-slate-900">catch:</strong> ভুল হলে কি করা হবে (Error Message) তা
                                এখানে হ্যান্ডেল হয়।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">try</span> {
    <span class="text-purple-400">int</span> result = <span class="text-emerald-400">10</span> / <span class="text-purple-400">int</span>.Parse(<span class="text-amber-300">"0"</span>);
} <span class="text-purple-400">catch</span> (Exception ex) {
    Console.WriteLine(<span class="text-amber-300">"Error: "</span> + ex.Message);
}</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Manage dynamic data lists with: <strong
                                    class="text-slate-900">List and Collections</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 20 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">20.</span> List and
                    Collections</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student আনলিমিটেড এবং ডাইনামিক ডাটা কালেকশন সহজে ম্যানেজ করতে পারবে।
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">Array এর সাইজ ফিক্সড, কিন্তু বাস্তব প্রজেক্টে ডাটা যেকোনো সময়
                            বাড়তে বা কমতে পারে। এর জন্য `List&lt;T&gt;` ব্যবহার করা হয় যা ডাইনামিক্যালি মেমোরি বাড়াতে
                            পারে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
List&lt;<span class="text-purple-400">string</span>&gt; students = <span class="text-purple-400">new</span> List&lt;<span class="text-purple-400">string</span>&gt;();
students.Add(<span class="text-amber-300">"Sohan"</span>); <span class="text-slate-400">// Dynamically adding items</span>
students.Remove(<span class="text-amber-300">"Sohan"</span>);</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Filter and query collections using: <strong
                                    class="text-slate-900">LINQ in C#</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 21 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">21.</span> LINQ in
                    C#</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student যেকোনো কালেকশন থেকে এক লাইনে ডাটা ফিল্টার, সার্চ বা সর্ট করতে
                            পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">LINQ (Language Integrated Query) লুপের ঝামেলা ছাড়া সরাসরি
                            কালেকশনের ওপর কোয়েরি করার সুবিধা দেয়।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Where:</strong> শর্ত সাপেক্ষে ডাটা ফিল্টার করা।</li>
                            <li><strong class="text-slate-900">FirstOrDefault:</strong> ম্যাচ করা প্রথম ডাটাটি খুঁজে বের
                                করা।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">var</span> adultStudents = students.Where(s => s.Age >= <span class="text-emerald-400">18</span>).ToList();</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Store and load data locally via: <strong
                                    class="text-slate-900">File Read and Write</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 22 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">22.</span> File Read
                    and Write</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student কম্পিউটারের ফাইলে ডাটা পার্মানেন্টলি সেভ এবং রিড করতে পারবে।
                        </p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">ডাটাবেজ ছাড়া খুব সহজে লোকাল ডিরেক্টরিতে `.txt` বা যেকোনো ফাইলে
                            ডাটা রাইট এবং পরবর্তীতে তা রিড করার বেসিক সিস্টেম।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
File.WriteAllText(<span class="text-amber-300">"data.txt"</span>, <span class="text-amber-300">"Hello C#"</span>);
<span class="text-purple-400">string</span> content = File.ReadAllText(<span class="text-amber-300">"data.txt"</span>);</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Enter Web Development with: <strong
                                    class="text-slate-900">ASP.NET Core Basics</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 23 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">23.</span> ASP.NET
                    Core Basics</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student ওয়েব আর্কিটেকচার এবং .NET এর ব্যাকএন্ড সিস্টেমের মূল ভিত্তি
                            বুঝবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">ASP.NET Core হলো ক্রস-প্ল্যাটফর্ম ক্লাউড-বেসড অ্যাপ্লিকেশন তৈরির
                            মূল ফ্রেমওয়ার্ক। এর মাধ্যমে আধুনিক ওয়েব অ্যাপ ও শক্তিশালী এপিআই (Web API) তৈরি হয়।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Request & Response:</strong> ক্লায়েন্ট (ব্রাউজার)
                                সার্ভারকে রিকোয়েস্ট পাঠায় এবং সার্ভার রেসপন্স ব্যাক করে।</li>
                            <li><strong class="text-slate-900">Routing:</strong> নির্দিষ্ট URL-এর ওপর ভিত্তি করে সঠিক
                                কোড এক্সিকিউট করা।</li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Create endpoints in: <strong class="text-slate-900">Create
                                    Your First Web API</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 24 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">24.</span> Create
                    Your First Web API</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student সফলভাবে নিজস্ব একটি রিয়েল এপিআই এন্ডপয়েন্ট (GET/POST) তৈরি
                            করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">API হলো ফ্রন্টএন্ড এবং ব্যাকএন্ডের মধ্যকার যোগাযোগের সেতু।
                            ফ্রন্টএন্ড বা মোবাইল অ্যাপ মূলত JSON ডাটা আদান-প্রদান করতে এই এন্ডপয়েন্টগুলো ব্যবহার করে।
                        </p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Controllers:</strong> যেখানে এপিআই এর রুট ও লজিক ডিফাইন
                                করা থাকে।</li>
                            <li><strong class="text-slate-900">HTTP Methods:</strong> GET (ডাটা নেওয়া), POST (নতুন ডাটা
                                পাঠানো)।</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Code Example</h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
[HttpGet(<span class="text-amber-300">"api/welcome"</span>)]
<span class="text-purple-400">public string</span> GetWelcome() => <span class="text-amber-300">"Hello from API"</span>;</pre>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Learn to handle real storage via: <strong
                                    class="text-slate-900">Database with .NET</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 25 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">25.</span> Database
                    with .NET</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student রিলেশনাল ডাটাবেজ এবং SQL এর বেসিক কনসেপ্ট বুঝতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">প্রজেক্ট বন্ধ করলেও যেন ডাটা হারিয়ে না যায়, সেজন্য ডাটাবেজ (যেমন
                            SQL Server/PostgreSQL) ব্যবহার করতে হয়।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Tables & Rows:</strong> ডাটাবেজের ভেতর ডাটা টেবিল আকারে
                                রো এবং কলামে সাজানো থাকে।</li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Interact with DB using C# via: <strong
                                    class="text-slate-900">EF Core Basics</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 26 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">26.</span> EF Core
                    Basics</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student কোড-ফাস্ট (Code-First) পদ্ধতিতে C# কোড দিয়ে ডাটাবেজ টেবিল
                            জেনারেট ও আপডেট করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">Entity Framework (EF) Core হলো একটি ORM। এটি ডেভেলপারকে কোনো
                            প্রকার কাঁচা SQL কোড না লিখে সরাসরি C# অবজেক্টের মাধ্যমে ডাটাবেজে কাজ করার সুবিধা দেয়।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">DbContext:</strong> এটি ডাটাবেজের সাথে কানেকশন গেটওয়ে
                                হিসেবে কাজ করে।</li>
                            <li><strong class="text-slate-900">Migrations:</strong> C# ক্লাসের পরিবর্তনগুলোকে ট্র্যাক
                                করে ডাটাবেজ টেবিলে রূপান্তর করা।</li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Implement data management with: <strong
                                    class="text-slate-900">CRUD in .NET</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 27 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">27.</span> CRUD in
                    .NET</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student যেকোনো প্রজেক্টের প্রধান ফিচার তথা ডেটা তৈরি, পড়া, এডিট ও
                            ডিলিট করা সম্পূর্ণ করতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">বাস্তব পৃথিবীর প্রায় সব সফটওয়্যারই CRUD অপারেশনের উপর ভিত্তি করে
                            চলে। <span class="text-slate-500 italic">Example:</span> প্রোডাক্ট অ্যাড করা (Create), দেখা
                            (Read), আপডেট করা (Update), ডিলিট করা (Delete)।</p>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Secure user system with: <strong
                                    class="text-slate-900">Login and Registration Concept</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 28 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">28.</span> Login and
                    Registration Concept</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student ইউজার সিকিউরিটি এবং আইডেন্টিটি সিস্টেমের ব্যাকএন্ড ফ্লো বুঝতে
                            পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">নির্দিষ্ট ইউজারকে তার নিজস্ব ডাটা দেখার পারমিশন দেওয়ার জন্য
                            Authentication অত্যন্ত জরুরি। পাসওয়ার্ড হ্যাশিং ও টোকেন জেনারেট করার বেসিক আর্কিটেকচার এখানে
                            আলোচনা করা হবে।</p>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Organize industry-standard code in: <strong
                                    class="text-slate-900">Clean Project Structure</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- Lesson 29 -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 class="text-3xl font-bold text-slate-900 mb-6"><span class="text-blue-600 mr-2">29.</span> Clean
                    Project Structure</h2>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Lesson Objective</h3>
                        <p class="text-slate-700">Student প্রফেশনাল ও বড় স্কেলের প্রজেক্টের কোড সুন্দর ফোল্ডারে গুছিয়ে
                            রাখতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 mb-3">কোড এলোমেলো না রেখে মেইনটেইনেবল করার জন্য নির্দিষ্ট আর্কিটেকচারাল
                            প্যাটার্ন অনুযায়ী প্রজেক্ট সাজাতে হয়।</p>
                        <ul class="space-y-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <li><strong class="text-slate-900">Folders:</strong> Models (ডাটা স্ট্রাকচার), Controllers
                                (এন্ডপয়েন্ট), Services (বিজনেস লজিক), DTOs (ডাটা ট্রান্সফার অবজেক্ট)।</li>
                        </ul>
                    </div>

                    <div
                        class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Follow up /
                                Next Lesson</h4>
                            <p class="text-sm text-slate-700">Time for the Capstone: <strong
                                    class="text-slate-900">Final Project</strong></p>
                        </div>
                        <i class="fa-solid fa-arrow-right text-emerald-600"></i>
                    </div>
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
                        <p class="text-slate-700">Student পুরো কোর্সের শেখা লজিক ও টেকনোলজি ব্যবহার করে একটি কমপ্লিট
                            রিয়েল-ওয়ার্ল্ড ব্যাকএন্ড প্রজেক্ট দাঁড় করাতে পারবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Concept Explanation
                        </h3>
                        <p class="text-slate-700 text-lg border-b border-slate-100 pb-4">পূর্ববর্তী ২৯টি লেসনে যা যা
                            শেখা হয়েছে (যেমন OOP, LINQ, Database, API, CRUD), সবকিছু একত্রে এই সিঙ্গেল পোর্টফোলিও
                            প্রোজেক্টে অ্যাপ্লাই করা হবে।</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">Project Features
                            (Topics Covered)</h3>
                        <div class="grid grid-cols-2 gap-3 text-slate-700 font-medium">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i> Add
                                student info</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i> View
                                all students</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i> Edit
                                dynamic records</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i>
                                Delete student data</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i>
                                Search by name/ID</div>
                            <div class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-600"></i> SQL
                                database storage</div>
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