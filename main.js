var nav = document.querySelector('.nav-container');
var welcomeSection = document.querySelector('.welcome-container');
var projectsSection = document.querySelector('.project-container');
var aboutMeSection = document.querySelector('.me-container');


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
    console.log('callback - particles.js config loaded');
  });
})