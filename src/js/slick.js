$(document).ready(function () {
  $('.slider-about-rest').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('.slider-about-rest'),
    prevArrow: $('.prev-arrow__about-rest'),
    nextArrow: $('.next-arrow__about-rest'),
  });
});
$(document).ready(function () {
  $('.slider-rest-details').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('.slider-rest-details'),
    prevArrow: $('.prev-arrow__rest-details'),
    nextArrow: $('.next-arrow__rest-details'),
    variableWidth: true,
  });
});
$(document).ready(function () {
  $('.slider-about-hotel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('.slider-about-hotel'),
    prevArrow: $('.prev-arrow__about-hotel'),
    nextArrow: $('.next-arrow__about-hotel'),
  });
});
