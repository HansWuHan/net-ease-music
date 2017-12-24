var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayListSchema = new Schema({
	//歌单名称
	name:{ type: String, default: '' },
	//歌单id
	id: { type: Number, default: 0,unique: true, trim: true},
	//用户id
	userId: { type: Number, default: 0 },
	//创建时间
	createTime: { type: Number, default: 0 },
	//更新时间
	updateTime: { type: Number, default: 0 },

	subscribedCount:{ type: Number, default: 0 },
	//关注人数
	trackCount: { type: Number, default: 0 },
	//封面地址
	coverImgUrl:{ type: String, default: '' },
	//标签
	tags: {type: Array},
	//播放总数
	playCount: { type: Number, default: 0 },
	//作者id
	creatorId: { type: Number, default: 0 },
	//作者名字
	creatorName: { type: String, default: '' },
	//作者头像地址
	creatorAvatarUrl:{ type: String, default: '' },
	//分享数量
	shareCount: { type: Number, default: 0 },
	//评论总数
	commentCount: { type: Number, default: 0 },
});

var PlayList = mongoose.model('PlayList', PlayListSchema,'PlayList');

module.exports = PlayList;