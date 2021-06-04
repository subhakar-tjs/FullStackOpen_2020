import React from 'react';
import Person from './pForm'

function Persons({persons,foundPerson, filtered}) {
    const rows = () =>
        filtered === ""
        ? (persons.map(p => <Person key={p.name}  name={p.name} number={p.number} />)
        ) : ( foundPerson.map(p => (<ul key={p.name}> {p.name} {p.number}</ul>))
        )
    return (
        <div>
            {rows()}
        </div>
    )
}

export default Persons