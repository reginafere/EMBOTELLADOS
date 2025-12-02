// js/menu.js

document.addEventListener("DOMContentLoaded", function () {
  const buttonMenu = document.getElementById("button-menu");
  const mainNav = document.getElementById("main-nav");

  if (!buttonMenu || !mainNav) return;

  buttonMenu.addEventListener("click", () => {
    buttonMenu.classList.toggle("active");

    mainNav.classList.toggle("menu-open");
  });
});
