import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import FormattedDate from "../FormattedDate/FormattedDate";
import TempUnits from "../TempUnits/TempUnits";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";

export default function WeatherData({ weatherData }) {
  return weatherData ? (
    <div className="Weather">
      <h1>{weatherData.name}</h1>
      <ul>
        <li>
          <FormattedDate dateTime={weatherData.dt} />
        </li>
        <li className="text-capitalize">
          Description: {weatherData.weather[0].description}
        </li>
      </ul>
      <Row>
        <Col md={6}>
          <span>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weatherIcon"
            />
            <TempUnits celsius={Math.round(weatherData.main.temp)} />
          </span>
        </Col>

        <Col md={6}>
          <ul className="humidityWind">
            <li>Humidity: {Math.round(weatherData.main.humidity)}%</li>
            <li>Wind: {Math.round(weatherData.wind.speed)} km/h</li>
          </ul>
        </Col>
      </Row>
      <WeeklyForecast weatherData={weatherData} />
    </div>
  ) : (
    false
  );
}
