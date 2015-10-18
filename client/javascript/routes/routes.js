var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './javascript/partials/start.html'
		})
		.when('/searchPage', {
			templateUrl: './javascript/partials/search.html'
		})
		.when('/results', {
			templateUrl: './javascript/partials/results.html'
		});
});