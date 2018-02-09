'use strict';


var config = require('./config.js');


exports.prepareOauth = function() {
	let params = {
		client_id: config.GOOGLE_CLIENT_ID,
	 	client_secret: config.GOOGLE_CLIENT_SECRET,
	 	redirect_uri: "https://test.alietatrain.com/oauth2callback",
	 	scope: 'email', 
	 	access_type: 'online',
	 	state: 'bongojimmy',
	 	prompt: 'consent',
	 	callback: 'https://test.alietatrain.com/oauth2callback'
	}
	let requestURI = 
		'https://accounts.google.com/o/oauth2/v2/auth?' +
		 'scope=' + params.scope +
		 '&access_type=' + params.access_type +
		 '&state=' + params.state +
		 '&redirect_uri=' + params.callback  +
		 '&response_type=code&' +
		 '&client_id=' + params.client_id;
	
	console.log(requestURI);
	return requestURI;
};


exports.getClientDetails = function() {
	return new client(config.GOOGLE_CLIENT_ID, config.GOOGLE_CLIENT_SECRET, config.REDIRECT_URI);
}