var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//创建Schema
  var PersonalizedSchema = new Schema({
//id
  id: { type: Number, default: 0 ,unique: true, },
//封面地址
  picUrl: { type: String, default:'' },
//是否可以不喜欢
  canDislike: { type: Boolean, default: false  },
//类型
  type: { type: Number, default: 0  },
//作者
  copywriter: { type: String, default:'' },
//姓名
  name: { type: String, default:'' },
//收藏数量
  trackCount: { type: Number, default: 0  },
//播放数量
  playCount: { type: Number, default: 0  },
//是否是高音质
  highQuality: { type: Boolean, default: false },
alg: { type: String, default:''},
});

var Personalized = mongoose.model('personalized', PersonalizedSchema,'personalized');

module.exports = Personalized;