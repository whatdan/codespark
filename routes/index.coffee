fs = require 'fs';
encryption = require '../lib/encryption.js'
db = require '../db/db.js';

exports.index = (req,res) ->
	res.render 'index';
exports.upload = (req,res) ->
	if req.session.email
		res.render "upload" ;
	else
		res.render "login" ;
exports.file_upload = (req,res)->
	files = req.files;
	console.log req.session.user_id;
	fs.mkdir "uploads\\"+req.session.user_id, ->
		fs.rename files.file.path,'uploads\\'+req.session.user_id+'\\'+files.file.name,->
			;
		return;
	res.writeHead 200,{'Content-Type':'text/plain'}
	res.write files.file.name;
	res.end();
	return;
exports.code = (req,res) ->
	res.render "code" ;

exports.login = (req,res) ->
	res.render "login";
	return;
exports.register = (req,res) ->
		res.render "register" ;
		return;

exports.doregister = (req,res) ->
	db.insert(req.param('email'),encryption.md5(req.param('password')));
	res.writeHead 200,{'Content-Type':'text/plain'}
	res.write "ok";
	res.end();
	return;
exports.dologin = (req,res) ->
	db.verifyLogin req.param('email'),encryption.md5(req.param('password')),(cb,user_id)->
		status = cb;
		if status
			req.session.user_id = user_id;
			res.render "upload";
	return;
exports.logout = (req,res) ->
		req.session = null;
