<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-12 text-center">
            <span class="text-indigo-600 font-mono text-sm tracking-widest uppercase font-bold">Module 04: Control Flow
                Masterclass</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">C# Conditionals &
                Decision Making</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">সিম্পল if-else থেকে শুরু করে Nested condition, Ternary
                অপারেটর এবং মডার্ন C# Pattern Matching-এর কমপ্লিট এ-টু-জেড গাইডলাইন।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-12">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        1</span>
                    <h2 class="text-2xl font-bold text-slate-900">if, else if, এবং else এর ব্যবহার</h2>
                </div>

                <p class="text-slate-700 mb-6">C#-এ কোনো কন্ডিশন বা শর্তের ওপর ভিত্তি করে কোড এক্সিকিউট করার জন্য এই
                    তিনটি ব্লক ক্রমান্বয়ে কাজ করে। কন্ডিশন সবসময় একটি <code>bool</code> (true/false) রিটার্ন করে।</p>

                <div class="space-y-4 font-mono text-xs md:text-sm">
                    <pre class="bg-slate-900 text-blue-300 p-5 rounded-xl leading-relaxed overflow-x-auto">
<span class="text-purple-400">int</span> examScore = <span class="text-emerald-400">75</span>;

<span class="text-purple-400">if</span> (examScore &gt;= <span class="text-emerald-400">80</span>) {
    Console.WriteLine(<span class="text-amber-300">"Excellent! You got A+"</span>); <span class="text-slate-400">// প্রথম শর্ত সত্য হলে চলবে</span>
}
<span class="text-purple-400">else if</span> (examScore &gt;= <span class="text-emerald-400">60</span>) {
    Console.WriteLine(<span class="text-amber-300">"Good! You passed"</span>);     <span class="text-slate-400">// প্রথমটা মিথ্যা এবং এটা সত্য হলে চলবে</span>
}
<span class="text-purple-400">else</span> {
    Console.WriteLine(<span class="text-amber-300">"Sorry! You failed"</span>);       <span class="text-slate-400">// ওপরের কোনো শর্তই সত্য না হলে অবধারিতভাবে এটি চলবে</span>
}</pre>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">রিয়েল-টাইম কন্ডিশন ভিজ্যুয়ালাইজার</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">স্লাইডারটি পরিবর্তন করুন। কন্ডিশন ম্যাচ করার সাথে সাথে C# কোডের
                    কোন লাইনটি এক্টিভেট হচ্ছে এবং টার্মিনাল আউটপুট কী আসছে তা লাইভ দেখুন।</p>

                <div
                    class="bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-sm shadow-inner grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-800">

                    <div
                        class="space-y-6 bg-slate-800/50 p-5 rounded-lg border border-slate-700/50 flex flex-col justify-between">
                        <div>
                            <label
                                class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex justify-between">
                                <span>Score Input</span>
                                <span
                                    class="text-blue-400 font-mono text-sm bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">{{
                                    score }} / 100</span>
                            </label>
                            <input type="range" min="0" max="100" v-model.number="score"
                                class="w-full accent-blue-500 bg-slate-700 h-2 rounded-lg appearance-none cursor-pointer" />
                        </div>

                        <div class="space-y-2">
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Console
                                Terminal</span>
                            <div
                                class="bg-black/50 border border-slate-950 rounded p-4 font-mono text-xs min-h-[60px] flex items-center gap-2">
                                <span class="text-slate-600">&gt;</span>
                                <span v-if="score >= 80" class="text-emerald-400">Output: Excellent! You got A+
                                    🏆</span>
                                <span v-else-if="score >= 60" class="text-blue-400">Output: Good! You passed 👍</span>
                                <span v-else class="text-rose-400">Output: Sorry! You failed ❌</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs md:text-sm space-y-1">
                        <div><span class="text-purple-400">int</span> examScore = <span class="text-amber-400">{{ score
                                }}</span>;</div>
                        <br />
                        <div
                            :class="{ 'bg-emerald-500/10 border-l-2 border-emerald-500 pl-2 text-emerald-300': score >= 80, 'opacity-30': score < 80 }">
                            <span class="text-purple-400">if</span> (examScore &gt;= <span
                                class="text-emerald-400">80</span>) { <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(<span class="text-amber-300">"Excellent! You got
                                A+"</span>); <br />
                            }
                        </div>
                        <div
                            :class="{ 'bg-blue-500/10 border-l-2 border-blue-500 pl-2 text-blue-300': score >= 60 && score < 80, 'opacity-30': score >= 80 || score < 60 }">
                            <span class="text-purple-400">else if</span> (examScore &gt;= <span
                                class="text-emerald-400">60</span>) { <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(<span class="text-amber-300">"Good! You
                                passed"</span>); <br />
                            }
                        </div>
                        <div
                            :class="{ 'bg-rose-500/10 border-l-2 border-rose-500 pl-2 text-rose-300': score < 60, 'opacity-30': score >= 60 }">
                            <span class="text-purple-400">else</span> { <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(<span class="text-amber-300">"Sorry! You
                                failed"</span>); <br />
                            }
                        </div>
                    </div>

                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        2</span>
                    <h2 class="text-2xl font-bold text-slate-900">Nested If Statement</h2>
                </div>
                <p class="text-slate-700 mb-4">যখন একটি কন্ডিশন সত্য হওয়ার পর তার <b>ভেতরে</b> আরও একটি কন্ডিশন চেক করার
                    প্রয়োজন পড়ে, তখন তাকে Nested If বলে।</p>

                <pre class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
<span class="text-purple-400">bool</span> isLoggedIn = <span class="text-purple-400">true</span>;
<span class="text-purple-400">bool</span> isAdmin = <span class="text-purple-400">false</span>;

<span class="text-purple-400">if</span> (isLoggedIn) {
    <span class="text-slate-500">// ইউজার লগইন করলেই কেবল ভেতরের এই কন্ডিশনটি চেক হবে</span>
    <span class="text-purple-400">if</span> (isAdmin) {
        Console.WriteLine(<span class="text-amber-300">"Welcome to Admin Dashboard."</span>);
    } <span class="text-purple-400">else</span> {
        Console.WriteLine(<span class="text-amber-300">"Welcome, User."</span>);
    }
} <span class="text-purple-400">else</span> {
    Console.WriteLine(<span class="text-amber-300">"Please login first."</span>);
}</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        3</span>
                    <h2 class="text-2xl font-bold text-slate-900">টার্নারি অপারেটর (Ternary Conditional)</h2>
                </div>
                <p class="text-slate-700 mb-4">একটি সাধারণ <code>if-else</code> ব্লককে মাত্র এক লাইনে লেখার চমৎকার
                    শর্টকাট হলো টার্নারি অপারেটর <code>(? :)</code>।</p>

                <div class="bg-slate-900 p-5 rounded-xl font-mono text-xs md:text-sm space-y-2 text-blue-300">
                    <div><span class="text-purple-400">int</span> userAge = <span class="text-emerald-400">20</span>;
                    </div>
                    <div><span class="text-purple-400">string</span> status = (userAge &gt;= <span
                            class="text-emerald-400">18</span>) ? <span class="text-amber-300">"Adult"</span> : <span
                            class="text-amber-300">"Minor"</span>;</div>
                    <div class="text-slate-500 mt-2">// স্ট্রাকচার: string result = (Condition) ? "If True" : "If
                        False";</div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        4</span>
                    <h2 class="text-2xl font-bold text-slate-900">Switch Statement</h2>
                </div>
                <p class="text-slate-700 mb-4">যখন একটি মাত্র ভেরিয়েবলের একাধিক নির্দিষ্ট (Exact) ভ্যালু বা অপশনের ওপর
                    ভিত্তি করে সিদ্ধান্ত নিতে হয়, তখন অনেকগুলো <code>else if</code> না লিখে <code>switch</code> ব্যবহার
                    করা ভালো। এটি কোডকে ক্লিন ও ফাস্ট রাখে।</p>

                <pre class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
<span class="text-purple-400">int</span> dayNumber = <span class="text-emerald-400">3</span>;

<span class="text-purple-400">switch</span> (dayNumber) {
    <span class="text-purple-400">case</span> <span class="text-emerald-400">1</span>:
        Console.WriteLine(<span class="text-amber-300">"Saturday"</span>);
        <span class="text-purple-400">break</span>;
    <span class="text-purple-400">case</span> <span class="text-emerald-400">2</span>:
        Console.WriteLine(<span class="text-amber-300">"Sunday"</span>);
        <span class="text-purple-400">break</span>;
    <span class="text-purple-400">case</span> <span class="text-emerald-400">3</span>:
        Console.WriteLine(<span class="text-amber-300">"Monday"</span>); <span class="text-slate-400">// এটি এক্সিকিউট হবে</span>
        <span class="text-purple-400">break</span>;
    <span class="text-purple-400">default</span>:
        Console.WriteLine(<span class="text-amber-300">"Invalid Day"</span>); <span class="text-slate-400">// কোনো কেস ম্যাচ না করলে এটি চলবে</span>
        <span class="text-purple-400">break</span>;
}</pre>
                <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-slate-700 mt-4">
                    <strong>⚠️ গুরুত্বপূর্ণ নিয়ম:</strong> প্রতিটি <code>case</code> ব্লকের শেষে অবশ্যই
                    <code>break;</code> কিওয়ার্ড ব্যবহার করতে হবে, অন্যথায় C# কম্পাইলার এরর জেনারেট করবে (Fall-through
                    নিষিদ্ধ)।
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-purple-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">C# 8+
                        ADVANCED</span>
                    <h2 class="text-2xl font-bold text-slate-900">Modern Switch Expressions ও Pattern Matching</h2>
                </div>
                <p class="text-slate-700 mb-4">আধুনিক C# সংস্করণে (C# 8 এবং পরবর্তী) সুইচ স্টেটমেন্টকে আরও সংক্ষিপ্ত করে
                    এক লাইনে **Switch Expression** হিসেবে লেখা যায়। এখানে <code>case</code> এবং <code>break</code> এর
                    জায়গায় ল্যাম্বডা অ্যারো <code>=&gt;</code> এবং default-এর জন্য ডিসকার্ড <code>_</code> ব্যবহার করা
                    হয়।</p>

                <pre class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
<span class="text-purple-400">int</span> errorCode = <span class="text-emerald-400">404</span>;

<span class="text-purple-400">string</span> message = errorCode <span class="text-purple-400">switch</span>
{
    <span class="text-emerald-400">200</span> =&gt; <span class="text-amber-300">"Success"</span>,
    <span class="text-emerald-400">404</span> =&gt; <span class="text-amber-300">"Not Found"</span>,
    <span class="text-emerald-400">500</span> =&gt; <span class="text-amber-300">"Server Error"</span>,
    _   =&gt; <span class="text-amber-300">"Unknown Status"</span> <span class="text-slate-400">// Default case</span>
};

Console.WriteLine(message); <span class="text-slate-400">// Output: Not Found</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGES</span>
                    <h2 class="text-2xl font-bold text-slate-900">অপারেটর ও কন্ডিশনাল কম্বাইন্ড চ্যালেঞ্জ</h2>
                </div>

                <div class="space-y-6">
                    <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                        <span class="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">Challenge
                            #01</span>
                        <h3 class="font-bold text-slate-900 text-base mb-2">লিপ ইয়ার ক্যালকুলেটর (Leap Year Checker)
                        </h3>
                        <p class="text-sm text-slate-600 mb-4">একটি নির্দিষ্ট বছর লিপ ইয়ার (Leap Year) কিনা তা বের করার
                            লজিক লিখুন। মনে রাখবেন, একটি বছর ৪ দিয়ে বিভাজ্য হতে হবে, কিন্তু ১০০ দিয়ে বিভাজ্য হওয়া যাবে
                            না, অথবা সরাসরি ৪০০ দিয়ে বিভাজ্য হতে হবে।</p>
                        <details class="bg-slate-900 rounded-lg">
                            <summary
                                class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none">
                                💻 Solution Code</summary>
                            <pre
                                class="p-4 pt-0 text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800">
<span class="text-purple-400">int</span> year = <span class="text-emerald-400">2024</span>;

<span class="text-purple-400">if</span> ((year % <span class="text-emerald-400">4</span> == <span class="text-emerald-400">0</span> && year % <span class="text-emerald-400">100</span> != <span class="text-emerald-400">0</span>) || (year % <span class="text-emerald-400">400</span> == <span class="text-emerald-400">0</span>)) {
    Console.WriteLine(<span class="text-amber-300">"Leap Year"</span>);
} <span class="text-purple-400">else</span> {
    Console.WriteLine(<span class="text-amber-300">"Not a Leap Year"</span>);
}</pre>
                        </details>
                    </div>

                    <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                        <span class="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">Challenge
                            #02</span>
                        <h3 class="font-bold text-slate-900 text-base mb-2">ইউজার রোল বেসড অ্যাক্সেস (Role Based Access)
                        </h3>
                        <p class="text-sm text-slate-600 mb-4">Switch expression বা statement ব্যবহার করে একটি
                            <code>string role</code> ভেরিয়েবলের ওপর ভিত্তি করে এক্সেস পারমিশন প্রিন্ট করুন ("Admin" ->
                            Full Access, "Editor" -> Edit Access, "Guest" -> Read Only).</p>
                        <details class="bg-slate-900 rounded-lg">
                            <summary
                                class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none">
                                💻 Solution Code</summary>
                            <pre
                                class="p-4 pt-0 text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800">
<span class="text-purple-400">string</span> role = <span class="text-amber-300">"Editor"</span>;

<span class="text-purple-400">string</span> permission = role <span class="text-purple-400">switch</span> {
    <span class="text-amber-300">"Admin"</span>  =&gt; <span class="text-amber-300">"Full Access Granted"</span>,
    <span class="text-amber-300">"Editor"</span> =&gt; <span class="text-amber-300">"Edit Access Granted"</span>,
    <span class="text-amber-300">"Guest"</span>  =&gt; <span class="text-amber-300">"Read Only Access"</span>,
    _        =&gt; <span class="text-amber-300">"Access Denied"</span>
};
Console.WriteLine(permission);</pre>
                        </details>
                    </div>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-indigo-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">লুপস এবং ইটারেশন (Loops & Iterations)</h3>
                    <p class="text-sm text-slate-400 mt-1">পরবর্তী মডিউলে আমরা শিখবো কীভাবে লুপ ব্যবহার করে একটি কোডকে
                        বারবার না লিখে অটোমেটিক রান করানো যায়।</p>
                </div>
                <button
                    class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Next Chapter: Loops <i class="fa-solid fa-arrow-right ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Interactive Lab এর জন্য রিয়াক্টিভ স্টেট
const score = ref(75);
</script>