"use strict";

//////////////////////Mobile Navigation/////////////////////////
const navOpen = document.querySelector(".fa-bars");
const navClose = document.querySelector(".close_nav");
const navBar = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

navOpen.addEventListener("click", () => {
  navOpen.style.display = "none";
  navBar.style.transform = "translateX(0%)";
  overlay.classList.add("overlay-blur");
});

navClose.addEventListener("click", () => {
  navBar.style.transform = "translateX(200%)";
  overlay.classList.remove("overlay-blur");
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
  })
);

aboutBtn.addEventListener("click", () => {
  modalAbout.style.display = "block";
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
    navBar.style.display = "block";
    e.target.closest(".modal").style.display = "none";
  });
});

window.onclick = function (e) {
  if (e.target == modalProjects) {
    navBar.style.display = "block";
    e.target.style.display = "none";
  }
  if (e.target == modalAbout) {
    navBar.style.display = "block";
    e.target.style.display = "none";
  }
  if (e.target == modalResume) {
    navBar.style.display = "block";
    e.target.style.display = "none";
  }
  if (e.target == modalContact) {
    navBar.style.display = "block";
    e.target.style.display = "none";
  }
};

//////////////////////////Project Display////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {
  const btnLeft = document.querySelector(".slider_btn-left");
  const btnRight = document.querySelector(".slider_btn-right");
  const slides = document.querySelectorAll(".project_window");
  const carousel = document.querySelector(".project_content");
  const descriptions = document.querySelectorAll(".project_description");

  let currentSlide = 0;
  let slideCount = slides.length;
  descriptions[currentSlide].style.transform = "translateY(0%)";

  function rotateCarousel() {
    let angle = (currentSlide / slideCount) * -360;
    carousel.style.transform = `rotateY(${angle}deg)`;
    descriptions.forEach((des) => (des.style.transform = "translateY(600%)"));
    descriptions[currentSlide].style.transform = "translateY(0%)";
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
});

////////////////////////Form Validation///////////////////////////
const form = document.querySelector("#consult");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.elements["name"];
  const phoneNumber = form.elements["phone"];
  const email = form.elements["email"];

  function validateName() {
    const msg = name.parentNode.querySelector(".err-name");

    if (name.value === "") msg.innerText = "*Name Required";
    if (name.value !== "") {
      const nameValue = name.value.trim();
      const onlyLetters = /^[a-z]+$/i;
      !onlyLetters.test(nameValue)
        ? (msg.innerText = "*Please enter a valid name")
        : "";
    }
  }

  function validatePhoneNum() {
    const msg = phoneNumber.parentNode.querySelector(".err-phone");

    if (phoneNumber.value === "" && email.value === "")
      msg.innerText = "*Please enter either a phone number or email";
    if (phoneNumber.value !== "") {
      const phoneValue = phoneNumber.value.replace(/-/g, "").trim();
      const onlyNumbers = /^[0-9]*$/;

      if (!onlyNumbers.test(phoneValue) || phoneValue.length < 10)
        msg.innerText = "*Please enter a valid phone number";
    }
  }

  function validateEmail() {
    const msg = email.parentNode.querySelector(".err-email");

    if (phoneNumber.value === "" && email.value === "")
      msg.innerText = "*Please enter either a phone number or email";
    if (email.value !== "") {
      const emailValue = email.value.trim();
      const emailCheck = /^\S+@\S+\.\S+$/;

      if (!emailCheck.test(emailValue))
        msg.innerText = "*Please enter a valid email";
    }
  }

  validateName();
  validatePhoneNum();
  validateEmail();
});
