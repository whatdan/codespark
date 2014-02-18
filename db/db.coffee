mongodb = require 'mongodb'
MongoClient = mongodb.MongoClient

exports.insert = (email,ps) -> 
	MongoClient.connect 'mongodb://localhost:27017/codespark', (err,db)->
		throw err if err
		db.collection('kids').insert 
			"email":email
			"password":ps,
			(err,result) ->
			    db.close();
			    return;
		return;
	return;