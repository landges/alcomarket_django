// Формат чисел
function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}


// console
function cl(str){
	console.log(str);
}


// Скролл к элементу
function scrollToEl(el, minus = 0){
	//cl(el.offset().top);
	//cl($(window).height());
	$('html, body').stop().animate({scrollLeft: 0, scrollTop:(el.offset().top-minus)}, 500);
}


function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure ){
	var cookie_string = name + "=" + escape ( value );

	if ( exp_y ){
		var expires = new Date ( exp_y, exp_m, exp_d );
		cookie_string += "; expires=" + expires.toGMTString();
	}
	if ( path )
        cookie_string += "; path=" + escape ( path );
	if ( domain )
        cookie_string += "; domain=" + escape ( domain );
	if ( secure )
        cookie_string += "; secure";
	document.cookie = cookie_string;
}
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

/*$(document).mouseup(function (e){ // событие клика по документу
	var div = $(".menu_float"); // тут указываем элемент
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		div.fadeOut(); // скрываем его
		if(!$('#overlay').hasClass('active')){
			$('#overlay').fadeOut(); // скрываем overlay
		}
	}
});*/



//если мобильная версия
function isMobile(){
  try{
    document.createEvent('TouchEvent');
    return true;
  }
  catch(e){
    return false;
  }
}


// Popup
var scroll_body_top = 0;
function openPopup(el = false, overlay = true, func = false){

	if(el!=false && el.hasClass('kombox-filter')){
		el.css({
			'visibility': 'visible'
		})
	};
	if(overlay){
		$('#overlay').addClass('active');
	}
	if(el){
		if(el.hasClass('popup')){
			$('#overlay').addClass('active');
		}
		el.fadeIn();

		if(func){
			$('#overlay').addClass('mobile_18');
		}
	}
	scroll_body_top = $(window).scrollTop();
	//cl(scroll_body_top);
	$('html').addClass('popup_hidden');
	el.find('input[type="text"]:first').focus();
}

function closeBlock(block = false){
	$(block).fadeOut();
	$('#overlay').removeClass('active');
}

function closePopup(overlay = true, el = false){
	if($('#auth').length > 0){
		$('#auth').addClass('hide');
	}
	if(el){
		el.fadeOut();
	}
	else {
		$(".menu_float, .popup").fadeOut();
	}
	if(overlay){
		$('html').removeClass('popup_hidden');
		$('#overlay').removeClass('active');
		$('#overlay').removeClass('mobile_18');
	}
	// $(window).scrollTop(scroll_body_top);
	$(".sms_code_label").addClass('hidden');
	$(".input_phone").val();
}



//openPopup($('.subscibe_element'));

// Изменение класса элемента
function tClass(el, class_change){
if(event.target.tagName=="INPUT") return false;

if(event.target.tagName=="A"){

}else{
	if($(el).hasClass(class_change)){
		setTimeout(function(){
		$(el).removeClass(class_change);
		}, 10);
	}
	else {
		setTimeout(function(){
		$(el).addClass(class_change);
		}, 10);
	}
}
}
function tSiblingsClass(el, list, class_change){
	if($(el).hasClass(class_change)){
		setTimeout(function(){
		$(el).removeClass(class_change);
		}, 10);
	}
	else {
		$(list).removeClass(class_change);
		setTimeout(function(){
		$(el).addClass(class_change);
		}, 10);
	}
}


// Изменение пола (radio) в ЛК
function changeGender(el) {
	if(!$(el).hasClass('active')){
		$(el).addClass('active').siblings('label').removeClass('active');
	}
}




// Выбор города
function choiceCity(city){
	closePopup();
	$.ajax({
		type: "POST",
		url: "/local/ajax/choice_city.php",
		data: {'city': city},
		success: function(){
			//ym(53096326, 'reachGoal', 'ADULT_MSK');
		}
	});
}
function choiceCityOther(){
	closePopup(false);
	openPopup($('.other_city_change'), false);
	/*$.ajax({
		type: "POST",
		url: "/local/ajax/choice_city.php",
		data: {'city': city},
		success: function(){

		}
	});*/
}


// Подгрузка списков элементов в поиске
function loadSearchItems(e, val){
	$('.load_search_items').remove();
	var length = val.length;
	if(length > 2){
		$.ajax({
			type: "POST",
			url: '/local/ajax/search_items.php',
			data: {
				'val': val
			},
			success: function(msg){
				$('.load_search_items').remove();
				$(e).after(msg);
			}
		});
	}
}


// Новый адрес
function newAddr() {
	$('.new_addr_block').fadeIn();
}


// Показать заказ в ЛК
function openOrder(el) {
	$(el).next().toggle();
}


// открыть поиск на планшете
function openSearch(){
	$('#sub_header .search').toggle();
}


function getListAddr(addr = false){
	if(addr.length > 3){
		/*$.ajax({
			type: "POST",
			url: '/local/ajax/get_list_addr.php',
			data: {
				'address': addr
			},
			success: function(msg){
				cl(msg);
			}
		});*/
	}
}


var slick_catalog_flag = true;
function slick_catalog(){
	if($('.catalog_slick').length > 0){
		if($(window).width() < 1200 && slick_catalog_flag){
			$('.catalog_slick').each(function(){
				$(this).slick({
					infinite: false,
					dots: false,
					arrows: false,
					lazyLoad: 'progressive',
					/*touchThreshold: 15,*/
					edgeFriction: 0,
					slidesToShow: 2.5,
					centerMode: false,
					swipeToSlide: true,
					//variableWidth: true,
			        //cssEase: 'linear',
				});
			});
			slick_catalog_flag = false;
		}
		else if($(window).width() >= 1200 && $('.catalog_slick').hasClass('slick-slider')) {
			$('.catalog_slick').each(function(){
				$(this).slick('unslick');
			});
			slick_catalog_flag = true;
		}
	}
}

/*var slick_brands_flag = true;
function slick_brands(){
	if($('.header_seo_block').length > 0){
		if(($(window).width() < 1200 && slick_brands_flag)){ // || $('.header_seo_block .seo_header_item').length > 7
			$('.header_seo_block').each(function(){
				$(this).slick({
					infinite: false,
					dots: false,
					arrows: false,
					//lazyLoad: 'progressive',
					//touchThreshold: 15,
					//edgeFriction: 0,
					//slidesToShow: 5.4,
					//centerPadding: '5px',
					centerMode: false,
					swipeToSlide: true,
					//variableWidth: true,
			        //cssEase: 'linear',
					responsive: [
						{
						  breakpoint: 768,
						  settings: {
							swipeToSlide: true,
							slidesToShow: 2.4,
						  }
						}
					]
				});
			});
			slick_brands_flag = false;
		}
		else if($(window).width() >= 1200 && $('.header_seo_block').hasClass('slick-slider')) {
			$('.header_seo_block').each(function(){
				$(this).slick('unslick');
			});
			slick_brands_flag = true;
		}
	}
}*/

// slick на главной
var slick_ind_flag = true;
function slick_section(){
	if($('.slick_section').length > 0){
		if($(window).width() < 992 && slick_ind_flag){
			$('.slick_section').each(function(){
				$(this).slick({
					infinite: false,
					dots: false,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					centerPadding: '90px',
					touchThreshold: 15,
					centerMode: true,
					initialSlide: 1,
					responsive: [
					{
					  breakpoint: 992,
					  settings: {
						slidesToShow: 1,
						centerPadding: '230px',
					  }
					},{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 1,
						centerPadding: '170px',
					  }
					},
					{
					  breakpoint: 680,
					  settings: {
						slidesToShow: 1,
						centerPadding: '170px',
					  }
					},
					{
					  breakpoint: 640,
					  settings: {
						slidesToShow: 1,
						centerPadding: '90px',
					  }
					},
					{
					  breakpoint: 481,
					  settings: {
						slidesToShow: 1,
						centerPadding: '70px',
					  }
					},
					{
					  breakpoint: 400,
					  settings: {
						slidesToShow: 1,
						centerPadding: '50px',
					  }
					},
					{
					  breakpoint: 350,
					  settings: {
						slidesToShow: 1,
						centerPadding: '30px',
					  }
					},
					{
					  breakpoint: 320,
					  settings: {
						slidesToShow: 1,
						centerPadding: '15px',
					  }
					}
				  ]
				});
			});
			slick_ind_flag = false;
		}
		else if($(window).width() >= 992 && $('.slick_section').hasClass('slick-slider')) {
			$('.slick_section').each(function(){
				$(this).slick('unslick');
			});
			slick_ind_flag = true;
		}
	}

	if($('.slick_section_cart').length > 0){
		$('.slick_section_cart').each(function(){
			$(this).slick({
				infinite: false,
				dots: false,
				arrows: true,
				draggable: false,
				centerPadding: '5px',
				slidesToShow: 1,
				slidesToScroll: 1,
				touchThreshold: 20,
				cssEase: 'linear',
				/*centerMode: true,*/
				responsive: [
				/*{
				  breakpoint: 992,
				  settings: {
					slidesToShow: 2,
					centerPadding: '160px',
				  }
				},
				{
				  breakpoint: 930,
				  settings: {
					slidesToShow: 2,
					centerPadding: '120px',
				  }
				},
				{
				  breakpoint: 860,
				  settings: {
					slidesToShow: 2,
					centerPadding: '80px',
				  }
				},*/
				{
				  breakpoint: 2560,
				  settings: {
					speed: 1200,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					draggable: true,
					slidesToScroll: 1,
					slidesToShow: 1,
					centerPadding: '70px',
					centerMode: true,
				  }
				},
				{
				  breakpoint: 730,
				  settings: {
					speed: 300,
					slidesToScroll: 1,
					slidesToShow: 1,
					centerPadding: '160px',
				  }
				},
				{
				  breakpoint: 641,
				  settings: {
					speed: 300,
					slidesToScroll: 1,
					slidesToShow: 1,
					centerPadding: '150px',
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					speed: 300,
					slidesToScroll: 1,
					slidesToShow: 1,
					centerPadding: '100px',
				  }
				},
				{
				  breakpoint: 481,
				  settings: {
					speed: 300,
					slidesToScroll: 1,
					slidesToShow: 1,
					infinite: true,
					centerMode: true,
					centerPadding: '110px',
				  }
				},
				{
				  breakpoint: 420,
				  settings: {
					speed: 300,
					slidesToScroll: 1,
					slidesToShow: 1,
					infinite: true,
					centerMode: true,
					centerPadding: '80px',
				  }
				},,
				{
				  breakpoint: 380,
				  settings: {
					speed: 300,
					slidesToScroll: 1,
					slidesToShow: 1,
					infinite: true,
					centerMode: true,
					centerPadding: '55px',
				  }
				},
				{
				  breakpoint: 321,
				  settings: {
					speed: 300,
					slidesToScroll: 1,
					slidesToShow: 1,
					infinite: true,
					centerMode: true,
					centerPadding: '35px',
				  }
				}
				]
			});
		});
	}

}


