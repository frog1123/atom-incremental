const navbar = document.getElementById("navbar");
const navbarSeparator = document.getElementById("navbar-separator");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("bg-glass");

    navbarSeparator.classList.remove("w-0");
    navbarSeparator.classList.add("w-full");
  } else {
    navbar.classList.remove("bg-glass");

    navbarSeparator.classList.remove("w-full");
    navbarSeparator.classList.add("w-0");
  }
});
