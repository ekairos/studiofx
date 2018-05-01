describe('testing work controller - ', function() {

	beforeEach(module('workController'));

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		var workCtr = $controller('WorkController', {$scope: $scope});
	}));

	it('should read scope title', function() {
		expect($scope.title).toBe('Work Page');
	});

	it('should read galleries', function() {
		expect($scope.gallery3d.length).toEqual(4);
		expect($scope.gallerypost.length).toEqual(4);
		expect($scope.gallerymgx.length).toEqual(2);
		expect($scope.galleryAll.length).toEqual(10);
	});

	it('should read galleries item lists', function() {
			// custom matcher from jasmin-expect
		expect($scope.gallery3d).toBeArrayOfObjects();
		expect($scope.gallerypost).toBeArrayOfObjects();
		expect($scope.gallerymgx).toBeArrayOfObjects();
		expect($scope.galleryAll).toBeArrayOfObjects();
	});

	it('should read gallery items', function() {
			// custom matcher from jasmin-expect
		var expectedString = jasmine.any(String);
		for(i = 0; i < $scope.galleryAll.length; i++) {
			expect($scope.galleryAll[i]).toEqual(jasmine.objectContaining({
				name: expectedString,
				file: expectedString,
				type: expectedString,
				description: expectedString
			}));
		}
	});
	
});
