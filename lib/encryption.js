(function() {
  var crypto;

  crypto = require('crypto');

  exports.md5 = function(data) {
    var encode, hash;
    hash = crypto.createHash("md5");
    hash.update(new Buffer(data, "binary"));
    encode = hash.digest('hex');
    return encode;
  };

}).call(this);
