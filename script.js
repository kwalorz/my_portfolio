const navbar = document.querySelector("nav");

window.onload = (e) => {
  setTimeout(() => {
    navbar.style.transition = "all ease-in 3s";
    navbar.style.transform = "translateX(0%)";
  }, 4000);
};
