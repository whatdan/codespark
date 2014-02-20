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

  exports.verifyLogin = function(email, ps, callback) {
    MongoClient.connect('mongodb://localhost:27017/codespark', function(err, db) {
      if (err) {
        throw err;
      }
      db.collection('kids').findOne({
        "email": email
      }, function(err, result) {
        console.log(result.email === email && ps === result.password);
        callback(result.email === email && ps === result.password);
        db.close();
      });
    });
  };

}).call(this);
