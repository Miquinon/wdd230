// Select the display container
const display = document.querySelector("#option-container");

// Fetch data from the JSON file
fetch("data/option.json")  
  .then((response) => response.json())
  .then((data) => {
    data.forEach((option) => {
      // Create a new section element for each option
      const optionDiv = document.createElement("section");
      optionDiv.innerHTML = `
        <img src="${option.image}" alt="${option.name}" />
        <h3>${option.name}</h3>
        <p>${option['half-reserve']}</p>
        <p>${option['half-walkin']}</p>
        <p>${option['full-reserve']}</p>
        <p>${option['full-walkin']}</p>
      `;
      // Append the new section element to the display container
      display.appendChild(optionDiv);
    });
  })
