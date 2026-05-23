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
]