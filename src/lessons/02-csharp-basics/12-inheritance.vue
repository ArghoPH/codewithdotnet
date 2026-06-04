<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-indigo-600 font-mono text-sm tracking-widest uppercase font-bold">Module 12: OOP Pillar
                2</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Inheritance
                (ইনহেরিটেন্স)</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">কোডের ডুপ্লিকেসি চিরতরে বন্ধ করার ম্যাজিক! প্যারেন্ট
                ক্লাসের আর্কিটেকচার রিইউজ করে চাইল্ড ক্লাস তৈরি করার ইন্ডাস্ট্রি স্ট্যান্ডার্ড গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">Inheritance or Inheritance Concept?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    যখন একটি নতুন ক্লাস তৈরি করার সময় অন্য কোনো এক্সিস্টিং (বিদ্যমান) ক্লাসের বৈশিষ্ট্য ও মেথড সরাসরি
                    ধার করা হয়, তখন তাকে <b>Inheritance</b> বলে।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    এর ফলে নতুন ক্লাসে একই কোড বারবার লিখতে হয় না। C#-এ ইনহেরিট করার জন্য কোলন (<code>:</code>) চিহ্ন
                    ব্যবহার করা হয়।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <h3 class="text-sm font-bold text-indigo-700 font-mono uppercase mb-1">Base / Parent Class</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">যে মূল ক্লাস থেকে বৈশিষ্ট্যগুলো নেওয়া হয়।
                            যেমন: <code>Vehicle</code> (যানবাহন)। সব যানবাহনেরই স্পীড এবং লাইসেন্স থাকে।</p>
                    </div>
                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <h3 class="text-sm font-bold text-emerald-700 font-mono uppercase mb-1">Derived / Child Class
                        </h3>
                        <p class="text-xs text-slate-600 leading-relaxed">যে ক্লাসটি প্যারেন্ট ক্লাসকে ইনহেরিট করে।
                            যেমন: <code>Car</code> বা <code>Motorcycle</code>। এরা নিজস্ব ফিচারের পাশাপাশি প্যারেন্টের
                            ফিচারও পায়।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">C# Inheritance Syntax Structure</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-purple-400">public class</span> <span class="text-emerald-400">Vehicle</span> <span class="text-slate-500">// Parent Class</span>
{
    <span class="text-purple-400">public string</span> Brand = <span class="text-amber-300">"Generic"</span>;
    <span class="text-purple-400">public void</span> Honk() =&gt; Console.WriteLine(<span class="text-amber-300">"Beep! Beep!"</span>);
}

<span class="text-purple-400">public class</span> <span class="text-emerald-400">Car</span> : <span class="text-emerald-400">Vehicle</span> <span class="text-slate-500">// Child Class (Vehicle কে ইনহেরিট করলো)</span>
{
    <span class="text-purple-400">public int</span> Doors = <span class="text-emerald-400">4</span>; <span class="text-slate-500">// কারের নিজস্ব অতিরিক্ত প্রোপার্টি</span>
}

