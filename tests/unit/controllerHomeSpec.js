describe('testing home controller - ', function() {

	beforeEach(module('homeController'));

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
	}));

	it('should read scope title', function() {
		var homeCtr = $controller('HomeController', {$scope: $scope});
		expect($scope.title).toBe('Home Page');
	})
});
