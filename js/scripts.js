$(document).ready(function() {

	getTableHeaderPosition();

    $(window).resize(function() {


        // $(".wrapper").css({"min-height" : $(window).height() + "px"});

        // $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // --------------------------------------------------------------

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


    // $(function() {

    //     $(".wrapper").css({"min-height" : $(window).height() + "px"});

    //     $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    // });

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


 //    $(".services-thumbnails .thumbnail").bind({
	// 	mouseenter: function() {

	// 		$(this).addClass("rotate_front");
	// 		$(this).delay(300).addClass("rotate_back");

	// 	},
	// 	mouseleave: function() {

	// 		$(this).delay(300).removeClass("rotate_front");
	// 		$(this).removeClass("rotate_back");

	// 	}
	// });


    // $(function() {

    // 	$(".slide-photos").css({ "height" : ( $(window).height() - 40 ) + "px" });

    // });


 //    $(".services-thumbnails .thumbnail .front").bind({
	// 	mouseenter: function() {
	// 		$(this).css({"transform" : "rotateY("+ 90 + "deg)"}, 350);

	// 		// $(this).children($(".back")).delay(350).animate({"transform" : "rotateY("+ 180 + "deg)"}, 350);
	// 	},
	// 	mouseleave: function() {
	// 		$(this).css({"transform" : "rotateY("+ 0 + "deg)"}, 350);

	// 		// $(this).children($(".back")).delay(350).animate({"transform" : "rotateY("+ 90 + "deg)"}, 350);
	// 	}
	// });

	// $(".services-thumbnails .thumbnail").mouseenter(function() {
	// 	$(this).css({"transform" : "rotateY("+ 90 + "deg)"}, 350);

	// 	// $(this).children($(".back")).delay(350).animate({"transform" : "rotateY("+ 180 + "deg)"}, 350);
	// });

	// $(".services-thumbnails .thumbnail").mouseleave(function() {
	// 	$(this).css({"transform" : "rotateY("+ 0 + "deg)"}, 350);

	// 	// $(this).children($(".back")).delay(350).animate({"transform" : "rotateY("+ 180 + "deg)"}, 350);
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
