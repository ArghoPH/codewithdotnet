<template>
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans p-6 md:p-12 overflow-y-auto">

        <div class="max-w-4xl mx-auto mb-16 text-center">
            <span class="text-rose-600 font-mono text-sm tracking-widest uppercase font-bold">Module 11: OOP Pillar
                1</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">Encapsulation
                (এনক্যাপসুলেশন)</h1>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">ডাটা সিকিউরিটির মূল মন্ত্র! ব্ল্যাক-বক্স আর্কিটেকচার
                তৈরি করতে কীভাবে অ্যাক্সেস মডিফায়ার ব্যবহার করে ডাটা হাইড করতে হয় তার ইন-ডেপ্থ গাইড।</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-16">

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-rose-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CONCEPT</span>
                    <h2 class="text-2xl font-bold text-slate-900">এনক্যাপসুলেশন কী?</h2>
                </div>

                <p class="text-slate-700 mb-4 leading-relaxed">
                    <b>Encapsulation</b> শব্দটা এসেছে "Capsule" থেকে। একটা ক্যাপসুলের ভেতরে যেমন অনেকগুলো ওষুধ বাইরের
                    ধুলোবালি থেকে নিরাপদ থাকে, ঠিক তেমনি একটি ক্লাসের ভেতরে তার ভেরিয়েবল (Data) এবং মেথডকে (Behavior)
                    একসাথে মুড়িয়ে নিরাপদ রাখাকে এনক্যাপসুলেশন বলে।
                </p>

                <p class="text-slate-700 mb-6 leading-relaxed">
                    এর মূল উদ্দেশ্য হলো <strong>Data Hiding (ডাটা গোপন করা)</strong>। বাইরের কোনো কোড যেন সরাসরি ক্লাসের
                    ভেতরের ভ্যালু বদলে বা নষ্ট করে দিতে না পারে, তা নিশ্চিত করা।
                </p>

                <div class="border border-slate-200 rounded-xl overflow-hidden mt-6">
                    <table class="w-full text-left border-collapse text-sm">
                        <thead>
                            <tr class="bg-slate-900 text-white font-mono text-xs uppercase tracking-wider">
                                <th class="p-4">Modifier</th>
                                <th class="p-4">Visibility (কোথা থেকে দেখা যাবে?)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 bg-slate-50">
                            <tr>
                                <td class="p-4 font-mono text-rose-600 font-bold">public</td>
                                <td class="p-4 text-slate-600">যেকোনো জায়গা থেকে (ক্লাসের ভেতর ও বাইরে সবখানে)
                                    এক্সেসযোগ্য।</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-mono text-rose-600 font-bold">private</td>
                                <td class="p-4 text-slate-600"><b>শুধুমাত্র</b> ওই নির্দিষ্ট ক্লাসের ভেতর থেকে এক্সেস
                                    করা যাবে। (ডিফল্ট মডিফায়ার)</td>
                            </tr>
                            <tr>
                                <td class="p-4 font-mono text-rose-600 font-bold">protected</td>
                                <td class="p-4 text-slate-600">উক্ত ক্লাস এবং তার থেকে তৈরি হওয়া চাইল্ড ক্লাস
                                    (Inheritance) থেকে এক্সেসযোগ্য।</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-rose-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">IMPLEMENTATION</span>
                    <h2 class="text-2xl font-bold text-slate-900">রিয়েল-ওয়ার্ল্ড সিকিউরড প্যাটার্ন</h2>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="space-y-4 text-sm text-slate-700 leading-relaxed">
                        <p>প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ারিংয়ে এনক্যাপসুলেশন অ্যাপ্লাই করার স্ট্যান্ডার্ড নিয়ম:</p>
                        <ol class="list-decimal list-inside space-y-2 text-slate-600">
                            <li>ক্লাসের সব ভেরিয়েবল বা ফিল্ডকে <code>private</code> করে দেওয়া।</li>
                            <li>ডাটা রিড বা রাইট করার জন্য নির্দিষ্ট <code>public</code> মেথড বা প্রোপার্টি ব্যবহার করা।
                            </li>
                        </ol>
                        <div
                            class="bg-rose-50 border border-rose-100 p-4 rounded-xl text-xs text-rose-900 font-mono mt-4">
                            <strong>কেন?</strong> সরাসরি মেমরি এক্সেস ব্লক করে আমরা অবজেক্টের ওপর ফুল কন্ট্রোল পাই।
                            ইউজার ভুল পাসওয়ার্ড দিলে আমরা ব্যালেন্স দেখতে দিবো না—এই লজিক মেথডের ভেতর লক করা থাকে।
                        </div>
                    </div>

                    <pre
                        class="bg-slate-900 text-blue-300 p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed shadow-inner">
