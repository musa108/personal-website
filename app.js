const button = document.getElementById("button");
const mobile_menu = document.getElementById("mobile--menu");
const close_button = document.getElementById("Close--button")

button.addEventListener("click", () => {
  mobile_menu.style.display = "block";
  button.style.display = "none"

});

close_button.addEventListener("click", () => {
  mobile_menu.style.display = "none";
  button.style.display = "block"

});