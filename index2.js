
// ========================work__section==========================

const elFill1 = document.querySelector('.work__containers_items_1')
const elFill2 = document.querySelector('.work__containers_items_2')
const elFill3 = document.querySelector('.work__containers_items_3')
const elRol1 = document.querySelector('.work__containers_items_rol_1')
const elRol2 = document.querySelector('.work__containers_items_rol_2')
const elRol3 = document.querySelector('.work__containers_items_rol_3')
const elWorkTitle = document.querySelector('.work__title')

elFill1.addEventListener('mouseover',function(){
   elRol1.classList.add('active__rol')
})
elFill2.addEventListener('mouseover',function(){
   elRol2.classList.add('active__rol')
})
elFill3.addEventListener('mouseover',function(){
   elRol3.classList.add('active__rol')
})


elFill1.addEventListener('mouseout',function(){
   elRol1.classList.remove('active__rol')
})
elFill2.addEventListener('mouseout',function(){
   elRol2.classList.remove('active__rol')
})
elFill3.addEventListener('mouseout',function(){
   elRol3.classList.remove('active__rol')
})

window.addEventListener('scroll', function(){
   elWorkTitle.classList.add('active__title')
   elFill1.classList.add('active__work_container_1')
   elFill2.classList.add('active__work_container_1')
   elFill3.classList.add('active__work_container_1')
})