import React, { useState } from 'react'
import PersonForm from './components/pForm'
import Persons from './components/pModule'
import FilterModule from './components/filterModule'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filtered, setFiltered] = useState('');
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
 

  /*const rows = () =>
      setFiltered === ""
      ? (persons.map(person=><ul key={person.name}>{person.name} {person.number}</ul>)
      ) : ( foundPerson.map(p => (<p key={p.name}>{p.name} {p.number}</p>))
      )*/
 
 
  return (
    <div>
      <h1>Phonebook</h1>
      <FilterModule handleFilter={handleFilter} filtered={filtered}/>  
      <h1>add new</h1> 
      <PersonForm addName={addName} handleNameChange={handleNameChange} newName={newName} handleNumberChange={handleNumberChange}
        newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} foundPerson={foundPerson} filtered={setFiltered}/>
      
    </div>
  )
}

export default App

