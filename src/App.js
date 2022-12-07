import "./styles.css";
import { useState, useEffect } from "react";
import Search from "./Search/Search";
import Weather from "./Weather/Weather";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export default function App() {
  const [displayData, setDisplayData] = useState("Seattle");
  const [weatherData, setWeatherData] = useState(null);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${displayData}&appid=ef7a2bb41d1b15fcd08f581e9f05537a&units=metric`;

  useEffect(() => {
      axios.get(url).then((data) => setWeatherData(data.data));
  }, [url]);

  
  return (
    <div className="App">
      <Container>
        <div className="App">
          <Search onSearchUpdate={setDisplayData} />
          <Weather weatherData={weatherData} />
        </div>
      </Container>
      <p>
        <a href="https://github.com/Chilolay" target="blank">
          Open-source Code
        </a>{" "}
        by Chloe Boyd
      </p>
    </div>
  );
}
