var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RankSchema = new Schema({
    //作者id
    creatorId: { type: Number, default: 0},
    //作者昵称
    creatorName: { type: String, default: '' },
    //作者头像url
    creatorAvatarUrl: { type: String, default: '' },
    //排行榜包含歌曲信息
    tracks: {type: Array},
    //是否排序
    ordered: { type: Boolean, default: false },
    //标签
    tags: {type: Array},
    //点赞数量
    subscribedCount: { type: Number, default: 0},
    //收藏数量更新时间
    trackNumberUpdateTime: { type: Number, default: 0},
    //描述
    description: { type: String, default: '' },
    //播放数量
    playCount:{ type: Number, default: 0},
    //用户id
    userId: { type: Number, default: 0},
    //封面图片url地址
    coverImgUrl: { type: String, default: '' },
    //收藏数量
    trackCount: { type: Number, default: 0},
    //创建时间
    createTime: { type: Number, default: 0},
    //收藏更新时间
    trackUpdateTime: { type: Number, default: 0},
    //更新时间
    updateTime: { type: Number, default: 0},
    //排行榜名称
    name: { type: String, default: '' },
    //排行榜id
    id: { type: Number, default: 0,unique: true, trim: true},
    //分享数量
    shareCount: { type: Number, default: 0},
    //判断是全球榜还是官方榜
    ToplistType:{ type: String, default: '' },
    //评价数量
    commentCount: { type: Number, default: 0}

});

var Rank = mongoose.model('Rank', RankSchema,'Rank');

module.exports = Rank;