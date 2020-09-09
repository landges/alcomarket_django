// [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) { // lazyload simple
//   img.setAttribute('src', img.getAttribute('data-src'));
//   img.onload = function() {
//     img.removeAttribute('data-src');
//   };
// });


let lazyLoadInstance = new LazyLoad({ // lazyload with lib
	elements_selector: "img[data-src]"
});

$(document).ready(function() {
	$('html').find('.loading-element').addClass('loading-remove').removeClass('loading-element');

	setTimeout(function() {
		$('html').find('.loading-remove').removeClass('loading-remove');
	}, 300)
});
//поиск в каталоге мобильная версия
function closeOnSearch() {
  console.log('click on ' + $(this));
  $('body').removeClass('menu-open');
  $('#menu').removeClass('active');

  setTimeout(function() {
    $('#menu').removeClass('activate').removeClass('activate-bottom');
    $('#menu').find('section').removeClass('active');
    $('#menu').find('.collapse').collapse('hide');
  }, 700);
}


let vh = window.innerHeight * 0.01; // внедрить css переменную --vh для настоящего 1% высоты
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


$('.btn-to-the-top').on('click', function () {
    var top = $('main').offset().top - 80;

    $('body,html').animate({scrollTop: top}, 500);
});

$('.btn-to-filters-desk').on('click', function () {
    var top = $('main').offset().top + 600;

    $('body,html').animate({scrollTop: top}, 500);
});

// $('.btn-head-search').on('click', function() {
// 	$('.search-container').addClass('active');
// 	if (!$(this).closest('body').hasClass('searchPage')){
// 		$('html').addClass('modal-open').addClass('overlaying');
// 	}
// });

// $('.btn-close-search-main').on('click', function() {
// 	$('.search-container').removeClass('active');
// 	$('html').removeClass('modal-open').removeClass('overlaying');
// });

$(document).on('click', function(e) {
	let container = $('header');
	let containerPredictive = $('.col-predictive-line');

	if (!container.is(e.target) && container.has(e.target).length === 0 && !containerPredictive.is(e.target) && containerPredictive.has(e.target).length === 0)
	{
		$('.search-container').removeClass('active');
		$('html').removeClass('modal-open').removeClass('overlaying');
	}
});

document.onkeydown = function(e) {
    e = e || window.event;
    var isEscape = false;
    if ("key" in e) {
        isEscape = (e.key === "Escape" || e.key === "Esc");
    } else {
        isEscape = (e.keyCode === 27);
    }
    if (isEscape) {
		$('.search-container').removeClass('active');
		$('html').removeClass('modal-open').removeClass('overlaying');
    }
};


let mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

let allHeightLong = 0;
$(document).ready(function() {
	allHeightLong = $(document).outerHeight(true);
});



$('body').on(mousewheelevt, function(e){
	let fromTop = $(window).scrollTop();
	let evt = window.event || e
	evt = evt.originalEvent ? evt.originalEvent : evt;
	let delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta;
    $('header').toggleClass('head-scroll', (fromTop > 40)); // при скролле 40px добавить класс header'у
});


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navigation-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if ($(window).width() < 1199) {
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('.navigation-header').css({'top': 0, 'position': 'fixed'});
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('.navigation-header').css({'top': 45, 'position': 'fixed'});
	        }
	    }


	    lastScrollTop = st;
	}
	$('.fixed-navigation').toggleClass('active', (st > 200));


    let halfOfScroll = allHeightLong / 2;
    //console.log(st);
    if(st > 2000){
    	$('.btn-to-filters-desk').css('opacity', 1);
    } else if (st > 610 && $(window).width() < 1199) {
    	$('.btn-to-filters').css('opacity', 1);
    } else {
    	$('.btn-to-filters-desk').css('opacity', 0);
    	$('.btn-to-filters').css('opacity', 0);
    }
    if (st > 600){//if (st > halfOfScroll){
    	//console.log('on ' + halfOfScroll + ' reach half');
		$('.btn-to-the-top').css('opacity', 1);
    } else {
    	$('.btn-to-the-top').css('opacity', 0);
    }
}

