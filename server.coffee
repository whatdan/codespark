express = require "express";
path = require "path";
routes = require "./routes";
auth = require './lib/auth.js'
app = express();

#configures

app.configure -> 
	app.locals.pretty = true;
	app.set "port",process.env.PORT || 18080;
	app.set 'views',__dirname+'/views'
	app.use express.static(path.join __dirname,'/public');
	app.set 'view engine','jade';
	app.use express.favicon();
	app.use express.logger('dev');
	app.use express.bodyParser({uploadDir:'./uploads/'});
	app.use express.methodOverride();
	app.use express.cookieParser('secret');
	app.use express.cookieSession();
	app.use (req,res,next) ->
		res.locals.session = req.session;
		next();
		return;
	return;

app.configure 'development',-> 
	app.use express.errorHandler();
	return;

app.get '/',routes.index;
app.get '/upload',auth.authorize,routes.upload;
app.post '/file_upload',auth.authorize,routes.file_upload;
app.get '/code/:username/:code',routes.code;
app.get '/login',routes.login;
app.get '/logout',routes.logout;
app.get '/register',routes.register;
app.post '/doregister',routes.doregister;
app.post '/dologin',routes.dologin;
app.get '/i',routes.i;
app.get '/write',routes.write;
app.get '/place',routes.place;





app.listen 18080;
