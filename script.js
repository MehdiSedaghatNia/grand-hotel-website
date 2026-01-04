// Navigation (site header slide)

const menuBtn = document.getElementById("menu-btn");
const siteNavbar = document.getElementById("site-navbar");

menuBtn.addEventListener("click", () => {
  siteNavbar.classList.toggle("is-visible");
  menuBtn.classList.toggle(".menu-icon-cross");
});
