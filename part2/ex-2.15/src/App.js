import React, { useState,useEffect } from 'react'
//import lists from './services/list'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filtered, setFiltered] = useState("");
  const [foundPerson, setFoundPerson] = useState([]);

  /*(useEffect(() => {
    lists
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])*/

  const addName = (event) => {  
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject={
      name: newName,
      number: newNumber
    }
    //persons.some(item => item.name === newName) ? alert(`${newName} is already added to phonebook`) :
    axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
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

