const express = require('express');
const router = express.Router();

const Authentification = require('./controller/authentification');
const ListItem = require('./controller/list-item');
const Account = require('./controller/account');

function myProfile(req, res, next) {
  res.send("Here's the secret!");
}

function getAccount(req, res, next) {
  res.send('OK')
}
router.route('/myprofile')
  .get(myProfile);

router.route('/signin/:email/:password')
  .get(Authentification.signin);
  //.get(getAccount);

router.route('/inscription')
  .post(Authentification.inscription);

router.route('/addItem')
  .post(ListItem.handleListItems);

router.route('/removeItem')
  .post(ListItem.handleListItems);

router.route('/updateEmail/:email/:password')
  .post(Account.updateAccount);

module.exports = router;
