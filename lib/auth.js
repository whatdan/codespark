(function() {
  exports.authorize = function(req, res, next) {
    if (!req.session.username) {
      return res.redirect('/');
    } else {
      return next();
    }
  };

}).call(this);
