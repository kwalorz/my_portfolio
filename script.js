"use strict";

///////////////////Header Animations////////////////////////////
window.onload = function () {
  const headerGlass = document.querySelector(".header_glass");
  const headerText = document.querySelectorAll(".header_animation");

  const animation = () => {
    headerGlass.style.transform = "scale(1)";
    headerGlass.style.transition = "all .4s ease-in-out";

    headerText.forEach(function (seq, i) {
      seq.style.transform = "translateX(0%)";
      seq.style.transition = `all 1s ease-in-out ${i + 1}s`;
      seq.style.animation = `fadeIn linear ${i + 3.5}s`;
    });
    const sequenceTwo = setTimeout(function () {
      headerGlass.style.boxShadow = "-10px 0px 8px -3px rgba(46, 54, 68, 0.5)";
      headerGlass.style.transform =
        "translateX(-50%) perspective(400px) rotateY(20deg)";
      headerGlass.style.transition = "all 1s ease-in-out";
    }, 4000);
  };

  animation();
};

/////////////////////Modal Windows////////////////////////////////

const modalProjects = document.querySelector("#projects-section");
const projectsBtn = document.querySelector("#projects-btn");
const modalAbout = document.querySelector("#about-section");
const aboutBtn = document.querySelector("#about-btn");
const modalResume = document.querySelector("#resume-section");
const resumeBtn = document.querySelector("#resume-btn");
const modalContact = document.querySelector("#contact-section");
const contactBtn = document.querySelector("#contact-btn");
const closeBtn = document.querySelectorAll(".close");

projectsBtn.addEventListener("click", () => {
  modalProjects.style.display = "block";
  slider();
});

aboutBtn.addEventListener("click", () => {
  modalAbout.style.display = "block";
  aboutContent.style.transition = "all 5s ease-in-out";
  aboutContent.style.transform = "scale(1)";
});

resumeBtn.addEventListener("click", () => {
  modalResume.style.display = "block";
});

contactBtn.addEventListener("click", () => {
  modalContact.style.display = "block";
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.closest(".modal").style = "none";
  });
});

window.onclick = function (e) {
  if (e.target == modalProjects) e.target.style.display = "none";
  if (e.target == modalAbout) e.target.style.display = "none";
  if (e.target == modalResume) e.target.style.display = "none";
  if (e.target == modalContact) e.target.style.display = "none";
};

//////////////////////////Project Display////////////////////////////////////

const slider = function () {
  const btnLeft = document.querySelector(".slider_btn-left");
  const btnRight = document.querySelector(".slider_btn-right");
  const slides = document.querySelectorAll(".project_window");
  const carousel = document.querySelector(".project_content");

  let slideCount = slides.length;
  let selectedIndex = 0;

  function rotateCarousel() {
    let angle = (selectedIndex / slideCount) * -360;
    carousel.style.transform = "translateZ(-90px) rotateY(" + angle + "deg)";
  }

  btnLeft.addEventListener("click", () => {
    selectedIndex--;
    rotateCarousel();
  });

  btnRight.addEventListener("click", function () {
    selectedIndex++;
    rotateCarousel();
  });
};
