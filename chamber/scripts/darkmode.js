const darkmode = document.querySelector(".dark-mode");
const main = document.querySelector("main");
let paragraphs = document.querySelectorAll("p");
let h2s = document.querySelectorAll("h2");
let about = document.querySelector(".about");


darkmode.addEventListener("click", () => {
    if (darkmode.textContent.includes("🌑")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        about.style.background ="#000";
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
