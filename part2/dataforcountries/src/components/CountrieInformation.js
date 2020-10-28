import React from "react"
import WeatherInfo from "./WeatherInfo"

const CountrieInformation = ({ countrie }) => {
  return (
    <div>
      <h2>{countrie.name}</h2>
      <p>capital {countrie.capital} </p>
      <p>population {countrie.population} </p>
      <h3>languages</h3>
      <ul>
        {countrie.languages.map((language) => {
          return <li key={language.iso639_2}>{language.name}</li>
        })}
      </ul>
      <img src={countrie.flag} alt='countrie flag' />
      <WeatherInfo city={countrie.capital} />
    </div>
  )
}

export default CountrieInformation
