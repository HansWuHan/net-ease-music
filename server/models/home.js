var Personalized = require('../schemas/personalized');
var PlayList = require('../schemas/playList');

exports.getPersonalized =  (req, res, next) => {
    Personalized.find({},function(err,result){
        res.send(result);
    })
}

exports.getPlayList = (req, res, next) => {
    PlayList.find({},function(err,result){
        res.send(result);
    })
}