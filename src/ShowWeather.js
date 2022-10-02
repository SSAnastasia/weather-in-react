import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";
export default function ShowWeather(props){

return (
    <div className = "ShowWeather">
    <h2>{props.data.city}</h2>
    <h3>
    <Date date = {props.data.date}/>
    </h3>
    <h3>
    <Temperature celsius = {props.data.temperature}/>
    </h3>
    <ul>
    <li>Temperature: {props.data.temperature}°C</li>
          <li>Description: {props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
          <li>
             {props.data.icon} size={50}
          </li>
    </ul>
    </div>
)
}
