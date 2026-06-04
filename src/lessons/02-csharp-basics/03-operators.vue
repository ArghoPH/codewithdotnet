<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-12 text-center">
            <span class="text-emerald-600 font-mono text-sm tracking-widest uppercase font-bold">Module 03: Data
                Manipulation</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">C# Operators
                Masterclass</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">অপারেটরের একদম বেসিক গাণিতিক হিসাব থেকে শুরু করে
                অ্যাডভান্সড মেমরি ও নাল (Null) হ্যান্ডেলিং অপারেটরের পুঙ্খানুপুঙ্খ গাইডলাইন।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-12">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        1</span>
                    <h2 class="text-2xl font-bold text-slate-900">Arithmetic Operators (গাণিতিক অপারেটর)</h2>
                </div>

                <p class="text-slate-700 mb-4">গণিত করার জন্য C#-এ ৫টি প্রধান অপারেটর রয়েছে: <code>+</code> (যোগ),
                    <code>-</code> (বিয়োগ), <code>*</code> (গুণ), <code>/</code> (ভাগ), এবং <code>%</code> (Modulus বা
                    ভাগশেষ)।</p>

                <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-sm text-slate-700 mb-6">
                    <strong>⚠️ Integer Division ট্র্যাপ:</strong> C#-এ দুটি <code>int</code> সংখ্যাকে ভাগ করলে আউটপুট
                    সবসময় একটি <code>int</code> বা পূর্ণসংখ্যাই আসে (দশমিক অংশ বাদ পড়ে যায়)। দশমিক আউটপুট পেতে অন্তত
                    একটি সংখ্যাকে <code>double</code> হতে হবে।
                </div>

                <pre class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
<span class="text-purple-400">int</span> a = <span class="text-emerald-400">10</span>;
<span class="text-purple-400">int</span> b = <span class="text-emerald-400">3</span>;

