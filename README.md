# oAuth2
oAuth2 work for cs 496 

# Prepare

## This project requires node.js>=6.x
Follow the instructions here to make sure you have the proper install for your os.

https://nodejs.org/en/download/package-manager/

	$ npm install

	$ eb init 

		set required aws-key
		set required aws-secrete

		reqion is us-west 1 

		app is oauth2-dev


## update hosts file 

This will allow you to test much like you would in the browser. 

Update the required hosts file, for ubuntu and mac this is /etc/hosts and add the following lines (where 10.0.0.111 is your local ip address which can be found through ifconfig). 

	$ 10.0.0.111 	dev.alietatrain.com
