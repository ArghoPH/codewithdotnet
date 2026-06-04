<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <!-- MASTER COURSE HEADER -->
        <div class="max-w-4xl mx-auto mb-12 text-center">
            <span class="text-blue-600 font-mono text-sm tracking-widest uppercase font-bold">Deep Dive Module</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">C# Variables
                Masterclass</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">ডাটা মেমরিতে রাখা থেকে শুরু করে টাইপ কাস্টিং এবং মেমরি
                ম্যানেজমেন্ট (Stack vs Heap) এর একদম ইন-ডেপ্থ গাইডলাইন।</p>
        </div>

        <!-- MAIN COURSE CONTENT -->
        <div class="max-w-4xl mx-auto space-y-12">

            <!-- ========================================== -->
            <!-- SECTION 1: THE CORE CONCEPT -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHAPTER
                        1</span>
                    <h2 class="text-2xl font-bold text-slate-900">ভেরিয়েবল কী এবং কেন প্রয়োজন?</h2>
                </div>

                <div class="space-y-6">
                    <div class="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-600">
                        <h3 class="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Real-world Analogy
                        </h3>
                        <p class="text-slate-700">মনে করুন, আপনার রান্নাঘরে অনেকগুলো মশলার কৌটা আছে। লবণের কৌটায় আপনি
                            লবণ রাখেন, চিনির কৌটায় চিনি। ভেরিয়েবল হলো কম্পিউটারের RAM-এর ভেতরের সেই **কৌটা বা বাক্স**।
                            আর বাক্সের গায়ের লেবেলটি হলো **Variable Name**।</p>
                    </div>

                    <div class="text-slate-700 space-y-4">
                        <p>C# একটি <strong>Strongly-Typed Language</strong>। এর মানে হলো, আপনি বাক্সে কী রাখবেন তা আগে
                            থেকেই ফিক্সড করে দিতে হবে। আপনি চাইলেই চিনির বাক্সে ইলিশ মাছ রাখতে পারবেন না!</p>

                        <h4 class="font-bold text-slate-900 mt-4 mb-2">ভেরিয়েবলের ৩টি প্রধান অংশ:</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium">
                            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <span class="text-blue-600 font-bold block mb-1">1. Data Type</span>
                                বাক্সের ধরণ (যেমন: সংখ্যা নাকি লেখা)
                            </div>
                            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <span class="text-blue-600 font-bold block mb-1">2. Name (Identifier)</span>
                                বাক্সটিকে চেনার জন্য একটি ইউনিক নাম
                            </div>
                            <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <span class="text-blue-600 font-bold block mb-1">3. Value</span>
                                বাক্সের ভেতরে রাখা আসল ডাটা বা উপাদান
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">C# Syntax Structure
                        </h3>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">int</span> userAge = <span class="text-emerald-400">25</span>;       <span class="text-slate-400">// int হলো Type, userAge হলো Name, 25 হলো Value</span>
