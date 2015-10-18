var recipes = require('./../server/controllers/recipes_controller');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/getRecipes', function(req, res) {
		recipes.getAll(req, res);
	});

	app.get('/findRecipes', function(req, res) {
		//res.render('search');
		//recipes.find(req, res);
	});
}