angular.module('studioApp', ['ngRoute']);

angular.module('studioApp').config(function($locationProvider, $routeProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});
});