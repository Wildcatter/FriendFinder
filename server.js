const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

//var htmlRoute = require('./html-routes')(app);
//var apiRoute = require('./api-routes')(app);
//Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000);


app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, 'home.html'));
	//res.send("Hey!");
   
});

app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, 'survey.html'));


});

app.get('/api/friends', function(req,res) {
	res.json(friends)   
});



//post route -> back to home
app.post('/api/friends', function(req, res) {
	var newFriend = req.body;
	friends.push(newFriend);

	console.log(friends);
});

var friends = [
	{
  		"name":"Ahmed",
  		"photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  		"scores":[5,1,4,4,5,1,2,5,4,2]
	}
];



// function Friend(name, photo, scores) {
// 	this.name:a name,
// 	this.photo: photo,
// 	this.scores: scores
// };