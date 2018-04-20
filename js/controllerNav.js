angular.module('navController', [])
	.controller('NavController', function($scope, $location) {
		$scope.pageClass = function(path) {
			return (path == $location.path()) ? 'nav-activ' : '';
		}
			// hide nav menu on click/touch outside links
		$('body').click(function() {
			$('#navMenu').collapse("hide");
		});
	});
