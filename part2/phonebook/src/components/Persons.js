import React, { useState } from "react"
import Person from "./Person"

const Persons = ({ persons, filterName, setPersons }) => {
  const filteredList = persons.filter((filterNm) => {
    return filterNm.name.toLowerCase().includes(filterName.toLowerCase())
  })

  return (
    <ul>
      {filteredList.map((person) => (
        <Person
          key={person.id}
          person={person}
          persons={persons}
          setPersons={setPersons}
          filteredList={filteredList}
        />
      ))}
    </ul>
  )
}

export default Persons
