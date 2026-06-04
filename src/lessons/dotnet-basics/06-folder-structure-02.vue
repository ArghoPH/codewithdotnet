<template>
    <div class="max-w-5xl mx-auto p-5 font-sans text-slate-800">

        <header class="border-b border-slate-200 pb-4 mb-6 flex items-center gap-3">
            <i class="fa-solid fa-folder-tree text-blue-600 text-2xl"></i>
            <h1 class="text-3xl font-bold text-slate-900">Deep Dive: .NET Folder Structure</h1>
        </header>

        <div
            class="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-slate-100 rounded-xl p-6 mb-8 border border-emerald-100 shadow-sm">
            <i class="fa-solid fa-microscope absolute -right-4 -bottom-4 text-9xl text-emerald-500 opacity-10"></i>
            <div class="relative z-10">
                <span
                    class="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full mb-3 tracking-wider uppercase">Advanced
                    Lesson</span>
                <p class="text-lg text-slate-700 font-medium">
                    এই লেসনে আমরা ফোল্ডারগুলোর একদম গভীরে যাব। .csproj এর ভেতরের কনফিগারেশন, bin ও obj এর মূল পার্থক্য
                    (একটি বাস্তব উদাহরণসহ) এবং প্রজেক্ট শেয়ার করার সময় কোন ফাইলগুলো মুছে দিতে হয় তা শিখব।
                </p>
            </div>
        </div>

        <section class="mb-8">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-magnifying-glass-plus text-indigo-500"></i> Expanded Project Tree
            </h2>
            <div
                class="bg-[#1e1e1e] text-slate-300 rounded-xl p-6 font-mono text-sm shadow-lg border border-slate-800 overflow-x-auto">
                <div class="flex items-center pb-3 mb-4 border-b border-slate-800 text-xs text-slate-500">
                    <i class="fa-solid fa-sidebar mr-2"></i> EXPLORER : MYFIRSTAPP
                </div>

                <div class="space-y-2">
                    <div class="flex items-center gap-2 text-white font-bold">
                        <i class="fa-solid fa-chevron-down text-xs text-slate-500"></i>
                        <i class="fa-solid fa-folder text-amber-400"></i> MyFirstApp
                    </div>

                    <div class="flex flex-col gap-2 ml-6 text-slate-400">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-chevron-down text-xs text-slate-600"></i>
                            <i class="fa-solid fa-folder text-amber-500/80"></i> bin
                        </div>
                        <div class="flex flex-col gap-2 ml-6">
                            <div class="flex items-center gap-2">
                                <i class="fa-solid fa-chevron-down text-xs text-slate-600"></i>
                                <i class="fa-solid fa-folder text-amber-500/80"></i> Debug
                            </div>
                            <div class="flex flex-col gap-2 ml-6">
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-chevron-down text-xs text-slate-600"></i>
                                    <i class="fa-solid fa-folder text-amber-500/80"></i> net8.0
                                </div>
                                <div class="flex items-center gap-2 ml-6 text-red-400">
                                    <i class="fa-solid fa-gear"></i> MyFirstApp.exe <span
                                        class="text-slate-500 text-xs">(Windows Executable)</span>
                                </div>
                                <div class="flex items-center gap-2 ml-6 text-purple-400">
                                    <i class="fa-solid fa-file-export"></i> MyFirstApp.dll <span
                                        class="text-slate-500 text-xs">(Compiled Code)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-2 ml-6 text-slate-400 mt-2">
                        <div class="flex items-center gap-2">
                            <i class="fa-solid fa-chevron-right text-xs text-slate-600"></i>
                            <i class="fa-solid fa-folder text-amber-500/80"></i> obj
                        </div>
                    </div>

                    <div
                        class="flex items-center gap-2 ml-6 mt-2 text-cyan-400 bg-slate-800/30 py-1 px-2 rounded border border-slate-700/30">
                        <span class="w-4"></span>
                        <i class="fa-solid fa-code text-purple-400"></i> MyFirstApp.csproj
                    </div>

                    <div class="flex items-center gap-2 ml-6 text-emerald-400">
                        <span class="w-4"></span>
                        <i class="fa-solid fa-file-code text-blue-400"></i> Program.cs
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-8">
            <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
                <h3 class="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-utensils"></i> The Restaurant Analogy: `bin` vs `obj`
                </h3>
                <p class="text-slate-700 text-sm leading-relaxed mb-4">
                    নতুন ডেভেলপাররা প্রায়ই <strong>bin</strong> (Binary) এবং <strong>obj</strong> (Object) ফোল্ডারের
                    মধ্যে গুলিয়ে ফেলে। এটিকে একটি রেস্টুরেন্টের সাথে তুলনা করা যায়:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                        <h4 class="font-bold text-slate-800 mb-2 border-b pb-2"><span class="text-amber-500">obj</span>
                            = রান্নাঘর (Kitchen)</h4>
                        <p class="text-sm text-slate-600">রান্নাঘরে শেফ পেঁয়াজ, মরিচ কাটে, মশলা রেডি করে। এগুলো হলো
                            রান্নার প্রস্তুতির অংশ। <strong>obj</strong> ফোল্ডারটিও ঠিক তাই। কম্পাইলার কোড রান করার সময়
                            কিছু অস্থায়ী (Temporary) ফাইল তৈরি করে এখানে রাখে। এগুলো ফাইনাল প্রোডাক্ট নয়।</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                        <h4 class="font-bold text-slate-800 mb-2 border-b pb-2"><span
                                class="text-emerald-500">bin</span> = ডাইনিং টেবিল (Dining Table)</h4>
                        <p class="text-sm text-slate-600">রান্না শেষ হওয়ার পর ফাইনাল খাবারটি যখন প্লেটে সাজিয়ে টেবিলে
                            দেওয়া হয়, সেটি হলো <strong>bin</strong>। এখানে আপনার প্রজেক্টের একদম চূড়ান্ত
                            <code>.exe</code> বা <code>.dll</code> ফাইল থাকে, যা ডাবল-ক্লিক করে সরাসরি রান করা যায়।
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-slate-50/50 rounded-xl p-6 mb-8 border border-slate-200">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-file-code text-indigo-500"></i> Inside the `.csproj` File
            </h2>
            <p class="text-sm text-slate-600 mb-4">এটি একটি XML ফাইল। এর ভেতরে মূলত ৩টি গুরুত্বপূর্ণ জিনিস থাকে:</p>

            <div class="bg-[#1e1e1e] p-4 rounded-lg text-sm font-mono text-white mb-4">
                <span class="text-slate-500">&lt;Project Sdk="Microsoft.NET.Sdk"&gt;</span><br><br>
                &nbsp;&nbsp;<span class="text-slate-500">&lt;PropertyGroup&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;OutputType&gt;</span>Exe<span
                    class="text-blue-400">&lt;/OutputType&gt;</span> <span class="text-slate-500 ml-2">/* এটি একটি কনসোল
                    অ্যাপ */</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;TargetFramework&gt;</span><span
                    class="text-emerald-400">net8.0</span><span class="text-blue-400">&lt;/TargetFramework&gt;</span>
                <span class="text-slate-500 ml-2">/* .NET এর ভার্সন */</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;ImplicitUsings&gt;</span>enable<span
                    class="text-blue-400">&lt;/ImplicitUsings&gt;</span> <span class="text-slate-500 ml-2">/* আধুনিক
                    .NET ফিচার */</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">&lt;Nullable&gt;</span>enable<span
                    class="text-blue-400">&lt;/Nullable&gt;</span><br>
                &nbsp;&nbsp;<span class="text-slate-500">&lt;/PropertyGroup&gt;</span><br><br>
                <span class="text-slate-500">&lt;/Project&gt;</span>
            </div>

            <ul class="space-y-3 text-sm text-slate-700">
                <li class="flex items-start gap-2">
                    <i class="fa-solid fa-check text-emerald-500 mt-1"></i>
                    <span><strong>TargetFramework:</strong> এটি বলে দেয় আপনার কোডটি .NET এর কোন ভার্সন দিয়ে রান হবে। যদি
                        আপনি অন্য কারো প্রজেক্ট ওপেন করেন এবং সেখানে <code>net6.0</code> থাকে, কিন্তু আপনার পিসিতে 8.0
                        থাকে, তাহলে এখান থেকেই কনফ্লিক্ট শুরু হয়!</span>
                </li>
                <li class="flex items-start gap-2">
                    <i class="fa-solid fa-check text-emerald-500 mt-1"></i>
                    <span><strong>ImplicitUsings:</strong> এটি <code>enable</code> করা থাকলে কোডের শুরুতে বারবার
                        <code>using System;</code> লিখতে হয় না, .NET ব্যাকগ্রাউন্ডে নিজেই সেটি ধরে নেয়।</span>
                </li>
            </ul>
        </section>

        <div class="bg-rose-50 border-l-4 border-l-rose-500 p-5 mb-8 rounded-r-md">
            <h3 class="font-bold text-rose-800 flex items-center gap-2 mb-2">
                <i class="fa-brands fa-git-alt"></i> Pro Tip for Developers: Do not share bin/obj!
            </h3>
            <p class="text-rose-700 text-sm leading-relaxed mb-2">
                যখন আপনি আপনার প্রজেক্ট GitHub এ আপলোড করবেন বা অন্য কোনো ডেভেলপারকে জিপ (zip) করে পাঠাবেন,
                <strong>কখনোই `bin` এবং `obj` ফোল্ডার পাঠাবেন না!</strong>
            </p>
            <ul class="list-disc ml-5 text-sm text-rose-700/80 space-y-1">
                <li>এগুলো প্রজেক্টের সাইজ অযথাই কয়েক মেগাবাইট থেকে জিবি পর্যন্ত বড় করে দেয়।</li>
                <li>আপনার কম্পিউটারে তৈরি করা <code>.exe</code> ফাইল অন্য কারো কম্পিউটারে (যেমন ম্যাক বা লিনাক্স) কাজ
                    নাও করতে পারে।</li>
                <li>GitHub এ কোড পুশ করার আগে <code>.gitignore</code> ফাইলে এই ফোল্ডারগুলোর নাম লিখে ব্লক করে দিতে হয়।
                </li>
            </ul>
        </div>

        <footer class="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
            <div>
                <p class="text-slate-500 text-sm uppercase tracking-wider font-bold">Summary</p>
                <p class="text-slate-700 font-medium">.csproj is the heart. Program.cs is the brain. bin is the output.
                </p>
            </div>
            <button
                class="bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                Next: Variables & Data Types <i class="fa-solid fa-arrow-right"></i>
            </button>
        </footer>

    </div>
</template>