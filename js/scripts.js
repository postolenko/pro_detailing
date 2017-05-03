$(document).ready(function() {

	getTableHeaderPosition();

    $(window).resize(function() {

        $("section").each(function() {

	    	$(this).css({
	    		"padding-top" : $(".header").outerHeight(true) + "px",
	    		"padding-bottom" : $(".footer").outerHeight(true) +"px"
	    	});

    	});

    	$(".center-block").height( $(window).height() - $(".header").height() - $(".footer").height());

    	// --------------------------------------------------------------


    });

    $(document).scroll( function() {

    	getTableHeaderPosition();

    });

    $(function() {

    	$("section").each(function() {

	    	$(this).css({
	    		"padding-top" : $(".header").outerHeight(true) + "px",
	    		"padding-bottom" : $(".footer").outerHeight(true) +"px"
	    	});

    	});

    });

    $(function() {

    	$(".center-block").height( $(window).height() - $(".header").height() - $(".footer").height());

    });

    $(function() {

    	$(".current-slide").text("1");

    	$(".append-arrows .count-slides").text( $(".testimonial-slider .slide").length );

    });

    // -----------------------------------------------


    $(".services-thumbnails .thumbnail").bind({
		mouseenter: function() {

			$(this).addClass("rotate_front");
			$(this).delay(300).addClass("rotate_back");

		},
		mouseleave: function() {

			$(this).delay(300).removeClass("rotate_front");
			$(this).removeClass("rotate_back");

		}
	});


    // $(function() {

    // 	$(".slide-photos").css({ "height" : ( $(window).height() - 40 ) + "px" });

    // });


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

			}

		} else {

			if( $(".table-header-box").hasClass("fixed_position") ) {

				$(".table-header-box").removeClass("fixed_position");

				$(".table-header-box").css({"top" : 0 + "px"});
			}
		}

	}


});
