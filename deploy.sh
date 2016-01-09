#!/bin/bash

ssh -t midwestjs bash -c "'
cd /home/centos/website
git pull
npm install
'"

echo "Midwest JS Deploy Finished"
