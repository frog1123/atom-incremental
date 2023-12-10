const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("border-b-[1px]");
    navbar.classList.add("bg-glass");
    navbar.classList.add("backdrop-blur");
  } else {
    navbar.classList.remove("border-b-[1px]");
    navbar.classList.remove("bg-glass");
    navbar.classList.remove("backdrop-blur");
  }
});
