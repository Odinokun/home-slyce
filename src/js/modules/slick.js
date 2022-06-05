module.exports = function() {

  // begin Slick slider
  $('#top-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true
  });

  $('#choice__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    fade: false,
    prevArrow: "<div class='prev'><svg viewBox=\"0 0 11 11\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 10L1.75736 5.75736L6 1.51472\"/></svg></div>",
    nextArrow: "<div class='next'><svg viewBox=\"0 0 11 11\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 1L9.24264 5.24264L5 9.48528\"/></svg></div>",

  });

  $('.gallery-item__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    fade: true,
    prevArrow: "<div class='prev'><svg viewBox=\"0 0 11 11\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 10L1.75736 5.75736L6 1.51472\"/></svg></div>",
    nextArrow: "<div class='next'><svg viewBox=\"0 0 11 11\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 1L9.24264 5.24264L5 9.48528\"/></svg></div>",
  });

  $('#credit__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg viewBox=\"0 0 11 11\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 10L1.75736 5.75736L6 1.51472\"/></svg></div>",
    nextArrow: "<div class='next'><svg viewBox=\"0 0 11 11\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 1L9.24264 5.24264L5 9.48528\"/></svg></div>",
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('#how-buy__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg viewBox=\"0 0 11 11\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 10L1.75736 5.75736L6 1.51472\"/></svg></div>",
    nextArrow: "<div class='next'><svg viewBox=\"0 0 11 11\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 1L9.24264 5.24264L5 9.48528\"/></svg></div>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end Slick slider

};