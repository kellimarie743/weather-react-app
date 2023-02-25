import React from "react";
import DateFormat from "./DateFormat.js";
import WeatherIcon from "./WeatherIcon.js";

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
          <div className="clearfix">
            <div className="float-left" />
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="float-left">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Wind: {props.data.wind}km/h</li>
          <li>Humidity: {props.data.humidity}%</li>
        </ul>
      </div>
    </div>
  );
}
