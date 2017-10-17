const User = require('./../models/userModel');
const userController = {};

userController.create = (req, res) => {
  User.create({"username": "Kelly"}, function(err, success) {
    if (err) {
      res.send(err);
    } else if (success) {
      res.send(success);
    }
  })
}

userController.findMatches = (req, res) => {
  User.find(req.query, (function(err, found) {
    if (found) {
      res.send(found.map((el => el.username)));
    } else {
      res.send(err);
    }
  }))
};

userController.login = (req, res) => {
    User.findOne({username: req.body.username})
      .then(function (user) {
        if (user) {
            User.findOne({password: req.body.password})
              .then(function (pass) {
                if (pass) {
                    console.log("YOU'RE IN!");
                    return res.redirect('');
                }
                else {
                    console.log('INCORRECT CREDENTIALS')
                    res.redirect(404, '/');
                    //res.render?
                }
              })
        }
        else {
            res.redirect(404, '/hello');
        }
    })
}

module.exports = userController;