<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-12 text-center">
            <span class="text-amber-600 font-mono text-sm tracking-widest uppercase font-bold">Module 06: Iteration
                Control</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">C# Loops: Master the
                Iteration</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">ম্যানুয়াল কাজকে অটোমেট করুন! এক লাইন কোডকে হাজার বার রান
                করানোর জন্য For, While, Do-While এবং Foreach লুপের কমপ্লিট গাইডলাইন।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-12">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-amber-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        1</span>
                    <h2 class="text-2xl font-bold text-slate-900">For Loop</h2>
                </div>

                <p class="text-slate-700 mb-4">যখন আপনি আগে থেকেই জানেন যে লুপটি ঠিক <b>কতবার</b> ঘুরবে, তখন
                    <code>for</code> লুপ ব্যবহার করা সবচেয়ে বুদ্ধিমানের কাজ। এটি এক লাইনেই ইনিশিয়ালাইজেশন, কন্ডিশন এবং
                    আপডেট হ্যান্ডেল করে।
                </p>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-emerald-400">1</span>; i &lt;= <span class="text-emerald-400">5</span>; i++) 
{
    Console.WriteLine(<span class="text-amber-300">"Iteration: "</span> + i);
}
<span class="text-slate-500">// ১. int i = 1: শুরু (Initialization)</span>
<span class="text-slate-500">// ২. i &lt;= 5: শর্ত (Condition)</span>
<span class="text-slate-500">// ৩. i++: ধাপ (Increment/Decrement)</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Interation Loop Control</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">স্লাইডারটি পরিবর্তন করে লুপের লিমিট সেট করুন এবং দেখুন কীভাবে
                    ইটারেশনগুলো কাজ করছে।</p>

                <div
                    class="bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-sm shadow-inner grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-800">

                    <div
                        class="space-y-6 bg-slate-800/50 p-5 rounded-lg border border-slate-700/50 flex flex-col justify-between">
                        <div>
                            <label
                                class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex justify-between">
                                <span>Loop Limit Control</span>
                                <span
                                    class="text-amber-400 font-mono text-sm bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">{{
                                        loopCount }} Times</span>
                            </label>
                            <input type="range" min="1" max="10" v-model.number="loopCount"
                                class="w-full accent-amber-500 bg-slate-700 h-2 rounded-lg appearance-none cursor-pointer" />
                        </div>

                        <div class="space-y-2">
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Terminal
                                Output</span>
                            <div
                                class="bg-black/50 border border-slate-950 rounded p-4 font-mono text-xs min-h-[150px] max-h-[150px] overflow-y-auto space-y-1">
                                <div v-for="i in loopCount" :key="i" class="text-emerald-400">
                                    <span class="text-slate-600">&gt;</span> Runing Loop... Index: {{ i }} ✅
                                </div>
                                <div class="text-blue-400 border-t border-slate-800 pt-1 mt-1 font-bold">End of Loop
                                    Execution.</div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col justify-center">
                        <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">C# Syntax
                            Mapping</span>
                        <div class="font-mono text-xs md:text-sm leading-relaxed text-blue-300">
                            <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span
                                class="text-emerald-400">1</span>; i &lt;= <span class="text-amber-400">{{ loopCount
                                }}</span>; i++) <br />
                            { <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(<span class="text-amber-300">$"Running index:
                                {i}"</span>); <br />
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-amber-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        2</span>
                    <h2 class="text-2xl font-bold text-slate-900">While & Do-While Loop</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <i class="fa-solid fa-clock-rotate-left text-blue-500"></i> While (Pre-Condition)
                        </h3>
                        <p class="text-sm text-slate-600 leading-relaxed">এই লুপটি বডিতে ঢোকার আগেই কন্ডিশন চেক করে।
                            কন্ডিশন মিথ্যা হলে এটি <b>একবারও</b> রান করবে না।</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs">
<span class="text-purple-400">while</span> (isWorking) 
{
    <span class="text-slate-400">// Keep running until isWorking = false</span>
}</pre>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <i class="fa-solid fa-bolt text-amber-500"></i> Do-While (Post-Condition)
                        </h3>
                        <p class="text-sm text-slate-600 leading-relaxed">এটি আগে কাজ করে, পরে কন্ডিশন চেক করে। কন্ডিশন
                            মিথ্যা হলেও এটি অন্তত <b>একবার</b> নিশ্চিতভাবে রান করবে।</p>
                        <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs">
<span class="text-purple-400">do</span> {
    <span class="text-slate-400">// অন্তত একবার চলবেই</span>
} <span class="text-purple-400">while</span> (condition);</pre>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-amber-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        3</span>
                    <h2 class="text-2xl font-bold text-slate-900">Foreach Loop (Collection Loop)</h2>
                </div>
                <p class="text-slate-700 mb-4">অ্যারে (Array) বা লিস্ট (List) এর মতো কালেকশন থেকে ডাটা পড়ার জন্য এটি
                    সবচেয়ে ক্লিন এবং নিরাপদ পদ্ধতি। এতে ইনডেক্সিং এর ঝামেলা নেই।</p>

                <div
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
                    <span class="text-purple-400">string</span>[] fruits = { <span
                        class="text-amber-300">"Apple"</span>, <span class="text-amber-300">"Mango"</span>, <span
                        class="text-amber-300">"Banana"</span> }; <br /><br />
                    <span class="text-purple-400">foreach</span> (<span class="text-purple-400">string</span> f <span
                        class="text-purple-400">in</span> fruits) <br />
                    { <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(f); <span class="text-slate-400">// একে একে প্রতিটি ফ্রুট
                        প্রিন্ট হবে</span> <br />
                    }
                </div>
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 text-xs text-slate-700 mt-4 italic">
                    <strong>💡 প্রো টিপ:</strong> Foreach লুপ শুধুমাত্র ডাটা পড়ার (Read-only) জন্য ব্যবহৃত হয়। লুপের
                    ভেতর আইটেম পরিবর্তন করা যায় না।
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-rose-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        4</span>
                    <h2 class="text-2xl font-bold text-slate-900">Break vs Continue</h2>
                </div>
                <p class="text-slate-700 mb-6">লুপের ন্যাচারাল ফ্লো পরিবর্তন করার জন্য এই দুটি <b>Jump Statements</b>
                    ব্যবহৃত হয়।</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <h4 class="font-bold text-rose-600 mb-2 flex items-center gap-2">
                            <i class="fa-solid fa-stop"></i> Break (পুরোপুরি থামিয়ে দেওয়া)
                        </h4>
                        <p class="text-xs text-slate-600 mb-4">একটি নির্দিষ্ট শর্তে লুপকে একবারে শেষ করে দেয় এবং লুপের
                            বাইরে বের করে নিয়ে আসে।</p>
                        <pre class="bg-slate-900 text-pink-300 p-3 rounded font-mono text-xs">
<span class="text-purple-400">if</span> (i == <span class="text-emerald-400">3</span>) <span class="text-purple-400">break</span>; 
<span class="text-slate-500">// লুপ ৩ এ আসলে বন্ধ হয়ে যাবে</span></pre>
                    </div>

                    <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <h4 class="font-bold text-blue-600 mb-2 flex items-center gap-2">
                            <i class="fa-solid fa-forward-step"></i> Continue (স্কিপ করা)
                        </h4>
                        <p class="text-xs text-slate-600 mb-4">লুপের বর্তমান ইটারেশনটি স্কিপ করে সরাসরি পরবর্তী ইটারেশনে
                            চলে যায়।</p>
                        <pre class="bg-slate-900 text-sky-300 p-3 rounded font-mono text-xs">
<span class="text-purple-400">if</span> (i == <span class="text-emerald-400">3</span>) <span class="text-purple-400">continue</span>; 
<span class="text-slate-500">// ৩ নম্বর ইটারেশন স্কিপ হবে</span></pre>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-slate-900 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">ADVANCED</span>
                    <h2 class="text-2xl font-bold text-slate-900">Nested Loops</h2>
                </div>
                <p class="text-slate-700 mb-4">ম্যাট্রিক্স ডাটা হ্যান্ডেল করতে বা প্যাটার্ন তৈরি করতে একটি লুপের ভেতর
                    আরেকটি লুপ চালানো হয়।</p>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> row = <span class="text-emerald-400">1</span>; row &lt;= <span class="text-emerald-400">3</span>; row++) 
{
    <span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> col = <span class="text-emerald-400">1</span>; col &lt;= <span class="text-emerald-400">3</span>; col++) 
    {
        Console.Write(<span class="text-amber-300">"*"</span>); <span class="text-slate-500">// এটি ৩x৩ প্যাটার্ন তৈরি করবে</span>
    }
    Console.WriteLine();
}</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Loops Coding Challenge</h2>
                </div>

                <div class="space-y-6">
                    <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                        <span class="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">Challenge
                            #01</span>
                        <h3 class="font-bold text-slate-900 text-base mb-2">নামতা জেনারেটর (Multiplication Table)</h3>
                        <p class="text-sm text-slate-600 mb-4">একটি <code>for</code> লুপ ব্যবহার করে ইউজার ইনপুট দেওয়া
                            যেকোনো সংখ্যার নামতা (১ থেকে ১০ পর্যন্ত) প্রিন্ট করার কোড লিখুন।</p>
                        <details class="bg-slate-900 rounded-lg">
                            <summary
                                class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none">
                                💻 Solution Code</summary>
                            <pre
                                class="p-4 pt-0 text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800">
