// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');
// const apiKey = 'f3f6c3c27bb1d7aeac29f313cdd73695'; 
// const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=32.75&lon=-97.32&appid=${apiKey}&units=imperial`;

// async function fetchWeatherData(url) {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       displayCurrentWeather(data.list[0]); 
//       displayForecast(data.list); 
//     } else {
//       throw new Error(await response.text());
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// function displayCurrentWeather(data) {
//   const temp = Math.round(data.main.temp); 
//   currentTemp.innerHTML = `${temp}&deg;F`;
//   const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; 
//   const desc = data.weather[0].description;
//   weatherIcon.setAttribute('src', iconsrc);
//   weatherIcon.setAttribute('alt', desc);
//   captionDesc.textContent = `${desc}`;
// }

// function displayForecast(forecastData) {
//   const forecastDays = forecastData.filter((forecast, index) => index % 8 === 0).slice(1, 4);


//   forecastDays.forEach((day, index) => {
//     const forecastDay = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
//     const forecastTemp = Math.round(day.main.temp); 
//     const forecastIcon = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
//     const forecastDesc = day.weather[0].description;

//     const forecastElement = document.createElement('div');
//     forecastElement.innerHTML = `
//       <strong>${forecastDay}</strong>:<br><br>
//       ${forecastTemp}&deg;F<br>
//       <img src="${forecastIcon}" alt="${forecastDesc}">
//       <span>${forecastDesc}</span>
//     `;

//     document.getElementById('forecast-container').appendChild(forecastElement);
//   });
// }

// fetchWeatherData(forecastUrl);


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windchillSection = document.querySelector('#windchill');
const apiKey = 'f3f6c3c27bb1d7aeac29f313cdd73695';
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=32.75&lon=-97.32&appid=${apiKey}&units=imperial`;

async function fetchWeatherData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data.list[0]);
      displayWindChill(data.list[0]); // Display wind chill for current weather
      displayForecast(data.list);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayCurrentWeather(data) {
  const temp = Math.round(data.main.temp);
  currentTemp.innerHTML = `${temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayWindChill(data) {
  // Calculate wind chill temperature using the formula: 
  // wind_chill = 35.74 + 0.6215 * current_temp - 35.75 * (wind_speed^0.16) + 0.4275 * current_temp * (wind_speed^0.16)
  const currentTemp = data.main.temp;
  const windSpeed = data.wind.speed;

  const windChill = calculateWindChill(currentTemp, windSpeed);
  const roundedWindChill = Math.round(windChill); // Round wind chill to nearest whole number
  const roundedWindSpeed = Math.round(windSpeed); // Round wind speed to nearest whole number

  windchillSection.innerHTML = `Wind Chill: ${roundedWindChill}&deg;F, Wind Speed: ${roundedWindSpeed} mph`;
}

function calculateWindChill(temp, windSpeed) {
  return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}

function displayForecast(forecastData) {
  const forecastDays = forecastData.filter((forecast, index) => index % 8 === 0).slice(1, 4);

  forecastDays.forEach((day, index) => {
    const forecastDay = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    const forecastTemp = Math.round(day.main.temp);
    const forecastIcon = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
    const forecastDesc = day.weather[0].description;

    const forecastElement = document.createElement('div');
    forecastElement.innerHTML = `
      <strong>${forecastDay}</strong>:<br><br>
      ${forecastTemp}&deg;F<br>
      <img src="${forecastIcon}" alt="${forecastDesc}">
      <span>${forecastDesc}</span>
    `;

    document.getElementById('forecast-container').appendChild(forecastElement);
  });
}

fetchWeatherData(forecastUrl);
