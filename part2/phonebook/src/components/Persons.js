import React from "react"
import Person from "./Person"

const Persons = ({ persons, filterName }) => {
  const filteredList = persons.filter((filterNm) => {
    return filterNm.name.toLowerCase().includes(filterName.toLowerCase())
  })

  return (
    <ul>
      {filteredList.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  )
}

export default Persons