<span class="text-purple-400">int</span> n = <span class="text-emerald-400">5</span>;
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-emerald-400">1</span>; i &lt;= <span class="text-emerald-400">10</span>; i++) {
    Console.WriteLine(<span class="text-amber-300">$"{n} x {i} = {n * i}"</span>);
}</pre>
                        </details>
                    </div>

                    <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                        <span class="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">Challenge
                            #02</span>
                        <h3 class="font-bold text-slate-900 text-base mb-2">ইনপুট ভ্যালিডেশন (Keep Asking)</h3>
                        <p class="text-sm text-slate-600 mb-4">একটি <code>while</code> লুপ ব্যবহার করুন যা ইউজার থেকে
                            বারবার একটি সংখ্যা চাইবে। যতক্ষণ না ইউজার '০' ইনপুট দিচ্ছে, ততক্ষণ লুপ চলতেই থাকবে।</p>
                        <details class="bg-slate-900 rounded-lg">
                            <summary
                                class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none">
                                💻 Solution Code</summary>
                            <pre
                                class="p-4 pt-0 text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800">
<span class="text-purple-400">int</span> input = -<span class="text-emerald-400">1</span>;
<span class="text-purple-400">while</span> (input != <span class="text-emerald-400">0</span>) {
    Console.Write(<span class="text-amber-300">"Enter 0 to stop: "</span>);
    input = <span class="text-purple-400">int</span>.Parse(Console.ReadLine());
}</pre>
                        </details>
                    </div>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-amber-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">মেথডস এবং কোড রিইউজেবিলিটি (Methods & Reusable Code)</h3>
                    <p class="text-sm text-slate-400 mt-1">পরবর্তী মডিউলে আমরা শিখবো কীভাবে লজিকগুলোকে ছোট ছোট ব্লকে ভাগ
                        করে কোডকে আরও স্মার্ট ও রিইউজেবল করা যায়।</p>
                </div>
                <button
                    class="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Next: Methods <i class="fa-solid fa-arrow-right ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Interactive Lab এর জন্য রিয়াক্টিভ স্টেট
const loopCount = ref(5);
</script>