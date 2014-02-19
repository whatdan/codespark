(function() {
  var db, encryption, fs;

  fs = require('fs');

  encryption = require('../lib/encryption.js');

  db = require('../db/db.js');

  exports.index = function(req, res) {
    return res.render('index');
  };

  exports.upload = function(req, res) {
    return res.render("upload");
  };

  exports.file_upload = function(req, res) {
    var files;
    files = req.files;
    fs.rename(files.file.path, 'uploads\\' + files.file.name, function() {});
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write(files.file.name);
    res.end();
  };

  exports.code = function(req, res) {
    return res.render("code");
  };

  exports.login = function(req, res) {
    return res.render("login");
  };

  exports.register = function(req, res) {
    return res.render("register");
  };

  exports.doregister = function(req, res) {
    db.insert(req.param('email'), encryption.md5(req.param('password')));
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write("ok");
    res.end();
  };

  exports.dologin = function(req, res) {};

}).call(this);
