describe('work page tests - ', function() {

	beforeAll(function() {
			// navigate to work page
		browser.get('/');
		browser.sleep(500);
		browser.setLocation('/work');
		browser.sleep(500);
	});
		
	describe('gallery filter - ', function() {

		beforeEach(function() {
			this.items = $$('figure.thumb');
			this.button3d = $$('#show3d');
			this.buttonTvc = $$('#showTvc');
			this.buttonMgx = $$('#showMgx');
			this.buttonAll = $$('#showAll');
		});

		it('should show full gallery on laod', function() {

			expect(this.items.count()).toEqual(11);
		});
			// when click/touch 3d button
		it('should show show only 3d items', function() {
			this.button3d.click();
			browser.sleep(200);
			expect(this.items.count()).toEqual(4);
		});
			// when click/touch tvc button
		it('should show show only tvc items', function() {
			this.buttonTvc.click();
			browser.sleep(200);
			expect(this.items.count()).toEqual(5);
		});
			// when click/touch mgx button
		it('should show show only mgx items', function() {
			this.buttonMgx.click();
			browser.sleep(200);
			expect(this.items.count()).toEqual(2);
		});
			// when click/touch All button
		it('should show show only all items', function() {
			this.buttonAll.click();
			browser.sleep(200);
			expect(this.items.count()).toEqual(11);
		});
	});

	describe('viewer - ', function() {

		it('should be hidden on page load', function() {
				// modal should be hidden
			var viewer = element(by.id('viewer'));
			expect(viewer.isDisplayed()).toBe(false);
		});

		it('should show on image click', function () {
			$$('img').then(function(thumbs) {
				thumbs[2].click();
			});
			browser.sleep(2000);
				// modal should show
			var viewer = element(by.id('viewer'));
			expect(viewer.isDisplayed()).toBe(true);
		});

		it('should hide on close button', function() {
			$$('.modal-content button').then(function(x) {
				x[0].click();
			});
			browser.sleep(500);
			var viewer = element(by.id('viewer'));
				// modal should hide
			expect(viewer.isDisplayed()).toBe(false);
		});
	});
});
