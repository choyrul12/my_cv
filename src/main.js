import jQuery from 'jquery';
(function ($)
  { "use strict"
  

/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

    // $(window).on('scroll', function () {
    //   var scroll = $(window).scrollTop();
    //   if (scroll < 400) {
    //     $(".header-sticky").removeClass("sticky-bar");
    //     $('#back-top').fadeOut(500);
    //   } else {
    //     $(".header-sticky").addClass("sticky-bar");
    //     $('#back-top').fadeIn(500);
    //   }
    // });

    // var menu = $('ul#navigation');
    // if(menu.length){
    //   menu.slicknav({
    //     prependTo: ".mobile_menu",
    //     closedSymbol: '+',
    //     openedSymbol:'-'
    //   });
    // };

})(jQuery);
