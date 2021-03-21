$(document).ready(() => {
  new Swiper(".swiper-container", {
    slidesPerView: 2.3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 2000,
    // },
  });
});
