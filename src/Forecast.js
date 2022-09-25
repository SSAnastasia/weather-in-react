import "./styles.css";

export default function Forecast() {
  return (
    <div className="forecast-weather" id="forecast">
      <div class="card-group" className ="cardForForecast">
        <div class="card" id = "card1">
          <div class="forecastDate">
            <h4>
              <b>Thu</b>
            </h4>
          </div>
          <div class="forecastTemp">
            <h4>25°| 15°</h4>
           
          </div>
          <div class="forecastIcon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/373/original/sun.png?1657815046 "
              alt="icon-weather"
              id="icon"
              max
              width="50px"
            />
          </div>
        </div>
        <div class="card" id = "card2">
          <div class="forecastDate">
            <h4>
              <b>Fri</b>
            </h4>
          </div>
          <div class="forecastTemp">
          <h4>25°| 15°</h4>
          </div>
          <div class="forecastIcon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/373/original/sun.png?1657815046 "
              alt="icon-weather"
              id="icon"
              max
              width="50px"
            />
          </div>
        </div>
        <div class="card" id = "card3">
          <div class="forecastDate">
            <h4>
              <b>Sat</b>
            </h4>
          </div>
          <div class="forecastTemp">
          <h4>25°| 15°</h4>
          </div>
          <div class="forecastIcon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/373/original/sun.png?1657815046 "
              alt="icon-weather"
              id="icon"
              max
              width="50px"
            />
          </div>
        </div>
        <div class="card" id = "card4">
          <div class="forecastDate">
            <h4>
              <b>Sun</b>
            </h4>
          </div>
          <div class="forecastTemp">
          <h4>25°| 15°</h4>
          </div>
          <div class="forecastIcon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/373/original/sun.png?1657815046 "
              alt="icon-weather"
              id="icon"
              max
              width="50px"
            />
          </div>
        </div>
        <div class="card" id = "card5">
          <div class="forecastDate">
            <h4>
              <b>Mon</b>
            </h4>
          </div>
          <div class="forecastTemp">
          <h4>25°| 15°</h4>
          </div>
          <div class="forecastIcon">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/373/original/sun.png?1657815046 "
              alt="icon-weather"
              id="icon"
              max
              width="50px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
