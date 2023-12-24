const elWorkTitle = document.querySelector('.work__title')
const elAboutUs = document.querySelector('.aboutus__wrraper')
const elSponsers = document.querySelector('.sponsers__wrraper')


window.addEventListener('scroll', function () {
   elWorkTitle.classList.add('active__title')
   elAboutUs.classList.add('active__aboutus')
   elSponsers.classList.add('active__sponsers')

})


// =================================swiper__js===============================//
// const swiperEl = document.querySelector('swiper-container')
// Object.assign(swiperEl, {
//    slidesPerView: 1,
//    spaceBetween: 10,
//    breakpoints: {
//       640: {
//          slidesPerView: 2,
//          spaceBetween: 20,
//       },
//       768: {
//          slidesPerView: 4,
//          spaceBetween: 40,
//       },
//       1024: {
//          slidesPerView: 5,
//          spaceBetween: 50,
//       },
//    },
// });


// ==========================Burger================

const elBurger = document.querySelector('.header__burger')
const elStcik1 = document.querySelector('.header__burger__stick_1')
const elStcik2 = document.querySelector('.header__burger__stick_2')
const elStcik3 = document.querySelector('.header__burger__stick_3')
const elHeaderList = document.querySelector('.header__list')
const elHeaderWrraper = document.querySelector('.header__wrraper')
const elHeadderBefore = document.createElement('div')


elHeaderWrraper.append(elHeadderBefore)

elHeadderBefore.classList.add('header__before__active')

elBurger.addEventListener('click', function () {
   elHeadderBefore.classList.add('header__before__active_2')
   elStcik1.classList.add('active__burger_1')
   elStcik2.classList.add('active__burger_2')
   elStcik3.classList.add('active__burger_3')
   elHeaderList.classList.add('active__header__list')
})

console.log(elHeadderBefore);

elHeadderBefore.addEventListener('click', function () {
   elStcik1.classList.remove('active__burger_1')
   elStcik2.classList.remove('active__burger_2')
   elStcik3.classList.remove('active__burger_3')
   elHeaderList.classList.remove('active__header__list')
   elHeadderBefore.classList.remove('header__before__active_2')
}) 