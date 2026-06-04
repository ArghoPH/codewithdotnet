<template>
    <div class="max-w-5xl mx-auto p-5 font-sans text-slate-800">

        <header class="border-b border-slate-200 pb-4 mb-6 flex items-center gap-3">
            <i class="fa-solid fa-folder-tree text-blue-600 text-2xl"></i>
            <h1 class="text-3xl font-bold text-slate-900">Understanding .NET Folder Structure</h1>
        </header>

        <div
            class="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-slate-100 rounded-xl p-6 mb-8 border border-emerald-100 shadow-sm">
            <i class="fa-solid fa-network-wired absolute -right-4 -bottom-4 text-9xl text-emerald-500 opacity-10"></i>
            <div class="relative z-10">
                <span
                    class="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full mb-3 tracking-wider uppercase">Lesson
                    Objective</span>
                <p class="text-lg text-slate-700 font-medium">
                    এই lesson শেষে student একটি .NET Console Application-এর ডিফল্ট ফোল্ডার ও ফাইল স্ট্রাকচার বুঝতে পারবে
                    এবং কোন ফাইলটি কী কাজ করে তা স্পষ্টভাবে চিহ্নিত করতে পারবে।
                </p>
            </div>
        </div>

        <section class="mb-8">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-eye text-indigo-500"></i> Project Inside VS Code
            </h2>
            <div class="bg-[#1e1e1e] text-slate-300 rounded-xl p-6 font-mono text-sm shadow-lg border border-slate-800">
                <div class="flex items-center pb-3 mb-4 border-b border-slate-800 text-xs text-slate-500">
                    <i class="fa-solid fa-sidebar mr-2"></i> EXPLORER : MYFIRSTAPP
                </div>

                <div class="space-y-2">
                    <div class="flex items-center gap-2 text-white font-bold">
                        <i class="fa-solid fa-chevron-down text-xs text-slate-500"></i>
                        <i class="fa-solid fa-folder text-amber-400"></i> MyFirstApp
                    </div>

                    <div class="flex items-center gap-2 ml-6 text-slate-400">
                        <i class="fa-solid fa-chevron-right text-xs text-slate-600"></i>
                        <i class="fa-solid fa-folder text-amber-500/80"></i> bin
                    </div>

                    <div class="flex items-center gap-2 ml-6 text-slate-400">
                        <i class="fa-solid fa-chevron-right text-xs text-slate-600"></i>
                        <i class="fa-solid fa-folder text-amber-500/80"></i> obj
                    </div>

                    <div class="flex items-center gap-2 ml-6 text-cyan-400">
                        <span class="w-4"></span>
                        <i class="fa-solid fa-code text-purple-400"></i> MyFirstApp.csproj
                    </div>

                    <div
                        class="flex items-center gap-2 ml-6 text-emerald-400 bg-slate-800/50 py-1 px-2 rounded border border-slate-700/50">
                        <span class="w-4"></span>
                        <i class="fa-solid fa-file-code text-blue-400"></i> Program.cs
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-slate-50/50 rounded-xl p-6 mb-8 border border-slate-200">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i class="fa-solid fa-circle-info text-indigo-500"></i> কিসের কী কাজ? (Breakdown)
            </h2>

            <div class="space-y-4">
                <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <div class="flex items-center gap-2 font-bold text-slate-900 mb-1">
                        <i class="fa-solid fa-file-code text-blue-500"></i> Program.cs
                    </div>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        এটি আপনার অ্যাপ্লিকেশনের <strong>Main Entrance</strong> বা প্রধান ফাইল। আপনি যত C# কোড লিখবেন,
                        লজিক বানাবেন, তার সবকিছুই এই ফাইলের ভেতরে শুরু হবে। এই ফাইলটি ডিলিট বা ভুলভাল এডিট করলে কোড রান
                        হবে না।
                    </p>
                </div>

                <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <div class="flex items-center gap-2 font-bold text-slate-900 mb-1">
                        <i class="fa-solid fa-gears text-purple-500"></i> MyFirstApp.csproj
                    </div>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        এটি হলো প্রজেক্টের <strong>Identity Card বা Recipe Book</strong>। এটি একটি XML ফাইল যা মূলত
                        ডিক্লেয়ার করে আপনার প্রজেক্টটি .NET-এর কোন ভার্সন (যেমন: .NET 8.0) ব্যবহার করছে এবং বাইরে থেকে
                        কোনো থার্ড-পার্টি প্যাকেজ (NuGet Packages) ইন্সটল করা হয়েছে কি না।
                    </p>
                </div>

                <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <div class="flex items-center gap-2 font-bold text-slate-900 mb-1">
                        <i class="fa-solid fa-folder text-amber-500"></i> bin / (Binary)
                    </div>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        যখন আপনি <code>dotnet run</code> বা <code>dotnet build</code> কমান্ড দেন, তখন কম্পাইলার কোড রান
                        করার জন্য যে আউটপুট ফাইল বা <code>.dll</code> তৈরি করে, তা এই ফোল্ডারে এসে জমা হয়। অর্থাৎ, এটি
                        আপনার অ্যাপ্লিকেশনের <strong>রেডিমেড আউটপুট ঘর</strong>।
                    </p>
                </div>

                <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <div class="flex items-center gap-2 font-bold text-slate-900 mb-1">
                        <i class="fa-solid fa-folder-open text-amber-600"></i> obj / (Object)
                    </div>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        কোড কম্পাইল হওয়ার সময় ব্যাকএন্ডে কিছু <strong>Temporary (অস্থায়ী) ফাইল</strong> তৈরির প্রয়োজন
                        হয়। .NET কম্পাইলার নিজের কাজের সুবিধার জন্য এই ফোল্ডারটি ব্যবহার করে। ডেভেলপার হিসেবে আমাদের এই
                        ফোল্ডারের ভেতরে ঢুকে কিছু করার প্রয়োজন পড়ে না।
                    </p>
                </div>
            </div>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <div
                class="bg-white p-6 rounded-xl border border-rose-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 class="text-rose-600 font-bold mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-triangle-exclamation"></i> Common Mistakes
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                    অনেকে মনে করেন <code>bin</code> বা <code>obj</code> ফোল্ডার ডিলিট করলে প্রজেক্ট নষ্ট হয়ে যাবে। আসলে
                    তা নয়! এগুলো ডিলিট করলেও পরবর্তীবার <code>dotnet run</code> দিলে .NET এগুলোকে আবার নতুন করে তৈরি করে
                    নেয়। তবে <strong>.csproj</strong> ফাইলটি কখনো নিজে থেকে ডিলিট বা ম্যানুয়ালি নষ্ট করা যাবে না।
                </p>
            </div>

            <div
                class="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <h3 class="text-blue-600 font-bold mb-3 flex items-center gap-2">
                    <i class="fa-solid fa-terminal"></i> Structure Explorer Task
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                    আপনার তৈরি করা আগের প্রজেক্টের <code>.csproj</code> ফাইলটি ডাবল ক্লিক করে এডিটরে ওপেন করুন। দেখুন তো
                    সেখানে <code>&lt;TargetFramework&gt;</code> ট্যাগের ভেতর কী লেখা আছে? (যেমন: net8.0 বা net6.0)।
                </p>
            </div>

        </div>

        <footer class="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
            <div>
                <p class="text-slate-500 text-sm uppercase tracking-wider font-bold">Summary</p>
                <p class="text-slate-700 font-medium">Program.cs (Code) | csproj (Config) | bin & obj (Build outputs)
                </p>
            </div>
            <routerLink to="/lessons/folder-structure-02"
                class="bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                Next: Folder Structure of .NET Part 2 <i class="fa-solid fa-arrow-right"></i>
            </routerLink>
        </footer>

    </div>
</template>