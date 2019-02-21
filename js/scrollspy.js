$(document).ready(function(){
	$('body').scrollspy({target: '.submenu', offset: 50});
	$('.submenu a').click(function(event) {
		// check link is not empty
		if (this.hash !== "") {
			// prevents default anchor behavior ( controller's reset & load )
			event.preventDefault();

			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 500);
		};
	});
});
