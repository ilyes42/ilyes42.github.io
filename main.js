const body = document.querySelector("body");
const darkmodeButton = document.querySelector("#darkmode-btn");
let isDarkmode = localStorage.getItem("isDarkmode") === "true" ?? false;

if (isDarkmode) {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}

darkmodeButton.addEventListener("click", () => {
  isDarkmode = !isDarkmode;
  localStorage.setItem("isDarkmode", isDarkmode ? "true" : "false");
  if (isDarkmode) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
