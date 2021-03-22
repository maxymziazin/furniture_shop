$(function () {
  // Burger-menu

  let $burger = $("#burger");
  let $nav = $("#nav");
  let ms = 300;

  $burger.on("click", function (event) {
    event.preventDefault();

    $burger.toggleClass("active");
    $nav.slideToggle(ms);
  });

  // Furniture slider

  let $furnitureSlider = $("#furniture-slider");

  $furnitureSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      '<button type="button" class="slider-btn slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slider-btn slick-next"><i class="fas fa-chevron-right"></i></button>',
  });

  // ???????????

  $(".product-mask__btn").on("click", function (event) {
    event.preventDefault();
  });

  $(".product-mask__actions")
    .find("a")
    .on("click", function (event) {
      event.preventDefault();
    });

  // Room slider

  let $roomSlider = $("#room-slider");

  $roomSlider.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  let count = 0;

  $roomSlider.on("afterChange", function (event, slick, currentSlide) {
    if (currentSlide > count) {
      let $prev = $(this).find(`[data-slick-index='${currentSlide - 1}']`);
      $prev.animate(
        {
          opacity: 0,
        },
        150
      );
      count++;
    } else if (currentSlide < count) {
      let $current = $(this).find(`[data-slick-index='${currentSlide}']`);
      $current.animate(
        {
          opacity: 1,
        },
        150
      );
      count--;
    }
  });

  // Multi slider

  let $multiSlider = $("#multi-slider");

  $multiSlider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow:
      '<button type="button" class="slider-btn slider-btn--light slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slider-btn slider-btn--light slick-next"><i class="fas fa-chevron-right"></i></button>',
  });
});
