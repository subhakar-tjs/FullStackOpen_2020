import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filtered, setFiltered] = useState("");
  const [foundPerson, setFoundPerson] = useState([]);
  

  const addName = (event) => {  
    event.preventDefault()
 
    console.log('button clicked', event.target)
    const nameObject={
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))  
  }
   
  const handleFilter = (event) => {
    setFiltered(event.target.value);
    const personResult = persons.filter(person =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFoundPerson(personResult);
  }
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)  
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
 

  const rows = () =>
      setFiltered === ""
      ? (persons.map(person=><ul key={person.name}>{person.name} {person.number}</ul>)
      ) : ( foundPerson.map(p => (<p key={p.name}>{p.name} {p.number}</p>))
      )
 
 
  return (
    <div>
      <h1>Phonebook</h1>
      
      <div> filter shown with <input value={filtered} onChange={handleFilter}/></div>
     
      <form onSubmit={addName}>   
      <h1>add new</h1> 
      <div> name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      
     {rows()}
     
  
      </ul>
    </div>
  )
}

export default App

