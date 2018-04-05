'use strict'

window.onload = () => {
  // polifyfill "window.scroll"
  polyfill();
  
  // listeners
  setMenuLinksListener();
  setToggleMenuListener();
  setFixHeaderOnScrollListener();
};
