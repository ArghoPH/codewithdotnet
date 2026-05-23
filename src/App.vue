<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="flex min-h-screen">

    <Sidebar />

    <main class="flex-1 bg-slate-100 p-10">

      <div class="max-w-4xl">
        <RouterView />
      </div>

    </main>

  </div>
</template>