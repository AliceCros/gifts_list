const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = require('./server/router');

mongoose.connect('mongodb://localhost/idkdo');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use('/api', router);

app.listen(process.env.port || 4000, function(){
  console.log("Ready to accept request");
});

// GET All email addresses
// GET All passwords
// POST new user : id, email address, password, friends []
