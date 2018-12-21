$(document).ready(function() {

		// reel viewer
	var demo = document.getElementById("heroVid");

		// change video resolution
	var sizes = {
		"sd": "assets/gallery/reel_sd.mp4",
		"hd": "assets/gallery/reel_720p.mp4"
	}
	
	function changeVid(size) {
		demo.setAttribute("src", sizes[size]);
		$(".btn-group button").toggleClass("active");
	}

	$("#sd").on('click', function() {
		if (demo.getAttribute("src") != sizes['sd']) {
			changeVid('sd');
		}
	})
	$("#hd").on('click', function() {
		if (demo.getAttribute("src") != sizes['hd']) {
			changeVid('hd');
		}
	})
	
		// Positioning the viewer
	function positionViewer() {
		var winHeight = $(window).height();
		var winWidth = $(window).width();

		var vidMaxHeight = $(window).width() / 1.77;

		var diffPos = (winHeight - vidMaxHeight) / 2;

			// positioning
		var topPos = parseInt(diffPos < 0 ? 0 : diffPos);
		$('.demo-viewer-content').css('top', topPos + 'px');
	
			// max sizes
		var maxWidth = Math.round((winHeight * 1.77));
		$('.demo-viewer-content').css("max-width", maxWidth + 'px');
	}

		// position on page load
	positionViewer();

	$(window).on('resize', positionViewer);

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
