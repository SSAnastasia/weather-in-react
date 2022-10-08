import React, { useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";
import WeatherForecast from "./WeatherForecast";
import "./styles.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready:true,
      coordinates: response.data.coord,
      temperature:response.data.main.temp,
      humidity: response.data.main.humidity,
      date:new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      wind:response.data.wind.speed,
      city:response.data.name,
    });
  }



    function Submit(event){
      event.preventDefault();
      search();
    }
    function cityChange(event){
      setCity(event.target.value);
    }
    
    function search(){
      const apiKey = "8fa8d64086e29f081d52f48a507241e6";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(handleResponse);
    }

   

    if (weatherData.ready) {
      return (
        <div>
        <form class = "d-flex" 
        role = "search"  
        onSubmit={Submit}>
        <input class = "form-control me-2"
        type="search" 
        placeholder="Type a city... " 
        onChange={cityChange} />
        <button class = "btn btn-outline-success" type="submit" id="searching">
          Search
          </button>
      </form>
      <ShowWeather data = {weatherData}/>
      <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
      );
    }else{
    search()
    return "Loading...";
    }
}