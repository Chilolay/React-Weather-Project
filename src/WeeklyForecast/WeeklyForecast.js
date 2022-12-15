import React, { useEffect, useState } from "react";
import "./WeeklyForecast.css";
import FormattedForecastDays from "../FormattedForecastDays/FormattedForecastDays";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

export let apiKey = "ef7a2bb41d1b15fcd08f581e9f05537a";
export let api = (lat, lon, apiKey) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;


export default function WeeklyForecast({weatherData}) {
    const [data, setData] = useState()

    useEffect(() => {
        axios
          .get(api(weatherData.coord.lat, weatherData.coord.lon, apiKey))
          .then((res) => {
            setData(res);
          });
    }, [weatherData])


    function forecast() {
        if(data) {
            return data.data.daily
              .filter((_v, i) => i < 5)
              .map((v, i) => (
                <div className="WeeklyForecast" key={i}>
                  <Row>
                    <Col>
                      <div className="forecastDay">
                        <FormattedForecastDays data={v.dt}/>
                      </div>
                      <img
                        src={`http://openweathermap.org/img/wn/${v.weather[0].icon}@2x.png`}
                        alt="weather icon"
                      />
                      <div className="forecastTemps">
                        <span className="forecastMax">
                          {Math.round(v.temp.max)}°
                        </span>
                        <span className="forecastMin">
                          {Math.round(v.temp.min)}°
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
              ));
        }
        return null;
    }
    return <div className="forecast-wrapper">
        {forecast()}
        </div>
}