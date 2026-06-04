<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-emerald-600 font-mono text-sm tracking-widest uppercase font-bold">Module 10: Object
                Initialization & Security</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Constructors &
                Properties</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">অবজেক্ট তৈরির মুহূর্তেই ডাটা লোড করা এবং স্মার্ট
                প্রোপার্টিজ (Get/Set) ব্যবহার করে ক্লাসের অভ্যন্তরীণ ডাটা সুরক্ষিত করার কমপ্লিট গাইডলাইন।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        1</span>
                    <h2 class="text-2xl font-bold text-slate-900">Constructor (Object Initialization)</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    <b>Constructor</b> হলো একটি স্পেশাল মেথড, যা কোনো ক্লাসের অবজেক্ট তৈরি হওয়ার সাথে সাথে
                    <code>new</code> কিওয়ার্ডের মাধ্যমে <b>অটোমেটিকভাবে কল হয়</b>। এর প্রধান কাজ হলো অবজেক্টের ফিল্ড বা
                    ভেরিয়েবলগুলোকে প্রাথমিক মান (Default/Initial Values) দেওয়া।
                </p>

                <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 mb-6 font-mono">
                    <strong>💡 গোল্ডেন রুলস:</strong> <br />
                    ১. কনস্ট্রাক্টরের নাম এবং ক্লাসের নাম একদম হুবহু <b>একই হতে হবে</b>। <br />
                    ২. এর কোনো <b>Return Type</b> থাকে না (এমনকি void-ও লেখা যায় না)।
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
<span class="text-purple-400">class</span> <span class="text-emerald-400">Employee</span>
{
    <span class="text-purple-400">public string</span> Name;
    
    <span class="text-slate-500">// ১. কনস্ট্রাক্টর ডিফাইন করা (প্যারামিটারসহ)</span>
    <span class="text-purple-400">public</span> <span class="text-emerald-400">Employee</span>(<span class="text-purple-400">string</span> empName)
    {
        Name = empName;
    }
}

<span class="text-slate-500">// ২. অবজেক্ট তৈরির সময়ই এক লাইনে ডাটা পাস</span>
<span class="text-emerald-400">Employee</span> emp = <span class="text-purple-400">new</span> <span class="text-emerald-400">Employee</span>(<span class="text-amber-300">"Karim"</span>);</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        2</span>
                    <h2 class="text-2xl font-bold text-slate-900">Properties: Get এবং Set (ডাটা গার্ড)</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    সরাসরি ক্লাসের ভেরিয়েবলকে <code>public</code> করে দেওয়া বিপজ্জনজনক, কারণ যে কেউ ভুল ডাটা ঢুকিয়ে দিতে
                    পারে (যেমন: Salary = -50000)।
                    তাই ভেরিয়েবলকে <code>private</code> রেখে, তার ওপর কন্ট্রোল বা ভ্যালিডেশন বসানোর জন্য আমরা ব্যবহার
                    করি <b>Properties</b>।
                </p>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div class="space-y-4 text-sm text-slate-600">
                        <p>এখানে দুটি কি-ওয়ার্ড কাজ করে:</p>
                        <ul class="space-y-2 font-mono text-xs">
                            <li><strong class="text-emerald-600">get:</strong> ডাটা পড়ার বা রিড করার অনুমতি দেয়।</li>
                            <li><strong class="text-emerald-600">set:</strong> ডাটা রাইট বা অ্যাসাইন করার সময়
                                ফিল্টার/ভ্যালিডেশন গাইড হিসেবে কাজ করে (<code>value</code> কিওয়ার্ডের মাধ্যমে)।</li>
                        </ul>
                    </div>
                    <pre class="bg-slate-900 text-blue-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">
<span class="text-purple-400">private double</span> _salary; <span class="text-slate-500">// Backing field</span>

