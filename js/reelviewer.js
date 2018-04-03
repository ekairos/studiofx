$(document).ready(function() {

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