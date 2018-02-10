'use strict';


var config = require('./config.js');


exports.prepareOauth = function() {
	let params = {
		client_id: config.GOOGLE_CLIENT_ID,
	 	client_secret: config.GOOGLE_CLIENT_SECRET,
	 	scope: 'email', 
	 	access_type: 'offline',
	 	state: 'bongojimmy',
	 	prompt: 'consent',
	 	callback: 'http://dev.alietatrain.com:3000/oauth2callback'
	}
	let requestURI = 
		'https://accounts.google.com/o/oauth2/v2/auth?' +
		 'scope=' + params.scope +
		 '&access_type=' + params.access_type +
		 '&state=' + params.state +
		 '&redirect_uri=' + params.callback  +
		 '&response_type=code' +
		 '&client_id=' + params.client_id;
	
	console.log(requestURI);
	return requestURI;
};
