const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windchillSection = document.querySelector('#windchill');
const humiditySection = document.querySelector('#humidity');
const nextDayTemp = document.querySelector('#next-day-temp');
const nextDayIcon = document.querySelector('#next-day-icon');
const nextDayDesc = document.querySelector('#next-day-desc');
const nextDayHumidity = document.querySelector('#next-day-humidity');
const nextDayWindSpeed = document.querySelector('#next-day-wind-speed'); // Added element for wind speed

const apiKey = 'f3f6c3c27bb1d7aeac29f313cdd73695';
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.63&lon=-87.07&appid=${apiKey}&units=imperial`;

async function fetchWeatherData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log('API Data:', data); 
      displayCurrentWeather(data.list[0]);
      displayWindChill(data.list[0]);
      displayNextDayWeather(data.list);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayCurrentWeather(data) {
  const temp = Math.round(data.main.temp);
  const humidity = data.main.humidity;  
  currentTemp.innerHTML = `${temp}&deg;F`;
  humiditySection.innerHTML = `Humidity: ${humidity}%`;  
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayWindChill(data) {
  const currentTemp = data.main.temp;
  const windSpeed = data.wind.speed;

  const windChill = calculateWindChill(currentTemp, windSpeed);
  const roundedWindChill = Math.round(windChill);
  const roundedWindSpeed = Math.round(windSpeed);

  windchillSection.innerHTML = `Wind Chill: ${roundedWindChill}&deg;F <br>Wind Speed: ${roundedWindSpeed} mph`;
}

function calculateWindChill(temp, windSpeed) {
  return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}

function displayNextDayWeather(forecastData) {

  // Find the forecast data for the next day at 3 PM
  const now = new Date();
  const nextDay = now.getDate() + 1;
  const nextDayForecast = forecastData.find(forecast => {
    const forecastDate = new Date(forecast.dt * 1000);
    return forecastDate.getHours() === 16 && forecastDate.getDate() === nextDay;
  });

  if (nextDayForecast) {
    const temp = Math.round(nextDayForecast.main.temp);
    const humidity = nextDayForecast.main.humidity;  
    const windSpeed = nextDayForecast.wind.speed;  
    const iconSrc = `https://openweathermap.org/img/w/${nextDayForecast.weather[0].icon}.png`;
    const desc = nextDayForecast.weather[0].description;

    nextDayTemp.innerHTML = `${temp}&deg;F`;
    nextDayIcon.setAttribute('src', iconSrc);
    nextDayIcon.setAttribute('alt', desc);
    nextDayDesc.textContent = desc;
    nextDayHumidity.innerHTML = `Humidity: ${humidity}%`;  
    nextDayWindSpeed.innerHTML = `Wind Speed: ${Math.round(windSpeed)} mph`;  
  } else {
    console.error('Next day forecast at 3 PM not found.');
  }
}

fetchWeatherData(forecastUrl);
