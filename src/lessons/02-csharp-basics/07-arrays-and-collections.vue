<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-12 text-center">
            <span class="text-teal-600 font-mono text-sm tracking-widest uppercase font-bold">Module 07: Data
                Structures</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">C# Arrays &
                Collections</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">আলাদা ভেরিয়েবল তৈরির দিন শেষ! একসাথে অনেক ডেটা মেমরিতে
                গুছিয়ে রাখার জন্য অ্যারে থেকে শুরু করে মডার্ন ডায়নামিক লিস্টের কমপ্লিট গাইডলাইন।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-12">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-teal-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        1</span>
                    <h2 class="text-2xl font-bold text-slate-900">Single-Dimensional Array</h2>
                </div>

                <p class="text-slate-700 mb-4">অ্যারে হলো একই টাইপের ডেটার একটি ফিক্সড সাইজ কালেকশন। অ্যারের প্রতিটি
                    উপাদান একটি নির্দিষ্ট **Index (ইনডেক্স)** নম্বরে থাকে, যা সবসময় <code>0</code> থেকে শুরু হয়।</p>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
<span class="text-slate-500">// ৫টি পূর্ণসংখ্যা রাখার মতো একটি অ্যারে ডিক্লেয়ারেশন</span>
<span class="text-purple-400">int</span>[] numbers = <span class="text-purple-400">new</span> <span class="text-purple-400">int</span>[<span class="text-emerald-400">5</span>];

<span class="text-slate-500">// সরাসরি ভ্যালুসহ ডিক্লেয়ারেশন</span>
<span class="text-purple-400">string</span>[] cars = { <span class="text-amber-300">"Tesla"</span>, <span class="text-amber-300">"BMW"</span>, <span class="text-amber-300">"Audi"</span> };

<span class="text-slate-500">// ইনডেক্স দিয়ে ডাটা রিড বা রাইট করা</span>
cars[<span class="text-emerald-400">0</span>] = <span class="text-amber-300">"Toyota"</span>; <span class="text-slate-400">// Tesla পরিবর্তন হয়ে Toyota হবে</span>
Console.WriteLine(cars[<span class="text-emerald-400">2</span>]); <span class="text-slate-400">// Output: Audi</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Interactive Array Visualizer</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের ইনডেক্স ইনপুট পরিবর্তন করে দেখুন মেমরি থেকে কীভাবে
                    নির্দিষ্ট উপাদানটি খুঁজে বের করা হয় এবং ইনডেক্স রেঞ্জের বাইরে গেলে কী এরর আসে।</p>

                <div
                    class="bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-sm border border-slate-800 space-y-6">

                    <div>
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Memory
                            Layout: string[] programmingLanguages</span>
                        <div class="grid grid-cols-4 gap-2 text-center text-xs md:text-sm">
                            <div v-for="(lang, index) in sampleArray" :key="index"
                                :class="['p-3 rounded-lg border transition-all duration-300',
                                    selectedIndex === index ? 'bg-teal-500/20 border-teal-400 text-teal-300 scale-105 font-bold shadow-md' : 'bg-slate-800 border-slate-700 text-slate-400']">
                                <div class="text-[10px] text-slate-500">Index [{{ index }}]</div>
                                <div class="mt-1">{{ lang }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
                        <div class="space-y-4">
                            <div>
                                <label
                                    class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Target
                                    Index Input:</label>
                                <input type="number" v-model.number="selectedIndex"
                                    class="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 font-mono text-amber-400 focus:outline-none focus:border-teal-500"
                                    placeholder="Enter index (0 to 3)" />
                            </div>
                        </div>

                        <div class="bg-black/40 p-4 rounded-lg flex flex-col justify-center text-xs md:text-sm">
                            <div><span class="text-slate-500">&gt;</span> Execution Status:</div>
                            <div v-if="selectedIndex >= 0 && selectedIndex < sampleArray.length"
                                class="text-emerald-400 mt-1 font-bold">
                                Success: programmingLanguages[{{ selectedIndex }}] =&gt; "{{ sampleArray[selectedIndex]
                                }}"
                            </div>
                            <div v-else class="text-rose-400 mt-1 font-bold animate-pulse">
                                💥 IndexOutOfRangeException: মেমরির সীমানার বাইরে চলে গেছেন!
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-teal-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        2</span>
                    <h2 class="text-2xl font-bold text-slate-900">Multi-Dimensional & Jagged Arrays</h2>
                </div>
                <p class="text-slate-700 mb-6">বাস্তব জীবনের জটিল ডেটা যেমন ম্যাট্রিক্স বা টেবিল হ্যান্ডেল করার জন্য
                    C#-এ দু’ধরণের বহুমাত্রিক অ্যারে আছে:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <h4 class="font-bold text-slate-900 text-sm mb-2">১. 2D Array (ম্যাট্রিক্স বা গ্রিড)</h4>
                        <p class="text-xs text-slate-600 mb-3">এর প্রতিটি রো (Row) এবং কলাম (Column) এর সাইজ একদম সমান
                            থাকে।</p>
                        <pre class="bg-slate-900 text-blue-300 p-3 rounded font-mono text-xs">
