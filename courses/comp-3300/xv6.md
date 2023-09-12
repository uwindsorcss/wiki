---
id: xv6
title: COMP 3300 - xv6
sidebar_label: xv6
slug: /comp-3300/xv6
---

_Last updated on 2023/01/05_

## Introduction

xv6 is used by some professors to teach this course, but not all. xv6 is a small Unix-like operating system developed by MIT. Its size and relative simplicity make it more suitable for use in the classroom when learning about operating systems, compared to a full modern OS.

As of Winter 2023, COMP-3300 is using the older [x86 version of xv6](https://github.com/mit-pdos/xv6-public), as opposed to the newer [RISC-V version](https://github.com/mit-pdos/xv6-riscv). Since the x86 version is no longer actively maintained, this may result in compatibility issues when trying to run xv6 locally, as opposed to using the School of Computer Science servers which can be slow.

## Resources

-   MIT's xv6 documentation and resources can be found on [their website](https://pdos.csail.mit.edu/6.828/2018/xv6.html) (this link leads to the 2018 version, which is being used for COMP-3300 as of Winter 2023 -- check to make sure this is correct for you!).
    -   The xv6 (x86 version) repository on GitHub can be found at https://github.com/mit-pdos/xv6-public.
    -   The corresponding xv6 book can be found at https://github.com/mit-pdos/xv6-book.
-   _Operating Systems: Three Easy Pieces_ is a free textbook for OS fundamentals. It can be found at https://pages.cs.wisc.edu/~remzi/OSTEP/.
-   [This video](https://youtu.be/yHD_FNIXiJo) from a student introduces xv6 and shows how to install it.
-   [This blog post](https://blog.bornais.ca/2022/12/27/working-with-xv6.html) from a student also provides some information on the basics of installing and using xv6.
-   [This Docker image](https://github.com/benchittle/xv6-docker) can be used to run xv6 locally in Docker.
