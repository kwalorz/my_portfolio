const navbar = document.querySelector("nav");

window.onload = (e) => {
  setTimeout(() => {
    navbar.style.transition = "all ease-in 1s";
    navbar.style.transform = "translateX(0%)";
  }, 2000);
};
