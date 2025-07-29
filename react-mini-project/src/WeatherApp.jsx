import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css'
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    feelslike: "",
    temp: "",
    tempMin: "",
    tempMax: "",
    humidity: "",
    weather: "",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div className="weatherApp">
      <h2>Weather App By Nilesh</h2>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox Info={weatherInfo}></InfoBox>
    </div>
  );
}