// Ползунок
function init_range(){
	if($('input[type=range]').length > 0){
		$('input[type=range]').each(function(){
			$(this).nativeMultiple({
				stylesheet: "range",
				onCreate: function() {
					//cl("Слайдеры созданы");
				},
				onChange: function(first_value, second_value) {
					$('.range_vals div:eq(0) span').text(first_value);
					$('.first_value').val(first_value);
					$('.range_vals div:eq(1) span').text(second_value);
					$('.second_value').val(second_value);
				},
				onSlide: function(first_value, second_value) {
					$('.range_vals div:eq(0) span').text(first_value);
					$('.range_vals div:eq(1) span').text(second_value);
					//cl("onSlide Первое значение: "+first_value+", второе значение: "+second_value);
				},
			});
		});
	}
}

function setPromo(){
	$.ajax({
		type: "POST",
		url: "/local/ajax/set_promo.php",
		data: {'promo': $('.form_promo input[type="text"]').val()},
		success: function(res){
			if(res.error){
				$('.order_error .title').html(res.error);
				openPopup($('.order_error'));
			}
			else {
				$('#basketid .cart_step_2').html($(res).find('.cart_step_2').html());
				$('.order_error .title').html('Промокод успешно применен!');
				openPopup($('.order_error'));
			}
		}
	});
}
// Корзина
function closeCart(){
	$(".dropdown__header-compare.dropdown-cart").hide();
	//$("a.cart_btn.cart_btn-secondary").text("Очистить корзину");
	//$("a.cart_btn.cart_btn-secondary").attr("onclick", 'delInCart(this, "", "Y")');
}
function addCart(el){

	var max_count = el.find(".count").data('max_count') || 0;
	var curr_count = parseInt(el.find(".count").text());
	var url = el.find(".count").data('similar-url') || '#';

	// showAlertQuantity(el, max_count, curr_count, url);
	// if(el.find('.plus').hasClass("disabled"))
	// 	return;

	if(typeof window.APRT_SEND === "function")
	{
		window.APRT_SEND({
			pageType: 8,
			currentProduct: {
				id: el.data('id'),
				name: el.data('name'),
				price: el.data('price')
			}
		});
	}

	if($('.add_cart[data-id="'+el.data('id')+'"]').eq(0).hasClass('active')){
		$('.add_cart[data-id="'+el.data('id')+'"]').find('.count').text(Math.ceil($('[data-id="'+el.data('id')+'"]').eq(0).find('.count').text())+1);
	}
	else {
		$('.add_cart[data-id="'+el.data('id')+'"]').find('.count').text(1);
		$('.add_cart[data-id="'+el.data('id')+'"]').addClass('active');
	}

	// Количество товаров в корзине до того, как в нее положили
	var count_cart_start = $("#count_in_basket").val();
	//cl(count_cart_start);

	if($('#basketid').length === 0 && typeof good_choice !== "undefined" && good_choice){
		openPopup($('.good_choice'));
		good_choice = false;
		$.ajax({
			type: "POST",
			url: "/local/ajax/good_choice.php",
			data: {'good_choice': 'Y'},
		});
	}


	// if(!$(".cart").hasClass('active')){
	// 	$(".cart").addClass('active');
	// 	$(".cart a").html('<div class="count">1</div>');
	// 	$("a.cart").append('<div class="count">1</div>');
	// 	$(".cart").attr('href', '/cart/');
	// 	$("#count_in_basket").val();
	// }
	// else {
	// 	$(".cart .count").text(parseInt($(".cart .count").text())+1);
	// }
	// $("#count_in_basket").val(parseInt($("#count_in_basket").val())+1);

	/*if(count_cart_start == 0 && location.href == '/cart/'){
		window.location.href == '/cart/';
	}*/

	$.ajax({
		type: "POST",
		url: "/local/ajax/addbasket.php",
		data: {'id': el.data('id'), 'type': 'add', template: $('.controls__main-item.cart').length},
		success: function(msg){
			$('#top_basket').html(msg);
				if(parseInt($("#count_in_basket").val())>1){
					$(".dropdown__header-compare.dropdown-cart").show();
				}
			if(typeof ga != 'undefined')
			{
				dataLayer.push({event: 'add_to_cart', eventCategory: 'ecommerce', eventAction: 'add_to_cart'});
			}
		}
	});

	if($('.reappend_cart').length > 0){
		if($('.reappend_cart .item_cart[data-id="basket_item_'+el.data('id')+'"]').length == 0){
			new_item_cart = $('[data-id="basket_item_'+el.data('id')+'"]').html();
			$('.item_cart:not(.logistic_block_cart):last').after('<div class="col-xs-12 item_cart basket_item_cart" data-id="basket_item_'+el.data('id')+'">'+new_item_cart+'</div>');
			$('.item_cart:not(.logistic_block_cart):last').find('.bookmark').replaceWith('<div class="delete" onclick="delInCart(this, '+el.data('id')+')"></div>');
			$('.item_cart:not(.logistic_block_cart):last').find('.count').after('<span class="plus"></span>');
			$('.item_cart:not(.logistic_block_cart):last').find('.add_cart').removeClass('add_cart_dop');
		}

		setTimeout(function(){
			$.ajax({
				type: "POST",
				url: "/local/ajax/change_delivery.php", //updatebasket.php
				success: function(basket){
					//cl($(basket).find('.cart_step_2 .cart_info').html());
					$('#basketid .cart_step_2 .cart_info').html($(basket).find('.cart_step_2 .cart_info').html());
					$('#logistic_block_val').text($(basket).find('.delivery_price_val').html());
				}
			});
		}, 300);
	}

	if(typeof ym !== 'undefined')
		ym(53096326, 'reachGoal', 'ADD_CART');

	if(typeof fbq === 'function')
	{
		fbq('track', 'AddToCart', {
			currency: 'RUB',
		});
	}

}


function delCart(el, e){

	// Удаление товара
	//result_del = true;

	if(typeof window.APRT_SEND === "function")
	{
		window.APRT_SEND({
			pageType: 8,
			currentProduct: {
				id: el.parent().data('id'),
				name: el.parent().data('name'),
				price: el.parent().data('price')
			}
		});
	}

	let catalogBasketItemsCount = $(".catalog_basket_item").length;

	if(Math.ceil(el.next().text()) > 1 && el.parent().hasClass('active')){
		$('.add_cart[data-id="'+el.parent().data('id')+'"]').find('.count').text(Math.ceil($('[data-id="'+el.parent().data('id')+'"]').eq(0).find('.count').text())-1);
		//el.next().text(Math.ceil(el.next().text())-1);
	}
	else {
		//result_del = confirm('Вы хотите удалить товар из корзины?');
		$('.add_cart[data-id="'+el.parent().data('id')+'"]').find('.count').text(0);
		$('.add_cart[data-id="'+el.parent().data('id')+'"]').removeClass('active');
		$('#basketid .reappend_cart').find($('[data-id="basket_item_'+el.parent().data('id')+'"]')).remove();
	}

	// if(parseInt($(".cart .count").text()) > 1){
	// 	$(".cart .count").text(parseInt($(".cart .count").text())-1);
	// }
	// else {
	// 	$(".cart .count").remove();
	// 	$(".cart").removeClass('active');
	// 	$(".cart").attr('href', 'javascript:void(0)');
	// }

	//if(result_del){
	// 	$("#count_in_basket").val(parseInt($("#count_in_basket").val())-1);

		e.stopPropagation();
		$.ajax({
			type: "POST",
			url: "/local/ajax/addbasket.php",
			data: {'id': el.parent().data('id'), 'count': el.next().text(), template: $('.controls__main-item.cart').length},
			success: function(msg){

				if(typeof ga != 'undefined')
				{
					dataLayer.push({event: 'add_to_cart', eventCategory: 'ecommerce', eventAction: 'add_to_cart'});
				}

				$('#top_basket').html(msg);
				if($('#basketid').length > 0){
					$.ajax({
						type: "POST",
						url: "/local/ajax/change_delivery.php", //updatebasket.php
						success: function(basket){
							$('#basketid .cart_step_2 .cart_info').html($(basket).find('.cart_step_2 .cart_info').html());
							$('#logistic_block_val').text($(basket).find('.delivery_price_val').html());

							mobile_basket_style_validate();
						}
					});
				}

				// Фикс для перерасчета пустого места справа для slick в мобильной корзине
				if ($(".catalog_basket_item").length !== catalogBasketItemsCount)
					$(".catalog_slick").slick('reinit');

				if ($("#catalog-basket-is-mobile-template").length > 0 && $(".catalog_basket_item").length === 0){
					window.location = "/";
				}
			}
		});
	//}

	var max_count = el.closest('div').find(".count").data('max_count') || 0;
	var curr_count = parseInt(el.closest('div').find(".count").text());
	// hideAlertQuantity(el, max_count, curr_count);

}

