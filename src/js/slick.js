$(document).ready(function () {
  $('.slider-about-rest').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('.slider-about-rest'),
    prevArrow: $('.prev-arrow.about-rest'),
    nextArrow: $('.next-arrow.about-rest'),
  });
});
$(document).ready(function () {
  $('.slider-rest-details').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('.slider-rest-details'),
    prevArrow: $('.prev-arrow.rest-details'),
    nextArrow: $('.next-arrow.rest-details'),
    variableWidth: true,
  });
});
