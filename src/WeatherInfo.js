import React from "react";
import DateFormat from "./DateFormat.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateFormat date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix d-flex align-items-center">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={70} />
            </div>

            <span className="temperature">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </span>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Wind: {props.data.wind}km/h</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
