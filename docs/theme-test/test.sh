	#!/bin/bash

	i=0
	while [ $i -lt 2000000 ] 
	do
	  echo offset=$i
	  i=$(($i+1000))
	done
