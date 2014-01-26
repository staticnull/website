var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

global.APP_ROOT = {
  join: function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(__dirname);
    return args.join('/');
  },
  toString: function(){
    return __dirname;
  }
};

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico'))); 
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// setup routing
require(path.join(__dirname, 'config/routes'))(app);

// setup mongodb connection
require(path.join(__dirname, 'models/mongo-connection'));

// start server listening
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
