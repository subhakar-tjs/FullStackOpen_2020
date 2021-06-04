import React, { useState } from 'react'

const Statistics = ({good,neutral,bad}) => {
  const all = good+bad+neutral;

  const average = ((good+(-1*bad))/all).toFixed(16);

  const positive = ((good/all)*100).toFixed(16);
  
  return(
    <div>
      <table>
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
      <tr>
      <td>all</td> 
      <td>{all}</td>
      </tr>
      <tr>
      <td>average</td> 
      <td>{average}</td>
      </tr>
      <tr>
      <td>positive</td> 
      <td>{positive}%</td>
      </tr>
      
      </table>
    </div>
  )
}
  const Statistic=(props)=>{
    return(
      <tr>
     <td>{props.text} </td>
     <td>{props.value}</td>
     </tr>
    )
  }

const Button=(props)=>
  (
    <button onClick={props.click}>
    {props.text}
  </button>
  )

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 
  const con = good + neutral + bad;
  if(con===0)
  {
    return(
    <div>
      <h1>give feedback</h1>
      <Button  text="good" click={() => setGood(good + 1)}/>
      <Button text="neutral"click={() => setNeutral(neutral + 1)} />
      <Button text="bad" click={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <p>No feedback given</p>
      
   
    </div>
  )
    }
    else{
      return(
        <div>
          <h1>give feedback</h1>
          <Button  text="good" click={() => setGood(good + 1)}/>
          <Button text="neutral"click={() => setNeutral(neutral + 1)} />
          <Button text="bad" click={() => setBad(bad + 1)} />
          <h1>Statistics</h1>
          <Statistics good={good}  neutral={neutral} bad={bad}/>
          
       
        </div>
      )
    }
  
  }


export default App;