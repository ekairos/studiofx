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
		expect($scope.gallerytvc.length).toEqual(5);
		expect($scope.gallerymgx.length).toEqual(1);
		expect($scope.galleryAll.length).toEqual(10);
	});

	it('should read galleries item lists', function() {
			// custom matcher from jasmin-expect
		expect($scope.gallery3d).toBeArrayOfObjects();
		expect($scope.gallerytvc).toBeArrayOfObjects();
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

	it('should load clicked image as hero', function() {
		var target3 = {
			name: "Arkangels",
			file: "superpuma",
			type: "3d",
			description: "3D Models and animations for helicopter pilots and mecanics e-learning"
		};
		$scope.loadViewer(3);
		expect($scope.hero).toEqual(target3);
	});
	
});
