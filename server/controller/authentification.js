// Tuto Youtube : https://www.youtube.com/watch?v=UAv4QbZGf40&index=3&list=PL2W-kq21u8QDB5vRXMcFwbSUpM3QhNT2v

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

}