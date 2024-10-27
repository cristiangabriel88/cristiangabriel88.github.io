// Tried fade-out
window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

window.onload = function () {
  // Check if the element with id "age" exists
  let ageElement = document.getElementById("age");
  if (ageElement) {
    let currentYear = new Date().getFullYear();
    ageElement.innerHTML = currentYear - 1988;
  }
};

function copyText() {
  navigator.clipboard.writeText("me@cristiangabriel.dev");
}
