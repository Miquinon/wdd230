const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
   
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophets) => {
        
        let card= document.createElement('section');
        let fullNmae= document.createElement('__');
        let portrait= document.createElement('img');

        fullName.textContent = `${prophet._____} ____________`; // fill in the blank

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.____} ______________`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(_______); //fill in the blank
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}