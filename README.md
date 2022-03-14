# Get Started

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.



## Dependencies

* **Nodejs** version >= 14 or above

* **Yarn** version >= 1.5

* **NPM** [Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

* **git**


# How to Install

## Install Dependencies for Windows users

Download the [Nodejs installer](https://nodejs.org/en/download/) from their Official website.

### Install Yarn

```
npm install --global yarn
```

### Install Git

Download [Git Installer](https://git-scm.com/download/win) from their Official website.

## Install Dependencies for Mac Users

Download [Nodejs installer](https://nodejs.org/en/download/) from their Official website.

Alternatively:

### Using Homebew

```
brew install node
```

### Using MacPorts

```
sudo port install nodejs17
```

### Install Yarn

```
npm install --global yarn
```

### Install Git

There are several ways to install Git on a Mac. The easiest is probably to install the Xcode Command Line Tools. 

Verify git

```
git --version
```


## Install Dependencies for Debian / Ubuntu

```bash
sudo apt update
sudo apt install git npm -y
npm install --global yarn -y
```

### Install Git

```
sudo apt install git-all
```

## Local Development

1. Clone the repo

```bash
git clone git@github.com:UWindsorCSS/Wiki.git
```

2. Install all dependencies 

```console
yarn install
```

3. Start the Server

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

Open web browser the enter the address `http://localhost:3000/wiki/`

**Alternatively, Use following command to access application from other machine in your network:**

`yarn start --host 0.0.0.0`

Open web browser the enter the address `http://ip-address-of-other-machine:3000/wiki/`

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Formatting

We use [prettier](https://prettier.io). Prettier automatically formats markdown and javascript so it is extremely useful to use.

This **MUST** be run before making a pull request

### Automatically Running

If you use VSCode, I highly recommend the prettier plugin.

If you don't use VSCode, we are assuming that you can figure out your editors plugin for prettier.

### Manually Running

To manually run prettier, please run

```console
yarn prettier --write .
```

## Article Requirements

Please read about it at `REQUIREMENTS.md`
