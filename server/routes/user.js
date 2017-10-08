var express = require('express');
var router = express.Router();

var home = require('../models/home')
//引入创建的方法
var rank = require('../models/rank')



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/playlist',home.getPlayList);
router.get('/personalized',home.getPersonalized);
router.get('/officialrank',rank.getOfficialRank);
router.get('/nationalrank',rank.getNationalRank);

module.exports = router;
