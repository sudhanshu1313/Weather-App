import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import searchIcon from "../assets/images/search01.png";

function Teamapp() {
  const [data, setData] = useState({
    celcius: 10,
    name: "Pune",
    humidity: 10,
    speed: 2,
  });

  const [name, setName] = useState("");

  const handeleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c4b809212a07f2a5a0c3b3d8ddb39c53&&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          setData({
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
          });
        })
        //.catch((err) => console.log(err));
        .catch((err) => alert("Invalid City, Please enter Valid City..! "));
    }
  };

  return (
    <div className="weather-card">
      <div className="search">
        <input
          type="search"
          placeholder="Enter City Name"
          spellCheck="false"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handeleClick}>
          <img className="mx-3" src={searchIcon} alt="Search" />
        </button>
      </div>
      <div className="weather">
        <img
          className="weather-icon"
          src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png"
          alt="Weather Icon"
        />
        <h1 className="temp">{Math.round(data.celcius)}°C</h1>
        <h2 className="city">{data.name}</h2>
        <div className="details">
          <div className="col">
            <img
              className="humi"
              src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"
              alt="Humidity Icon"
            />
            <div className="info">
              <p className="humidity">{Math.round(data.humidity)}% Humidity</p>
            </div>
          </div>
          <div className="col">
            <img
              src="https://cdn-icons-png.flaticon.com/512/136/136712.png"
              alt="Wind Icon"
            />
            <div className="info">
              <p className="wind">{Math.round(data.speed)} km/h Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4"> © Weather App 2024 | Create By Sudhanshu Gaikwad</p>
    </div>
  );
}

export default Teamapp;
