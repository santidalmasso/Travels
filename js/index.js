const menu = document.querySelector('.nav_options');
const burgerButton = document.querySelector('.burger-button')

burgerButton.addEventListener('click', hideShow)

function hideShow(){
  if(menu.classList.contains('is-active')){
    menu.classList.remove('is-active')
  } else {
    menu.classList.add('is-active')
  }
}