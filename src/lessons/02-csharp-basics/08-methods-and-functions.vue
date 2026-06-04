<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-12 text-center">
            <span class="text-sky-600 font-mono text-sm tracking-widest uppercase font-bold">Module 08: Code
                Architecture</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">C# Methods &
                Functions</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">Don't Repeat Yourself (DRY)! বড় বড় কোডকে ছোট,
                সুনির্দিষ্ট এবং রিইউজেবল ব্লকে ভাগ করে প্রফেশনাল আর্কিটেকচার তৈরি করা শিখুন।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-12">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-sky-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        1</span>
                    <h2 class="text-2xl font-bold text-slate-900">What is Method? Why Do We Need It? </h2>
                </div>

                <p class="text-slate-700 mb-4">একটি মেথড (বা ফাংশন) হলো একগুচ্ছ কোডের ব্লক যা একটি নির্দিষ্ট কাজ সম্পন্ন
                    করে। যখন একটি বড় প্রোজেক্টে একই কাজ বা লজিক বারবার প্রয়োজন হয়, তখন কোড বারবার কপি-পেস্ট না করে একটি
                    মেথড বানিয়ে রাখা হয় এবং প্রয়োজনমতো তাকে <b>Call (কল)</b> করা হয়।</p>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
<span class="text-slate-500">// ১. মেথড ডিফাইন করা (Definition)</span>
<span class="text-purple-400">void</span> ShowWelcomeMessage() 
{
    Console.WriteLine(<span class="text-amber-300">"Welcome back, User!"</span>);
}

<span class="text-slate-500">// ২. মেথড কল করা (Calling)</span>
ShowWelcomeMessage(); <span class="text-slate-400">// এটি লিখলেই ওপরের কোডটুকু রান হবে</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-sky-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        2</span>
                    <h2 class="text-2xl font-bold text-slate-900">Parameters & Return Types</h2>
                </div>
                <p class="text-slate-700 mb-4">মেথডকে আরও ডাইনামিক করার জন্য বাইরে থেকে ইনপুট পাঠানো যায়, যাকে
                    <b>Parameters</b> বলে। আবার মেথড কাজ শেষে কোনো রেজাল্ট ফেরত পাঠালে তাকে <b>Return Type</b> বলা হয়।
                    কিছু ফেরত না পাঠালে তার টাইপ হয় <code>void</code>।
                </p>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
<span class="text-slate-500">// দুটি সংখ্যা যোগ করে রেজাল্ট ফেরত দেওয়ার মেথড</span>
<span class="text-purple-400">int</span> AddNumbers(<span class="text-purple-400">int</span> num1, <span class="text-purple-400">int</span> num2) 
{
    <span class="text-purple-400">int</span> sum = num1 + num2;
    <span class="text-purple-400">return</span> sum; <span class="text-slate-400">// int ভ্যালু রিটার্ন করছে</span>
}

<span class="text-slate-500">// মেথড কল করে রিটার্ন ভ্যালু ভেরিয়েবলে রাখা</span>
<span class="text-purple-400">int</span> result = AddNumbers(<span class="text-emerald-400">10</span>, <span class="text-emerald-400">20</span>); 
Console.WriteLine(result); <span class="text-slate-400">// Output: 30</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Method Execution Simulator</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">ইনপুটগুলো পরিবর্তন করুন। মেথড কীভাবে মেমরিতে আর্গুমেন্ট গ্রহণ করে
                    প্রসেস করছে এবং ডাটা রিটার্ন করছে তা লাইভ দেখুন।</p>

                <div
                    class="bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-sm border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div
                        class="space-y-4 bg-slate-800/50 p-5 rounded-lg border border-slate-700/50 flex flex-col justify-between">
                        <div class="space-y-3">
                            <div>
                                <label
                                    class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">First
                                    Name (Param 1):</label>
                                <input type="text" v-model="firstName"
                                    class="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 font-mono text-sky-400 focus:outline-none focus:border-sky-500" />
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Last
                                    Name (Param 2):</label>
                                <input type="text" v-model="lastName"
                                    class="w-full bg-slate-800 border border-slate-700 rounded px-3 py-1.5 font-mono text-sky-400 focus:outline-none focus:border-sky-500" />
                            </div>
                        </div>

                        <div class="space-y-2 pt-4 border-t border-slate-700/50">
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Terminal
                                standard Output</span>
                            <div
                                class="bg-black/40 border border-slate-950 rounded p-3 font-mono text-xs text-emerald-400 min-h-[50px] flex items-center">
                                <span>&gt; Returned: "{{ generateFullName(firstName, lastName) }}"</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col justify-center font-mono text-xs md:text-sm text-blue-300 leading-relaxed">
                        <div>
                            <span class="text-purple-400">string</span> GetFullName(<span
                                class="text-purple-400">string</span> first, <span class="text-purple-400">string</span>
                            last) <br />
                            { <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">return</span> <span
                                class="text-amber-300">$"</span><span class="text-sky-300">{first}</span><span
                                class="text-amber-300"> </span><span class="text-sky-300">{last}</span><span
                                class="text-amber-300">"</span>; <br />
                            } <br /><br />
                            <span class="text-slate-500">// Active Method Call:</span><br />
                            <span class="text-purple-400">string</span> output = GetFullName(<span
                                class="text-amber-300">"{{ firstName }}"</span>, <span class="text-amber-300">"{{
                                    lastName }}"</span>);
                        </div>
                    </div>

                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-sky-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        3</span>
                    <h2 class="text-2xl font-bold text-slate-900">Method Overloading</h2>
                </div>
                <p class="text-slate-700 mb-4">একটি ক্লাসের ভেতর **একই নামে** একাধিক মেথড তৈরি করা সম্ভব, যদি তাদের
                    প্যারামিটারের সংখ্যা বা টাইপ ভিন্ন হয়। একেই মেথড ওভারলোডিং বলে। এটি পলিমরফিজম (Polymorphism) এর একটি
                    অংশ।</p>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
