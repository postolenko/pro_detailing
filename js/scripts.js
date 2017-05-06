$(document).ready(function() {

	var topCoorTableHeader;
	var coorTop;
	var coorBottom;

	// ----------------------

	var ornamentWidth;
	var HCellWidth;

	// ----------------------

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

    	getOrnamentHWidth();


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

    // ------------------------------------

	$(function() {

	    $(".ornament-h").each(function() {
	    
			$(this).prepend("<span class='left-ornament'></span>");

			$(this).append("<span class='right-ornament'></span>");

			// getOrnamentHWidth();

	    });

	    getOrnamentHWidth();

	});

    // ------------------------------------

    function getOrnamentHWidth() {

    	for(var indexTableH = 0; indexTableH <= $(".ornament-h").length - 1; indexTableH++) {

    		HCellWidth = $(".ornament-h:eq("+ indexTableH +") .h-cell").width();

			ornamentWidth = ( $(".ornament-h:eq("+ indexTableH +")").width() - HCellWidth ) / 2;

			$(".ornament-h:eq("+ indexTableH +") .left-ornament").width(ornamentWidth);
			$(".ornament-h:eq("+ indexTableH +") .right-ornament").width(ornamentWidth);

		}

    }

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

		if( $(".tables-box").length > 0) {

			topCoorTableHeader = $(window).scrollTop() + $(".header").height();

			coorTop = $(".tables-box").offset().top;

			coorBottom = $(".tables-box").offset().top + $(".tables-box").height();

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

	}


});
