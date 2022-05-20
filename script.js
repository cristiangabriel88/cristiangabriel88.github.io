// Tried fade-out
window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});
//
//
// Var declarations
let age = document.getElementById("age");
let text = document.getElementById("middle-text");
let git = document.getElementById("git");
let linkedIn = document.getElementById("linkedIn");
let stack = document.getElementById("stack");
// let location = document.getElementById("location");
let mail = document.getElementById("mail");

// * Get age function for About Me section///
let date = new Date();
age.innerHTML = date.getFullYear() - 1988;
//**************************************** */
// function changeText(event) {
//  text = event.target
// }

// EventTarget.onmouseover = changeText;

// git.addEventListener("mouseover", (text = "Git"));
// text.innerHTML = "Hey there!";
// function showText() {
// document.getElementById("icon-text").style.visibility = "visible";
// document.getElementById("git").onmouseover = showText;
// document.getElementById("icon-text").style.visibility = "visible";
console.log("HEREE!!");
function copyText() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText("cristiconstantinescu88@gmail.com");
}
