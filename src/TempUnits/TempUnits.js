import React, { useState } from "react";
import "./styles.css";


export default function TempUnits({ celsius }) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
      return (
        <span className="tempUnits">
          <span className="temperature">{Math.round(celsius)}</span>
          <span className="unit">
            °C | <a href="/" onClick={showFahrenheit}>°F</a>
          </span>
        </span>
      );
  } else {
    let fahrenheit = (celsius * 9/5) + 32;
          return (
            <span className="tempUnits">
              <span className="temperature">{Math.round(fahrenheit)}</span>
              <span className="unit">
                <a href="/" onClick={showCelsius}>
                  °C
                </a>{" "}
                | °F
              </span>
            </span>
          );
  }
}
