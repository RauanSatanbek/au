var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var fs = require("fs");
var path = require("path");
var app = express();
app.use(cors());
app.use(bodyParser());

var Comments = require("./models/comments.js").Comments;
var Posts = require("./models/posts.js").Posts;
var Users = require("./models/user.js").Users;
// var Messages = require("./models/messages.js").Messages;

// app.post("/api/message/add", function(req, res) {
// 	var fromId = req.body.fromId;
// 	var toId = req.body.toId;
// 	var text req.body.text;
// 	var date = getDate(2);

// 	var message = new Messages({
// 		fromId: fromId,
// 		toId: toId,
// 		text: text,
// 		date: date
// 	});

// 	message.save(function(err, affected) {

// 	});
// });


	// function getAllComments(postId) {
	// 	console.log(postId);
	// 	Comments.find({postId: postId}, function(err, result) {
	// 		if (err) return "error";
	// 		return result;
	// 	});
	// }
app.get("/getUser", function(req, res, next) {
	Users.find(function(err, result) {
		res.send(result);
	});
});
// get user
	app.post("/api/user/get", function(req, res) {
		console.log(req.body);
		Users.findOne({_id: req.body.userId}, function(err, result) {
			if(err) {
				res.statusCode = 500;
				res.send("error");
			} else {
				res.send(result);
			}
		});
	});
// addComment
	app.post("/api/comment/add", function(req, res) {
		var text = req.body.text;
		var postId = req.body.postId;
		var userId = req.body.userId;
		var userName = req.body.userName;
		var date = getDate(1);
		console.log(postId, userId);
		Posts.update({_id: postId}, {$set: {answer: date}}, function(err, affected) {
			if(err) console.log("error");
		});
		var comment = new Comments({
			userName: userName,
			userId: userId,
			postId: postId,
			text: text,
			date: getDate(2)
		});
		comment.save(function(err, affected) {
			if(err) {
				res.statusCode = 500;
				res.send("Error");
			} else {
				Comments.find({postId: postId}, function(err, result) {
					if (err) return "error";
					else res.send(result);
				});
			}
		});
	});
// get comment
	app.post("/api/comment/get", function(req, res) {
		var postId = req.body.postId;
		Comments.find({postId: postId}, function(err, result) {
			if (err) return "error";
			else res.send(result);
		});
		
	});
// getPost
	app.post("/api/post/get", function(req, res) {
		Posts.findOne({_id: req.body.id}, function(err, result) {
			if(err) {
				res.statusCode = 500;
				res.send("Error");
			} else {
				res.send(result);
			}
		});
	});
// getPosts
	app.get("/api/posts/get", function(req, res) {
		Posts.find(function(err, result) {
			if(err) {
				res.statusCode = 500;
				res.send("Error");
			} else {
				res.send(result);
			}
		});
	});
// addPost
	app.post("/api/post/add", function(req, res) {
		var tema = req.body.tema;
		var text = req.body.text;
		var post = new Posts({
			tema: tema,
			text: text,
			date: getDate(1),
			answer: "",
			creater: "Rauan Satanbek"
		});

		post.save(function(err, affected) {
			if(err) {
				res.statusCode = 500;
				res.send("Error");
			} else {
				Posts.find(function(err, result) {
					if(err) {
						res.statusCode = 500;
						res.send("Error");
					} else {
						res.send(result);
					}
				});
			}
		});
		
	});

function getDate(bool) {
	var months = ['январья', 'февралья', 'марта', 'апрелья', 'майа', 'июнья', 'июлья', 'августа', 'сентябрья', 'октябрья', 'ноябрья', 'декабрья'];
	var date = new Date();
	var month = months[date.getMonth()];
	var day = date.getDate();
	var year = date.getFullYear();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var now_date = day + " " + month + " " + year;
	if(bool == 1) return now_date;
	now_date = now_date + " в " + hour + ":" + minute + ":" + second;
	return now_date;
}
app.listen(3000, function() {
	console.log("Backend Started");
});

