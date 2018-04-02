angular.module('studioApp')
	.controller('NavController', function($scope, $location) {
		$scope.pageClass = function(path) {
			return (path == $location.path()) ? 'nav-activ' : '';
		}
	})
	.controller('HomeController', function($scope) {
		console.log('Home template');

		$scope.title = 'home page';
	})
	.controller('AboutController', function($scope) {
		console.log('About template');

		$scope.title = 'About page';
	})
	.controller('WorkController', function($scope) {
		console.log('Work template');

		$scope.title = 'Work page';
	})
	.controller('ContactController', function($scope) {
		console.log('Contact template');

		$scope.title = 'Contact page';
	});