<span class="text-purple-400">string</span> country = <span class="text-amber-300">"Bangladesh"</span>; <span class="text-slate-400">// টেক্সট বা লেখার জন্য string</span></pre>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- SECTION 2: DATA TYPES & MEMORY SIZES -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHAPTER
                        2</span>
                    <h2 class="text-2xl font-bold text-slate-900">C# এর প্রধান ডাটা টাইপ সমূহ</h2>
                </div>

                <div class="space-y-6">
                    <p class="text-slate-700">মেমোরি অপ্টিমাইজেশনের জন্য C#-এ বিভিন্ন সাইজের ডাটা টাইপ রয়েছে। নিচে একটি
                        পূর্ণাঙ্গ চার্ট দেওয়া হলো:</p>

                    <div class="overflow-x-auto border border-slate-200 rounded-xl">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr
                                    class="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <th class="p-4">Data Type</th>
                                    <th class="p-4">কাজ / ব্যবহার</th>
                                    <th class="p-4">মেমরি সাইজ</th>
                                    <th class="p-4">উদাহরণ</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-slate-100 text-slate-700">
                                <tr>
                                    <td class="p-4 font-mono font-bold text-blue-600">int</td>
                                    <td class="p-4">পূর্ণসংখ্যা (Whole Numbers)</td>
                                    <td class="p-4">4 Bytes</td>
                                    <td class="p-4 font-mono text-slate-500">int points = 1500;</td>
                                </tr>
                                <tr>
                                    <td class="p-4 font-mono font-bold text-blue-600">long</td>
                                    <td class="p-4">খুব বড় পূর্ণসংখ্যা</td>
                                    <td class="p-4">8 Bytes</td>
                                    <td class="p-4 font-mono text-slate-500">long population = 170000000L;</td>
                                </tr>
                                <tr>
                                    <td class="p-4 font-mono font-bold text-blue-600">double</td>
                                    <td class="p-4">সাধারণ দশমিক সংখ্যা</td>
                                    <td class="p-4">8 Bytes</td>
                                    <td class="p-4 font-mono text-slate-500">double gpa = 3.95;</td>
                                </tr>
                                <tr>
                                    <td class="p-4 font-mono font-bold text-blue-600">decimal</td>
                                    <td class="p-4">টাকা-পয়সা বা নিখুঁত হিসাব (Financial)</td>
                                    <td class="p-4">16 Bytes</td>
                                    <td class="p-4 font-mono text-slate-500">decimal salary = 25500.75M;</td>
                                </tr>
                                <tr>
                                    <td class="p-4 font-mono font-bold text-blue-600">char</td>
                                    <td class="p-4">একটি মাত্র ক্যারেক্টার (Single quote)</td>
                                    <td class="p-4">2 Bytes</td>
                                    <td class="p-4 font-mono text-slate-500">char status = 'A';</td>
                                </tr>
                                <tr>
                                    <td class="p-4 font-mono font-bold text-blue-600">string</td>
                                    <td class="p-4">একাধিক অক্ষরের টেক্সট (Double quote)</td>
                                    <td class="p-4">ডাইনামিক</td>
                                    <td class="p-4 font-mono text-slate-500">string dev = "Sohan";</td>
                                </tr>
                                <tr>
                                    <td class="p-4 font-mono font-bold text-blue-600">bool</td>
                                    <td class="p-4">শুধুমাত্র True অথবা False</td>
                                    <td class="p-4">1 Byte</td>
                                    <td class="p-4 font-mono text-slate-500">bool isComplete = true;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-sm text-slate-700">
                        <strong>⚠️ ইন্টারভিউ টিপস:</strong> দশমিক সংখ্যার ক্ষেত্রে সবসময় <code>double</code> ব্যবহার করা
                        হলেও, টাকা-পয়সা বা ফিন্যান্সিয়াল হিসাবের ক্ষেত্রে অবশ্যই <code>decimal</code> ব্যবহার করতে
                        হবে। ডেসিমাল ডিক্লেয়ার করার সময় ভ্যালুর শেষে একটি <strong>'M'</strong> বা <strong>'m'</strong>
                        সাফিক্স যোগ করতে হয়।
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- SECTION 3: NAMING CONVENTIONS -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHAPTER
                        3</span>
                    <h2 class="text-2xl font-bold text-slate-900">ভেরিয়েবল নামকরণের প্রফেশনাল নিয়ম</h2>
                </div>

                <div class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
                            <h3
                                class="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <i class="fa-solid fa-circle-check"></i> Do (যা করবেন)
                            </h3>
                            <ul class="space-y-2 text-sm text-slate-700 list-disc list-inside">
                                <li>নামকরণে <strong>camelCase</strong> ফলো করুন (যেমন: <code>totalAmount</code>,
                                    <code>isUserLoggedIn</code>)।
                                </li>
                                <li>অর্থপূর্ণ নাম দিন যাতে কোড দেখেই বোঝা যায় (যেমন: <code>x</code> না লিখে
                                    <code>userScore</code> লিখুন)।
                                </li>
                                <li>নামের শুরুতে লেটার বা আন্ডারস্কোর (_) ব্যবহার করতে পারবেন।</li>
                            </ul>
                        </div>

                        <div class="bg-rose-50 p-5 rounded-xl border border-rose-200">
                            <h3
                                class="text-sm font-bold text-rose-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <i class="fa-solid fa-circle-xmark"></i> Don't (যা করা নিষিদ্ধ)
                            </h3>
                            <ul class="space-y-2 text-sm text-slate-700 list-disc list-inside">
                                <li>নামের শুরুতে সংখ্যা দেওয়া যাবে না (যেমন: <del class="text-rose-600">1stPlace</del>
                                    ভুল)।</li>
                                <li>ভেরিয়েবলের মাঝে স্পেস দেওয়া যাবে না (যেমন: <del class="text-rose-600">user
                                        name</del> ভুল)।</li>
                                <li>C# এর সংরক্ষিত কিওয়ার্ড নাম হিসেবে ব্যবহার করা যাবে না (যেমন: <del
                                        class="text-rose-600">int class = 5;</del>)।</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- SECTION 4: ADVANCED TYPE CASTING & VAR -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHAPTER
                        4</span>
                    <h2 class="text-2xl font-bold text-slate-900">টাইপ কাস্টিং (Type Casting) ও 'var' কিওয়ার্ড</h2>
                </div>

                <div class="space-y-6">
                    <p class="text-slate-700">মাঝে মাঝে এক ডাটা টাইপের ভ্যালু অন্য ডাটা টাইপের ভ্যারিয়েবলে নেওয়ার
                        প্রয়োজন হয়। একেই বলে <strong>Type Casting</strong>।</p>

                    <div class="space-y-4">
                        <h3 class="font-bold text-slate-900 text-lg">১. Implicit Casting (স্বয়ংক্রিয়)</h3>
                        <p class="text-sm text-slate-600">ছোট সাইজের ডাটা টাইপ যখন বড় সাইজের ডাটা টাইপে রূপান্তর হয়, C#
                            তা নিজে থেকেই করে নেয়।</p>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">int</span> myInt = <span class="text-emerald-400">9</span>;
