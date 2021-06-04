import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  const rand = () => {
    let random = Math.floor(Math.random() * 6);
    setSelected(random);
  }
  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

  }
  let max = votes[0];
  let p = 0;
  for (let i =1; i < 6; i++){
    if (votes[i] > max){
      max = votes[i];
      p = i;
    }
  }

  return (
    <div>
    <h1>Anecdote of the day</h1>
     <p>{anecdotes[selected]}</p> 
    <p> has {votes[selected]} votes</p>
    <button onClick = {voteForAnecdote}>vote</button>
      <button onClick={rand}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
       <p>{anecdotes[p]}</p>
       <p>has {votes[p]} votes</p>
    </div>
  )
}

export default App;