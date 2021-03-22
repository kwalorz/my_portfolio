//Navbar
const navbar = document.querySelector("nav");

window.onload = (e) => {
  setTimeout(() => {
    navbar.style.transition = "all ease-in 2.5s";
    navbar.style.transform = "translateX(0%)";
  }, 0000);
};
//Modal Windows
const modalAbout = document.querySelector("#about-section");
const aboutBtn = document.querySelector("#about-btn");
const modalContact = document.querySelector("#contact-section");
const contactBtn = document.querySelector("#contact-btn");
const closeBtn = document.querySelectorAll(".close");

aboutBtn.addEventListener("click", () => {
  modalAbout.style.display = "block";
});

contactBtn.addEventListener("click", () => {
  modalContact.style.display = "block";
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target === modalAbout || modalContact) {
      modalAbout.style.display = "none";
      modalContact.style.display = "none";
      console.log(e);
    }
  });
});

// window.onclick = function (e) {
//   if (e.target === modalAbout || modalContact) {
//     e.currentTarget.style.display = "none";
//   }
// };
