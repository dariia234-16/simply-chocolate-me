document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Swiper parameters
    slidesPerView: 4,
    spaceBetween: 30,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 768px (iPad portrait)
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      // when window width is >= 1024px (iPad landscape)
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // Initialize Swiper 2
  const swiperTwo = new Swiper(".swiper-2", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },
  });
});

// second swiper
