<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-rose-600 font-mono text-sm tracking-widest uppercase font-bold">Module 19: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Exception Handling
            </h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">সফ্টওয়্যারকে ক্র্যাশ প্রতিরোধী বানানোর কৌশল! রানটাইমে
                অপ্রত্যাশিত এরর সুন্দরভাবে ম্যানেজ করে সিস্টেম আপটাইম ধরে রাখার প্রফেশনাল গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-rose-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">What is an Exception?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    কোড কম্পাইল হওয়ার পর অ্যাপ্লিকেশন রান করার সময় যে সমস্ত এরর বা অস্বাভাবিক পরিস্থিতি তৈরি হয়,
                    সেগুলোকে C#-এ <b>Exception</b> বলা হয়। এগুলো হ্যান্ডেল না করলে উইন্ডোজ বা সার্ভার সরাসরি অ্যাপটি
                    বন্ধ করে দেয়।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    C#-এ এক্সেপশন হ্যান্ডেল করার জন্য ৪টি স্ট্রাকচারাল ব্লক ব্যবহার করা হয়:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <code class="text-blue-700 font-bold text-xs block mb-1">try</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">যে কোডটিতে এরর হওয়ার সম্ভাবনা থাকে, সেটিকে
                            এই ব্লকের ভেতরে রাখা হয়।</p>
                    </div>
                    <div class="p-4 bg-rose-50 border border-rose-100 rounded-xl">
                        <code class="text-rose-700 font-bold text-xs block mb-1">catch</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">try ব্লকে কোনো এরর ঘটলে এই ব্লকটি সচল হয়
                            এবং এররটি ক্যাপচার করে অ্যাপ সচল রাখে।</p>
                    </div>
                    <div class="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                        <code class="text-emerald-700 font-bold text-xs block mb-1">finally</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">এরর হোক বা না হোক, এই ব্লকের কোড রান হবেই।
                            (যেমন: DB কানেকশন বা ফাইল ক্লোজ করা)।</p>
                    </div>
                    <div class="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                        <code class="text-amber-700 font-bold text-xs block mb-1">throw</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">বিজনেস লজিক ভায়োলেশন হলে ম্যানুয়ালি কাস্টম
                            এরর তৈরি করে ছুড়ে মারার জন্য ব্যবহৃত হয়।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-rose-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">Standard Try-Catch-Finally Pattern</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-purple-400">try</span>
{
    <span class="text-purple-400">int</span> totalStock = <span class="text-emerald-400">500</span>;
    <span class="text-purple-400">int</span> itemsPerBatch = <span class="text-emerald-400">0</span>; <span class="text-slate-500">// Dangerous value</span>
    
    <span class="text-purple-400">int</span> result = totalStock / itemsPerBatch; <span class="text-slate-500">// Throws DivideByZeroException</span>
}
<span class="text-purple-400">catch</span> (<span class="text-teal-400">DivideByZeroException</span> ex)
{
    Console.WriteLine(<span class="text-amber-300">$"Error Block: Cannot divide by zero. Details: {ex.Message}"</span>);
}
<span class="text-purple-400">finally</span>
{
    Console.WriteLine(<span class="text-amber-300">"Finally Block: Release resources or log transaction."</span>);
}</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-rose-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Enterprise Fault-Tolerance Laboratory</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের ড্রপডাউন থেকে একটি রানটাইম এরর কন্ডিশন সিলেক্ট করুন এবং
                    প্রফেশনাল ব্লকের ট্র্যাকিং সিকোয়েন্স লক্ষ্য করুন:</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <div>
                            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Simulate
                                Error Scenario:</label>
                            <select v-model="selectedScenario"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none font-mono">
                                <option value="none">Perfect Operation (No Error)</option>
                                <option value="zero">DivideByZeroException (Math Error)</option>
                                <option value="null">NullReferenceException (Object Empty)</option>
                            </select>
                        </div>

                        <button @click="executeFaultTest"
                            class="w-full bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs py-2.5 rounded-lg transition shadow-sm">
                            Execute Block Pipeline
                        </button>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-3 uppercase tracking-widest text-[10px] font-bold">Runtime
                                Middleware Logs</span>

                            <div class="bg-black/50 border border-slate-950 p-4 rounded-lg min-h-[140px] space-y-1">
                                <div v-for="(log, idx) in executionLogs" :key="idx" :class="log.color">
                                    &gt; {{ log.text }}
                                </div>
                                <div v-if="executionLogs.length === 0" class="text-slate-600 italic text-center pt-8">
                                    Awaiting instruction stream trigger...
                                </div>
                            </div>
                        </div>

                        <div
                            class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3 flex justify-between items-center">
                            <span>System Integrity: Resilient</span>
                            <button @click="executionLogs = []"
                                class="text-slate-400 hover:text-white underline cursor-pointer">Clear</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Custom Validation Exception Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Business Logic
                        Guard</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Throw Exception on Negative Stock Request</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. এমন একটি কন্ডিশনাল লজিক তৈরি করুন যেখানে ইউজারের রিকোয়েস্ট করা স্টক সংখ্যা
                        <code>demandQty &lt; 0</code> হলে একটি ম্যানুয়াল <code>ArgumentException</code> থ্রো হবে।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Architectural Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">public void</span> ProcessOrder(<span class="text-purple-400">int</span> demandQty)
{
    <span class="text-purple-400">if</span> (demandQty &lt; <span class="text-emerald-400">0</span>)
    {
        <span class="text-purple-400">throw new</span> <span class="text-teal-400">ArgumentException</span>(<span class="text-amber-300">"Demand quantity cannot be negative!"</span>);
    }
    
    Console.WriteLine(<span class="text-amber-300">"Order processed successfully."</span>);
}</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-rose-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">Delegates & Events</h3>
                    <p class="text-sm text-slate-400 mt-1">অভিনন্দন! আপনি এখন সি-শার্পের এরর হ্যান্ডেলিং আর্কিটেকচার
                        সম্পন্ন করেছেন। এর ঠিক পরেই আমরা প্রবেশ করব সি-শার্পের অত্যন্ত এলিগ্যান্ট এবং রিয়াক্টিভ
                        আর্কিটেকচার ডিজাইনে, যেখানে মেথডকে ভ্যারিয়েবলের মতো পাস করা এবং এক ক্লাসের ডাটা চেঞ্জ হলে অন্য
                        ক্লাসে অটো নোটিফিকেশন পাঠানোর মেকানিজম (Delegates & Events) শিখবো।</p>
                </div>
                <router-link to="/lessons/delegates-events"
                    class="bg-rose-500 hover:bg-rose-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Advance to Delegates <i class="fa-solid fa-circle-nodes ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedScenario = ref('none');
