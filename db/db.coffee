mongoClient = require("./mongoClient.js").mongoClient;

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
				return;
		return;
	return ;
exports.getUserId = (username,cb)->
	mongoClient (err,db) ->
		throw err if err;
		db.collection("kids").findOne
			'username':username
			(err,result) ->
				cb result._id.toString()
				db.close();
				return;
		return;
	return;
	;

