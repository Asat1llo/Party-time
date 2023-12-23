const elWorkTitle = document.querySelector('.work__title')
const elAboutUs = document.querySelector('.aboutus__wrraper')
const elSponsers = document.querySelector('.sponsers__wrraper')


window.addEventListener('scroll', function () {
   elWorkTitle.classList.add('active__title')
   elAboutUs.classList.add('active__aboutus')
   elSponsers.classList.add('active__sponsers')

})


// =================================swiper__js===============================//
const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
   slidesPerView: 1,
   spaceBetween: 10,
   breakpoints: {
      640: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 5,
         spaceBetween: 50,
      },
   },
});