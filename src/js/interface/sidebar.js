const switchPage = page => {
  const pages = document.getElementsByClassName("page");

  // hide all pages
  for (let i = 0; i < pages.length; i++) pages[i].style.display = "none";

  // show the selected page
  player.currentPage = page;
  document.getElementById(page).style.display = "block";
};

// sidebar open
document.getElementById("sidebar-icon-btn").onclick = () => {
  document.getElementById("sidebar-container").style.transform = "translateX(0)";
  // document.getElementById("sidebar-container").style.boxShadow = "0 8px 24px #191919";
  document.getElementById("sidebar-shown-overlay").style.display = "block";
};

// sidebar close
const closeSidebar = () => {
  document.getElementById("sidebar-container").style.transform = "translateX(-100%)";
  // document.getElementById("sidebar-container").style.boxShadow = "none";
  document.getElementById("sidebar-shown-overlay").style.display = "none";
};

document.getElementById("sidebar-close-btn").onclick = () => closeSidebar();
document.getElementById("sidebar-shown-overlay").onclick = () => closeSidebar();

document.getElementById("switch-to-page-main").onclick = () => switchPage("page-main");
document.getElementById("switch-to-page-settings").onclick = () => switchPage("page-settings");
