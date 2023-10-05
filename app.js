const mobileMenuBtn = document.getElementById("mobileNavBtn");
const headerMenu = document.getElementById("menu");
const mobileBtnImg = document.getElementById("btnImg");
function toggleMenu() {
  headerMenu.classList.toggle("block");
  mobileBtnImg.classList.toggle("changeImgSrc");
}
mobileMenuBtn.addEventListener("click", toggleMenu);
