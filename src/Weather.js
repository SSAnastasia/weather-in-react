import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function SearchEngine() {
  let [city, setcity] = useState("");
  let [load, setLoad] = useState(false);
  
 
  function show(event) {
    event.preventDefault();
    setcity(event.target.value);
  }
 

  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setLoad(true);
    setTemperature(response.data.main.temp);
  }

  function showDescription(response) {
    setLoad(true);
    setDescription(response.data.weather[0].description);
  }
  function showHumidity(response) {
    setLoad(true);
    setHumidity(response.data.main.humidity);
  }
  function showWind(response) {
    setLoad(true);
    setWind(response.data.wind.speed);
  }
  function showIcon(response) {
    setLoad(true);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let apikey = "8fa8d64086e29f081d52f48a507241e6";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(showTemperature);
    axios.get(apiurl).then(showDescription);
    axios.get(apiurl).then(showHumidity);
    axios.get(apiurl).then(showWind);
    axios.get(apiurl).then(showIcon);
  }

  let form = (
    <div className="Search">
    <form class="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search city"
        aria-label="Search"
        autofocus="on"
        autocomplete="off"
        id="enter-city"
        onChange={show} />
      
      <button class="btn btn-outline-success" type="submit" id="searching">
        Search
      </button>
      <input type="submit" value="My location" id="location-button" />
    </form>
  </div>
  );
  if (load) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {Math.round(wind)}km/h</li>
          <li>
            <img src={icon} alt="" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
