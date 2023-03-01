burger = document.querySelector('.burger')
navlist = document.querySelector('.navlist')
account = document.querySelector('.account')

burger.addEventListener('click',()=>{
    navlist.classList.toggle('display')
    account.classList.toggle('display')
    burger.classList.toggle('position')
    console.log("clicked")
})