Console.WriteLine(a / b);   <span class="text-slate-400">// Output: 3 (পূর্ণসংখ্যা ভাগ)</span>
Console.WriteLine(a % b);   <span class="text-slate-400">// Output: 1 (ভাগশেষ বা রিমেইন্ডার)</span>
Console.WriteLine(<span class="text-emerald-400">10.0</span> / <span class="text-emerald-400">3</span>); <span class="text-slate-400">// Output: 3.3333333333333335 (সঠিক দশমিক ভাগ)</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        2</span>
                    <h2 class="text-2xl font-bold text-slate-900">Increment & Decrement (Prefix vs Postfix)</h2>
                </div>
                <p class="text-slate-700 mb-4">মান ১ বাড়াতে <code>++</code> এবং ১ কমাতে <code>--</code> ব্যবহার করা হয়।
                    তবে এটি ভেরিয়েবলের আগে নাকি পরে বসছে, তার ওপর ভিত্তি করে এর আচরণ বদলে যায় যা ইন্টারভিউতে প্রচুর
                    জিজ্ঞাসা করা হয়।</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <span class="font-mono font-bold text-emerald-600 block mb-1">Postfix (i++)</span>
                        <span class="text-xs text-slate-500 block mb-2">"আগে ব্যবহার, পরে পরিবর্তন"</span>
                        <p class="text-slate-600">বর্তমান লাইনে ভেরিয়েবলের পুরনো মানটিই ব্যবহৃত হবে, লাইন শেষ হওয়ার পর
                            মেমরিতে মান ১ বাড়বে।</p>
                    </div>
                    <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <span class="font-mono font-bold text-emerald-600 block mb-1">Prefix (++i)</span>
                        <span class="text-xs text-slate-500 block mb-2">"আগে পরিবর্তন, পরে ব্যবহার"</span>
                        <p class="text-slate-600">বর্তমান লাইনেই প্রথমে মেমরিতে মান ১ বেড়ে যাবে, তারপর সেই বর্ধিত মানটি
                            কোডে ব্যবহৃত হবে।</p>
                    </div>
                </div>

                <div class="mt-6 bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-sm border border-slate-800">
                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">🔍 লাইভ মেমরি
                        ল্যাব: Prefix vs Postfix টেস্টার</span>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-slate-800/50 p-4 rounded-lg border border-slate-700 space-y-4">
                            <div class="flex items-center justify-between">
                                <span>Initial Value of X:</span>
                                <span class="text-emerald-400 font-bold">5</span>
                            </div>
                            <div class="flex gap-2">
                                <button @click="testPostfix"
                                    class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded text-xs transition">
                                    Run Postfix (y = x++)
                                </button>
                                <button @click="testPrefix"
                                    class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded text-xs transition">
                                    Run Prefix (y = ++x)
                                </button>
                                <button @click="resetLab"
                                    class="bg-slate-700 hover:bg-slate-600 text-white font-bold px-3 py-1.5 rounded text-xs transition">
                                    Reset
                                </button>
                            </div>
                        </div>

                        <div
                            class="bg-black/40 p-4 rounded-lg flex flex-col justify-center space-y-2 text-xs md:text-sm">
                            <div><span class="text-slate-500">&gt;</span> Current Mode: <span class="text-amber-400">{{
                                    labMode }}</span></div>
                            <div><span class="text-slate-500">&gt;</span> Value of <span
                                    class="text-purple-400">x</span> in Memory: <span
                                    class="text-emerald-400 font-bold">{{ labX }}</span></div>
                            <div><span class="text-slate-500">&gt;</span> Value assigned to <span
                                    class="text-purple-400">y</span>: <span class="text-blue-400 font-bold">{{ labY
                                    }}</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        3</span>
                    <h2 class="text-2xl font-bold text-slate-900">Comparison & Logical Operators</h2>
                </div>

                <p class="text-slate-700 mb-4"><strong>Comparison Operators</strong> (`==`, `!=`, `>`, `<`, `>=`, `<=`)
                            দুটি ভ্যালু তুলনা করে। আর একাধিক কন্ডিশন মেলাতে <strong>Logical Operators</strong> (`&&`,
                            `||`, `!`) ব্যবহৃত হয়।</p>

                <div class="bg-indigo-50 p-5 rounded-xl border border-indigo-200 text-sm text-slate-700 mb-4">
                    <span class="font-bold text-indigo-900 block mb-1">💡 অ্যাডভান্সড কনসেপ্ট: Short-Circuit
                        Evaluation</span>
                    C#-এ <code>&&</code> এবং <code>||</code> অত্যন্ত চালাক।
                    <br />• <code>&&</code> (AND) এর ক্ষেত্রে প্রথম কন্ডিশনটিই যদি <b>False</b> হয়, তবে C# পরের
                    কন্ডিশনটি আর চেকই করে না (কারণ ফলাফল লজিক্যালি False ই হবে)।
                    <br />• <code>||</code> (OR) এর ক্ষেত্রে প্রথম কন্ডিশনটি <b>True</b> হলে পরের অংশটি স্কিপ করা হয়।
                    একে শর্ট-সার্কিট ইভালুয়েশন বলে, যা অ্যাপ্লিকেশনের পারফরম্যান্স বাড়ায়।
                </div>

                <pre class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
<span class="text-purple-400">int</span> age = <span class="text-emerald-400">20</span>;
<span class="text-purple-400">bool</span> hasId = <span class="text-purple-400">true</span>;

