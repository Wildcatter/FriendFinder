module.exports = function(app) {

//root get route
app.get('/api/friends', function(req,res) {
	res.json(friends)   
});



//post route -> back to home
app.post('/api/friends', function(req, res, next) {
    
	next();
}, function(req, res) {
	res.redirect('/');
});

};