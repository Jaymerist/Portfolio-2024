let menuIcon = document.querySelector('.menu-icon')
let nav = document.querySelector('.top-nav')

menuIcon.addEventListener("click", ()=>{
    console.log('clicked')
    if (nav.classList.contains('show-nav')) {
        nav.classList.remove('show-nav')
      } else {
        nav.classList.add('show-nav')
      }
})
