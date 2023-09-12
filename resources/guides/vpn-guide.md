---
id: vpn-guide
title: VPN Setup Guide
sidebar_label: VPN Setup Guide
slug: /guides/vpn
---

Many protocols or ports are blocked by the university firewall. This is why you may not be able to connect with NoMachine or SSH. If you’re connecting from home and anywhere outside or inside the campus, you have to connect via a VPN server to access resources and data on the campus private network. This is a guide on how to setup the VPN.

## Download

First download the VPN client for your respective machine.

### [Download for Windows and macOS](https://networklogin.uwindsor.ca/)

-   Authenticate with your UWinID and password on the university's GlobalProtect Portal to get to the GlobalProtect Client download links. After that, click the link that matches your operating system.

### [Download for Android and Chrome OS](https://networklogin.uwindsor.ca/)

-   Follow the steps in the app when prompted. Also [check which Chrome OS Systems support Android Apps](https://sites.google.com/a/chromium.org/dev/chromium-os/chrome-os-systems-supporting-android-apps) if needed.

### [Download for iOS devices](https://apps.apple.com/ca/app/globalprotect/id1400555706)

-   Follow the steps in the app when prompted.

### [Download for Linux](http://www.infradead.org/openconnect/)

-   Install openconnect using the package manager for your Linux distribution.

## After Downloading

After downloading and opening global protect it will ask you for the portal address. **securelogin.uwindsor.ca** is for the CS servers and **networklogin.uwindsor.ca** is for everything else. You will then be asked to sign in with your UWinID (first part of your UWindsor email) and password.
:::warning

To connect with SSH or NoMachine you must use securelogin.uwindsor.ca as the portal address for the VPN, not networklogin.uwindsor.ca

:::
