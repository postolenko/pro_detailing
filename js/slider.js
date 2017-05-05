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

		// ----------------------------------

		var sliderName;
		var controlsParent;

		// ----------------------------------

		// getStyleParameters();


	$(".gallery-pagination-content .count-slides").text(countSlides);

	$(".gallery-arrow.next").click(function() {

		controlsParent = $(this).parent($(".gallery-pagination"));

		sliderName = controlsParent.attr("data-slider-name");

		nextSlide(sliderName);

	});

	$(".gallery-arrow.prev").click(function() {

		controlsParent = $(this).parent($(".gallery-pagination"));

		sliderName = controlsParent.attr("data-slider-name");

		prevSlide(sliderName);

	});

	// ------------------------------------

	$(function() {

		var indexSlideAttr;

		$(".gallery-slider .slide").click(function() {

			var slideParent = $(this).parent($(".gallery-slider"));

			var sliderName = slideParent.attr("data-slider-name");

			console.log(sliderName);

			indexSlideAttr = $(this).attr("data-index");

			$(".gallery-slide-photos[data-slider-name = '" + sliderName + "']").fadeIn(300);

			$(".gallery-slide-photos[data-slider-name = '" + sliderName + "'] .slide-photos[data-slide-index = '"+ indexSlideAttr +"']").fadeIn(300);

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

	function nextSlide(sliderName) {

		var slideParent = $( "[data-slider-name = '" + sliderName + "'] .slide:eq("+ 0 +")").parent($(".gallery-slider"));

		$( "[data-slider-name = '" + sliderName + "'] .slide:eq("+ 0 +")").animate({"opacity" : .01 }, 400);		

		setTimeout(function() {

			$( "[data-slider-name = '" + sliderName + "'] .slide:eq("+ 0 +")").appendTo(slideParent);

		}, 400);

		setTimeout(function() {

			getStyleParameters(sliderName);
			
		}, 400);

		setTimeout(function() {

			$( "[data-slider-name = '" + sliderName + "'] .slide:eq("+ ( countSlides - 1 ) +")").animate({
				"opacity" : maxOpacityVal
			}, 400);

			getSlideInfo(sliderName);

		}, 500);		

	}

	function prevSlide(sliderName) {

		var slideParent = $( "[data-slider-name = '" + sliderName + "'] .slide:eq("+ 0 +")").parent($(".gallery-slider"));

		$("[data-slider-name = '" + sliderName + "'] .slide:eq("+ ( countSlides - 1 ) +")").animate({"opacity" : .01 }, 400);		

		setTimeout(function() {			

			$("[data-slider-name = '" + sliderName + "'] .slide:eq("+ ( countSlides - 1 ) +")").prependTo(slideParent);

		}, 400);

		setTimeout(function() {

			getStyleParameters(sliderName);

			$("[data-slider-name = '" + sliderName + "'] .slide:eq("+ 0 +")").animate({"opacity" : 1}, 400);

			getSlideInfo(sliderName);

		}, 400);

	}

	$(function() {

		$(".gallery-slider").each(function() {

			sliderName = $(this).attr("data-slider-name");

			getStyleParameters(sliderName);

		});

	});

	function getStyleParameters(sliderName) {

		leftPosition = minOffsetLeftVal;
		scaleVal = maxScaleVal;
		opacityVal = maxOpacityVal;
		zIndexVal = countSlides;

		for( indexSlide = 0; indexSlide <= countSlides - 1; indexSlide++) {

			$("[data-slider-name = '" + sliderName + "'] .slide:eq("+ indexSlide +")").css({
				"left" : leftPosition + "%",
				"transform" : "scale("+ scaleVal + ")",
				"z-index" : zIndexVal
			});

			$("[data-slider-name = '" + sliderName + "'] .slide:eq("+ indexSlide +") .img-box").css({
				"opacity" : opacityVal
			});		

			leftPosition += stepLeft;
			scaleVal -= stepScale;
			opacityVal -= stepOpacity;
			zIndexVal--;

		}

	}

	function getSlideInfo(sliderName) {

		var slideInfo = $("[data-slider-name = '" + sliderName + "'] .slide:eq("+ 0 +") .slide-info").html();
		var slideIndex = $("[data-slider-name = '" + sliderName + "'] .slide:eq("+ 0 +")").attr("data-index");

		$(".slide-info-append[data-slider-name = '" + sliderName + "']").html(slideInfo);
		$("[data-slider-name = '" + sliderName + "'] .current-slide").text(slideIndex);

	}


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


});