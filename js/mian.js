(function(){
const header= document.querySelector('.header');
window.onscroll=()=>{
  if(window.pageYOffset>50){
    header.classList.add('header_active');
  }else{
    header.classList.remove('header_active');
  }
};
}());
// burger 
(function(){
const bugerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuCloseitem = document.querySelector('.header__nav-close');
bugerItem.addEventListener('click',()=>{
menu.classList.add('header__nav_active');
});
menuCloseitem.addEventListener('click',() => {
  menu.classList.remove('header__nav_active');
})
}());