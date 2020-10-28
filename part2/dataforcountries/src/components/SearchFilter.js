import React, { useState } from "react"
import CountrieInformation from "./CountrieInformation"

const SearchFilter = ({ countrieList, searchCountrie }) => {
  const [showCountrie, setShowCountrie] = useState(0)
  const [showView, setShowView] = useState(false)

  //Make a filtered array with only the countries that include user input
  const filteredList = countrieList.filter((countrie) => {
    return countrie.name.toLowerCase().includes(searchCountrie.toLowerCase())
  })

  //Show a warning message if too many results
  if (filteredList.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  //Show only the names and buttons if there are some results
  else if (filteredList.length <= 10 && filteredList.length > 1) {
    //If clicked on a button show info about the countrie below the results
    const handleShowButton = (Event) => {
      setShowCountrie(Event.target.id)
      setShowView(!showView)
    }

    return (
      <div>
        {filteredList.map((countrie, index) => {
          return (
            <div key={countrie.alpha3Code}>
              {countrie.name}
              <button onClick={handleShowButton} id={index}>
                show
              </button>
            </div>
          )
        })}

        {/* If the button is clicked then show more info abou the countrie */}
        {showView ? (
          <CountrieInformation countrie={filteredList[showCountrie]} />
        ) : null}
      </div>
    )
  }
  //If there is only one result show all the details about the countrie
  else if (filteredList.length === 1) {
    const oneCountrie = filteredList[0]
    return <CountrieInformation countrie={oneCountrie} />
  } else {
    return <p>There is no such countrie</p>
  }
}

export default SearchFilter
