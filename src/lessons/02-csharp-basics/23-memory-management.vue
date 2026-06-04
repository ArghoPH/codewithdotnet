<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-emerald-600 font-mono text-sm tracking-widest uppercase font-bold">Module 23: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Garbage Collection &
                Memory</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">মেমরি লিক থেকে বাঁচার উপায়! সি-শার্পের গার্বেজ কালেক্টর
                (GC) কীভাবে ব্যাকগ্রাউন্ডে কাজ করে, মেমরি জেনারেশন কী এবং অ্যাপ্লিকেশন মেমরি কীভাবে অপ্টিমাইজ করতে হয়
                তার আর্কিটেকচার।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">The Managed Heap & Generations</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    C# হলো একটি <b>Managed Language</b>, যার মানে হলো মেমরি অ্যালোকেশন এবং ক্লিনআপের দায়িত্ব
                    <code>Garbage Collector (GC)</code> এর। যখন আমরা <code>new</code> কি-ওয়ার্ড দিয়ে কোনো অবজেক্ট তৈরি
                    করি, সেটি <b>Managed Heap</b>-এ জমা হয়। যখন অবজেক্টটির আর কোনো রেফারেন্স থাকে না, GC ব্যাকগ্রাউন্ডে
                    এসে সেটি ডিলিট করে মেমরি রিলিজ করে দেয়।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    পারফরম্যান্স ঠিক রাখার জন্য GC পুরো মেমরি একসাথে ক্লিন করে না। এটি মেমরিকে ৩টি ভাগে (Generations)
                    ভাগ করে: <b>Gen 0</b> (নতুন অবজেক্ট), <b>Gen 1</b> (মাঝারি বয়সের অবজেক্ট) এবং <b>Gen 2</b>
                    (দীর্ঘস্থায়ী অবজেক্ট যেমন স্ট্যাটিক ডাটা)।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <code class="text-emerald-700 font-bold text-xs block mb-1">Generation 0</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">সবচেয়ে নতুন অবজেক্ট এখানে থাকে (যেমন
                            লোকাল ভেরিয়েবল)। GC সবচেয়ে বেশি এই জেনারেশন ক্লিন করে।</p>
                    </div>
                    <div class="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                        <code class="text-emerald-800 font-bold text-xs block mb-1">Generation 1</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">Gen 0 ক্লিন করার পর যে অবজেক্টগুলো বেঁচে
                            যায় (survive), সেগুলো Gen 1 এ প্রমোশন পায়। এটি বাফার হিসেবে কাজ করে।</p>
                    </div>
                    <div class="p-4 bg-teal-50 border border-teal-100 rounded-xl">
                        <code class="text-teal-700 font-bold text-xs block mb-1">Generation 2 & LOH</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">যেগুলো অনেকক্ষণ বেঁচে থাকে তারা Gen 2 তে
                            যায়। ৮৫KB এর চেয়ে বড় অবজেক্ট সরাসরি Large Object Heap (LOH)-এ যায়।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">Forcing GC & IDisposable Pattern</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-slate-500">// 1. Forcing Garbage Collection (Rarely Recommended)</span>
<span class="text-emerald-400">GC</span>.Collect(); <span class="text-slate-500">// Suggests GC to clean up unreferenced objects</span>
<span class="text-emerald-400">GC</span>.WaitForPendingFinalizers();

<span class="text-slate-500">// 2. Best Practice: IDisposable for Unmanaged Resources (Files, DB connections)</span>
<span class="text-purple-400">public class</span> <span class="text-emerald-400">DatabaseConnection</span> : <span class="text-emerald-400">IDisposable</span> 
{
    <span class="text-purple-400">public void</span> Connect() { <span class="text-slate-500">/* Open Connection */</span> }

    <span class="text-slate-500">// This method is called when using block ends</span>
    <span class="text-purple-400">public void</span> Dispose() 
    {
        <span class="text-emerald-400">Console</span>.WriteLine(<span class="text-amber-300">"Releasing Unmanaged Resources immediately!"</span>);
        <span class="text-emerald-400">GC</span>.SuppressFinalize(<span class="text-purple-400">this</span>); <span class="text-slate-500">// Tells GC not to call finalizer</span>
    }
}

