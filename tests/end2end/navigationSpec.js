describe('index page - ', function() {

	// set browser to mobile screen device
	beforeEach(function() {
		var width = 768;
		var height = 820;
		browser.driver.manage().window().setSize(width, height);
	});

	describe('navigation test', function() {

		beforeEach(function() {
			baseUrl = 'http://localhost:8080';
		});

		it('should navigate to about page', function() {

			browser.get('/');
			$$('#navMenu li').then(function(links) {
				links[0].click();
			});
			
			var location = browser.getCurrentUrl();

			expect(location).toEqual(baseUrl + '/about');
		});

		it('should navigate to work page', function() {

			$$('#navMenu li').then(function(links) {
				links[1].click();
			});
			var location = browser.getCurrentUrl();

			expect(location).toEqual(baseUrl + '/work');
		});

		it('should navigate to contact page', function() {

			$$('#navMenu li').then(function(links) {
				links[2].click();
			});
			var location = browser.getCurrentUrl();

			expect(location).toEqual(baseUrl + '/contact');
		});

		it('should navigate back to home page', function() {

			$$('#navLogo').click();

			var location = browser.getCurrentUrl();

			expect(location).toEqual(baseUrl + '/');
		});
	});

});
