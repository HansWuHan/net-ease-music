var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DJProgramSchema = new Schema({
	id: { type: Number, default: 0,unique: true, trim: true},
	name: String,
	copywriter: String,
	picUrl: String,
});

var DJProgram = mongoose.model('djprogram', DJProgramSchema,'djprogram');

module.exports = DJProgram;