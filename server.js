var express = require('express');
var path = require('path');
var app = express();
	app.configure(function(){
		app.set('views', __dirname + '/views');
		app.use(express.static(path.join(__dirname, '/public')));
	});


app.get('/', function(req, res){
  res.render('../views/index.jade');
});

app.listen(3000);
