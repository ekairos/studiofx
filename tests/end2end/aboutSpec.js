describe('About Template - ', function() {

	beforeAll(function() {
			// navigate to '/about'
		browser.get('/');
		browser.sleep(600);
		browser.setLocation('/about');
		browser.sleep(600);
			// set browser to mobile screen device
		var width = 360;
		var height = 640;
		browser.driver.manage().window().setSize(width, height);
	});
	
	describe('Submenus - ', function() {

		beforeEach(function() {
			this.submenus = $$('.nav-item');
			this.aUs = $$('#linkUs');
			this.aVision = $$('#linkVision');
			this.aWork = $$('#linkWork');
			this.aTeam = $$('#linkTeam');
			this.activLink = ['nav-item active'];
			this.inactivLink = ['nav-item'];
		});

		it('should be active on About Us', function() {
			expect(this.aUs.getAttribute('class')).toEqual(this.activLink);
			expect(this.aVision.getAttribute('class')).toEqual(this.inactivLink);
			expect(this.aWork.getAttribute('class')).toEqual(this.inactivLink);
			expect(this.aTeam.getAttribute('class')).toEqual(this.inactivLink);
		});

		it('should follow to Our Vision', function() {
			expect(this.aVision.getAttribute('class')).toEqual(this.inactivLink);
			this.aVision.click();
			browser.sleep(500);
			expect(this.aVision.getAttribute('class')).toEqual(this.activLink);
			expect(this.aUs.getAttribute('class')).toEqual(this.inactivLink);
			expect(this.aWork.getAttribute('class')).toEqual(this.inactivLink);
			expect(this.aTeam.getAttribute('class')).toEqual(this.inactivLink);
		});

		it('should follow to Our Work', function() {
			expect(this.aWork.getAttribute('class')).toEqual(this.inactivLink);
			this.aWork.click();
			browser.sleep(500);
			expect(this.aWork.getAttribute('class')).toEqual(this.activLink);
			expect(this.aUs.getAttribute('class')).toEqual(this.inactivLink);
			expect(this.aVision.getAttribute('class')).toEqual(this.inactivLink);
			expect(this.aTeam.getAttribute('class')).toEqual(this.inactivLink);
		});

		it('should follow to Our Team', function() {
			expect(this.aTeam.getAttribute('class')).toEqual(this.inactivLink);
			this.aTeam.click();
			browser.sleep(500);
			expect(this.aTeam.getAttribute('class')).toEqual(this.activLink);
			expect(this.aUs.getAttribute('class')).toEqual(this.inactivLink);
			expect(this.aVision.getAttribute('class')).toEqual(this.inactivLink);
			expect(this.aWork.getAttribute('class')).toEqual(this.inactivLink);
		});

	});

});
