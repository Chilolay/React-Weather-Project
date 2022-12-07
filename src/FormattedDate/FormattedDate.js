import React from "react";
import WeatherData from "../Weather/Weather";

export default function FormattedDate({ dateTime }) {
  let newDate = new Date(dateTime * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[newDate.getDay()];
  let hours = newDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = newDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <>
      {day} {hours}:{minutes}
    </>
  );
}
