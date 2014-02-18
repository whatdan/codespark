fs = require 'fs';
exports.index = (req,res) ->
	res.render 'index';
exports.upload = (req,res) ->
	res.render("upload");
exports.file_upload = (req,res)->
	files = req.files;
	fs.rename files.file.path,'uploads\\'+files.file.name,->
		;
	res.writeHead 200,{'Content-Type':'text/plain'}
	res.write files.file.name;
	res.end();
	return;
exports.login = (req,res) ->
	username = res.username;
	password = res.password;
	return;