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


if(window.matchMedia("(max-width:700px)").matches){
  const itemList = document.querySelectorAll('.title')
  itemList.forEach(item =>{
  item.addEventListener('click', showItem)
  })

  function showItem(){
    const info = event.target.parentElement.parentElement.lastElementChild
    itemList.forEach(item =>{
      console.log(item.parentElement.lastElementChild)
      item.parentElement.lastElementChild.classList.remove('show-info')
    })
    info.classList.add('show-info')
  }
}