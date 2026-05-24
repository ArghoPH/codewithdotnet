<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-fuchsia-600 font-mono text-sm tracking-widest uppercase font-bold">Module 14: OOP Pillar
                4</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Abstraction &
                Interfaces</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">সফ্টওয়্যারের ব্লুপ্রিন্ট গ্যারান্টি! ভেতরের জটিল
                ইমপ্লিমেন্টেশন লুকিয়ে শুধু প্রয়োজনীয় ফিচার বাইরে এক্সপোজ করার প্রফেশনাল টেকনিক।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-fuchsia-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">What is Abstraction?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    <b>Abstraction</b> হলো এমন একটি প্রসেস যার মাধ্যমে একটি অবজেক্টের অপ্রয়োজনীয় বা জটিল ব্যাক-এন্ড
                    মেকানিজম লুকিয়ে রেখে শুধুমাত্র প্রয়োজনীয় ফিচার বা ইন্টারফেস ইউজারের সামনে তুলে ধরা হয়।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    C#-এ অ্যাবস্ট্রাকশন মূলত দুটি উপায়ে অর্জন করা যায়:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <h3 class="text-sm font-bold text-fuchsia-700 font-mono uppercase mb-1">1. Abstract Class</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">এটি একটি আংশিক ক্লাস (Partial Contract)। এর
                            নিজস্ব কোনো অবজেক্ট সরাসরি তৈরি (Instantiate) করা যায় না। এতে সাধারণ মেথডের পাশাপাশি বডি
                            ছাড়া <code>abstract</code> মেথডও থাকতে পারে।</p>
                    </div>
                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <h3 class="text-sm font-bold text-teal-700 font-mono uppercase mb-1">2. Interface (ইন্টারফেস)
                        </h3>
                        <p class="text-xs text-slate-600 leading-relaxed">এটি হলো ১০০% পিওর কন্ট্রাক্ট (Pure Contract)।
                            এতে কোনো মেথডের বডি বা লজিক থাকে না, শুধু মেথডের সিগনেচার থাকে। কোনো ক্লাস এই ইন্টারফেস নিলে
                            তাকে অবশ্যই সবগুলো মেথড ইমপ্লিমেন্ট করতে হবে।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-teal-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">ARCHITECTURE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Why Interfaces are Enterprise Standards?</h2>
                </div>

                <p class="text-slate-700 mb-4 text-sm leading-relaxed">
                    বাস্তব লাইফে সফটওয়্যার টিম যখন কাজ করে, তখন আর্কিটেক্টরা আগে ইন্টারফেস ডিজাইন করেন। যেমন একটি
                    ডাটাবেজ সার্ভিস বানানোর সময় <code>IDatabaseService</code> ইন্টারফেস লিখে দেওয়া হয়। পরে ডেভেলপাররা
                    SQL বা MongoDB যেটাই ব্যবহার করুক না কেন, মেথডের নাম একই হতে বাধ্য।
                </p>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-purple-400">public interface</span> <span class="text-teal-400">ILogger</span> <span class="text-slate-500">// ইন্টারফেসের নামের আগে 'I' দেওয়া স্ট্যান্ডার্ড</span>
{
    <span class="text-purple-400">void</span> LogMessage(<span class="text-purple-400">string</span> message); <span class="text-slate-500">// বডি বা কোড নেই</span>
}

