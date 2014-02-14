var express = require('express');
var path = require('path');
var routes = require("./routes");
var app = express();

	// Configurations
	app.configure(function(){
	  app.locals.pretty = true;
	  app.set('port', process.env.PORT || 3000);
	  app.set('views', __dirname + '/views');
	  app.use(express.static(path.join(__dirname, '/public')));
	  app.set('view engine', 'jade');
	  app.use(express.favicon());
	  app.use(express.logger('dev'));
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(express.cookieParser('secret'));
	  app.use(express.session());
	  app.use(function(req, res, next) {
	    res.locals.session = req.session;
	    next();
	  });

	});

	//develop
	app.configure('development', function(){
	  app.use(express.errorHandler());
	});

	//router

	app.get('/',routes.index);
	app.get('/upload',routes.upload);

	app.listen(18080);
