export const lessons = [
    {
        id: 1,
        title: 'What is .NET?',
        slug: 'what-is-dotnet',
        category: '.NET Basics',
        content: `
.NET is a modern development platform created by Microsoft.

It provides tools, libraries, and runtime support for building different types of applications.

With .NET, developers can build:

• Web Applications
• Web APIs
• Desktop Applications
• Mobile Apps
• Cloud Applications
• Enterprise Software

The most commonly used language with .NET is C#.

Example technologies inside the .NET ecosystem:

• ASP.NET Core → Web development
• Entity Framework Core → Database access
• Blazor → Interactive web UI
• MAUI → Cross-platform mobile and desktop apps

Example:

A company can use .NET to build:
- An e-commerce website
- A hospital management system
- A banking application
- A cloud-based API service

Why developers love .NET:

• Fast and modern
• Cross-platform (Windows, Linux, macOS)
• Powerful tooling
• Large ecosystem
• Great performance
• Strong community support

Simple .NET Flow:

Frontend
   ↓
ASP.NET Core
   ↓
Business Logic
   ↓
Database

.NET acts as the foundation that connects everything together.
    `,
    },

    {
        id: 2,
        title: 'What is C#?',
        slug: 'what-is-csharp',
        category: 'C# Basics',
        content: `
C# (pronounced C Sharp) is a modern programming language developed by Microsoft.

It is the primary language used in the .NET ecosystem.

C# is used for:

• Backend development
• Web applications
• APIs
• Desktop software
• Mobile applications
• Game development with Unity

With C#, developers can write logic, create classes and objects, handle data, and build complete software systems.

Example:

A simple C# program:

Console.WriteLine("Hello World");

Output:

Hello World

Example of variables:

string name = "Argho";
int age = 22;

Console.WriteLine(name);
Console.WriteLine(age);

Example of condition:

if (age >= 18)
{
    Console.WriteLine("Adult");
}

Important concepts in C#:

• Variables
• Functions
• Loops
• Classes
• Objects
• OOP
• LINQ
• Async/Await

Why C# is powerful:

• Easy to read
• Strongly typed
• Object-oriented
• Secure
• High performance
• Great for large applications

C# is often considered one of the best languages for learning professional software development.
    `,
    },

    {
        id: 3,
        title: '.NET Code Journey',
        slug: 'dotnet-code-journey',
        category: '.NET Basics',
        content: `
When a developer writes C# code, the computer does not understand it directly.

The code goes through several important stages before producing output.

Example C# code:

Console.WriteLine("Hello");

Step 1 — Source Code

The developer writes human-readable C# code.

↓

Step 2 — Compiler

The C# compiler reads the code and converts it into Intermediate Language (IL).

↓

Step 3 — IL Code

IL (Intermediate Language) is a middle-level language that .NET understands.

↓

Step 4 — CLR (Common Language Runtime)

CLR is the heart of .NET.

It is responsible for:
• Running code
• Memory management
• Garbage collection
• Exception handling
• Security

↓

Step 5 — Machine Code

CLR converts IL into machine code that the CPU can execute.

↓

Step 6 — Output

Finally, the computer runs the instructions and shows the result.

Complete Journey:

C# Code
   ↓
Compiler
   ↓
IL Code
   ↓
CLR
   ↓
Machine Code
   ↓
Output

Real Example:

You write:

Console.WriteLine("Hello");

The compiler translates it.

CLR executes it.

CPU processes it.

The screen displays:

Hello

This entire process happens extremely fast behind the scenes.
    `,
    },


    {
        id: 4,
        title: 'Making CodeWithDotNet Documentation',
        slug: 'making-codewithdotnet-documentation',
        category: 'Project Journey',
        content: `
Today I started building CodeWithDotNet as a documentation-style learning website.

The main idea of this project is simple:

I will learn .NET step by step and document everything publicly.

This project is not only a website.
It is also my learning journey, portfolio, and practice project.

What I built today:

• Created a Vue project
• Installed Tailwind CSS
• Set up Git and GitHub
• Deployed the project with Vercel
• Created a sidebar layout
• Created a reusable Sidebar component
• Set up Vue Router
• Created dynamic lesson pages
• Stored lesson data inside lessons.js

Project structure:

src/
├── components/
│   └── Sidebar.vue
├── data/
│   └── lessons.js
├── pages/
│   └── LessonPage.vue
├── router/
│   └── index.js
├── assets/
│   └── main.css
├── App.vue
└── main.js

Important concepts I learned:

1. Component

A component is a small reusable part of the UI.

Example:

Sidebar.vue is a component.

2. Router

Vue Router helps create multiple pages without reloading the full website.

Example:

/lessons/what-is-dotnet

3. Dynamic Lesson

Instead of creating every lesson manually, I store lesson data in one file.

Then the sidebar and lesson page use that data automatically.

4. Data-driven UI

The UI is generated from data.

Example:

When I add a new lesson inside lessons.js, it automatically appears in the sidebar.

Why this project is important:

• I will learn by building
• I will document my progress
• I will push updates to GitHub
• I will make the project public
• I will slowly turn it into a real documentation website

Final goal:

CodeWithDotNet will become a public learning platform where I document .NET, C#, ASP.NET Core, Web API, frontend development, and real projects.
  `,
    }
]