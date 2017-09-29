var express = require('express');
var router = express.Router();

var home = require('../models/home')



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/playlist',home.getPlayList);

module.exports = router;
