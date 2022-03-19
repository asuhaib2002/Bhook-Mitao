

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 100});
sr.reveal('.home__img',{delay: 200});
sr.reveal('.home__social-icon',{ interval: 100}); 

sr.reveal('.about__img',{delay:200}); 
sr.reveal('.about__data',{delay: 100});

sr.reveal('.skills__subtitle',{delay: 100}); 
sr.reveal('.skills__text',{delay: 100}); 
sr.reveal('.skills__data',{interval: 100}); 
sr.reveal('.skills__img',{delay: 200});

sr.reveal('.education__tabs',{delay: 100});
sr.reveal('.education__active',{interval: 100});
sr.reveal('.education__img',{delay: 200});

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('education__active')
    })
    target.classList.add('education__active')

    tabs.forEach(tab => {
      tab.classList.remove('education__active')
    })
    tab.classList.add('education__active')
  })
})

sr.reveal('.contact__img',{delay:200}); 
sr.reveal('.contact__information',{delay: 100});