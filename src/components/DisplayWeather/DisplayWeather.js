import React from 'react';
import './DisplayWeather.css';

const DisplayWeather = ({ weather }) => {
  if (!weather) {
    return null;
  } else if (weather.success === false) {
    return <p className="error">Please Enter a Valid City Name</p>;
  }
  return weather ? (
    <div className="weather-display">
      <div className="data">
        <h1 className="temp">{weather['current']['temperature']}°C</h1>
        <p className="weather-desc">
          {weather['current']['weather_descriptions'][0]}
        </p>
      </div>
      <div className="city-info">
        <p className="city-name">{weather['location']['name']}</p>
        <p className="country-name">{weather['location']['country']}</p>
      </div>
    </div>
  ) : null;
};

export default DisplayWeather;
