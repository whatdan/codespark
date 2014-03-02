crypto = require 'crypto';

exports.md5 = (data) ->
	hash = crypto.createHash("md5");
	hash.update(new Buffer(data, "binary"));
	encode = hash.digest('hex');
	return encode;