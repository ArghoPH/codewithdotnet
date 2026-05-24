<script setup>
import { ref } from 'vue';

// Default state 75 সেট করা আছে, যা স্লাইডারের সাথে টু-ওয়ে বাইন্ডিং (v-model) এ থাকবে
const marks = ref(75);
</script>

<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <!-- HEADER -->
        <div class="max-w-4xl mx-auto mb-12 text-center">
            <span class="text-emerald-600 font-mono text-sm tracking-widest uppercase font-bold">Module 02: Action
                Time</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">C# Operators & Logic
                Challenges</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">ভেরিয়েবলের ডাটা নিয়ে খেলা করার সময় এসেছে! অপারেটর
                ব্যবহার করে ক্যালকুলেশন এবং লজিক্যাল ডিসিশন নেওয়া শিখুন।</p>
        </div>

        <!-- MAIN CONTENT -->
        <div class="max-w-4xl mx-auto space-y-12">

            <!-- ========================================== -->
            <!-- SECTION 1: QUICK OPERATOR CHEAT SHEET -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CORE
                        CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">অপারেটর মূলত ৪ প্রকার</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 class="font-bold text-slate-900 mb-2 text-base">১. Arithmetic (গাণিতিক)</h3>
                        <p class="text-slate-500 mb-2">যোগ, বিয়োগ, গুণ, ভাগ এবং ভাগশেষ বের করার জন্য।</p>
                        <code
                            class="block bg-slate-900 text-emerald-400 p-2 rounded font-mono text-xs">+ , - , * , / , % (Modulus)</code>
                    </div>

                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 class="font-bold text-slate-900 mb-2 text-base">২. Assignment (মান নির্ধারণ)</h3>
                        <p class="text-slate-500 mb-2">কোনো ভেরিয়েবলের ভেতরে ভ্যালু সেট বা এসাইন করার জন্য।</p>
                        <code
                            class="block bg-slate-900 text-emerald-400 p-2 rounded font-mono text-xs">= , += , -= , *= , /=</code>
                    </div>

                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 class="font-bold text-slate-900 mb-2 text-base">৩. Comparison (তুলনামূলক)</h3>
                        <p class="text-slate-500 mb-2">দুটি ভ্যালুর মধ্যে তুলনা করে True/False রিটার্ন করে।</p>
                        <code
                            class="block bg-slate-900 text-emerald-400 p-2 rounded font-mono text-xs">== (সমান), != (অসমান), &gt; , &lt; , &gt;= , &lt;=</code>
                    </div>

                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 class="font-bold text-slate-900 mb-2 text-base">৪. Logical (লজিক্যাল)</h3>
                        <p class="text-slate-500 mb-2">একাধিক শর্ত বা কন্ডিশন একসাথে চেক করার জন্য।</p>
                        <code
                            class="block bg-slate-900 text-emerald-400 p-2 rounded font-mono text-xs">&amp;&amp; (AND), || (OR), ! (NOT)</code>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- SECTION 2: INTERACTIVE CONDITIONAL SIMULATOR (VUE.JS) -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                    <span
                        class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">PLAYGROUND</span>
                    <h2 class="text-2xl font-bold text-slate-900">কন্ডিশনাল ল্যাব: Grading System</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের স্লাইডারটি টেনে মার্কস পরিবর্তন করে দেখুন C# এর
                    <code>if-else if-else</code> স্ট্রাকচারটি ব্যাকএন্ডে কীভাবে কন্ডিশন চেক করে সঠিক গ্রেড আউটপুট
                    দিচ্ছে।
                </p>

                <!-- Interactive Sandbox Main Container -->
                <div
                    class="bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-sm shadow-inner grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-800">

                    <!-- Controls Side -->
                    <div class="space-y-6 bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">

                        <!-- Number Input -->
                        <div>
                            <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Enter Marks
                            </label>

                            <input v-model.number="marks" type="number" min="0" max="100"
                                class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-lg font-bold text-blue-400 outline-none focus:border-blue-500" />
                        </div>

                        <!-- Slider Input -->
                        <div>
                            <label
                                class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex justify-between">
                                <span>Exam Marks Slider</span>

                                <span
                                    class="text-blue-400 font-mono text-sm bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                                    {{ marks }} / 100
                                </span>
                            </label>

                            <input v-model.number="marks" type="range" min="0" max="100"
                                class="w-full cursor-pointer accent-blue-500" />
                        </div>

                        <!-- Quick Buttons -->
                        <div class="grid grid-cols-3  gap-2">
                            <button
                                class="rounded-lg bg-slate-700 px-3 py-2 text-xs font-bold text-slate-200 hover:bg-slate-600"
                                @click="marks = 45">
                                45
                            </button>

                            <button
                                class="rounded-lg bg-slate-700 px-3 py-2 text-xs font-bold text-slate-200 hover:bg-slate-600"
                                @click="marks = 60">
                                60
                            </button>

                            <button
                                class="rounded-lg bg-slate-700 px-3 py-2 text-xs font-bold text-slate-200 hover:bg-slate-600"
                                @click="marks = 80">
                                80
                            </button>


                        </div>

                        <!-- Simulated Terminal/Console Output -->
                        <div class="space-y-2">
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                                Live Terminal Output
                            </span>

                            <div
                                class="bg-black/40 border border-slate-900 rounded p-4 font-mono text-sm min-h-[70px] flex items-center gap-3">
                                <span class="text-slate-500">&gt;</span>


                                <div v-if="marks >= 80 && marks < 95" class="text-emerald-400 animate-pulse">
                                    Output: Student Grade is A+ (Excellent!) 🎉
                                </div>

                                <div v-else-if="marks >= 60" class="text-blue-400 animate-pulse">
                                    Output: Student Grade is B (Good Job!) 👍
                                </div>

                                <div v-else class="text-rose-400 animate-pulse">
                                    Output: Student Grade is F (Keep Practicing!) ❌
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Live C# Syntax Highlighter Side -->
                    <div class="flex flex-col justify-between">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Generated C#
                            Code Execution</span>
                        <div
                            class="bg-slate-950 p-4 rounded-lg border border-slate-800 flex-1 font-mono text-xs md:text-sm leading-relaxed space-y-1">
                            <div><span class="text-purple-400">int</span> marks = <span class="text-amber-400">{{ marks
                            }}</span>;</div>
                            <br />
                            <!-- IF BLOCK HIGHLIGHT -->
                            <div
                                :class="{ 'bg-emerald-500/10 border-l-2 border-emerald-500 pl-2 text-emerald-300': marks >= 80, 'opacity-40': marks < 80 }">
                                <span class="text-purple-400">if</span> (marks &gt;= <span
                                    class="text-emerald-400">80</span>) { <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(<span class="text-amber-300">"Grade:
                                    A+"</span>); <br />
                                }
                            </div>

                            <!-- ELSE IF BLOCK HIGHLIGHT -->
                            <div
                                :class="{ 'bg-blue-500/10 border-l-2 border-blue-500 pl-2 text-blue-300': marks >= 60 && marks < 80, 'opacity-40': marks >= 80 || marks < 60 }">
                                <span class="text-purple-400">else if</span> (marks &gt;= <span
                                    class="text-emerald-400">60</span>) { <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(<span class="text-amber-300">"Grade:
                                    B"</span>); <br />
                                }
                            </div>

                            <!-- ELSE BLOCK HIGHLIGHT -->
                            <div
                                :class="{ 'bg-rose-500/10 border-l-2 border-rose-500 pl-2 text-rose-300': marks < 60, 'opacity-40': marks >= 60 }">
                                <span class="text-purple-400">else</span> { <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(<span class="text-amber-300">"Grade:
                                    F"</span>); <br />
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- ========================================== -->
            <!-- SECTION 3: PRACTICE CHALLENGES -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE
                        TIME</span>
                    <h2 class="text-2xl font-bold text-slate-900">লার্নারদের জন্য ৩টি কোডিং চ্যালেঞ্জ</h2>
                </div>

                <div class="space-y-6">

                    <!-- Challenge 1 -->
                    <div class="border border-slate-200 p-5 rounded-xl hover:border-slate-300 transition">
                        <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Challenge
                            #01: Modulus & Math</span>
                        <h3 class="font-bold text-slate-900 text-base mb-2">জোড় নাকি বিজোড় সংখ্যা? (Even or Odd)</h3>
                        <p class="text-sm text-slate-600 mb-4">ইউজার একটি সংখ্যা ইনপুট দেবে। আপনাকে
                            <code>% (Modulus)</code> অপারেটর ব্যবহার করে বের করতে হবে সংখ্যাটি জোড় নাকি বিজোড়।
                        </p>
                        <details class="bg-slate-900 rounded-lg">
                            <summary
                                class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none">
                                💡 Hint & Solution Code</summary>
                            <pre
                                class="p-4 pt-0 text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800">
int number = 14;
bool isEven = (number % 2) == 0; // ২ দিয়ে ভাগ করলে ভাগশেষ ০ হলে True
Console.WriteLine(isEven); // Output: True </pre>
                        </details>
                    </div>


                    <!-- Challenge 2 -->
                    <div class="border border-slate-200 p-5 rounded-xl hover:border-slate-300 transition">
                        <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Challenge
                            #02: Logical Operators</span>
                        <h3 class="font-bold text-slate-900 text-base mb-2">ভোট দেওয়ার যোগ্যতা যাচাই (Voting
                            Eligibility)</h3>
                        <p class="text-sm text-slate-600 mb-4">একজন মানুষের বয়স কমপক্ষে <code>18</code> বছর হতে হবে এবং
                            তার নাগরিকত্ব (NID) <code>true</code> হতে হবে। <code>&& (AND)</code> অপারেটর ব্যবহার করে
                            লজিকটি লিখুন।</p>
                        <details class="bg-slate-900 rounded-lg">
                            <summary
                                class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none">
                                💡 Hint & Solution Code</summary>
                            <pre
                                class="p-4 pt-0 text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800">
int age = 20;
bool hasNID = true;
bool canVote = (age >= 18) && hasNID; // দুটি শর্তই সত্য হতে হবে
Console.WriteLine(canVote); // Output: True </pre>
                        </details>
                    </div>

                    <!-- Challenge 3 -->
                    <div class="border border-slate-200 p-5 rounded-xl hover:border-slate-300 transition">
                        <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Challenge
                            #03: Compound Assignment</span>
                        <h3 class="font-bold text-slate-900 text-base mb-2">গেম স্কোর আপডেট (Score Tracker)</h3>
                        <p class="text-sm text-slate-600 mb-4">একটি গেমে প্লেয়ারের প্রাথমিক স্কোর <code>100</code>।
                            প্লেয়ার একটি বোনাস কয়েন পাওয়ায় তার স্কোর ১০ বাড়ল। <code>+=</code> অপারেটর ব্যবহার করে নতুন
                            স্কোর প্রিন্ট করুন।</p>
                        <details class="bg-slate-900 rounded-lg">
                            <summary
                                class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none">
                                💡 Hint & Solution Code</summary>
                            <pre
                                class="p-4 pt-0 text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800">
int score = 100;
score += 10; // score = score + 10 লেখার শর্টকাট রূপ
Console.WriteLine(score); // Output: 110 </pre>
                        </details>
                    </div>
                </div>

            </section>

            <!-- PROGRESS TRACKER -->
            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-emerald-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">শর্তাধীন সিদ্ধান্ত (Conditionals: If-Else)</h3>
                    <p class="text-sm text-slate-400 mt-1">অপারেটরের লজিকগুলো ব্যবহার করে কীভাবে অ্যাপ্লিকেশনে সিদ্ধান্ত
                        (Decision Making) নিতে হয় তা শিখবো পরবর্তী পর্বে।</p>
                </div>
                <button
                    class="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Start Next Lesson <i class="fa-solid fa-bolt ml-1"></i>
                </button>
            </div>


        </div>
    </div>
</template>