jQuery(document).ready(function(){
  $(document).on('click', '#mobile-rcrm-chat', function(){
    $('#retailcrm-consultant-app').addClass('active');

    document.querySelector('.consultant-widget .consultant-icon').click();
    setTimeout(function(){
      document.querySelector('.messengers__item_consultant').click();
    }, 5);

    return false;
  });
  $(document).on('click', '#retailcrm-consultant-app .header__close', function(){
    $('#retailcrm-consultant-app').removeClass('active');
  });

  setInterval(function(){getReCaptcha();}, 150000);
});

/*
$(document).ready(function(){
  $('.lvl1').find('.lvl2').each(function(){
    if ($(this).hasClass('active')){
      $(this).closest('.lvl1').find('.name').css({
        'font-weight': 'bold',
        'color': '#89001E'
      });
    }
  });
});
*/

$(document).ready(function(){
  let filtersCount = 0;

  $('.lvl1').each(function(){
    filtersCount++

    let optionCount = 0;
    disabledOptionCount = 0;

    $(this).find('.lvl2').each(function(){
      optionCount++

      if ($(this).hasClass('active')){

        $(this).closest('.lvl1').find('.name').css({
          'font-weight': 'bold',
          'color': '#89001E'
        });
      }
      if ($(this).hasClass('disabled')){
        disabledOptionCount++
      }

    });
    if (optionCount == disabledOptionCount && optionCount != 0){
      $(this).hide(300);
    }

  });

  console.log('фильтров '+filtersCount);
});


$(document).on('mouseover', '.smartfilter .filter_content .lvl1', function(){
  $(this).find('.filter_list').show();
  $(this).find('.name').addClass('active')
});
$(document).on('mouseleave', '.smartfilter .filter_content .lvl1', function(){
  $(this).find('.filter_list').hide();
  $(this).find('.name').removeClass('active')
});