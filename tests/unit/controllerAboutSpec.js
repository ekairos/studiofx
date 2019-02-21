describe('About Controller test - ', function() {

	beforeEach(module('aboutController'));

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		var aboutCtr = $controller('AboutController', {$scope: $scope});
	}));

	describe('About Controller', function() {
		it('should read members list', function() {
			expect($scope.members.length).toEqual(4);
		});
		it('should read team members details', function() {
			// custom matcher from jasmin-expect
		var expectedString = jasmine.any(String);
		for(i = 0; i < $scope.members.length; i++) {
			expect($scope.members[i]).toEqual(jasmine.objectContaining({
				name: expectedString,
				title: expectedString,
				description: expectedString
			}));
		}
	});
	});
});
