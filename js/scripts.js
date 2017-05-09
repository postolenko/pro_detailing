$(document).ready(function() {

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // -----------------------------------------------

	var topCoorTableHeader;
	var coorTop;
	var coorBottom;

	// ----------------------

	var indexTableH;
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

    	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    	// --------------------------------------------------------------

    	getOrnamentHWidth();

    	getRespMainNavHeight();


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

	    });

	    getOrnamentHWidth();

	});

	// --------------------------------------------------------------

    $(function() {

        $(".thumbnail.service").bind({
          mouseenter: function() {

            $(this).toggleClass('hover');

          },
          mouseleave: function() {
           
            $(this).toggleClass('hover');

          }

        });

     });

	// ------------------------------------

	// $(".thumbnail.service").mouseenter(function(serviceEvent) {

	// 	console.log(serviceEvent);
	// 	// this.classList.toggle('hover');
	// 	$(this).css({
	// 		"background" : "red"
	// 	});
	// });

	// $(".thumbnail.service").mouseleave(function(serviceEvent) {

	// 	console.log(serviceEvent);
	// 	// this.classList.toggle('hover');
	// 	$(this).css({
	// 		"background" : "pink"
	// 	});
	
	// });

	// ------------------------------------

	$(function() {

		$(".resp-btn-box").click(function() {

			if( $(".main-nav").is(":hidden") ) {

				$(".main-nav").fadeIn(500);

				$(this).addClass("active");

				getRespMainNavHeight();

			} else {

				$(".main-nav").fadeOut(500);

				$(this).removeClass("active");

			}

		});

		$(this).keydown(function(eventObject){
	        if (eventObject.which == 27) {
	            
	            $(".main-nav").fadeOut(500);
	            $(".resp-btn-box").removeClass("active");

	         }
        });

	});

	function getRespMainNavHeight() {
		$(".main-nav").css({
			"height" : $(window).height() - $(".header").height() + "px",
			"top" : $(".header").height() + "px"
		});
	}

    // ------------------------------------

    function getOrnamentHWidth() {

    	for( indexTableH = 0; indexTableH <= $(".ornament-h").length - 1; indexTableH++ ) {

    		HCellWidth = $(".ornament-h:eq("+ indexTableH +") .h-cell").width();

			ornamentWidth = ( $(".ornament-h:eq("+ indexTableH +")").width() - HCellWidth ) / 2;

			$(".ornament-h:eq("+ indexTableH +") .left-ornament").width(ornamentWidth);
			$(".ornament-h:eq("+ indexTableH +") .right-ornament").width(ornamentWidth);

		}

    }

    // ------------------------------------

    function getHeaderStyle() {

    	if( $(".content section").hasClass("promo-section") ) {

    		topCoor = $(".promo-section").height();

    	} else {

    		topCoor = $(".header").height()

    	}

		if( $(window).scrollTop() >= topCoor ) {

    		$(".header").addClass("main-page-header");

    	} else {

    		$(".header").removeClass("main-page-header");

    	}

    }

	// ------------------------------------

	function getTableHeaderPosition() {

		if( $(".tables-box").length > 0 && bodyWidth > 1024) {

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
