const User = require('../models/user');

exports.updateAccount = function(res, req, next) {

  console.log('GOT IN');
  let email = req.params.email;
  let password = req.params.password;
  
  if (!email || !password) {
    console.log('No email and/or no password');
    return res.status(422).json({ error: 'You are not connected to your account' });
  }

  User.findOne({ email: this.email }, function(err, existingUser) {

    if (err) { 
      console.log('Error');
      return next(err);
    }

    if (!existingUser) { 
      console.log("Sorry, but it seems that we don't know this email address");
      return res.status(422).json({ error: 'Wrong email address' });
    }

  }).update({email: req.body.email}, function(newEmail){
    console.log('OK');
    return res.status(422).json({ success: 'Your email has been updated'});
  });
};