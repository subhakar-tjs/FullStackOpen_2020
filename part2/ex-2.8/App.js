import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([ ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const addName = (event) => {  
    event.preventDefault()
 
    console.log('button clicked', event.target)
    const nameObject={
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))  
  }
 
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)  
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
 
 const person1=persons.map(person=><ul key={person.name}>{person.name} {person.number}</ul>)
 


 
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>    
      <div> name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button  type="submit">add</button>
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

