<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="flex min-h-screen">

    <Sidebar />

    <main class="flex-1 bg-slate-100 p-10">

      <div class="max-w-4xl">

        <p class="text-sm font-semibold text-blue-600">
          Welcome to
        </p>

        <h1 class="mt-2 text-5xl font-bold text-slate-900">
          CodeWithDotNet
        </h1>

        <p class="mt-6 text-lg leading-8 text-slate-600">
          This is my public learning journey where I document everything I learn about .NET, C#, ASP.NET Core, frontend
          development and real-world projects.
        </p>

      </div>

    </main>

  </div>
</template>