if ($(window).width() < 1199 && $(window).scrollTop() > 145) {
	$('.navigation-header').css({'top': 0, 'position': 'fixed'})
}

$(window).resize(function() {
	if ($(window).width() < 1199 && $(window).scrollTop() > 145) {
		$('.navigation-header').css({'top': 0, 'position': 'fixed'})
	} else {
		$('.navigation-header').removeAttr('style')
	}
});

$('#signIn').on('shown.bs.modal', function () {
	setTimeout(function() {
		$('#signIn input[type="tel"]:first').focus()
	}, 500);
});

$('.nav-similiar').on('click', '.nav-link', function() {
	let howFar = $(this).width();
	let leftItem = $(this).closest('.nav-item').prev('.nav-item');
	let rightItem = $(this).closest('.nav-item').next('.nav-item');

	let containerTabs = $(this).closest('.nav-similiar');
	let tabsItem = containerTabs.find('.nav-link');

	tabsItem.each(function(index, el) {
		$(this).attr('data-tab-index', index);
	});

	let indexTab = $(this).data('tab-index');

	let allWidth = containerTabs.width();

	let countItems = $(this).closest('.nav-tabs').find('.nav-item').length;


	let animateScroll = (allWidth / countItems) * (indexTab);


	$('.nav-similiar').animate({
      scrollLeft: ""+animateScroll+"px"
    }, "slow");

});

$('.menu-catalog__item .collapse').on('show.bs.collapse', function () { // скрывать на мобиле при открытии коллапса другие коллапсы
	$('#menu').find('.collapse').collapse('hide');
});

$('input[name="PERSONAL_PHONE"], input[name="phone"], input[name="PROP_PHONE"]').mask("+7 (999) 999-99-99"); // маску на инпут телефона

$('.carousel__main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	infinite: true,
	autoplay: true,
	speed: 700,
	autoplaySpeed: 5000,
	pauseOnHover: false,
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				centerMode: true,
				centerPadding: '10px',
				infinite: true,
				fade: false,
				dots: true
			}
		},
		{
			breakpoint: 991,
			settings: {
				centerMode: true,
				centerPadding: '10px',
				infinite: false,
				fade: false,
				dots: true
			}
		}
	]
});

$('.offer__slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	swipeToSlide: true,
	arrows: true,
	focusOnSelect: false,
	responsive: [
		{
			breakpoint: 1559,
			settings: {
				arrows: 'false'
			}
		},
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: 'false'
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: 'false',
				infinite: false
			}
		}
	]
});

// function slickTabInit() {
// 	$('.catalog__slider').slick({
// 		dots: true,
// 		infinite: true,
// 		speed: 700,
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 5000,
// 		swipeToSlide: true,
// 		arrows: true,
// 		focusOnSelect: false,
// 		responsive: [
// 			{
// 				breakpoint: 1559,
// 				settings: {
// 					arrows: 'false'
// 				}
// 			},
// 			{
// 				breakpoint: 1439,
// 				settings: {
// 					slidesToShow: 3,
// 					slidesToScroll: 1,
// 					arrows: 'false'
// 				}
// 			},
// 			{
// 				breakpoint: 1199,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 1,
// 					arrows: 'false',
// 					infinite: false
// 				}
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 1,
// 					arrows: 'false',
// 					infinite: false
// 				}
// 			},
// 			{
// 				breakpoint: 470,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 					autoplay: false,
// 					arrows: 'false',
// 					centerMode: true,
// 					infinite: false,
// 					centerPadding: '10px',
// 				}
// 			}
// 		]
// 	});
// }

$('.catalog__slider').slick({
	dots: true,
	infinite: false,
	speed: 700,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 5000,
	swipeToSlide: true,
	arrows: true,
	focusOnSelect: false,
	responsive: [
		{
			breakpoint: 1559,
			settings: {
				arrows: 'false'
			}
		},
		{
			breakpoint: 1439,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: 'false'
			}
		},
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: 'false',
				infinite: false
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: 'false',
				infinite: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				arrows: 'false',
				centerMode: true,
				infinite: false,
				centerPadding: '10px',
			}
		}
	]
});

