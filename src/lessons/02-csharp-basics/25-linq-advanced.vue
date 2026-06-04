<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-rose-600 font-mono text-sm tracking-widest uppercase font-bold">Module 25: Advanced Data
                Streams</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Mastering Advanced
                LINQ</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">ডেটা ম্যানিপুলেশনের আসল শক্তি! Deferred Execution,
                Expression Trees এবং IEnumerable বনাম IQueryable-এর খুঁটিনাটি। ডাটাবেস কোয়েরি অপ্টিমাইজ করার অ্যাডভান্স
                গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-rose-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">The Secret: Deferred Execution</h2>
                </div>

                <p class="text-slate-700 mb-6 leading-relaxed">
                    LINQ-এর সবচেয়ে বড় শক্তি হলো এর <b>Lazy Evaluation</b> বা <b>Deferred Execution</b>। আপনি যখন LINQ
                    কোয়েরি লেখেন, তা তখনই রান হয় না। এটি শুধুমাত্র একটি "Query Plan" তৈরি করে। যখনই আপনি
                    <code>.ToList()</code> বা <code>foreach</code> কল করেন, তখনই ডেটাবেস বা মেমরি থেকে ডেটা ফেচ হয়।
                </p>

                <div class="overflow-hidden rounded-xl border border-slate-200">
                    <table class="w-full text-left text-sm">
                        <thead class="bg-slate-100 text-slate-600">
                            <tr>
                                <th class="p-3">Feature</th>
                                <th class="p-3">IEnumerable (Local)</th>
                                <th class="p-3">IQueryable (Remote/DB)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            <tr>
                                <td class="p-3 font-medium">Execution</td>
                                <td class="p-3">Client-side (Memory)</td>
                                <td class="p-3">Server-side (SQL)</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-medium">Performance</td>
                                <td class="p-3">Fast for small sets</td>
                                <td class="p-3">Fast for large DB sets</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-medium">Mechanism</td>
                                <td class="p-3">Delegates</td>
                                <td class="p-3">Expression Trees</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-rose-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">SYNTAX</span>
                    <h2 class="text-2xl font-bold text-slate-900">PLINQ & Query Optimization</h2>
                </div>

                <pre
                    class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-md">
<span class="text-slate-500">// 1. Parallel LINQ (PLINQ) for heavy CPU tasks</span>
<span class="text-purple-400">var</span> results = largeCollection
    .AsParallel() <span class="text-slate-500">// Distributes work across CPU cores</span>
    .Where(x => x.IsComplexCalculation())
    .ToList();

<span class="text-slate-500">// 2. IQueryable: Generating Optimized SQL (Expression Trees)</span>
<span class="text-emerald-400">IQueryable</span>&lt;User&gt; query = context.Users
    .Where(u => u.IsActive); <span class="text-slate-500">// SQL: SELECT * FROM Users WHERE IsActive = 1</span>

<span class="text-slate-500">// 3. ToList() triggers the execution</span>
<span class="text-purple-400">var</span> userList = query.ToList();</pre>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-rose-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">Execution Timeline Analyzer</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">এখানে দেখুন কখন কোয়েরি "ডিফাইন" হচ্ছে এবং কখন "এগজিকিউট" হচ্ছে।
                    "Define" ক্লিক করলে কোয়েরি প্ল্যান তৈরি হবে, "Execute" ক্লিক করলে ডেটা প্রসেসিং হবে।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-center">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Query
                            Pipeline</span>
                        <button @click="defineQuery"
                            class="w-full bg-slate-800 hover:bg-slate-900 text-white font-mono text-xs py-3 rounded-lg transition">Define
                            Query (Lazy)</button>
                        <button @click="executeQuery" :disabled="!isDefined"
                            class="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-slate-300 text-white font-mono text-xs py-3 rounded-lg transition">Execute
                            (.ToList)</button>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs flex flex-col justify-between border border-slate-800">
                        <div class="space-y-4">
                            <div
                                :class="['p-2 rounded border', isDefined ? 'border-emerald-800 bg-emerald-950/20 text-emerald-400' : 'border-slate-800 text-slate-600']">
                                1. Query Definition: <code>users.Where(u => u.Age > 18)</code>
                            </div>
                            <div
                                :class="['p-2 rounded border', isExecuted ? 'border-indigo-800 bg-indigo-950/20 text-indigo-400' : 'border-slate-800 text-slate-600']">
                                2. Materialization: <code>Iterating & Building SQL Command...</code>
                            </div>
                            <div v-if="isExecuted" class="text-rose-400 animate-pulse">
                                >> [DATA LOADED: 1,024 Records]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-rose-400 font-mono font-bold tracking-widest uppercase">Course
                        Wrap-up</span>
                    <h3 class="text-xl font-bold mt-1">Ready for Architecture?</h3>
                    <p class="text-sm text-slate-400 mt-1">অসাধারণ! আপনি সি-শার্পের অ্যাডভান্সড ফিচারগুলো আয়ত্ত করেছেন।
                        এখন আপনি প্রস্তুত বড় বড় ডিস্ট্রিবিউটেড সিস্টেম এবং হাই-পারফরম্যান্স আর্কিটেকচার নিয়ে কাজ করার
                        জন্য।</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isDefined = ref(false);
const isExecuted = ref(false);

const defineQuery = () => {
    isDefined.value = true;
    isExecuted.value = false;
};

const executeQuery = () => {
    isExecuted.value = true;
};
</script>