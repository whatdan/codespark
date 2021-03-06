express = require "express";
path = require "path";
routes = require "./routes";
auth = require './lib/auth'
app = express();

#configures

app.configure -> 
	app.set "port",process.env.PORT || 18080;
	app.use express.static(path.join __dirname,'/app');
	app.use express.favicon();
	app.use express.logger('dev');
	app.use express.bodyParser({});
	app.use express.methodOverride();
	app.use express.cookieParser('secret');
	app.use express.cookieSession();
	app.set('views', __dirname + '/app/views');
	# app.engine('html', require('jade').renderFile);
	app.use (req,res,next) ->
		res.locals.session = req.session;
		next();

app.configure 'development',-> 
	app.use express.errorHandler();

app.get '/',routes.index;
app.get '/upload',auth.authorize,routes.upload;
app.post '/file_upload',auth.authorize,routes.file_upload;
app.get '/code/:username/:code',routes.code;
app.get '/pull/code/:username/:code',routes.returncode;
app.get '/login',routes.login;
app.get '/logout',routes.logout;
app.get '/register',routes.register;
app.post '/doregister',routes.doregister;
app.post '/dologin',routes.dologin;
app.get '/i',routes.i;
app.get '/write',routes.write;
app.get '/place',routes.place;


app.listen 18080;
