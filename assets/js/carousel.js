$(document).ready(function () {
  $('.carousel').slick({
    mobileFirst: true,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button">«</button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button">»</button>',
    // slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,    
    variableWidth: true
  });
});
