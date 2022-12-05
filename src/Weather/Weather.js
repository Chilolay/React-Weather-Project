import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

export default function WeatherData({ weatherData }) {
  return weatherData ? (
    <Container>
      <Row>
        <Col md={6}>
          <div>
            <h1>Seattle</h1>
            <p>{Math.round(weatherData.main.temp)}°C</p>
            <div>Description: {weatherData.weather[0].description}</div>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weatherIcon"
            />
          </div>
        </Col>
        <Col md={6}>
          <div>Humidity: {Math.round(weatherData.main.humidity)}%</div>
          <div>Wind: {Math.round(weatherData.wind.speed)}km/h</div>
        </Col>
      </Row>
    </Container>
  ) : (
    false
  );
}
