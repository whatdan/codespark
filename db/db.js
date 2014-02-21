(function() {
  var mongoClient;

  mongoClient = require("./mongoClient.js").mongoClient;

  exports.insert = function(email, ps) {
    mongoClient(function(err, db) {
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
    mongoClient(function(err, db) {
      if (err) {
        throw err;
      }
      db.collection('kids').findOne({
        "email": email
      }, function(err, result) {
        callback(result.email === email && ps === result.password, result._id.toString());
        db.close();
      });
    });
  };

}).call(this);
