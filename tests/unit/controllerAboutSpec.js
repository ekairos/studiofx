describe('About Controller test - ', function() {

	beforeEach(module('aboutController'));

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
	}));

	it('should read scope title', function() {
		var homeCtr = $controller('AboutController', {$scope: $scope});
		expect($scope.title).toBe('About Page');
	});
});
