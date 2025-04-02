import React from 'react';
import { useSelector } from 'react-redux';

const MainInfo = () => {
  const weatherData = useSelector((state) => state.weather.data);

  if (!weatherData) {
    return <div>No weather data available. Please search for a city.</div>;
  }

  // Build the icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div className="text-white p-4">
      <h1>{weatherData.name}</h1>
      <img src={iconUrl} alt={weatherData.weather[0].description} />
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      {/* You can include more details as needed */}
    </div>
  );
};

export default MainInfo;
