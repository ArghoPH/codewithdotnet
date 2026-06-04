<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-indigo-600 font-mono text-sm tracking-widest uppercase font-bold">Module 22: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Attributes &
                Reflection</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">কোডের ভেতরের এক্সরে রিপোর্ট! রানটাইমে অবজেক্টের মেটাডাটা
                অ্যানালাইসিস করা এবং ক্লাস বা মেথডের ভেতরের সিক্রেট স্ট্রাকচার ডাইনামিকালি রিড করার গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">Understanding Metadata & Type Inspection</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    C#-এ <b>Attributes</b> হলো এক ধরণের মেটাডাটা ট্যাগ, যা আপনি ক্লাস, প্রোপার্টি বা মেথডের সাথে যুক্ত
                    করতে পারেন (যেমন <code>[Obsolete]</code> বা <code>[Required]</code>)। আর <b>Reflection</b> হলো
                    <code>System.Reflection</code> নেমস্পেসের সেই জাদুকরী ক্ষমতা, যা দিয়ে প্রোগ্রাম চলাকালীন সময়ে
                    (Runtime) এই মেটাডাটাগুলো রিড করা যায়।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    সহজ কথায়, রিফ্লেকশন ব্যবহার করে আপনি এমন একটি কোড লিখতে পারেন, যা অন্য একটি ক্লাসের নাম, তার ভেতরের
                    প্রোপার্টি, মেথড এবং অ্যাট্রিবিউটগুলো সম্পর্কে সব তথ্য বের করে আনতে পারে, এমনকি ডাইনামিকালি মেথড কলও
                    করতে পারে!
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <code class="text-indigo-700 font-bold text-xs block mb-1">[AttributeUsage]</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">এটি ব্যবহার করে নিজের কাস্টম অ্যাট্রিবিউট
                            তৈরি করা যায়, যা নির্দিষ্ট রুলস সেট করে দেয়।</p>
                    </div>
                    <div class="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                        <code class="text-indigo-800 font-bold text-xs block mb-1">typeof() / GetType()</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">যেকোনো ক্লাস বা অবজেক্টের টাইপ ইনফরমেশন
                            (Type Object) রানটাইমে বের করার প্রধান উপায়।</p>
                    </div>
                    <div class="p-4 bg-purple-50 border border-purple-100 rounded-xl">
                        <code class="text-purple-700 font-bold text-xs block mb-1">PropertyInfo & MethodInfo</code>
                        <p class="text-[11px] text-slate-600 leading-relaxed">একটি ক্লাসের ভেতরে থাকা ফিল্ড, প্রোপার্টি
                            বা মেথডের ডিটেইলস লিস্ট আকারে রিটার্ন করে।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">Extracting Metadata at Runtime</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-purple-400">using</span> System.Reflection;

<span class="text-slate-500">// 1. A class with some Attributes</span>
[<span class="text-emerald-400">Serializable</span>]
<span class="text-purple-400">public class</span> <span class="text-emerald-400">Customer</span> 
{
    [<span class="text-emerald-400">Required</span>]
    <span class="text-purple-400">public string</span> Name { <span class="text-purple-400">get</span>; <span class="text-purple-400">set</span>; }
}

<span class="text-slate-500">// 2. Using Reflection to read properties</span>
<span class="text-emerald-400">Type</span> customerType = <span class="text-purple-400">typeof</span>(<span class="text-emerald-400">Customer</span>);
<span class="text-emerald-400">PropertyInfo</span>[] properties = customerType.GetProperties();

<span class="text-purple-400">foreach</span> (<span class="text-purple-400">var</span> prop <span class="text-purple-400">in</span> properties)
{
    <span class="text-emerald-400">Console</span>.WriteLine(<span class="text-amber-300">$"Property Found: {prop.Name} (Type: {prop.PropertyType.Name})"</span>);
}</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-indigo-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Reflection X-Ray Engine</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের ড্রপডাউন থেকে একটি ক্লাস সিলেক্ট করে "Run Reflection" এ
                    ক্লিক করুন। দেখুন কীভাবে রিফ্লেকশন ইঞ্জিন ওই ক্লাসের ভেতরের লুকানো প্রোপার্টি, মেথড এবং
                    অ্যাট্রিবিউটগুলো স্ক্যান করে বের করে আনছে।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Analyzer
                            Controls</span>

                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1">Target Class Type:</label>
                            <select v-model="selectedClass"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono focus:ring-2 focus:ring-indigo-500 outline-none">
                                <option value="Customer">Customer_Entity</option>
                                <option value="PaymentController">Payment_Controller</option>
                                <option value="SystemConfig">System_Config_Dto</option>
                            </select>
                        </div>

                        <div class="grid grid-cols-2 gap-2 mt-2">
                            <button @click="runReflection"
                                class="bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm font-bold">
                                GetType().Reflect()
                            </button>
                            <button @click="clearConsole" :disabled="!reflectedData"
                                class="bg-slate-600 hover:bg-slate-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-mono text-xs py-2 rounded-lg transition shadow-sm">
                                Clear Terminal
                            </button>
                        </div>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Runtime
                                    Inspector: In-Memory</span>
                                <span v-if="reflectedData"
                                    class="text-[10px] bg-indigo-950 text-indigo-400 px-2 py-0.5 rounded border border-indigo-800">Scan
                                    Complete</span>
                            </div>

                            <div class="bg-black/50 border border-slate-950 p-4 rounded-lg min-h-[160px] flex flex-col">
                                <div v-if="reflectedData" class="space-y-3">
                                    <div>
                                        <span class="text-indigo-400 font-bold">class {{ reflectedData.name }}</span>
                                        <span class="text-slate-500 ml-2">// Class Name</span>
                                    </div>

                                    <div class="pl-4 border-l border-slate-700">
                                        <span class="text-emerald-400 block mb-1">Attributes:</span>
                                        <div v-for="(attr, i) in reflectedData.attributes" :key="'attr' + i"
                                            class="text-teal-300 ml-4">{{ attr }}</div>
                                    </div>

                                    <div class="pl-4 border-l border-slate-700">
                                        <span class="text-amber-400 block mb-1">Properties:</span>
                                        <div v-for="(prop, i) in reflectedData.properties" :key="'prop' + i"
                                            class="text-slate-300 ml-4">{{ prop }}</div>
                                    </div>

                                    <div class="pl-4 border-l border-slate-700">
                                        <span class="text-purple-400 block mb-1">Methods:</span>
                                        <div v-for="(method, i) in reflectedData.methods" :key="'meth' + i"
                                            class="text-slate-300 ml-4">{{ method }}</div>
                                    </div>
                                </div>
                                <p class="text-slate-600 italic text-center pt-10" v-else>[ Waiting for Type execution.
                                    Select a class and run reflection. ]</p>
                            </div>
                        </div>

                        <div
                            class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3 flex justify-between items-center">
                            <span>Engine Status: {{ reflectionStatus }}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Custom Validator Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-indigo-800 uppercase tracking-widest block mb-1">Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Build a Simple Model Validator</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. একটি <code>[Required]</code> কাস্টম অ্যাট্রিবিউট তৈরি করুন।<br />
                        ২. রিফ্লেকশন ব্যবহার করে চেক করুন কোন প্রোপার্টির মাথায় <code>[Required]</code> দেওয়া আছে, এবং
                        সেই প্রোপার্টির ভ্যালু <code>null</code> কি না তা ভ্যালিডেট করুন।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Architectural Solution
                        </summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-slate-500">// 1. Custom Attribute</span>
