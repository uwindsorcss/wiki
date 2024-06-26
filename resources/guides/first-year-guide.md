---
id: first-year-guide
title: First Year Guide
sidebar_label: First Year Guide
slug: /guides/first-year
---

_last updated on 2022/09/06_

This guide is intended to help incoming first year students prepare for a computer science degree at the University of Windsor. It addresses some general information about being a student at the University of Windsor and provides resources specifically to help students succeed in computer science courses.

## Getting Started at the University of Windsor

### UWin Accounts

Every student must have a **UWin Account** in order to access the university's online services. Instructions to set up your UWin account will be sent to your personal email after you've been accepted into a program at the university. You will be assigned a **UWin ID** and will create a password during this process; these will be used as your login information. Your **UWindsor email** will be yourUWinI@uwindsor.ca.

### Online Services

Some of the online services you can access using your UWin Account include:

#### [UWinsite Student](https://student.uwindsor.ca)

For browsing and enrolling in classes, viewing tuition and fees, accessing acedamic information, applying for scholarships, and more. See the [UWinsite Guide](/wiki/resources/guides/uwinsite-guide) for more details and help.

#### [Brightspace](https://brightspace.uwindsor.ca)

The university's Learning Management System (LMS). It is used to view course material, submit coursework, review grades, and more.

#### [Microsoft Office 365](https://portal.office.com/)

