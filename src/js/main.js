$(document).ready(function () {
	$('.slider-news').slick({
		slidesToShow: 3,
		centerMode: true,
		arrows: true,
		dots: true,

		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	})
})

$(document).ready(function() {
	$('.slick-index').slick({
		arrows: false,
		dots: false,
		speed: 900,
		autoplay: true,
		infinity: true
	})
})

$(document).ready(function () {
	$('.burger').on('click', function () {
		$(this).toggleClass('active');
		$('.mobile-menu').toggleClass('active');
	})
})


$(window).scroll(function() {
	$('.mobile-menu').removeClass('active');
	$('.burger').removeClass('active');
})