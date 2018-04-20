describe('testing work controller - ', function() {

	beforeEach(module('workController'));

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
	}));

	it('should read scope title', function() {
		var homeCtr = $controller('WorkController', {$scope: $scope});
		expect($scope.title).toBe('Work Page');
	});
});
