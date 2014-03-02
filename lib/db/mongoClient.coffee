mongodb = require 'mongodb'
MongoClient = mongodb.MongoClient

exports.mongoClient = (callback) ->
	MongoClient.connect 'mongodb://localhost:27017/codespark',callback;
	return;