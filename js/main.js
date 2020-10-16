// IFU
(function () {
  //Startnd  code

  // variables
  burgerMenu = document.getElementById("burgerMenu");
  BurgerMenuContainer = document.querySelector(".BurgerMenuContainer");
  navBar = document.querySelector("nav");
  navHeight = navBar.offsetHeight;
  navBarStatus = false;

  // to hide navigations
  if (window.getComputedStyle(BurgerMenuContainer).display !== "none") {
    navBar.style.height = "0px";

    burgerMenu.addEventListener("click", function () {
      // if navBarStatus is true// these to toggle and untoggle the menu
      if (navBarStatus) {
        navBarStatus = false;
        navBar.style.height = "0px";
        burgerMenu.setAttribute("src", "images/white_image.png");
      } else {
        navBarStatus = true;
        navBar.style.height = navHeight + "0px";
        burgerMenu.setAttribute("src", "images/white_Close2.jpg");
      }
    });
  }

  // end code
})();
