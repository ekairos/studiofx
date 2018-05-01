describe('testing contact controller - ', function() {

	beforeEach(module('contactController'));

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		var contactCtr = $controller('ContactController', {$scope: $scope});
	}));
/*
	it('should read scope title', function() {
		expect($scope.title).toBe('Contact Page');
	});
*/
	describe('contact form - ', function() {

		beforeEach(function() {
			$scope.contact.name = 'Name';
			$scope.contact.email = 'me@mail.net';
			$scope.contact.query = $scope.queries[0];
			$scope.contact.message = 'A short message.';
		});

		it('should be loaded with general query by default', function() {
			expect($scope.contact.query).toBe('General query');
		});

		it('submiting form should provide answer', function() {
			expect($scope.querySent).not.toBeTruthy();
			$scope.sendQuery();
			expect($scope.querySent).toBeTruthy();
		});

		it('input fields should be sent on submission', function() {

			var  expectedString = jasmine.any(String);
			
			expect($scope.contact).toEqual(jasmine.objectContaining({
				name: expectedString,
				email: expectedString,
				query: expectedString,
				message: expectedString
			}));
		});
	});

});
