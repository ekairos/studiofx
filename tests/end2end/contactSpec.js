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
		});

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
			browser.sleep(1000);
			expect(this.submitButton.isEnabled()).toBe(true);

			expect(this.name.getAttribute('value')).toBe('My Name');
			expect(this.email.getAttribute('value')).toBe('me@mail.net');
			expect(this.queryType.getAttribute('value')).toBe('string:Career');
			expect(this.msg.getAttribute('value')).toBe('A short message !');
		});

		describe('modal - ', function() {

			beforeEach(function() {
				this.modal = element(by.id('formResult'));
				// var modal = element(by.id('formResult'));
				this.modalVis = this.modal.getCssValue('display');
			});
			it('shouldn\'t drop modal without submission', function() {
				// expect modal to be hidden
				expect(this.modal.getCssValue('display')).toBe('none');
			});

			it('should show modal once query is submidted', function() {
				// form	is already filled			
				// submit query
				this.submitButton = element(by.css('.btn[type="submit"]'));
				this.submitButton.click();
				browser.sleep(1000);

				// expect modal to be shown / ie not.hidden
				expect(this.modal.getCssValue('display')).toBe('block');
			});

			it('should contain user\'s data and query message', function() {
				var bindName = element(by.binding('contact.name')).getText();
				var bindEmail = element(by.binding('contact.email')).getText();
				var bindMessage = element(by.binding('contact.message')).getText();

				expect(bindName).toBe(this.name.getAttribute('value'));
				expect(bindEmail).toBe(this.email.getAttribute('value'));
				expect(bindMessage).toBe(this.msg.getAttribute('value'));
			});

			it('should close modal with close button', function() {
				// select button
				var closeButton = $$('button[data-dismiss="modal"]');
				// click button
				closeButton.click();
				// wait for modal transition to complete
				browser.sleep(1000);

				expect(this.modal.getCssValue('display')).toBe('none');
			});
		}); /* / modal spec block */
	});
});