<span class="text-purple-400">public double</span> Salary
{
    <span class="text-purple-400">get</span> { <span class="text-purple-400">return</span> _salary; }
    <span class="text-purple-400">set</span> {
        <span class="text-purple-400">if</span> (value &gt;= <span class="text-emerald-400">0</span>) _salary = value;
        <span class="text-purple-400">else</span> _salary = <span class="text-emerald-400">0</span>; <span class="text-slate-500">// নেগেটিভ দিলে ০ হবে</span>
    }
}</pre>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-emerald-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Properties Simulator</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের ইনপুটে স্যালারি টাইপ করুন। দেখুন প্রোপার্টির ভেতরের
                    <code>set</code> কন্ডিশন কীভাবে নেগেটিভ ডাটা ডিটেক্ট করে আপনার অবজেক্টের আসল স্টেটকে প্রোটেক্ট করছে।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl flex flex-col justify-between">
                        <div>
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">C# Set
                                Property Trigger</span>
                            <label class="block text-xs font-medium text-slate-700 mb-1">Input Salary Value
                                (TK):</label>
                            <input v-model.number="inputSalary" type="number"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none font-mono"
                                placeholder="Enter salary amount">
                        </div>

                        <div
                            class="text-[11px] text-slate-500 mt-4 italic bg-white p-3 rounded border border-slate-200">
                            <strong>লজিক:</strong> ইনপুট যদি ০ বা তার চেয়ে বড় হয় তাহলেই কেবল মেমরিতে সেভ হবে, নতুবা
                            "Invalid Value Alert" আসবে এবং ডিফল্ট ০ বসে যাবে।
                        </div>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-4 uppercase tracking-widest text-[10px] font-bold">Object
                                Memory Visualization</span>

                            <div class="space-y-3">
                                <div
                                    class="flex justify-between items-center bg-slate-800 p-3 rounded-lg border border-slate-700">
                                    <span class="text-slate-400">1. Raw Input (value):</span>
                                    <span class="font-bold"
                                        :class="inputSalary >= 0 ? 'text-blue-400' : 'text-rose-400'">{{ inputSalary
                                        }}</span>
                                </div>

                                <div
                                    class="flex justify-between items-center bg-slate-800 p-3 rounded-lg border border-slate-700">
                                    <span class="text-slate-400">2. Guard Filter Status:</span>
                                    <span v-if="inputSalary >= 0"
                                        class="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-900">Allowed
                                        ✅</span>
                                    <span v-else
                                        class="text-rose-400 font-bold bg-rose-950 px-2 py-0.5 rounded border border-rose-900 animate-pulse">Blocked
                                        🛑</span>
                                </div>

                                <div
                                    class="flex justify-between items-center bg-slate-950 p-4 rounded-lg border border-slate-800 mt-4">
                                    <span class="text-indigo-400 font-bold">Internal state (_salary):</span>
                                    <span class="text-xl font-bold text-emerald-400">{{ inputSalary >= 0 ? inputSalary :
                                        0 }} TK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Constructor Coding Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Hands-on
                        Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">একটি কার স্মার্ট ড্যাশবোর্ড ক্লাস তৈরি করুন</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. <code>Car</code> নামে একটি ক্লাস বানান যার একটি কনস্ট্রাক্টর থাকবে ব্র্যান্ডের নাম সেট করার
                        জন্য।<br />
                        ২. একটি প্রোপার্টি রাখুন <code>Speed</code>। যদি কেউ স্পীড ৩০০ এর বেশি সেট করতে চায়, তবে তা
                        অটোমেটিক্যালি ফিল্টার হয়ে সর্বোচ্চ ৩০০ সেট হবে।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Reference Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">class</span> <span class="text-emerald-400">Car</span>
{
    <span class="text-purple-400">public string</span> Brand;
    <span class="text-purple-400">private int</span> _speed;

    <span class="text-slate-500">// Constructor</span>
    <span class="text-purple-400">public</span> <span class="text-emerald-400">Car</span>(<span class="text-purple-400">string</span> brandName) {
        Brand = brandName;
    }

    <span class="text-slate-500">// Property with restriction</span>
    <span class="text-purple-400">public int</span> Speed {
        <span class="text-purple-400">get</span> { <span class="text-purple-400">return</span> _speed; }
        <span class="text-purple-400">set</span> {
            <span class="text-purple-400">if</span> (value &gt; <span class="text-emerald-400">300</span>) _speed = <span class="text-emerald-400">300</span>;
            <span class="text-purple-400">else</span> _speed = value;
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
                    <h3 class="text-xl font-bold mt-1">OOP Pillar 1: Encapsulation (ডাটা হাইডিং ও সিকিউরিটি)</h3>
                    <p class="text-sm text-slate-400 mt-1">পরবর্তী চ্যাপ্টারে আমরা অবজেক্ট-ওরিয়েন্টেডের মূল চার পিলারের
                        প্রথম এবং সবচেয়ে গুরুত্বপূর্ণ পিলার—এনক্যাপসুলেশন এবং অ্যাক্সেস মডিফায়ার (Public, Private,
                        Protected) নিয়ে ইন-ডেপ্থ কাজ করব।</p>
                </div>
                <button
                    class="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Next: Encapsulation <i class="fa-solid fa-shield-halved ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputSalary = ref(25000);
</script>