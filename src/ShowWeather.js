import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
export default function ShowWeather(props){

return (
    <div className = "Weather">
        
    <h2>{props.data.city}</h2>
    <p>
    <Date date = {props.data.date}/>
    </p>
    <h3>
    <Temperature celsius = {props.data.temperature}/>
    </h3>
    
    <div className = "row">
    <div className = "col-4"  >
    <ul>
          <li>Description: {props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>      
    </ul>
    </div>
    <div className = "col-8">
        <WeatherIcon code={props.data.icon} size={130} />
       
    </div>
    </div>
   
</div>
)
}

