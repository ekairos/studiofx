angular.module('contactController', [])
	.controller('ContactController', function($scope, $log) {

		$scope.title = "Contact Page";
		
		$scope.contact = {};

		$scope.queries = ['General query', 'Career', 'Quote'];
		
		$scope.contact = {
			query: $scope.queries[0]
		};

		$scope.querySent = false;
		$scope.sendQuery = function() {
			$scope.querySent = true;
			console.log('form sent');
			$('#formResult').modal('show');
		};
	});
