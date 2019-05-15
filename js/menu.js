var MainMenuBtn = document.querySelector(".pages-header__togle");
var MainMenuList = document.querySelector(".main-nav");

MainMenuBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  MainMenuList.classList.toggle("main-nav--open");
  MainMenuBtn.classList.toggle("pages-header__togle--opened");
})
