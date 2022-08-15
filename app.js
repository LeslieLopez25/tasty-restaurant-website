// SHOW MENU
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // VALIDATE THAT VARIABLES EXIST
  if (toggle && nav) {
    // WE ADD THE SHOW-MENU CLASS TO THE DIV TAG WITH THE NAV_MENU CLASS
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // WHEN CLICKED ON EACH nav_link, THE SHOW-MENU CLASS IS REMOVED
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL TOP
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("scroll-top");
  else scrollTop.classList.remove("scroll-top");
}
window.addEventListener("scroll", scrollTop);

// DARK/LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// PREVIOUSLY SELECTED TOPIC (IF USER SELECTED)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// WE OBTAIN THE CURRENT THEME THAT THE INTERFACE HAS BY VALIDATING THE DARK-THEME CLASS
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// WE VALIDATE IF THE USER PREVIOUSLY CHOSE A TOPIC
if (selectedTheme) {
  // IF THE VALIDATION IS FULFILLED, WE ASK WHAT THE ISSUE WAS TO KNOW IF WE ACTIVATED OR DEACTIVATED THE DARK
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// ACTIVATE/DEACTIVATE THE THEME MANUALLY WITH THE BUTTON
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // WE SAVE THE THEME AND THE CURRENT ICON THAT THE USER CHOSE
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: false,
});

sr.reveal(
  `.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, .app__data, .app__img, .contact__data, .contact__button`,
  {
    interval: 200,
  }
);
