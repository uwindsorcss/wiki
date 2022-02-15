# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation Steps for Ubuntu

* Go into Wiki directory after cloning the Repo `cd Wiki/`
* Locate `setup.sh` script in repo
* Run `sudo ./setup.sh` or you can install manually one after another.

Make sure to run script with `sudo` privileges.

```bash
#!/bin/bash
#
# Script Name: setup.sh
# Purpose: This script will install the dependencies required
# 					to run the CSS Wiki Application

# Install the updates
sudo apt-get update

# Install the npm packages
sudo apt install npm -y

# Install the yarn packages
sudo npm install --global yarn -y

# Install Git (In case, Not installed)
sudo apt-get install git
```



## Local Development

We have required packages to run our application. Now we will boot up the application with follwoing command:

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

Open web browser the enter the address `http://localhost:3000/wiki/`



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



## Purge Installed Packages

This script will purge/delete or the packages we installed for CSS Wiki.

* Locate `purgeCommands.sh` in the repo.
	* Run with sudo privileges `sudo ./purgeCommands.sh`

```bash
#!/bin/bash

# This script will purge all the dependencies which were
# required to run the CSS Wiki Application


# Purge npm packages
sudo apt-get purge npm -y

# Purge yarn packages
sudo apt-get purge cmdtest yarn -y
```

