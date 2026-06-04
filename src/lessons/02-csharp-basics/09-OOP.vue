<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-indigo-600 font-mono text-sm tracking-widest uppercase font-bold">Module 09:
                Object-Oriented Programming</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Classes & Objects
            </h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">বাস্তব পৃথিবীর যেকোনো বস্তুর বৈশিষ্ট্য এবং কাজকে কোডের
                স্ট্রাকচারে রূপান্তর করার গাইডলাইন।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">Blueprint vs Instance</h2>
                </div>

                <p class="text-slate-700 mb-6 leading-relaxed">
                    C# একটি অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP) ল্যাঙ্গুয়েজ। ওওপি-র মূল লক্ষ্য হলো কোডকে এমনভাবে সাজানো
                    যাতে তা বাস্তব জীবনের এনটিটি বা বস্তুর মতো আচরণ করে। এর দুটি মূল স্তম্ভ হলো ক্লাস এবং অবজেক্ট।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <div class="flex items-center gap-2 mb-2 text-indigo-700 font-bold">
                            <i class="fa-solid fa-drafting-compass"></i>
                            <h3>Class (ব্লুপ্রিন্ট)</h3>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed">
                            ক্লাস হলো একটি আর্কিটেকচারাল নকশা বা টেমপ্লেট। এটি ডিফাইন করে যে এই ক্লাসের আন্ডারে তৈরি
                            হওয়া অবজেক্টগুলোর কী কী ডাটা (Fields) এবং কার্যক্ষমতা (Methods) থাকবে। ক্লাস মেমরিতে কোনো
                            জায়গা দখল করে না।
                        </p>
                    </div>

                    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <div class="flex items-center gap-2 mb-2 text-emerald-700 font-bold">
                            <i class="fa-solid fa-cube"></i>
                            <h3>Object (বাস্তব রূপ)</h3>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed">
                            নকশা দেখে তৈরি করা আসল বাড়িটিই হলো অবজেক্ট। যখন একটি ক্লাস থেকে <code>new</code> কিওয়ার্ড
                            ব্যবহার করে মেমরিতে ইনস্ট্যান্স তৈরি করা হয়, তখন তাকে অবজেক্ট বলে। প্রতিটি অবজেক্টের ডাটা
                            মেমরিতে আলাদাভাবে সংরক্ষিত থাকে।
                        </p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-indigo-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">C# কোড স্ট্রাকচার</h2>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div class="lg:col-span-5 text-slate-700 text-sm space-y-4">
                        <p class="leading-relaxed">
                            একটি ক্লাসের প্রধান দুটি উপাদান থাকে:
                        </p>
                        <ul class="space-y-2 font-mono text-xs">
                            <li><strong class="text-indigo-600">Fields / Properties:</strong> অবজেক্টের বৈশিষ্ট্য বা
                                ভেরিয়েবল (যেমন: Name, Age)।</li>
                            <li><strong class="text-indigo-600">Methods:</strong> অবজেক্টের অ্যাকশন বা কাজ (যেমন:
                                Study())।</li>
                        </ul>
                        <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900">
                            <strong>Access Modifier:</strong> মেথড এবং ফিল্ডের আগে <code>public</code> ব্যবহার করা হয়েছে
                            যাতে ক্লাসের বাইর থেকে এই ডাটাগুলো এক্সেস করা যায়।
                        </div>
                    </div>

                    <div
                        class="lg:col-span-7 bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto shadow-md">
                        <span class="text-purple-400">class</span> <span class="text-emerald-400">Student</span>
                        {
                        <span class="text-purple-400">public string</span> Name;
                        <span class="text-purple-400">public int</span> Age;

                        <span class="text-purple-400">public void</span> Study()
                        {
                        Console.WriteLine(Name + <span class="text-amber-300">" is studying."</span>);
                        }
                        }

                        <span class="text-slate-500">// অবজেক্ট ডিক্লেয়ারেশন ও ইনিশিয়ালাইজেশন</span>
                        <span class="text-emerald-400">Student</span> studentOne = <span
                            class="text-purple-400">new</span> <span class="text-emerald-400">Student</span>();
                        studentOne.Name = <span class="text-amber-300">"Sohan"</span>;
                        studentOne.Age = <span class="text-emerald-400">24</span>;
                        studentOne.Study(); <span class="text-slate-400">// Output: Sohan is studying.</span>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Object Factory and Memory Simulator</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের ফর্মে ডাটা দিয়ে যতবার আপনি বাটন প্রেস করবেন, সিস্টেম
                    মেমরিতে (Heap Memory) একটি করে নতুন এবং স্বতন্ত্র অবজেক্ট ইনস্ট্যান্স তৈরি করবে।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Constructor
                            Input</span>
                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1">Student Name</label>
                            <input v-model="inputName" type="text"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="e.g. Asif">
                        </div>
                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1">Student Age</label>
                            <input v-model.number="inputAge" type="number"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                        </div>
                        <button @click="instantiateObject"
                            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg text-xs transition shadow-sm">
                            Execute: new Student()
                        </button>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-3 uppercase tracking-widest text-[10px] font-bold">Managed
                                Heap Memory (Runtime Objects)</span>
                            <div v-if="heapObjects.length === 0"
                                class="text-slate-600 py-8 text-center border border-dashed border-slate-800 rounded-lg">
                                [ No objects instantiated in heap memory ]
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto pr-1">
                                <div v-for="(item, index) in heapObjects" :key="index"
                                    class="bg-slate-800 border border-slate-700 p-3 rounded-lg flex flex-col justify-between">
                                    <div>
                                        <div class="text-amber-400 font-bold">Instance #{{ index + 1 }}</div>
                                        <div class="text-slate-400 text-[11px] mt-1">Name: "{{ item.name }}"</div>
                                        <div class="text-slate-400 text-[11px]">Age: {{ item.age }}</div>
                                    </div>
                                    <div
                                        class="text-[9px] text-emerald-400 bg-emerald-950/50 border border-emerald-900/50 px-1 py-0.5 rounded mt-2 self-start">
                                        Address: 0x{{ item.address }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-slate-500 text-[10px] border-t border-slate-800 pt-3 mt-3">
                            Total Active Reference: {{ heapObjects.length }}
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Coding Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">একটি Product ক্লাস ডিজাইন করুন</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. ক্লাসটির নাম দিন <code>Product</code> যার ফিল্ড হবে <code>ProductName</code> এবং
                        <code>Price</code>।<br />
                        ২. একটি মেথড রাখুন <code>DisplayDetails()</code> যা প্রোডাক্টের নাম এবং দাম কনসোলে প্রিন্ট করবে।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Reference Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">class</span> <span class="text-emerald-400">Product</span>
{
    <span class="text-purple-400">public string</span> ProductName;
    <span class="text-purple-400">public double</span> Price;

    <span class="text-purple-400">public void</span> DisplayDetails()
    {
        Console.WriteLine(<span class="text-amber-300">$"Product: {ProductName}, Price: {Price} TK"</span>);
    }
}

<span class="text-slate-500">// Usage:</span>
<span class="text-emerald-400">Product</span> p = <span class="text-purple-400">new</span> <span class="text-emerald-400">Product</span>();
p.ProductName = <span class="text-amber-300">"Laptop"</span>;
p.Price = <span class="text-emerald-400">75000</span>;
p.DisplayDetails();</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-indigo-400 font-mono font-bold tracking-widest uppercase">Next
                        Module</span>
                    <h3 class="text-xl font-bold mt-1">কনস্ট্রাক্টর ও প্রোপার্টিজ (Constructors & Properties)</h3>
                    <p class="text-sm text-slate-400 mt-1">অবজেক্ট তৈরির মুহূর্তে ডাটা অ্যাসাইন করার অটোমেটিক মেকানিজম
                        এবং প্রোপার্টির মাধ্যমে এনক্যাপসুলেশনের প্রাথমিক নিয়মগুলো জানবো পরবর্তী চ্যাপ্টারে।</p>
                </div>
                <router-link to="/lessons/constructors-properties"
                    class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Next Module: Constructors & Properties <i class="fa-solid fa-arrow-right ml-1"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputName = ref('');
const inputAge = ref(22);
const heapObjects = ref([]);

const instantiateObject = () => {
    if (!inputName.value.trim()) {
        alert('Please enter a valid student name.');
        return;
    }

    // Random hexadecimal generator to simulate memory address
    const randomAddress = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0');

    heapObjects.value.push({
        name: inputName.value,
        age: inputAge.value,
        address: randomAddress
    });

    // Clear Form Inputs
    inputName.value = '';
    inputAge.value = 22;
};
</script>