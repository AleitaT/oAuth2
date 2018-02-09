var express = require('express');
var router = express.Router();
var oauth = require('./../public/javascripts/oauth.js');
var config = require('./../public/javascripts/config.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
	console.log('hello');
	var url = oauth.prepareOauth();
	res.redirect(url);
})

router.get('/oauth2callback', function(req, res, next) {
	res.render('login', {title: 'login'});
	console.log(req);
})

router.use('/oauth2callback', function(req, res) {
	var client = oauth.getClientDetails();
	var session = req.session;
	var code = req.query.code;
	client.getToken(code, function(err, tokens) {
		if(!err) {
			client.setCredentials(tokens);
			session['tokens']=tokens;
			res.send('login success');
		}
		else {
			res.send("login failed");
		}
	});

})

module.exports = router;
