<template>
    <!-- VS CODE BLOCKS SECTION এখানে পুরো project এ করা important source code গুলো রাখা হয়েছে। প্রতিটা block VS Code style dark editor look এ দেখাবে। Code explain করার জন্য information গুলো HTML comment আকারে রাখা হয়েছে। -->
    <!-- Section Header -->
    <section class="space-y-10 py-16  max-w-6xl mx-auto">
        <div class="text-center">
            <p class="text-sm font-black uppercase tracking-[0.3em] text-slate-500"> Complete Source Code </p>
            <h2 class="mt-3 text-4xl font-black text-slate-950"> Project Codebase — VS Code Style </h2>
            <p class="mx-auto mt-4 max-w-3xl text-slate-600"> এই section এ CodeWithDotNet project এর main files গুলো
                দেখানো হয়েছে। প্রতিটা code block VS Code editor style এ রাখা হয়েছে যেন কেউ পড়লে project structure
                পরিষ্কার বুঝতে পারে। </p>
        </div>

        <!-- FILE: index.html কাজ: Browser প্রথমে এই file load করে। এখানে <div id="app"></div> থাকে, যেখানে Vue app mount হয়। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">index.html</span> </div> <span
                    class="text-xs text-slate-500">Blank Canvas</span>
            </div>

            <pre v-pre
                class="overflow-x-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#808080]">&lt;!-- Browser first loads this HTML file --&gt;</span> 
