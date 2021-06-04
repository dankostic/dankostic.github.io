// Agency Theme JavaScript
	$(document).ready(function(){
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.fire-tooltip').tooltip();
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict

$(".large-header").mouseover(function (){
$(".main-title").css("display", "inline");
$(".txt_darkgrey").addClass('animated bounceIn');
$(".txt_blue").addClass('animated bounceInUp');
$(".txt_slogan").addClass('animated bounceInDown');
});


// $(".large-header").mouseout(function (){
//  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
// $(".txt_darkgrey, .txt_blue, .txt_slogan").one(animationEnd, function(){
// $(this).removeClass('animated bounceIn bounceInUp bounceInDown');
// });
// });
$(window).scroll(function() {
    if ($('.large-header').height() <= ($(window).height() + $(window).scrollTop())) {
      $(".portfolio-sportret-item-p").addClass('animated fadeInLeft');
      $(".portfolio-sportret-item-header").addClass('animated fadeInRight');
      $(".sportret-animated").addClass('animated fadeInRight');
      $(".sportret-gallery-title").addClass('animated rubberBand');
      $(".sportret-gallery-animation").addClass('animated bounce');
      }
});

  $("#sportret").mouseover(function (){
    $(".bg-medium-gray").addClass('sportret-rgb');

  });
  $("#sportret").mouseout(function (){
$(".bg-medium-gray").removeClass('sportret-rgb');
      });

      $(window).scroll(function() {
        var avki = $('.large-header').height() + $('#sportret').height();
          if (avki <= ($(window).height() + $(window).scrollTop())) {
            $(".avki-text-header").addClass('animated zoomIn');
            $(".avki-gallery-title").addClass('animated rubberBand');
            $(".avki-gallery-animation").addClass('animated bounce');
            }
      });

      $(window).scroll(function() {
        var ultsmd = $('.large-header').height() + $('#sportret').height() +  $('#avki').height();
          if (ultsmd <= ($(window).height() + $(window).scrollTop())) {
            $(".ultsmd-cover").addClass('animated fadeInUp');
            $(".ultsmd-gallery-title").addClass('animated rubberBand');
            $(".ultsmd-gallery-animation").addClass('animated bounce');

            }
      });

      $(window).scroll(function() {
        var projects = $('.large-header').height() + $('#sportret').height() +  $('#avki').height() + $('#ultsmd').height();
          if (projects <= ($(window).height() + $(window).scrollTop())) {
            $(".section-heading").addClass('animated fadeInUp');
            $(".nesaauto").addClass('animated bounceInRight');
            $(".jadranskaliga").addClass('animated bounceInLeft');
            $(".iwillshare").addClass('animated bounceInRight');
            $(".vizija").addClass('animated bounceInLeft');
            $(".portfolio-caption").addClass('animated bounce');

            }
      });

      $("#projects").mouseover(function (){
        $(".bg-light-gray").addClass('sportret-rgb');

      });
      $("#projects").mouseout(function (){
    $(".bg-light-gray").removeClass('sportret-rgb');
          });


      $(window).scroll(function() {
        var examples = $('.large-header').height() + $('#sportret').height() +  $('#avki').height() + $('#ultsmd').height() + $('#projects').height();
          if (examples <= ($(window).height() + $(window).scrollTop())) {
            $(".bounce-animation").addClass('animated bounce');

            }
      });


      $(window).scroll(function() {
        var technologies = $('.large-header').height() + $('#sportret').height() +  $('#avki').height() + $('#ultsmd').height() + $('#projects').height() +  $('#examples').height();
          if (technologies <= ($(window).height() + $(window).scrollTop())) {
            $(".centos-animation").addClass('animated bounceInLeft');
            $(".git-animation").addClass('animated bounceInRight');
            $(".responsive-animation").addClass('animated bounceInDown');

            }
      });

      $("#technologies").mouseover(function (){
        $(".bg-medium-gray").addClass('sportret-rgb');

      });
      $("#technologies").mouseout(function (){
    $(".bg-medium-gray").removeClass('sportret-rgb');
          });



          				$("area[rel^='prettyPhoto']").prettyPhoto();

          				$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false});
          				$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});


          			});

                $(document).ready(function() {
         $("#light-slider").lightSlider({
             item: 4,
             autoWidth: false,
             slideMove: 1, // slidemove will be 1 if loop is true
             slideMargin: 10,

             addClass: '',
             mode: "slide",
             useCSS: true,
             cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
             easing: 'linear', //'for jquery animation',////

             speed: 1500, //ms'
             auto: true,
             pauseOnHover: true,
             loop: true,
             slideEndAnimation: true,
             pause: 5000,

             keyPress: false,
             controls: true,
             prevHtml: '',
             nextHtml: '',

             rtl:false,
             adaptiveHeight:false,

             vertical:false,
             verticalHeight:500,
             vThumbWidth:100,

             thumbItem:10,
             pager: false,
             gallery: false,
             galleryMargin: 5,
             thumbMargin: 5,
             currentPagerPosition: 'middle',

             enableTouch:true,
             enableDrag:true,
             freeMove:true,
             swipeThreshold: 40,

             responsive : [],

             onBeforeStart: function (el) {},
             onSliderLoad: function (el) {},
             onBeforeSlide: function (el) {},
             onAfterSlide: function (el) {},
             onBeforeNextSlide: function (el) {},
             onBeforePrevSlide: function (el) {}
         });
     });
