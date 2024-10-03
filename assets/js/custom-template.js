



$(document).ready(function(){ 
    // sticky menu===================
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll <100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });
});


    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    }); 


    $(document).ready(function(){
        $('#bar1').barfiller({ duration: 7000 });
        $('#bar2').barfiller({ duration: 7000 });
        $('#bar3').barfiller({ duration: 7000 });
        });
          
  

   // Script nav
        $(".team-btn").click(function(){
            $(this).siblings(".team-socail-icon").toggleClass('active');
        });
        

// slider Active
$('.slider-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    dotsEach:false,
    nav: true,
    navText: ["next", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1000: {
            items: 1
        },
        1920: {
            items: 1
        }
    }
})

// slider Active
$('.testi-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    dotsEach:false,
    nav: true,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 2
        },
        1000: {
            items: 2
        },
        1920: {
            items: 2
        }
    }
})

// slider Active
$('.service-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    dotsEach:false,
    nav: false,
    margin:30,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1000: {
            items: 3
        },
        1920: {
            items: 3
        }
    }
})


// slider Active
$('.project-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 20000,
    dots: false,
    dotsEach:false,
    nav: false,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1000: {
            items: 5
        },
        1920: {
            items: 5
        }
    }
})

// slider Active
$('.shop-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 20000,
    dots: false,
    dotsEach:false,
    nav: false,
    navText: ["<i class='fas fa-chevron-left''></i>", "<i class='fas fa-chevron-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1000: {
            items: 4
        },
        1920: {
            items: 4
        }
    }
})



 // table tabs
        
 $(document).ready(function() { 

    (function ($) { 
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        
        $('.tab ul.tabs li a').click(function (g) { 
            var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
            
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            
            g.preventDefault();
        } );
    })(jQuery);

});



(function($) {
    'use strict';

	
    / Portfolio Isotope  /
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });
	
		    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
	
	
// Loder  
    $(function () {
      $('body').addClass('loaded');
    }); 


 // counterUp
 $('.counter').counterUp({
    delay: 5,
    time: 1000
});




// slider Active
$('.brand-list').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: true,
    dotsEach:false,
    nav: false,
    navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1000: {
            items: 1
        },
        1920: {
            items: 1
        }
    }
})


// scroll strat============================

$(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').addClass('active');
    if (scrolled < 300) $('.go-top').removeClass('active');
});

$('.go-top').on('click', function () {
    $("html, body").animate({
        scrollTop: "0"
    }, 1200);
});












})(jQuery);


    