function delInCart(el, id, flash = false){
	//$('.preloader').removeClass('hide');
	//$('#overlay').addClass('active').fadeIn();
	$(el).parents('.item_cart').remove();
	$('.add_cart[data-id="'+id+'"]').removeClass('active').find('.count').text('');

	if(isMobile()){
		$('div[data-id="basket_item_'+id+'"]').css('display','none');
	}

	$.ajax({
		type: "POST",
		url: "/local/ajax/addbasket.php",
		data: {'id': id, 'count': 0, 'flash':flash, template: $('.controls__main-item.cart').length},
		success: function(msg){
			$("#top_basket").html(msg);
				if(parseInt($("#count_in_basket").val())>0){
					$(".dropdown__header-compare.dropdown-cart").show();
				}

			if(typeof ga != 'undefined')
			{
				dataLayer.push({event: 'remove_from_cart', eventCategory: 'ecommerce', eventAction: 'remove_from_cart'});
			}

			$.ajax({
				type: "POST",
				url: "/local/ajax/change_delivery.php",
				success: function(basket){
					if($('#count_in_basket').val() == 0 || flash=="Y"){
						$('.auth_page').addClass('is_empty_cart');
						document.location.href = getCookie('BASKET_BACK_URL'); //редирект на урл до корзины
						$('#subscribe').hide();
						$('#basketid').html(basket);
					}
					else {
						//$('.preloader').addClass('hide');
						$('#overlay').fadeOut();
						if(isMobile()){
							//$('div[data-id="basket_item_'+id+'"]').css('display','none');
							//$('#basketid .reappend_cart').html($(basket).find('.reappend_cart').html());
						}
						$('#basketid .cart_step_2 .cart_info').html($(basket).find('.cart_step_2 .cart_info').html());
					}

					mobile_basket_style_validate();
					lazyload();
				}
			});
		}
	});
}

function mobile_basket_style_validate(){
	if ($("#catalog-basket-is-mobile-template").length > 0) {
		switch ($(".catalog_basket_item").length) {
			case 1:
				if (!$(".js-cart-items").hasClass("cart-one-item")) {
					$(".js-cart-items").addClass("cart-one-item");
					$(".js-catalog-list").removeClass("two-elem");
					$(".catalog_slick").slick('unslick');
				}

				break;
			case 2:
				if (!$(".js-catalog-list").hasClass("two-elem")){
					$(".js-catalog-list").addClass("two-elem");
					$(".catalog_slick").slick('unslick');
				}

				break;
			default:
				slick_catalog_flag = true;
				slick_catalog();

		}
	}
}

function addBookmark(id)
{
	$.ajax({
		type: "POST",
		url: "/local/ajax/compare.php",
		dataType: 'json',
		data: {'action': 'add', 'id': id, 'comp': ''},
		success: function (msg) {
			window.location.href = '/favourites/';
		}
	});
}

// Сравнение
function toggleBookmark(el, id, comp, redirect=false){
	if($(el).hasClass('active')){
		dataCompare = 'del';
	}
	else {
		dataCompare = 'add';
	}

	$.ajax({
		type: "POST",
		url: "/local/ajax/compare.php",
		dataType: 'json',
		data: {'action' : dataCompare, 'id' : id, 'comp' : comp},
		success: function(msg){
			if(typeof msg.message != 'undefined')
			{
				if(dataCompare === 'add')
				{
					if(typeof ga != 'undefined')
					{
						dataLayer.push({event: 'add_to_wishlist', eventCategory: 'engagement', eventAction: 'add_to_wishlist'});
					}
				}

				if(!msg.count)
				{
					$('.favorites-top-block .dropdown-block').removeClass('dropdown-controls__main').
					addClass('dropdown-controls__empty').html('<div class="empty-text">' +
						'<div class="empty-text__head">' +
						'Вы еще ничего не добавили в ваш погреб' +
						'</div><div class="empty-text__about">' +
						'Добавляйте позиции чтобы быстро совершать покупки любимых товаров</div></div>');
					$('.favorites-top-block').removeClass('active');
					$('.favorites-top-block a.btn-link').prop('href', 'javascript:void(0)');
				}
				else
				{
					$('.favorites-top-block a.btn-link').prop('href', '/favourites/');
					$('.favorites-top-block .dropdown-block').addClass('dropdown-controls__main').
					removeClass('dropdown-controls__empty').html('' +
						'<div class="dropdown-controls__item">' +
						'В погребе&nbsp;<span id="favorite_counts"></span>' +
						'</div>' +
						'<a href="/favourites/" class="btn btn-link dropdown-controls__link">' +
						'Перейти в мой погреб' +
						'</a>'
					);

				}
				if(msg.count >= 1)
				{
					$('.favorites-top-block').addClass('active');
				}
				else
				{
					$('.favorites-top-block').removeClass('active');
				}
				$('#favorite_counts').html(msg.message);

				if(typeof fbq === 'function')
				{
					fbq('track', 'AddToWishlist', {
						currency: 'RUB',
					});
				}

				if(redirect)
					window.location.href = redirect;
			}
		}
	});
}

// Изменение шага корзины
function changeStepCart(ind){
	$('#cart').attr('data-step', ind);
}


// Проверка формы в корзине
var send_code = 0;
function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sendCodeFormCart(changed = true){
	send_code = getRandomInRange(1111, 9999);
	$('input[name="send_code_confirm"]').val(send_code);
	$.ajax({
		type: "POST",
		url: "/local/ajax/send_code.php",
		data: {
			'recipient': $('input[name="PERSONAL_PHONE"]').val(),
			'code': send_code,
			'token': $('body').data('token')
		}, //'recipient': $('input[name="PROP_EMAIL"]').val()
		success: function(msg){

			getReCaptcha();

			if(changed){
				$('.user_order_mail').text($('input[name="PERSONAL_PHONE"]').val());
				tClass('.cart_step_2', 'hide'); tClass('.cart_step_3', 'hide');
			}
			else {
				$('.order_error .title').html('Код отправлен еще раз');
				$('.order_error .text').html('');
				openPopup($('.order_error'));
			}
		}
	});
}




function wait30(){
	var timerId = setInterval(function() {
		$('.wait_30 span').text(Math.ceil($('.wait_30 span').text())-1);
	}, 1000);

	// через 30 сек остановить повторы
	setTimeout(function() {
		clearInterval(timerId);
		$('.wait_30').addClass('hide').next().removeClass('hide');
		$('.wait_30 span').text(30);
	}, 30000);
}

function checkFormCart(){
	var flag_cart = false;
	$('.cart_form .cart_step_2 .this_check').each(function(){
		//cl($(this).val());
		if($(this).val().length == 0 || ($(this).val()=='Y' && $(this).prop('checked')===false)){
			flag_cart = true;
		}
	});

	if(flag_cart){
		$('.order_error .title').html('Заполните <br /> все поля');
		$('.order_error .text').html('');
		openPopup($('.order_error'));
	}
	else {
		var data = new FormData($('#basketid')[0]);
		$.ajax({
			processData: false,
			contentType: false,
			type: "POST",
			url: "/local/ajax/check_form_cart.php",
			data: data,
			success: function(res){
				if(res.result){
					sendCodeFormCart();
					changeStepCart('3');
					wait30();
				}
				else if(res.error){
					var strError = '';
					for (var key in res.error) {
						$('[name="'+key+'"]').addClass('empty');
						var value = '- '+res.error[key];
						strError += value+'\n';
					}
					$('.order_error .title').html(strError);
					openPopup($('.order_error'));
				}


			}
		});
	}
}


