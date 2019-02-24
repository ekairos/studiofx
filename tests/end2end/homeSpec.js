describe('work page tests - ', function() {

	beforeAll(function() {
			// navigate to work page
		browser.get('/');
		browser.sleep(500);
	});
		
	describe('viewer - ', function() {
		var viewer = element(by.id('demoViewer'));

		beforeAll(function() {
			var width = 360;
			var height = 640;
			browser.driver.manage().window().setSize(width, height);
		});

		it('should be hidden on page load', function() {
				// modal should be hidden
			expect(viewer.isDisplayed()).toBe(false);
		});

		it('should show on reel icon click', function () {
			$$('.glyphicon-play').click();
			browser.sleep(1500);
				// modal should show
			expect(viewer.isDisplayed()).toBe(true);
		});

		it('should not display res buttons on mobile', function () {
				// mobile res should not display video size buttons
			expect(element(by.id('sd')).isDisplayed()).toBe(false);
			expect(element(by.id('hd')).isDisplayed()).toBe(false);
		});

		it('should hide on close button', function() {
			$$('.reel-header > button').then(function(x) {
				x[0].click();
			});
			browser.sleep(500);
				// modal should hide
			expect(viewer.isDisplayed()).toBe(false);
		});

		it('should display res buttons on larger display', function () {
				// change window size
			var width = 780;
			var height = 820;
			browser.driver.manage().window().setSize(width, height);

			$$('.glyphicon-play').click();
			browser.sleep(1500);
				// mobile res should not display video size buttons
			expect(element(by.id('sd')).isDisplayed()).toBe(true);
			expect(element(by.id('hd')).isDisplayed()).toBe(true);
		});
	});
});
