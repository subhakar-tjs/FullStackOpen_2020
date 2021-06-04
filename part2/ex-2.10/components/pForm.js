import React from 'react';

function PersonForm({addName, handleNameChange, newName, handleNumberChange, newNumber}) {
    return (
        <div>
            <form onSubmit={addName}>
                <div>
                    name <input onChange={handleNameChange} value={newName}/></div>
                 <div>   number <input onChange={handleNumberChange} value={newNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm