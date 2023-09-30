// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let count = 0
console.log(scrollBtn);
scrollBtn.addEventListener("click", myFunction)

function myFunction() {
    document.getElementById("demo").innerHTML =count++;
  }