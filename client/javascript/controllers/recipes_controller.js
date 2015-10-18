myApp.controller('RecipesController', function($scope, RecipeFactory, $location, $http) {
	$scope.currentIngredients = [];
	$scope.validRecipes = [];
	console.log('here');
	$scope.addIngredient = function() {
		var ingredientToAdd = {};
		ingredientToAdd.name = $scope.ingredient.name;
		$scope.currentIngredients.push(ingredientToAdd);
		$scope.ingredient = null;
	}

	$scope.search = function() {
		//console.log($scope.currentIngredients);
		$http.post('/findRecipes', {currentIngredients: $scope.currentIngredients}).success(function (recipes) {
			for (var i = 0; i < recipes.validRecipes.length; i++) {
				var recipeToAdd = recipes.validRecipes[i];
				$scope.validRecipes.push(recipeToAdd);
			}
			console.log($scope.validRecipes);
			//$location.path('results');
		});

	}
});