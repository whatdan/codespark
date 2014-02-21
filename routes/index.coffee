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
	fs.mkdir "uploads\\"+req.session.id, ->
		fs.rename files.file.path,'uploads\\'+req.session.id+'\\'+files.file.name,->
			;
		return;
	res.redirect('/code')
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
	db.insert 
		email : req.param('email'), 
		nickname : req.param('nickname'),
		password : encryption.md5(req.param('password'))
	res.redirect('/upload')
	return;
exports.dologin = (req,res) ->
	db.verifyLogin req.param('email'),encryption.md5(req.param('password')),(cb,user_id,nickname)->
		status = cb;
		if status
			req.session.user_id = user_id;
			req.session.nickname = nickname;
			res.redirect('/upload')
	return;
exports.logout = (req,res) ->
		req.session = null;
		res.redirect("/")