<span class="text-purple-400">double</span> myDouble = myInt; <span class="text-slate-400">// Automatically converts int to double</span></pre>
                    </div>

                    <div class="space-y-4 pt-4 border-t border-slate-100">
                        <h3 class="font-bold text-slate-900 text-lg">২. Explicit Casting (ম্যানুয়াল)</h3>
                        <p class="text-sm text-slate-600">বড় সাইজের ডাটা টাইপকে ছোট সাইজে রূপান্তর করতে গেলে ডাটা লস
                            হওয়ার সম্ভাবনা থাকে, তাই ব্র্যাকেট দিয়ে টাইপ বলে দিতে হয়।</p>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">double</span> pi = <span class="text-emerald-400">3.1416</span>;
<span class="text-purple-400">int</span> roundedPi = (<span class="text-purple-400">int</span>)pi; <span class="text-slate-400">// manual casting: roundedPi এর মান হবে শুধুমাত্র 3</span></pre>
                    </div>

                    <div class="space-y-4 pt-4 border-t border-slate-100">
                        <h3 class="font-bold text-slate-900 text-lg">৩. 'var' Keyword (Implicitly Typed)</h3>
                        <p class="text-sm text-slate-600">আপনি যদি ডাটা টাইপের নাম না লিখে সরাসরি <code>var</code>
                            লেখেন, তবে C# কম্পাইলার ভ্যালু দেখে অটোমেটিক টাইপ নির্ধারণ করে নেবে।</p>
                        <pre class="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-purple-400">var</span> message = <span class="text-amber-300">"Hello"</span>; <span class="text-slate-400">// C# এটিকে string হিসেবে ধরে নেবে</span>
<span class="text-purple-400">var</span> price = <span class="text-emerald-400">99.99</span>;    <span class="text-slate-400">// C# এটিকে double হিসেবে ধরে নেবে</span></pre>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- SECTION 5: STACK VS HEAP INTERVIEW CONCEPT -->
            <!-- ========================================== -->
            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHAPTER
                        5</span>
                    <h2 class="text-2xl font-bold text-slate-900">মেমরি আর্কিটেকচার: Stack vs Heap</h2>
                </div>

                <div class="space-y-6">
                    <p class="text-slate-700">C# এ ভেরিয়েবলগুলো ব্যাকএন্ডে মেমরির দুটি ভিন্ন জায়গায় জমা হয়। এটি জুনিয়র
                        এবং মিড-লেভেল ডেভেলপারদের ইন্টারভিউয়ের জন্য অন্যতম গুরুত্বপূর্ণ টপিক।</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h3 class="font-mono font-bold text-blue-600 text-base mb-2">Stack Memory (Value Types)</h3>
                            <p class="text-slate-600 mb-3">এটি খুব দ্রুত কাজ করে। এখানে সরাসরি ভ্যারিয়েবলের ভ্যালু বা
                                ডাটা জমা থাকে।</p>
                            <ul class="space-y-1 text-slate-700 list-disc list-inside">
                                <li><strong>অন্তর্ভুক্ত টাইপ:</strong> int, double, bool, char, struct।</li>
                                <li>মেমরি অটোমেটিক ম্যানেজ হয় (LIFO স্ট্রাকচার)।</li>
                            </ul>
                        </div>

                        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h3 class="font-mono font-bold text-blue-600 text-base mb-2">Heap Memory (Reference Types)
                            </h3>
                            <p class="text-slate-600 mb-3">এখানে আসল অবজেক্ট বা বড় ডাটা স্টোর হয়, আর Stack মেমরিতে শুধু
                                তার <strong>অ্যাড্রেস বা রেফারেন্স (Pointer)</strong> থাকে।</p>
                            <ul class="space-y-1 text-slate-700 list-disc list-inside">
                                <li><strong>অন্তর্ভুক্ত টাইপ:</strong> string, class, array, object।</li>
                                <li>মেমরি ক্লিন করার জন্য <strong>Garbage Collector (GC)</strong> কাজ করে।</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- FINAL TRACKER AND ACTIONS -->
            <!-- ========================================== -->
            <div
                class="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h4 class="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Module Status:
                        Completed 🎉</h4>
                    <p class="text-sm text-slate-700">আপনি ভেরিয়েবলের বেসিক থেকে অ্যাডভান্সড কনসেপ্ট সম্পূর্ণ করেছেন।
                    </p>
                </div>
                <router-link
                    class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition shadow-sm"
                    :to="'/lessons/operators'">
                    Next: Operators Challenges <i class="fa-solid fa-arrow-right ml-2"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>