// let scrollCount = null, // скролл главной карусели
// 	scoll = null;

// $('.carousel__main').on('wheel', (function(e) {
//     e.preventDefault();

//     clearTimeout(scroll);
//     scroll = setTimeout(function(){scrollCount=0;}, 50);
//     if(scrollCount) return 0;
//     scrollCount = 1;

//     if (e.originalEvent.deltaY > 0) {
//         $(this).slick('slickNext');
//     } else {
//         $(this).slick('slickPrev');
//     }
// }));


// animation
let wow = new WOW(
  {
    boxClass:     'a-show',
    animateClass: 'animated',
    offset:        50
  }
);
wow.init();

// $('a[data-toggle="tab"]').on('show.bs.tab', function() {
// 	$('.catalog__slider').slick('unslick');
//     slickTabInit();
// });

if ($(window).width() < 1199) {
	$('body').find('.a-show').removeClass('fadeInUp').addClass('fadeIn');
}

$('.mainPage').bind(mousewheelevt, function(e){

	let evt = window.event || e //equalize event object
	evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
	let delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF
	let fromTop = $(window).scrollTop();

	$(window).resize(function() {
		if ($(window).width() < 1199) {
			$('body').find('.a-show').removeClass('fadeInUp').addClass('fadeIn');
		} else {
			$('body').find('.a-show').addClass('fadeInUp').removeClass('fadeIn');
		}
	});

	if(delta > 0) {

		if(fromTop > 60){
		    $('.offer-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.halls-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.wine-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		}

		if(fromTop > 1400){
		    $('.offer-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.halls-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.wine-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.strong-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.сhampagne-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		}

		if(fromTop > 2400){
		    $('.offer-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.halls-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.wine-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.strong-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.сhampagne-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.gift-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.drinks-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		}

		if(fromTop > 3400){
		    $('.offer-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.halls-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.wine-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.strong-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.сhampagne-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.gift-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.drinks-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.brands-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.brands-section-mob').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.frequent-req-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		    $('.get-discount-section').removeAttr('style').removeClass('fadeInUp').removeClass('a-show').addClass('animated');
		}
	}
});

$('.btn-menu-a').on('click', function() {
	let target = $(this).data('target');

	if ($(this).hasClass('from-bottom')){
		$('#menu').addClass('activate-bottom');
	} else {
		$('#menu').addClass('activate');
	}

	$('body').addClass('menu-open');

	if ($('#menu').hasClass('active')){
		$('#menu').find('section').removeClass('active');
		$(target).addClass('active');
	} else {
		$(target).addClass('active');
	}

	setTimeout(function() {
		$('#menu').addClass('active');
	}, 10);
});

$('#closeMenu').on('click', function() {
	$('body').removeClass('menu-open');
	$('#menu').removeClass('active');

	setTimeout(function() {
		$('#menu').removeClass('activate').removeClass('activate-bottom');
		$('#menu').find('section').removeClass('active');
		$('#menu').find('.collapse').collapse('hide');
	}, 700);
});

$('.collapse-mob-brand').on('show.bs.collapse', function () {
	$('.col-brands-mob').find('.collapse-mob-brand').collapse('hide');
})

$('[data-toggle=helper]').on('click', function() { // код для кастомного селекта
	let dropdown = $(this).parent('.a-select');
	if (dropdown.hasClass('active')){
		dropdown.removeClass('active');
	} else {
		$('.a-select').removeClass('active');
		dropdown.addClass('active');
	}
});

$(document).mouseup(function (e){ // скрываем кастомный селект при клике вне
	let container = $('.a-select');
	if (!container.is(e.target) && container.has(e.target).length === 0){
		container.removeClass('active');
	}
});


$('.filter-con-col').on('click', '.show-more', function() { // при клике показать еще открывабются следующие дивы
	let filterContainer = $(this).closest('.a-filter__collapse');
	let parentID = filterContainer.attr('id');

	if (filterContainer.hasClass('checked-filter')){ // при уже выбранных фильтрах эта кнопка становится вызовом коллапса
		$(this).addClass('hide');
		filterContainer.removeClass('collapsing-with-filters');
		$(this).closest('.a-filter__item').find('.a-filter__item-name').removeClass('btn-with-filters');
		filterContainer.find('.custom-checkbox:not(.selected)').fadeIn();
	} else {
		$(this).addClass('hide');
		$(this).nextAll('.hide').removeClass('hide');
	}
});

$('.a-filter__collapse').on('hide.bs.collapse', function(){
	$(this).find('.show-more').removeClass('hide').nextAll('.item:not(.selected)').addClass('hide'); // при скрытии коллапсы возвращаем показать еще в начальный стейтмент

	if ($(this).hasClass('checked-filter')){ // при отмеченных фильтрах переносим их наверх и скрываем не чекнутые
		$(this).addClass('collapsing-with-filters');
		$(this).closest('.a-filter__item').find('.a-filter__item-name').addClass('btn-with-filters');
		$(this).find('.custom-checkbox:not(.selected)').fadeOut(0);

		if ($(this).find('.show-more').length === 0){ // добавляем кнопку для открытие коллапса
			let showMore = '<div class="item show-more">Показать еще</div>';
			$(this).find('.filter-con-col').append(showMore);
		}
		return false;
	}
});



$('.a-filter__collapse').on('show.bs.collapse', function(){
	let selfID = $(this).attr('id');
	$('.a-filter__collapse.show').collapse('hide'); // если открывается коллапс то закрыть остальные
	// countFilterCollapsedItem = 0; // код если нужны коллапсы больше 1
	// $('.a-filter .show').each(function(index, el) {
	// 	countFilterCollapsedItem++;
	// });

	// if (countFilterCollapsedItem > 2){
	// 	if (selfID == $('.a-filter__collapse.show:last').attr('id')){
	// 		$('.a-filter__collapse.show:first').collapse('hide');
	// 	} else {
	// 		$('.a-filter__collapse.show:last').collapse('hide');
	// 	}
	// }
});

$('.filter-con-col').on('change', 'input[type=checkbox]', function() {
	let filter = $(this).closest('.a-filter__item').find('.a-filter__item-name').data('target');
	let filterItem = $(this).closest('.custom-checkbox');

	let i = 0;
	$(filter+' input[type=checkbox]:checked').each(function() { // счетчик для подсчета чекнутых фильтров
    	i++
    	$(filter).attr('data-count-filters', i);
	});

	if ($(filter).find('input[type=checkbox]').is(':checked')){ // пока есть чекбокс — добавлен класс
		$(filter).addClass('checked-filter');
	} else {
		$(filter).removeClass('checked-filter');
    	$(filter).attr('data-count-filters', 0);
	}

	if ($(filter).hasClass('collapsing-with-filters')){ // скрываем не чекнутые при коллапсе
		filterItem.fadeOut(0);
	}

	if ($(filter).attr('data-count-filters') == 0){ // когда становится 0 чекнутых возвращаем все стейтменты
		$('.a-filter__collapse.show:not('+filter+')').collapse('hide');
		$(filter).removeClass('collapsing-with-filters');
		$(this).closest('.a-filter__item').find('.a-filter__item-name').removeClass('btn-with-filters');
		$(filter).collapse('show');
		$(filter).find('.custom-checkbox').fadeIn(0).removeAttr('style');

		if ($(filter).find('.item:last').hasClass('show-more')){
			$(filter).find('.item.show-more').remove();
		} else if (!$(filter).find('.item:last').hasClass('show-more')){

		}
	}

	filterItem.toggleClass('selected');

	let filterCount = $(filter).attr('data-count-filters');

	// $(filter).css({
	// 	'min-height': i * 26 + 9
	// });

	console.log('check filter ' + filter + ' ' + filterCount);

});
