const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../../config');

function tokenForUser(user) {
  let timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    iat: timestamp,
  }, config.secret);
}

exports.inscription = function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  
  if (!email || !password) {
    return res.status(422).json({ error: 'You must provide an email and password' });
  }
  // Check if user already exists
  User.findOne({ email: email }, function(err, existingUser) {
  
    if (err) { 
      console.log('Error');
      return next(err);
    }

    if (existingUser) { 
      console.log('Email already used');
      return res.status(422).json({ error: 'Email already used' });
    }

    let user = new User({
      email: email,
      password: password,
    });

    user.save(function(err) {
      if (err) { return next(err) }
      res.send({ user_id: user._id, token: tokenForUser(user) });
      });   
    })
    console.log("OK");
    return res.status(200).json({ success: 'Subscription ok' });
}

exports.signin = function(req, res, next) {
  let email = req.params.email;
  let password = req.params.password;
  
  if (!email || !password) {
    return res.status(422).json({ error: 'You must provide an email and password' });
  }

  User.findOne({ email: email }, function(err, existingUser) {

    if (err) { 
        console.log('Error');
        return next(err);
      }

    if (!existingUser) { 
        console.log("Sorry, but it seems that we don't know this email address");
        return res.status(422).json({ error: 'Wrong email address' });
    }

    console.log('Connected to your account with email address:', email);
    res.status(200).json({ email: email, success: 'Connected to user account' });
    
    return res;

  });

};