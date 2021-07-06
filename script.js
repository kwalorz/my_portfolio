"use strict";

//////////////////////Mobile Navigation/////////////////////////
const navOpen = document.querySelector(".fa-bars");
const navClose = document.querySelector(".close_nav");
const navBar = document.querySelector("nav");

navOpen.addEventListener("click", () => {
  navOpen.style.display = "none";
  navBar.style.display = "block";
});

navClose.addEventListener("click", () => {
  navBar.style.display = "none";
  navOpen.style.display = "block";
});

/////////////////////Modal Windows////////////////////////////////

const modalProjects = document.querySelector("#projects-section");
const projectsBtn = document.querySelector("#projects-btn");
const homeBtn = document.querySelector(".home-btn");
const modalAbout = document.querySelector("#about-section");
const aboutBtn = document.querySelector("#about-btn");
const modalResume = document.querySelector("#resume-section");
const resumeBtn = document.querySelector("#resume-btn");
const modalContact = document.querySelector("#contact-section");
const contactBtn = document.querySelector("#contact-btn");
const closeBtn = document.querySelectorAll(".close");

[projectsBtn, homeBtn].forEach((btn) =>
  btn.addEventListener("click", () => {
    modalProjects.style.display = "block";
    navBar.style.display = "none";
    navOpen.style.display = "none";
    slider();
  })
);

aboutBtn.addEventListener("click", () => {
  modalAbout.style.display = "block";
  aboutContent.style.transform = "scale(1)";
  aboutContent.style.transition = "all 5s ease-in-out";
  navBar.style.display = "none";
});

resumeBtn.addEventListener("click", () => {
  modalResume.style.display = "block";
  navBar.style.display = "none";
});

contactBtn.addEventListener("click", () => {
  modalContact.style.display = "block";
  navBar.style.display = "none";
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.closest(".modal").style.display = "none";
    navBar.style.display = "block";
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
  const descriptions = document.querySelectorAll(".project_description");

  //position first description when window opens
  descriptions[0].style.transform = "translateX(0%)";

  let slideCount = slides.length;
  let currentSlide = 0;

  function rotateCarousel() {
    let angle = (currentSlide / slideCount) * -360;
    carousel.style.transform = `translateZ(-90px) rotateY(${angle}deg)`;
    descriptions.forEach((des) => (des.style.transform = "translateX(600%)"));
    descriptions[currentSlide].style.transform = "translateX(0%)";
    descriptions[currentSlide].style.animation = "";
  }

  btnLeft.addEventListener("click", () => {
    if (currentSlide === 0) currentSlide = slideCount - 1;
    else if (currentSlide !== 0) currentSlide--;
    rotateCarousel();
  });

  btnRight.addEventListener("click", function () {
    if (currentSlide === slideCount - 1) currentSlide = 0;
    else if (currentSlide !== slideCount - 1) currentSlide++;

    rotateCarousel();
  });

  closeBtn[0].addEventListener("click", () => {
    descriptions.forEach((des) => (des.style.transform = "translateX(600%)"));
  });
};
