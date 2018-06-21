angular.module('studioApp')
	.directive('vidViewer', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/vid-viewer.html',
			scope: {
				hero: "="
			},
			link: function(scope, iElement, iAttributes) {
				console.error('vid directive - post - link function');

				console.dir('vid directive scope :', scope);

				// scope.hero = {};
				
					// broadcast handler
				// $scope.$on('newHero', function(e, newVal) {
				// 	console.warn('new hero recievd in directive viewer');
				// 	console.info(e);
				// 	console.error('newVal :', newVal);
				// 	scope.hero = scope.newVal;
				// });
			}
		}
	});
