(function() {
  var MongoClient, mongodb;

  mongodb = require('mongodb');

  MongoClient = mongodb.MongoClient;

  exports.insert = function(email, ps) {
    MongoClient.connect('mongodb://localhost:27017/codespark', function(err, db) {
      if (err) {
        throw err;
      }
      db.collection('kids').insert({
        "email": email,
        "password": ps
      }, function(err, result) {
        db.close();
      });
    });
  };

}).call(this);
