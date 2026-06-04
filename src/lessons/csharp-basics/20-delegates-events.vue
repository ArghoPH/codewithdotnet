<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-emerald-600 font-mono text-sm tracking-widest uppercase font-bold">Module 20: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Delegates & Events
            </h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">ইভেন্ট-ড্রিভেন আর্কিটেকচারের মূল ভিত্তি! মেথডকে
                ভ্যারিয়েবলের মতো পাস করা এবং লুজলি-ক্যাপল্ড (Loosely Coupled) নোটিফিকেশন সিস্টেম তৈরির প্রফেশনাল গাইড।
            </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">What are Delegates and Events?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    <b>Delegate</b> হলো সি-শার্পের একটি অবজেক্ট যা অন্য একটি মেথডের রেফারেন্স ধরে রাখে। সহজ কথায়, এটি
                    একটি "মেথড পয়েন্টার"। এর মাধ্যমে আমরা একটি মেথডকে অন্য মেথডের ভেতরে আর্গুমেন্ট হিসেবে পাস করতে পারি,
                    যা রানটাইমে কলব্যাক (Callback) মেকানিজম তৈরি করে।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    <b>Event</b> হলো ডেলিগেটের ওপর তৈরি একটি সিকিউর লেয়ার যা অবজেক্ট-ওরিয়েন্টেড ডিজাইনের
                    <b>Publisher-Subscriber Pattern</b> অনুসরণ করে। যখন কোনো নির্দিষ্ট ঘটনা (যেমন: লোন অ্যাপ্রুভ বা স্টক
                    আউট) ঘটে, তখন পাবলিশার ইভেন্টটি ফায়ার করে এবং সমস্ত সাবস্ক্রাইবাররা স্বয়ংক্রিয়ভাবে অ্যালার্ট পায়।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <div class="flex items-center gap-2 mb-2 text-emerald-700 font-bold">
                            <i class="fa-solid fa-circle-nodes"></i>
                            <h3>Delegates (.NET Built-in)</h3>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            আধুনিক সি-শার্পে কাস্টম ডেলিগেটের চেয়ে বিল্ট-ইন <code>Action&lt;T&gt;</code> (যা কিছু
                            রিটার্ন করে না) এবং <code>Func&lt;T, TResult&gt;</code> (যা ভ্যালু রিটার্ন করে) বেশি ব্যবহৃত
                            হয়।
                        </p>
                    </div>

                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <div class="flex items-center gap-2 mb-2 text-teal-700 font-bold">
                            <i class="fa-solid fa-bell"></i>
                            <h3>Events Framework</h3>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            একটি ক্লাস অন্য ক্লাসের ইন্টারনাল লজিক না জেনেও তার ইভেন্টে সাবস্ক্রাইব (<code>+=</code>) বা
                            আনসাবস্ক্রাইব (<code>-=</code>) করে নোটিফিকেশন রিসিভ করতে পারে।
                        </p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">Publisher-Subscriber Implementation</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-slate-500">// 1. Publisher Class</span>
<span class="text-purple-400">public class</span> <span class="text-emerald-400">ProcessManager</span>
{
    <span class="text-purple-400">public event</span> <span class="text-teal-400">Action</span>&lt;<span class="text-purple-400">string</span>&gt; ProcessCompleted; <span class="text-slate-500">// Event declaration</span>

    <span class="text-purple-400">public void</span> StartProcess()
    {
        Console.WriteLine(<span class="text-amber-300">"Processing ERP Data..."</span>);
        <span class="text-slate-500">// Fire the event safely if there are subscribers</span>
        ProcessCompleted?.Invoke(<span class="text-amber-300">"Batch #404 Approved"</span>);
    }
}