// Оформление заказа
function addOrder(){
	//$('.preloader').removeClass('hide');
	//$('#overlay').addClass('active').fadeIn();
	var form = $('#basketid');
	var data = new FormData($('#basketid')[0]);
	data.append('token', $('body').data('token'));

	if(form.find('input[name="PROP_EMAIL"]').attr('type') === 'hidden')
	{
		data.delete('PROP_EMAIL');
	}

	$.ajax({
		processData: false,
		contentType: false,
		type: "POST",
		url: '/local/ajax/addorder.php',
		data: data,
		success: function(res){

			getReCaptcha();

			$('.preloader').addClass('hide');
			if(res.result){
				openPopup($('.order_is_add')); //window.location.href = location.href+'?ORDER_ID='+res.result;

				if(res.customer && res.order)
				{
					let initRenderOptIn = false;
					if (typeof window.renderOptIn === "undefined")
						initRenderOptIn = true;

					window.renderOptIn = function () {
						$('.js-popup-confirm-btn-rate')
							.unbind()
							.removeClass('hidden')
							.click(() => {
								startGoogleRate(res.order.number, res.customer.email, res.order.date, true)
							});
					}

					if (initRenderOptIn)
						$('.order_is_add').append('<script src="https://apis.google.com/js/platform.js?onload=renderOptIn" async defer></script>');
					else
						window.renderOptIn();
				}

				if(typeof ga != 'undefined')
				{
					dataLayer.push({event: 'purchase_main', eventCategory: 'ecommerce',
						eventAction: 'purchase_main', eventLabel: 'main'});
					dataLayer.push({event: 'subsc_order', eventCategory: 'subscription',
						eventAction: 'subsc_order', eventLabel: 'order'});
				}

				if(typeof res.result_price != 'undefined' && typeof res.result_products != 'undefined')
				{
					if(typeof window.APRT_SEND === "function")
					{
						window.APRT_SEND({
							pageType: 6,
							purchasedProducts: res.result_products,
							orderInfo: {
								id: res.result,
								totalPrice: res.result_price
							}
						});
					}
				}

				if(typeof ym !== 'undefined')
				{
					ym(53096326, 'reachGoal', 'ORDER'); // Цель Заказ Метрика
					ym(53096326, 'reachGoal', 'REG'); // Цель Регистрация Метрика
				}

				if(typeof fbq === 'function')
				{
					fbq('track', 'Purchase', {
						currency: 'RUB',
					});
					fbq('track', 'Lead'); // Пиксель заказа facebook
				}
			}
			else if(res.error){
				var strError = '';
				for (var key in res.error) {
					$('[name="'+key+'"]').addClass('empty');
					var value = '- '+res.error[key];
					strError += value+'\n';
				}
				$('.order_error .title').html(strError);
				openPopup($('.order_error'));
			}
		}
	});
}


// Выбор способа доставки в оформлении заказа
function changeDeliveryChoice(el) {
	if($(el).val() == '3'){
		$('.street_order_block, .address_order_block').addClass('hide');
		$('.pickup_order_block').removeClass('hide');
		$('[name="PROP_STREET"], [name="PROP_BUILD"]').removeClass('this_check');
		$('[name="PROP_SHOP"]').addClass('this_check');
		$('.cart_form form .cart_step_2 textarea').attr('placeholder', '');
	}
	else {
		if($('#select_profil').length == 0){
			$('.address_order_block').removeClass('hide');
		}
		$('.street_order_block').removeClass('hide');
		$('.pickup_order_block').addClass('hide');
		$('[name="PROP_STREET"], [name="PROP_BUILD"]').addClass('this_check');
		$('[name="PROP_SHOP"]').removeClass('this_check');
		$('.cart_form form .cart_step_2 textarea').attr('placeholder', 'Домофон, подъезд, этаж...');
	}
}


// Копирование
function copyBuffer(){
	$("#friend .btn").addEventListener("click", function(event) {
		event.preventDefault();
		$('#friend .red_a').attr('href').select();
		document.execCommand("copy");
	});
}


// Подписка на товар
function subscribeElement(){
	var data_subscibe = $('.subscibe_element form').serializeArray();
	var form_btn = $('.subscibe_element form .btn.btn_lg');
	data_subscibe.push({name: 'token', value: $('body').data('token')});
	if(!form_btn.hasClass('is-send'))
	{
		form_btn.addClass('is-send').html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>');
		$.ajax({
			type: "POST",
			url: "/local/ajax/add_subscibe_element.php",
			data: data_subscibe,
			success: function (result)
			{
				getReCaptcha();

				var parsedData = JSON.parse(result);
				if (parsedData.success) {
					closePopup(false);
					openPopup($('.notification_subscibe_element'), false);
					if ($(".lk-block-not-user").length > 0) {
						$(".lk-block-not-user").html('<a class="lk-block__block" href="/lk/"><div class="text">' + $(".input_abc").val() + '</div><div class="icon"><img src="/local/html/img/svg/lk_new.svg" alt=""></div></a>');
					}
					if (typeof ym !== 'undefined') {
						ym(53096326, 'reachGoal', 'SUBSCIBE_ELEMENT');
					}

					if (typeof ga != 'undefined') {
						dataLayer.push({event: 'pre_order', eventCategory: 'ecommerce', eventAction: 'pre_order'});
						dataLayer.push({event: 'subsc_pre_order', eventCategory: 'subscription',
							eventAction: 'subsc_pre_order', eventLabel: 'pre_order'});
					}

					if(parsedData.customer && parsedData.order)
					{
						let initRenderOptIn = false;
						if (typeof window.renderOptIn === "undefined")
							initRenderOptIn = true;

						window.renderOptIn = function () {
							$('.js-popup-confirm-btn-rate')
								.unbind()
								.removeClass('hidden')
								.click(() => {
									startGoogleRate(parsedData.order.number, parsedData.customer.email, parsedData.order.date)
								});
						}

						if (initRenderOptIn)
							$('.order_is_add').append('<script src="https://apis.google.com/js/platform.js?onload=renderOptIn" async defer></script>');
						else
							window.renderOptIn();
					}

					if (typeof mindbox == 'function' && $('.subscibe_element form [name="EMAIL"]').val()) {
						mindbox("async", {
							operation: "Online.SubscriptionInPreOrder.JS",
							data: {
								customer: {
									email: $('.subscibe_element form [name="EMAIL"]').val(),
									subscriptions: [
										{
											pointOfContact: "Email"
										}
									]
								}
							}
						});
					}
					form_btn.removeClass('is-send').html('Подтвердить');
				} else {
					$("#ajax_result_subscribe_error").html(parsedData.message);
					/*$('.subscibe_err').html('<br />'+parsedData);
					setTimeout(function(){
						$('.subscibe_err').html('');
					}, 3000);*/
					form_btn.removeClass('is-send').html('Подтвердить');
				}
			}
		});
	}
}
//openPopup($('.subscibe_element'));

// Авторизация / регистрация / восстановление пароля
function getAuth(form_class = false, type = false){
	var data = $(form_class).serialize()+'&AUTH_TYPE='+type;
	//cl(data);
	$.ajax({
		type: "POST",
		url: "/local/ajax/auth.php",
		data: data,
		success: function(result){
			var parsedData = JSON.parse(result);
			//cl(parsedData);
			if (parsedData === 'success') {
				if(type == 3){
					location.href = window.location.href+'?RE=Y';
					//cl(type);
				}
				else {
					location.href = window.location.href;

				}
			} else {
				$(form_class + ' .auth_err').html(parsedData);
				setTimeout(function(){
					$(form_class + ' .auth_err').html('');
				}, 3000);
				//openPopup($('.order_error'));
			}

			if(type == 2){
				ym(53096326, 'reachGoal', 'REG');
			}
		}
	});
}


// Скролл вверх или вниз
var tempScrollTop, currentScrollTop = 0;
if($(window).width() < 992){
	$(document).on('scroll', function(){
		currentScrollTop = $(document).scrollTop();
		if (tempScrollTop > currentScrollTop || currentScrollTop < 62){
			//cl('вверх');
			$('#sub_header, #plashka_warning').addClass('swipe_active');
		}
		else if (tempScrollTop < currentScrollTop && $('#sub_header').hasClass('swipe_active')){
			//cl('вниз');
			$('#sub_header, #plashka_warning').removeClass('swipe_active');
		}

		//cl(tempScrollTop);
		//cl($(window).height());
		if (tempScrollTop > currentScrollTop && currentScrollTop < $(window).height()-100 && $('.price_float_mob').hasClass('active')){
			$('.price_float_mob').removeClass('active');
		}
		else if (tempScrollTop < currentScrollTop && currentScrollTop > $(window).height()-100){
			$('.price_float_mob').addClass('active');
		}

		tempScrollTop = currentScrollTop;
	});
}



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}


function openTypeFilter(){
	if($(window).width() < 768){
		$('.filter_TYPE .name').trigger('click');
	}
}



