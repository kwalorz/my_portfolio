////////////////Background Animation//////////////////////////

const animation = bodymovin.loadAnimation({
  container: document.querySelector(".background_animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./data.json",
  preserveAspectRatio: "none",
});

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
});

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
  if (e.target == modalProjects) e.target.style.display = "none";
  if (e.target == modalAbout) e.target.style.display = "none";
  if (e.target == modalResume) e.target.style.display = "none";
  if (e.target == modalContact) e.target.style.display = "none";
};
