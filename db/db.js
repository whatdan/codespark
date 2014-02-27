(function() {
  var mongoClient;

  mongoClient = require("./mongoClient.js").mongoClient;

  exports.insert = function(obj) {
    return mongoClient(function(err, db) {
      if (err) {
        throw err;
      }
      return db.collection('kids').insert(obj, function(err, result) {
        return db.close();
      });
    });
  };

  exports.verifyLogin = function(email, ps, callback) {
    mongoClient(function(err, db) {
      if (err) {
        throw err;
      }
      db.collection('kids').findOne({
        "email": email
      }, function(err, result) {
        callback(result.email === email && ps === result.password, result._id.toString(), result.username);
        db.close();
      });
    });
  };

  exports.getUserId = function(username, cb) {
    mongoClient(function(err, db) {
      if (err) {
        throw err;
      }
      db.collection("kids").findOne({
        'username': username
      }, function(err, result) {
        cb(result._id.toString());
        db.close();
      });
    });
  };

}).call(this);
