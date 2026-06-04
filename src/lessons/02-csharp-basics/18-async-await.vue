<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-indigo-600 font-mono text-sm tracking-widest uppercase font-bold">Module 18: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Asynchronous
                Programming</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">সফটওয়্যার হ্যাং হওয়া থেকে বাঁচানোর উপায়! মেইন থ্রেডকে
                ফ্রিজ না করে কীভাবে ব্যাকগ্রাউন্ডে হেভি টাস্ক (API/Database I/O) হ্যান্ডেল করতে হয় তার প্রফেশনাল গাইড।
            </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">What is Asynchronous Programming?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    সাধারণত সি-শার্প কোড লাইনের পর লাইন সিকোয়েন্সিয়ালি এক্সিকিউট হয়, যাকে <b>Synchronous</b> বলা হয়।
                    কিন্তু যদি কোনো বড় ফাইল ডাউনলোড বা ডাটাবেজ কোয়েরি করার মতো কাজ থাকে, তবে সেই লাইনটি শেষ না হওয়া
                    পর্যন্ত পুরো অ্যাপ্লিকেশন ব্লক হয়ে বসে থাকে।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    <b>Asynchronous Programming</b>-এর মাধ্যমে আমরা সেই দীর্ঘমেয়াদী কাজগুলোকে আলাদা একটি থ্রেডে পাঠিয়ে
                    দিই। ফলে মেইন অ্যাপ্লিকেশন সচল থাকে এবং ব্যাকগ্রাউন্ডের কাজ শেষ হলে সেটির রেজাল্ট রিসিভ করে।
                    সি-শার্পে এটি করার জন্য ৩টি মূল কিওয়ার্ড ব্যবহার করা হয়:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
                        <code class="text-indigo-700 font-bold text-sm block mb-1">async</code>
                        <p class="text-xs text-slate-600 leading-relaxed">যেকোনো মেথডের শুরুতে এটি লিখে কম্পাইলারকে
                            জানানো হয় যে এই মেthডটি ব্যাকগ্রাউন্ডে চলতে পারে।</p>
                    </div>
                    <div class="p-4 bg-purple-50 border border-purple-100 rounded-xl">
                        <code class="text-purple-700 font-bold text-sm block mb-1">await</code>
                        <p class="text-xs text-slate-600 leading-relaxed">অ্যাসিনক্রোনাস কাজটির রেসপন্স আসা পর্যন্ত মেইন
                            থ্রেডকে অন্য কাজ করার ছুটি দেয় কিন্তু ওই লাইনে অপেক্ষা করে।</p>
                    </div>
                    <div class="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                        <code class="text-emerald-700 font-bold text-sm block mb-1">Task / Task&lt;T&gt;</code>
                        <p class="text-xs text-slate-600 leading-relaxed">এটি এমন একটি অবজেক্ট যা কোনো চলমান বা ভবিষ্যৎ
                            কাজের (Promise) প্রতিনিধিত্ব করে।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">C# Async / Await Structure</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-purple-400">using</span> System.Net.Http;
<span class="text-purple-400">using</span> System.Threading.Tasks;

<span class="text-slate-500">// 'async' keyword defines the method, returning a 'Task'</span>
<span class="text-purple-400">public async Task</span>&lt;<span class="text-purple-400">string</span>&gt; FetchDatabaseDataAsync()
{
    <span class="text-emerald-400">HttpClient</span> client = <span class="text-purple-400">new</span> <span class="text-emerald-400">HttpClient</span>();
    
    <span class="text-slate-500">// 'await' releases the main thread until downloading finishes</span>
    <span class="text-purple-400">string</span> result = <span class="text-purple-400">await</span> client.GetStringAsync(<span class="text-amber-300">"https://api.erp.com/data"</span>);
    
    <span class="text-purple-400">return</span> result;
}</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-indigo-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Thread Blocking vs Non-Blocking Simulator</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের ল্যাবে ৩ সেকেন্ডের একটি ডাটা লোডিং প্রসেস সিমুলেট করা
                    হয়েছে। দুটি বাটনের পার্থক্য ভালো করে লক্ষ্য করুন:</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">

                        <button @click="runSyncTest" :disabled="isLoading"
                            class="w-full text-left bg-white hover:bg-rose-50 border-l-4 border-l-rose-500 border-y border-r border-slate-300 rounded-lg p-3 transition shadow-sm disabled:opacity-50">
                            <span class="font-mono text-xs font-bold block text-rose-700">1. Run Synchronous
                                (Blocking)</span>
                            <span class="text-[11px] text-slate-500">UI সম্পূর্ণ ফ্রিজ হয়ে যাবে, ৩ সেকেন্ড কোনো ক্লিক
                                কাজ করবে না।</span>
                        </button>

                        <button @click="runAsyncTest" :disabled="isLoading"
                            class="w-full text-left bg-white hover:bg-emerald-50 border-l-4 border-l-emerald-500 border-y border-r border-slate-300 rounded-lg p-3 transition shadow-sm disabled:opacity-50">
                            <span class="font-mono text-xs font-bold block text-emerald-700">2. Run Asynchronous
                                (Task)</span>
                            <span class="text-[11px] text-slate-500">ব্যাকগ্রাউন্ডে ডাটা লোড হবে, অ্যাপের অন্য পার্ট সচল
                                থাকবে।</span>
                        </button>

                        <div class="pt-4 border-t border-slate-200 text-center">
                            <span class="text-[11px] text-slate-400 block mb-1">UI সচল আছে কি না পরীক্ষা করতে নিচের
                                বাটনে ক্লিক করুন:</span>
                            <button @click="uiCounter++"
                                class="bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs px-4 py-2 rounded-lg transition active:scale-95">
                                Click Counter: {{ uiCounter }}
                            </button>
                        </div>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-3 uppercase tracking-widest text-[10px] font-bold">Thread
                                Execution Tracer</span>

                            <div class="bg-black/50 border border-slate-950 p-4 rounded-lg min-h-[140px] space-y-2">
                                <div v-for="(log, idx) in engineLogs" :key="idx" :class="log.color">
                                    &gt; {{ log.text }}
                                </div>

                                <div v-if="isLoading"
                                    class="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                                    <div class="bg-indigo-500 h-1.5 rounded-full animate-progress" style="width: 100%">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3 flex justify-between items-center">
                            <span>Thread State: {{ appState }}</span>
                            <button @click="clearLogs"
                                class="text-slate-400 hover:text-white underline cursor-pointer">Clear Logs</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Asynchronous Architecture Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Real-World
                        Task</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Build an Asynchronous SMS Sender</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. একটি মেথড লিখুন <code>public async Task SendSmsAsync(string phone, string msg)</code>।<br />
                        ২. মেথডের ভেতরে ২ সেকেন্ডের ব্যাকগ্রাউন্ড ডিলে সিমুলেট করতে <code>await Task.Delay(2000);</code>
                        ব্যবহার করুন।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Architectural Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">using</span> System;