<span class="text-purple-400">int</span>[,] matrix = <span class="text-purple-400">new</span> <span class="text-purple-400">int</span>[<span class="text-emerald-400">2</span>, <span class="text-emerald-400">3</span>]; <span class="text-slate-400">// 2 Rows, 3 Columns</span>
matrix[<span class="text-emerald-400">0</span>, <span class="text-emerald-400">1</span>] = <span class="text-emerald-400">5</span>;</pre>
                    </div>

                    <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <h4 class="font-bold text-slate-900 text-sm mb-2">২. Jagged Array (অ্যারের ভেতর অ্যারে)</h4>
                        <p class="text-xs text-slate-600 mb-3">একে "Array of Arrays" বলা হয়। এর প্রতিটি রো-এর সাইজ ভিন্ন
                            ভিন্ন হতে পারে।</p>
                        <pre class="bg-slate-900 text-blue-300 p-3 rounded font-mono text-xs">
<span class="text-purple-400">int</span>[][] jagged = <span class="text-purple-400">new</span> <span class="text-purple-400">int</span>[<span class="text-emerald-400">3</span>][];
jagged[<span class="text-emerald-400">0</span>] = <span class="text-purple-400">new</span> <span class="text-purple-400">int</span>[<span class="text-emerald-400">2</span>]; <span class="text-slate-400">// প্রথম রো-তে ২টি উপাদান</span>
jagged[<span class="text-emerald-400">1</span>] = <span class="text-purple-400">new</span> <span class="text-purple-400">int</span>[<span class="text-emerald-400">5</span>]; <span class="text-slate-400">// দ্বিতীয় রো-তে ৫টি উপাদান</span></pre>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-purple-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">PRO
                        LEVEL</span>
                    <h2 class="text-2xl font-bold text-slate-900">Dynamic Collections &lt;T&gt;</h2>
                </div>
                <p class="text-slate-700 mb-4">ট্রেডিশনাল অ্যারের সবচেয়ে বড় সমস্যা হলো এর সাইজ বা দৈর্ঘ্য ফিক্সড
                    (Fixed)। কিন্তু রিয়েল-ওয়ার্ল্ড অ্যাপ্লিকেশনে ডেটা যেকোনো সময় বাড়তে বা কমতে পারে। এই সমস্যার সমাধান
                    করে <code>List&lt;T&gt;</code>, যা একটি ডায়নামিক বা পরিবর্তনশীল অ্যারে।</p>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
<span class="text-purple-400">using</span> System.Collections.Generic;

<span class="text-slate-500">// স্ট্রিং টাইপের একটি ডায়নামিক লিস্ট তৈরি</span>
List&lt;<span class="text-purple-400">string</span>&gt; students = <span class="text-purple-400">new</span> List&lt;<span class="text-purple-400">string</span>&gt;();

<span class="text-slate-500">// রানটাইমে ইচ্ছামতো ডাটা যোগ করা</span>
students.Add(<span class="text-amber-300">"Rahim"</span>);
students.Add(<span class="text-amber-300">"Karim"</span>);

Console.WriteLine(students.Count); <span class="text-slate-400">// Output: 2 (লিস্টের সাইজ জানার জন্য Count বসে)</span>

<span class="text-slate-500">// ডাটা ডিলিট করা</span>
students.Remove(<span class="text-amber-300">"Rahim"</span>);</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Arrey and Loop Combined Challange</h2>
                </div>

                <div class="space-y-6">
                    <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                        <span class="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">Challenge
                            #01</span>
                        <h3 class="font-bold text-slate-900 text-base mb-2">অ্যারের সর্বোচ্চ সংখ্যা খোঁজা (Find Maximum)
                        </h3>
                        <p class="text-sm text-slate-600 mb-4">একটি ইন্টিজার অ্যারে
                            <code>int[] numbers = { 13, 56, 2, 89, 24 };</code> থেকে লুপ চালিয়ে সবচেয়ে বড় সংখ্যাটি খুঁজে
                            বের করার লজিক লিখুন।
                        </p>
                        <details class="bg-slate-900 rounded-lg">
                            <summary
                                class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none">
                                💻 Solution Code</summary>
                            <pre
                                class="p-4 pt-0 text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800">
<span class="text-purple-400">int</span>[] numbers = { <span class="text-emerald-400">13</span>, <span class="text-emerald-400">56</span>, <span class="text-emerald-400">2</span>, <span class="text-emerald-400">89</span>, <span class="text-emerald-400">24</span> };
<span class="text-purple-400">int</span> max = numbers[<span class="text-emerald-400">0</span>];

<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-emerald-400">1</span>; i &lt; numbers.Length; i++) {
    <span class="text-purple-400">if</span> (numbers[i] &gt; max) {
        max = numbers[i];
    }
}
Console.WriteLine(<span class="text-amber-300">"Max value is: "</span> + max); <span class="text-slate-400">// Output: 89</span></pre>
                        </details>
                    </div>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-teal-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">C# মেথডস ও ফাংশন (Methods & Reusability)</h3>
                    <p class="text-sm text-slate-400 mt-1">একই কোড বারবার কপি-পেস্ট না করে কীভাবে অবজেক্ট-ওরিয়েন্টেড
                        উপায়ে মেথড বা ফাংশন তৈরি করে রিইউজ করা যায়, তা শিখবো পরের পর্বে।</p>
                </div>
                <router-link to="/lessons/methods-and-functions"
                    class="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Next: Methods & Functions <i class="fa-solid fa-code ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Live Lab Reactive State
const sampleArray = ['C#', 'JavaScript', 'Python', 'Go'];
const selectedIndex = ref(0);
</script>