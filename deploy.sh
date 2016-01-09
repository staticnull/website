#!/bin/bash

ssh -t midwestjs bash -c "'
sudo systemctl stop nginx
pm2 stop app
cd /home/centos/website
git pull
npm install
pm2 start app
sudo systemctl start nginx
'"

echo "Midwest JS Deploy Finished"
