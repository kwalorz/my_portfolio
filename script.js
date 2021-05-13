///////////////////Header Animations////////////////////////////
window.onload = function () {
  const headerGlass = document.querySelector(".header_glass");
  const headerText = document.querySelectorAll(".header_animation");

  const animation = () => {
    const sequenceOne = function () {
      headerGlass.style.transform = "scale(1)";
      headerGlass.style.transition = "all .4s ease-in-out";

      headerText.forEach(function (seq, i) {
        seq.style.transform = "translateX(0%)";
        seq.style.transition = `all 1s ease-in-out ${i + 1}s`;
        seq.style.animation = `fadeIn linear ${i + 3.5}s`;
      });
    };

    const sequenceTwo = setTimeout(function () {
      headerGlass.style.transform =
        "translateX(-50%) perspective(400px) rotateY(20deg)";
      headerGlass.style.transition = "all 1s ease-in-out";
    }, 4000);

    sequenceOne();
    sequenceTwo();
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
