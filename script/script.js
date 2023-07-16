// Toggle Hamburger Menu
const hamburgerMenu = document.querySelector("#hamburger-menu");
const closeBtn = document.querySelector("#close");
const navList = document.querySelector(".nav-list ul");
//ketika humberger menu di klik
hamburgerMenu.addEventListener("click", function () {
  navList.classList.add("active");
});
//ketika close button di klik
closeBtn.addEventListener("click", function () {
  navList.classList.remove("active");
});

// Hilangkan Nav dimanapun layar di klik
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});

// Transparent Nav BG
window.onscroll = () => {
  const navbar = document.querySelector(".navbar-container");
  const fixedNav = navbar.offsetTop;

  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};

// Smooth scrolling when clicking an anchor link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
