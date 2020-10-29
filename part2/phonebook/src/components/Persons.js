import Person from "./Person"

const Persons = ({ persons, filterName, setPersons, setNotification }) => {
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
          setNotification={setNotification}
        />
      ))}
    </ul>
  )
}

export default Persons
