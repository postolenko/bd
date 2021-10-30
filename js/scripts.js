function resetStyles() {
  if(bodyWidth > 1024) {
    $(".sidebar_menu_list li ul").attr("style", "");
  }
}

function getRespSlider() {
  if(bodyWidth <= 580) {
    if( $(".services_thumbnails").length > 0 ) {
        $(".services_thumbnails").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        });
    }
  } else {
    if($(".services_thumbnails").hasClass("slick-initialized")) {
      $(".services_thumbnails").slick('unslick');
    }
  }
}

function getWrapperPadding() {
  paddingTop = $("#header").outerHeight();
  $(".wrapper").css({
    "padding-top" : paddingTop + "px"
  });
}

function getSidebarItemsParams() {
  if(bodyWidth <= 1024) {
    $(".sidebar_dropdown").removeClass("active");
    $(".sidebar_dropdown_content").css({
      "display" : "none"
    });
  }
}

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function setFilterHeight() {
  if($(".sidebar_dropdown").hasClass("active")) {
    $(".sidebar_dropdown").css({
      "display" : "block !important"
    });
    setTimeout(function() {
      $(".sidebar_dropdown").css({
        "display" : "block"
      });
    }, 300);
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {
});

$(window).resize(function() {
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getRespSlider();
    getWrapperPadding();
    getSidebarItemsParams();
    getAnimation();
    resetStyles();
    setFilterHeight();
});

$(document).scroll(function() {
    getAnimation();
    setFilterHeight();
});

$(document).ready(function() {
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getRespSlider();
    getWrapperPadding();
    getSidebarItemsParams();
    getAnimation();
    resetStyles();

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 8000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
            appendArrows: $(".append_arrows"),
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  arrows: false
                }
              }
            ]
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
          responsive: [
              {
                breakpoint: 1124,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 680,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              }
            ]
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
          responsive: [
              {
                breakpoint: 790,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false
                }
              }
            ]
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
    dr = parent.children(".dr_content");
    if(dr.is(":hidden")){
      dr.slideDown(300);
      parent.addClass("active");
    } else {
      dr.slideUp(300);
      parent.removeClass("active");
    }
  });


  $(".dr_box_2.active").find(".dr_content_2").css({
    "display" : "block"
  });

  $(".dr_title_2").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dr_box_2");
    dr = parent.children(".dr_content_2");
    if(dr.is(":hidden")){
      // dr.slideDown(300);
      parent.addClass("active");
    } else {
      // dr.slideUp(300);
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
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>'
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
          responsive: [
              {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 750,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: true,
                  arrows: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false
                }
              }
            ]
      });
    }

    // -----------------

    $(".respmenubtn").on("click", function(e) {
      e.preventDefault();
      if( $("#mainMenu").is(":hidden") ) {
        $("#mainMenu").fadeIn(300);
        $(this).addClass("active");
        $("#header").addClass("active");
      } else {
        $("#mainMenu").fadeOut(300);
        $(this).removeClass("active");
        $("#header").removeClass("active");
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

    // ------------

    $(".dr_menu").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dr_box");
      dr = parent.find(".dr_list");
      if(dr.is(":hidden")) {
        dr.slideDown(300);
        $(this).addClass("active");
      } else {
        dr.slideUp(300);
        $(this).removeClass("active");
      }
    });

    // -------------

    $(".dr_btn_2").on("click", function(e) {
      e.preventDefault();
      if(bodyWidth <= 1024) {
        parent = $(this).closest("li");
        dr = parent.children("ul");
        if(dr.is(":hidden")) {
          dr.slideDown(300);
          $(this).addClass("active");
        } else {
          dr.slideUp(300);
          $(this).removeClass("active");
        }
      }
    });

});