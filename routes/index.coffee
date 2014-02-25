fs = require 'fs';
encryption = require '../lib/encryption.js'
db = require '../db/db.js';

#页面相关
exports.index = (req,res) ->
	res.render 'index';

#文件上传相关
exports.upload = (req,res) ->
	if req.session.username
		res.render 'upload'
	else
		res.redirect '/login'

exports.file_upload = (req,res)->
	files = req.files;
	fs.mkdir "uploads\\"+req.session.id, ->
		fs.rename files.file.path,'uploads\\'+req.session.id+'\\'+files.file.name,->
			;
		return;
	res.redirect('/code')
	return;

#读代码相关
exports.code = (req,res) ->
	res.render "code",
		file : '../uploads/'+req.params.username+'/'+req.params.code
	return;

#注册相关
exports.register = (req,res) ->
		res.render "register" ;
		return;

exports.doregister = (req,res) ->
	db.insert 
		email : req.param('email'), 
		nickname : req.param('username'),
		password : encryption.md5(req.param('password'))
	res.redirect('/upload')
	return;

#登录相关
exports.login = (req,res) ->
	res.render "login";
	return;
exports.dologin = (req,res) ->
	db.verifyLogin req.param('email'),encryption.md5(req.param('password')),(cb,user_id,nickname)->
		status = cb;
		if status
			req.session.user_id = user_id;
			req.session.username = nickname;
			res.redirect('/upload')
	return;
exports.logout = (req,res) ->
		req.session = null;
		res.redirect("/");

#个人页面相关
exports.myIndex = (req,res) ->
	res.render("myindex");

#代码市场
exports.codeku = (req,res) ->
	res.render("codeku");

#榜单
exports.list = (req,res) ->
	res.render("list");

#讨论
exports.discuss = (req,res) ->
	;

#评论
exports.review = (req,res) ->
	;
#积分规则
exports.rule = (req,res) ->
	;