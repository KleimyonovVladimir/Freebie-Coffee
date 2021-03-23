$(document).ready(() => {
  new Swiper(".favorite-swiper-container", {
    slidesPerView: 2.3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  new Swiper(".giftset-swiper-container", {
    slidesPerColumn: 1,
    spaceBetween: 80,
    direction: "vertical",
    pagination: {
      el: ".giftset-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
});