$(document).ready(function(){

	$(document).on('mouseover', "#top_basket", function(event){
		$(".dropdown__header-compare.dropdown-cart").show();
	})

	$(document).on('mouseleave', ".dropdown__header-compare.dropdown-cart", function(event){
		$(".dropdown__header-compare.dropdown-cart").hide();
	});

    $(".h1-size").each(function ()
    {
        var length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = ($(this).width() / length  * 3)+14;
			if(size>40){
				size=40;
			}
            $(this).css('font-size', parseInt(size) + 'px');
            $(this).css('line-height', parseInt(size+10) + 'px');
            $(this).fadeIn(1000);

    });

	jQuery(function($){
	   // $('input[name="PERSONAL_PHONE"]').mask('+7(000)000-00-00');
	   $('input[name="PERSONAL_BIRTHDAY"]').mask('99.99.9999');
	});

	$(document).on('click', ".cart_btn", function(event){
	});


	$(document).on('submit', '.serach-form',function(){
	})


	$(document).on('click', ".check_lic_href", function(event){
		window.open('/rules/','_blank');
		return false;
	});

	$(document).on('focus', '[name="PERSONAL_PHONE"], input[name="PROP_PHONE"]', function(){
		if($(this).val().length < 16){
			$(this).val('+7(');
		}
	});

	$('body').on('click', '#slider_black_friday', function(e){
		scrollToEl($('.catalog_list_title').eq(0), 100);
	});

	$(document).keypress(function(e) {
		if(e.which == 13) {
			if(!$('#auth').hasClass('hide')){
				$('.popup_contain_block:not(.hide) .btn_enter').click();
				cl('You pressed enter!');
			}
		}
	});

	setTimeout(function(){
		slick_section();
		slick_catalog();
		//slick_brands();
		init_range();
		lazyload();
	}, 100);


	$('.search input[type="text"]').on('blur', function(){
		setTimeout(function(){
			//$('.load_search_items').remove();
		}, 500);
	});


	if($('.date_item').length > 0){
		$('.date_item').mask('AB.CD.EF00', {
			translation: {
				A: { pattern: /[0-3]/ },
				B: { pattern: /[0-9]/ },
				C: { pattern: /[0-1]/ },
				D: { pattern: /[0-9]/ },
				E: { pattern: /[1-2]/ },
				F: { pattern: /[0,9]/ },
			},
			onKeyPress: function(a, b, c, d) {
				if (!a) return;
				let m = a.match(/(\d{1})/g);
				if (!m) return;

				if (parseInt(m[0]) === 3) {
					d.translation.B.pattern = /[0-1]/;
				} else {
					d.translation.B.pattern = /[0-9]/;
				}
				if (parseInt(m[2]) == 1) {
					d.translation.D.pattern = /[0-2]/;
				} else {
					d.translation.D.pattern = /[0-9]/;
				}

				if (parseInt(m[4]) === 1) {
					d.translation.F.pattern = /[9]/;
				} else {
					d.translation.F.pattern = /[0]/;
				}

				let temp_value = c.val();
				c.val('');
				c.unmask().mask('AB.CD.EF00', d);
				c.val(temp_value);
			}
		})
		.keyup();
	}

BX.addCustomEvent("onFrameDataReceived" , function(json){

	if($('[name="PERSONAL_PHONE"]').length > 0){
		$('[name="PERSONAL_PHONE"]').mask('+7(999)999-99-99').on('blur', function(){//, {'placeholder': '+7(905)123-45-67'}
			if($(this).length > 0){
				if($(this).val().length > 0){
					$('[name="PERSONAL_PHONE"], [name="PROP_PHONE"]').val($(this).val());
				}
			}
		});
	}
	if($('[name="PROP_PHONE"]').length > 0){

		console.log('bbb');

		$('[name="PROP_PHONE"]').mask('+7(999)999-99-99').on('blur', function(){//, {'placeholder': '+7(905)123-45-67'}
			if($(this).length > 0){
				if($(this).val().length > 0){
					$('[name="PERSONAL_PHONE"], [name="PROP_PHONE"]').val($(this).val());
				}
			}
		});
	}

	$('[name="PERSONAL_PHONE"], input[name="PROP_PHONE"]').on('focus', function(){
		if($(this).val().length < 16){
			$(this).val('+7(');
		}
	});
	/*$('[name="PERSONAL_PHONE"], input[name="PROP_PHONE"]').on('blur', function(){
		if($(this).val().length < 16){
			$(this).val('');
		}
	});*/

	if($('.input_time').length > 0){
		$('.input_time').mask('00:00', {placeholder: "00:00"});
	}
});
	/*if($('.input_price').length > 0){
		$('.input_price').mask('00 000 000', {
			reverse: true,
			onChange: function(cep){
				console.log('cep changed! ', cep);
			},
		});
	}*/


	if($('#copy-button-lg').length > 0){
		var clipboard = new ClipboardJS('#copy-button-lg');
		clipboard.on('success', function(e) {
			openPopup($('.href_copy'));

			e.clearSelection();
		});
	}
	if($('#copy-button-sm').length > 0){
		var clipboard = new ClipboardJS('#copy-button-sm');
		clipboard.on('success', function(e) {
			openPopup($('.href_copy'));
			e.clearSelection();
		});
	}



	$(window).resize(function(){
		slick_section();
		slick_catalog();
		//slick_brands();
		if($(window).width() > 767){
			$('#kombox-filter').show();
		}
	});


	// Скрытие/раскрытие многоуровневого меню
	$('.menu_float ul li.parent > a.parent').on('click', function(e){
		//if(!$(this).parent().hasClass('open')){
			$(this).parent().toggleClass('open').siblings().removeClass('open');
			e.preventDefault();
		//}
	});


	// Клик по корзине в списке товаров
	$('#content').on('click', '.add_cart', function(){
		if(!$(this).hasClass('not_add_cart')){
			addCart($(this));
		}
	});
	$('#content').on('click', '.add_cart .minus', function(e){
		delCart($(this), e);
	});


	// Рейтинг
	$(document).on('click', '.stars_hover .star', function(e){
		var el = $(this).parent().find(this).index();
		$(this).parent().find('.star').each(function(){
			if($(this).index() > el){
				$(this).addClass('star_e');
			}
			else {
				$(this).removeClass('star_e');
			}
			$('input[name="RATING"]').val(el+1);
		});
	});


	// Переключатель авторизации
	$('.toggle_auth').on('click', function(){
		if(!$(this).hasClass('active')){
			$('.toggle_auth').removeClass('active');
			$('.toggle_auth_input').toggleClass('hide');
			$(this).addClass('active');
		}
	});


	// Отправка заказа
	$('.cart_form form').on('submit', function(e){
		var data = $(this).serialize();
		openPopup($('.order_is_add'));
		return false;
	});


	// Подписка на рассылку
	$(document).on('submit', '#subscribe', function(e){
		$.ajax({
			type: "POST",
			url: "/local/ajax/subscribe.php",
			data: {
				'email': $('#subscribe input[type="email"]').val(),
				'UF_RULES': $('#subscribe input[name="UF_RULES"]:checked').val(),
				'token': $('body').data('token')
			},
			success: function(msg)
			{
				getReCaptcha();

				if(msg == 'success'){
					$('.order_error .title').html('Вы успешно подписались на рассылку');
				}
				else if(msg == 'confirm') {
					$('.order_error .title').html('Скидка уже в пути! Подтвердите свою почту в письме 💌');

					if(typeof ga != 'undefined')
					{
						dataLayer.push({event: 'subsc_main_down', eventCategory: 'subscription',
							eventAction: 'subsc_main_down', eventLabel: 'main_down'});
					}

					if(typeof mindbox == 'function')
					{
						mindbox("async", {
							operation: "Online.SubscriptionInFooterForm.JS",
							data: {
								customer: {
									email: $('#subscribe input[type="email"]').val(),
									subscriptions: [
										{
											pointOfContact: "Email"
										}
									]
								}
							}
						});
					}

				}
				else {
					$('.order_error .title').html(msg);
				}
				openPopup($('.order_error'));
			}
		});
		return false;
	});
	$(document).on('submit', '#subscribe_v2', function(e){
		var form = $(this);
		$.ajax({
			type: "POST",
			url: "/local/ajax/subscribe.v2.php",
			data: {
				'email': form.find('input[name="email"]').val(),
				'name': form.find('input[name="name"]').val(),
				//'phone': form.find('input[name="phone"]').val(),
				'UF_RULES': form.find('input[name="UF_RULES"]').val(),
				'token': $('body').data('token')
			},
			success: function(msg)
			{
				getReCaptcha();

				var expires = "";
				var days = 7;
				if (days) {
					var date = new Date();
					date.setTime(date.getTime() + (days*24*60*60*1000));
					expires = "; expires=" + date.toUTCString();
				}

				if(msg == 'success'){
					$('.order_error .title').html('Вы успешно подписались на рассылку');
					form.closest('.get-discount-section').remove();
					document.cookie = "SUBSCRIPTION=Y" + expires + "; path=/";
				}
				else if(msg == 'confirm') {
					$('.order_error .title').html('Скидка уже в пути! Подтвердите свою почту в письме 💌');

					if(typeof ga != 'undefined')
					{
						dataLayer.push({event: 'subsc_main_down', eventCategory: 'subscription',
							eventAction: 'subsc_main_down', eventLabel: 'main_down'});
					}

					if(typeof mindbox == 'function')
					{
						mindbox("async", {
							operation: "Online.SubscriptionInFooterForm.JS",
							data: {
								customer: {
									email: form.find('input[name="email"]').val(),
									mobilePhone: form.find('input[name="phone"]').val(),
									firstName: form.find('input[name="name"]').val(),
									subscriptions: [
										{
											pointOfContact: "Email"
										}
									]
								}
							}
						});
					}
					form.closest('.get-discount-section').remove();
					document.cookie = "SUBSCRIPTION=Y" + expires + "; path=/";
				}
				else {
					$('.order_error .title').html(msg);
				}
				openPopup($('.order_error'));
			}
		});
		return false;
	});




	// Форма отзывов
	$(document).on('submit', '.form_review form', function(){
		$.ajax({
			type: "POST",
			url: "/local/ajax/review_add.php",
			data: $(this).serialize(),
			success: function(msg){
				if(msg.error == 'Y'){
					$('.form_review .err').html('<br><div class="red text-center">'+msg.text+'</div>');
				}
				else {
					$('.form_review form').html('<h2 class="text-center">'+msg.text+'</h2>');
					$('.form_review .err').html('');
				}
			}
		});
		return false;
	});

	// Изменения профиля в оформлении заказа
	$('#select_profil').on('change', function(){
		var loc = $("#select_profil option:selected").data('loc');
		var street = $("#select_profil option:selected").data('street');
		var build = $("#select_profil option:selected").data('build');
		var flat = $("#select_profil option:selected").data('flat');
		var dop = $("#select_profil option:selected").data('dop');

		$('[name="PROP_LOCATION"]').val(loc);
		$('[name="PROP_STREET"]').val(street);
		$('[name="PROP_BUILD"]').val(build);
		$('[name="PROP_FLAT"]').val(flat);
		$('[name="PROP_DOP"]').val(dop);
	});

});


