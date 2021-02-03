import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [country, setCountry] = useState("");
  const [flag, setFlag] = useState(false)
  let [weatherData, setWeatherData] = useState({"coord":{"lon":67.0097,"lat":30.199},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":270.62,"feels_like":266.18,"temp_min":270.62,"temp_max":270.62,"pressure":1024,"humidity":79,"sea_level":1024,"grnd_level":832},"visibility":10000,"wind":{"speed":2.52,"deg":300},"clouds":{"all":0},"dt":1610043811,"sys":{"country":"PK","sunrise":1609986549,"sunset":1610023610},"timezone":18000,"id":1167528,"name":"Quetta","cod":200})
  useEffect( () =>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=901d672d14c778eefb41af3fd3871f1f&units=metric`)
    .then(res => {
      
      const newWeather = res.data
      setWeatherData(newWeather)
      
    })
    .catch((err)=> console.log(err))
  },[flag])
  function PushWeather(){
    setFlag(!flag)
  }
  if(flag){
    var {temp, temp_max, temp_min, pressure, humidity, feels_like} = weatherData.main
  }
  return (
    <div className="App">
      <div className="WeatherCall">
      <input type='text' placeholder="Enter The Country" value={country} onChange={(e) => {setCountry(e.target.value); setFlag(false)}}/>
      <button onClick={PushWeather}>Call Weather</button>
      </div>
      {flag ? (
        <div className="WeatherData">
        <div className="WeatherItem">
          <h3>Country Details</h3>
          <ul className='UlStyle'>
            <li><b>City: </b> {weatherData.name}</li><hr/>
            <li><b>Country: </b> {weatherData.sys.country}</li><hr/>
            <li><b>Time Zone: </b> {weatherData.timezone}</li><hr/>
            <li><b>Sun-Rise: </b> {weatherData.sys.sunrise}</li><hr/>
            <li><b>Sun-Set: </b> {weatherData.sys.sunset}</li>
          </ul>

        </div>
        <div className="WeatherItem">
          <h3>Weather Details</h3>
          <ul className='UlStyle'>
            <li><b>Temperature: </b> {temp}&#176;C</li><hr/>
            <li><b>Humidity: </b> {humidity}</li><hr/>
            <li><b>Feels Like: </b> {feels_like}</li><hr/>
            <li><b>Pressure: </b> {pressure}</li><hr/>
            <li><b>Maximum Temperature: </b> {temp_max}&#176;C</li><hr/>
            <li><b>Minimum Temperature: </b> {temp_min}&#176;C</li>
          </ul>

        </div>
        
      </div>
      ):(
        <div><h2>No Data</h2></div>
      )
      }
    </div>
  );
}

export default App;
