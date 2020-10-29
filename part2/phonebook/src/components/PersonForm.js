import axios from "axios"
import React from "react"
import dataServices from "../services/dataServices"

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const addPerson = (Event) => {
    Event.preventDefault()
    const personObject = {
      name: newName,
      date: new Date().toISOString(),
      number: newNumber,
      id: persons.length + 1,
    }

    //Loops to find if the person already exist in the phonebook
    //If its the last element and the person still doesnt exist add it
    for (let index = 0; index < persons.length; index++) {
      if (persons[index].name === personObject.name) {
        //if there is the person with the same name offer a choise to add new number to the person
        if (
          window.confirm(
            `This contact is already added in the phonebook. Do you want to change the number of the contact?`
          )
        ) {
          const existingPerson = persons.find(
            (p) => p.name === personObject.name
          )
          const changedNumberPerson = {
            ...existingPerson,
            number: personObject.number,
          }

          dataServices
            .changeNumber(changedNumberPerson.id, changedNumberPerson)
            .then((returnedPerson) => {
              setPersons(
                persons.map((person) =>
                  person.name !== personObject.name ? person : returnedPerson
                )
              )
            })
        }
      } else if (
        index === persons.length - 1 &&
        persons[index].name !== personObject.name
      ) {
        dataServices
          .create(personObject)
          .then((returnedPerson) => setPersons(persons.concat(returnedPerson)))
      }
    }
  }
  const handlePersonChange = (Event) => {
    setNewName(Event.target.value)
  }
  const handleNumberChange = (Event) => {
    setNewNumber(Event.target.value)
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handlePersonChange} />
      </div>
      <div>
        number : <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default PersonForm
