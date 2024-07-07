
const darkmode = document.querySelector(".dark-mode");
const main = document.querySelector("main");
const paragraphs = document.querySelectorAll("p");
const h2s = document.querySelectorAll("h2");
const about = document.querySelector(".about");
const h4s = document.querySelectorAll("h4");
const ct = document.querySelector("#current-temp");
const fc = document.querySelector("figcaption");
const fcc = document.querySelector("#forecast-container");
const action = document.querySelector(".action");
const spotlight = document.querySelector(".spotlight");
const heading = document.querySelector(".spot-heading");
const   border = document.querySelector("#temp-container");
const border2 = document.querySelector("#forecast-container");
const border3 = document.querySelector("#windchill");

darkmode.addEventListener("click", () => {
    if (darkmode.textContent.includes("🌑")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        h4s.forEach(h4 => {
            h4.style.color = "#fff";
        });
        about.style.background = "#000";
        ct.style.color = "#fff";
        fc.style.color = "#fff";
        fcc.style.color = "#fff";
        border.style.border = "2px solid white";
        border2.style.border = "2px solid white";
        border3.style.border = "2px solid white";
        border3.style.color = "white";
        action.style.background = "#401201";
        heading.style.background = "#401201";
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
        h4s.forEach(h4 => {
            h4.style.color = "#401201";
        });
        about.style.background = "#E3D1C4";
        ct.style.color = "#401201";
        fc.style.color = "#401201";
        fcc.style.color = "#401201";
        border.style.border = "2px solid #401201";
        border2.style.border = "2px solid #401201";
        border3.style.border = "2px solid #401201";
        border3.style.color = "#401201";
        action.style.background = "#E3D1C4";
        heading.style.background = "#E3D1C4";
        paragraphs.forEach(paragraph => {
            paragraph.style.color = "#401201";
        });
        h2s.forEach(h2 => {
            h2.style.color = "#401201";
        });
        darkmode.textContent = "🌑";
    }
});
