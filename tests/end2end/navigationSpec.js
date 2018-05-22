describe('index page - ', function() {

	beforeEach(function() {
			// open browser to landing
		browser.get('/');
			// set browser to mobile screen device
		var width = 780;
		var height = 820;
		browser.driver.manage().window().setSize(width, height);
	});

	describe('navigation test', function() {

		beforeEach(function() {
			baseUrl = 'http://localhost:8080';
		});

		it('should navigate to about page', function() {

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
