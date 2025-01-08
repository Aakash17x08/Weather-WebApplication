import { InfoBox } from "./InfoBox";
import { SearchBox } from "./SearchBox";
import React, { useState } from "react";


const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    description: "broken clouds",
    feelsLike: 26.44,
    humidity: 27,
    temp: 27.21,
    tempMax: 27.21,
    tempMin: 27.21,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox  info ={weatherInfo} />
    </div>
  );
};

export { WeatherApp};
