<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-teal-600 font-mono text-sm tracking-widest uppercase font-bold">Module 15: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Generics</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">টাইপ-সেফ কোড পুনর্ব্যবহারের ক্ষমতা! নির্দিষ্ট ডাটা টাইপ
                উল্লেখ না করে কীভাবে ডাইনামিক এবং মেমরি-এফিশিয়েন্ট আর্কিটেকচার তৈরি করতে হয় তার গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-teal-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">What are Generics?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    <b>Generics</b> হলো সি-শার্পের এমন একটি পাওয়ারফুল ফিচার যার মাধ্যমে আমরা এমন ক্লাস, মেথড বা
                    ইন্টারফেস তৈরি করতে পারি যা যেকোনো ডাটা টাইপের সাথে খাপ খাইয়ে নিতে পারে, কিন্তু একই সাথে <b>Type
                        Safety</b> বজায় রাখে।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    সহজ কথায়, কোড লেখার সময় আমরা আসল ডাটা টাইপ (যেমন: int, string) উল্লেখ না করে একটি প্লেসহোল্ডার বা
                    প্যারামিটার ব্যবহার করি (সাধারণত <code>&lt;T&gt;</code>)। যখন অবজেক্ট তৈরি বা মেথড কল করা হয়, তখন
                    আসল টাইপটি নির্ধারণ করে দেওয়া হয়।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div class="p-4 bg-teal-50 border border-teal-100 rounded-xl">
                        <h3 class="text-sm font-bold text-teal-800 font-mono mb-1">Code Reusability</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">আলাদা আলাদা ডাটা টাইপের জন্য একই লজিক বারবার
                            ডুপ্লিকেট করে লিখতে হয় না। একটি কোডই সবার জন্য কাজ করে।</p>
                    </div>
                    <div class="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                        <h3 class="text-sm font-bold text-blue-800 font-mono mb-1">Performance (No Boxing/Unboxing)</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Generics অবজেক্ট টাইপ কাস্টিং এড়ায়, যার ফলে
                            মেমরির ওপর চাপ কমে এবং রানটাইম পারফরম্যান্স বহুগুণ বেড়ে যায়।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-teal-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">Generic Class & Method Structure</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-slate-500">// Generic Class definition using placeholder &lt;T&gt;</span>
<span class="text-purple-400">public class</span> <span class="text-emerald-400">DataBox</span>&lt;<span class="text-teal-400">T</span>&gt;
{
    <span class="text-purple-400">public</span> <span class="text-teal-400">T</span> Content { <span class="text-purple-400">get</span>; <span class="text-purple-400">set</span>; }
}

<span class="text-slate-500">// Execution with different data types:</span>
<span class="text-emerald-400">DataBox</span>&lt;<span class="text-purple-400">int</span>&gt; intBox = <span class="text-purple-400">new</span> <span class="text-emerald-400">DataBox</span>&lt;<span class="text-purple-400">int</span>&gt;();
intBox.Content = <span class="text-emerald-400">101</span>;