//-------------Промокоды--------------
/*function setPromo(action, coupon){
    $.ajax({
        type: 'post',
        url: '/local/ajax/basket/set_promo.php',
		data: {
			'promo' : $('.form_promo input[type="text"]').val(),
			'action': action,
			'coupon': coupon
		},
        success: function(data){
            if(data.type == "error"){
				$('.order_error .title').html(data.message);
				openPopup($('.order_error'));
            }
            else{
				$('#basketid .cart_step_1').html($(data).find('.cart_step_1').html());
				//$('.order_error .title').html('Промокод успешно добавлен!');
				//openPopup($('.order_error'));
            }
		}
    });
}*/

//---------Покупка в 1 клик-----------

function loginSms(el){
	var phone=$("#enter_phone").val().replace(/\D+/g,"");
	//var name=$("#enter_name").val();
	if(parseInt(phone.replace(/\D+/g,"").length)!=11){
		$(".auth_err").html('телефон введен некорректно');
	}else{
		$.post('/local/ajax/auth/sms.php',
		{phone:phone}, //, name:name
		function(data){
			$(el).html(data);
		});
	};
}

function buyoneclick(id, name, pic, price, old_price, quantity, url){

	if($('[data-id="basket_item_'+id+' .catalog_item_price"]').length)
	{
		price = $('[data-id="basket_item_'+id+' .catalog_item_price"]').text().replace(' р', '');
	}
	if($('[data-id="basket_item_'+id+' .catalog_item_discount"]').length)
	{
		old_price = $('[data-id="basket_item_'+id+' .catalog_item_discount"]').text().replace(' р', '');
	}

	if($('.item_bg .price_block:first .price span').length)
	{
		price = $('.item_bg .price_block:first .price span').text();
	}
	if($('.item_bg .price_block .price.old-price span').length)
	{
		old_price = $('.item_bg .price_block .price.old-price span').text();
	}

	$("#oneclick_tovar_id").val(id);
	$("#oneclick_pic").attr('src', pic);
	$("#oneclick_name").text(name.replace(/&quot;/gi,'"'));
	$("#oneclick_price").text(price+' р');
	if(old_price){
		$("#oneclick_old_price").text(old_price+' р');
		$("#oneclick_old_price").show();
		$("#oneclick_price").addClass('pull-right');
	}else{
		$("#oneclick_old_price").hide();
		$("#oneclick_price").removeClass('pull-right');
	}


	var cur_count;
	if($('.catalog_item_addcart[data-id='+id+'] .count').text().length==0 || $('.catalog_item_addcart[data-id='+id+'] .count').text()=="0"){
		cur_count=1;
	}else{
		cur_count=$('.catalog_item_addcart[data-id='+id+'] .count').text();
	}
	$("#one_count").attr('id_product', id);
	$("#one_count").text(cur_count);

	// if(cur_count < quantity)
	// 	$('#one_plus').removeClass('disabled');

	$('#one_count').attr('data-max_count', quantity).attr('data-similar-url', url);
	$('#one_count').data('max_count', quantity).data('similar-url', url);
	$("#oneclick_tovar_quantity").val(cur_count);



	$("#ajax_result_oneclick_error").html('');

	openPopup($('.buyoneclick-popup'));
	$(".oneclick-btn").css({
		'pointer-events' : 'auto'
	});
	$("#ajax_result_oneclick_main").show();
	$("#ajax_result_oneclick_auth").hide();
};

function oneclickCloseAuth(){
	$("#ajax_result_oneclick_main").show();
	$("#ajax_result_oneclick_auth").hide();
	$(".oneclick-btn").css({
		'pointer-events' : 'auto'
	});
}


//фон в оформлении заказа на нормальный
$("#input_order_name").on('focus', function(){
	$("#input_order_name").css({
		'background': 'none'
	})
});
$("#input_order_phone").on('focus', function(){
	$("#input_order_phone").css({
		'background': 'none'
	})
});

$(".input_sms").on('focus', function(){
	$(".input_sms").css({
		'background': 'none'
	})
});

function enterSms(v){
	$(".input_sms").attr("value", v);
}
//разворачивает слайд, скроллит и фокусирует
function focusSlide(ob,focus){
	$(ob).slideToggle(200);
	$(focus).focus();
	$(ob).scrollTop(9999);
}


function check_order(){

    var form = $("#basketid");
    var form_btn = form.find('div.btn');

    if(!form_btn.hasClass('is-send'))
	{
		form_btn.addClass('is-send').html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>');
		var formData = form.serializeArray();
		var emailHidden = false;
		if(form.find('input[name="PROP_EMAIL"]').attr('type') == 'hidden')
			emailHidden = true;

		if(emailHidden)
		{
			var formData_ = [];
			for(var i in formData)
			{
				if(formData[i]['name'] !== "PROP_EMAIL")
					formData_.push(formData[i]);
			}
			formData = formData_;
		}

		$.ajax({
			type: 'post',
			dataType:'json',
			url: '/local/ajax/order/check_order.php',
			data: formData,
			success: function(data){
				if(data.type == "error"){

					if($("#input_order_phone").val().replace(/\D+/g,"").length!=11){
						$("#input_order_phone").css({
							'background': 'rgb(255, 209, 209)'
						})
					}else{
						$("#input_order_phone").css({
							'background': 'none'
						})
					}

					if($("#input_order_name").val().length==0){
						$("#input_order_name").css({
							'background': 'rgb(255, 209, 209)'
						})
					}else{
						$("#input_order_name").css({
							'background': 'none'
						})
					}

					if(!emailHidden && !validateEmail($("#input_order_email").val())){
						$("#input_order_email").css({
							'background': 'rgb(255, 209, 209)'
						})
					}else{
						$("#input_order_email").css({
							'background': 'none'
						})
					}

					if($(".sms_code_input_gen").val()!=$(".input_sms").val()){
						$(".input_sms").css({
							'background': 'rgb(255, 209, 209)'
						})
					}else{
						$(".input_sms").css({
							'background': 'none'
						})
					}

					$("#error_normal_order").html(data.message);

					form_btn.removeClass('is-send').html('Оформить заказ');

				}
				else if(data.type == "auth"){
					openPopup($('.order_error'));
					$('.order_error .title').html(data.message);

					form_btn.removeClass('is-send').html('Оформить заказ');
				}
				else if(data.type == "ok"){
					addOrder();
					wait30();
				}
			}
		});
	}
};


function authByPhone(reload, form_obj){
	if(typeof form_obj != 'undefined')
		var form = $(form_obj).closest("form");
	else
		var form = $(".auth_form");

    $.ajax({
        type: 'post',
        dataType:'json',
        url: '/local/ajax/auth/auth.php',
        data: form.serialize(),
        success: function(data){
        	$('.sms_code_label-error').addClass('hidden');
        	$('.tel_label error').removeClass('error');
			if(data.type == "error"){
				$(".auth_ajax_result_error").html(data.message);
			}
            else if(data.type == "ok"){

            	if(typeof window.callBackFunctions != 'undefined' && typeof window.callBackFunctionsParam != 'undefined')
				{
					window[window.callBackFunctions](window.callBackFunctionsParam)
					delete window.callBackFunctionsParam;
					delete window.callBackFunctions;
				}
            	else
				{
					if(typeof reload !=undefined)
						window.location.reload();
					else
						window.location.href = getCookie('BACK_URL');
				}
        	}
        }
	});
}



