'use strict'

const fixHeader = () => {
  const header = document.querySelector('.header-bg');
  header.classList.add('header-bg--fixed');
};

const unfixHeader = () => {
  const menu = document.querySelector('.menu');

  // só esconde o header caso o menu não esteja ativo
  if (!menu.classList.contains('menu--active')) {
    const header = document.querySelector('.header-bg');
    header.classList.remove('header-bg--fixed');
  }
};

// listener do scroll
const setFixHeaderOnScrollListener = () => {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const actualScroll = window.pageYOffset;

    // fixa o menu quando o usuário sobe a página
    if (actualScroll < lastScroll && actualScroll > 250) {
      fixHeader();
    } else {
      unfixHeader();
    }
    lastScroll = actualScroll;
  });
};
