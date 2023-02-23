import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherInfo = {
    city: "Los Angeles",
    date: "Sunday June 22nd, 2022",
    temp: 75,
    humidity: 30,
    wind: 10,
    vibe: "sunny with some clouds",
  };

  return (
    <div className="Weather">
      <form className="search">
        <input type="text" placeholder="name a city.." autocomplete="off" />
        <input type="submit" value="search" className="btn btn-success" />
        <button className="btn btn-primary">Here 📍</button>
      </form>

      <h1 className="cityName">{weatherInfo.city}</h1>
      <div className="date">{weatherInfo.date}</div>
      <div className="daily-temp">
        <span>{weatherInfo.temp}</span>
        <span className="celsiusFahren"> °F </span>

        <ul>
          <li>Vibe: {weatherInfo.vibe}</li>
          <li>Wind: {weatherInfo.wind}mph</li>
          <li>Humidity: {weatherInfo.humidity}%</li>
        </ul>
      </div>

      <div className="credits">
        Hosted on{" "}
        <a href="https://app.netlify.com/teams/kellimarie743/sites">Netlify</a>{" "}
        with Open Sourced on{" "}
        <a
          href="https://github.com/kellimarie743/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        by Kelli Anderson
      </div>
    </div>
  );
}
