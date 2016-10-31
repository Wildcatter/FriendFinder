module.exports = function(app) {

//root get route
app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, '../', 'public', 'home.html'));
	res.send("Hey!");
   
});



//post route -> back to home
app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, './app/public', '/survey.html'));


});
};
