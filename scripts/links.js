'use strict';

const baseURL = "https://miquinon.github.io/wdd230/";
const linksURL = "https://miquinon.github.io/wdd230/data/links.json";

const learnActivities = document.getElementById('activity');

const getLinks = async function() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
    console.log(data);
  }

const displayLinks = function(data) {
    for (let index = 0; index < data.length; index++) {
        let activityList = document.createElement('li');
        activityList.style.display = "flex";
        activityList.innerHTML = `${data[index].lesson}: `;
        data[index].links.forEach((link, i) => {
            let activityLink = document.createElement('a');
            
            activityLink.href = link.url;
            activityLink.title = link.title;
            activityLink.innerHTML = `${link.title} &nbsp &nbsp &nbsp |`;
            activityLink.target = '_blank';
           

            activityList.appendChild(activityLink)
        });

        learnActivities.appendChild(activityList);
    }
        
};

  
  getLinks();