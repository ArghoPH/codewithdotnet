<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-amber-600 font-mono text-sm tracking-widest uppercase font-bold">Module 21: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Files & Stream I/O
            </h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">ডাটা স্থায়ীভাবে সংরক্ষণের কৌশল! লোকাল ডিস্কে ফাইল তৈরি,
                রিড-রাইট এবং বাফার্ড স্ট্রিম ব্যবহার করে লার্জ ডাটা ম্যানেজ করার কমপ্লিট গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">Understanding System.IO & Streams</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    C#-এ ফাইল, ফোল্ডার এবং ড্রাইভের সাথে কমিউনিকেট করার জন্য <code>System.IO</code> নেমস্পেস ব্যবহার করা
                    হয়। এখানে <b>Stream</b> হলো একটি বাইটের সিকোয়েন্স (Sequence of Bytes) যা সোর্স থেকে ডেস্টিনেশনে ডাটা
                    ট্রান্সফার করতে সাহায্য করে।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    ফাইল হ্যান্ডেলিং করার সময় মেমরি লিক বা ফাইল লক হওয়া আটকাতে আমরা <code>using</code> স্টেটমেন্ট
                    ব্যবহার করি, যা কাজ শেষে ফাইলটিকে মেমরি থেকে স্বয়ংক্রিয়ভাবে ডিসপোজ (Dispose) করে দেয়।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <code class="text-amber-700 font-bold text-xs block mb-1">File / FileInfo</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">ফাইল তৈরি, কপি, ডিলিট এবং টেক্সট রাইট/রিড
                            করার জন্য স্ট্যাটিক ও ইনস্ট্যান্স মেথড দেয়।</p>
                    </div>
                    <div class="p-4 bg-amber-50/50 border border-amber-100 rounded-xl">
                        <code class="text-amber-800 font-bold text-xs block mb-1">Directory</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">লোকাল ড্রাইভে নতুন ফোল্ডার তৈরি,
                            সাব-ফোল্ডার চেক এবং পাথ ম্যানেজমেন্টের জন্য ব্যবহৃত হয়.</p>
                    </div>
                    <div class="p-4 bg-orange-50 border border-orange-100 rounded-xl">
                        <code class="text-orange-700 font-bold text-xs block mb-1">StreamWriter / Reader</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">বড় ফাইলের ক্ষেত্রে একবারে সব ডাটা লোড না
                            করে লাইনের পর লাইন স্ট্রিম আকারে এফিশিয়েন্টলি রাইট/রিড করে।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">Safe File Handling Pattern</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-purple-400">using</span> System.IO;

<span class="text-purple-400">string</span> path = <span class="text-amber-300">@"C:\Logs\app_log.txt"</span>;

<span class="text-slate-500">// 1. Writing to a file securely using 'using' block</span>
<span class="text-purple-400">using</span> (<span class="text-emerald-400">StreamWriter</span> writer = <span class="text-purple-400">new</span> <span class="text-emerald-400">StreamWriter</span>(path, append: <span class="text-purple-400">true</span>))
{
    writer.WriteLine(<span class="text-amber-300">"[INFO] User logged into Inventory System"</span>);
} 

