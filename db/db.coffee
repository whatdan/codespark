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
				console.log result.nickname;
				callback result.email == email and ps == result.password,result._id.toString(),result.nickname;
				db.close();
				return;
		return;
	return ;

