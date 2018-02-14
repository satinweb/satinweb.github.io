$(function() {

 $('.carousel-services').slick({
 	dots: true,
  infinite: true,
  speed: 500,
  fade: true,
 });

 $('.hamburger').click(function (event) {
		event.preventDefault();
		$(this).toggleClass('is-active');
		$('.aside-nav').toggleClass('active');
		$('.aside-nav_content').addClass('active')
	});

   $('.to-call').magnificPopup({

  	type: 'inline',
    removalDelay: 300,
		mainClass: 'mfp-fade'

  });

});
