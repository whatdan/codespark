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
    return db.getUserId(req.params.username, function(cb) {
      var uuid;
      uuid = cb;
      fs.readFile('uploads\\' + uuid + "\\" + req.params.code, "utf8", function(err, data) {
        if (err) {
          throw err;
        }
        res.render("code", {
          content: data
        });
      });
    });
  };

  exports.register = function(req, res) {
    res.render("register");
  };

  exports.doregister = function(req, res) {
    db.insert({
      email: req.param('email'),
      username: req.param('username'),
      password: encryption.md5(req.param('password'))
    });
    res.redirect('/upload');
  };

  exports.login = function(req, res) {
    res.render("login");
  };

  exports.dologin = function(req, res) {
    db.verifyLogin(req.param('email'), encryption.md5(req.param('password')), function(cb, user_id, username) {
      var status;
      status = cb;
      if (status) {
        req.session.user_id = user_id;
        req.session.username = username;
        return res.redirect('/upload');
      }
    });
  };

  exports.logout = function(req, res) {
    req.session = null;
    return res.redirect("/");
  };

  exports.i = function(req, res) {
    return res.render("i");
  };

  exports.write = function(req, res) {
    return res.render("write");
  };

  exports.place = function(req, res) {
    return res.render("place");
  };

  exports.review = function(req, res) {};

}).call(this);
