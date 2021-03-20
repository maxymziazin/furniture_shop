$(function () {
  let $roomSlider = $("#room-slider");

  $roomSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      '<button type="button" class="room-slider__btn slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="room-slider__btn slick-next"><i class="fas fa-chevron-right"></i></button>',
  });
});
