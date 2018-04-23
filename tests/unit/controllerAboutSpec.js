describe('About Controller test - ', function() {

	beforeEach(module('aboutController'));

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		var aboutCtr = $controller('AboutController', {$scope: $scope});
	}));

	it('should read scope title', function() {
		expect($scope.title).toBe('About Page');
	});

	describe('About Controller', function() {
		it('should read members list', function() {
			expect($scope.members.length).toEqual(4);
		});
	});
});
