import React from "react"
import dataServices from "../services/dataServices"

const Person = ({ person, persons, setPersons, setNotification }) => {
  //Deletes the person an a click of a button
  //Filters the list so the person is removed without reloading
  //Every button uses the id of a person
  //Asks the user to confirm deletion
  const toggleDeletion = (id) => {
    if (
      window.confirm(
        `Do you really want to delete this person from the phonebook?`
      )
    ) {
      dataServices
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((n) => n.id !== id))
          setNotification("The person was deleted from the phonebook")
          setInterval(() => {
            setNotification(null)
          }, 5000)
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

  return (
    <li>
      {person.name} {person.number}
      <button onClick={() => toggleDeletion(person.id)}>delete</button>
    </li>
  )
}

export default Person
