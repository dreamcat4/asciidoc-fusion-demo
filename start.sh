#!/bin/bash

_pwd=$pwd
cd $(realpath $(dirname $0))

# gulp watch &
# hugo serve -p 1919 --baseURL localhost --cleanDestinationDir --navigateToChanged &

#cd $_pwd

while true; do
	gulp watch
done &


while true; do
	hugo serve -p 1819 --baseURL localhost --cleanDestinationDir --navigateToChanged
done

# Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
# --disableFastRender

