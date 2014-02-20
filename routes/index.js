(function() {
  var db, encryption, fs;

  fs = require('fs');

  encryption = require('../lib/encryption.js');

  db = require('../db/db.js');

  exports.index = function(req, res) {
    return res.render('index');
  };

  exports.upload = function(req, res) {
    if (req.session.email) {
      return res.render("upload");
    } else {
      return res.render("login");
    }
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
    res.render("login");
  };

  exports.register = function(req, res) {
    res.render("register");
  };

  exports.doregister = function(req, res) {
    db.insert(req.param('email'), encryption.md5(req.param('password')));
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write("ok");
    res.end();
  };

  exports.dologin = function(req, res) {
    db.verifyLogin(req.param('email'), encryption.md5(req.param('password')), function(cb) {
      var status;
      status = cb;
      console.log("dologin" + status);
      if (status) {
        req.session.email = req.param('email');
        return res.render("upload");
      }
    });
  };

  exports.logout = function(req, res) {
    return req.session = null;
  };

}).call(this);
