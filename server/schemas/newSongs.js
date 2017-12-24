var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var SongsSchema = new Schema({
    //歌曲名称
    name: { type: String, default: '' },
    //歌曲id
    id: { type: Number, default: 0, },
    //喜欢人都数量
    like_song_count: { type: Number, default: 0 },
    //作者名称
    artistName:{ type: String, default: '' },
    //作者id
    artistId:{ type: Number, default: 0 },
    //专辑名称
    albumName: { type: String, default: '' },
    //专辑id
    albumId: { type: Number, default: 0 },
    //专辑链接
    ablumPicUrl: { type: String, default: '' },
    //音乐id
    hMusicId: { type: Number, default: 0 },
    //是否可点赞
    starred: { type: Boolean, default: false },
    //受欢迎程度
    popularity: { type: Number, default: 0 },
    //分数
    score: { type: Number, default: 0 },
    //点赞数量
    starredNum:{ type: Number, default: 0 },
    //播放长度
    duration: { type: Number, default: 0 },
    //mv id
    mvid: { type: Number, default: 0 },
    //判断是否是最新音乐
    newSong:{ type: Boolean, default: false }
});

var NewSongsModel = mongoose.model('Songs', SongsSchema,'Songs');

module.exports = NewSongsModel;