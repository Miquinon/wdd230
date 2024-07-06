document.addEventListener('DOMContentLoaded', () => {
const darkmode = document.querySelector(".dark-mode");
const main = document.querySelector("main");
let paragraphs = document.querySelectorAll("p");
let h2 = document.querySelector("h2");
let grid = document.querySelector(".grid");
let sections = document.querySelectorAll("section"); 
let h3s = document.querySelectorAll("h3");
let list = document.querySelector("#member-container");

darkmode.addEventListener("click", () => {
    if (darkmode.textContent.includes("🌑")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        h2.style.color = "#fff";
        // grid.style.borderTop = "2px solid white";
        list.style.borderTop = "2px solid white";
        
        darkmode.textContent = "🌕";
    } else {
        main.style.background = "white";
        main.style.color = "#401201";
        h2.style.color = "#401201";
        // grid.style.borderTop = "2px solid #401201";
        list.style.borderTop = "2px solid #401201";
        
        
        darkmode.textContent = "🌑";
        }
    });
});

