var mongoose = require("../libs/mongoose.js");
var Schema = mongoose.Schema;

var schema = new Schema({
	fromId: String,
	toId: String,
	text: String,
	date: String
});

exports.Messages = mongoose.model("messages", schema);