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



// animation 
const colors = ["#fffff", "#d1e4ea", "#5f9ea0", "#fffff", "#7dd4ba"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  welcomeSection.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [{
        transform: "translate(0, 0)"
      },
      {
        transform: `translate(${to.x}rem, ${to.y}rem)`
      }
    ], {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});