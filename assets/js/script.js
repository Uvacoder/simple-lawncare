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

// Slider Starts -------------------------------------
var slideIndex = 1;
var slides = document.getElementsByClassName('slides');
if (slides.length > 1) {
  showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var indicators = document.getElementsByClassName('indicator');
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  indicators[slideIndex - 1].className += ' active';
}
// ---------------------------------------------------