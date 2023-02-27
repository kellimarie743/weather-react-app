import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
      </div>

      <footer className="credits">
        Hosted on{" "}
        <a
          href="https://app.netlify.com/teams/kellimarie743/sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>{" "}
        with Open Sourced on{" "}
        <a
          href="https://github.com/kellimarie743/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        by Kelli Anderson
      </footer>
    </div>
  );
}
