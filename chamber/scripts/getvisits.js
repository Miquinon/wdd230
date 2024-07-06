

const visit = document.querySelector(".visits");
let visitMessage = "Welcome! Let us know if you have any questions."; // Default message for new visitors

// Check if last visit date is stored in localStorage
let lastVisitString = window.localStorage.getItem("last-visit");

// Initialize today's date
let today = new Date();

// If last visit date exists, calculate the difference in days
if (lastVisitString != null) {
    let lastVisitDate = new Date(lastVisitString);
    let dateDifference = Math.floor((today.getTime() - lastVisitDate.getTime()) / (24 * 60 * 60 * 1000));

    if (dateDifference < 1) {
        visitMessage = `Back so soon! Awesome!`;
    } else {
        visitMessage = `Last visited ${dateDifference} day${dateDifference === 1 ? '' : 's'} ago.`;
    }
}

// Display the visitMessage in the .visits element
visit.textContent = visitMessage;

// Store today's date as the last visit date in localStorage
window.localStorage.setItem("last-visit", today.toString());
