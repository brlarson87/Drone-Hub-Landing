let video = document.querySelector(".full-screen-vid__video");

const items = document.querySelectorAll(".navigation__list-item");

const links = document.querySelectorAll(".navigation__list-link");

const heading = document.querySelector(".main-heading");

const dropContainers = document.querySelectorAll(".drop-down__container");

for (let i = 0; i < items.length; i++) {
  dropContainers[i].style.visibility = "hidden";

  items[i].addEventListener("mouseenter", function() {
    dropContainers[i].style.visibility = "visible";
    heading.style.transform = "translate(-50%, 10%)";
    heading.style.opacity = 0.4;
    links[i].style.color = "#dfbd00";
    links[i].style.textShadow = "1px 1px 2px rgba(0,0,0,0.9)";
  });

  items[i].addEventListener("mouseleave", function() {
    dropContainers[i].style.visibility = "hidden";
    heading.style.transform = "translate(-50%, -50%)";
    heading.style.opacity = 1;
    links[i].style.color = "#fff";
  });

  dropContainers[i].addEventListener("mouseenter", function() {
    dropContainers[i].style.visibility = "visible";
    heading.style.opacity = 0.4;
    heading.style.transform = "translate(-50%, 10%)";
    links[i].style.color = "#dfbd00";
    links[i].style.textShadow = "1px 1px 2px rgba(0,0,0,0.9)";
  });

  dropContainers[i].addEventListener("mouseleave", function() {
    dropContainers[i].style.visibility = "hidden";
    heading.style.transform = "translate(-50%, -50%)";
    heading.style.opacity = 1;
    links[i].style.color = "#fff";
  });
}

video.playbackRate = 0.7;

let bgLayout = document.querySelector(".full-screen-vid");

console.log(bgLayout);

bgLayout.style.transition = "all 6.5s";

setTimeout(() => {
  bgLayout.style.top = "-35%";
}, 5000);

setTimeout(() => {
  bgLayout.style.top = "-70%";
}, 11000);
