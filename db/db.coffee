mongoClient = require("./mongoClient.js").mongoClient;

exports.insert = (email,ps) -> 
	mongoClient (err,db)->
		throw err if err
		db.collection('kids').insert 
			"email":email
			"password":ps,
			(err,result) ->
			    db.close();
			    return;
		return;
	return;

exports.verifyLogin = (email,ps,callback) ->
	mongoClient (err,db)->
		throw err if err
		db.collection('kids').findOne
			"email":email
			(err,result) ->
				callback result.email == email and ps == result.password,result._id.toString();
				db.close();
				return;
		return;
	return ;

