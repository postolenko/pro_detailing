"use strict"

$(document).ready(function() {

	// if($(".gallery-slider")) {

		// var slide = $(this).children($(".slide"));
		var countSlides = $(".gallery-slider .slide" ).length;

		console.log(countSlides);

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

	// }

	$(".gallery-pagination-content .count-slides").text(countSlides);

	$(".gallery-arrow.next").click(function() {

		nextSlide();

	});

	$(".gallery-arrow.prev").click(function() {

		prevSlide();

	});


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