import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNote = (event) => {  
    event.preventDefault()
    const check=persons.some(person=>person.name===newName)
    if(check)
 {
 alert(`${newName} is already added to phonebook`)
 }
 else{
    console.log('button clicked', event.target)
    const nameObject={
      name: newName,
      key :newName
    }
    setPersons(persons.concat(nameObject))
  }
    
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }
 
 const person1=persons.map(person=><ul key={person.name}>{person.name}</ul>)
 

// const alrt=persons.find(person=>person.name===newName)
 
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
     {person1}
  
      </ul>
    </div>
  )
}

export default App

