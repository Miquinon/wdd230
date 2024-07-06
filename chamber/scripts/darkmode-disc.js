const darkmode = document.querySelector(".dark-mode");
const main = document.querySelector("main");
let paragraphs = document.querySelectorAll("p");
let h2s = document.querySelectorAll("h2");
const border1 = document.querySelector(".demographics");
const border2 = document.querySelector(".attractions");
const border3 = document.querySelector(".events");
const fc = document.querySelectorAll("figcaption");

darkmode.addEventListener("click", () => {
    if (darkmode.textContent.includes("🌑")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        border1.style.borderTop = "1px solid white"; 
        border1.style.borderBottom = "1px solid white"; 
        border2.style.borderTop = "1px solid white"; 
        border2.style.borderBottom = "1px solid white"; 
        border3.style.borderTop = "1px solid white"; 
        border3.style.borderBottom = "1px solid white"; 
        paragraphs.forEach(paragraph => {
            paragraph.style.color = "#fff";
        });
        fc.forEach(figcaption => {
            figcaption.style.color = "#fff"; 
        });
        h2s.forEach(h2 => {
            h2.style.color = "#fff";
        });
        darkmode.textContent = "🌕";
    } else {
        main.style.background = "white";
        main.style.color = "#401201";
        border1.style.borderTop = "#401201"; 
        border1.style.borderBottom = "#401201"; 
        border2.style.borderTop = "#401201"; 
        border2.style.borderBottom = "#401201"; 
        border3.style.borderTop = "#401201"; 
        border3.style.borderBottom = "#401201"; 
        paragraphs.forEach(paragraph => {
            paragraph.style.color = "#401201";
        });
        fc.forEach(figcaption => {
            figcaption.style.color = "#401201"; 
        });
        h2s.forEach(h2 => {
            h2.style.color = "#401201";
        });
        darkmode.textContent = "🌑";
    }
});