<span class="text-purple-400">bool</span> canEnter = (age &gt;= <span class="text-emerald-400">18</span>) && hasId; <span class="text-slate-400">// Comparison + Logical AND</span>
Console.WriteLine(canEnter); <span class="text-slate-400">// Output: True</span></pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-emerald-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">TOPIC
                        4</span>
                    <h2 class="text-2xl font-bold text-slate-900">Compound Assignment Operators</h2>
                </div>
                <p class="text-slate-700 mb-4">কোনো ভেরিয়েবলের নিজস্ব মানের সাথে গাণিতিক অপারেশন চালিয়ে আবার সেই
                    ভেরিয়েবলেই মান অ্যাসাইন করার সংক্ষিপ্ত রূপই হলো কম্পাউন্ড অ্যাসাইনমেন্ট।</p>

                <div class="overflow-x-auto border border-slate-200 rounded-xl">
                    <table class="w-full text-left border-collapse text-sm">
                        <thead class="bg-slate-50 text-slate-600 font-bold">
                            <tr>
                                <th class="p-3">Operator</th>
                                <th class="p-3">Short-hand Example</th>
                                <th class="p-3">Equivalent to (আসল রূপ)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 font-mono text-slate-700">
                            <tr>
                                <td class="p-3 font-bold text-emerald-600">+=</td>
                                <td class="p-3">x += 5;</td>
                                <td class="p-3">x = x + 5;</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-emerald-600">-=</td>
                                <td class="p-3">x -= 3;</td>
                                <td class="p-3">x = x - 3;</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-emerald-600">*=</td>
                                <td class="p-3">x *= 2;</td>
                                <td class="p-3">x = x * 2;</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-emerald-600">/=</td>
                                <td class="p-3">x /= 4;</td>
                                <td class="p-3">x = x / 4;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-purple-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">C#
                        ADVANCED</span>
                    <h2 class="text-2xl font-bold text-slate-900">Null-Coalescing & Null-Conditional Operators</h2>
                </div>
                <p class="text-slate-700 mb-4">মডার্ন C# অ্যাপ্লিকেশন ডেভেলপমেন্টে <code>NullReferenceException</code>
                    বা ক্র্যাশ এড়ানোর জন্য এই অপারেটরগুলো ডেভেলপারের সবচেয়ে বড় বন্ধু।</p>

                <div class="space-y-4">
                    <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs md:text-sm text-blue-300">
                        <span class="text-emerald-400 block mb-1">// 1. Null-Coalescing Operator (??)</span>
                        <span class="text-slate-400">// বামদিকের ভ্যালু null হলে ডানদিকের ডিফল্ট ভ্যালুটি ব্যবহার
                            করবে</span>
                        <span class="text-purple-400">string</span> incomingName = <span
                            class="text-purple-400">null</span>;
                        <span class="text-purple-400">string</span> displayName = incomingName ?? <span
                            class="text-amber-300">"Guest User"</span>;
                        Console.WriteLine(displayName); <span class="text-slate-400">// Output: Guest User</span>
                    </div>

                    <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs md:text-sm text-blue-300">
                        <span class="text-emerald-400 block mb-1">// 2. Null-Coalescing Assignment (??=)</span>
                        <span class="text-slate-400">// ভেরিয়েবলের মান শুধুমাত্র null হলেই কেবল নতুন মান সেট করবে</span>
                        <span class="text-purple-400">string</span> currentCity = <span
                            class="text-purple-400">null</span>;
                        currentCity ??= <span class="text-amber-300">"Dhaka"</span>;
                    </div>

                    <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs md:text-sm text-blue-300">
                        <span class="text-emerald-400 block mb-1">// 3. Null-Conditional Operator (?.)</span>
                        <span class="text-slate-400">// অবজেক্ট null না হলে তার প্রোপার্টিতে এক্সেস করবে, null হলে
                            ক্র্যাশ না করে সরাসরি null রিটার্ন করবে</span>
                        <span class="text-purple-400">string</span> message = <span class="text-purple-400">null</span>;
                        <span class="text-purple-400">int</span>? length = message?.Length; <span
                            class="text-slate-400">// ক্র্যাশ করবে না, length হবে null</span>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-purple-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">BIT
                        LEVEL</span>
                    <h2 class="text-2xl font-bold text-slate-900">Bitwise Operators (বিটওয়াইজ অপারেটর)</h2>
                </div>
                <p class="text-slate-700 mb-4">ডাটার ডেসিমাল মানের ওপর কাজ না করে সরাসরি মেমরির <b>Binary Bits (0,
                        1)</b> লেভেলে ম্যানিপুলেশন করার জন্য এই অপারেটরগুলো ব্যবহৃত হয়। নেটওয়ার্কিং প্রোটোকল বা গেম
                    ইঞ্জিনে এটি বেশি লাগে।</p>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                    <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span class="text-purple-600 font-bold block">&amp; (Bitwise AND)</span>
                        উভয় বিট ১ হলে ১ হয়।
                    </div>
                    <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span class="text-purple-600 font-bold block">| (Bitwise OR)</span>
                        যেকোনো একটি বিট ১ হলে ১ হয়।
                    </div>
                    <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span class="text-purple-600 font-bold block">^ (Bitwise XOR)</span>
                        দুটি বিট অসমান হলে ১ হয়।
                    </div>
                    <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span class="text-purple-600 font-bold block">&lt;&lt; / &gt;&gt; (Bit Shifts)</span>
                        বিটগুলোকে বামে বা ডানে সরায়।
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-slate-900 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">RULES</span>
                    <h2 class="text-2xl font-bold text-slate-900">Operator Precedence & Associativity</h2>
                </div>
                <p class="text-slate-700 mb-4">গণিতের সরল অঙ্কের "বদমাশ" (BODMAS) নিয়মের মতো C#-এও কোনো লাইনে একাধিক
                    অপারেটর থাকলে কে আগে কাজ করবে তার একটি নির্দিষ্ট অগ্রাধিকার তালিকা (Precedence Table) রয়েছে:</p>

                <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 text-sm space-y-2">
                    <div class="flex justify-between border-b pb-1 text-xs font-bold text-slate-500 uppercase">
                        <span>অপারেটর গ্রুপ</span>
                        <span>অগ্রাধিকার (Precedence)</span>
                    </div>
                    <div class="flex justify-between font-mono"><span>Parentheses <code>( )</code> ,
                            <code>?.</code></span> <span class="text-emerald-600 font-bold">1st (সর্বোচ্চ)</span></div>
                    <div class="flex justify-between font-mono"><span>Unary <code>++</code> , <code>--</code> ,
                            <code>!</code></span> <span class="text-emerald-500 font-medium">2nd</span></div>
                    <div class="flex justify-between font-mono"><span>Multiplicative <code>*</code> , <code>/</code> ,
                            <code>%</code></span> <span class="text-blue-500 font-medium">3rd</span></div>
                    <div class="flex justify-between font-mono"><span>Additive <code>+</code> , <code>-</code></span>
                        <span class="text-amber-500 font-medium">4th</span></div>
                    <div class="flex justify-between font-mono"><span>Relational <code>&gt;</code> , <code>&lt;=</code>
                            , <code>==</code></span> <span class="text-orange-500 font-medium">5th</span></div>
                    <div class="flex justify-between font-mono"><span>Logical <code>&&</code> , <code>||</code></span>
                        <span class="text-rose-500 font-medium">6th</span></div>
                    <div class="flex justify-between font-mono"><span>Assignment <code>=</code> , <code>+=</code></span>
                        <span class="text-slate-400 font-medium">Last (সর্বনিম্ন)</span></div>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-emerald-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">শর্তাধীন সিদ্ধান্ত (04-conditional-if-else.vue)</h3>
                    <p class="text-sm text-slate-400 mt-1">এইমাত্র শেখা কন্ডিশনাল এবং কম্প্যারিসন অপারেটরগুলোকে ব্যবহার
                        করে কীভাবে অ্যাপ্লিকেশনের লজিক কন্ট্রোল করতে হয় তা শিখবো পরবর্তী মডিউলে।</p>
                </div>
                <button
                    class="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Proceed to Conditionals <i class="fa-solid fa-arrow-right ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Live Lab এর জন্য রিয়াক্টিভ স্টেট
const labX = ref(5);
const labY = ref(0);
const labMode = ref('None (Click a button)');

const testPostfix = () => {
    labMode.value = 'y = x++ (Postfix)';
    labX.value = 5;
    // Postfix simulation: y gets old value, then x increments
    labY.value = labX.value;
    labX.value = labX.value + 1;
};

const testPrefix = () => {
    labMode.value = 'y = ++x (Prefix)';
    labX.value = 5;
    // Prefix simulation: x increments first, then y gets new value
    labX.value = labX.value + 1;
    labY.value = labX.value;
};

const resetLab = () => {
    labMode.value = 'None (Reset)';
    labX.value = 5;
    labY.value = 0;
};
</script>