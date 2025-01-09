# UWindsor CS Wiki

This repository contains the source code for the University of Windsor Computer Science Wiki, a collection of resources, guides, and information designed for students in the University of Windsor's Computer Science programs.

## Requirements

- **Node.js** (>=14)
- **PNPM** ([Installation Guide](https://pnpm.io/installation))
- **Git** ([Installation Guide](https://git-scm.com/downloads))

## Installation

### Windows

1. [Download Node.js](https://nodejs.org/en/download/)
2. Install PNPM:
    ```bash
    npm install --global pnpm
    ```
3. [Install Git](https://git-scm.com/download/win)

### macOS

1. [Download Node.js](https://nodejs.org/en/download/) or use:
    ```bash
    brew install node
    # OR
    sudo port install nodejs17
    ```
2. Install PNPM:
    ```bash
    npm install --global pnpm
    ```
3. Install Git via Xcode Command Line Tools:
    ```bash
    git --version
    ```

### Linux (Debian/Ubuntu)

```bash
sudo apt update && sudo apt install git npm -y
npm install --global pnpm
```

## Local Development

1. Clone the repository:
    ```bash
    git clone git@github.com:UWindsorCSS/Wiki.git
    ```
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Start the server:
    ```bash
    pnpm start
    ```
    Open: `http://localhost:3000/wiki/`

## Build

Generate static content:

```bash
pnpm build
```

## Serve

Serve static content after building:

```bash
pnpm serve
```

## Article Requirements

Refer to the [Article Requirements](REQUIREMENTS.md) for more information on how to write articles.

## Contributors

Thank you to all the contributors who made this wiki possible!

<a href="https://github.com/uwindsorcss/wiki/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=uwindsorcss/wiki" />
</a>
