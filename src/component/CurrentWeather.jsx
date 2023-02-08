import React, { useState } from "react";
import { useEffect } from "react";

const CurrentWeather = () => {
  const [data, setData] = useState("");
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=10.75&lon=106.6667&appid=e18d9f935503d1088f5628c4f00c5340";

  async function pullJson() {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
    setData(responseData);
  }

  useEffect(() => {
    pullJson();
  }, []);

  return (
    <div className="Weather-container">
      <div className="City-group">
        <div className="City-info">
          <div className="City-name">{data.name}</div>
          <div className="City-weather-type">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="City-weather">
          <img
            className="Weather-img"
            src="https://static.meteoblue.com/assets/images/picto/05_day.svg"
            alt="weather img"
          ></img>
        </div>
      </div>
      <div className="Weather-group">
        <div className="City-temp">
          <div className="Temp-value">
            {data.main ? <label>{(data.main.temp - 273.15).toFixed(0)}</label> : null}°C
          </div>
        </div>
        <div className="Weather-details">
          <div className="Weather-details-title">Details</div>
          <div className="Weather-flex">
            <div className="Weather-att">Feel like</div>
            <div className="Weather-value">
              {data.main ? (
                <label>{(data.main.feels_like - 273.15).toFixed(1)}</label>
              ) : null}
              °C
            </div>
          </div>
          <div className="Weather-flex">
            <div className="Weather-att">Wind</div>
            <div className="Weather-value">
              {data.wind ? <label>{data.wind.speed}</label> : null}m/s
            </div>
          </div>
          <div className="Weather-flex">
            <div className="Weather-att">Humidity</div>
            <div className="Weather-value">
              {data.main ? <label>{data.main.humidity}</label> : null}%
            </div>
          </div>
          <div className="Weather-flex">
            <div className="Weather-att">Pressure</div>
            <div className="Weather-value">
              {data.main ? <label>{data.main.pressure}</label> : null}Pa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
