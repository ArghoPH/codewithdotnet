<template>
    <div class="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 font-sans text-slate-800 bg-slate-50 min-h-screen">

        <header class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8 relative overflow-hidden">
            <div
                class="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob">
            </div>
            <div
                class="absolute top-0 right-48 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000">
            </div>

            <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <div class="flex items-center gap-3 mb-2">
                        <span
                            class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase">Lesson
                            07</span>
                        <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"><i
                                class="fa-solid fa-clock mr-1"></i> 45 Mins Read</span>
                    </div>
                    <h1
                        class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-4">
                        <i class="fa-solid fa-terminal text-blue-600"></i>
                        .NET CLI Mastery
                    </h1>
                    <p class="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
                        প্রফেশনাল ডেভেলপারদের প্রধান হাতিয়ার হলো টার্মিনাল। এই মেগা-গাইডে আমরা শিখব কীভাবে .NET CLI
                        ব্যবহার করে মাউস ছাড়াই সম্পূর্ণ প্রজেক্ট, সলিউশন এবং প্যাকেজ নিয়ন্ত্রণ করতে হয়।
                    </p>
                </div>

                <div
                    class="hidden md:block bg-slate-900 text-emerald-400 p-4 rounded-xl shadow-inner font-mono text-sm w-72 border border-slate-700">
                    <div class="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p class="opacity-80">Waiting for command...</p>
                    <p class="mt-1"><span class="text-pink-500">➜</span> <span class="text-blue-400">~</span> <span
                            class="animate-pulse">_</span></p>
                </div>
            </div>
        </header>

        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800 border-b pb-2">
                <i class="fa-solid fa-lightbulb text-amber-500"></i> What is .NET CLI?
            </h2>
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <p class="text-slate-700 leading-relaxed mb-6 text-lg">
                    <strong>.NET CLI (Command-Line Interface)</strong> হলো একটি ক্রস-প্লাটফর্ম টুলচেইন। আপনি যখন .NET
                    SDK ইন্সটল করেন, তখন এই CLI অটোমেটিক ইন্সটল হয়ে যায়। Visual Studio-তে যে কাজগুলো বাটনে ক্লিক করে করা
                    হয় (যেমন: Build, Run, Add NuGet Package), Visual Studio Code-এ সেই একই কাজগুলো টার্মিনালে কমান্ড
                    লিখে করতে হয়।
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="p-5 bg-blue-50/50 rounded-xl border border-blue-100 hover:shadow-md transition">
                        <div
                            class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl mb-4">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h3 class="font-bold text-slate-800 mb-2">Fast & Efficient</h3>
                        <p class="text-sm text-slate-600">মাউস দিয়ে মেনু খোঁজার চেয়ে কমান্ড টাইপ করা অনেক বেশি দ্রুত,
                            বিশেষ করে যখন আপনি কমান্ডগুলো মুখস্থ করে ফেলবেন।</p>
                    </div>
                    <div class="p-5 bg-purple-50/50 rounded-xl border border-purple-100 hover:shadow-md transition">
                        <div
                            class="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xl mb-4">
                            <i class="fa-solid fa-server"></i>
                        </div>
                        <h3 class="font-bold text-slate-800 mb-2">CI/CD & DevOps</h3>
                        <p class="text-sm text-slate-600">Docker বা Jenkins এর মতো সার্ভারে কোনো UI থাকে না। সেখানে কোড
                            বিল্ড ও পাবলিশ করার একমাত্র উপায় হলো এই CLI কমান্ড।</p>
                    </div>
                    <div class="p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 hover:shadow-md transition">
                        <div
                            class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-xl mb-4">
                            <i class="fa-solid fa-laptop-code"></i>
                        </div>
                        <h3 class="font-bold text-slate-800 mb-2">Cross-Platform</h3>
                        <p class="text-sm text-slate-600">Windows, Mac, বা Linux—আপনি যেখানেই থাকুন না কেন, এই
                            কমান্ডগুলো হুবহু একই রকম কাজ করে।</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800 border-b pb-2">
                <i class="fa-solid fa-book-bookmark text-indigo-500"></i> The Core Commands Deep Dive
            </h2>

            <div class="space-y-8">

                <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group">
                    <div class="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
                        <h3 class="text-lg font-mono font-bold text-emerald-400">1. dotnet new</h3>
                        <span class="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">Scaffolding</span>
                    </div>
                    <div class="p-6 md:p-8">
                        <p class="text-slate-700 mb-4">এই কমান্ডটি নতুন প্রজেক্ট, ফাইল বা সলিউশন তৈরি করতে ব্যবহৃত হয়।
                            এটি মূলত .NET এর টেমপ্লেট ইঞ্জিন।</p>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div class="bg-[#1e1e1e] rounded-xl p-4 font-mono text-sm shadow-inner">
                                <p class="text-slate-500 mb-1"># Create a basic console app</p>
                                <p class="mb-3"><span class="text-pink-400">dotnet</span> new console</p>

                                <p class="text-slate-500 mb-1"># Create a Web API with a specific name</p>
                                <p class="mb-3"><span class="text-pink-400">dotnet</span> new webapi <span
                                        class="text-blue-300">-n</span> InventorySystem</p>

                                <p class="text-slate-500 mb-1"># See all available templates</p>
                                <p><span class="text-pink-400">dotnet</span> new list</p>
                            </div>
                            <div class="space-y-3">
                                <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <h4 class="font-bold text-blue-900 text-sm mb-1">Pro Tip: Solution Files</h4>
                                    <p class="text-sm text-blue-800">বড় প্রজেক্টে (যেমন ERP সিস্টেমে) অনেকগুলো আলাদা
                                        প্রজেক্ট থাকে (Accounting, Loan, HR)। সেগুলোকে একসাথে যুক্ত রাখতে
                                        <code>.sln</code> ফাইল লাগে। টার্মিনালে সলিউশন বানাতে লিখুন: <br><code
                                            class="bg-white px-1 py-0.5 rounded text-blue-600 mt-1 inline-block">dotnet new sln -n CorporateERP</code>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div class="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
                        <h3 class="text-lg font-mono font-bold text-emerald-400">2. dotnet run / watch</h3>
                        <span class="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">Execution</span>
                    </div>
                    <div class="p-6 md:p-8">
                        <p class="text-slate-700 mb-4">কোড লেখার পর সেটিকে আউটপুট হিসেবে দেখার জন্য এই কমান্ড ব্যবহার
                            করা হয়। এটি ব্যাকগ্রাউন্ডে আগে কোড বিল্ড করে, তারপর রান করে।</p>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div class="bg-[#1e1e1e] rounded-xl p-4 font-mono text-sm shadow-inner">
                                <p class="text-slate-500 mb-1"># Standard run command</p>
                                <p class="mb-3"><span class="text-pink-400">dotnet</span> run</p>

                                <p class="text-slate-500 mb-1"># Hot Reload (Live Server)</p>
                                <p class="mb-3"><span class="text-pink-400">dotnet</span> watch run</p>

                                <p class="text-slate-500 mb-1"># Run a specific project from outside</p>
                                <p><span class="text-pink-400">dotnet</span> run <span
                                        class="text-blue-300">--project</span> ./src/App/App.csproj</p>
                            </div>
                            <div class="space-y-3">
                                <div class="bg-amber-50 p-4 rounded-lg border border-amber-100">
                                    <h4 class="font-bold text-amber-900 text-sm mb-1 flex items-center gap-2">
                                        <i class="fa-solid fa-fire text-amber-500"></i> The Magic of `dotnet watch`
                                    </h4>
                                    <p class="text-sm text-amber-800 leading-relaxed">
                                        UI ডিজাইন বা লজিক টেস্ট করার সময় বারবার কোড রান করা বিরক্তিকর।
                                        <code>dotnet watch</code> ব্যবহার করলে এটি আপনার প্রজেক্টের দিকে নজর রাখে। যখনই
                                        আপনি <code>Ctrl+S</code> দিয়ে কোড সেভ করবেন, এটি স্বয়ংক্রিয়ভাবে প্রজেক্ট
                                        রিস্টার্ট করে নতুন পরিবর্তন দেখাবে। একে <strong>Hot Reload</strong> বলা হয়।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div class="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
                        <h3 class="text-lg font-mono font-bold text-emerald-400">3. dotnet add package</h3>
                        <span class="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">Dependencies</span>
                    </div>
                    <div class="p-6 md:p-8">
                        <p class="text-slate-700 mb-4">অন্য ডেভেলপারদের তৈরি করা লাইব্রেরি বা টুলস (যেমন ডেটাবেস
                            কানেকশনের জন্য Entity Framework) নিজের প্রজেক্টে যুক্ত করতে এই কমান্ড লাগে। .NET এর প্যাকেজ
                            ম্যানেজারকে <strong>NuGet</strong> বলা হয়।</p>

                        <div
                            class="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6 flex flex-col md:flex-row items-center gap-6">
                            <div
                                class="w-16 h-16 shrink-0 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-blue-100">
                                <i class="fa-solid fa-box-open text-white text-2xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-800 mb-1">কীভাবে কাজ করে?</h4>
                                <p class="text-sm text-slate-600">যখন আপনি কোনো প্যাকেজ অ্যাড করেন, এটি সরাসরি আপনার
                                    <code>.csproj</code> ফাইলের ভেতরে একটি <code>&lt;PackageReference&gt;</code> ট্যাগ
                                    যুক্ত করে দেয় এবং প্যাকেজটি ইন্টারনেট থেকে ডাউনলোড করে।
                                </p>
                            </div>
                        </div>

                        <div class="bg-[#1e1e1e] rounded-xl p-4 font-mono text-sm shadow-inner mb-4">
                            <p class="text-slate-500 mb-1"># Install Newtonsoft.Json package</p>
                            <p class="mb-3"><span class="text-pink-400">dotnet</span> add package Newtonsoft.Json</p>

                            <p class="text-slate-500 mb-1"># Install a specific version</p>
                            <p class="mb-3"><span class="text-pink-400">dotnet</span> add package Dapper <span
                                    class="text-blue-300">-v</span> 2.1.28</p>

                            <p class="text-slate-500 mb-1"># Remove a package</p>
                            <p><span class="text-pink-400">dotnet</span> remove package Newtonsoft.Json</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div class="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
                        <h3 class="text-lg font-mono font-bold text-emerald-400">4. dotnet build & publish</h3>
                        <span class="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">Deployment</span>
                    </div>
                    <div class="p-6 md:p-8">
                        <p class="text-slate-700 mb-6">প্রজেক্ট কমপ্লিট হওয়ার পর সেটিকে ক্লায়েন্টকে দেওয়ার জন্য বা
                            সার্ভারে হোস্ট করার জন্য ফাইলগুলোকে কম্পাইল করে গুছিয়ে নিতে হয়।</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div
                                class="border border-slate-200 p-5 rounded-xl bg-white hover:border-blue-300 transition-colors">
                                <h4 class="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                    <i class="fa-solid fa-hammer text-slate-400"></i> dotnet build
                                </h4>
                                <p class="text-sm text-slate-600 mb-4">এটি শুধু কোড কম্পাইল করে <code>bin</code>
                                    ফোল্ডারে রাখে। এটি চেক করে যে কোডে কোনো Syntax Error আছে কি না।</p>
                                <code
                                    class="bg-slate-100 px-2 py-1 rounded text-sm text-pink-600 w-full block text-center font-mono border border-slate-200">dotnet build</code>
                            </div>
                            <div
                                class="border border-slate-200 p-5 rounded-xl bg-white hover:border-emerald-300 transition-colors">
                                <h4 class="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                    <i class="fa-solid fa-cloud-arrow-up text-emerald-500"></i> dotnet publish
                                </h4>
                                <p class="text-sm text-slate-600 mb-4">এটি প্রোডাকশনের জন্য কোড রেডি করে। অপ্রয়োজনীয়
                                    ফাইল বাদ দিয়ে, সাইজ কমিয়ে একদম ফ্রেশ একটি ফোল্ডার তৈরি করে।</p>
                                <code
                                    class="bg-slate-100 px-2 py-1 rounded text-sm text-pink-600 w-full block text-center font-mono border border-slate-200">dotnet publish -c Release</code>
                            </div>
                        </div>

                        <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
                            <h4 class="font-bold text-slate-800 text-sm mb-3 uppercase tracking-wider">Advanced Publish
                                Strategy</h4>
                            <div class="space-y-4">
                                <div>
                                    <p class="text-sm font-bold text-slate-700 mb-1">Self-Contained Deployment (SCD)</p>
                                    <p class="text-sm text-slate-600 mb-2">সার্ভারে .NET ইন্সটল করা না থাকলেও আপনার
                                        অ্যাপ চলবে। কারণ এটি .NET রানটাইমসহ সব প্যাক করে দেয়। ফাইল সাইজ বড় হয়।</p>
                                    <div class="bg-[#1e1e1e] p-3 rounded font-mono text-xs overflow-x-auto">
                                        <span class="text-pink-400">dotnet</span> publish -c Release <span
                                            class="text-blue-300">-r</span> win-x64 <span
                                            class="text-blue-300">--self-contained</span> true
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-indigo-50 rounded-2xl border border-indigo-100 overflow-hidden">
                    <div class="p-6 md:p-8">
                        <h3 class="text-lg font-bold text-indigo-900 mb-2 flex items-center gap-2">
                            <i class="fa-solid fa-database"></i> Bonus: Entity Framework CLI Preview
                        </h3>
                        <p class="text-indigo-800 text-sm leading-relaxed mb-4">
                            ভবিষ্যতে যখন আমরা ডেটাবেস নিয়ে কাজ করব (Inventory বা FMS মডিউলে), তখন টেবিল তৈরি করার জন্য
                            আমাদের ডেটাবেসে গিয়ে SQL লিখতে হবে না। আমরা C# এ ক্লাস লিখব এবং CLI ব্যবহার করে ডেটাবেস
                            জেনারেট করব। একে Code-First Migration বলে।
                        </p>
                        <div
                            class="flex gap-4 font-mono text-xs text-indigo-700 bg-indigo-100/50 p-3 rounded-lg border border-indigo-200">
                            <div><i class="fa-solid fa-angle-right text-indigo-400"></i> dotnet ef migrations add
                                InitialCreate</div>
                            <div><i class="fa-solid fa-angle-right text-indigo-400"></i> dotnet ef database update</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800 border-b pb-2">
                <i class="fa-solid fa-table-list text-cyan-500"></i> Ultimate Cheat Sheet
            </h2>
            <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr
                                class="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider border-b border-slate-200">
                                <th class="p-4 font-bold">Command</th>
                                <th class="p-4 font-bold">What it does</th>
                                <th class="p-4 font-bold">When to use it?</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-slate-200">
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-mono text-pink-600 font-bold whitespace-nowrap">dotnet new</td>
                                <td class="p-4 text-slate-700">Creates new files/projects based on templates.</td>
                                <td class="p-4 text-slate-500">Starting a brand new project or adding a config file.
                                </td>
                            </tr>
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-mono text-pink-600 font-bold whitespace-nowrap">dotnet restore</td>
                                <td class="p-4 text-slate-700">Downloads all required NuGet packages.</td>
                                <td class="p-4 text-slate-500">After cloning a project from GitHub to download missing
                                    files.</td>
                            </tr>
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-mono text-pink-600 font-bold whitespace-nowrap">dotnet build</td>
                                <td class="p-4 text-slate-700">Compiles the code into .dll/.exe.</td>
                                <td class="p-4 text-slate-500">To check if the code has any compile-time syntax errors.
                                </td>
                            </tr>
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-mono text-pink-600 font-bold whitespace-nowrap">dotnet run</td>
                                <td class="p-4 text-slate-700">Builds and executes the application.</td>
                                <td class="p-4 text-slate-500">When you want to test and see the output of your app.
                                </td>
                            </tr>
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="p-4 font-mono text-pink-600 font-bold whitespace-nowrap">dotnet clean</td>
                                <td class="p-4 text-slate-700">Deletes the output (bin/obj) folders contents.</td>
                                <td class="p-4 text-slate-500">When the build seems "stuck" or is showing old ghost
                                    errors.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-2 text-rose-600 border-b pb-2">
                <i class="fa-solid fa-triangle-exclamation"></i> Common CLI Errors & Fixes
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-rose-50 border border-rose-100 rounded-xl p-5 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                    <p class="font-mono text-sm text-rose-800 mb-2 font-bold break-words">
                        "Couldn't find a project to run. Ensure a project exists..."
                    </p>
                    <p class="text-sm text-slate-700">
                        <strong>কারণ:</strong> আপনি এমন একটি ফোল্ডারে টার্মিনাল ওপেন করেছেন যেখানে কোনো
                        <code>.csproj</code> ফাইল নেই।
                    </p>
                    <p class="text-sm text-slate-700 mt-2">
                        <strong>সমাধান:</strong> <code>ls</code> বা <code>dir</code> টাইপ করে দেখুন ফোল্ডারে কী কী আছে।
                        এরপর <code>cd FolderName</code> দিয়ে সঠিক ফোল্ডারে প্রবেশ করে আবার রান করুন।
                    </p>
                </div>

                <div class="bg-amber-50 border border-amber-100 rounded-xl p-5 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                    <p class="font-mono text-sm text-amber-800 mb-2 font-bold break-words">
                        "'dotnet' is not recognized as an internal or external command"
                    </p>
                    <p class="text-sm text-slate-700">
                        <strong>কারণ:</strong> আপনার পিসিতে .NET SDK ইন্সটল করা নেই অথবা Environment Variables (Path)
                        ঠিকমতো সেট করা নেই।
                    </p>
                    <p class="text-sm text-slate-700 mt-2">
                        <strong>সমাধান:</strong> SDK পুনরায় ইন্সটল করুন এবং পিসি (বা টার্মিনাল) রিস্টার্ট দিন।
                    </p>
                </div>
            </div>
        </section>

        <section
            class="mb-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
            <div class="absolute -right-20 -bottom-20 opacity-10">
                <i class="fa-brands fa-space-awesome text-[300px]"></i>
            </div>
            <div class="relative z-10">
                <h2 class="text-2xl font-bold mb-2 flex items-center gap-3">
                    <i class="fa-solid fa-gamepad text-emerald-400"></i> The Architect Challenge
                </h2>
                <p class="text-slate-300 mb-6 text-sm md:text-base max-w-3xl">
                    ধরে নিন, আপনাকে একটি নতুন Microfinance ERP এর জন্য বেসিক স্ট্রাকচার দাঁড় করাতে বলা হয়েছে। নিচের
                    কাজগুলো টার্মিনাল দিয়ে করার চেষ্টা করুন (VS Code এর টার্মিনাল ব্যবহার করুন):
                </p>

                <div class="space-y-4">
                    <div class="flex items-start gap-4">
                        <div
                            class="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center font-bold text-sm shrink-0">
                            1</div>
                        <div>
                            <p class="font-medium text-emerald-200">একটি ফোল্ডার তৈরি করুন ও ভেতরে যান।</p>
                            <p class="text-slate-400 text-sm font-mono mt-1">mkdir ERPProject && cd ERPProject</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div
                            class="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center font-bold text-sm shrink-0">
                            2</div>
                        <div>
                            <p class="font-medium text-emerald-200">সেখানে একটি নতুন কনসোল প্রজেক্ট তৈরি করুন।</p>
                            <p class="text-slate-400 text-sm font-mono mt-1">dotnet new console -n AccountingModule</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div
                            class="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center font-bold text-sm shrink-0">
                            3</div>
                        <div>
                            <p class="font-medium text-emerald-200">প্রজেক্ট ফোল্ডারে ঢুকে প্রোজেক্টটি রান করুন।</p>
                            <p class="text-slate-400 text-sm font-mono mt-1">cd AccountingModule && dotnet run</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer
            class="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="text-center md:text-left">
                <p class="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Module Progress</p>
                <div class="flex items-center gap-2">
                    <div class="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div class="w-full h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span class="text-sm font-bold text-slate-700">100%</span>
                </div>
                <p class="text-slate-600 text-sm mt-2"><strong>.NET Basics</strong> মডিউল এখানে সমাপ্ত হলো।</p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
                <button
                    class="px-6 py-3 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                    <i class="fa-solid fa-folder-tree"></i> Back to Structure
                </button>
                <router-link to="/csharp-basics/what-is-csharp"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-md shadow-blue-200 flex items-center justify-center gap-2 group">
                    Start C# Basics Module
                    <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </router-link>
            </div>
        </footer>

    </div>
</template>

<style scoped>
/* Custom animations for the header blobs to give a modern glassmorphic feel */
@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}
</style>