const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".spotlight");

// gridbutton.addEventListener("click", () => {
//   display.classList.add("grid");
//   display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList);

// function showList() {
//   display.classList.add("list");
//   display.classList.remove("grid");
// }

fetch("data/members.json")
  .then((response) => response.json())
  .then((data) => {
    // Filter members by membership level
    const goldMembers = data.members.filter(member => member.membership === 'gold');
    const silverMembers = data.members.filter(member => member.membership === 'silver');

    // Function to select a random member from an array
    function getRandomMember(members) {
      return members[Math.floor(Math.random() * members.length)];
    }

    // Randomly select one gold member and one silver member
    const randomGoldMember = getRandomMember(goldMembers);
    const randomSilverMember = getRandomMember(silverMembers);

    // Create elements for gold member
    const goldMemberDiv = createMemberElement(randomGoldMember);
    // Create elements for silver member
    const silverMemberDiv = createMemberElement(randomSilverMember);

    // Append gold member to display
    display.appendChild(goldMemberDiv);
    // Append silver member to display
    display.appendChild(silverMemberDiv);
  });

// Function to create HTML elements for member
function createMemberElement(member) {
  const memberDiv = document.createElement("section");
  memberDiv.innerHTML = `
    <img src="${member.image}" alt="${member.name}" />
    <h3>${member.name}</h3>
    <p>Membership Level: ${member.membership}</p>
    <strong><a href="${member.website}" target="_blank">Website</a></strong>
  `;
  return memberDiv;
}
