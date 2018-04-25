describe('reelViewer test - ', function() {
	describe('viewer size - ', function() {
		it('should scale within browser window size', function() {
				// create spy
			var viewer = jasmine.createSpyObj(window, ['positionViewer']);
			spyOn(window, 'onresize');

			$(window).on('resize', viewer.positionViewer);
			$(window).trigger('resize');

			expect(window.onresize).toHaveBeenCalled();
			expect(viewer.positionViewer).toHaveBeenCalled();
		});
	});
});
