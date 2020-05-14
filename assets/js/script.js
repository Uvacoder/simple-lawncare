/* Author: Zishan Ansari */
'use strict';

// Hamburger Function Starts -------------------------
var hamburger = document.getElementById('hamburger');
var hamburgerIcon = hamburger.children[0];
hamburger.onclick = toggleNavigation;

function toggleNavigation() {
  var nav = document.getElementsByTagName('nav')[0];
  // Sets maxHeight to 0
  if (nav.style.maxHeight) {
    nav.style.maxHeight = null;
    hamburgerIcon.setAttribute('class', 'fa fa-bars');
    hamburgerIcon.style.marginTop = '0';
    hamburgerIcon.style.marginRight = '0';
  } else { // Sets maxHeight to some pixel
    nav.style.maxHeight = nav.scrollHeight + 'px';
    hamburgerIcon.setAttribute('class', 'fa fa-times');
    hamburgerIcon.style.marginTop = '3px';
    hamburgerIcon.style.marginRight = '3px';
  }
}
// ---------------------------------------------------

// To the top Function Starts ------------------------
var toTop = document.getElementById('to-top');
toTop.onclick = goToTop;

function goToTop() {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.onscroll = function () {
  toggleToTop();
};

// Hides and Displays button according to some specified pixel
function toggleToTop() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementsByClassName('to-the-top')[0].style.display = 'block';
  } else {
    document.getElementsByClassName('to-the-top')[0].style.display = 'none';
  }
}
// ---------------------------------------------------