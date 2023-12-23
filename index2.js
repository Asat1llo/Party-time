
// ========================work__section==========================
const elRol1 = document.querySelector('.work__containers_items_rol_1')
const elRol2 = document.querySelector('.work__containers_items_rol_2')
const elRol3 = document.querySelector('.work__containers_items_rol_3')
const elWorkTitle = document.querySelector('.work__title')


window.addEventListener('scroll', function(){
   elWorkTitle.classList.add('active__title')
   elFill1.classList.add('active__work_container_1')
   elFill2.classList.add('active__work_container_1')
   elFill3.classList.add('active__work_container_1')
})