[<span class="text-emerald-400">AttributeUsage</span>(<span class="text-emerald-400">AttributeTargets</span>.Property)]
<span class="text-purple-400">public class</span> <span class="text-emerald-400">RequiredAttribute</span> : <span class="text-emerald-400">Attribute</span> { }

<span class="text-slate-500">// 2. Validation Method using Reflection</span>
<span class="text-purple-400">public static bool</span> ValidateModel(<span class="text-purple-400">object</span> obj)
{
    <span class="text-purple-400">var</span> properties = obj.GetType().GetProperties();
    <span class="text-purple-400">foreach</span> (<span class="text-purple-400">var</span> prop <span class="text-purple-400">in</span> properties)
    {
        <span class="text-slate-500">// Check if property has [Required] attribute</span>
        <span class="text-purple-400">if</span> (<span class="text-emerald-400">Attribute</span>.IsDefined(prop, <span class="text-purple-400">typeof</span>(<span class="text-emerald-400">RequiredAttribute</span>)))
        {
            <span class="text-purple-400">var</span> value = prop.GetValue(obj);
            <span class="text-purple-400">if</span> (value == <span class="text-purple-400">null</span> || <span class="text-purple-400">string</span>.IsNullOrWhiteSpace(value.ToString()))
                <span class="text-purple-400">return false</span>; <span class="text-slate-500">// Validation Failed</span>
        }
    }
    <span class="text-purple-400">return true</span>;
}</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-indigo-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">Garbage Collection & Memory Management</h3>
                    <p class="text-sm text-slate-400 mt-1">দুর্দান্ত! আপনি রিফ্লেকশন এবং মেটাডাটা অ্যানালাইসিসে মাস্টার
                        হয়ে গেছেন। পরবর্তী মডিউলে আমরা সি-শার্পের <b>Garbage Collector (GC)</b> কীভাবে ব্যাকগ্রাউন্ডে
                        কাজ করে এবং অ্যাপ্লিকেশন মেমরি কীভাবে অপ্টিমাইজ করতে হয় তার আর্কিটেকচার শিখবো।</p>
                </div>
                <router-link to="/lessons/memory-management"
                    class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Advance to Memory Management <i class="fa-solid fa-microchip ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedClass = ref('Customer');
const reflectionStatus = ref('Idle');
const reflectedData = ref(null);

// Dummy database acting as System.Reflection backend
const classMetadataDB = {
    'Customer': {
        name: 'Customer_Entity',
        attributes: ['[Serializable]', '[Table("tbl_Customers")]'],
        properties: ['public int Id { get; set; }', 'public string FullName { get; set; }', 'public string Email { get; set; }'],
        methods: ['public void SaveToDB()', 'private bool ValidateData()']
    },
    'PaymentController': {
        name: 'Payment_Controller',
        attributes: ['[ApiController]', '[Route("api/[controller]")]'],
        properties: ['private readonly IPaymentService _service;'],
        methods: ['public IActionResult ProcessPayment(DTO request)', 'public IActionResult Refund()']
    },
    'SystemConfig': {
        name: 'System_Config_Dto',
        attributes: ['[Obsolete("Use NewSystemConfig instead")]'],
        properties: ['public string AppVersion { get; set; }', 'public bool IsMaintenanceMode { get; set; }'],
        methods: ['public void LoadConfigs()']
    }
};

const runReflection = () => {
    reflectionStatus.value = 'Analyzing Metadata in Memory...';
    reflectedData.value = null;

    setTimeout(() => {
        reflectedData.value = classMetadataDB[selectedClass.value];
        reflectionStatus.value = 'Extracted TypeInfo Complete';
    }, 500);
};

const clearConsole = () => {
    reflectedData.value = null;
    reflectionStatus.value = 'Console Cleared / Engine Idle';
};
</script>