<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const isSidebarOpen = ref(false)
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-slate-100">

    <!-- Mobile Overlay -->
    <div v-if="isSidebarOpen" class="fixed inset-0 z-40 bg-black/50 lg:hidden" @click="isSidebarOpen = false"></div>

    <!-- Sidebar -->
    <aside :class="[
      'fixed left-0 top-0 z-50 h-screen w-72 transform overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
      <Sidebar />
    </aside>

    <!-- Main -->
    <main class="flex-1 overflow-y-auto">

      <!-- Mobile Navbar -->
      <div
        class="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 lg:hidden">
        <button class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white"
          @click="isSidebarOpen = true">
          <i class="fa-solid fa-bars"></i>
        </button>

        <h1 class="text-lg font-bold text-slate-900">
          CodeWithDotNet
        </h1>
      </div>

      <!-- Content -->
      <div class="p-5 lg:p-10">
        <div class="mx-auto max-w-6xl">
          <RouterView />
        </div>
      </div>

    </main>

  </div>
</template>