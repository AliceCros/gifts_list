const User = require('../models/user');

exports.handleListItems = function(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    
    if (!email || !password) {
      return res.status(422).json({ error: 'You are not connected to your account' });
    }

    User.findOne({email: email}, function(err, existingUser){

      if (err) { 
        console.log('Error');
        return next(err);
      }

      if (!existingUser) { 
        console.log("Sorry, but it seems that you are not connected to your account");
        return res.status(422).json({ error: 'You are not connected to your account' });
      }
      
      }
    ).update({listItem: req.body.listItem}, function(newListItem){
      console.log('OK');
      return res.status(422).json({ success: 'Your list item has been updated' });
    });
};

exports.removeItem = function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  
  if (!email || !password) {
    return res.status(422).json({ error: 'You are not connected to your account' });
  }

  User.findOne({email: email}, function(err, existingUser){

    if (err) { 
      console.log('Error');
      return next(err);
    }

    if (!existingUser) { 
      console.log("Sorry, but it seems that you are not connected to your account");
      return res.status(422).json({ error: 'You are not connected to your account' });
    }
    
  }).update({listItem: req.body.listItem}, function(newListItem){
    console.log('OK');
    return res.status(422).json({ success: 'List item has been updated' });
  });
};