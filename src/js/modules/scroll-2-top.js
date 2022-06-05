module.exports = function () {

  // begin to-top
  let top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > top_show) $('#up').addClass('active');
      else $('#up').removeClass('active');
    });
  });
  // end to-top

};