//BX.addCustomEvent("onFrameDataReceived" , function(json){
//});

	// вводить только буквы в имени
	$(".input_name").on('keyup', function(){
		var str=$(".input_name").val().replace(/[^a-zA-Z А-Яа-яЁё]/g,'')
		$(this).val(str);
	});
	// вводить только буквы в ином поле
	$(".input_abc").on('keyup', function(){
		var str=$(".input_abc").val().replace(/[^a-zA-Z А-Яа-яЁё]/g,'')
		$(this).val(str);
	});

	function smsCodeResendTimer(){
		if (typeof window.smsCodeResendedCount === "undefined")
			window.smsCodeResendedCount = 0;

		let startFromSec = 30;
		let SMSCodeSendAgainBtn = $('.js-sms-code-send-again');
		let SMSCodeTimerText = $('.js-sms-code-timer');
		let SMSCodeSendAgainWrap = $('.js-sms-code-send-again-wrap');
		let SMSCodeTimerTextWrap = $('.js-sms-code-timer-text-wrap');

		SMSCodeSendAgainBtn.unbind().addClass('hidden');
		SMSCodeTimerText.text('00:' + startFromSec);

		if (typeof window.smsCodeResendedInterval !== "undefined")
			clearInterval(window.smsCodeResendedInterval);

		if (++window.smsCodeResendedCount >= 10) {
			SMSCodeSendAgainWrap.addClass("hidden");
			return;
		}

		SMSCodeSendAgainWrap.removeClass("hidden");
		SMSCodeTimerTextWrap.removeClass("hidden");

		window.smsCodeResendedInterval = setInterval(() => {
			function numberCorrection(number){
				if (number < 10 && number >= 0)
					return "0" + number;

				return number;
			}

			SMSCodeTimerText.text('00:' + numberCorrection(--startFromSec));

			if (startFromSec <= 0){
				clearInterval(window.smsCodeResendedInterval);
				SMSCodeTimerText.text('00:00');
				SMSCodeTimerTextWrap.addClass("hidden");

				SMSCodeSendAgainBtn.removeClass('hidden').click(() => {
					$('.js-sms-code-send-again-wrap').addClass('hidden');

					let send_code = getRandomInRange(1111, 9999);
					$('.sms_code_input_gen').val(send_code);

					if(window.authLastPhoneNum && window.authLastPhoneNum.length === 11) {
						$.ajax({
							type: 'post',
							dataType: 'json',
							url: '/local/ajax/send_code.php',
							data: {
								'phone': window.authLastPhoneNum,
								'code': send_code,
								'token': $('body').data('token')
							},
							success: function (msg) {
								getReCaptcha();
								smsCodeResendTimer();
							}
						});
					}else
						$(".sms_code_label").addClass('hidden');
				});
			}
		}, 1000);
	}

	function enterCodebyPhone(input_phone){
		let phone = input_phone.replace(/\D+/g,"");

		if(phone.length === 11){
			$('.sms_code_label').removeClass('hidden');
			$('.sms_code_label').focus();

			if (typeof window.authLastPhoneNum === "undefined")
				window.authLastPhoneNum = "";
			else if (phone === window.authLastPhoneNum)
				return;

			window.authLastPhoneNum = phone;

			send_code = getRandomInRange(1111, 9999);
			$('.sms_code_input_gen').val(send_code);

			if (typeof window.smsCodeResendedInterval === "undefined") {
				$.ajax({
					type: 'post',
					dataType: 'json',
					url: '/local/ajax/send_code.php',
					data: {
						'phone': phone,
						'code': send_code,
						'token': $('body').data('token')
					},
					success: function (msg) {
						getReCaptcha();
						smsCodeResendTimer();

						// if(msg==0){
						// $(".lic_checkbox").removeClass("hidden");
						// }else{
						// $(".lic_checkbox").addClass("hidden");
						// $(".lic_checkbox").html('<input type="hidden" name="UF_RULES" value="Y" checked />')
						// }
					}
				});
			}
		}else{
			$('.sms_code_label').addClass('hidden');
		}
	};


function submit_oneclick(){

	if($(".input_name").attr('type')=='hidden'){
		$('.preloader').removeClass('hide');
		$('#overlay').addClass('active').fadeIn();
	}

	$(".oneclick-btn").css({
		'pointer-events' : 'none'
	});

    var form = $("#oneclick_form");
	var form_btn = form.find('div.btn');

	if(!form_btn.hasClass('is-send'))
	{
		form_btn.addClass('is-send').html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>');
		var data_form = new FormData(form[0]);
		data_form.append('token', $('body').data('token'));
		if(form.find('input[name="EMAIL"]').attr('type') === 'hidden')
		{
			data_form.delete('EMAIL');
		}

		$.ajax({
			processData: false,
			contentType: false,
			type: 'post',
			dataType:'json',
			url: '/local/ajax/order/oneclick.php',
			data: data_form,
			success: function(data)
			{
				getReCaptcha();

				if(data.type == "error"){
					$('.preloader').addClass('hide');
					$(".oneclick-btn").css({
						'pointer-events' : 'auto'
					});
					$("#ajax_result_oneclick_ok").html('');
					$("#ajax_result_oneclick_error").html(data.message);
					form_btn.removeClass('is-send').html('Оформить заказ');
				}
				else if(data.type == "sms"){
					$("#enter_phone").val($(".input_phone").val());
					$("#ajax_result_oneclick_main").hide();
					$("#ajax_result_oneclick_auth").html(data.message);
					$("#ajax_result_oneclick_auth").show();
					form_btn.removeClass('is-send').html('Оформить заказ');
				}
				else if(data.type == "ok"){
					$('.preloader').addClass('hide');
					var html_ok=$('.oneclick_add').html();

					if(data.customer && data.order)
					{
						let initRenderOptIn = false;
						if (typeof window.renderOptIn === "undefined")
							initRenderOptIn = true;

						window.renderOptIn = function () {
							$('.js-popup-confirm-btn-rate')
								.unbind()
								.removeClass('hidden')
								.click(() => {
									startGoogleRate(data.order.number, data.customer.email, data.order.date)
								});
						}

						if (initRenderOptIn)
							$('.order_is_add').append('<script src="https://apis.google.com/js/platform.js?onload=renderOptIn" async defer></script>');
						else
							window.renderOptIn();
					}

					if(typeof ga != 'undefined')
					{
						dataLayer.push({event: 'subsc_1_click', eventCategory: 'subscription',
							eventAction: 'subsc_1_click', eventLabel: '1_click'});
						dataLayer.push({event: 'purchase_1_click', eventCategory: 'ecommerce',
							eventAction: 'purchase_1_click', eventLabel: '1_click'});
					}

					if(typeof data.order != 'undefined' && typeof data.basket != 'undefined')
					{
						if(typeof window.APRT_SEND === "function")
						{
							window.APRT_SEND({
								pageType: 6,
								purchasedProducts: data.basket,
								orderInfo: {
									id: data.order.id,
									totalPrice: data.order.price
								}
							});
						}
						if(typeof mindbox == 'function' && form.find('[name="EMAIL"]').val())
						{
							mindbox("async", {
								operation: "Online.SubscriptionInPopup.JS",
								data: {
									customer: {
										email: form.find('[name="EMAIL"]').val(),
										subscriptions: [
											{
												pointOfContact: "Email"
											}
										]
									}
								}
							});
						}
					}

					$("#ajax_result_oneclick_main").hide();
					$("#ajax_result_oneclick_auth").html(html_ok);
					$("#ajax_result_oneclick_auth").show();
					$("#ajax_result_oneclick_error").html('');
					// $("#oneclick_form .is_input").parent().addClass('hidden');
					if($(".lk-block-not-user").length > 0){
						$(".lk-block-not-user").html('<a class="lk-block__block" href="/lk/"><div class="text">'+$(".input_name").val()+'</div><div class="icon"><img src="/local/html/img/svg/lk_new.svg" alt=""></div></a>');
					}
					form_btn.removeClass('is-send').html('Оформить заказ');

					if(typeof ym !== 'undefined')
						ym(53096326, 'reachGoal', 'SUBMIT_ONECLICK');
					cl('SUBMIT_ONECLICK');
				}
			}
		});
	}
};



function hideAlertQuantity(el, max_count, curr_count)
{
	if(curr_count < max_count) {
		el.closest('div').find('.plus').removeClass('disabled');
		try{
			el.closest('div').find('.plus').tooltip( "destroy" );
		}catch {

		}
	}
}
function showAlertQuantity(el, max_count, curr_count, url)
{
	if(max_count && curr_count >= max_count)
		el.find('.plus').addClass('disabled');

	if(el.find('.plus').hasClass("disabled"))
	{
		el.find('.plus').tooltip({
			position: {
				my: "center bottom",
				at: "center top",
				using: function( position, feedback ) {
					$( this ).css( position );
					$( "<div>" )
						.addClass( "arrow" )
						.addClass( feedback.vertical )
						.addClass( feedback.horizontal )
						.appendTo( this );
				}
			},
			content: function() {
				var element = $( this );
				return 'Товар закончился<br><a href="'+url+'" class="add-more-products">Посмотреть похожие товары</a>';
			},
			show: null,
			close: function (event, ui) {
				ui.tooltip.hover(
					function () {
						$(this).stop(true).fadeTo(400, 1);
					},
					function () {
						$(this).fadeOut("400", function () {
							$(this).remove();
						})
					});
			}
		});
		el.find('.plus').attr('title', 'Товар закончился' );
		el.find('.plus').tooltip('open');
	}
}

