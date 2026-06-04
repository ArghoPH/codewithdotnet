<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-sky-600 font-mono text-sm tracking-widest uppercase font-bold">Module 16: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Collections & Lists
            </h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">ডাইনামিক ডাটা হ্যান্ডেল করার আলটিমেট টুলস! রানটাইমে
                মেমরি রিসাইজ করে কীভাবে হাজারো অবজেক্ট এফিশিয়েন্টলি ম্যানেজ করতে হয় তার কমপ্লিট গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-sky-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">Why Generic Collections?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    আমরা জানি সাধারণ অ্যারের (`Array`) সাইজ বা ল্যান্থ তৈরির সময়ই ফিক্সড করে দিতে হয় (যেমন:
                    <code>int[] numbers = new int[5]</code>)। কিন্তু রিয়েল-ওয়ার্ল্ড অ্যাপ্লিকেশনে ডাটাবেজ থেকে কয়টি
                    ডাটা আসবে তা আগে থেকে জানা সম্ভব নয়।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    C# <code>System.Collections.Generic</code> নেমস্পেসের কালেকশনগুলো রানটাইমে স্বয়ংক্রিয়ভাবে মেমরি
                    রিসাইজ (Grow or Shrink) করতে পারে।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <div class="flex items-center gap-2 mb-2 text-sky-700 font-bold">
                            <i class="fa-solid fa-list-ol"></i>
                            <h3>List&lt;T&gt;</h3>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            এটি একটি ডাইনামিক অ্যারে। এতে যেকোনো ইনডেক্সে ডাটা অ্যাড (Add), রিমুভ (Remove) বা ইনসার্ট
                            করা যায়। ইনডেক্সিং শুরু হয় ০ থেকে।
                        </p>
                    </div>

                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <div class="flex items-center gap-2 mb-2 text-indigo-700 font-bold">
                            <i class="fa-solid fa-key"></i>
                            <h3>Dictionary&lt;TKey, TValue&gt;</h3>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            এটি Key-Value পেয়ার হিসেবে ডাটা সেভ করে। কোনো ইনডেক্স নম্বর ছাড়াই একটি ইউনিক 'Key' দিয়ে খুব
                            দ্রুত মেমরি থেকে 'Value' খুঁজে বের করা যায়।
                        </p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-sky-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">C# Collections Syntax</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-using font-purple-400">using</span> System.Collections.Generic;

<span class="text-slate-500">// 1. Working with List&lt;T&gt;</span>
<span class="text-emerald-400">List</span>&lt;<span class="text-purple-400">string</span>&gt; names = <span class="text-purple-400">new</span> <span class="text-emerald-400">List</span>&lt;<span class="text-purple-400">string</span>&gt;();
names.Add(<span class="text-amber-300">"Sohan"</span>);
names.Add(<span class="text-amber-300">"Karim"</span>);
names.Remove(<span class="text-amber-300">"Karim"</span>); <span class="text-slate-500">// মেমরি থেকে স্বয়ংক্রিয়ভাবে মুছে যাবে</span>

