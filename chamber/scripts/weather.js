const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const apiKey = 'f3f6c3c27bb1d7aeac29f313cdd73695'; 
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=32.75&lon=-97.32&appid=${apiKey}&units=imperial`;

async function fetchWeatherData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data.list[0]); 
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
