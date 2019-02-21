describe('testing work controller - ', function() {

	beforeEach(module('workController'));

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		var workCtr = $controller('WorkController', {$scope: $scope});
	}));

	describe('gallery - ', function() {

		it('should read galleries', function() {
			expect($scope.gallery.g3d.length).toEqual(4);
			expect($scope.gallery.gtvc.length).toEqual(5);
			expect($scope.gallery.gmgx.length).toEqual(2);
			expect($scope.gallery.gall().length).toEqual(11);
		});

		it('should read galleries item lists', function() {
				// custom matcher from jasmin-expect
			expect($scope.gallery.g3d).toBeArrayOfObjects();
			expect($scope.gallery.gtvc).toBeArrayOfObjects();
			expect($scope.gallery.gmgx).toBeArrayOfObjects();
			expect($scope.gallery.gall()).toBeArrayOfObjects();
		});

		it('should read gallery items', function() {
				// custom matcher from jasmin-expect
			var expectedString = jasmine.any(String);
			for(i = 0; i < $scope.gallery.gall().length; i++) {
				expect($scope.gallery.gall()[i]).toEqual(jasmine.objectContaining({
					name: expectedString,
					file: expectedString,
					type: expectedString,
					description: expectedString
				}));
			}
		});

	}); // end gallery tests
	
});
