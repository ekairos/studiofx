$(document).ready(function() {

	function positionViewer() {
		var winHeight = $(window).height();
		var winWidth = $(window).width();
	//	console.log(winWidth);

		var vidMaxHeight = $(window).width() / 1.77;

		var diffPos = (winHeight - vidMaxHeight) / 2;

			// positioning
		var topPos = parseInt(diffPos < 0 ? 0 : diffPos);
		$('#demoViewer').css('top', topPos + 'px');
	
			// max sizes
		var maxWidth = Math.round((winHeight * 1.77));
		$('#demoViewer').css("max-width", maxWidth + 'px');
	}

	positionViewer();

	$(window).on('resize', positionViewer);

		// reel viewer
	var demo = document.getElementById("heroVid");

	$('#demoViewer').on('hidden.bs.modal', function() {
		console.log('modal is hidden, pausing video');
		demo.pause();
	});
	$('#demoViewer').on('shown.bs.modal', function() {
		console.log('positioning viewer');
		positionViewer();
		console.log('modal is shown, resuming video');
		demo.play();
	});
});
