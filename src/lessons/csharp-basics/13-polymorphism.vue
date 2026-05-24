<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-violet-600 font-mono text-sm tracking-widest uppercase font-bold">Module 13: OOP Pillar
                3</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Polymorphism
                (পলিমরফিজম)</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">একই নামের মেথডের ভিন্ন ভিন্ন রূপ! কীভাবে প্যারেন্ট
                ক্লাসের মেথডকে চাইল্ড ক্লাসে রি-রাইট বা ওভাররাইড করতে হয় তার প্রফেশনাল আর্কিটেকচার গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-violet-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">What is Polymorphism? Why is it important?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    <b>Polymorphism</b> শব্দটা এসেছে গ্রীক শব্দ Poly (অনেক) এবং Morph (রূপ) থেকে। অবজেক্ট-ওরিয়েন্টেড
                    প্রোগ্রামিংয়ে এর মানে হলো—<b>একই নামের একটি মেথড ভিন্ন ভিন্ন অবজেক্টের জন্য ভিন্ন ভিন্ন কাজ করতে
                        পারবে।</b>
                </p>

                <p class="text-slate-700 mb-6 leading-relaxed">
                    যেমন ধরা যাক, একটি প্যারেন্ট ক্লাস হলো <code>Animal</code> যার মেথড হলো <code>MakeSound()</code>।
                    এখন <code>Dog</code> এবং <code>Cat</code> দুইজনেই অ্যানিমেল, কিন্তু ডগের আওয়াজ হবে "Bark" আর ক্যাটের
                    আওয়াজ হবে "Meow"। এই যে একই মেথডকে চাইল্ড ক্লাসে গিয়ে বদলে ফেলা, এটাই হলো <b>Runtime Polymorphism /
                        Method Overriding</b>।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div class="p-4 bg-violet-50 border border-violet-100 rounded-xl">
                        <code class="text-violet-700 font-bold text-sm block mb-1">virtual</code>
                        <p class="text-xs text-slate-600 leading-relaxed">প্যারেন্ট ক্লাসের যে মেথডটিকে ভবিষ্যতে চাইল্ড
                            ক্লাসে পরিবর্তন করার অনুমতি দেওয়া হয়, তার আগে <code>virtual</code> লিখতে হয়।</p>
                    </div>
                    <div class="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                        <code class="text-emerald-700 font-bold text-sm block mb-1">override</code>
                        <p class="text-xs text-slate-600 leading-relaxed">প্যারেন্ট ক্লাসের ভার্চুয়াল মেথডটিকে চাইল্ড
                            ক্লাসে এসে নতুন রূপ দেওয়ার জন্য মেথডের আগে <code>override</code> লিখতে হয়।</p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-violet-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">IMPLEMENTATION</span>
                    <h2 class="text-2xl font-bold text-slate-900">C# Method Overriding Structure</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-purple-400">public class</span> <span class="text-emerald-400">Animal</span> <span class="text-slate-500">// Base Class</span>
{
    <span class="text-purple-400">public virtual void</span> <span class="text-sky-400">MakeSound</span>()
    {
        Console.WriteLine(<span class="text-amber-300">"Some generic animal sound"</span>);
    }
}

