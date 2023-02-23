import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form className="search">
          <input type="text" placeholder="name a city.." autoComplete="off" />
          <input type="submit" value="search" className="btn btn-success" />
          <button className="btn btn-primary">Here 📍</button>
        </form>
        <h1 className="cityName">Los Angeles</h1>

        <span className="date">Sunday June 22nd, 2022</span>
        <span className="daily-temp"> {Math.round(temperature)}°C</span>

        <ul>
          <li>Vibe: sunny with some clouds</li>
          <li>Wind: 10mph</li>
          <li>Humidity: 30%</li>
        </ul>
      </div>
    );
  }
  const apiKey = "a3aef3d88b497be8dac5495183af8944";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then((response) => {
    handleResponse(response.data);
    return "App Loading...";
  });

  <div className="credits">
    Hosted on{" "}
    <a href="https://app.netlify.com/teams/kellimarie743/sites">Netlify</a> with
    Open Sourced on{" "}
    <a
      href="https://github.com/kellimarie743/weather-react-app"
      target="_blank"
      rel="noreferrer"
    >
      Github
    </a>{" "}
    by Kelli Anderson
  </div>;
}