<span class="text-purple-400">public class</span> <span class="text-emerald-400">UserAccount</span>
{
    <span class="text-slate-500">// ডাটা হাইড করা হয়েছে (Private)</span>
    <span class="text-purple-400">private string</span> _pinCode = <span class="text-amber-300">"1234"</span>;

    <span class="text-slate-500">// গেট-মেথড দিয়ে কন্ট্রোলড এক্সেস (Public)</span>
    <span class="text-purple-400">public bool</span> ValidatePin(<span class="text-purple-400">string</span> inputPin)
    {
        <span class="text-purple-400">return</span> _pinCode == inputPin;
    }
}</pre>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm border-t-4 border-t-rose-600">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-blue-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">LIVE
                        LAB</span>
                    <h2 class="text-2xl font-bold text-slate-900">ATM Pin ভ্যালিডেশন সিমুলেটর (Encapsulation in Action)
                    </h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">নিচের ল্যাবে অবজেক্টের সিক্রেট পিন কোড <code>private</code> করা
                    আছে। আপনি সরাসরি পিন দেখতে পাবেন না। আপনাকে সঠিক পিন দিয়ে মেথড কল করতে হবে, তবেই ভেতরের ডাটা আনলক
                    হবে।</p>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div
                        class="md:col-span-5 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4 flex flex-col justify-between">
                        <div>
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">ATM
                                Secure Client Interface</span>
                            <label class="block text-xs font-medium text-slate-700 mb-1">Enter 4-Digit PIN:</label>
                            <input v-model="atmInput" type="password" maxlength="4"
                                class="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-rose-500 text-center font-mono tracking-widest outline-none"
                                placeholder="••••">
                        </div>

                        <button @click="testPin"
                            class="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 rounded-lg text-xs transition shadow-sm mt-4">
                            Call: Account.UnlockData(pin)
                        </button>
                    </div>

                    <div
                        class="md:col-span-7 bg-slate-900 rounded-xl p-5 font-mono text-xs flex flex-col justify-between border border-slate-800">
                        <div>
                            <span
                                class="text-slate-500 block mb-4 uppercase tracking-widest text-[10px] font-bold">Internal
                                Class Memory State</span>

                            <div class="space-y-2">
                                <div
                                    class="flex justify-between items-center bg-slate-800 p-2.5 rounded border border-slate-700">
                                    <span class="text-slate-400">private string _secretPin:</span>
                                    <span class="text-rose-400 font-bold"> [ HIDDEN / MASKED ] 🔒 </span>
                                </div>

                                <div
                                    class="flex justify-between items-center bg-slate-800 p-2.5 rounded border border-slate-700">
                                    <span class="text-slate-400">Execution Route:</span>
                                    <span class="text-slate-300 font-bold text-[11px]">{{ executionRoute }}</span>
                                </div>

                                <div
                                    class="bg-black/60 border border-slate-950 p-4 rounded-lg min-h-[70px] flex items-center justify-center mt-4">
                                    <div v-if="unlockStatus === 'success'" class="text-emerald-400 text-center">
                                        <div class="font-bold text-sm">🎉 ACCESS GRANTED</div>
                                        <div class="text-[10px] text-slate-400 mt-1">User Balance: $2,540.00 (Data
                                            Successfully Encapsulated)</div>
                                    </div>
                                    <div v-else-if="unlockStatus === 'failed'"
                                        class="text-rose-400 text-center animate-shake">
                                        <div class="font-bold text-sm">❌ ACCESS DENIED</div>
                                        <div class="text-[10px] text-slate-400 mt-1">Unauthorized field access blocked
                                            by modifier hierarchy.</div>
                                    </div>
                                    <div v-else class="text-slate-500 italic text-center">
                                        Awaiting secure cryptographic validation...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6">
                    <span
                        class="bg-amber-500 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold">CHALLENGE</span>
                    <h2 class="text-2xl font-bold text-slate-900">এনক্যাপসুলেশন চ্যালেঞ্জ</h2>
                </div>

                <div class="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <span class="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-1">Scenario</span>
                    <h3 class="font-bold text-slate-900 text-base mb-2">একটি SmartThermostat ক্লাস ডিজাইন করুন</h3>
                    <p class="text-sm text-slate-600 mb-4 leading-relaxed">
                        ১. ঘরের তাপমাত্রা রাখার ফিল্ড <code>_temperature</code> কে <code>private</code> করুন।<br />
                        ২. একটি পাবলিক প্রোপার্টি বা মেথড রাখুন যার মাধ্যমে টেম্পারেচার সেট করা যাবে। কিন্তু শর্ত হলো
                        তাপমাত্রা কখনই <b>15°C এর নিচে এবং 35°C এর উপরে</b> সেট করা যাবে না।
                    </p>

                    <details class="bg-slate-900 rounded-lg group">
                        <summary
                            class="text-xs font-mono text-slate-400 p-3 cursor-pointer hover:text-white select-none transition">
                            💻 View Encapsulated Solution</summary>
                        <pre
                            class="p-4 pt-0 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto border-t border-slate-800 leading-relaxed">