<span class="text-purple-400">public class</span> <span class="text-emerald-400">Dog</span> : <span class="text-emerald-400">Animal</span> <span class="text-slate-500">// Derived Class</span>
{
    <span class="text-purple-400">public override void</span> <span class="text-sky-400">MakeSound</span>() <span class="text-slate-500">// মেথড ওভাররাইড করা হলো</span>
    {
        Console.WriteLine(<span class="text-amber-300">"The dog barks: Woof! Woof!"</span>);
    }
}</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-violet-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Runtime Polymorphism Lab</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের বাটনগুলো থেকে আলাদা আলাদা অবজেক্ট সিলেক্ট করে
                    <code>MakeSound()</code> মেথডটি কল করুন। একই মেথড কীভাবে অবজেক্ট পরিবর্তনের সাথে সাথে নিজের আউটপুট
                    ডাইনামিকালি বদলে ফেলছে তা লাইভ দেখুন।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Select Active
                            Reference Shape</span>

                        <button @click="triggerSound('Generic')"
                            class="w-full text-left bg-white hover:bg-slate-100 border border-slate-300 rounded-xl p-3 text-xs font-mono transition flex justify-between items-center">
                            <span>Animal pet = new Animal();</span>
                            <i class="fa-solid fa-chevron-right text-slate-400"></i>
                        </button>

                        <button @click="triggerSound('Dog')"
                            class="w-full text-left bg-white hover:bg-slate-100 border border-slate-300 rounded-xl p-3 text-xs font-mono transition flex justify-between items-center">
                            <span>Animal pet = new Dog();</span>
                            <i class="fa-solid fa-chevron-right text-violet-500"></i>
                        </button>

                        <button @click="triggerSound('Cat')"
                            class="w-full text-left bg-white hover:bg-slate-100 border border-slate-300 rounded-xl p-3 text-xs font-mono transition flex justify-between items-center">
                            <span>Animal pet = new Cat();</span>
                            <i class="fa-solid fa-chevron-right text-emerald-500"></i>
                        </button>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-3 uppercase tracking-widest text-[10px] font-bold">Execution
                                Engine Console</span>
                            <div
                                class="bg-black/50 border border-slate-950 p-5 rounded-lg min-h-[110px] flex flex-col justify-center space-y-2">
                                <div class="text-slate-500">&gt; pet.MakeSound();</div>
                                <div v-if="soundOutput"
                                    class="text-xl font-bold text-amber-400 animate-in fade-in duration-300">
                                    "{{ soundOutput }}"
                                </div>
                                <div v-else class="text-slate-600 italic">
                                    Click a constructor to invoke the polymorphic method...
                                </div>
                            </div>
                        </div>
                        <div class="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-3">
                            Polymorphism Type: Runtime (Method Overriding)
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">Polymorphism Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Real
                        Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Create a Payment Gateway Override System
                    </h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. একটি বেস ক্লাস তৈরি করুন <code>Payment</code> যার ভার্চুয়াল মেথড থাকবে
                        <code>ProcessPayment()</code>। এটি ডিফল্ট প্রিন্ট করবে "Processing generic payment"।<br />
                        ২. একটি চাইল্ড ক্লাস তৈরি করুন <code>BkashPayment</code> যা মেথডটিকে ওভাররাইড করে প্রিন্ট করবে
                        "Processing bKash Payment with 1.85% charge"।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Reference Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">public class</span> <span class="text-emerald-400">Payment</span>
{
    <span class="text-purple-400">public virtual void</span> ProcessPayment()
    {
        Console.WriteLine(<span class="text-amber-300">"Processing generic payment"</span>);
    }
}

<span class="text-purple-400">public class</span> <span class="text-emerald-400">BkashPayment</span> : <span class="text-emerald-400">Payment</span>
{
    <span class="text-purple-400">public override void</span> ProcessPayment()
    {
        Console.WriteLine(<span class="text-amber-300">"Processing bKash Payment with 1.85% charge"</span>);
    }
}</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-violet-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">OOP Pillar 4: Abstraction (অ্যাবস্ট্রাকশন এবং ইন্টারফেস)</h3>
                    <p class="text-sm text-slate-400 mt-1">ওওপি-র শেষ এবং চূড়ান্ত পিলার! যেখানে আমরা শিখবো কীভাবে
                        ক্লাসের ভেতরের অপ্রয়োজনীয় জটিল ইমপ্লিমেন্টেশন লুকিয়ে শুধু প্রয়োজনীয় ফিচারগুলো এক্সপোজ করতে হয়
                        এবং কীভাবে বড় সফটওয়্যারের আর্কিটেকচারাল নকশা (Interface) তৈরি করতে হয়।</p>
                </div>
                <button
                    class="bg-violet-500 hover:bg-violet-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Next: Abstraction <i class="fa-solid fa-layer-group ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const soundOutput = ref('');

const triggerSound = (type) => {
    if (type === 'Generic') {
        soundOutput.value = 'Some generic animal sound...';
    } else if (type === 'Dog') {
        soundOutput.value = 'The dog barks: Woof! Woof! 🦮';
    } else if (type === 'Cat') {
        soundOutput.value = 'The cat meows: Meow! Meow! 🐈';
    }
};
</script>