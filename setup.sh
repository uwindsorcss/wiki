#!/bin/bash

# This script will install the dependencies required
# to run the CSS Wiki Application

# Install the updates
sudo apt-get update

# Install the npm packages
sudo apt install npm -y

# Install the yarn packages
sudo npm install --global yarn -y

# Install Git (In case, Not installed)
sudo apt-get install git
