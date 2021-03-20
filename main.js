var header = document.querySelector("header");
var nav = document.querySelector('.nav-container');
var welcomeSection = document.querySelector('.welcome-container');
var projectsSection = document.querySelector('.project-container');
var aboutMeSection = document.querySelector('.me-container');



window.onscroll = function () {
  stickHeader()
};


// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



//refactor this into a standalone function called in event listener
nav.addEventListener('click', function (event) {
  var navSelection = event.target.closest('p')

  if (navSelection.id === 'projects') {
    projectsSection.scrollIntoView({
      behavior: 'smooth'
    });
  } else if (navSelection.id === 'about') {
    aboutMeSection.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    // contact form would pop here
  }
});

window.addEventListener('load', function () {
  particlesJS.load('particles-js', './particles.json', function () {
    console.log('great success!');
  });
})