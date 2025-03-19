"use-strict";

document.querySelector(".barsicon").addEventListener("click", function() {
    const navBox = document.querySelector("nav");
    const icon = document.querySelector(".fa-solid");
    navBox.classList.toggle("show");
    icon.classList.toggle("fa-xmark");
});