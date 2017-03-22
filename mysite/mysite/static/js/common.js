$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {

			$(".popup-with-zoom-anim").trigger('click');

			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();

			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//Option of mobile-menu
	 $("#mobile-nav").mmenu({
    	extensions:['widescreen','theme-white','effect-menu-slide','pagedim-black'],
    	navbar:{
    		title: "Меню"
    	}
    });
	//Hamburger click handler
	var mmApi = $("#mobile-nav").data( "mmenu" );

 	mmApi.bind("closed",function(){
 		$(".toggle-mnu .sandwich").removeClass("active");
 	});

 	//Insert clone of main menu in nav where class = mobile-menu
 	var mobileUL = $(".top-nav ul li").clone();
		 $("#mobile-nav ul").append(mobileUL);
		 
   	 //Headhesive
	var header = new Headhesive('.top-nav');

	$(".toggle-mnu").click(function() {

		$(".sandwich").toggleClass("active");
		mmApi.open();

		return false;
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	/*********** mask *********/

	$(".phone-number").mask("+7 (999) 999-99-99");

	/*********** mask *********/

	/******* popups *********/


	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	/******* popups *********/

	/**********  sliders ***********/

	$(".top-nav a[href*='#'], .footer-nav a[href*='#'], #mobile-nav a[href*='#']").mPageScroll2id({
		offset: 56
	});
	$(".top-nav a[href*='#']").click(function(){
		var top_nav = $(".top-nav ul li");
		var top_headhesive = $(".headhesive ul li");
		var current_index = $(this).parent().index();

		$($(top_nav)[current_index]).find("a").addClass("active");
		$($(top_headhesive)[current_index]).find("a").addClass("active");
	});

	$('.factory-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		mouseDrag: false,
		smartSpeed: 2000,
		autoplayTimeout: 2030,
		autoplay: true,
		autoWidth: true,
		responsive:{
			0:{
				items:3
			},
			400:{
				items:4
			},
			600:{
				items:5
			},
			1000:{
				items:10
			}
		}
	});

	
	$('.second-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		smartSpeed: 2000,
		autoplayTimeout: 2030,
		dots: false,
		margin: 0,
		autoWidth: true,
		mouseDrag: false,
		autoplay: true,
		responsive:{
			0:{
				items:2
			},
			400:{
				items:3
			},
			600:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});

	/***************************************/

});
