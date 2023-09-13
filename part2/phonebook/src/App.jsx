import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const handleOnChangeName = (event) => {
    let value = event.target.value
    setNewName(value);
  }

  const handleOnChangeNameFilter = (event) => {
    let value = event.target.value
    setNameFilter(value);
  }
  const handleOnChangeNumber = (event) => {
    let value = event.target.value
    setNewNumber(value);
  }

  const saveToPhonebook = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name == newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length +1}))
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleOnChangeNameFilter={handleOnChangeNameFilter}/>
      <PersonForm newName={newName} newNumber={newNumber} handleOnChangeName={handleOnChangeName} handleOnChangeNumber={handleOnChangeNumber} saveToPhonebook={saveToPhonebook}/>
      <Numbers nameFilter={nameFilter} persons={persons} />
    </div>
  )
}

const Numbers = ({ nameFilter, persons }) => {
  const filteredPersons = persons.filter(person => person.name.includes(nameFilter))
  return (
    filteredPersons.map(person => <Person person={person} key={person.id}></Person>)
  )
}

const Filter = ({nameFilter, handleOnChangeNameFilter}) => {
  return(
    <form>
        <div>
          filter by name: <input id="nameFilter" value={nameFilter} onChange={handleOnChangeNameFilter} />
        </div>
      </form>
  )
}

const PersonForm = ({newName, newNumber, handleOnChangeName, handleOnChangeNumber, saveToPhonebook}) => {
  return(
    <div>
      <h2>Add new</h2>
        <form>
          <div>
            name: <input id="nameInput" value={newName} onChange={handleOnChangeName} />
          </div>
          <div>number: <input id="numberInput" value={newNumber} onChange={handleOnChangeNumber} /></div>
          <div>debug: {newName}</div>
          <div>
            <button type="submit" onClick={saveToPhonebook}>add</button>
          </div>
        </form>
      </div>
    )
}

const Person = ({ person }) => <div key={person.name}>{person.name}: {person.number}</div>

export default App