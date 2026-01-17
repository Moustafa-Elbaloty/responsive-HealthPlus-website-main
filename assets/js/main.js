/* SHOW MENU */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ADD SHADOW HEADER */

const scrollHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('scroll-header') 
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SWIPER PRICES */

const swiperPrices = new Swiper('.prices__swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

 
});
/* SHOW SCROLL UP */ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll_up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.scrollY
   sections.forEach(section => {
      const id = section.id, 
            top = section.offsetTop - 50, 
            height = section.offsetHeight, 
            link = document.querySelector('.nav__menu a[href*=' + id + ']') 

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)

/* DARK LIGHT THEME */ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-sun-fill' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* SCROLL REVEAL ANIMATION */

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,})
sr.reveal( `.home__content`, {origin: 'bottom'})
sr.reveal( `.home__info`, {origin: 'bottom' , delay: 600})
sr.reveal( `.home__button`, {origin: 'left' , delay: 1200})
sr.reveal( `.home__data`, { delay: 1400})

sr.reveal( `.delivery__data`, {origin: 'right' })
sr.reveal( `.delivery__content`, {origin: 'left', delay: 600 })
sr.reveal( `.delivery__img`, { delay: 1200 })

sr.reveal( `.about__img,.contact__data`, {origin: 'right' })
sr.reveal( `.about__data,.contact__map`, {origin: 'left' })  

sr.reveal( `.prices__box`)
sr.reveal( `.prices__swiper`, {origin: 'bottom',delay: 600})

sr.reveal( `.gallery__image`, { interval: 100})
sr.reveal( `.footer__content`)