<span class="text-slate-500">// Execution:</span>
<span class="text-emerald-400">Car</span> myCar = <span class="text-purple-400">new</span> <span class="text-emerald-400">Car</span>();
myCar.Honk(); <span class="text-slate-400">// Output: Beep! Beep! (প্যারেন্টের মেথড কাজ করছে)</span>
Console.WriteLine(myCar.Brand); <span class="text-slate-400">// Output: Generic</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-indigo-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Class Hierarchy Visualizer</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের ড্রপডাউন থেকে অবজেক্ট টাইপ পরিবর্তন করে "Trigger Method" এ
                    ক্লিক করুন। দেখুন কীভাবে চাইল্ড অবজেক্ট কোনো ডুপ্লিকেট লজিক ছাড়াই প্যারেন্ট ক্লাসের মেথড এক্সিকিউট
                    করতে পারছে।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl flex flex-col justify-between space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select
                                Target Object Instance:</label>
                            <select v-model="selectedClass"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none font-mono">
                                <option value="Vehicle">Vehicle (Parent Instance)</option>
                                <option value="Car">Car (Child Instance : Vehicle)</option>
                            </select>
                        </div>

                        <div class="space-y-2">
                            <button @click="triggerAction('honk')"
                                class="w-full bg-slate-800 hover:bg-slate-900 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm">
                                obj.Honk();
                            </button>
                            <button @click="triggerAction('drive')" :disabled="selectedClass === 'Vehicle'"
                                class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm">
                                obj.OpenSunroof();
                            </button>
                        </div>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-3 uppercase tracking-widest text-[10px] font-bold">Runtime
                                Console Output</span>
                            <div
                                class="bg-black/40 border border-slate-950 p-4 rounded-lg min-h-[100px] flex flex-col justify-center">
                                <div v-if="consoleLogs.length === 0" class="text-slate-600 italic text-center">
                                    Awaiting runtime execution logs...
                                </div>
                                <div v-for="(log, idx) in consoleLogs" :key="idx"
                                    :class="log.type === 'error' ? 'text-rose-400' : 'text-emerald-400'">
                                    &gt; {{ log.text }}
                                </div>
                            </div>
                        </div>
                        <div
                            class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3 flex justify-between">
                            <span>Scope State: Active</span>
                            <button @click="consoleLogs = []"
                                class="text-slate-400 hover:text-white underline cursor-pointer">Clear</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Inheritance Coding Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Hands-on
                        Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Employee এবং Developer হায়ারার্কি তৈরি করুন</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. একটি প্যারেন্ট ক্লাস বানাও <code>Employee</code> যার ফিল্ড থাকবে <code>Id</code> এবং মেথড
                        থাকবে <code>GetPaid()</code>।<br />
                        ২. আরেকটি চাইল্ড ক্লাস বানাও <code>Developer</code> যা এমপ্লয়িকে ইনহেরিট করবে এবং তার নিজস্ব
                        ফিল্ড থাকবে <code>ProgrammingLanguage</code>।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Reference Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">public class</span> <span class="text-emerald-400">Employee</span>
{
    <span class="text-purple-400">public int</span> Id;
    <span class="text-purple-400">public void</span> GetPaid() =&gt; Console.WriteLine(<span class="text-amber-300">"Salary credited."</span>);
}

<span class="text-purple-400">public class</span> <span class="text-emerald-400">Developer</span> : <span class="text-emerald-400">Employee</span>
{
    <span class="text-purple-400">public string</span> ProgrammingLanguage;
}</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-indigo-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">OOP Pillar 3: Polymorphism (পলিমরফিজম বা বহুরূপীতা)</h3>
                    <p class="text-sm text-slate-400 mt-1">ইনহেরিট করে আনা প্যারেন্টের মেথড পছন্দ হচ্ছে না? কীভাবে
                        চাইল্ড ক্লাসে এসে প্যারেন্টের মেথডকে নিজের মতো করে ওভাররাইড (Override) বা মডিফাই করতে হয়, তা
                        শিখবো পরবর্তী মডিউলে।</p>
                </div>
                <router-link to="/lessons/polymorphism"
                    class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Next: Polymorphism <i class="fa-solid fa-wand-magic-sparkles ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedClass = ref('Vehicle');
const consoleLogs = ref([]);

const triggerAction = (action) => {
    if (action === 'honk') {
        consoleLogs.value.push({
            text: `${selectedClass.value} instance triggered: "Beep! Beep!" (Executed successfully)`,
            type: 'success'
        });
    } else if (action === 'drive') {
        if (selectedClass.value === 'Vehicle') {
            consoleLogs.value.push({
                text: `Compilation Error: 'Vehicle' does not contain a definition for 'OpenSunroof'.`,
                type: 'error'
            });
        } else {
            consoleLogs.value.push({
                text: `Car instance triggered: "Sunroof opened smoothly!" (Child unique logic)`,
                type: 'success'
            });
        }
    }
};
</script>