<span class="text-slate-500">// 2. Working with Dictionary&lt;K, V&gt;</span>
<span class="text-emerald-400">Dictionary</span>&lt;<span class="text-purple-400">int</span>, <span class="text-purple-400">string</span>&gt; userAuth = <span class="text-purple-400">new</span> <span class="text-emerald-400">Dictionary</span>&lt;<span class="text-purple-400">int</span>, <span class="text-purple-400">string</span>&gt;();
userAuth.Add(<span class="text-emerald-400">101</span>, <span class="text-amber-300">"AdminToken"</span>);
<span class="text-purple-400">string</span> token = userAuth[<span class="text-emerald-400">101</span>]; <span class="text-slate-500">// Fast lookup via Key</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-sky-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Dynamic List Operations Simulator</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের কন্ট্রোল প্যানেল থেকে আইটেম যুক্ত বা বিয়োগ করুন। রানটাইমে
                    মেমরি ভেক্টরের ইনডেক্স এবং সাইজ কীভাবে ডাইনামিকালি রিসাইজ হচ্ছে তা ভিজ্যুয়ালাইজ করুন।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">List
                            Controller</span>

                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1">Item Name:</label>
                            <input v-model="newItem" type="text"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                                placeholder="e.g. Laptop" />
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <button @click="addItem"
                                class="bg-sky-600 hover:bg-sky-700 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm">
                                list.Add(item);
                            </button>
                            <button @click="popItem" :disabled="itemsList.length === 0"
                                class="bg-rose-600 hover:bg-rose-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm">
                                list.RemoveAt(last);
                            </button>
                        </div>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-3 uppercase tracking-widest text-[10px] font-bold">Managed
                                Heap Heap: List&lt;string&gt;</span>

                            <div v-if="itemsList.length === 0"
                                class="text-slate-600 border border-dashed border-slate-800 p-6 text-center rounded-lg">
                                [ Empty List Object - Count: 0 ]
                            </div>

                            <div class="space-y-2 max-h-40 overflow-y-auto pr-1">
                                <div v-for="(item, index) in itemsList" :key="index"
                                    class="bg-slate-800 border border-slate-700 p-2.5 rounded flex justify-between items-center">
                                    <span class="text-sky-400 font-bold">Index [{{ index }}]</span>
                                    <span class="text-amber-400">"{{ item }}"</span>
                                </div>
                            </div>
                        </div>

                        <div
                            class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3 flex justify-between items-center">
                            <span>list.Count = {{ itemsList.length }}</span>
                            <button @click="itemsList = []"
                                class="text-slate-400 hover:text-white underline cursor-pointer">Clear All</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Collections Architecture Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Inventory
                        Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Create an Inventory Batch Management System</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. একটি ডাইনামিক ইন্টিজার লিস্ট <code>List&lt;int&gt; stockBatch</code> তৈরি করুন।<br />
                        ২. এতে তিনটি ব্যাচ আইডি (১০২, ২০5, ৩০৮) যুক্ত করুন এবং লুপ চালিয়ে প্রিন্ট করুন।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Implementation Code</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">List</span>&lt;<span class="text-purple-400">int</span>&gt; stockBatch = <span class="text-purple-400">new</span> <span class="text-purple-400">List</span>&lt;<span class="text-purple-400">int</span>&gt;();
stockBatch.Add(<span class="text-emerald-400">102</span>);
stockBatch.Add(<span class="text-emerald-400">205</span>);
stockBatch.Add(<span class="text-emerald-400">308</span>);

<span class="text-purple-400">foreach</span> (<span class="text-purple-400">int</span> batch <span class="text-purple-400">in</span> stockBatch)
{
    Console.WriteLine(<span class="text-amber-300">$"Batch ID: {batch}"</span>);
}</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-sky-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">LINQ (Language Integrated Query)</h3>
                    <p class="text-sm text-slate-400 mt-1">কালেকশনস নিয়ে কাজ করার পর সবচেয়ে গুরুত্বপূর্ণ পার্ট হলো ডাটা
                        ফিল্টারিং। পরবর্তী চ্যাপ্টারে আমরা শিখবো সি-শার্পের অন্যতম সেরা ফিচার <b>LINQ</b>, যার মাধ্যমে
                        বিশাল কোনো লিস্ট বা কালেকশন থেকে মাত্র এক লাইনে ডাটা কোয়েরি ও ফিল্টার করা যায়।</p>
                </div>
                <router-link to="/lessons/linq"
                    class="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Advance to LINQ <i class="fa-solid fa-filter ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const newItem = ref('Mobile Phone');
const itemsList = ref(['Laptop', 'Tablet']);

const addItem = () => {
    if (!newItem.value.trim()) return;
    itemsList.value.push(newItem.value);
    newItem.value = '';
};

const popItem = () => {
    if (itemsList.value.length > 0) {
        itemsList.value.pop();
    }
};
</script>