<span class="text-slate-500">// 2. Quick alternative for small text files</span>
<span class="text-purple-400">string</span> content = <span class="text-emerald-400">File</span>.ReadAllText(path);</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-amber-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Virtual File I/O Engine</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের রাইটার প্যানেলে টেক্সট লিখে "Stream Write" করুন। ইন-মেমরি
                    ডিস্কে ফাইলটি কীভাবে ক্রিয়েট বা অ্যাপেন্ড (Append) হচ্ছে এবং রাইটার ডিসপোজড হওয়ার পর স্ট্রিম কীভাবে
                    মেমরি রিলিজ করছে তা লাইভ দেখুন।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">File Operation
                            Controllers</span>

                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1">File Name:</label>
                            <input v-model="fileName" type="text"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                                placeholder="log.txt" />
                        </div>

                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1">Log / Text Message:</label>
                            <textarea v-model="logInput" rows="2"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                                placeholder="e.g. Transaction #1024 Settled."></textarea>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <button @click="writeToVirtualFile"
                                class="bg-amber-600 hover:bg-amber-700 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm font-bold">
                                Stream.Write();
                            </button>
                            <button @click="deleteVirtualFile" :disabled="!virtualFileContent"
                                class="bg-rose-600 hover:bg-rose-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm">
                                File.Delete();
                            </button>
                        </div>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Disk Core:
                                    C:\App_Data\</span>
                                <span v-if="virtualFileContent"
                                    class="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">File
                                    Status: Closed & Saved</span>
                            </div>

                            <div
                                class="bg-black/50 border border-slate-950 p-4 rounded-lg min-h-[140px] flex flex-col justify-between">
                                <div>
                                    <span class="text-amber-400 font-bold block mb-1" v-if="virtualFileContent">📄 {{
                                        fileName }}</span>
                                    <p class="whitespace-pre-line text-slate-300" v-if="virtualFileContent">{{
                                        virtualFileContent }}</p>
                                    <p class="text-slate-600 italic text-center pt-8" v-else>[ Disk empty. Create file
                                        to instantiate byte cluster ]</p>
                                </div>
                            </div>
                        </div>

                        <div
                            class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3 flex justify-between items-center">
                            <span>Stream Buffer: {{ streamState }}</span>
                            <button @click="clearDisk"
                                class="text-slate-400 hover:text-white underline cursor-pointer">Wipe Disk</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Directory Guard & Logger Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Audit Trail
                        Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Create a Folder and Write System Config</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. ড্রাইভের নির্দিষ্ট পাথে ফোল্ডারটি না থাকলে <code>Directory.Exists()</code> দিয়ে চেক করে
                        <code>Directory.CreateDirectory()</code> দিয়ে ফোল্ডারটি তৈরি করুন।<br />
                        ২. ফোল্ডারের ভেতরে একটি ফাইল তৈরি করে ডেটা রাইট করুন।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Architectural Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">string</span> dirPath = <span class="text-amber-300">@"C:\SystemConfigs"</span>;
<span class="text-purple-400">string</span> filePath = Path.Combine(dirPath, <span class="text-amber-300">"config.ini"</span>);

<span class="text-purple-400">if</span> (!<span class="text-emerald-400">Directory</span>.Exists(dirPath))
{
    <span class="text-emerald-400">Directory</span>.CreateDirectory(dirPath); <span class="text-slate-500">// Safe creation</span>
}

<span class="text-emerald-400">File</span>.WriteAllText(filePath, <span class="text-amber-300">"AppMode=Production\nVersion=2.4.1"</span>);</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-amber-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">Attributes & Reflection</h3>
                    <p class="text-sm text-slate-400 mt-1">দুর্দান্ত! আপনি ফাইল সিস্টেমে সফলভাবে ডাটা পারসিস্ট করতে
                        পারেন। পরবর্তী মডিউলে আমরা সি-শার্পের অন্যতম ব্রেইনস্টর্মিং অ্যাডভান্সড টপিক—<b>Reflection</b>
                        শিখবো, যার মাধ্যমে রানটাইমে অবজেক্টের মেটাডাটা অ্যানালাইসিস করা এবং ক্লাস-মেথডের ভেতরের সিক্রেট
                        স্ট্রাকচার ডাইনামিকালি রিড করা যায়।</p>
                </div>
                <router-link to="/lessons/attributes-and-reflection"
                    class="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Advance to Reflection <i class="fa-solid fa-wand-magic-sparkles ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const fileName = ref('audit_trail.txt');
const logInput = ref('[INFO] Module initialized successfully.');
const virtualFileContent = ref('');
const streamState = ref('Idle');

const writeToVirtualFile = () => {
    if (!logInput.value.trim()) return;

    streamState.value = 'Flushing Buffer to Hardware...';

    setTimeout(() => {
        const timestamp = new Date().toLocaleTimeString();
        const newRecord = `[${timestamp}] ${logInput.value}\n`;

        virtualFileContent.value += newRecord;
        logInput.value = '';
        streamState.value = 'Released (Unlocked)';
    }, 400);
};

const deleteVirtualFile = () => {
    virtualFileContent.value = '';
    streamState.value = 'File Deleted from Disk Storage';
};

const clearDisk = () => {
    virtualFileContent.value = '';
    streamState.value = 'Drive Formatted';
};
</script>