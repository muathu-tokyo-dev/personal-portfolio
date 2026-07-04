/* ## Page Loader */
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');

    if (loadingScreen) {
        loadingScreen.style.opacity = "0";
        
    }
});


const preTag = document.getElementById("donut");

let A = 0, B = 0;

function renderAsciiDonut() {
  let b = [];
  let z = [];
  A += 0.07;
  B += 0.03;
  let cA = Math.cos(A), sA = Math.sin(A),
      cB = Math.cos(B), sB = Math.sin(B);

  for (let k = 0; k < 1760; k++) {
    b[k] = k % 80 === 79 ? "\n" : " ";
    z[k] = 0;
  }

  for (let j = 0; j < 6.28; j += 0.07) {
    let ct = Math.cos(j), st = Math.sin(j);
    for (let i = 0; i < 6.28; i += 0.02) {
      let sp = Math.sin(i), cp = Math.cos(i),
          h = ct + 2, 
          D = 1 / (sp * h * sA + st * cA + 5), 
          t = sp * h * cA - st * sA; 

      let x = Math.floor(40 + 30 * D * (cp * h * cB - t * sB)),
          y = Math.floor(12 + 15 * D * (cp * h * sB + t * cB)),
          o = x + 80 * y,
          N = Math.floor(8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));

      if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
        z[o] = D;
        b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
      }
    }
  }
  
  preTag.innerHTML = b.join("");
};
setInterval(renderAsciiDonut, 64);


/* ## Carousel handling */
const track = document.getElementById('projectTrack');

const original = track.innerHTML;
track.innerHTML += original;

let scrollSpeed = 1;
let animationId;

function autoScroll() {
  track.scrollLeft += scrollSpeed;

  if (track.scrollLeft >= track.scrollWidth / 2) {
    track.scrollLeft -= track.scrollWidth / 2;
  }

  animationId = requestAnimationFrame(autoScroll);
}

requestAnimationFrame(autoScroll)

/* For desktop */
track.addEventListener('mouseenter', () => {
  cancelAnimationFrame(animationId);
});

track.addEventListener('mouseleave', () => {
  animationId = requestAnimationFrame(autoScroll);
});

/* For mobile */
track.addEventListener('touchstart', () => {
  cancelAnimationFrame(animationId);
});

track.addEventListener('touchend', () => {
  animationId = requestAnimationFrame(autoScroll);
});



/* ## Service Info */
const serviceItems = document.querySelectorAll('.service-item');
const serviceInfo = document.getElementById('service-info');


/* For desktop */
serviceItems.forEach(item => {

  item.addEventListener('mouseenter', () => {
    serviceInfo.textContent = item.dataset.info;
  });

  item.addEventListener('mouseleave', () => {
    serviceInfo.textContent = "Hover over a service to learn more";
  });

});