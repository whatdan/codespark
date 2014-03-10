fs = require 'fs';
encryption = require '../lib/encryption'
db = require '../lib/db';

#页面相关
exports.index = (req,res) ->
	res.sendfile 'app/views/index.html';

#文件上传相关
exports.upload = (req,res) ->
	if req.session.username
		res.sendfile 'app/views/upload.html'
	else
		res.redirect '/login'

exports.file_upload = (req,res)->
	db.saveFiles(req,res)

#读代码相关
exports.code = (req,res) ->
		res.sendfile 'app/views/code.html';
#读代码相关
exports.returncode = (req,res) ->
	db.getUserId req.params.username,(cb)->
		db.showCode(req,res,cb)

#注册相关
exports.register = (req,res) ->
		res.sendfile 'app/views/register.html'

exports.doregister = (req,res) ->
	db.insert 
		email : req.param('email'), 
		username : req.param('username'),
		password : encryption.md5(req.param('password'))
	res.redirect('/upload')

#登录相关
exports.login = (req,res) ->
	res.sendfile 'app/views/login.html';

exports.dologin = (req,res) ->
	db.verifyLogin req.param('email'),encryption.md5(req.param('password')),(cb,user_id,username)->
		status = cb;
		if status
			req.session.user_id = user_id;
			req.session.username = username;
			res.redirect('/upload')

exports.logout = (req,res) ->
		req.session = null;
		res.redirect("/");

#个人页面相关
exports.i = (req,res) ->
	res.sendfile 'app/views/i.html'
exports.write = (req,res) ->
	res.sendfile 'app/views/write.html'

#代码市场,活跃度
exports.place = (req,res) ->
	res.sendfile 'app/views/place.html'

#评论
exports.review = (req,res) ->
	;

#讨论
exports.discuss = (req,res) ->
	;

#积分规则
exports.rule = (req,res) ->
	;