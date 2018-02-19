$(function() {
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true
      }
    },
  ]
});

 $('.carousel-services').slick({
 	dots: true,
  infinite: true,
  speed: 500,
  fade: true,
 });

 $('.top-btn').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
  });


  $('.single-info-apps-1-slider').slick({
 		slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
      	arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 	}); 
 	 $('.single-info-content-slider').slick({
 		slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
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


   $('.accordion-header').click(function(event) {
   	$(this).toggleClass('active');
   	$(this).next().toggleClass('active');;
   });

$('.services-menu').click(function(event) {
  $(this).toggleClass('active');
});


});
