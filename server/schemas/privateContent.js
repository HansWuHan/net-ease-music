var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrivateContentSchema = new Schema({
	//id
	id: { type: Number, },
	//url
	url: { type: String, },
	//图片地址
	picUrl: { type: String, },
	//小图片地址
	sPicUrl: { type: String, },
	//类型
	type: { type: Number, },
	//文案
	copywriter: { type: String, },
	//名称
	name: { type: String, },
	//用户id
	eventUserId: { type: Number, },
	//宽度
	width: { type: Number, },
	//类型
	eventType: { type: Number, },
	//高度
	height: { type: Number, },
	alg: { type: String, },
});

var  PrivateContent = mongoose.model('privatecontent', PrivateContentSchema,'privatecontent');

module.exports =  PrivateContent;