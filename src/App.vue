<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <aside class="h-screen overflow-y-auto">
      <Sidebar />
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto bg-slate-100 p-10">
      <div class="mx-auto max-w-6xl">
        <RouterView />
      </div>
    </main>

  </div>
</template>