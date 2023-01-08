if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

// Dark mode change
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", toggleDarkMode);

//Menu burger
const burger = document.getElementById("burger");
const body = document.body;
const closeButton = document.getElementById("close");
const menu = document.getElementById("menu");

function closeMenu() {
  menu.classList.remove("flex");
  menu.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

function openMenu() {
  menu.classList.remove("hidden");
  menu.classList.add("flex");
  body.classList.add("overflow-hidden");
}

burger.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

let w = window.screen.availWidth;
if (w > 1000) {
  let paralax = document.getElementById("paralax");
  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    paralax.style.transform = "translate(+" + x * 25 + "px, +" + y * 25 + "px)";
  });
}
