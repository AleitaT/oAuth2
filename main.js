var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var Session = require('express-session');
var bodyParser = require('body-parser');
let config = require('./public/javascripts/config.js');
let client_id = config.GOOGLE_CLIENT_ID;
let client_secret = config.GOOGLE_CLIENT_SECRET;
let redirectURL = '/oauth2callback'
let session = require('express-session');

let index = require('./routes/index');
let users = require('./routes/users');

var app = express();

app.use(Session({
    secret: 'trulysecret',
    resave: true,
    saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(session({
  secret: 'totalsecret',
  resave: false, 
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