<span class="text-purple-400">public class</span> <span class="text-emerald-400">FileLogger</span> : <span class="text-teal-400">ILogger</span> <span class="text-slate-500">// ইন্টারফেস ইমপ্লিমেন্ট করা হলো</span>
{
    <span class="text-purple-400">public void</span> LogMessage(<span class="text-purple-400">string</span> message)
    {
        <span class="text-slate-500">// ফাইলে লগ রাইট করার আসল কোড এখানে থাকবে</span>
        Console.WriteLine(<span class="text-amber-300">$"[File] {message}"</span>);
    }
}</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-teal-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Login Architecture Gateway (Interface Simulator)</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">এখানে একটি <code>ILogger</code> ইন্টারফেস আর্কিটেকচার সিমুলেট করা
                    হয়েছে। আপনি ড্রপডাউন থেকে প্লাগইন ড্রাইভার পরিবর্তন করলেও আর্কিটেকচারাল কোর কল
                    <code>logger.LogMessage()</code> একই থাকবে।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <div>
                            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Active
                                Interface Driver:</label>
                            <select v-model="activeDriver"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none font-mono">
                                <option value="File">FileLogger (Write to Disk)</option>
                                <option value="Cloud">CloudLogger (Send to AWS/Azure)</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1">Payload Message:</label>
                            <input v-model="logPayload" type="text"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 outline-none" />
                        </div>

                        <button @click="dispatchLog"
                            class="w-full bg-teal-600 hover:bg-teal-700 text-white font-mono text-xs py-2.5 rounded-lg transition shadow-sm">
                            ILogger.LogMessage(payload);
                        </button>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-3 uppercase tracking-widest text-[10px] font-bold">Enterprise
                                Routing Console</span>
                            <div
                                class="bg-black/50 border border-slate-950 p-4 rounded-lg min-h-[110px] flex flex-col justify-center space-y-1">
                                <div v-for="(item, idx) in runtimeLogs" :key="idx"
                                    :class="item.driver === 'Cloud' ? 'text-cyan-400' : 'text-emerald-400'">
                                    &gt; {{ item.text }}
                                </div>
                                <div v-if="runtimeLogs.length === 0" class="text-slate-600 italic text-center">
                                    Awaiting dispatch stream triggers...
                                </div>
                            </div>
                        </div>
                        <div
                            class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3 flex justify-between items-center">
                            <span>Contract Rule: Strict Implementation</span>
                            <button @click="runtimeLogs = []"
                                class="text-slate-400 hover:text-white underline cursor-pointer">Clear</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Architectural Interface Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Enterprise
                        Task</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">একটি INotifyService ইন্টারফেস ডিজাইন করুন</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. একটি ইন্টারফেস তৈরি করুন <code>INotifyService</code> যার মেথড সিগনেচার হবে
                        <code>void SendNotification(string user);</code>।<br />
                        ২. একটি ক্লাস তৈরি করুন <code>SmsNotification</code> যা উক্ত ইন্টারফেসটি ইমপ্লিমেন্ট করে প্রিন্ট
                        করবে "Sending SMS to User"।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Architectural Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">public interface</span> <span class="text-teal-400">INotifyService</span>
{
    <span class="text-purple-400">void</span> SendNotification(<span class="text-purple-400">string</span> user);
}

<span class="text-purple-400">public class</span> <span class="text-emerald-400">SmsNotification</span> : <span class="text-teal-400">INotifyService</span>
{
    <span class="text-purple-400">public void</span> SendNotification(<span class="text-purple-400">string</span> user)
    {
        Console.WriteLine(<span class="text-amber-300">$"Sending SMS to {user}"</span>);
    }
}</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-teal-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">C# Advanced: Generics & Collections (জেনেরিক্স)</h3>
                    <p class="text-sm text-slate-400 mt-1">অভিনন্দন! সি-শার্প ওওপি (OOP) এর চারটি পিলার সম্পন্ন হয়েছে।
                        এর ঠিক পরেই আমরা প্রবেশ করব সি-শার্প এর অ্যাডভান্সড মেমরি ও টাইপ সেফটি ওয়ার্ল্ডে, যেখানে একই
                        ক্লাস দিয়ে ভিন্ন ভিন্ন ডাটা টাইপ প্রসেস করার ম্যাজিক (Generics) শিখবো।</p>
                </div>
                <button
                    class="bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Advance to Generics <i class="fa-solid fa-gears ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeDriver = ref('File');
const logPayload = ref('System initialized successfully.');
const runtimeLogs = ref([]);

const dispatchLog = () => {
    if (!logPayload.value.trim()) return;

    if (activeDriver.value === 'File') {
        runtimeLogs.value.push({
            text: `[FileLogger Pipeline] Buffered write to /logs/info.txt -> "${logPayload.value}"`,
            driver: 'File'
        });
    } else {
        runtimeLogs.value.push({
            text: `[CloudLogger AWS-Gateway] API HTTP 200 Telemetry sent -> "${logPayload.value}"`,
            driver: 'Cloud'
        });
    }
};
</script>