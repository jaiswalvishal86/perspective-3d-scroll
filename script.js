const scrollableSection = document.querySelector(".scrollable");
const images = [...document.querySelectorAll(".img")];

let current = 0;
let target = 0;
let ease = 0.075;

document.body.style.height = `${
  scrollableSection.getBoundingClientRect().height
}px`;

images.forEach((image, index) => {
  image.style.backgroundImage = `url(./assets/${index + 1}.jpg)`;
});

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function animate() {
  target = window.scrollY;
  current = lerp(current, target, ease);

  scrollableSection.style.transform = `translate3d(0, ${-current}px, 0)`;

  images.forEach((image) => {
    let top = image.parentElement.getBoundingClientRect().top;
    // image.style.transform = `rotateX(${top * 0.075}deg) rotateY(${
    //   top * 0.075
    // }deg)`;
    image.style.transform = `rotateY(${(target + current) * 0.1}deg) rotateY(${
      top * 0.015
    }deg)`;
  });
  requestAnimationFrame(animate);
}

animate();
