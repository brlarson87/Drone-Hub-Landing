let video = document.querySelector(".full-screen-vid__video");

const items = document.querySelectorAll(".navigation__list-item");

const links = document.querySelectorAll(".navigation__list-link");

const heading = document.querySelector(".main-heading");

const dropContainers = document.querySelectorAll(".drop-down__container");

for (let i = 0; i < items.length; i++) {
  dropContainers[i].style.visibility = "hidden";

  items[i].addEventListener("mouseenter", function() {
    dropDown(i);
  });

  items[i].addEventListener("mouseleave", function() {
    slideUp(i);
  });

  dropContainers[i].addEventListener("mouseenter", function() {
    dropDown(i);
  });

  dropContainers[i].addEventListener("mouseleave", function() {
    slideUp(i);
  });
}

function dropDown(i) {
  dropContainers[i].style.visibility = "visible";
  heading.classList.add("u-hide-title");
  links[i].classList.add("u-active-item");
}

function slideUp(i) {
  dropContainers[i].style.visibility = "hidden";
  heading.classList.remove("u-hide-title");
  links[i].classList.remove("u-active-item");
}

video.playbackRate = 0.7;

let bgLayout = document.querySelector(".full-screen-vid");

bgLayout.style.transition = "all 6.5s";

setTimeout(() => {
  bgLayout.style.top = "-35%";
}, 5000);

setTimeout(() => {
  bgLayout.style.top = "-70%";
}, 11000);
