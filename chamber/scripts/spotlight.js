const display = document.querySelector(".spotlight");

fetch("data/members.json")
  .then((response) => response.json())
  .then((data) => {
    if (!data || !data.members || data.members.length === 0) {
      console.error('Error: Data or members array is empty or undefined.');
      return;
    }

    const goldMembers = data.members.filter(member => member.membership === 'Gold');
    const silverMembers = data.members.filter(member => member.membership === 'Silver');

    if (goldMembers.length === 0 || silverMembers.length === 0) {
      console.error('Error: No gold or silver members found.');
      return;
    }

    function getRandomMember(members) {
      return members[Math.floor(Math.random() * members.length)];
    }

    const randomGoldMember = getRandomMember(goldMembers);
    const randomSilverMember = getRandomMember(silverMembers);

    const goldMemberDiv = createMemberElement(randomGoldMember);
    const silverMemberDiv = createMemberElement(randomSilverMember);

    display.appendChild(goldMemberDiv);
    display.appendChild(silverMemberDiv);
  })
  .catch((error) => {
    console.error('Error fetching or parsing data:', error);
  });

function createMemberElement(member) {
  if (!member || !member.image || !member.name) {
    console.error('Error: Invalid member data:', member);
    return document.createElement('section');
  }

  const memberDiv = document.createElement("section");
  memberDiv.classList.add("member");

  memberDiv.innerHTML = `
    <img src="${member.image}" alt="${member.name}" />
    <h3>${member.name}</h3>
    <p>Phone: ${member.phone}</p>
    <p>Membership Level: ${member.membership}</p>
    <strong><a href="${member.website}" target="_blank">Website</a></strong>
  `;

  return memberDiv;
}
