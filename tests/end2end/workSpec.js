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
		beforeEach(function() {
			this.viewer = element(by.id('viewer'));
		});

		it('should be hidden on page load', function() {
			// modal should be hidden
			expect(this.viewer.getCssValue('display')).toBe('none');
		});

		it('should show on image click', function () {
			$$('#gallery img').then(function(thumbs) {
				thumbs[1].click();
			});
			browser.sleep(1000);
				// modal should show
			expect(this.viewer.getCssValue('display')).toBe('block');
		});

		it('should close on x button', function() {
			$$('#viewer button').then(function(x) {
				x[0].click()
			});
			browser.sleep(1000);
				// modal should hide
			expect(this.viewer.getCssValue('display')).toBe('none');
		});
	});
});
