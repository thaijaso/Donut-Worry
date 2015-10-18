myApp.controller('RecipesController', function($scope, RecipeFactory) {
	$scope.currentIngredients = [];

	$scope.addIngredient = function() {
		var ingredientToAdd = {};
		ingredientToAdd.name = $scope.ingredient.name;
		$scope.currentIngredients.push(ingredientToAdd);
		$scope.ingredient = null;
	}
});