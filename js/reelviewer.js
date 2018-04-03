$(document).ready(function() {

	function positionViewer() {
		var winHeight = $(window).height();
		var winWidth = $(window).width();
	//	console.log('win height = ' + winHeight);
	//	console.log(winWidth);

		var vidMaxHeight = $(window).width() / 1.77;

		var diffPos = (winHeight - vidMaxHeight) / 2;
	//	console.log('diffPosition = ' + parseInt(diffPos));

			// positioning
		var topPos = parseInt(diffPos < 0 ? 0 : diffPos);
	//	console.log("top Position = " + topPos);
		$('#viewer').css('top', topPos + 'px');
	
			// max sizes
		var maxWidth = Math.round((winHeight * 1.77));
		$('#viewer').css("max-width", maxWidth + 'px');
	};
	//	positiong for first modal drop
	positionViewer();

	//	resize and scale for window resizing
	$(window).on('resize', positionViewer);

	// reel viewer
	$('#viewer').on('hidden.bs.modal', function() {
		var reel = document.getElementById("heroVid");
		console.log('modal is hidden, pausing video');
		reel.pause();
	});
	$('#viewer').on('shown.bs.modal', function() {
		var reel = document.getElementById('heroVid');
		console.log('modal is shown, resuming video');
		reel.play();
	});
})