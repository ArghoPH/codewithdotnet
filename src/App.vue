<template>
  <div class="flex min-h-screen">

    <!-- Sidebar -->
    <aside class="w-64 bg-slate-900 text-white p-6">

      <h1 class="text-2xl font-bold">
        CodeWithDotNet
      </h1>

      <p class="mt-2 text-sm text-slate-400">
        Learn publicly!
      </p>

      <nav class="mt-10 space-y-3">

        <a
          href="#"
          class="block rounded-lg bg-slate-800 px-4 py-3"
        >
          .NET Basics
        </a>

        <a
          href="#"
          class="block rounded-lg px-4 py-3 hover:bg-slate-800"
        >
          C#
        </a>

        <a
          href="#"
          class="block rounded-lg px-4 py-3 hover:bg-slate-800"
        >
          ASP.NET Core
        </a>

      </nav>

    </aside>

    <!-- Main Content -->
    <main class="flex-1 bg-slate-100 p-10">

      <div class="max-w-4xl">

        <p class="text-sm font-semibold text-blue-600">
          Welcome to
        </p>

        <h1 class="mt-2 text-5xl font-bold text-slate-900">
          CodeWithDotNet
        </h1>

        <p class="mt-6 text-lg leading-8 text-slate-600">
          This is my public learning journey where I document everything I learn about .NET, C#, ASP.NET Core, frontend development and real-world projects.
        </p>

        <div class="mt-10 grid gap-5 md:grid-cols-3">

          <div class="rounded-2xl bg-white p-6 shadow-sm">
            <h3 class="text-xl font-bold text-slate-900">
              C#
            </h3>

            <p class="mt-3 text-slate-600">
              Learn programming fundamentals and object oriented programming.
            </p>
          </div>

          <div class="rounded-2xl bg-white p-6 shadow-sm">
            <h3 class="text-xl font-bold text-slate-900">
              ASP.NET Core
            </h3>

            <p class="mt-3 text-slate-600">
              Build modern web applications and APIs using .NET.
            </p>
          </div>

          <div class="rounded-2xl bg-white p-6 shadow-sm">
            <h3 class="text-xl font-bold text-slate-900">
              Projects
            </h3>

            <p class="mt-3 text-slate-600">
              Learn by building real-world frontend and backend projects.
            </p>
          </div>

        </div>

      </div>

    </main>

  </div>
</template>