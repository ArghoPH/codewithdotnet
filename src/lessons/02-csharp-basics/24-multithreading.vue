<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-blue-600 font-mono text-sm tracking-widest uppercase font-bold">Module 24: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Multithreading & TPL
            </h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">একসাথে অনেক কাজ করার জাদুকরী ক্ষমতা! সি-শার্পে প্যারালাল
                প্রসেসিং, টাস্ক (Task) ম্যানেজমেন্ট এবং অ্যাসিনক্রোনাস প্রোগ্রামিংয়ের মাধ্যমে অ্যাপ্লিকেশন পারফরম্যান্স
                বাড়ানোর কমপ্লিট গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">Threading vs Task Parallelism</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    ঐতিহ্যগতভাবে সি-শার্পে <code>Thread</code> ক্লাস ব্যবহার করে প্যারালাল কাজ করা হতো। কিন্তু এখন
                    আধুনিক সি-শার্পে আমরা <b>Task Parallel Library (TPL)</b> ব্যবহার করি। টাস্ক হলো থ্রেডের একটি
                    উচ্চ-স্তরের (High-level) অ্যাবস্ট্রাকশন, যা নিজে থেকেই থ্রেড পুল (Thread Pool) ম্যানেজ করে, ফলে
                    আমাদের থ্রেড ক্রিয়েট করার ঝামেলার প্রয়োজন হয় না।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    অ্যাসিনক্রোনাস প্রোগ্রামিংয়ের ক্ষেত্রে আমরা <code>async</code> এবং <code>await</code> কি-ওয়ার্ড
                    ব্যবহার করি, যাতে ইউজার ইন্টারফেস (UI) ব্লক না হয়ে ব্যাকগ্রাউন্ডে ভারী কাজ (যেমন ডাটাবেস কোয়েরি বা
                    ফাইল ডাউনলোড) সম্পন্ন হতে পারে।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <code class="text-blue-700 font-bold text-xs block mb-1">Task</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">এটি একটি异步 (Asynchronous) অপারেশনকে
                            রিপ্রেজেন্ট করে। টাস্ক শেষ হলে তা একটি রেজাল্ট বা স্টেটাস রিটার্ন করে।</p>
                    </div>
                    <div class="p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                        <code class="text-blue-800 font-bold text-xs block mb-1">async/await</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">কোডকে রিডেবল রেখে নন-ব্লকিং অ্যাসিনক্রোনাস
                            কাজ করার সবচেয়ে আধুনিক ও জনপ্রিয় উপায়।</p>
                    </div>
                    <div class="p-4 bg-sky-50 border border-sky-100 rounded-xl">
                        <code class="text-sky-700 font-bold text-xs block mb-1">Parallel.For</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">বড় লুপের ডাটা প্রসেসিংয়ের ক্ষেত্রে এটি
                            অটোমেটিক মাল্টি-কোর সিপিইউ ব্যবহার করে কাজের গতি বাড়িয়ে দেয়।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">Task-Based Asynchrony</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-purple-400">using</span> System.Threading.Tasks;

<span class="text-slate-500">// Modern async method pattern</span>
<span class="text-purple-400">public async</span> <span class="text-emerald-400">Task</span>&lt;<span class="text-purple-400">string</span>&gt; FetchDataAsync()
{
    <span class="text-purple-400">await</span> <span class="text-emerald-400">Task</span>.Delay(<span class="text-amber-300">2000</span>); <span class="text-slate-500">// Simulate IO bound work</span>
    <span class="text-purple-400">return</span> <span class="text-amber-300">"Data Retrieved Successfully!"</span>;
}

<span class="text-slate-500">// Parallel Execution</span>
<span class="text-purple-400">var</span> task1 = FetchDataAsync();
<span class="text-purple-400">var</span> task2 = FetchDataAsync();

<span class="text-purple-400">await</span> <span class="text-emerald-400">Task</span>.WhenAll(task1, task2);</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-blue-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Parallel Work Scheduler</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের প্যানেলে "Start Tasks" এ ক্লিক করুন। দেখুন কীভাবে আলাদা
                    আলাদা টাস্কগুলো সমান্তরালভাবে (Parallel) কাজ করছে এবং মেইন থ্রেডকে ব্লক করছে না।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Control
                            Panel</span>
                        <button @click="startParallelTasks" :disabled="isProcessing"
                            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-mono text-xs py-3 rounded-lg transition shadow-sm font-bold">
                            Run Parallel Jobs
                        </button>
                        <button @click="resetJobs"
                            class="w-full bg-slate-600 hover:bg-slate-700 text-white font-mono text-xs py-3 rounded-lg transition shadow-sm">
                            Reset Queue
                        </button>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs flex flex-col justify-between border border-slate-800">
                        <div class="space-y-3">
                            <div v-for="job in jobQueue" :key="job.id"
                                class="flex items-center justify-between bg-black/50 p-2 rounded border border-slate-800">
                                <span class="text-slate-300">{{ job.name }}</span>
                                <span
                                    :class="['px-2 py-0.5 rounded text-[10px]', job.status === 'Completed' ? 'bg-emerald-900 text-emerald-400' : 'bg-amber-900 text-amber-400']">{{
                                        job.status }}</span>
                            </div>
                        </div>
                        <div class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-4 text-center">
                            ThreadPool Capacity: 4 Cores Detected
                        </div>
                    </div>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-blue-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">Advanced LINQ & Data Streams</h3>
                    <p class="text-sm text-slate-400 mt-1">অসাধারণ! আপনি মাল্টি-থ্রেডিংয়ের মূল বিষয়গুলো বুঝে ফেলেছেন।
                        আমাদের এই সিরিজের শেষ মডিউলে আমরা <b>Advanced LINQ (Language Integrated Query)</b> এবং ডাটা
                        স্ট্রিম নিয়ে কাজ করবো, যা ডাটা ম্যানিপুলেশনকে করবে সহজ ও এফিশিয়েন্ট।</p>
                </div>
                <router-link to="/lessons/linq-advanced"
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Finish Course with LINQ <i class="fa-solid fa-code-branch ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isProcessing = ref(false);
const jobQueue = ref([
    { id: 1, name: 'Task_01: DB Query', status: 'Pending' },
    { id: 2, name: 'Task_02: Image Proc', status: 'Pending' },
    { id: 3, name: 'Task_03: Email Sync', status: 'Pending' }
]);

const startParallelTasks = () => {
    isProcessing.value = true;
    jobQueue.value.forEach(job => job.status = 'Pending');

    jobQueue.value.forEach((job, index) => {
        setTimeout(() => {
            job.status = 'Processing...';
            setTimeout(() => {
                job.status = 'Completed';
                if (index === 2) isProcessing.value = false;
            }, 1500 + (Math.random() * 1000));
        }, index * 500);
    });
};

const resetJobs = () => {
    jobQueue.value.forEach(job => job.status = 'Pending');
    isProcessing.value = false;
};
</script>