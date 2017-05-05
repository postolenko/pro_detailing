$(document).ready(function() {

	getTableHeaderPosition();

	getHeaderStyle();

	// ---------------------------------------

	$(".wrapper").css({"min-height" : $(window).height() + "px"});

    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    // $(function() {

    // 	$("section").each(function() {

	   //  	$(this).css({
	   //  		"padding-top" : $(".header").outerHeight(true) + "px"
	   //  	});

    // 	});

    // });

    // ---------------------------------------

    $(window).resize(function() {

    	$(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

     //    $("section").each(function() {

	    // 	$(this).css({
	    // 		"padding-top" : $(".header").outerHeight(true) + "px"
	    // 	});

    	// });

    	$(".center-block").height( $(window).height() - $(".header").height() - $(".footer").height());

    	// --------------------------------------------------------------


    });

    $(document).scroll( function() {

    	getTableHeaderPosition();

    	getHeaderStyle();

    });

    // -------------------

    $(function() {

    	$(".center-block").height( $(window).height() - $(".header").height() - $(".footer").height());

    });

    // -------------------

    $(function() {

    	$(".current-slide").text("1");

    	$(".append-arrows .count-slides").text( $(".testimonial-slider .slide").length );

    });

    // -----------------------------------------------


 //    $(".services-thumbnails .thumbnail").bind({
	// 	mouseenter: function() {			
	// 		$(".services-thumbnails .thumbnail").css({"z-index" : "1"});
	// 		$(this).css({"z-index" : "2"});
	// 	},
	// 	mouseleave: function() {

	// 		// setTimeout(function() {
	// 		// 	$(".services-thumbnails .thumbnail").css({"z-index" : "1"});
	// 		// }, 700);

	// 	}
	// });

	$(".services-thumbnails .thumbnail").mouseenter(function() {

		$(".services-thumbnails .thumbnail").css({"z-index" : "1"});
		$(this).css({"z-index" : "2"});

	});

	$(".services-thumbnails .thumbnail").mouseleave(function() {
		
		setTimeout(function() {
			$(this).css({"z-index" : "1"});
		}, 1000);

	});

    // ------------------------------------

    function getHeaderStyle() {

    	if( $(".wrapper").hasClass("main-page") && $(window).scrollTop() >= $(".promo-section").height() ) {

    		$(".header").addClass("main-page-header");

    	} else {

    		$(".header").removeClass("main-page-header");

    	}

    }

	// ------------------------------------

	function getTableHeaderPosition() {

		var topCoorTableHeader = $(window).scrollTop() + $(".header").height();

		var coorTop = $(".tables-box").offset().top;

		var coorBottom = $(".tables-box").offset().top + $(".tables-box").height();

		if(topCoorTableHeader >= coorTop && topCoorTableHeader <= coorBottom ) {

			if( $(".table-header-box").hasClass("fixed_position") ) {

				return true;

			} else {

				$(".table-header-box").addClass("fixed_position");

				$(".table-header-box").css({"top" : $(".header").height() + "px"});

				$(".table-header-box + .row").css({"margin-top" : $(".table-header-box").height() + "px"});

			}

		} else {

			if( $(".table-header-box").hasClass("fixed_position") ) {

				$(".table-header-box").removeClass("fixed_position");

				$(".table-header-box").css({"top" : 0 + "px"});

				$(".table-header-box + .row").css({"margin-top" : 0 + "px"});
			}
		}

	}


});