<span class="text-slate-500">// ১. দুটি ইন্টিজার যোগ করার মেথড</span>
<span class="text-purple-400">int</span> Multiply(<span class="text-purple-400">int</span> a, <span class="text-purple-400">int</span> b) =&gt; a * b;

<span class="text-slate-500">// ২. নাম এক, কিন্তু তিনটি ইন্টিজার যোগ করার মেথড (প্যারামিটার সংখ্যা ভিন্ন)</span>
<span class="text-purple-400">int</span> Multiply(<span class="text-purple-400">int</span> a, <span class="text-purple-400">int</span> b, <span class="text-purple-400">int</span> c) =&gt; a * b * c;

<span class="text-slate-500">// ৩. নাম এক, কিন্তু দশমিক সংখ্যা গুণ করার মেথড (প্যারামিটার টাইপ ভিন্ন)</span>
<span class="text-purple-400">double</span> Multiply(<span class="text-purple-400">double</span> a, <span class="text-purple-400">double</span> b) =&gt; a * b;</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-purple-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">ADVANCED</span>
                    <h2 class="text-2xl font-bold text-slate-900">Optional & Named Parameters</h2>
                </div>
                <p class="text-slate-700 mb-4">C#-এ মেথড ডিক্লেয়ার করার সময় প্যারামিটারের একটি <b>Default Value</b> সেট
                    করে দেওয়া যায়, একে অপশনাল প্যারামিটার বলে। মেথড কলের সময় সেই আর্গুমেন্ট না পাঠালে ডিফল্ট মানটি কাজ
                    করে।</p>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
<span class="text-purple-400">void</span> PrintProfile(<span class="text-purple-400">string</span> name, <span class="text-purple-400">string</span> role = <span class="text-amber-300">"Guest"</span>) 
{
    Console.WriteLine(<span class="text-amber-300">$"Name: {name}, Role: {role}"</span>);
}

<span class="text-slate-500">// কল করার সময় ২য় প্যারামিটার না দিলেও চলবে</span>
PrintProfile(<span class="text-amber-300">"Sabbir"</span>); <span class="text-slate-400">// Output: Name: Sabbir, Role: Guest</span>

<span class="text-slate-500">// Named Parameters: নাম উল্লেখ করে সিরিয়াল উল্টোপাল্টা করে পাঠানো যায়</span>
PrintProfile(role: <span class="text-amber-300">"Admin"</span>, name: <span class="text-amber-300">"Mizan"</span>);</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Methods Coding Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">Challenge
                        #01</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">সেলসিয়াস থেকে ফারেনহাইট কনভার্টার</h3>
                    <p class="text-sm text-slate-600 mb-4">একটি মেথড তৈরি করুন যার নাম হবে
                        <code>CelsiusToFahrenheit</code>। এটি ইনপুট হিসেবে একটি <code>double celsius</code> মান নিবে এবং
                        হিসাব নিকাশ করে ফারেনহাইট মানটি রিটার্ন করবে। সূত্র: $F = (C \times 9/5) + 32$
                    </p>

                    <details class="bg-slate-900 rounded-lg">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none">💻
                            Solution Code</summary>
                        <pre class="p-4 pt-0 text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800">
<span class="text-purple-400">double</span> CelsiusToFahrenheit(<span class="text-purple-400">double</span> celsius) 
{
    <span class="text-purple-400">return</span> (celsius * <span class="text-emerald-400">9</span> / <span class="text-emerald-400">5</span>) + <span class="text-emerald-400">32</span>;
}

<span class="text-slate-500">// Calling the method</span>
<span class="text-purple-400">double</span> fahrenheit = CelsiusToFahrenheit(<span class="text-emerald-400">37</span>);
Console.WriteLine(fahrenheit); <span class="text-slate-400">// Output: 98.6</span></pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-sky-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (Introduction to OOP - Classes &
                        Objects)</h3>
                    <p class="text-sm text-slate-400 mt-1">ভেরিয়েবল, অ্যারে এবং মেথডগুলোকে একসাথে বাইন্ড করে কীভাবে
                        বাস্তব জীবনের অবজেক্ট এবং ক্লাস (Class & Object) তৈরি করতে হয়, তা দিয়ে শুরু হবে আমাদের মূল
                        সি-শার্প ওওপি জার্নি।</p>
                </div>
                <button
                    class="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Enter OOP World <i class="fa-solid fa-cube ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Live Lab States
const firstName = ref('John');
const lastName = ref('Doe');

const generateFullName = (first, last) => {
    if (!first && !last) return 'Empty';
    return `${first} ${last}`.trim();
};
</script>