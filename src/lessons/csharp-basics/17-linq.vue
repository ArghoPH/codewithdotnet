<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-pink-600 font-mono text-sm tracking-widest uppercase font-bold">Module 17: C# Advanced
                Features</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">LINQ (Language
                Integrated Query)</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">ডাটা ফিল্টারিংয়ের ম্যাজিক! হাজারো ডাটার মধ্য থেকে মাত্র
                এক লাইনের কোডে আপনার কাঙ্ক্ষিত ডাটা খুঁজে বের করার সবচেয়ে আধুনিক ও দ্রুত উপায়।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-pink-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">What is LINQ?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    <b>LINQ (ল্যাঙ্গুয়েজ ইন্টিগ্রেটেড কোয়েরি)</b> হলো C# এর একটি ফিচার যার মাধ্যমে আমরা ডাটা সোর্স
                    (যেমন: List, Array, XML, Database) থেকে খুব সহজে ডাটা কোয়েরি (Query) করতে পারি।
                </p>
                <p class="text-slate-700 mb-6 leading-relaxed">
                    আগে যেখানে লুপ চালিয়ে একটা একটা করে ডাটা চেক করে নতুন লিস্ট বানাতে হতো, LINQ সেখানে ল্যাম্বডা
                    এক্সপ্রেশন (Lambda Expression <code>=></code>) ব্যবহার করে মাত্র এক লাইনে সেই কাজ করে দেয়।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <h3 class="text-sm font-bold text-slate-700 font-mono uppercase mb-2">1. Method Syntax (Modern)
                        </h3>
                        <p class="text-xs text-slate-600 leading-relaxed mb-3">সবচেয়ে বেশি ব্যবহৃত পদ্ধতি। এখানে মেথড
                            চেইনিং এবং ল্যাম্বডা এক্সপ্রেশন ব্যবহার করা হয়।</p>
                        <code class="text-[11px] bg-slate-900 text-pink-300 p-2 rounded block font-mono">
              var adults = users.Where(u => u.Age >= 18).ToList();
            </code>
                    </div>

                    <div class="p-5 bg-slate-50 rounded-xl border border-slate-200">
                        <h3 class="text-sm font-bold text-slate-700 font-mono uppercase mb-2">2. Query Syntax (SQL Like)
                        </h3>
                        <p class="text-xs text-slate-600 leading-relaxed mb-3">যারা SQL ডাটাবেজ কোয়েরিতে অভ্যস্ত, তাদের
                            জন্য এটি বুঝতে সহজ।</p>
                        <code class="text-[11px] bg-slate-900 text-blue-300 p-2 rounded block font-mono">
              var adults = from u in users<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where u.Age >= 18<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select u;
            </code>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-pink-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">Essential LINQ Operators</h2>
                </div>

                <div class="space-y-4">
                    <div class="border-l-4 border-pink-500 pl-4 py-1">
                        <h4 class="font-bold text-slate-800 font-mono text-sm">.Where()</h4>
                        <p class="text-xs text-slate-600 mt-1">শর্ত অনুযায়ী ডাটা ফিল্টার করে। <span
                                class="bg-slate-100 text-pink-600 px-1 rounded">List.Where(x => x.Salary > 50000)</span>
                        </p>
                    </div>
                    <div class="border-l-4 border-indigo-500 pl-4 py-1">
                        <h4 class="font-bold text-slate-800 font-mono text-sm">.Select()</h4>
                        <p class="text-xs text-slate-600 mt-1">পুরো অবজেক্ট থেকে শুধু নির্দিষ্ট একটি ফিল্ড বা প্রোপার্টি
                            বের করে আনে। <span class="bg-slate-100 text-indigo-600 px-1 rounded">List.Select(x =>
                                x.Name)</span></p>
                    </div>
                    <div class="border-l-4 border-emerald-500 pl-4 py-1">
                        <h4 class="font-bold text-slate-800 font-mono text-sm">.OrderBy() / .OrderByDescending()</h4>
                        <p class="text-xs text-slate-600 mt-1">ডাটাকে ছোট থেকে বড় বা বড় থেকে ছোট ক্রমানুসারে সাজায়।
                            <span class="bg-slate-100 text-emerald-600 px-1 rounded">List.OrderBy(x => x.Age)</span>
                        </p>
                    </div>
                    <div class="border-l-4 border-amber-500 pl-4 py-1">
                        <h4 class="font-bold text-slate-800 font-mono text-sm">.FirstOrDefault()</h4>
                        <p class="text-xs text-slate-600 mt-1">লিস্টের প্রথম ডাটাটি রিটার্ন করে, না পেলে Null (ডিফল্ট)
                            রিটার্ন করে। <span class="bg-slate-100 text-amber-600 px-1 rounded">List.FirstOrDefault(x =>
                                x.Id == 1)</span></p>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-pink-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">LINQ Execution Engine</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচে একটি ডেমো <code>List&lt;Employee&gt;</code> ডাটাবেজ দেওয়া
                    আছে। ডানদিকের কন্ট্রোল প্যানেল থেকে বিভিন্ন LINQ মেথড রান করুন এবং দেখুন কীভাবে ডাটা তাৎক্ষণিকভাবে
                    ফিল্টার ও সর্ট হচ্ছে।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 flex flex-col justify-between border border-slate-800">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-slate-500 uppercase tracking-widest text-[10px] font-bold">In-Memory
                                    Result Set</span>
                                <span class="bg-slate-800 text-pink-400 px-2 py-1 rounded text-[10px]">Count: {{
                                    activeData.length }}</span>
                            </div>

                            <div class="overflow-hidden rounded-lg border border-slate-700">
                                <table class="w-full text-left">
                                    <thead class="bg-slate-800 text-slate-400">
                                        <tr>
                                            <th class="p-2">Name</th>
                                            <th class="p-2">Role</th>
                                            <th class="p-2">Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-700">
                                        <tr v-for="emp in activeData" :key="emp.id"
                                            class="hover:bg-slate-800/50 transition">
                                            <td class="p-2 text-white">{{ emp.name }}</td>
                                            <td class="p-2 text-indigo-300">{{ emp.role }}</td>
                                            <td class="p-2 text-emerald-400">${{ emp.salary }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div v-if="activeData.length === 0"
                                class="text-center p-6 text-slate-500 italic border border-slate-800 mt-2 rounded-lg">
                                No matching records found.
                            </div>
                        </div>

                        <div class="text-[10px] text-pink-400 border-t border-slate-800 pt-3 mt-4">
                            &gt; {{ currentQueryText }}
                        </div>
                    </div>

                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">LINQ
                            Commands</span>

                        <button @click="resetData"
                            class="text-left bg-white border border-slate-300 hover:border-slate-400 p-3 rounded-lg text-xs font-mono transition text-slate-600 shadow-sm">
                            List.ToList(); <span class="block text-[10px] text-slate-400 mt-1 font-sans">(Reset All
                                Data)</span>
                        </button>

                        <button @click="filterDevs"
                            class="text-left bg-white border-l-4 border-l-pink-500 border-y border-r border-slate-300 hover:bg-pink-50 p-3 rounded-lg text-xs font-mono transition shadow-sm">
                            .Where(e => e.Role == "Developer")
                        </button>

                        <button @click="filterHighSalary"
                            class="text-left bg-white border-l-4 border-l-indigo-500 border-y border-r border-slate-300 hover:bg-indigo-50 p-3 rounded-lg text-xs font-mono transition shadow-sm">
                            .Where(e => e.Salary >= 80000)
                        </button>

                        <button @click="orderBySalary"
                            class="text-left bg-white border-l-4 border-l-emerald-500 border-y border-r border-slate-300 hover:bg-emerald-50 p-3 rounded-lg text-xs font-mono transition shadow-sm">
                            .OrderByDescending(e => e.Salary)
                        </button>
                    </div>

                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">LINQ Data Mining Challenge</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Microfinance
                        Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">Find Active Loans with High Due</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ধরে নিন আপনার কাছে <code>List&lt;Loan&gt; allLoans</code> নামে একটি লিস্ট আছে। LINQ মেথড ব্যবহার
                        করে শুধুমাত্র সেই লোনগুলো বের করুন যেগুলোর <code>Status == "Active"</code> এবং
                        <code>DueAmount > 10000</code>।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Solution Code</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-slate-500">// Assuming 'allLoans' is already populated</span>

<span class="text-purple-400">var</span> criticalLoans = allLoans
    .Where(loan => loan.Status == <span class="text-amber-300">"Active"</span> && loan.DueAmount > <span class="text-emerald-400">10000</span>)
    .ToList();

<span class="text-slate-500">// To select just the UserNames of those critical loans:</span>
<span class="text-purple-400">var</span> userNames = criticalLoans.Select(loan => loan.UserName).ToList();</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-pink-400 font-mono font-bold tracking-widest uppercase">Next
                        Milestone</span>
                    <h3 class="text-xl font-bold mt-1">Asynchronous Programming (async / await)</h3>
                    <p class="text-sm text-slate-400 mt-1">অসাধারণ! আপনি এখন ডাটা স্ট্রাকচার এবং ফিল্টারিংয়ের মাস্টার।
                        এরপর আমরা সি-শার্পের অত্যন্ত অ্যাডভান্সড একটি টপিকে যাবো—কীভাবে আমাদের মেইন অ্যাপ্লিকেশন ফ্রিজ
                        বা হ্যাং না করে ব্যাকগ্রাউন্ডে ডাটাবেজ লোডিং বা API কল করা যায় (Async/Await)।</p>
                </div>
                <button
                    class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Advance to Async <i class="fa-solid fa-stopwatch ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const employees = [
    { id: 1, name: 'Sohanur', role: 'Developer', salary: 85000 },
    { id: 2, name: 'Tarek', role: 'Designer', salary: 45000 },
    { id: 3, name: 'Rafiq', role: 'Manager', salary: 95000 },
    { id: 4, name: 'Ayesha', role: 'Developer', salary: 78000 },
    { id: 5, name: 'Kabir', role: 'Support', salary: 35000 }
];

const activeData = ref([...employees]);
const currentQueryText = ref('employees.ToList();');

const resetData = () => {
    activeData.value = [...employees];
    currentQueryText.value = 'employees.ToList();';
};

const filterDevs = () => {
    activeData.value = employees.filter(e => e.role === 'Developer');
    currentQueryText.value = 'employees.Where(e => e.Role == "Developer").ToList();';
};

const filterHighSalary = () => {
    activeData.value = employees.filter(e => e.salary >= 80000);
    currentQueryText.value = 'employees.Where(e => e.Salary >= 80000).ToList();';
};

const orderBySalary = () => {
    activeData.value = [...employees].sort((a, b) => b.salary - a.salary);
    currentQueryText.value = 'employees.OrderByDescending(e => e.Salary).ToList();';
};
</script>