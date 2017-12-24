var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MvSchema = new Schema({
    //mv id
    id: { type: Number, default: 0,unique: true, trim: true},
    //mv 类型
    type: { type: Number, default: 0, },
    //mv 名字
    name: { type: String, default: '' },
    //文案
    copywriter: { type: String, default: '' },
    //mv 封面图片地址
    picUrl: { type: String, default: '' }, 
    //是否可以不喜欢
    canDislike: { type: Boolean, default: false },
    //持续时间
    duration: { type: Number, default: 0, },
    //mv 播放数量
    playCount:{ type: Number, default: 0, },
    //mv 作者姓名
    artistName:{ type: String, default: '' },
    //mv 作者id
    artistId: { type: Number, default: 0, },
    alg: { type: String, default: '' },
});

var Mv = mongoose.model('MV', MvSchema,'MV');

module.exports = Mv;