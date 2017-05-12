$(document).ready(function() {

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // -----------------------------------------------

    var tablesBoxIndex;
	var topCoorTableHeader;
	var coorTop;
	var coorBottom;

	// ----------------------

	var indexTableH;
	var ornamentWidth;
	var HCellWidth;

	// ----------------------	

	getHeaderStyle();

	getTableHeaderPosition();

	// ---------------------------------------

	$(".wrapper").css({"min-height" : $(window).height() + "px"});

    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    // ---------------------------------------

    $(window).resize(function() {

    	$(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    	$(".center-block").height( $(window).height() - $(".header").height() - $(".footer").height());

    	// --------------------------------------------------------------

    	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    	// --------------------------------------------------------------

    	getOrnamentHWidth();

    	getRespMainNavHeight();

    });

    $(document).scroll( function() {    	

    	getHeaderStyle();

    	getTableHeaderPosition();

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

	// ------------------------------------

	(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

	if(jQuery.browser.mobile == true) {

		$(".thumbnail.service").addClass("mobile");

	} else {

		$(".thumbnail.service").removeClass("mobile");

	}

	// ------------------------------------

	$(function() {

		$(".portfolio-slider-box").each(function() {

			var indePortfolioSlider = $(this).index(".portfolio-slider-box");
			var porfolioSlidesCount = $(".portfolio-slider:eq("+ indePortfolioSlider +") .slide").length;

			$(".portfolio-slider-box:eq("+ indePortfolioSlider +") .count-slides").text(porfolioSlidesCount);

		});

	});

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

			for(tablesBoxIndex = 0; tablesBoxIndex <= $(".tables-box").length - 1; tablesBoxIndex++ ) {

				topCoorTableHeader = $(window).scrollTop() + $(".header").height();

				coorTop = $(".tables-box:eq("+ tablesBoxIndex +")").offset().top;

				coorBottom = $(".tables-box:eq("+ tablesBoxIndex +")").offset().top + $(".tables-box:eq("+ tablesBoxIndex +")").height();

				if(topCoorTableHeader >= coorTop && topCoorTableHeader <= coorBottom ) {

					if( $(".tables-box:eq("+ tablesBoxIndex +") .table-header-box").hasClass("fixed_position") ) {

						return true;

					} else {

						$(".tables-box:eq("+ tablesBoxIndex +") .table-header-box").addClass("fixed_position");

						setTimeout(function() {

							$(".tables-box:eq("+ tablesBoxIndex +") .table-header-box").animate({"top" : $(".header").height() + "px"}, 350);
						
							$(".header").addClass("no_shadow");

						}, 440);

						$(".tables-box:eq("+ tablesBoxIndex +") .table-header-box + .row").css({"margin-top" : $(".tables-box:eq("+ tablesBoxIndex +") .table-header-box").height() + "px"});

					}

				} else {

					if( $(".tables-box:eq("+ tablesBoxIndex +") .table-header-box").hasClass("fixed_position") ) {

						$(".tables-box:eq("+ tablesBoxIndex +") .table-header-box").removeClass("fixed_position");

						$(".tables-box:eq("+ tablesBoxIndex +") .table-header-box").css({"top" : 0 + "px"});

						$(".header").removeClass("no_shadow");

						$(".tables-box:eq("+ tablesBoxIndex +") .table-header-box + .row").css({"margin-top" : 0 + "px"});
					}
				}

			}

		}

	}


});