<span class="text-emerald-400">DataBox</span>&lt;<span class="text-purple-400">string</span>&gt; strBox = <span class="text-purple-400">new</span> <span class="text-emerald-400">DataBox</span>&lt;<span class="text-purple-400">string</span>&gt;();
strBox.Content = <span class="text-amber-300">"Hello Generics"</span>;</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-teal-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Dynamic DataBox Laboratory</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের ল্যাবে একটি সিঙ্গেল জেনেরিক ক্লাস
                    <code>DataBox&lt;T&gt;</code> ব্যাক-এন্ডে কাজ করছে। আপনি ড্রপডাউন থেকে যে টাইপ সিলেক্ট করবেন,
                    রানটাইমে প্লেসহোল্ডার <code>&lt;T&gt;</code> ঠিক সেই টাইপে রূপান্তরিত হয়ে ডাটা প্রসেস করবে।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <div>
                            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select
                                Target Type &lt;T&gt;:</label>
                            <select v-model="selectedType"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none font-mono">
                                <option value="int">int (Integer Number)</option>
                                <option value="string">string (Textual Words)</option>
                                <option value="bool">bool (Boolean Flag)</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1">Input Payload Value:</label>
                            <input v-model="inputValue" type="text"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none font-mono"
                                placeholder="Enter value matching type" />
                        </div>

                        <button @click="pushToBox"
                            class="w-full bg-teal-600 hover:bg-teal-700 text-white font-mono text-xs py-2.5 rounded-lg transition shadow-sm">
                            Instantiate: new DataBox&lt;{{ selectedType }}&gt;()
                        </button>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-3 uppercase tracking-widest text-[10px] font-bold">Type-Safe
                                Memory Buffer</span>
                            <div
                                class="bg-black/50 border border-slate-950 p-4 rounded-lg min-h-[110px] flex flex-col justify-center space-y-2">
                                <div v-if="boxItems.length === 0" class="text-slate-600 italic text-center">
                                    DataBox memory stack is empty...
                                </div>
                                <div v-for="(item, idx) in boxItems" :key="idx"
                                    class="flex justify-between items-center border-b border-slate-800 pb-1.5 last:border-0">
                                    <span class="text-slate-400">DataBox&lt;<span class="text-cyan-400">{{ item.type
                                            }}</span>&gt;</span>
                                    <span class="text-amber-400 font-bold">Content: {{ item.val }}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3 flex justify-between items-center">
                            <span>Status: Managed & Safe</span>
                            <button @click="boxItems = []"
                                class="text-slate-400 hover:text-white underline cursor-pointer">Clear Buffer</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Generics Architecture Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Enterprise
                        Pattern</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Create a Generic Printer Method</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. একটি ক্লাস তৈরি করুন <code>Utility</code> যার একটি জেনেরিক মেথড থাকবে
                        <code>PrintData&lt;T&gt;(T data)</code>।<br />
                        ২. মেথডটির কাজ হবে যেকোনো ডাটা টাইপ ইনপুট নিয়ে কনসোলে প্রিন্ট করা।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Solution Code</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">public class</span> <span class="text-emerald-400">Utility</span>
{
    <span class="text-purple-400">public void</span> PrintData&lt;<span class="text-teal-400">T</span>&gt;(<span class="text-teal-400">T</span> data)
    {
        Console.WriteLine(<span class="text-amber-300">$"Data Value: {data}"</span>);
    }
}

<span class="text-slate-500">// Usage:</span>
<span class="text-emerald-400">Utility</span> util = <span class="text-purple-400">new</span> <span class="text-emerald-400">Utility</span>();
util.PrintData&lt;<span class="text-purple-400">int</span>&gt;(<span class="text-emerald-400">500</span>);
util.PrintData&lt;<span class="text-purple-400">string</span>&gt;(<span class="text-amber-300">"Sohan"</span>);</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-teal-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">Collections & Lists</h3>
                    <p class="text-sm text-slate-400 mt-1">জেনেরিক্স শেখার পর লার্নাররা এখন ডায়নামিক স্ট্রাকচার বোঝে। এর
                        ঠিক পরেই আমরা সি-শার্পের সবচেয়ে বেশি ব্যবহৃত ফিচার—<b>Collections</b> (বিশেষ করে ডাইনামিক
                        <code>List&lt;T&gt;</code> এবং <code>Dictionary&lt;TKey, TValue&gt;</code>) নিয়ে বিশদ আলোচনা করব
                        যা রিয়েল প্রজেক্টে ডাটা অ্যারে হ্যান্ডেল করার জন্য অপরিহার্য।
                    </p>
                </div>
                <router-link to="/lessons/collections-lists"
                    class="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Advance to Collections <i class="fa-solid fa-list-check ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedType = ref('int');
const inputValue = ref('42');
const boxItems = ref([]);

const pushToBox = () => {
    if (!inputValue.value.trim()) return;

    boxItems.value.push({
        type: selectedType.value,
        val: inputValue.value
    });

    inputValue.value = '';
};
</script>