All University of Windsor students have access to a full suite of Microsoft Office 365 tools and software, including **Outlook** for email services and **OneDrive** for 1 TB of free cloud storage. A Microsoft Account is automatically created using your **UWindsor Email** and **UWin Account Password**. See [this FAQ](https://uwindsor.teamdynamix.com/TDClient/1975/Portal/KB/ArticleDet?ID=9552) for more details.

## Enrolling in Courses

### Which Courses to Take

:::important

These wiki resources are maintained by student contributors. Always verify important academic information with a primary university resource or an academic advisor.

:::

There are several computer science programs offered by the University of Windsor, each with their own course requirements which can be found in [the undergraduate calendar](https://www.uwindsor.ca/secretariat/282/undergraduate-and-graduate-calendars). If you follow the [recommended course sequence](/wiki/courses/course-planning/recommended-sequence), many programs will share the same courses for the first term. They are [COMP-1000](/wiki/courses/comp-1000/overview), [COMP-1400](/wiki/courses/comp-1400/overview), MATH-1250 (or MATH-1260), MATH-1720 (or MATH-1760), and an elective. See the [Courses](/wiki/courses) section for a user-friendly table of course requirements by program.

### How to Enroll

Incoming first year students typically have the earliest **appointment time** and may enroll in courses before all other students. Your appointment time can be found on [UWinsite](https://student.uwindsor.ca) under **My Academics -> Enrollment Deadlines**. It is recommended to enroll as early as possible, as courses have a limited capacity and desireable timeslots fill up quickly. See the [UWinsite Guide](/wiki/resources/guides/uwinsite-guide#how-to-plan--enroll-in-classes) for more details on how to enroll in classes.

## Recommended Software for Computer Science

As a computer science student, you will learn to program in a variety of programming languages, starting with the **C Programming Language** in COMP-1400. Installing and familiarizing yourself with the necessary software on your personal computer _before_ the first day of classes will save you time and stress, **especially if you are new to programming**. All of the following software can be downloaded for free.

### Code Editor: Visual Studio Code

#### Description

A code editor helps a programmer write code (like Microsoft Word but for programming). Code can be written in any text editor, but a good code editor will provide features like syntax highlighting, basic error checking, and autocompletion for several programming languages. Note that a code editor is _not_ an IDE (integrated development environment). For example, Visual Studio is an IDE while Visual Studio _Code_ is a code editor and a seperate piece of software. An IDE will typically provide built-in tools to run, debug, and examine your code for a specific language, while a code editor will not (or will require you to install additional tools to do so).

Visual Studio Code (VS Code or VSC) is recommended in this guide. It provides built-in support for several programming languages, including C, and hundreds more are supported through downloadable **extensions**. It is recommended over an IDE for two reasons: (1) its portability to other programming languages and (2) it forces students to learn how to transform code into an executable program using the command line.

#### Installing

Windows, Mac, and Linux downloads are available on the [official website](https://code.visualstudio.com/download). Instructions for each operating system can be found with a quick web search if needed.

#### Resources

-   [First Year Bootcamp - Setting up VSCode Workshop](https://www.youtube.com/watch?v=XPrwuvzFREU): a workshop hosted by CSS to get VS Code up and running on Windows. Note that this workshop also provides a way to install a C compiler using MinGW, which is an alternative way to the one recommended in this guide, using WSL. **MinGW is not needed for VS Code itself, and can be skipped in favour of WSL (see the next section).**

### Windows Subsystem for Linux (_Windows Only_)

#### Description

Linux is the preferred operating system for many programmers. It is also the operating system found on the School of Computer Science's servers and computers, which you will need to use for class work and verifying code compatibility (code written on one system may behave differently on another system). For these reasons, it is recommended that students familiarize themselves with the Linux environment.

Recent versions of Windows have made it easy to work in a Linux environment within Windows, rather than having to run it in a virtual machine or as a secondary operating system. This is done using **Windows Subsystem for Linux (WSL)**.

#### Installing

The [official WSL guide](https://docs.microsoft.com/en-us/windows/wsl/install) provides more details about WSL, its features, and how to install it. However, enabling and installing WSL on the most recent versions of Windows (Windows 10 version 2004 or higher, or Windows 11) is now as easy as typing the following command in an administrator **command prompt** or **Windows PowerShell** window, which can be found be searching in the start menu for either and right clicking the icon to select **Run as administrator**.

```
wsl --install
```

:::note
By default, this command installs Ubuntu as the Linux distribution, which is popular among those new to Linux. If you are interested in other distributions, see [the guide](https://docs.microsoft.com/en-us/windows/wsl/install#change-the-default-linux-distribution-installed).
:::

On older version of Windows 10, you can [install WSL manually](https://docs.microsoft.com/en-us/windows/wsl/install-manual).

Once WSL is installed, you can start it in a command prompt or PowerShell window by entering `wsl`.

#### Getting Started

The first thing to do on a fresh install is to update any out of date software. A **Package Manager** makes this easy on Linux: it's like the app store on your phone, but for all of the software on your computer. On Ubuntu, the default package manager is **apt**. You can update everything at once using the following commands.

```
sudo apt-get update && sudo apt-get upgrade
```

### Shell: Bash, Zsh, or many others

#### Description

A shell is used to interact with your system and run programs using text commands. It is often favoured over or used alongside a graphical user interface (GUI) environment by programmers.

Windows running WSL, Mac, and Linux each can use a different default shell, but all **Unix shells** will share the same basic commands.

#### Installing

On Windows, see the WSL section. A shell will be installed with your distribution of Linux. On Mac, use the "Terminal" app.

#### Getting Started

Typically, a shell will display some information before your cursor, though the format can differ. In this example, everything up to and including the dollar sign is information provided to you by the shell about you and your system.

```sh
[username@computer-name folder-name/or/path]$ echo "Chip says hello"
```

The following are some basic commands:

-   `ls` will list the contents of the current folder.
-   `cd folderName` will move you to the folder named "folderName".
    -   `cd ~` will take you to your Home folder.
    -   `cd ..` will take you back out of the folder you are currently in.
-   `echo "Chip the Cool Cat"` will display "Chip the Cool Cat" in your terminal.
-   `cat fileName` will display the contents of a the file named "fileName".

Some tips:

-   You can scroll through your command history using the up and down arrows.
-   **ctrl+c** can be used to kill a process that is running in your shell.

### C Compiler: GCC

#### Description

When you write C code, you need a way to make it **executable** on your system. This is where a compiler comes in: it reads in the more human-friendly C code and outputs a program that your computer can read and run.

GCC is the compiler you should use when developing C code for your classes, unless your professor specifies otherwise. When you compile code using a different compiler, or on a different system, your program may behave differently than it will on the school's system using GCC. For this reason, it is also sometimes recommended that you double check your programs on the School of Computer Science's systems before submitting more complicated assignments.

#### Installing

On Windows running WSL with Ubuntu (the default), enter the following into your shell:

```
sudo apt-get install gcc
```

On Mac, [this video](https://youtu.be/0z-fCNNqfEg) provides one way of installing GCC, as well as the Homebrew package manager.

#### Getting Started

This section will help you create a sample C program, compile it, and run it.
Copy and paste the following code into a new file on your system. Call it "hello.c" and remember where you save it.

```c
#include <stdio.h>

int main(void) {
    printf("Chip says hello!");
}
```

Find the file in your shell. For example, if you put the file on your Desktop, use the following command to go to there.

```sh
cd ~/Desktop
```

Compile the program into a **binary** (runnable file, executable, etc.).

-   `-Wall` tells the compiler to output all warnings.
-   `-o hello.out` tells the compiler to save the created binary with the name "hello.out".

```sh
gcc -Wall hello.c -o hello.out
```

Run the binary you just created.

```sh
./hello.out
```

The output should be

```
Chip says hello!
```

### Remote Connection: SSH and NoMachine

#### Description

As a computer science student, you have access to the School of Computer Science's servers, which provide software in a Linux environment that you are free to use. On campus, they can be accessed using School of Computer Science computer labs. Remotely, they can be accessed in several ways.

-   SSH (recommended): Remotely use a shell on the server.
-   NoMachine: Remote desktop environment.

:::important
- You must [authenticate your UWin account](https://auth.cs.uwindsor.ca/) with the School of Computer Science before you can log in remotely.
- To log in remotely from off-campus, you must be on the VPN first. Please refer to our guide on how to set up the VPN [here](https://uwindsorcss.github.io/wiki/resources/guides/vpn).
:::

#### SSH

In a shell, use the following to connect to the school's servers. Replace "UWinID" with your UWinID.

```
ssh UWinID@cs.uwindsor.ca
```

For example, if chipcoolcat@uwindsor.ca wanted to connect, they would use the following command.

```
ssh chipcoolcat@cs.uwindsor.ca
```

Use your UWin Account password as the password for logging in once prompted.
