const visit = document.querySelector(".visits");
let visitMessage= "Welcome! Let us know if you have any questions.";
let today = new Date();
let lastVisitString = window.localStorage.getItem("last-visit");
if (lastVisitString != null){
    let  lastVisitDate = new Date(lastVisitString);
    let dateDifference = Math.floor((today.getTime() - lastVisitDate.getTime()) / (24 * 60 * 60 * 1000));
    visitMessage = `Last visited ${dateDifference} days ago.`;
	if (dateDifference < 1 ){
		visitMessage = `Back so soon! Awesome!`;
	} else {
		visitMessage = `Last visited ${dateDifference} days ago.`;
	}
}
visit.textContent = visitMessage;
window.localStorage.setItem("last-visit", today.toString());