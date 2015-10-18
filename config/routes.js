var recipes = require('./../server/controllers/recipes_controller');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/getRecipes', function(req, res) {
		recipes.getAll(req, res);
	});

	app.post('/findRecipes', function(req, res) {
		recipes.find(req, res);
	});
}