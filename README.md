[![Build Status](https://travis-ci.org/StephenKinger/webui_pivpn.svg?branch=master)](https://travis-ci.org/StephenKinger/webui_pivpn)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
# web ui for openvpn server management through pivpn tool

## Configure


### IP Address
In order to have a setup running on your computer, you need to install pivpn
tools, see https://github.com/pivpn/pivpn.

The file src/config.jsx has to be modified to precise the IP address of the
server.

You can also modify the port in this file but in this case you have also to
modify the port defined in api/server.js.
### Login and Password
The login / password couple is defined in the file api/config.js

## Environment preparation
Install nodejs and npm version 7.0.0 or later (not tested with previous
  versions).
launch npm install at the root directory of sources.
The user running the server needs to be a sudoer user.
You also need to add read rights on /etc/openvpn/easy-rsa/keys/index.txt.
It can be done with the commands
 sudo chmod 755 /etc/openvpn/easy-rsa/keys
 sudo chmod +r /etc/openvpn/easy-rsa/keys/index.txt
 
##SASS fix on raspberry pi
In case of deployment on a raspi, there is some troubles with sass.
You will need to rebuild node-sass to server front end 
with the following command :
* npm rebuild node-sass

## dev
For the development, launch :
* webpack-dev-server for the front-end,
* npm run api for the back-end.

## prod
For the prod, launch :
* npm run prod
It will build the bundle and serve it at root tree of the server.
