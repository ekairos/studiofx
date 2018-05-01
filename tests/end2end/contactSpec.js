describe('About tests - ', function() {
	describe('contact form - ', function() {
		// required form's field and submit button
		beforeEach(function() {
			this.name = element(by.model('contact.name'));
			this.email = element(by.model('contact.email'));
			this.queryType = element(by.model('contact.query'));
			this.msg = element(by.model('contact.message'));
			this.submitButton = element(by.css('.btn[type="submit"]'));
		});

		it('should eval true as true', function() {
			expect(true).toBe(true);
		})

		it('should send only valid forms', function() {
			browser.get('/');
			browser.setLocation('contact');
			browser.sleep(1000);
			browser.setLocation('contact#submitQueryButton');

			this.name.sendKeys("My Name");
			// form shouldn't be valid at this stage
			expect(this.submitButton.isEnabled()).toBe(false);

			this.email.sendKeys('me@mail.net');
			// form shouldn't be valid at this stage
			expect(this.submitButton.isEnabled()).toBe(false);
			
			$$('#queryList option').then(function(queries) {
				queries[1].click();
			});
			// form shouldn't be valid at this stage
			expect(this.submitButton.isEnabled()).toBe(false);

			this.msg.sendKeys('A short message !');
			// form should be valid now
			browser.sleep(2000);
			expect(this.submitButton.isEnabled()).toBe(true);

			expect(this.name.getAttribute('value')).toBe('My Name');
			expect(this.email.getAttribute('value')).toBe('me@mail.net');
			expect(this.queryType.getAttribute('value')).toBe('string:Career');
			expect(this.msg.getAttribute('value')).toBe('A short message !');
		});

	})
});
