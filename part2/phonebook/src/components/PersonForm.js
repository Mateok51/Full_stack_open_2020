import React from "react"
import dataServices from "../services/dataServices"

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setNotification,
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
              //Show notification about changing the number
              setNotification(
                `The number of ${personObject.name} is changed to ${personObject.number}`
              )
              setInterval(() => {
                setNotification(null)
              }, 5000)
              setPersons(
                persons.map((person) =>
                  person.name !== personObject.name ? person : returnedPerson
                )
              )
            })
            .catch((error) => {
              setNotification(
                "There has been a change in the list. List is refreshed"
              )
              setInterval(() => {
                setNotification(null)
              }, 5000)
              dataServices.getAll().then((initalPerons) => {
                setPersons(initalPerons)
              })
            })
        }
      } else if (
        index === persons.length - 1 &&
        persons[index].name !== personObject.name
      ) {
        dataServices
          .create(personObject)
          .then((returnedPerson) => {
            setNotification(
              `Person with the name of ${personObject.name} is added to the phonebook`
            )
            setInterval(() => {
              setNotification(null)
            }, 5000)
            return setPersons(persons.concat(returnedPerson))
          })
          .catch((error) => {
            setNotification(
              "There has been a change in the list. List is refreshed"
            )
            setInterval(() => {
              setNotification(null)
            }, 5000)
            dataServices.getAll().then((initalPerons) => {
              setPersons(initalPerons)
            })
          })
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
