$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
$(".sandwich").click(function() {
	if ($(".menu-mobile").is(":hidden")) {
		$(".menu-mobile").slideDown(200);
		$(".menu-overlay").fadeIn(200);
		$(".header").addClass("active");
		$("sandwich").addClass("active");
	} else {
		$(".menu-mobile").slideUp(200);
		$(".menu-overlay").fadeOut(200);
		(".header").removeClass("active");
		$("sandwich").removeClass("active");
	}
});

$(".menu-overlay").click(function() {
	$(".menu-mobile").slideUp(200);
	$(".menu-overlay").fadeOut(200);
	(".header").removeClass("active");
	$("sandwich").removeClass("active");
});

	$(".pane-location__arrow").click(function() {
		$(".pane-location").toggleClass("active");
	});

	//слайдер

	$('.slider-rooms').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.873 11.3612C24.0477 11.3612 25 10.4089 25 9.23416C25 8.05943 24.0477 7.10713 22.873 7.10713H12.9146L14.3648 1.78955L1 9.50004L14.3648 17.2105L12.7696 11.3612H22.873Z" stroke="#7F7A76"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.12703 11.3612C1.9523 11.3612 1 10.4089 1 9.23416C1 8.05943 1.9523 7.10713 3.12703 7.10713H13.0854L11.6352 1.78955L25 9.50004L11.6352 17.2105L13.2304 11.3612H3.12703Z" stroke="#7F7A76"/></svg><div/>',
	});

	$('.slider-news').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.873 11.3612C24.0477 11.3612 25 10.4089 25 9.23416C25 8.05943 24.0477 7.10713 22.873 7.10713H12.9146L14.3648 1.78955L1 9.50004L14.3648 17.2105L12.7696 11.3612H22.873Z" stroke="#7F7A76"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.12703 11.3612C1.9523 11.3612 1 10.4089 1 9.23416C1 8.05943 1.9523 7.10713 3.12703 7.10713H13.0854L11.6352 1.78955L25 9.50004L11.6352 17.2105L13.2304 11.3612H3.12703Z" stroke="#7F7A76"/></svg><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
			]
		});

	$('.slider-reviews').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.873 11.3612C24.0477 11.3612 25 10.4089 25 9.23416C25 8.05943 24.0477 7.10713 22.873 7.10713H12.9146L14.3648 1.78955L1 9.50004L14.3648 17.2105L12.7696 11.3612H22.873Z" stroke="#7F7A76"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.12703 11.3612C1.9523 11.3612 1 10.4089 1 9.23416C1 8.05943 1.9523 7.10713 3.12703 7.10713H13.0854L11.6352 1.78955L25 9.50004L11.6352 17.2105L13.2304 11.3612H3.12703Z" stroke="#7F7A76"/></svg><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
			]
		});

		$('.slider-catalog').slick({
			arrows: false,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.873 11.3612C24.0477 11.3612 25 10.4089 25 9.23416C25 8.05943 24.0477 7.10713 22.873 7.10713H12.9146L14.3648 1.78955L1 9.50004L14.3648 17.2105L12.7696 11.3612H22.873Z" stroke="#7F7A76"/></svg><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.12703 11.3612C1.9523 11.3612 1 10.4089 1 9.23416C1 8.05943 1.9523 7.10713 3.12703 7.10713H13.0854L11.6352 1.78955L25 9.50004L11.6352 17.2105L13.2304 11.3612H3.12703Z" stroke="#7F7A76"/></svg><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						
					}
				}
				]
			});

			$('.slider-for').slick({
				arrows: false,
				dots: false,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: '.slider-nav',
				touchThreshold: 1000,
				prevArrow: '<div class="slick-prev slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.873 11.3612C24.0477 11.3612 25 10.4089 25 9.23416C25 8.05943 24.0477 7.10713 22.873 7.10713H12.9146L14.3648 1.78955L1 9.50004L14.3648 17.2105L12.7696 11.3612H22.873Z" stroke="#7F7A76"/></svg><div/>',
				nextArrow: '<div class="slick-next slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.12703 11.3612C1.9523 11.3612 1 10.4089 1 9.23416C1 8.05943 1.9523 7.10713 3.12703 7.10713H13.0854L11.6352 1.78955L25 9.50004L11.6352 17.2105L13.2304 11.3612H3.12703Z" stroke="#7F7A76"/></svg><div/>',
			});
		
			$('.slider-nav').slick({
				arrows: true,
				dots: false,
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.slider-for',
				touchThreshold: 1000,
				focusOnSelect: true,
				prevArrow: '<div class="slick-prev slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.873 11.3612C24.0477 11.3612 25 10.4089 25 9.23416C25 8.05943 24.0477 7.10713 22.873 7.10713H12.9146L14.3648 1.78955L1 9.50004L14.3648 17.2105L12.7696 11.3612H22.873Z" stroke="#7F7A76"/></svg><div/>',
				nextArrow: '<div class="slick-next slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.12703 11.3612C1.9523 11.3612 1 10.4089 1 9.23416C1 8.05943 1.9523 7.10713 3.12703 7.10713H13.0854L11.6352 1.78955L25 9.50004L11.6352 17.2105L13.2304 11.3612H3.12703Z" stroke="#7F7A76"/></svg><div/>',
				responsive: [
					{
						breakpoint: 992,
						settings: {
							vertical: false,
						verticalSwiping: false,
						}
					}
				]
			});

			$('.slider-recommendations').slick({
				arrows: true,
				dots: false,
				infinite: true,
				touchThreshold: 1000,
				slidesToShow: 3,
				slidesToScroll: 1,
				prevArrow: '<div class="slick-prev slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.873 11.3612C24.0477 11.3612 25 10.4089 25 9.23416C25 8.05943 24.0477 7.10713 22.873 7.10713H12.9146L14.3648 1.78955L1 9.50004L14.3648 17.2105L12.7696 11.3612H22.873Z" stroke="#7F7A76"/></svg><div/>',
				nextArrow: '<div class="slick-next slick-arrow"><svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.12703 11.3612C1.9523 11.3612 1 10.4089 1 9.23416C1 8.05943 1.9523 7.10713 3.12703 7.10713H13.0854L11.6352 1.78955L25 9.50004L11.6352 17.2105L13.2304 11.3612H3.12703Z" stroke="#7F7A76"/></svg><div/>',
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
						}
					}
					]
				});

	$(".input-phone").mask("+7 (999) 999-99-99");

	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'dHMS'});



	$(document).on('select2:open', () => {
		document.querySelector('.select2-search__field').focus();
	  });

	  $(".rating_action .rating__item").click(function() {
		$(this).parent().removeClass("rating_1");
		$(this).parent().removeClass("rating_2");
		$(this).parent().removeClass("rating_3");
		$(this).parent().removeClass("rating_4");
		$(this).parent().removeClass("rating_5");
		var rating = $(this).attr("data-value");
		$(this).parent().addClass("rating_" + rating);
		$(this).parent().addClass("rating-selected");
	  });


	  if ($('#time-picker').length > 0) {
		const elem = document.getElementById('time-picker');
		const rangepicker = new DateRangePicker(elem, {
			format: 'dd/mm/yyyy',
			language: 'ru',
			autohide: true,
		}); 

		document.querySelector('input[name="range-end"]').value = '';
		
	}

	$('.quantity').each(function() {
		var $quantity = $(this);
		var $valueSpan = $quantity.find('.quantity__value span');
		var minValue = parseInt($quantity.find('.quantity__value').attr('min'));
	
		function checkEmptyState(value) {
		  if (value === 0) {
			$quantity.addClass('quantity_empty');
		  } else {
			$quantity.removeClass('quantity_empty');
		  }
		}
	
		$quantity.find('.plus').on('click', function() {
		  var currentValue = parseInt($valueSpan.text());
		  var newValue = currentValue + 1;
		  $valueSpan.text(newValue);
		  checkEmptyState(newValue);
		});
	
		$quantity.find('.minus').on('click', function() {
		  var currentValue = parseInt($valueSpan.text());
		  if (currentValue > minValue) {
			var newValue = currentValue - 1;
			$valueSpan.text(newValue);
			checkEmptyState(newValue);
		  }
		});
	
		// Initial check for empty state
		checkEmptyState(parseInt($valueSpan.text()));
	  });


	  //Валидация отзыва
	  $('.form-send form').on('submit', function(event) {
		var isValid = true;
		
		// Remove previous error classes
		$(this).find('.item-form_error').removeClass('item-form_error');
		
		// Validate required fields
		$(this).find('.required').each(function() {
			if ($(this).val() === '') {
				$(this).parent().addClass('item-form_error');
				isValid = false;
			}
		});
		
		// Validate email
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		$(this).find('.email').each(function() {
			if (!emailPattern.test($(this).val())) {
				$(this).parent().addClass('item-form_error');
				isValid = false;
			}
		});

		    // Validate rating
			if (!$(this).find('.rating').hasClass('rating-selected')) {
				$(this).find('.rating').closest('.rating-wrap').addClass('item-form_error');
				isValid = false;
			}
			
			// Validate checkbox
			if (!$(this).find('.checkbox input[type="checkbox"]').is(':checked')) {
				$(this).find('.checkbox').addClass('item-form_error');
				isValid = false;
			}
		
		// If form is not valid, prevent submission
		if (isValid) {
			event.preventDefault();
			$.fancybox.close(true);
			setTimeout(function() {
				$.fancybox.open({
					src  : '#modal-thanks-review',
					type: 'inline',
					touch: false
				  });
			}, 400);
			
		} else {
			event.preventDefault();
		}
	});

	 //Валидация Задать вопрос
	$('.form-help form').on('submit', function(event) {
		var isValid = true;
		
		// Remove previous error classes
		$(this).find('.item-form_error').removeClass('item-form_error');
		
		// Validate required fields
		$(this).find('.required').each(function() {
			if ($(this).val() === '') {
				$(this).parent().addClass('item-form_error');
				isValid = false;
			}
		});
		
		// Validate email
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		$(this).find('.email').each(function() {
			if (!emailPattern.test($(this).val())) {
				$(this).parent().addClass('item-form_error');
				isValid = false;
			}
		});
			
			// Validate checkbox
			if (!$(this).find('.checkbox input[type="checkbox"]').is(':checked')) {
				$(this).find('.checkbox').addClass('item-form_error');
				isValid = false;
			}

		
		// If form is not valid, prevent submission
		if (isValid) {
			event.preventDefault();
			$.fancybox.close(true);
			setTimeout(function() {
				$.fancybox.open({
					src  : '#modal-thanks-application',
					type: 'inline',
					touch: false
				  });
			}, 400);
			
			
		} else {
			event.preventDefault();
		}
	});

	//Валидация бронирования
	$('.form-booking form').on('submit', function(event) {
		var isValid = true;
		
		// Remove previous error classes
		$(this).find('.item-form_error').removeClass('item-form_error');
		
		// Validate required fields
		$(this).find('.required').each(function() {
			if ($(this).val() === '') {
				$(this).parent().addClass('item-form_error');
				isValid = false;
			}
		});
		
		// Validate email
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		$(this).find('.email').each(function() {
			if (!emailPattern.test($(this).val())) {
				$(this).parent().addClass('item-form_error');
				isValid = false;
			}
		});
			
			// Validate checkbox
			if (!$(this).find('.checkbox input[type="checkbox"]').is(':checked')) {
				$(this).find('.checkbox').addClass('item-form_error');
				isValid = false;
			}

		
		// If form is not valid, prevent submission
		if (isValid) {
			event.preventDefault();
			$.fancybox.close(true);
			setTimeout(function() {
				$.fancybox.open({
					src  : '#modal-thanks-application',
					type: 'inline',
					touch: false
				  });
			}, 400);
			
			
		} else {
			event.preventDefault();
		}
	});

	 //Валидация Контакты
	 $('.form-contacts form').on('submit', function(event) {
		var isValid = true;
		
		// Remove previous error classes
		$(this).find('.item-form_error').removeClass('item-form_error');
		
		// Validate required fields
		$(this).find('.required').each(function() {
			if ($(this).val() === '') {
				$(this).parent().addClass('item-form_error');
				isValid = false;
			}
		});
		
		// Validate email
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		$(this).find('.email').each(function() {
			if (!emailPattern.test($(this).val())) {
				$(this).parent().addClass('item-form_error');
				isValid = false;
			}
		});
			
			// Validate checkbox
			if (!$(this).find('.checkbox input[type="checkbox"]').is(':checked')) {
				$(this).find('.checkbox').addClass('item-form_error');
				isValid = false;
			}

		
		// If form is not valid, prevent submission
		if (isValid) {
			event.preventDefault();
			$.fancybox.close(true);
			setTimeout(function() {
				$.fancybox.open({
					src  : '#modal-thanks-application',
					type: 'inline',
					touch: false
				  });
			}, 400);
			
			
		} else {
			event.preventDefault();
		}
	});

	//Валидация Калькулятора
	$('.form-calculator form').on('submit', function(event) {
		var isValid = true;
		
		// Remove previous error classes
		$(this).find('.item-form_error').removeClass('item-form_error');
		
		// Validate required fields
		$(this).find('.required').each(function() {
			if ($(this).val() === '') {
				$(this).parent().addClass('item-form_error');
				isValid = false;
			}
		});
		
		
		// If form is not valid, prevent submission
		if (isValid) {
			event.preventDefault();
			$(".calculator-result").slideDown(200);
		} else {
			event.preventDefault();
		}
	});

	//Валидация бронирования модалка
	var $form = $('.form-booking-modal form');
    var $tabBooking = $('.tab-booking');
    var $stepsBooking = $('.steps-booking span');
    var $linkClose = $('.link-page_close');
    var $linkBack = $('.link-page_back');
    var $btnNext = $('.btn-main_next');

    $tabBooking.eq(1).hide();

    function validateTab($tab) {
        var isValid = true;
        $tab.find('.item-form_error').removeClass('item-form_error');
        
        // Validate required fields
        $tab.find('.required').each(function() {
            if ($(this).val() === '') {
                $(this).parent().addClass('item-form_error');
                isValid = false;
            }
        });
        
        // Validate email
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        $tab.find('input[type="email"]').each(function() {
            if (!emailPattern.test($(this).val())) {
                $(this).parent().addClass('item-form_error');
                isValid = false;
            }
        });

        return isValid;
    }

    $btnNext.on('click', function(event) {
        event.preventDefault();
        var $currentTab = $tabBooking.eq(0);

        if (validateTab($currentTab)) {
            $currentTab.hide();
            $tabBooking.eq(1).fadeIn();

            $stepsBooking.text('2');
        }
    });

    $linkBack.on('click', function(event) {
        event.preventDefault(); 
        
        $tabBooking.eq(1).hide();
        $tabBooking.eq(0).fadeIn();

        $stepsBooking.text('1');
    });

    // Handle form submission
    $form.on('submit', function(event) {
        var $currentTab = $tabBooking.eq(1);
        
        if (validateTab($currentTab)) {
            event.preventDefault();
            $.fancybox.close(true);
            setTimeout(function() {
                $.fancybox.open({
                    src  : '#modal-thanks-application',
                    type: 'inline',
                    touch: false
                });
            }, 400);
        } else {
            event.preventDefault();
        }
    });

    // Handle the "Close" button click
    $linkClose.on('click', function(event) {
        event.preventDefault();
        $.fancybox.close();
    });


	$('.item-form_number input').on('keypress', function(event) {
		var charCode = (event.which) ? event.which : event.keyCode;
		if (charCode < 48 || charCode > 57) {
			event.preventDefault();
		}
	});


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
		touch: false
	});



	$('.item-form select').select2({
		closeOnSelect : true,
		allowClear: false,
		containerCssClass: "test",
		tags: true,
	});

	$('.item-form_select select').select2({
		closeOnSelect : true,
		allowClear: false,
		containerCssClass: "test",
		tags: true,
        dropdownCssClass: 'simple-select' // Замените на нужное имя класса
    });


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


  