<span class="text-purple-400">public class</span> <span class="text-emerald-400">SmartThermostat</span>
{
    <span class="text-purple-400">private double</span> _temperature;

    <span class="text-purple-400">public double</span> Temperature
    {
        <span class="text-purple-400">get</span> { <span class="text-purple-400">return</span> _temperature; }
        <span class="text-purple-400">set</span> {
            <span class="text-purple-400">if</span> (value &gt;= <span class="text-emerald-400">15</span> && value &lt;= <span class="text-emerald-400">35</span>) {
                _temperature = value;
            } <span class="text-purple-400">else</span> {
                Console.WriteLine(<span class="text-amber-300">"Invalid range! Kept at default."</span>);
            }
        }
    }
}</pre>
                    </details>
                </div>
            </section>

            <div
                class="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-xs text-rose-400 font-mono font-bold tracking-widest uppercase">Next Module</span>
                    <h3 class="text-xl font-bold mt-1">OOP Pillar 2: Inheritance (ইনহেরিটেন্স বা উত্তরাধিকার)</h3>
                    <p class="text-sm text-slate-400 mt-1">কোডের ডুপ্লিকেসি চিরতরে বন্ধ করার ম্যাজিক! কীভাবে একটি
                        প্যারেন্ট ক্লাসের প্রোপার্টিজ এবং মেথডগুলোকে রিইউজ করে নতুন চাইল্ড ক্লাস তৈরি করা যায় তা শিখবো
                        পরবর্তী অধ্যায়ে।</p>
                </div>
                <button
                    class="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition whitespace-nowrap shadow-md">
                    Next: Inheritance <i class="fa-solid fa-sitemap ml-1"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const atmInput = ref('');
const unlockStatus = ref('idle'); // idle, success, failed
const executionRoute = ref('Awaiting input...');

const testPin = () => {
    if (atmInput.value === '1234') {
        unlockStatus.value = 'success';
        executionRoute.value = 'ValidatePin() -> Match Found -> Fetching Balance';
    } else {
        unlockStatus.value = 'failed';
        executionRoute.value = 'ValidatePin() -> Mismatch Exception Thrown! -> Access Blocked';
    }
};
</script>