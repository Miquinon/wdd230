const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#member-container");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}


fetch("data/members.json")
  .then((response) => response.json())
  .then((data) => {
    data.members.forEach((member) => {
      const membersDiv = document.createElement("section");
      membersDiv.innerHTML = `
        <img src="${member.image}" alt="${member.name}" />
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Membership Level: ${member.membership}</p>
        <strong><a href="${member.website}" target="_blank">Website</a></strong>
      `;

      display.appendChild(membersDiv);
    });
  })
  