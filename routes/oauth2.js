var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/oauth2', function(req, res, next) {
  res.render('oauth2', { 
  	title: 'oAuth2' 
  });
});

module.exports = router;