<span class="text-purple-400">using</span> System.Threading.Tasks;

<span class="text-purple-400">public class</span> <span class="text-emerald-400">NotificationGateway</span>
{
    <span class="text-purple-400">public async Task</span> SendSmsAsync(<span class="text-purple-400">string</span> phone, <span class="text-purple-400">string</span> msg)
    {
        Console.WriteLine(<span class="text-amber-300">"Connecting to SMS Gateway API..."</span>);
        
        <span class="text-slate-500">// Simulates 2 seconds of network wait asynchronously</span>
        <span class="text-purple-400">await Task</span>.Delay(<span class="text-emerald-400">2000</span>); 
        
        Console.WriteLine(<span class="text-amber-300">$"SMS successfully sent to {phone}"</span>);
    }
}</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-indigo-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">Exception Handling</h3>
                    <p class="text-sm text-slate-400 mt-1">অ্যাসিনক্রোনাস প্রোগ্রামিংয়ের মাধ্যমে আপনি এখন রিয়েল-টাইম
                        পারফরম্যান্স অপটিমাইজেশন বোঝেন। এর ঠিক পরেই আমরা শিখবো কীভাবে রানটাইমে অপ্রত্যাশিত কোনো এরর
                        (যেমন: ডাটাবেজ ক্র্যাশ বা নেটওয়ার্ক ড্রপ) ঘটলে পুরো সফটওয়্যার ক্র্যাশ হতে না দিয়ে সুন্দরভাবে এরর
                        হ্যান্ডেল করতে হয় (Try-Catch-Finally Blocks)।</p>
                </div>
                <button
                    class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Advance to Exception Handling <i class="fa-solid fa-triangle-exclamation ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const uiCounter = ref(0);
const isLoading = ref(false);
const appState = ref('Idle');
const engineLogs = ref([
    { text: 'Engine Ready. Awaiting thread initialization command...', color: 'text-slate-500' }
]);

const clearLogs = () => {
    engineLogs.value = [];
};

// 1. Simulating Synchronous Blocking 
const runSyncTest = () => {
    clearLogs();
    isLoading.value = true;
    appState.value = 'BLOCKED (Main Thread Frozen)';
    engineLogs.value.push({ text: '[Main Thread] Initiating Synchronous DB Query...', color: 'text-rose-400' });

    // Vue-তে থ্রেড ব্লক করতে আমরা জাভাস্ক্রিপ্টের লুপ ব্যবহার করে ৩ সেকেন্ড ব্রাউজার ফ্রিজ রাখব
    const startTime = Date.now();
    while (Date.now() - startTime < 3000) {
        // এই লুপ চলাকালীন ব্রাউজারের মেইন থ্রেড পুরো লক হয়ে থাকবে, কাউন্টার বাটন ক্লিক কাজ করবে না
    }

    engineLogs.value.push({ text: '[Main Thread] Success: Data pulled from disk.', color: 'text-emerald-400' });
    isLoading.value = false;
    appState.value = 'Idle';
};

// 2. Simulating Asynchronous Non-Blocking
const runAsyncTest = () => {
    clearLogs();
    isLoading.value = true;
    appState.value = 'RUNNING (Non-Blocking Task Open)';
    engineLogs.value.push({ text: '[Task Scheduler] Task dispatched to background thread pool...', color: 'text-cyan-400' });
    engineLogs.value.push({ text: '[Main Thread] Free to process UI interactions! (Try clicking Counter)', color: 'text-indigo-400' });

    // Asynchronous wait via setTimeout (Simulating await Task.Delay)
    setTimeout(() => {
        engineLogs.value.push({ text: '[Background Thread] API Network payload received successfully.', color: 'text-emerald-400' });
        isLoading.value = false;
        appState.value = 'Idle';
    }, 3000);
};
</script>

<style scoped>
@keyframes progress {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.animate-progress {
    animation: progress 1.5s infinite linear;
}
</style>