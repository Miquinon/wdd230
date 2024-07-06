const darkmode = document.querySelector(".dark-mode");
const main = document.querySelector("main");
const h2s = document.querySelectorAll("h2");
const h3s = document.querySelectorAll("h3");
const legends = document.querySelectorAll("legend");
const h4s = document.querySelectorAll("h4");


darkmode.addEventListener("click", () => {
    if (darkmode.textContent.includes("🌑")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        
        h2s.forEach(h2 => {
            h2.style.color = "#fff";
        });

        h3s.forEach(h3 => {
            h3.style.color = "#fff";
        });

        h4s.forEach(h4 => {
            h4.style.color = "#fff";
        });

        legends.forEach(legend => {
            legend.style.color = "#fff";
        });

        darkmode.textContent = "🌕";

    } else {
        main.style.background = "white";
        main.style.color = "#401201";
        
        h2s.forEach(h2 => {
            h2.style.color = "#401201";
        });

        h3s.forEach(h3 => {
            h3.style.color = "#401201";
        });

        h4s.forEach(h4 => {
            h4.style.color = "#401201";
        });

        legends.forEach(legend => {
            legend.style.color = "#401201";
        });

        darkmode.textContent = "🌑";
    }
});
