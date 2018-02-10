'use strict';


var config = require('./config.js');


exports.prepareOauth = function() {
	let params = {
		client_id: config.GOOGLE_CLIENT_ID,
	 	client_secret: config.GOOGLE_CLIENT_SECRET,
	 	scope: 'email', 
	 	access_type: 'offline',
	 	prompt: 'consent',
	 	callback: config.REDIRECT_URI
	}
	let state = Math.random().toString(36).substring(7);
	let requestURI = 
		'https://accounts.google.com/o/oauth2/v2/auth?' +
		 'scope=' + params.scope +
		 '&access_type=' + params.access_type +
		 '&state=' + state +
		 '&redirect_uri=' + params.callback  +
		 '&response_type=code' +
		 '&client_id=' + params.client_id;
	
	console.log(requestURI);
	return requestURI;
};
