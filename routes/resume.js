var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Express' });
});

module.exports = router;
