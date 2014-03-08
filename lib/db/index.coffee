mongoClient = require("../mongo").mongoClient
ObjectID = require('mongodb').ObjectID
GridStore = require('mongodb').GridStore
fs = require('fs')
Grid = require('mongodb').Grid

exports.insert = (obj) -> 
	mongoClient (err,db)->
		throw err if err
		db.collection('kids').insert obj,(err,result) ->
			db.close();

exports.verifyLogin = (email,ps,callback) ->
	mongoClient (err,db)->
		throw err if err
		db.collection('kids').findOne
			"email":email
			(err,result) ->
				callback result.email == email and ps == result.password,result._id.toString(),result.username;
				db.close();

exports.getUserId = (username,cb)->
	mongoClient (err,db) ->
		throw err if err;
		db.collection("kids").findOne
			'username':username
			(err,result) ->
				cb result._id.toString()
				db.close();

exports.saveFiles = (req,res) ->
	mongoClient (err,db) ->
		throw err if err
		fileId = new ObjectID();
		gridStore = new GridStore db, fileId,"/"+req.session.user_id+"/"+req.files.file.originalFilename,'w'
		fs.readFile req.files.file.path,(err,data)->
			gridStore.open (err, gridStore) ->
				gridStore.write data, (err, gridStore) ->
					throw err if err;
					gridStore.close (err, result)->
						console.log result;
						db.close()
						res.redirect '/upload'

# exports.showCode = (req,res,uuid) ->
# 	mongoClient (err,db) ->
# 		throw err if err
# 		console.log '/'+uuid+"/"+req.params.code
# 		db.collection('fs.files').findOne
# 			"filename":'/'+uuid+"/"+req.params.code
# 			(err,result) ->
# 				db.close();
# 				res.sendfile result.filename

#in the fe,use angularjs to load a new file in filestring.
exports.showCode = (req,res,uuid) ->
	mongoClient (err,db) ->
		throw err if err
		gridStore = new GridStore db, "/"+uuid+"/"+req.params.code, "r" 
		gridStore.open  (err, gridStore)->
			gridStore.seek 0, ->
				gridStore.read (err, data) ->
					filestring = data.toString();
					db.close();


# exports.saveFiles = (req,res) ->
# 	mongoClient (err,db) ->
# 		throw err if err
# 		grid = new Grid db, 'fs'
# 		fs.readFile req.files.file.path,(err,data) ->
# 			buffer = new Buffer(data);
# 			grid.put buffer, {metadata:{category:'text'}, content_type: 'text'}, (err, fileInfo) ->
# 				grid.get fileInfo._id,(err, data) ->
# 					console.log "Retrieved data: " + data.toString()
# 					db.close()
# 					res.redirect '/upload'


