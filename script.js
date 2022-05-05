const button = document.querySelector("button");
const social = document.querySelector("#social");

button.addEventListener("click", showSocial);

function showSocial() {
  social.classList.toggle("hide");
}
