var Rank = require('../schemas/rank')
exports.getOfficialRank = (req, res, next) => {
	//判断是否有每条数据ToplistType字段，若有就是官方榜，没有就是全球榜
	Rank.find({ToplistType: {$exists: true}},function(err,result){
		res.send(result);
	})
};

exports.getNationalRank = (req, res, next) => {
	Rank.find({ToplistType: {$exists: false}},function(err,result){
		res.send(result);
	})
};

