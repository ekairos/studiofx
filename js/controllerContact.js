angular.module('contactController', [])
	.controller('ContactController', function($scope, $log) {
		console.log('Contact template');

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
			// var data = $scope.contact;
			// console.log(data);
			$('#formResult').modal('show');
		};
	});
