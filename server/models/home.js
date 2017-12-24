var NewSongsModel = require('../schemas/newSongs');
var PlayList = require('../schemas/playList');
var Mv = require('../schemas/mv');
var DJProgram = require('../schemas/djProgram');
var Personalized = require('../schemas/personalized');
var PrivateContent = require('../schemas/privateContent');

exports.getNewSongs = (req, res, next) => {
	NewSongsModel.find({"newSong" : true},function(err,result){
		res.send(result);
	})
};

exports.getPlayList = (req, res, next) => {
	PlayList.find({},function(err,result){
		res.send(result);
	})
}

exports.getMV = (req, res, next) => {
	Mv.find({},function(err,result){
		res.send(result);
	})
}

exports.getDJProgram =  (req, res, next) => {
	DJProgram.find({},function(err,result){
		res.send(result);
	})
}

exports.getPersonalized =  (req, res, next) => {
	Personalized.find({},function(err,result){
		res.send(result);
	})
}

exports.getPrivatecontent =  (req, res, next) => {
	PrivateContent.find({},function(err,result){
		res.send(result);
	})
}