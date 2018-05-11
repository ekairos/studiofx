$(document).ready(function(){
	console.log('document is ready for galleryloader');

	$('.thumb img').click(function(){

		console.log('img clicked');
		var thisPic = $(this).attr('alt');
		console.log(thisPic);

		var imgSrc = $(this).attr('src');
	//	console.log(imgSrc);
		$('#heroPic').attr('src', imgSrc);

		var picHeight = parseInt($(this).css('height'));
		console.log('initial pic height : ', picHeight);
		var picWidth = parseInt($(this).css('width'));
		console.log('initial pic width : ', picWidth);
		
		var picRatio = picHeight / picWidth;
		console.log('picRatio is ', picRatio);

		function resizeModal() {
			var winHeight = parseInt($(window).height());
			var winWidth = parseInt($(window).width());

			console.log('winHeight = ' + winHeight);
			// img take 100% window width
			picHeight = winWidth * picRatio;
			console.log('pic height by ratio = ' + picHeight);

			var diffPos = (winHeight - picHeight) / 2;
			console.log('diffPos = ' + diffPos);

			var topPos = parseInt(diffPos < 0 ? 0 : diffPos);
			console.log("top Position = " + topPos);
			
			$('#viewer').css('top', topPos + 'px').css('max-height', winHeight);

		};

		resizeModal();
		
		// $('#viewer.modal').on('show.bs.modal', resizeModal);
		
		$('#viewer').modal('show');

		$(window).on('resize', resizeModal);
	});

});
