var express = require('express');
var router = express.Router();
var google = require('googleapis');
var oauth = require('./../public/javascripts/oauth.js');
var config = require('./../public/javascripts/config.js');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Access the session as req.session
router.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

router.get('/oauth2', function(req, res, next) {
  res.render('oauth2', { 
  	title: 'oAuth2' 
  });
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/auth/google', function(req, res, next) {
	var url = oauth.prepareOauth();
	res.redirect(url);
});

router.use('/oauth2callback', function(req, res, next) {
	var client = {
		code: req.query.code,
		state: req.query.state,
		client_id: config.GOOGLE_CLIENT_ID,
		client_secret: config.GOOGLE_CLIENT_SECRET,
		redirect_uri: 'http://dev.alietatrain.com:3000/oauth2callback',
		grant_type:'authorization_code'
	};
	console.log("client", client);
	request.post('https://www.googleapis.com/oauth2/v4/token', { 
		form: { 
			'code': client.code,
			'client_id': client.client_id,
			'client_secret': client.client_secret,
			'redirect_uri': client.redirect_uri,
			'grant_type': 'authorization_code'
		}
	}, function(error, response, body) {
			if(!error && response.statusCode == 200) {
				console.log('success!');
				res.render('oauth2callback');
			} else { 
				console.log("no no", response); 
			}
			console.log(body);
	});
});
	

module.exports = router;
