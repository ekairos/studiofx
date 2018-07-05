angular.module('studioApp')
	.directive('viewer', function() {
		return {
			restrict: 'E',
			replace: true,
			scope: true,
			templateUrl: '../templates/directives/viewer.html'
		}
	});