<span class="text-slate-500">// Usage:</span>
<span class="text-purple-400">using</span> (<span class="text-purple-400">var</span> db = <span class="text-purple-400">new</span> <span class="text-emerald-400">DatabaseConnection</span>()) 
{
    db.Connect();
} <span class="text-slate-500">// db.Dispose() is automatically called here</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-emerald-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Garbage Collector Simulator</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচে অবজেক্ট তৈরি করুন। "Active" অবজেক্টগুলো প্রোগ্রামে ব্যবহৃত
                    হচ্ছে, আর "Dereferenced" অবজেক্টগুলোর কাজ শেষ। "Run GC" ক্লিক করে দেখুন কীভাবে রেফারেন্স ছাড়া
                    অবজেক্ট ডিলিট হয় এবং বেঁচে থাকা অবজেক্ট পরবর্তী জেনারেশনে (Gen 1/2) প্রমোশন পায়।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Heap
                            Controls</span>

                        <div class="grid grid-cols-1 gap-2 mt-2">
                            <button @click="allocateObject"
                                class="bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm font-bold">
                                new Object()
                            </button>
                            <button @click="dereferenceRandom" :disabled="activeObjects.length === 0"
                                class="bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 disabled:text-slate-400 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm font-bold">
                                obj = null; (Dereference)
                            </button>
                            <button @click="runGC"
                                class="bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm font-bold mt-4">
                                GC.Collect()
                            </button>
                        </div>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs flex flex-col justify-between border border-slate-800">
                        <div>
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Managed
                                    Heap Visualizer</span>
                                <span
                                    class="text-[10px] bg-slate-800 text-emerald-400 px-2 py-0.5 rounded border border-slate-700">Heap
                                    Size: {{ heap.length }}</span>
                            </div>

                            <div
                                class="bg-black/50 border border-slate-950 p-4 rounded-lg min-h-[180px] flex flex-col gap-2 max-h-[220px] overflow-y-auto">
                                <div v-if="heap.length === 0" class="text-slate-600 italic text-center py-10">
                                    [ Heap is empty. Allocate objects. ]
                                </div>
                                <div v-for="obj in heap" :key="obj.id"
                                    :class="['flex justify-between items-center px-3 py-2 rounded border',
                                        obj.isActive ? 'bg-emerald-900/40 border-emerald-700/50 text-emerald-300' : 'bg-rose-900/20 border-rose-800/30 text-rose-400 opacity-60 line-through']">
                                    <span>{{ obj.name }}</span>
                                    <div class="flex gap-3">
                                        <span class="text-[9px] uppercase tracking-widest"
                                            :class="obj.isActive ? 'text-emerald-500' : 'text-rose-500'">{{ obj.isActive
                                                ? 'Active' : 'Orphan' }}</span>
                                        <span class="bg-slate-800 px-2 rounded text-slate-300">Gen {{ obj.generation
                                            }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="text-[10px] text-slate-400 border-t border-slate-800 pt-3 mt-3 flex justify-between items-center">
                            <span>Status: {{ gcStatus }}</span>
                            <button @click="resetEngine" class="hover:text-white underline">Reset Heap</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">The Memory Leak Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span
                        class="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-1">Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Implement Safe File Streaming</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. একটি ক্লাস <code>FileHandler</code> তৈরি করুন যা <code>IDisposable</code> ইমপ্লিমেন্ট
                        করে।<br />
                        ২. ক্লাসটি ইনিশিয়ালাইজ হওয়ার সময় একটি <code>FileStream</code> ওপেন করবে এবং
                        <code>Dispose()</code> মেথডের ভেতর সেটি ক্লোজ করবে, যাতে মেমরি লিক না হয়।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Architectural Solution
                        </summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">using</span> System;
<span class="text-purple-400">using</span> System.IO;

<span class="text-purple-400">public class</span> <span class="text-emerald-400">FileHandler</span> : <span class="text-emerald-400">IDisposable</span>
{
    <span class="text-purple-400">private</span> <span class="text-emerald-400">FileStream</span> _stream;

    <span class="text-purple-400">public</span> FileHandler(<span class="text-purple-400">string</span> path)
    {
        _stream = <span class="text-purple-400">new</span> <span class="text-emerald-400">FileStream</span>(path, <span class="text-emerald-400">FileMode</span>.OpenOrCreate);
        <span class="text-emerald-400">Console</span>.WriteLine(<span class="text-amber-300">"Stream Opened."</span>);
    }

    <span class="text-slate-500">// Implementing IDisposable interface</span>
    <span class="text-purple-400">public void</span> Dispose()
    {
        <span class="text-purple-400">if</span> (_stream != <span class="text-purple-400">null</span>)
        {
            _stream.Dispose(); <span class="text-slate-500">// Release unmanaged resource</span>
            <span class="text-emerald-400">Console</span>.WriteLine(<span class="text-amber-300">"Stream Closed Safely."</span>);
        }
        <span class="text-emerald-400">GC</span>.SuppressFinalize(<span class="text-purple-400">this</span>);
    }
}</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-emerald-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">Multithreading & TPL</h3>
                    <p class="text-sm text-slate-400 mt-1">অসাধারণ! আপনি মেমরি অপ্টিমাইজেশন শিখে গেছেন। পরবর্তী মডিউলে
                        আমরা সি-শার্পের <b>Multithreading এবং Task Parallel Library (TPL)</b> নিয়ে আলোচনা করবো, যার
                        মাধ্যমে আপনি একই সাথে একাধিক কাজ (Parallel Processing) করিয়ে অ্যাপ্লিকেশনের স্পিড কয়েকগুণ বাড়িয়ে
                        ফেলতে পারবেন!</p>
                </div>
                <router-link to="/lessons/multithreading"
                    class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Advance to Multithreading <i class="fa-solid fa-bolt ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const heap = ref([]);
const gcStatus = ref('Standing By');
let objCounter = 1;

const activeObjects = computed(() => heap.value.filter(o => o.isActive));

const allocateObject = () => {
    heap.value.push({
        id: objCounter,
        name: `CustomerData_Obj_${objCounter}`,
        isActive: true,
        generation: 0
    });
    objCounter++;
    gcStatus.value = 'Memory Allocated in Gen 0';
};

const dereferenceRandom = () => {
    const actives = heap.value.filter(o => o.isActive);
    if (actives.length > 0) {
        // Find a random active object
        const randomIdx = Math.floor(Math.random() * actives.length);
        const objToDereference = actives[randomIdx];

        // Find it in the main heap and mark as inactive (orphan)
        const heapIdx = heap.value.findIndex(o => o.id === objToDereference.id);
        if (heapIdx !== -1) {
            heap.value[heapIdx].isActive = false;
            gcStatus.value = `${objToDereference.name} Reference Removed`;
        }
    }
};

const runGC = () => {
    gcStatus.value = 'GC Running... Sweeping orphans & Promoting survivors';

    setTimeout(() => {
        // Remove inactive objects (Sweep)
        heap.value = heap.value.filter(o => o.isActive);

        // Promote survivors (Max Gen 2)
        heap.value.forEach(o => {
            if (o.generation < 2) {
                o.generation++;
            }
        });

        gcStatus.value = 'GC Cycle Complete. Memory Compacted.';
    }, 600);
};

const resetEngine = () => {
    heap.value = [];
    objCounter = 1;
    gcStatus.value = 'Heap Cleared';
};
</script>