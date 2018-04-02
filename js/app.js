angular.module('studioApp', ['ngRoute']);

angular.module('studioApp').config(function($locationProvider, $routeProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})
	.when('/work', {
		templateUrl: 'templates/work.html',
		controller: 'WorkController'
	})
	.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	})
	.otherwise({
		redirectTo: '/'
	});
});