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

  // -- Range Slider

    if( document.getElementById("range_sl") ) {
        priceSlider2 = document.getElementById("range_sl");
        noUiSlider.create(priceSlider2, {
          start: [ 1000, 50000 ],
          range: {
              'min': [ 0 ],
              'max': [ 100000 ]
          },
          connect: true,
          format: wNumb({
              decimals: 0
          })
        });
        priceSlider2.noUiSlider.on('update', function( values, handle ) {
            minVal = parseInt( values[0] );
            maxVal = parseInt( values[1] );
            $("#sl_range_val_1").val(minVal);
            $("#sl_range_val_2").val(maxVal);
        });
        priceSlider2.noUiSlider.on('set', function( values, handle ) {        
            minVal = parseInt( values[0] );
            maxVal = parseInt( values[1] );
            $("#sl_range_val_1").val(minVal);
            $("#sl_range_val_2").val(maxVal);
        });
        $("#sl_range_val_1").keyup(function() {
            activeInputVal = parseInt( $(this).val() );
            if( activeInputVal < parseInt( $("#sl_range_val_2").val() ) ) {
                leftRange = parseInt( $(this).val() );
                priceSlider2.noUiSlider.set([leftRange, null]);
            }
        });
        $("#sl_range_val_2").keyup(function() {
          activeInputVal = parseInt( $(this).val() );
          if( activeInputVal > parseInt( $("#sl_range_val_1").val() ) ) {
              rightRange = parseInt( $(this).val() );
              priceSlider2.noUiSlider.set([null, rightRange]);
          }
        });
    }

  // -----------


  $(".dr_box.active").find(".dr_content").css({
    "display" : "block"
  });

  $(".dr_title").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dr_box");
    dr = parent.find(".dr_content");
    if(dr.is(":hidden")){
      dr.slideDown(300);
      parent.addClass("active");
    } else {
      dr.slideUp(300);
      parent.removeClass("active");
    }
  });

  // -----------

    if( $(".card_main_slider").length > 0 ) {
      $(".card_main_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          infinite: false,
          asNavFor: '.card_miniature_slider',
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>'
      });

      $(".card_miniature_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          focusOnSelect: true,
          asNavFor: '.card_main_slider',
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

    if( $(".simmilar_goods_slider").length > 0 ) {
      $(".simmilar_goods_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 4,
          slidesToScroll: 4,
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

    // -----------------

    $(".respmenubtn").on("click", function(e) {
      e.preventDefault();
      if( $("#mainMenu").is(":hidden") ) {
        $("#mainMenu").fadeIn(300);
        $(this).addClass("active");
      } else {
        $("#mainMenu").fadeOut(300);
        $(this).removeClass("active");
      }
    });

    $("#closeMenu").on("click", function(e) {
      e.preventDefault();
      $("#mainMenu").fadeOut(300);
      $(".respmenubtn").removeClass("active");
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $("#mainMenu").fadeOut(300);
        $(".respmenubtn").removeClass("active");
      }
    });

    $(document).on("mouseup", function(e) {
        e.preventDefault();
        hide_element = $("#mainMenu");
        if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          $("#mainMenu").fadeOut(300);
          $(".respmenubtn").removeClass("active");
        }
    });

    // --------------

    $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      $("body").addClass("fixed");
      $("body").css({
          "position" : "fixed",
          "top" :  -$(document).scrollTop() + "px",
          "overflow" : "hidden",
          "right" : 0,
          "left" : 0,
          "bottom" : 0,
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(document).on("click", ".close_popup, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").attr("style", "");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").removeClass("fixed");
      $(".popup_bg").fadeOut(300);
      $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // ------------

    $(".count_box button").click(function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".count_box");
        var countInput = parentBlock.find("input");
        var countVal = countInput.val();
        if( $(this).hasClass("minus_btn") && countVal > 1 ) {
            countVal--;
        } else if( $(this).hasClass("plus_btn")) {
            countVal++;
        }
        if(countVal == "") {
            countVal = 1;
        }
        countInput.val(countVal);
    });

});