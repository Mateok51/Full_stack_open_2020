import React from "react"

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

    //Checks if the person already exists
    let personCheckNmb = 0
    persons.forEach((person) => {
      if (person.name === personObject.name) {
        personCheckNmb += 1
      }
    })
    if (personCheckNmb > 0) {
      alert(`Contact with the name ${personObject.name} is already added`)
      personCheckNmb = 0
    } else {
      setPersons(persons.concat(personObject))
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
