import axios from "axios"
import React, { useState, useEffect } from "react"
import SearchFilter from "./components/SearchFilter"

function App() {
  const [searchCountrie, setSearchCountrie] = useState(
    "Type in a countrie name"
  )
  const [countrieList, setCountrieList] = useState([])
  const handleSearchChange = (Event) => {
    setSearchCountrie(Event.target.value)
  }
  //Fetch countrie data from a external website
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountrieList(response.data)
    })
  }, [])

  return (
    <div>
      <div>
        find countries
        <input value={searchCountrie} onChange={handleSearchChange} />
        <SearchFilter
          countrieList={countrieList}
          searchCountrie={searchCountrie}
        />
      </div>
    </div>
  )
}

export default App
