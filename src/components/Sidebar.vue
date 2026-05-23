<template>
    <aside class="w-64 bg-slate-900 text-white p-6">

        <h1 class="text-2xl font-bold">
            CodeWithDotNet
        </h1>

        <p class="mt-2 text-sm text-slate-400">
            Learn publicly available .NET codebases and projects, and get inspired to build your own!
        </p>

        <nav class="mt-10 space-y-3">

            <RouterLink to="/" class="block rounded-lg bg-slate-800 px-4 py-3">
                Home
            </RouterLink>

            <RouterLink to="/csharp" class="block rounded-lg px-4 py-3 hover:bg-slate-800">
                C#
            </RouterLink>

            <RouterLink to="/dotnet" class="block rounded-lg px-4 py-3 hover:bg-slate-800">
                .NET
            </RouterLink>

        </nav>

    </aside>
</template>