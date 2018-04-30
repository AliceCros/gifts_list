const express = require('express');
const router = express.Router();

const Authentification = require('./controller/authentification');

function myProfile(req, res, next) {
  res.send("Here's the secret!");
}
router.route('/myprofile')
  .get(myProfile);

router.route('/inscription')
  .post(Authentification.inscription);

module.exports = router;
