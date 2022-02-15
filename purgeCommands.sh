#!/bin/bash

# This script will purge all the dependencies which were
# required to run the CSS Wiki Application


# Purge npm packages
sudo apt-get purge npm -y

# Purge yarn packages
sudo apt-get purge cmdtest yarn -y

