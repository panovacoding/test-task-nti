const swiper = new Swiper('.swiper', {
    loop: true,
    loopedSlides: 1,

    pagination: {
      el: '.slider-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-btn'
    },

    slidesPerView: 1.36,
    slidesPerGroup: 1,
  
})