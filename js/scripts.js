var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 12000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
            appendArrows: $(".append_arrows")
        });
    }   


    if( $(".cards_slider").length > 0 ) {
      $(".cards_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 3,
          slidesToScroll: 3,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
          // responsive: [
          //     {
          //       breakpoint: 1100,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 1
          //       }
          //     },
          //     {
          //       breakpoint: 900,
          //       settings: {
          //         slidesToShow: 4,
          //         slidesToScroll: 1
          //       }
          //     },
          //     {
          //       breakpoint: 768,
          //       settings: {
          //         slidesToShow: 3,
          //         slidesToScroll: 1
          //       }
          //     },
          //     {
          //       breakpoint: 510,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 1
          //       }
          //     },
          //     {
          //       breakpoint: 400,
          //       settings: {
          //         slidesToShow: 1,
          //         slidesToScroll: 1
          //       }
          //     }
          //   ]
      });
    }


    if( $(".project_slider").length > 0 ) {
      $(".project_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
          // responsive: [
          //     {
          //       breakpoint: 1100,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 1
          //       }
          //     },
          //     {
          //       breakpoint: 900,
          //       settings: {
          //         slidesToShow: 4,
          //         slidesToScroll: 1
          //       }
          //     },
          //     {
          //       breakpoint: 768,
          //       settings: {
          //         slidesToShow: 3,
          //         slidesToScroll: 1
          //       }
          //     },
          //     {
          //       breakpoint: 510,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 1
          //       }
          //     },
          //     {
          //       breakpoint: 400,
          //       settings: {
          //         slidesToShow: 1,
          //         slidesToScroll: 1
          //       }
          //     }
          //   ]
      });
    }

});