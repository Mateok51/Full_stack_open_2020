import React, { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import dataServices from "./services/dataServices"

const App = () => {
  //Initialize content saved in array Persons
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("Person name")
  const [newNumber, setNewNumber] = useState("Number")
  const [filterName, setFilterName] = useState("name")

  //Gets all the data from the database
  useEffect(() => {
    dataServices.getAll().then((initalPerons) => {
      setPersons(initalPerons)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <h3>Add a new person to the phonebook</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filterName={filterName}
        setPersons={setPersons}
      />
    </div>
  )
}

export default App
