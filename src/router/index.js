import { createRouter, createWebHistory } from 'vue-router'

const HomePage = {
  template: `
    <div>
      <p class="text-sm font-semibold text-blue-600">
        Welcome to
      </p>

      <h1 class="mt-2 text-5xl font-bold text-slate-900">
        CodeWithDotNet
      </h1>

      <p class="mt-6 text-lg text-slate-600">
        Learn .NET publicly with me, one commit at a time.
      </p>
    </div>
  `,
}

const CSharpPage = {
  template: `
    <div>
      <h1 class="text-5xl font-bold text-slate-900">
        C#
      </h1>

      <p class="mt-6 text-lg text-slate-600">
        C# is a modern programming language used with .NET.
      </p>
    </div>
  `,
}

const DotNetPage = {
  template: `
    <div>
      <h1 class="text-5xl font-bold text-slate-900">
        .NET
      </h1>

      <p class="mt-6 text-lg text-slate-600">
        .NET is a development platform by Microsoft.
      </p>
    </div>
  `,
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/csharp',
      component: CSharpPage,
    },
    {
      path: '/dotnet',
      component: DotNetPage,
    },
  ],
})

export default router