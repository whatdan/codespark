(function() {
  var db, encryption, fs;

  fs = require('fs');

  encryption = require('../lib/encryption.js');

  db = require('../db/db.js');

  exports.index = function(req, res) {
    return res.render('index');
  };

  exports.upload = function(req, res) {
    if (req.session.username) {
      return res.render('upload');
    } else {
      return res.redirect('/login');
    }
  };

  exports.file_upload = function(req, res) {
    var files;
    files = req.files;
    fs.mkdir("uploads\\" + req.session.user_id, function() {
      fs.rename(files.file.path, 'uploads\\' + req.session.user_id + '\\' + files.file.name, function() {
        return res.redirect('/upload');
      });
    });
  };

  exports.code = function(req, res) {
    var file_tmp;
    file_tmp = '../uploads/' + req.params.user_id + '/' + req.params.code;
    res.render("code", {
      file_tmp: file_tmp
    });
  };

  exports.register = function(req, res) {
    res.render("register");
  };

  exports.doregister = function(req, res) {
    db.insert({
      email: req.param('email'),
      nickname: req.param('username'),
      password: encryption.md5(req.param('password'))
    });
    res.redirect('/upload');
  };

  exports.login = function(req, res) {
    res.render("login");
  };

  exports.dologin = function(req, res) {
    db.verifyLogin(req.param('email'), encryption.md5(req.param('password')), function(cb, user_id, nickname) {
      var status;
      status = cb;
      if (status) {
        req.session.user_id = user_id;
        req.session.username = nickname;
        return res.redirect('/upload');
      }
    });
  };

  exports.logout = function(req, res) {
    req.session = null;
    return res.redirect("/");
  };

  exports.myIndex = function(req, res) {
    return res.render("myindex");
  };

  exports.codeku = function(req, res) {
    return res.render("codeku");
  };

  exports.list = function(req, res) {
    return res.render("list");
  };

  exports.discuss = function(req, res) {};

  exports.review = function(req, res) {};

  exports.rule = function(req, res) {};

}).call(this);
