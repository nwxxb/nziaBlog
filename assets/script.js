document.getElementById("toggle-theme-button").addEventListener("click", (event) => {
  const htmlTag = document.documentElement;
  let currentTheme = localStorage.getItem('theme')
  htmlTag.dataset.theme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem('theme', htmlTag.dataset.theme);
})
