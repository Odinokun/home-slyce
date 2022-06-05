module.exports = function () {

  let swiper = new Swiper("#photo__slider", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

};