$(document).ready(function(){
	var cur = parseInt($("#one_count").text());

	getReCaptcha();

	$(document).on('click', '#top_basket .cart_btn.cart_btn-primary', function(){
		if(typeof ga != 'undefined')
		{
			dataLayer.push({event: 'begin_checkout', eventCategory: 'ecommerce', eventAction: 'begin_checkout'});
		}
	});
	$(document).on('click', '.digi-search-form__input', function(){
		if(typeof ga != 'undefined')
		{
			dataLayer.push({event: 'view_search_results', eventCategory: 'engagement', eventAction: 'view_search_results'});
		}
	});

	var chatImg = setInterval(function(){
		if($('#retailcrm-consultant-app').length)
		{
			clearInterval(chatImg);
			var player = '<lottie-player src="/local/html/json/lf20_TTKtC8.json" background="transparent" speed="1" ' +
				'style="width:60px;height:60px;position:relative;top:1px;left:2px;" loop autoplay></lottie-player>';

			$('#retailcrm-consultant-app .consultant-icon').html(player);
		}
	}, 10);

	$('#signIn').on('shown.bs.modal', function () {
		$('#signIn input[type="tel"]:first').focus();
	})

	$("body").on('click', '#one_plus', function(){
		var el = $(this).closest('div');
		var max_count = el.find(".count").data('max_count') || 0;
		var curr_count = parseInt(el.find(".count").text());
		var url = el.find(".count").data('similar-url') || '#';

		// showAlertQuantity(el, max_count, curr_count, url);
		// if(el.find('.plus').hasClass("disabled"))
		// 	return;

		cur = parseInt($("#one_count").text());
		$("#one_count").text(cur+1);
		$("#oneclick_tovar_quantity").val(cur+1);
	});
	$("body").on('click', '#one_minus', function(){
		var el = $(this).closest('div');
		var max_count = el.closest('div').find(".count").data('max_count') || 0;
		var curr_count = parseInt(el.closest('div').find(".count").text());

		cur = parseInt($("#one_count").text());
		if(cur>1){
			$("#one_count").text(cur-1);
			$("#oneclick_tovar_quantity").val(cur-1);
		}
		cur = parseInt($("#one_count").text());

		// hideAlertQuantity(el, max_count, cur);
	});

	$(".input_name").on('click', function(){
		$(".error_name").hide();
	});
	$(".input_email").on('click', function(){
		$(".error_email").hide();
	});
	$(".input_phone").on('click', function(){
		$(".error_phone").hide();
	});
	$(".input_sms").on('click', function(){
		$(".error_sms").hide();
	});

	var hash = location.hash.replace('#','');
	if(hash == 'similar-items-block') {
		$('html, body').animate({ scrollTop: $('#similar-items-block').offset().top-100}, 300);
	}

	$(document).on('click', '.catalog_item_compare', function(){
		var self = $(this);

		if(self.hasClass('active'))
		{
			$.get('/',
				{
					action: "DELETE_FROM_COMPARE_LIST",
					id: self.data('compare_id'),
					ajax_action: 'Y'
				},
				function(data) {
					$("#compare-header-result").html(data);
					compareFieldsEqual();
					$('.compare-icon__block').closest('.controls__main-item').addClass('active');

				}
			);
			self.removeClass('active');
		}
		else
		{
			$.get('/',
				{
					action: "ADD_TO_COMPARE_LIST",
					id: self.data('compare_id'),
					ajax_action: 'Y'
				},
				function(data) {
					$("#compare-header-result").addClass('dropdown-controls__main')
						.removeClass('dropdown-controls__empty')
						.html(data);
					$('.compare-icon__block').closest('.controls__main-item').addClass('active');

					if(typeof ga != 'undefined')
					{
						dataLayer.push({event: 'compare', eventCategory: 'engagement', eventAction: 'compare'});
					}
				}
			);
			self.addClass('active');
		}
	});
	$(document).on('click', '.dropdown-controls__main .btn-controls-close', function(){
		var self = $(this);
		$.get('/',
			{
				action: "DELETE_FROM_COMPARE_SECTION",
				section_id: self.data('section_id'),
				id: 1,
				ajax_action: 'Y'
			},
			function(data) {
				$("#compare-header-result").html(data);
				if(!$('#compare-header-result .header-compare__item.compare-section-link').length)
					$('.compare-icon__block .btn-link').removeClass('active');
			}
		);
		return false;
	});
	$(document).on('click', '.dropdown-controls__main .clear__link', function(){
		var self = $(this);
		$.get('/',
			{
				action: "DELETE_ALL",
				id: 1,
				ajax_action: 'Y'
			},
			function(data) {
				$("#compare-header-result").html(data);
				if(!$('#compare-header-result .header-compare__item.compare-section-link').length)
					$('.compare-icon__block .btn-link').removeClass('active');
			}
		);
		return false;
	});


	if($('.compare__container .compare__item').length)
	{
		const slider = document.querySelector('.compare__container');
		let isDown = false;
		let startX;
		let scrollLeft;

		slider.addEventListener('mousedown', (e) => {
			isDown = true;
			slider.classList.add('active');
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		});
		slider.addEventListener('mouseleave', () => {
			isDown = false;
			slider.classList.remove('active');
		});
		slider.addEventListener('mouseup', () => {
			isDown = false;
			slider.classList.remove('active');
		});
		slider.addEventListener('mousemove', (e) => {
			if(!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 3; //scroll-fast
			slider.scrollLeft = scrollLeft - walk;
		});
	}

	compareFieldsEqual();

	$(document).on('click', '.subscribe_product', function(){
		var self = $(this);
		var product_id = self.data('product') || 0;
		var form = $('.subscibe_element');

		var image = self.closest('.catalog_item').find('.catalog_item_img img');
		var name = self.closest('.catalog_item').find('.catalog_item_name');
		var price = self.closest('.catalog_item').find('.catalog_item_prices .catalog_item_price');

		if(image.attr('srcset'))
		{
			var images = image.attr('srcset').split(' ');
			$('#preorder_pic').attr('src', images[0]);
		}

		$('#preorder_name').html(name.html());
		$('#preorder_price').html(price.html());

		form.find('input[name=ITEM_ID]').val(product_id);
		openPopup(form);
	});
	$(document).on('click', '.subscribe_product_detail', function(){
		var self = $(this);
		var product_id = self.data('product') || 0;
		var form = $('.subscibe_element');

		var image = self.closest('#item').find('.img_block img').attr('data-image');
		var name = self.closest('.right.relative').find('.h1');
		var price = self.closest('.right.relative').find('.price_block .price');

		$('#preorder_pic').attr('src', image);
		$('#preorder_name').html(name.html());
		$('#preorder_price').html(price.html());

		form.find('input[name=ITEM_ID]').val(product_id);
		openPopup(form);
	});
	$("body").on('click', '#preorder_plus', function(){
		var el = $(this).closest('div');
		var curr_count = parseInt(el.find(".count").text());

		cur = parseInt($("#preorder_count").text());
		$("#preorder_count").text(cur+1);
		$("#preorder_count_products").val(cur+1);
	});
	$("body").on('click', '#preorder_minus', function(){
		var el = $(this).closest('div');
		var curr_count = parseInt(el.closest('div').find(".count").text());

		cur = parseInt($("#preorder_count").text());
		if(cur>1){
			$("#preorder_count").text(cur-1);
			$("#preorder_count_products").val(cur-1);
		}
		cur = parseInt($("#preorder_count").text());
	});

	$(document).on('click', '#modalRules .btn-primary', function() {
		$('#modalRules').modal('hide');
	});

	$(document).on('click', '[data-callbackfavorite]', function(){
		window.callBackFunctions = 'addBookmark';
		window.callBackFunctionsParam = $(this).data('callbackfavorite');
	});
});
/*-------------*/


function compareFieldsEqual()
{
	// $('.compare__list.compare__item-option').each(function(){
	// 	var self = $(this);
		$('.compare__list.compare__item-option:first .compare__list-item').each(function(i){
			var max_height = 0;

			$('.compare__list.compare__item-option').each(function(){

				if($(this).find('.compare__list-item:eq('+i+')').innerHeight() > max_height)
					max_height = $(this).find('.compare__list-item:eq('+i+')').innerHeight();
			});

			$('.compare__list.compare__item-option').each(function(){
				$(this).find('.compare__list-item:eq('+i+')').css('height', max_height);
				$('.compare__information.compare__item .compare__list-item:eq('+i+')').css('height', max_height);
			});
		});
	// });
}

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function getReCaptcha()
{
	if(typeof grecaptcha != 'undefined') {
		grecaptcha.ready(function() {
			if(typeof grecaptcha != 'undefined') {
				grecaptcha.execute('6Lcs56oZAAAAAO6UsBfgvy_Wrfo_LNJTZfryZpFH', {action: 'contact'}).then(function(token) {
					$('body').data('token', token);
				});
			}
		});
	}
}

function updateBasketPrices(products)
{
	for(var product in products)
	{
		$('[data-basket_product="'+product+'"]').html(products[product].replace(/^\s*(\d+)(\d{3})\s*([а-я\.]+)?\s*$/, '$1 $2 $3')+' р.');
	}
}