const executionLogs = ref([]);

const executeFaultTest = () => {
    executionLogs.value = [];

    // Step 1: Try Block
    executionLogs.value.push({ text: '[TRY BLOCK] Entering critical compute pipeline...', color: 'text-blue-400' });

    if (selectedScenario.value === 'none') {
        executionLogs.value.push({ text: '[TRY BLOCK] Success: Value calculation complete.', color: 'text-indigo-400' });
    }
    else if (selectedScenario.value === 'zero') {
        // Math crash simulation
        executionLogs.value.push({ text: '[CRASH] Critical Error: Division by zero attempted!', color: 'text-red-500' });
        // Catch Step
        executionLogs.value.push({ text: '[CATCH BLOCK] Trapped: DivideByZeroException caught. Preventing core shutdown.', color: 'text-rose-400' });
        executionLogs.value.push({ text: '[CATCH BLOCK] Fallback Value assigned: 0', color: 'text-slate-400' });
    }
    else if (selectedScenario.value === 'null') {
        // Null crash simulation
        executionLogs.value.push({ text: '[CRASH] Critical Error: Target object reference not set to an instance.', color: 'text-red-500' });
        // Catch Step
        executionLogs.value.push({ text: '[CATCH BLOCK] Trapped: NullReferenceException handled. Auto-instantiating default data stack.', color: 'text-rose-400' });
    }

    // Step 3: Finally Block
    executionLogs.value.push({ text: '[FINALLY BLOCK] Cleaning garbage vectors and finalizing memory blocks.', color: 'text-emerald-400' });
};
</script>