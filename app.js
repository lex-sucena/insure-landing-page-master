const mobileMenuBtn = document.getElementById("mobileNavBtn");
const headerMenu = document.getElementById("menu");
function toggleMenu() {
  headerMenu.classList.toggle(".block");
}
mobileMenuBtn.addEventListener("click", toggleMenu);
