//////////////////////Navbar///////////////////////////////////////
const navbar = document.querySelector("nav");

window.onload = (e) => {
  setTimeout(() => {
    navbar.style.transition = "all ease-in 1.5s";
    navbar.style.transform = "translateX(0%)";
  }, 1000);
};
/////////////////////Modal Windows////////////////////////////////

const modalAbout = document.querySelector("#about-section");
const aboutBtn = document.querySelector("#about-btn");
const modalResume = document.querySelector("#resume-section");
const resumeBtn = document.querySelector("#resume-btn");
const modalContact = document.querySelector("#contact-section");
const contactBtn = document.querySelector("#contact-btn");
const closeBtn = document.querySelectorAll(".close");

aboutBtn.addEventListener("click", () => {
  modalAbout.style.display = "block";
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
  if (e.target == modalAbout) e.target.style.display = "none";
  if (e.target == modalResume) e.target.style.display = "none";
  if (e.target == modalContact) e.target.style.display = "none";
};
