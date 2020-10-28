import React, { useState, useEffect } from "react"
import axios from "axios"

const api_key = process.env.REACT_APP_API_WEATHER_KEY

const WeatherInfo = ({ city }) => {
  //Created an empty array that is showed before the data is fetched
  const [weatherInfo, setWeatherInfo] = useState({
    current: {
      temperature: 0,
      weather_icons: [0],
      wind_speed: 0,
      wind_dir: 0,
    },
  })

  //Fetch data with the city of the capital
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
      )
      .then((response) => {
        setWeatherInfo(response.data)
      })
  }, [])

  return (
    <div>
      <h3>Weather in {city} </h3>
      <p>
        <strong>temperature</strong> {weatherInfo.current.temperature}{" "}
      </p>
      <img src={weatherInfo.current.weather_icons[0]} />
      <p>
        <strong>wind</strong> {weatherInfo.current.wind_speed} mph direction{" "}
        {weatherInfo.current.wind_dir}{" "}
      </p>
    </div>
  )
}

export default WeatherInfo
