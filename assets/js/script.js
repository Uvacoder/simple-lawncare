/* Author: Zishan Ansari */
'use strict';

// Hamburger Function Starts -------------------------
var hamburger = document.getElementById('hamburger');
var nav = document.getElementsByTagName('nav')[0];
var main = document.getElementsByTagName('main')[0];
var hamburgerIcon = hamburger.children[0];
hamburger.onclick = toggleNavigation;

function toggleNavigation() {
  if (nav.style.maxHeight) {
    hideNavigation();
  } else {
    showNavigation();
  }
}

// Hides the Nav Bar when clicked outside Header
main.addEventListener('click', function () {
  hideNavigation();
});

// Function for Showing Nav Bar
function showNavigation() {
  nav.style.maxHeight = nav.scrollHeight + 'px';
  hamburgerIcon.setAttribute('class', 'fa fa-times');
  hamburgerIcon.style.marginTop = '3px';
  hamburgerIcon.style.marginRight = '3px';
}

// Function for Hiding Nav Bar
function hideNavigation() {
  nav.style.maxHeight = null;
  hamburgerIcon.setAttribute('class', 'fa fa-bars');
  hamburgerIcon.style.marginTop = '0';
  hamburgerIcon.style.marginRight = '0';
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

// Indicators controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var indicators = document.getElementsByClassName('indicator');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
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

// Form Validation Starts ----------------------------
var sendButton = document.getElementById('send-message');
if (sendButton) {
  sendButton.onclick = onFormSubmit;
}

var helperLength = document.getElementsByClassName('helper').length;
var helperArray = [];
for (var i = 0; i < helperLength; i++) {
  helperArray.push(document.getElementsByClassName('helper')[i]);
}
var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// On Submit Function
function onFormSubmit() {
  // Store value from the input given by the user
  var name = document.getElementById('full-name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var response = document.getElementById('contact-response');

  // For name
  if (!name) {
    showHelper(0);
  } else {
    hideHelper(0);
  }

  // For email
  if (email.match(emailPattern)) {
    hideHelper(1);
  } else {
    showHelper(1);
  }

  // For Subject
  if (!subject) {
    showHelper(2);
  } else {
    hideHelper(2);
  }

  // For Message
  if (!message) {
    showHelper(3);
  } else {
    hideHelper(3);
  }

  function showHelper(index) {
    for (var i = 0; i < helperLength; i++) {
      helperArray[index].style.opacity = '1';
      helperArray[index].style.transform = 'translateY(0)';
    }
  }

  function hideHelper(index) {
    for (var i = 0; i < helperLength; i++) {
      helperArray[index].style.opacity = '0';
      helperArray[index].style.transform = 'translateY(-4px)';
    }
  }

  // Validate if all the data is filled
  if (!name || !email.match(emailPattern) || !subject || !message) {
    response.style.opacity = '0';
    response.style.transform = 'translateX(-8px)';
  } else { // Run this if all the data is filled
    response.style.opacity = '1';
    response.style.transform = 'translateX(0)';
    // Reset the current form data
    document.querySelector('form').reset();
  }
}
// ---------------------------------------------------

// Lightbox Starts -----------------------------------
function openModal() {
  document.getElementById('myModal').style.opacity = '1';
  document.getElementById('myModal').style.transform = 'scale(1, 1)';
  disableScroll();
}

// Closes the Modal
function closeModal() {
  document.getElementById('myModal').style.opacity = '0';
  document.getElementById('myModal').style.transform = 'scale(0, 0)';
  enableScroll();
}

var imageIndex = 1;
var images = document.getElementsByClassName('myImages');
if (images.length > 1) {
  showImages(imageIndex);
}

// Next/previous controls
function plusImages(n) {
  showImages(imageIndex += n);
}

// Image controls
function currentImage(n) {
  showImages(imageIndex = n);
}

function showImages(n) {
  if (n > images.length) { imageIndex = 1; }
  if (n < 1) { imageIndex = images.length; }
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[imageIndex - 1].style.display = 'block';
  // Key Events
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    // Escape key closes Modal
    var isEscape = false;
    isEscape = (evt.keyCode === 27);
    if (isEscape) {
      closeModal();
    }
    // Left key for Previous
    var isLeft = false;
    isLeft = (evt.keyCode === 37);
    if (isLeft) {
      plusImages(-1);
    }
    // Right key for Next
    var isRight = false;
    isRight = (evt.keyCode === 39);
    if (isRight) {
      plusImages(1);
    }
  };
}

// Disable Scroll when modal is opened
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// Modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
// ---------------------------------------------------