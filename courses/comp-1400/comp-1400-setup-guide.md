---
id: comp-1400-setup-guide
title: COMP-1400 Development Environment Setup Guide
sidebar_label: COMP-1400 Setup Guide
slug: /comp-1400/setup-guide
---

Setting up a development environment on Windows for coding in C can seem daunting for a new CS student. However, with the right tools and a step-by-step guide, the process can be straightforward. In this tutorial, we will walk through the process of setting up a development environment on Windows for coding in C.

To learn more about the tools being used and for other helpful information for first year students, check out the [First Year Guide](../../resources/guides/first-year).

## Step 1: Install WSL

WSL (Windows Subsystem for Linux) is a compatibility layer that allows running Linux binaries natively on Windows. It provides an easy way to get a full Linux environment running on Windows, including a terminal and package manager.

To install WSL, follow the steps on the official [Microsoft docs](https://learn.microsoft.com/en-us/windows/wsl/install). Essentially, though, you should only need to run one command in an **admin Powershell window**:

```sh
wsl --install
```

This command should install WSL and Ubuntu. You'll most likely need to reboot your PC, then when Ubuntu is run for the first time, you'll get to create a username and password for Ubuntu. Then, WSL will be installed! Make sure to consult the official [Microsoft documentation](https://learn.microsoft.com/en-us/windows/wsl/install) when installing WSL as sometimes things change.

## Step 2: Install GCC

GCC (GNU Compiler Collection) is a collection of programming language compilers, including C. It is an essential tool for compiling and running C programs.

To install GCC on Ubuntu, follow these steps:

1. Open a terminal window in Ubuntu by typing "ubuntu" in the Start menu search bar and selecting "Ubuntu" from the list of results.
1. Run the following command to update the package list: `sudo apt-get update`
1. Run the following command to install GCC: `sudo apt-get install gcc build-essential`

**NOTE**: If you want additional recommended tools, run the following command as well:

```sh
sudo apt-get install git htop curl wget screen neofetch python3 python3-pip
```

## Step 3: Install VSCode

Visual Studio Code (VSCode) is a popular code editor with many features, including syntax highlighting, debugging, and extensions. It is a powerful tool for writing and editing C programs.

To install VSCode on Windows, follow these steps:

1. Go to the VSCode website at https://code.visualstudio.com/.
1. Click on the "Download for Windows" button to download the installer.
1. Run the installer and follow the on-screen instructions to complete the installation process.

## Step 4: Configure VSCode

Once you have installed VSCode, you need to configure it to work with WSL and GCC. Follow these steps to set up the necessary configurations:

1. Open VSCode on Windows.
1. Install the "Remote Development" extension pack by clicking on the "Extensions" icon in the left-hand toolbar and searching for "Remote Development"

## Step 5: Opening VSCode Within WSL

Now that VSCode is installed and configured, let's create a folder to store all of our C files and open it in VSCode in WSL. **You can create a folder anywhere you like. However, for the purposes of this tutorial, I'm going to assume the folder is `C:\code\`**

1. Launch the WSL terminal: Open the WSL terminal by searching for "WSL" or the specific Linux distribution you have installed (in your case, probably **Ubuntu**) in the Windows Start menu. This will open a Linux shell within the Windows environment.
1. Navigate to the desired folder: Use the cd command to navigate to the folder on your C drive that you want to open in VSCode. For example, if your folder is located at `C:\code`, you can use the following command to navigate to it: `cd /mnt/c/code`
1. Create an empty C file: Use the `touch` command to create a "hello.c" file: `touch hello.c`
1. Launch VSCode from the WSL terminal: In the WSL terminal, you can launch VSCode and specify the current directory to open. Use the `code .` command to open the current directory in VSCode. The dot (.) represents the current directory.
1. Now, VSCode should be open and you can see `hello.c` on the left. You can now click on the file to edit it. (You can find a sample "hello world" program at the bottom of this article)

## Step 6: Compiling and Running your C Files

Editing files is fun and all, but our real objective is to compile and run them. Luckily, this is a simple process and only requires 3 commands.

1. First, you'll need to open up a terminal within VSCode. This can be done by clicking `Terminal` under the `View` menu of VSCode.
1. You should now see a terminal open at the bottom of your screen. At this point, you can compile the C file by typing the command `gcc hello.c -o hello.exe`
1. You should see a `hello.exe` file appear on the left side of VSCode. You can run it by typing `./hello.exe` in the terminal. You should see the text "Hello World!" printed in the terminal.

Congratulations! You have now set up a development environment on Windows for coding in C. You can use this environment to write, compile, and run C programs.

## Appendix

### Sample C Program

Here is a sample "hello world" C program you can use to test your new dev environment:

```c
#include <stdio.h>

int main(){
    printf("Hello World!\n");
}
```