<span class="text-slate-500">// 2. Subscriber Usage</span>
<span class="text-emerald-400">ProcessManager</span> manager = <span class="text-purple-400">new</span> <span class="text-emerald-400">ProcessManager</span>();
manager.ProcessCompleted += (msg) => Console.WriteLine(<span class="text-amber-300">$"Alert: {msg}"</span>); <span class="text-slate-500">// Subscribe</span>
manager.StartProcess();</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-emerald-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Reactive Multi-Subscriber Event Bus</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের গেটওয়েতে বিভিন্ন সার্ভিস (SMS, Email, Ledger) সাবস্ক্রাইব
                    বা আনসাবস্ক্রাইব করুন। তারপর "Trigger Event" এ ক্লিক করে দেখুন একটিমাত্র অ্যাকশনে কীভাবে হুকড
                    মেথডগুলো একসাথে ফায়ার হয়।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Manage
                            Subscriptions</span>

                        <div class="space-y-2">
                            <div
                                class="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-lg">
                                <span class="text-xs font-mono font-bold text-slate-700">SMS Notification Service</span>
                                <button @click="toggleSub('sms')"
                                    :class="subs.sms ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'"
                                    class="px-3 py-1 text-[11px] font-bold rounded-md transition font-mono">
                                    {{ subs.sms ? 'Subscribed (+=' : 'Unsubscribed (-=' }}
                                </button>
                            </div>

                            <div
                                class="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-lg">
                                <span class="text-xs font-mono font-bold text-slate-700">Email Audit Logger</span>
                                <button @click="toggleSub('email')"
                                    :class="subs.email ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'"
                                    class="px-3 py-1 text-[11px] font-bold rounded-md transition font-mono">
                                    {{ subs.email ? 'Subscribed (+=' : 'Unsubscribed (-=' }}
                                </button>
                            </div>

                            <div
                                class="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-lg">
                                <span class="text-xs font-mono font-bold text-slate-700">Accounting General
                                    Ledger</span>
                                <button @click="toggleSub('ledger')"
                                    :class="subs.ledger ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'"
                                    class="px-3 py-1 text-[11px] font-bold rounded-md transition font-mono">
                                    {{ subs.ledger ? 'Subscribed (+=' : 'Unsubscribed (-=' }}
                                </button>
                            </div>
                        </div>

                        <button @click="fireEventPipeline"
                            class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs py-2.5 rounded-lg transition shadow-sm font-bold">
                            manager.InvoicePaid?.Invoke();
                        </button>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-3 uppercase tracking-widest text-[10px] font-bold">Event
                                Multicast Execution Stream</span>

                            <div class="bg-black/50 border border-slate-950 p-4 rounded-lg min-h-[150px] space-y-1.5">
                                <div v-for="(log, idx) in busLogs" :key="idx" :class="log.color">
                                    &gt; {{ log.text }}
                                </div>
                                <div v-if="busLogs.length === 0" class="text-slate-600 italic text-center pt-10">
                                    Event Bus is idle. Invoke publisher pipeline...
                                </div>
                            </div>
                        </div>

                        <div
                            class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3 flex justify-between items-center">
                            <span>Broadcaster Status: Active</span>
                            <button @click="busLogs = []"
                                class="text-slate-400 hover:text-white underline cursor-pointer">Clear Canvas</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Event-Driven Architecture Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Microfinance
                        Core Pattern</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Build a Low Stock Level Alert Event</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. একটি ক্লাস <code>Inventory</code> তৈরি করুন যার একটি ইভেন্ট থাকবে
                        <code>public event Action StockLow;</code>।<br />
                        ২. একটি মেথড লিখুন <code>CheckStock(int qty)</code> যা ইনপুট ৫ এর নিচে নামলে ইভেন্টটিকে ইনভোক বা
                        ফায়ার করবে।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Architectural Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">public class</span> <span class="text-emerald-400">Inventory</span>
{
    <span class="text-purple-400">public event</span> <span class="text-teal-400">Action</span> StockLow;

    <span class="text-purple-400">public void</span> CheckStock(<span class="text-purple-400">int</span> qty)
    {
        <span class="text-purple-400">if</span> (qty &lt; <span class="text-emerald-400">5</span>)
        {
            <span class="text-slate-500">// Trigger event if any subscriber exists</span>
            StockLow?.Invoke(); 
        }
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
                    <h3 class="text-xl font-bold mt-1">Files & Stream I/O</h3>
                    <p class="text-sm text-slate-400 mt-1">অসাধারণ! আপনি সি-শার্পের অ্যাডভান্সড রিয়াক্টিভ আর্কিটেকচার
                        সম্পন্ন করেছেন। এবার আমরা শিখবো কীভাবে আপনার অ্যাপ্লিকেশন থেকে লোকাল হার্ডডিস্ক বা সার্ভারে ফাইল
                        তৈরি করা, রিড করা এবং এক্সেল বা ডট-টেক্সট ফাইল এক্সপোর্ট/ইমপোর্ট করা যায় (System.IO)।</p>
                </div>
                <router-link to="/lessons/files-streams"
                    class="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Files Streams <i class="fa-solid fa-file-arrow-down ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const subs = ref({
    sms: true,
    email: false,
    ledger: true
});

const busLogs = ref([]);

const toggleSub = (type) => {
    subs.value[type] = !subs.value[type];
};

const fireEventPipeline = () => {
    busLogs.value = [];
    busLogs.value.push({ text: '[PUBLISHER] Invoice state mutated to: PAID. Invoking Delegate List...', color: 'text-cyan-400' });

    let targetedSubsCount = 0;

    if (subs.value.sms) {
        targetedSubsCount++;
        busLogs.value.push({ text: '[SUBSCRIBER -> SMS] Broadcast Sent: "Payment received successfully."', color: 'text-emerald-400' });
    }
    if (subs.value.email) {
        targetedSubsCount++;
        busLogs.value.push({ text: '[SUBSCRIBER -> EMAIL] Audit Log Dispatched to corporate server.', color: 'text-indigo-400' });
    }
    if (subs.value.ledger) {
        targetedSubsCount++;
        busLogs.value.push({ text: '[SUBSCRIBER -> LEDGER] General ledger updated. Debit/Credit balanced.', color: 'text-amber-400' });
    }

    if (targetedSubsCount === 0) {
        busLogs.value.push({ text: '[WARNING] Event fired but zero invocation handles detected (Null Reference Avoided).', color: 'text-rose-400' });
    } else {
        busLogs.value.push({ text: `[SUCCESS] Multicast pipeline flushed. ${targetedSubsCount} actions executed.`, color: 'text-slate-500' });
    }
};
</script>