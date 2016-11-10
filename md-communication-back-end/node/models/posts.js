var mongoose = require("../libs/mongoose.js");
var Schema = mongoose.Schema;
var schema = new Schema({
	tema: String,
	text: String,
	date: String,
	answer: String,
	creater: String
});

exports.Posts = mongoose.model("Posts", schema);