const darkmode = document.querySelector(".dark-mode");
const main = document.querySelector("main");
let paragraphs = document.querySelectorAll("p");
let h2s = document.querySelectorAll("h2");
let about = document.querySelector(".about");
let h4s = document.querySelector("h4");
let ct = document.querySelector("#current-temp");
let fc = document.querySelector("figcaption");
let fcc = document.querySelector("#forecast-container");
let action = document.querySelector(".action");



darkmode.addEventListener("click", () => {
    if (darkmode.textContent.includes("🌑")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        h4s.style.color = "#fff";
        about.style.background ="#000";
        ct.style.color = "#fff";
        fc.style.color = "#fff";
        fcc.style.color = "#fff";
        action.style.background = "#401201";
        paragraphs.forEach(paragraph => {
            paragraph.style.color = "#fff";
        });
        
        h2s.forEach(h2 => {
            h2.style.color = "#fff";
        });
        darkmode.textContent = "🌕";
    } else {
        main.style.background = "white";
        main.style.color = "#401201";
        h4s.style.color = "#401201";
        ct.style.color = "#401201";
        fc.style.color = "#401201";
        fcc.style.color = "#401201";
        action.style.background = "#E3D1C4";
        about.style.background ="#E3D1C4";
        paragraphs.forEach(paragraph => {
            paragraph.style.color = "#401201";
        });
        // 
        h2s.forEach(h2 => {
            h2.style.color = "#401201";
        });
        darkmode.textContent = "🌑";
    }
});
