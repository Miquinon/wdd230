// Select the banner elements
const banner = document.querySelector('#banner');
const closeButton = document.querySelector('#close-banner');
const highTempElement = document.querySelector('#high-temp');

// Fetch weather data
async function fetchWeatherData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log('API Data:', data); 
      displayHighTemp(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Display the high temperature for today
function displayHighTemp(data) {
  // Find the high temperature for today
  const todayForecasts = data.list.filter(forecast => {
    const forecastDate = new Date(forecast.dt * 1000);
    return forecastDate.toDateString() === new Date().toDateString();
  });

  if (todayForecasts.length > 0) {
    const highTemp = Math.max(...todayForecasts.map(forecast => forecast.main.temp_max));
    highTempElement.textContent = `${Math.round(highTemp)}°F`;
  } else {
    highTempElement.textContent = 'N/A';
  }
}

// Add event listener to the close button
closeButton.addEventListener('click', () => {
  banner.classList.add('hide-banner');  
  setTimeout(() => {
    banner.style.display = 'none';  
  }, 500);  
});


fetchWeatherData(forecastUrl);
