#!/bin/sh

PUBLIC_IP=`wget http://checkip.dyndns.org/ -O - -o /dev/null | cut -d: -f 2 | cut -d\< -f 1 | cut -d' ' -f 2`
cat config/config.js | sed s/yourip/$PUBLIC_IP/g > config/config_public.js
cp config/config.js config/config_ori.js
mv config/config_public.js config/config.js

