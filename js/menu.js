'use strict'
// === MENU RESPONSIVO ===

// muda o icone do menu hamburguer
const changeToggleButtonIcon = () => {
  const menuIcon = document.querySelector('#toggle-menu > i');

  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
};

// ativa o menu responsivo
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu--active');
  changeToggleButtonIcon();
};

const closeMenu = () => {
  const menuIcon = document.querySelector('#toggle-menu > i');

  const menu = document.querySelector('.menu');
  menu.classList.remove('menu--active');
  menuIcon.classList.remove('fa-times');
  menuIcon.classList.add('fa-bars');
}

// listener botão de toggle do menu
const setToggleMenuListener = () => {
  const toggleButton = document.querySelector('#toggle-menu');
  toggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();    
  });
};

// === NAVEGAÇÂO ===

// função scroll suave 
const smoothScrollTo = target => {
 const targetPos = document.querySelector(target).getBoundingClientRect();

  window.scrollBy({
    top: targetPos.top,
    left: 0,
    behavior: 'smooth'
  }) 
    
}

// listener links scroll suave
const setMenuLinksListener = menuLinks => {
  const links = document.querySelectorAll('.menu__link');
  links.forEach( link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      let scrollTarget = link.getAttribute('href');
      smoothScrollTo(scrollTarget);   
      closeMenu();   
    });   
  });
}