<span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">id</span>=<span class="text-[#ce9178]">"app"</span><span class="text-[#569cd6]">&gt;&lt;/div&gt;</span></code></pre>
        </div>

        <!-- FILE: main.js কাজ: Vue app start করে। Tailwind CSS, FontAwesome, App.vue, Router সব connect করে। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">

            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">main.js</span> </div> <span
                    class="text-xs text-slate-500">Entry Point</span>
            </div>

            <pre v-pre
                class="overflow-x-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#c586c0]">import</span> <span class="text-[#ce9178]">'./assets/main.css'</span>
<span class="text-[#c586c0]">import</span> <span class="text-[#ce9178]">'@fortawesome/fontawesome-free/css/all.min.css'</span>

<span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">createApp</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'vue'</span>
<span class="text-[#c586c0]">import</span> <span class="text-[#9cdcfe]">App</span> <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'./App.vue'</span>
<span class="text-[#c586c0]">import</span> <span class="text-[#9cdcfe]">router</span> <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'./router'</span>

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">app</span> = <span class="text-[#dcdcaa]">createApp</span>(<span class="text-[#9cdcfe]">App</span>)

<span class="text-[#9cdcfe]">app</span>.<span class="text-[#dcdcaa]">use</span>(<span class="text-[#9cdcfe]">router</span>)

<span class="text-[#9cdcfe]">app</span>.<span class="text-[#dcdcaa]">mount</span>(<span class="text-[#ce9178]">'#app'</span>)</code></pre>
        </div>


        <!-- FILE: main.css কাজ: Tailwind CSS import করে। Global scrollbar design করে। Tailwind v4 setup এ @import "tailwindcss"; এর শেষে semicolon লাগবে। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">src/assets/main.css</span> </div> <span
                    class="text-xs text-slate-500">Global Styles</span>
            </div>
            <pre v-pre class="overflow-x-auto  font-mono text-sm leading-8 text-[#d4d4d4]">
                <code>
    <span class="text-[#c586c0]">@import</span> <span class="text-[#ce9178]">"tailwindcss"</span><span class="text-[#d4d4d4]">;</span> 
    
    <span class="text-[#6a9955]">/* Global Scrollbar */</span> 
    <span class="text-[#d7ba7d]">::-webkit-scrollbar</span> { 
        <span class="text-[#9cdcfe]">width</span>: <span class="text-[#b5cea8]">10px</span>; 
    }    
    <span class="text-[#d7ba7d]">::-webkit-scrollbar-track</span> { 
        <span class="text-[#9cdcfe]">background</span>: <span class="text-[#ce9178]">#e2e8f0</span>; 
    } 
    <span class="text-[#d7ba7d]">::-webkit-scrollbar-thumb</span> { 
        <span class="text-[#9cdcfe]">background</span>: <span class="text-[#ce9178]">#94a3b8</span>; 
        <span class="text-[#9cdcfe]">border-radius</span>: <span class="text-[#b5cea8]">999px</span>; 
    } 
    <span class="text-[#d7ba7d]">::-webkit-scrollbar-thumb:hover</span> { 
        <span class="text-[#9cdcfe]">background</span>: <span class="text-[#ce9178]">#64748b</span>; 
    }</code>
</pre>
        </div>

        <!-- FILE: App.vue কাজ: পুরো app এর root layout। Sidebar, mobile overlay, mobile navbar, main content, RouterView, route change scroll reset সব এখানে manage হয়। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">src/App.vue</span> </div> <span
                    class="text-xs text-slate-500">Root Layout</span>
            </div>
            <pre v-pre class="max-h-[700px] overflow-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]">
                <code>
<span class="text-[#569cd6]">&lt;script</span> <span class="text-[#9cdcfe]">setup</span><span class="text-[#569cd6]">&gt;</span> 
<span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">ref</span>, <span class="text-[#9cdcfe]">watch</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'vue'</span> 
<span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">RouterView</span>, <span class="text-[#9cdcfe]">useRoute</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'vue-router'</span> 
<span class="text-[#c586c0]">import</span> <span class="text-[#9cdcfe]">Sidebar</span> <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'./components/Sidebar.vue'</span> 

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">route</span> = <span class="text-[#dcdcaa]">useRoute</span>() 
<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">isSidebarOpen</span> = <span class="text-[#dcdcaa]">ref</span>(<span class="text-[#569cd6]">false</span>) 
<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">mainContent</span> = <span class="text-[#dcdcaa]">ref</span>(<span class="text-[#569cd6]">null</span>) 

<span class="text-[#dcdcaa]">watch</span>( 
    () =&gt; <span class="text-[#9cdcfe]">route</span>.<span class="text-[#9cdcfe]">fullPath</span>, 
    () =&gt; { 
    <span class="text-[#9cdcfe]">isSidebarOpen</span>.<span class="text-[#9cdcfe]">value</span> = <span class="text-[#569cd6]">false</span> 
    <span class="text-[#c586c0]">if</span> (<span class="text-[#9cdcfe]">mainContent</span>.<span class="text-[#9cdcfe]">value</span>) {
         <span class="text-[#9cdcfe]">mainContent</span>.<span class="text-[#9cdcfe]">value</span>.<span class="text-[#dcdcaa]">scrollTo</span>({ 
            <span class="text-[#9cdcfe]">top</span>: <span class="text-[#b5cea8]">0</span>, 
            <span class="text-[#9cdcfe]">behavior</span>: <span class="text-[#ce9178]">'smooth'</span>, 
        }) 
    } 
} 
) 

<span class="text-[#569cd6]">&lt;/script&gt;</span> 
<span class="text-[#569cd6]">&lt;template&gt;</span> 
<span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex h-screen overflow-hidden bg-slate-100"</span><span class="text-[#569cd6]">&gt;</span> 
<span class="text-[#6a9955]">&lt;!-- Mobile Overlay --&gt;</span> 
<span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">v-if</span>=<span class="text-[#ce9178]">"isSidebarOpen"</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"fixed inset-0 z-40 bg-black/50 lg:hidden"</span> <span class="text-[#9cdcfe]">@click</span>=<span class="text-[#ce9178]">"isSidebarOpen = false"</span> <span class="text-[#569cd6]">&gt;&lt;/div&gt;</span> 
<span class="text-[#6a9955]">&lt;!-- Sidebar --&gt;</span> 
<span class="text-[#569cd6]">&lt;aside</span> <span class="text-[#9cdcfe]">
    :class</span>=<span class="text-[#ce9178]">"[ 'fixed left-0 top-0 z-50 h-screen w-72 transform overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0', isSidebarOpen ? 'translate-x-0' : '-translate-x-full' ]"</span> <span class="text-[#569cd6]">&gt;</span> 
    <span class="text-[#4ec9b0]">&lt;Sidebar</span> <span class="text-[#569cd6]">/&gt;</span> 
    <span class="text-[#569cd6]">&lt;/aside&gt;</span> 
    <span class="text-[#6a9955]">&lt;!-- Main Content --&gt;</span> 
    <span class="text-[#569cd6]">&lt;main</span> <span class="text-[#9cdcfe]">ref</span>=<span class="text-[#ce9178]">"mainContent"</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex-1 overflow-y-auto"</span><span class="text-[#569cd6]">&gt;</span> <span class="text-[#6a9955]">&lt;
        !-- Mobile Navbar --&gt;</span> 
        <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 lg:hidden"</span> <span class="text-[#569cd6]">&gt;</span> 
            <span class="text-[#569cd6]">&lt;button</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white"</span> <span class="text-[#9cdcfe]">@click</span>=<span class="text-[#ce9178]">"isSidebarOpen = true"</span> <span class="text-[#569cd6]">&gt;</span> 
            <span class="text-[#569cd6]">&lt;i</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"fa-solid fa-bars"</span><span class="text-[#569cd6]">&gt;&lt;/i&gt;</span> 
        <span class="text-[#569cd6]">&lt;/button&gt;</span> 
            <span class="text-[#569cd6]">&lt;h1</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"text-lg font-bold text-slate-900"</span><span class="text-[#569cd6]">&gt;</span> CodeWithDotNet <span class="text-[#569cd6]">&lt;/h1&gt;</span> 
        <span class="text-[#569cd6]">&lt;/div&gt;</span> 
        <span class="text-[#6a9955]">&lt;!-- Dynamic Page Render Area --&gt;</span> 
        <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"p-5 lg:p-10"</span><span class="text-[#569cd6]">&gt;</span> 
            <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mx-auto max-w-6xl"</span><span class="text-[#569cd6]">&gt;</span> 
            <span class="text-[#4ec9b0]">&lt;RouterView</span> <span class="text-[#569cd6]">/&gt;</span> 
            <span class="text-[#569cd6]">&lt;/div&gt;</span> 
        <span class="text-[#569cd6]">&lt;/div&gt;</span> 
    <span class="text-[#569cd6]">&lt;/main&gt;</span> 
    <span class="text-[#569cd6]">&lt;/div&gt;</span> 
<span class="text-[#569cd6]">&lt;/template&gt;</span></code></pre>
        </div>

        <!-- FILE: lessonLoader.js কাজ: lessons folder scan করে। File name থেকে slug/title বানায়। Folder name থেকে category বানায়। courses বানিয়ে sidebar এ পাঠায়। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">src/utils/lessonLoader.js</span> </div> <span
                    class="text-xs text-slate-500">Auto Lesson Scanner</span>
            </div>
            <pre v-pre class="max-h-[700px] overflow-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">lessonModules</span> = <span class="text-[#569cd6]">import</span>.<span class="text-[#9cdcfe]">meta</span>.<span class="text-[#dcdcaa]">glob</span>(<span class="text-[#ce9178]">'../lessons/**/*.vue'</span>)

<span class="text-[#569cd6]">function</span> <span class="text-[#dcdcaa]">removeOrderPrefix</span>(<span class="text-[#9cdcfe]">text</span>) {
  <span class="text-[#c586c0]">return</span> <span class="text-[#9cdcfe]">text</span>.<span class="text-[#dcdcaa]">replace</span>(<span class="text-[#d16969]">/^\d+-/</span>, <span class="text-[#ce9178]">''</span>)
}

<span class="text-[#569cd6]">function</span> <span class="text-[#dcdcaa]">removeExtension</span>(<span class="text-[#9cdcfe]">text</span>) {
  <span class="text-[#c586c0]">return</span> <span class="text-[#9cdcfe]">text</span>.<span class="text-[#dcdcaa]">replace</span>(<span class="text-[#d16969]">/\.vue$/</span>, <span class="text-[#ce9178]">''</span>)
}

<span class="text-[#569cd6]">function</span> <span class="text-[#dcdcaa]">formatTitle</span>(<span class="text-[#9cdcfe]">text</span>) {
  <span class="text-[#c586c0]">return</span> <span class="text-[#dcdcaa]">removeOrderPrefix</span>(<span class="text-[#9cdcfe]">text</span>)
    .<span class="text-[#dcdcaa]">replace</span>(<span class="text-[#d16969]">/-/g</span>, <span class="text-[#ce9178]">' '</span>)
    .<span class="text-[#dcdcaa]">replace</span>(<span class="text-[#d16969]">/\b\w/g</span>, (<span class="text-[#9cdcfe]">char</span>) =&gt; <span class="text-[#9cdcfe]">char</span>.<span class="text-[#dcdcaa]">toUpperCase</span>())
}

<span class="text-[#c586c0]">export</span> <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">lessons</span> = <span class="text-[#4fc1ff]">Object</span>.<span class="text-[#dcdcaa]">keys</span>(<span class="text-[#9cdcfe]">lessonModules</span>)
  .<span class="text-[#dcdcaa]">sort</span>()
  .<span class="text-[#dcdcaa]">map</span>((<span class="text-[#9cdcfe]">path</span>, <span class="text-[#9cdcfe]">index</span>) =&gt; {
    <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">parts</span> = <span class="text-[#9cdcfe]">path</span>.<span class="text-[#dcdcaa]">split</span>(<span class="text-[#ce9178]">'/'</span>)

    <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">rawFileName</span> = <span class="text-[#9cdcfe]">parts</span>[<span class="text-[#9cdcfe]">parts</span>.<span class="text-[#9cdcfe]">length</span> - <span class="text-[#b5cea8]">1</span>]
    <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">rawFolderName</span> = <span class="text-[#9cdcfe]">parts</span>[<span class="text-[#9cdcfe]">parts</span>.<span class="text-[#9cdcfe]">length</span> - <span class="text-[#b5cea8]">2</span>]

    <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">fileName</span> = <span class="text-[#dcdcaa]">removeOrderPrefix</span>(<span class="text-[#dcdcaa]">removeExtension</span>(<span class="text-[#9cdcfe]">rawFileName</span>))
    <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">folderName</span> = <span class="text-[#dcdcaa]">removeOrderPrefix</span>(<span class="text-[#9cdcfe]">rawFolderName</span>)

    <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">slug</span> = <span class="text-[#9cdcfe]">fileName</span>
    <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">title</span> = <span class="text-[#dcdcaa]">formatTitle</span>(<span class="text-[#9cdcfe]">fileName</span>)
    <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">category</span> = <span class="text-[#dcdcaa]">formatTitle</span>(<span class="text-[#9cdcfe]">folderName</span>)

    <span class="text-[#c586c0]">return</span> {
      <span class="text-[#9cdcfe]">id</span>: <span class="text-[#9cdcfe]">index</span> + <span class="text-[#b5cea8]">1</span>,
      <span class="text-[#9cdcfe]">title</span>,
      <span class="text-[#9cdcfe]">slug</span>,
      <span class="text-[#9cdcfe]">category</span>,
      <span class="text-[#9cdcfe]">path</span>,
      <span class="text-[#9cdcfe]">component</span>: <span class="text-[#9cdcfe]">lessonModules</span>[<span class="text-[#9cdcfe]">path</span>],
    }
  })

<span class="text-[#c586c0]">export</span> <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">courses</span> = <span class="text-[#4fc1ff]">Object</span>.<span class="text-[#dcdcaa]">values</span>(
  <span class="text-[#9cdcfe]">lessons</span>.<span class="text-[#dcdcaa]">reduce</span>((<span class="text-[#9cdcfe]">groups</span>, <span class="text-[#9cdcfe]">lesson</span>) =&gt; {
    <span class="text-[#c586c0]">if</span> (!<span class="text-[#9cdcfe]">groups</span>[<span class="text-[#9cdcfe]">lesson</span>.<span class="text-[#9cdcfe]">category</span>]) {
      <span class="text-[#9cdcfe]">groups</span>[<span class="text-[#9cdcfe]">lesson</span>.<span class="text-[#9cdcfe]">category</span>] = {
        <span class="text-[#9cdcfe]">title</span>: <span class="text-[#9cdcfe]">lesson</span>.<span class="text-[#9cdcfe]">category</span>,
        <span class="text-[#9cdcfe]">lessons</span>: [],
      }
    }

    <span class="text-[#9cdcfe]">groups</span>[<span class="text-[#9cdcfe]">lesson</span>.<span class="text-[#9cdcfe]">category</span>].<span class="text-[#9cdcfe]">lessons</span>.<span class="text-[#dcdcaa]">push</span>(<span class="text-[#9cdcfe]">lesson</span>)

    <span class="text-[#c586c0]">return</span> <span class="text-[#9cdcfe]">groups</span>
  }, {})
)</code></pre>
        </div>

        <!-- FILE: router/index.js কাজ: Home route define করে। lessonLoader থেকে lessons এনে auto route বানায়। নতুন lesson file add করলে route automatically তৈরি হয়। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">src/router/index.js</span> </div> <span
                    class="text-xs text-slate-500">Auto Routing</span>
            </div>
            <pre v-pre
                class="overflow-x-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">createRouter</span>, <span class="text-[#9cdcfe]">createWebHistory</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'vue-router'</span>
<span class="text-[#c586c0]">import</span> <span class="text-[#9cdcfe]">HomePage</span> <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'../pages/HomePage.vue'</span>
<span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">lessons</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'../utils/lessonLoader'</span>

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">lessonRoutes</span> = <span class="text-[#9cdcfe]">lessons</span>.<span class="text-[#dcdcaa]">map</span>((<span class="text-[#9cdcfe]">lesson</span>) =&gt; {
  <span class="text-[#c586c0]">return</span> {
    <span class="text-[#9cdcfe]">path</span>: <span class="text-[#ce9178]">`/lessons/${lesson.slug}`</span>,
    <span class="text-[#9cdcfe]">component</span>: <span class="text-[#9cdcfe]">lesson</span>.<span class="text-[#9cdcfe]">component</span>,
  }
})

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">router</span> = <span class="text-[#dcdcaa]">createRouter</span>({
  <span class="text-[#9cdcfe]">history</span>: <span class="text-[#dcdcaa]">createWebHistory</span>(),

  <span class="text-[#9cdcfe]">routes</span>: [
    {
      <span class="text-[#9cdcfe]">path</span>: <span class="text-[#ce9178]">'/'</span>,
      <span class="text-[#9cdcfe]">component</span>: <span class="text-[#9cdcfe]">HomePage</span>,
    },

    ...<span class="text-[#9cdcfe]">lessonRoutes</span>,
  ],
})

<span class="text-[#c586c0]">export</span> <span class="text-[#c586c0]">default</span> <span class="text-[#9cdcfe]">router</span></code></pre>
        </div>
        <!-- FILE: Sidebar.vue কাজ: Search, collapsible category, nested lessons, active route highlight সব করে। courses data আসে lessonLoader.js থেকে। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">src/components/Sidebar.vue</span> </div> <span
                    class="text-xs text-slate-500">Search + Collapse Sidebar</span>
            </div>
            <pre v-pre class="max-h-[800px] overflow-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#569cd6]">&lt;script</span> <span class="text-[#9cdcfe]">setup</span><span class="text-[#569cd6]">&gt;</span>
<span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">computed</span>, <span class="text-[#9cdcfe]">ref</span>, <span class="text-[#9cdcfe]">watch</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'vue'</span>
<span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">courses</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'@/utils/lessonLoader'</span>
<span class="text-[#c586c0]">import</span> { <span class="text-[#9cdcfe]">useRoute</span> } <span class="text-[#c586c0]">from</span> <span class="text-[#ce9178]">'vue-router'</span>

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">route</span> = <span class="text-[#dcdcaa]">useRoute</span>()

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">searchQuery</span> = <span class="text-[#dcdcaa]">ref</span>(<span class="text-[#ce9178]">''</span>)
<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">openCourses</span> = <span class="text-[#dcdcaa]">ref</span>({})

<span class="text-[#c586c0]">if</span> (<span class="text-[#9cdcfe]">courses</span>.<span class="text-[#9cdcfe]">length</span> &gt; <span class="text-[#b5cea8]">0</span>) {
  <span class="text-[#9cdcfe]">openCourses</span>.<span class="text-[#9cdcfe]">value</span>[<span class="text-[#9cdcfe]">courses</span>[<span class="text-[#b5cea8]">0</span>].<span class="text-[#9cdcfe]">title</span>] = <span class="text-[#569cd6]">true</span>
}

<span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">filteredCourses</span> = <span class="text-[#dcdcaa]">computed</span>(() =&gt; {
  <span class="text-[#c586c0]">if</span> (!<span class="text-[#9cdcfe]">searchQuery</span>.<span class="text-[#9cdcfe]">value</span>) {
    <span class="text-[#c586c0]">return</span> <span class="text-[#9cdcfe]">courses</span>
  }

  <span class="text-[#c586c0]">return</span> <span class="text-[#9cdcfe]">courses</span>
    .<span class="text-[#dcdcaa]">map</span>((<span class="text-[#9cdcfe]">course</span>) =&gt; {
      <span class="text-[#c586c0]">return</span> {
        ...<span class="text-[#9cdcfe]">course</span>,

        <span class="text-[#9cdcfe]">lessons</span>: <span class="text-[#9cdcfe]">course</span>.<span class="text-[#9cdcfe]">lessons</span>.<span class="text-[#dcdcaa]">filter</span>((<span class="text-[#9cdcfe]">lesson</span>) =&gt;
          <span class="text-[#9cdcfe]">lesson</span>.<span class="text-[#9cdcfe]">title</span>
            .<span class="text-[#dcdcaa]">toLowerCase</span>()
            .<span class="text-[#dcdcaa]">includes</span>(<span class="text-[#9cdcfe]">searchQuery</span>.<span class="text-[#9cdcfe]">value</span>.<span class="text-[#dcdcaa]">toLowerCase</span>())
        ),
      }
    })
    .<span class="text-[#dcdcaa]">filter</span>((<span class="text-[#9cdcfe]">course</span>) =&gt; <span class="text-[#9cdcfe]">course</span>.<span class="text-[#9cdcfe]">lessons</span>.<span class="text-[#9cdcfe]">length</span> &gt; <span class="text-[#b5cea8]">0</span>)
})

<span class="text-[#569cd6]">function</span> <span class="text-[#dcdcaa]">toggleCourse</span>(<span class="text-[#9cdcfe]">courseTitle</span>) {
  <span class="text-[#9cdcfe]">openCourses</span>.<span class="text-[#9cdcfe]">value</span>[<span class="text-[#9cdcfe]">courseTitle</span>] = !<span class="text-[#9cdcfe]">openCourses</span>.<span class="text-[#9cdcfe]">value</span>[<span class="text-[#9cdcfe]">courseTitle</span>]
}

<span class="text-[#569cd6]">function</span> <span class="text-[#dcdcaa]">isCourseOpen</span>(<span class="text-[#9cdcfe]">courseTitle</span>) {
  <span class="text-[#c586c0]">if</span> (<span class="text-[#9cdcfe]">searchQuery</span>.<span class="text-[#9cdcfe]">value</span>) {
    <span class="text-[#569cd6]">const</span> <span class="text-[#9cdcfe]">course</span> = <span class="text-[#9cdcfe]">filteredCourses</span>.<span class="text-[#9cdcfe]">value</span>.<span class="text-[#dcdcaa]">find</span>(
      (<span class="text-[#9cdcfe]">item</span>) =&gt; <span class="text-[#9cdcfe]">item</span>.<span class="text-[#9cdcfe]">title</span> === <span class="text-[#9cdcfe]">courseTitle</span>
    )

    <span class="text-[#c586c0]">return</span> <span class="text-[#9cdcfe]">course</span> &amp;&amp; <span class="text-[#9cdcfe]">course</span>.<span class="text-[#9cdcfe]">lessons</span>.<span class="text-[#9cdcfe]">length</span> &gt; <span class="text-[#b5cea8]">0</span>
      ? <span class="text-[#9cdcfe]">openCourses</span>.<span class="text-[#9cdcfe]">value</span>[<span class="text-[#9cdcfe]">courseTitle</span>] !== <span class="text-[#569cd6]">false</span>
      : <span class="text-[#569cd6]">false</span>
  }

  <span class="text-[#c586c0]">return</span> <span class="text-[#9cdcfe]">openCourses</span>.<span class="text-[#9cdcfe]">value</span>[<span class="text-[#9cdcfe]">courseTitle</span>]
}

<span class="text-[#dcdcaa]">watch</span>(<span class="text-[#9cdcfe]">searchQuery</span>, () =&gt; {
  <span class="text-[#9cdcfe]">filteredCourses</span>.<span class="text-[#9cdcfe]">value</span>.<span class="text-[#dcdcaa]">forEach</span>((<span class="text-[#9cdcfe]">course</span>) =&gt; {
    <span class="text-[#9cdcfe]">openCourses</span>.<span class="text-[#9cdcfe]">value</span>[<span class="text-[#9cdcfe]">course</span>.<span class="text-[#9cdcfe]">title</span>] = <span class="text-[#569cd6]">true</span>
  })
})
<span class="text-[#569cd6]">&lt;/script&gt;</span>

<span class="text-[#569cd6]">&lt;template&gt;</span>
  <span class="text-[#569cd6]">&lt;aside</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"h-screen w-64 overflow-y-auto bg-slate-900 p-6 text-white"</span><span class="text-[#569cd6]">&gt;</span>
    <span class="text-[#569cd6]">&lt;h1</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"text-2xl font-bold"</span><span class="text-[#569cd6]">&gt;</span>
      CodeWithDotNet
    <span class="text-[#569cd6]">&lt;/h1&gt;</span>

    <span class="text-[#569cd6]">&lt;p</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-2 text-sm text-slate-400"</span><span class="text-[#569cd6]">&gt;</span>
      Learn .NET and C# for free with interactive lessons and projects.
    <span class="text-[#569cd6]">&lt;/p&gt;</span>

    <span class="text-[#569cd6]">&lt;p</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-2 text-sm text-slate-400"</span><span class="text-[#569cd6]">&gt;</span>
      Developed by
      <span class="text-[#569cd6]">&lt;a</span> <span class="text-[#9cdcfe]">href</span>=<span class="text-[#ce9178]">"https://github.com/Argho"</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"underline"</span><span class="text-[#569cd6]">&gt;</span>
        Argho
      <span class="text-[#569cd6]">&lt;/a&gt;</span>
    <span class="text-[#569cd6]">&lt;/p&gt;</span>

    <span class="text-[#569cd6]">&lt;nav</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-10 space-y-3"</span><span class="text-[#569cd6]">&gt;</span>
      <span class="text-[#4ec9b0]">&lt;RouterLink</span>
        <span class="text-[#9cdcfe]">to</span>=<span class="text-[#ce9178]">"/"</span>
        <span class="text-[#9cdcfe]">:class</span>=<span class="text-[#ce9178]">"[
          'block rounded-lg px-4 py-3 transition',
          route.path === '/'
            ? 'bg-slate-800 text-white'
            : 'text-slate-300 hover:bg-slate-800'
        ]"</span>
      <span class="text-[#569cd6]">&gt;</span>
        Home
      <span class="text-[#4ec9b0]">&lt;/RouterLink&gt;</span>

      <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-5"</span><span class="text-[#569cd6]">&gt;</span>
        <span class="text-[#569cd6]">&lt;input</span>
          <span class="text-[#9cdcfe]">v-model</span>=<span class="text-[#ce9178]">"searchQuery"</span>
          <span class="text-[#9cdcfe]">type</span>=<span class="text-[#ce9178]">"text"</span>
          <span class="text-[#9cdcfe]">placeholder</span>=<span class="text-[#ce9178]">"Search lessons..."</span>
          <span class="text-[#9cdcfe]">autocomplete</span>=<span class="text-[#ce9178]">"off"</span>
          <span class="text-[#9cdcfe]">spellcheck</span>=<span class="text-[#ce9178]">"false"</span>
          <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"</span>
        <span class="text-[#569cd6]">/&gt;</span>
      <span class="text-[#569cd6]">&lt;/div&gt;</span>

      <span class="text-[#569cd6]">&lt;div</span>
        <span class="text-[#9cdcfe]">v-for</span>=<span class="text-[#ce9178]">"course in filteredCourses"</span>
        <span class="text-[#9cdcfe]">:key</span>=<span class="text-[#ce9178]">"course.title"</span>
      <span class="text-[#569cd6]">&gt;</span>
        <span class="text-[#569cd6]">&lt;button</span>
          <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-8 mb-3 flex w-full items-center justify-between rounded-lg px-2 py-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:bg-slate-800 hover:text-white"</span>
          <span class="text-[#9cdcfe]">@click</span>=<span class="text-[#ce9178]">"toggleCourse(course.title)"</span>
        <span class="text-[#569cd6]">&gt;</span>
          <span class="text-[#569cd6]">&lt;span&gt;</span>
            {{ course.title }}
          <span class="text-[#569cd6]">&lt;/span&gt;</span>

          <span class="text-[#569cd6]">&lt;i</span>
            <span class="text-[#9cdcfe]">:class</span>=<span class="text-[#ce9178]">"[
              'fa-solid transition-transform duration-300',
              isCourseOpen(course.title) ? 'fa-chevron-down' : 'fa-chevron-right'
            ]"</span>
          <span class="text-[#569cd6]">&gt;&lt;/i&gt;</span>
        <span class="text-[#569cd6]">&lt;/button&gt;</span>

        <span class="text-[#569cd6]">&lt;div</span>
          <span class="text-[#9cdcfe]">v-if</span>=<span class="text-[#ce9178]">"isCourseOpen(course.title)"</span>
          <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-3 space-y-2"</span>
        <span class="text-[#569cd6]">&gt;</span>
          <span class="text-[#4ec9b0]">&lt;RouterLink</span>
            <span class="text-[#9cdcfe]">v-for</span>=<span class="text-[#ce9178]">"lesson in course.lessons"</span>
            <span class="text-[#9cdcfe]">:key</span>=<span class="text-[#ce9178]">"lesson.slug"</span>
            <span class="text-[#9cdcfe]">:to</span>=<span class="text-[#ce9178]">"`/lessons/${lesson.slug}`"</span>
            <span class="text-[#9cdcfe]">:class</span>=<span class="text-[#ce9178]">"[
              'block rounded-lg px-4 py-3 text-sm transition',
              route.path === `/lessons/${lesson.slug}`
                ? 'bg-slate-800 text-white'
                : 'text-slate-300 hover:bg-slate-800'
            ]"</span>
          <span class="text-[#569cd6]">&gt;</span>
            {{ lesson.title }}
          <span class="text-[#4ec9b0]">&lt;/RouterLink&gt;</span>
        <span class="text-[#569cd6]">&lt;/div&gt;</span>
      <span class="text-[#569cd6]">&lt;/div&gt;</span>

      <span class="text-[#569cd6]">&lt;p</span>
        <span class="text-[#9cdcfe]">v-if</span>=<span class="text-[#ce9178]">"filteredCourses.length === 0"</span>
        <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-6 rounded-xl bg-slate-800 p-4 text-sm text-slate-400"</span>
      <span class="text-[#569cd6]">&gt;</span>
        No lesson found.
      <span class="text-[#569cd6]">&lt;/p&gt;</span>
    <span class="text-[#569cd6]">&lt;/nav&gt;</span>
  <span class="text-[#569cd6]">&lt;/aside&gt;</span>
<span class="text-[#569cd6]">&lt;/template&gt;</span></code></pre>
        </div>

        <!-- FILE: HomePage.vue কাজ: Homepage UI দেখায়। এই page / route এ render হয়। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">src/pages/HomePage.vue</span> </div> <span
                    class="text-xs text-slate-500">Homepage</span>
            </div>
            <pre v-pre class="max-h-[800px] overflow-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#569cd6]">&lt;template&gt;</span>
  <span class="text-[#569cd6]">&lt;section</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"space-y-16 py-6 max-w-6xl mx-auto selection:bg-blue-500 selection:text-white"</span><span class="text-[#569cd6]">&gt;</span>

    <span class="text-[#6a9955]">&lt;!-- Hero Section --&gt;</span>
    <span class="text-[#569cd6]">&lt;div</span>
      <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-gradient-to-b from-slate-50 via-white to-slate-50/40 px-6 py-16 text-center shadow-[0_12px_40px_rgba(0,0,0,0.02)] sm:px-16 sm:py-24"</span>
    <span class="text-[#569cd6]">&gt;</span>

      <span class="text-[#6a9955]">&lt;!-- Decorative Backdrop Blurs --&gt;</span>
      <span class="text-[#569cd6]">&lt;div</span>
        <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 mix-blend-multiply blur-3xl pointer-events-none"</span>
      <span class="text-[#569cd6]">&gt;&lt;/div&gt;</span>

      <span class="text-[#569cd6]">&lt;div</span>
        <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 mix-blend-multiply blur-3xl pointer-events-none"</span>
      <span class="text-[#569cd6]">&gt;&lt;/div&gt;</span>

      <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"relative z-10 mx-auto max-w-4xl space-y-6"</span><span class="text-[#569cd6]">&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- Badge --&gt;</span>
        <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"flex justify-center"</span><span class="text-[#569cd6]">&gt;</span>
          <span class="text-[#569cd6]">&lt;span</span>
            <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-blue-700 shadow-sm backdrop-blur-md"</span>
          <span class="text-[#569cd6]">&gt;</span>
            Input content here
          <span class="text-[#569cd6]">&lt;/span&gt;</span>
        <span class="text-[#569cd6]">&lt;/div&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- Main Title --&gt;</span>
        <span class="text-[#569cd6]">&lt;h1</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"text-4xl font-black tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.15]"</span><span class="text-[#569cd6]">&gt;</span>
          Input content here

          <span class="text-[#569cd6]">&lt;span</span>
            <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent"</span>
          <span class="text-[#569cd6]">&gt;</span>
            Input content here
          <span class="text-[#569cd6]">&lt;/span&gt;</span>
        <span class="text-[#569cd6]">&lt;/h1&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- Subtitle --&gt;</span>
        <span class="text-[#569cd6]">&lt;p</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600"</span><span class="text-[#569cd6]">&gt;</span>
          Input content here
        <span class="text-[#569cd6]">&lt;/p&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- CTA Buttons --&gt;</span>
        <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"pt-4 flex flex-wrap justify-center gap-4"</span><span class="text-[#569cd6]">&gt;</span>
          <span class="text-[#4ec9b0]">&lt;RouterLink</span>
            <span class="text-[#9cdcfe]">to</span>=<span class="text-[#ce9178]">"/lessons/what-is-dotnet"</span>
            <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"</span>
          <span class="text-[#569cd6]">&gt;</span>
            Input content here
          <span class="text-[#4ec9b0]">&lt;/RouterLink&gt;</span>

          <span class="text-[#569cd6]">&lt;a</span>
            <span class="text-[#9cdcfe]">href</span>=<span class="text-[#ce9178]">"#topics"</span>
            <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"rounded-2xl border border-slate-200 bg-white/90 px-8 py-4 font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"</span>
          <span class="text-[#569cd6]">&gt;</span>
            Input content here
          <span class="text-[#569cd6]">&lt;/a&gt;</span>
        <span class="text-[#569cd6]">&lt;/div&gt;</span>

      <span class="text-[#569cd6]">&lt;/div&gt;</span>
    <span class="text-[#569cd6]">&lt;/div&gt;</span>

    <span class="text-[#6a9955]">&lt;!-- Metrics / Stats Banner --&gt;</span>
    <span class="text-[#569cd6]">&lt;div</span>
      <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mx-auto max-w-5xl rounded-3xl border border-slate-200/60 bg-white/70 p-2 shadow-[0_4px_30px_rgba(0,0,0,0.015)] backdrop-blur-md"</span>
    <span class="text-[#569cd6]">&gt;</span>
      <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0"</span><span class="text-[#569cd6]">&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- Stat Card 1 --&gt;</span>
        <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"p-6 text-center transition-all duration-300 hover:bg-slate-50/60 sm:rounded-l-3xl flex flex-col justify-center items-center"</span><span class="text-[#569cd6]">&gt;</span>
          Input content here
        <span class="text-[#569cd6]">&lt;/div&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- Stat Card 2 --&gt;</span>
        <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"p-6 text-center transition-all duration-300 hover:bg-slate-50/60 flex flex-col justify-center items-center"</span><span class="text-[#569cd6]">&gt;</span>
          Input content here
        <span class="text-[#569cd6]">&lt;/div&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- Stat Card 3 --&gt;</span>
        <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"p-6 text-center transition-all duration-300 hover:bg-slate-50/60 sm:rounded-r-3xl flex flex-col justify-center items-center"</span><span class="text-[#569cd6]">&gt;</span>
          Input content here
        <span class="text-[#569cd6]">&lt;/div&gt;</span>

      <span class="text-[#569cd6]">&lt;/div&gt;</span>
    <span class="text-[#569cd6]">&lt;/div&gt;</span>

    <span class="text-[#6a9955]">&lt;!-- Topics Grid Section --&gt;</span>
    <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">id</span>=<span class="text-[#ce9178]">"topics"</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"pt-4 scroll-mt-6"</span><span class="text-[#569cd6]">&gt;</span>

      <span class="text-[#6a9955]">&lt;!-- Section Title --&gt;</span>
      <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mb-10 text-center space-y-2"</span><span class="text-[#569cd6]">&gt;</span>
        <span class="text-[#569cd6]">&lt;h2</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"text-3xl font-bold text-slate-800"</span><span class="text-[#569cd6]">&gt;</span>
          Topics
        <span class="text-[#569cd6]">&lt;/h2&gt;</span>
        <span class="text-[#569cd6]">&lt;p</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"text-slate-600"</span><span class="text-[#569cd6]">&gt;</span>
          Explore the key topics covered in this course
        <span class="text-[#569cd6]">&lt;/p&gt;</span>
      <span class="text-[#569cd6]">&lt;/div&gt;</span>

      <span class="text-[#6a9955]">&lt;!-- Topic Cards --&gt;</span>
      <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"grid gap-6 md:grid-cols-3"</span><span class="text-[#569cd6]">&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- Topic Card 1 --&gt;</span>
        <span class="text-[#4ec9b0]">&lt;RouterLink</span>
          <span class="text-[#9cdcfe]">to</span>=<span class="text-[#ce9178]">"/lessons/what-is-csharp"</span>
          <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"group relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-100"</span>
        <span class="text-[#569cd6]">&gt;</span>
          Input content here
        <span class="text-[#4ec9b0]">&lt;/RouterLink&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- Topic Card 2 --&gt;</span>
        <span class="text-[#4ec9b0]">&lt;RouterLink</span>
          <span class="text-[#9cdcfe]">to</span>=<span class="text-[#ce9178]">"/lessons/what-is-dotnet"</span>
          <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"group relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-100"</span>
        <span class="text-[#569cd6]">&gt;</span>
          Input content here
        <span class="text-[#4ec9b0]">&lt;/RouterLink&gt;</span>

        <span class="text-[#6a9955]">&lt;!-- Topic Card 3 --&gt;</span>
        <span class="text-[#569cd6]">&lt;div</span>
          <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"group relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-100"</span>
        <span class="text-[#569cd6]">&gt;</span>
          Input content here
        <span class="text-[#569cd6]">&lt;/div&gt;</span>

      <span class="text-[#569cd6]">&lt;/div&gt;</span>
    <span class="text-[#569cd6]">&lt;/div&gt;</span>

  <span class="text-[#569cd6]">&lt;/section&gt;</span>
<span class="text-[#569cd6]">&lt;/template&gt;</span></code></pre>
        </div>

        <!-- FILE: Example Lesson Component কাজ: এখন প্রতিটা lesson আলাদা Vue file। huge lessons.js আর লাগবে না। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">src/lessons/01-dotnet-basics/01-what-is-dotnet.vue</span>
                </div> <span class="text-xs text-slate-500">Lesson Component</span>
            </div>
            <pre v-pre class="max-h-[800px] overflow-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code><span class="text-[#569cd6]">&lt;template&gt;</span>
  <span class="text-[#569cd6]">&lt;div</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"space-y-10"</span><span class="text-[#569cd6]">&gt;</span>

    <span class="text-[#6a9955]">&lt;!-- Hero Section --&gt;</span>
    <span class="text-[#569cd6]">&lt;section&gt;</span>
      <span class="text-[#569cd6]">&lt;p</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"text-sm font-black uppercase tracking-widest text-blue-600"</span><span class="text-[#569cd6]">&gt;</span>
        .NET Basics
      <span class="text-[#569cd6]">&lt;/p&gt;</span>

      <span class="text-[#569cd6]">&lt;h1</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-4 text-5xl font-black text-slate-900"</span><span class="text-[#569cd6]">&gt;</span>
        What is .NET?
      <span class="text-[#569cd6]">&lt;/h1&gt;</span>

      <span class="text-[#569cd6]">&lt;p</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-6 text-xl leading-9 text-slate-600"</span><span class="text-[#569cd6]">&gt;</span>
        .NET is a modern development platform created by Microsoft.
      <span class="text-[#569cd6]">&lt;/p&gt;</span>
    <span class="text-[#569cd6]">&lt;/section&gt;</span>

    <span class="text-[#6a9955]">&lt;!-- Info Card --&gt;</span>
    <span class="text-[#569cd6]">&lt;section</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"</span><span class="text-[#569cd6]">&gt;</span>
      <span class="text-[#569cd6]">&lt;h2</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"text-2xl font-black text-slate-900"</span><span class="text-[#569cd6]">&gt;</span>
        Why do developers use .NET?
      <span class="text-[#569cd6]">&lt;/h2&gt;</span>

      <span class="text-[#569cd6]">&lt;p</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-6 text-lg leading-8 text-slate-600"</span><span class="text-[#569cd6]">&gt;</span>
        Developers use .NET for web applications, APIs, enterprise systems,
        cloud applications, desktop software, and mobile apps.
      <span class="text-[#569cd6]">&lt;/p&gt;</span>
    <span class="text-[#569cd6]">&lt;/section&gt;</span>

    <span class="text-[#6a9955]">&lt;!-- Code Flow Section --&gt;</span>
    <span class="text-[#569cd6]">&lt;section</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"rounded-3xl bg-slate-950 p-8 text-white"</span><span class="text-[#569cd6]">&gt;</span>
      <span class="text-[#569cd6]">&lt;h2</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"text-2xl font-black text-cyan-300"</span><span class="text-[#569cd6]">&gt;</span>
        Simple .NET Flow
      <span class="text-[#569cd6]">&lt;/h2&gt;</span>

      <span class="text-[#569cd6]">&lt;pre</span> <span class="text-[#9cdcfe]">class</span>=<span class="text-[#ce9178]">"mt-6 overflow-x-auto text-sm leading-8 text-slate-300"</span><span class="text-[#569cd6]">&gt;</span>
Frontend
   ↓
ASP.NET Core API
   ↓
Business Logic
   ↓
Database
      <span class="text-[#569cd6]">&lt;/pre&gt;</span>
    <span class="text-[#569cd6]">&lt;/section&gt;</span>

  <span class="text-[#569cd6]">&lt;/div&gt;</span>
<span class="text-[#569cd6]">&lt;/template&gt;</span></code></pre>
        </div>

        <!-- FILE: vercel.json কাজ: Vercel SPA route fix। Direct URL refresh করলে 404 যেন না আসে। -->
        <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl max-w-3xl mx-auto">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
                <div class="flex items-center gap-2"> <span class="h-3 w-3 rounded-full bg-red-500"></span> <span
                        class="h-3 w-3 rounded-full bg-yellow-500"></span> <span
                        class="h-3 w-3 rounded-full bg-green-500"></span> <span
                        class="ml-3 font-mono text-xs text-slate-400">vercel.json</span> </div> <span
                    class="text-xs text-slate-500">SPA Routing Fix</span>
            </div>
            <pre v-pre class="overflow-x-auto p-6 font-mono text-sm leading-8 text-[#d4d4d4]"><code>{
  <span class="text-[#9cdcfe]">"rewrites"</span>: [
    {
      <span class="text-[#9cdcfe]">"source"</span>: <span class="text-[#ce9178]">"/(.*)"</span>,
      <span class="text-[#9cdcfe]">"destination"</span>: <span class="text-[#ce9178]">"/index.html"</span>
    }
  ]
}</code>
</pre>
        </div>
    </section>
</template>