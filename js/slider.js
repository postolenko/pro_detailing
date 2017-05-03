"use strict"

$(document).ready(function() {

		var countSlides = $(".gallery-slider .slide" ).length;

		var minOffsetLeftVal = 0;
		var minOpacityVal = .1;
		var minScaleVal = .74;

		var maxOffsetLeftVal = 22;
		var maxOpacityVal = 1;
		var maxScaleVal = 1;

		var stepLeft = ( maxOffsetLeftVal - minOffsetLeftVal ) / countSlides;
		var stepOpacity = ( maxOpacityVal - minOpacityVal ) / countSlides;
		var stepScale = ( maxScaleVal - minScaleVal ) / countSlides;

		var leftPosition = minOffsetLeftVal;
		var scaleVal = maxScaleVal;
		var opacityVal = maxOpacityVal;

		var leftPosition;
		var scaleVal;
		var opacityVal;
		var zIndexVal;

		var indexSlide = 0;

		getStyleParameters();


	$(".gallery-pagination-content .count-slides").text(countSlides);

	$(".gallery-arrow.next").click(function() {

		nextSlide();

	});

	$(".gallery-arrow.prev").click(function() {

		prevSlide();

	});

	// ------------------------------------

	$(function() {

		var indexSlideAttr;

		$(".gallery-slider .slide").click(function() {

			indexSlideAttr = $(this).attr("data-index");

			$(".gallery-slide-photos").fadeIn(300);

			$(".gallery-slide-photos .slide-photos[data-slide-index = '"+ indexSlideAttr +"']").fadeIn(300);

		});

		$(".gallery-slide-photos-bg, .close-gallery-slide-btn").click(function() {
			$(".gallery-slide-photos").fadeOut(300);
			$(".gallery-slide-photos .slide-photos[data-slide-index = '"+ indexSlideAttr +"']").fadeOut(300);
		});

        $(this).keydown(function(eventObject){
            if (eventObject.which == 27) {                
            	$(".gallery-slide-photos").fadeOut(300);
				$(".gallery-slide-photos .slide-photos[data-slide-index = '"+ indexSlideAttr +"']").fadeOut(300);
             }
        });

	});

	// ------------------------------------


	// $(function() {

	// 	var mouseDownCoor;
	// 	var mouseUpCoor;
	// 	var offsetMove;

	// 	$(".gallery-slider").bind({
	// 		mousedown: function(e) {
	// 			mouseDownCoor = e.screenX || e.pageX || e.clientX;
	// 		},
	// 		mouseup: function(e) {

	// 			mouseUpCoor = e.screenX || e.pageX || e.clientX;
	// 			offsetMove = mouseDownCoor - mouseUpCoor;

	// 			if(offsetMove <= -100 ) {					

	// 				prevSlide();

	// 			} else if( offsetMove >= 100 ) {

	// 				nextSlide();

	// 			}

	// 		}

	// 	});

	 	

	// });

	function nextSlide() {

		$(".gallery-slider .slide:eq("+ 0 +")").animate({"opacity" : .01 }, 400);

		setTimeout(function() {	

			$(".gallery-slider .slide:eq("+ 0 +")").appendTo($(".gallery-slider"));

		}, 400);

		setTimeout(function() {

			getStyleParameters();
			
		}, 400);

		setTimeout(function() {

			$(".gallery-slider .slide:eq("+ ( countSlides - 1 ) +")").animate({
				"opacity" : maxOpacityVal
			}, 400);

			getSlideInfo();

		}, 500);		

	}

	function prevSlide() {

		$(".gallery-slider .slide:eq("+ ( countSlides - 1 ) +")").animate({"opacity" : .01 }, 400);

		setTimeout(function() {			

			$(".gallery-slider .slide:eq("+ ( countSlides - 1 ) +")").prependTo($(".gallery-slider"));

		}, 400);

		setTimeout(function() {

			getStyleParameters();

			$(".gallery-slider .slide:eq("+ 0 +")").animate({"opacity" : 1}, 400);

			getSlideInfo();

		}, 400);

	}

	function getStyleParameters() {

		leftPosition = minOffsetLeftVal;
		scaleVal = maxScaleVal;
		opacityVal = maxOpacityVal;
		zIndexVal = countSlides;

		for( indexSlide = 0; indexSlide <= countSlides - 1; indexSlide++) {

			$(".gallery-slider .slide:eq("+ indexSlide +")").css({
				"left" : leftPosition + "%",
				"transform" : "scale("+ scaleVal + ")",
				"z-index" : zIndexVal
			});

			$(".gallery-slider .slide:eq("+ indexSlide +") .img-box").css({
				"opacity" : opacityVal
			});		

			leftPosition += stepLeft;
			scaleVal -= stepScale;
			opacityVal -= stepOpacity;
			zIndexVal--;

		}

	}

	function getSlideInfo() {

		var slideInfo = $(".gallery-slider .slide:eq("+ 0 +") .slide-info").html();
		var slideIndex = $(".gallery-slider .slide:eq("+ 0 +")").attr("data-index");

		$(".slide-info-append").html(slideInfo);
		$(".gallery-pagination-content .current-slide").text(slideIndex);

	}


});