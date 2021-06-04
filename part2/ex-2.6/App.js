import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNote = (event) => {  
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject={
      name: newName,
      key :newName
    }
    setPersons(persons.concat(noteObject))
    //setNewName('')
    
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }
  const person=persons.map(person=>
    <ul key={person.name}>{person.name}</ul>)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} 
        onChange={handleNameChange}/>
        </div>
        <div>
          <button   type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {person}
      </ul>
    </div>
  )
}

export default App

