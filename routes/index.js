(function() {
  var db, encryption, fs;

  fs = require('fs');

  encryption = require('../lib/encryption.js');

  db = require('../db/db.js');

  exports.index = function(req, res) {
    return res.render('index');
  };

  exports.upload = function(req, res) {
    if (req.session.nickname) {
      return res.render('upload');
    } else {
      return res.redirect('/login');
    }
  };

  exports.file_upload = function(req, res) {
    var files;
    files = req.files;
    fs.mkdir("uploads\\" + req.session.id, function() {
      fs.rename(files.file.path, 'uploads\\' + req.session.id + '\\' + files.file.name, function() {});
    });
    res.redirect('/code');
  };

  exports.code = function(req, res) {
    res.render("code", {
      file: '../uploads/domReady.js'
    });
  };

  exports.login = function(req, res) {
    res.render("login");
  };

  exports.register = function(req, res) {
    res.render("register");
  };

  exports.doregister = function(req, res) {
    db.insert({
      email: req.param('email'),
      nickname: req.param('nickname'),
      password: encryption.md5(req.param('password'))
    });
    res.redirect('/upload');
  };

  exports.dologin = function(req, res) {
    db.verifyLogin(req.param('email'), encryption.md5(req.param('password')), function(cb, user_id, nickname) {
      var status;
      status = cb;
      if (status) {
        req.session.user_id = user_id;
        req.session.nickname = nickname;
        return res.redirect('/upload');
      }
    });
  };

  exports.logout = function(req, res) {
    req.session = null;
    return res.redirect("/");
  };

}).call(this);
