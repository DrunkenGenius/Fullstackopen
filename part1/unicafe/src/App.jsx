import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    let updatedGood = good + 1;
    setGood(updatedGood);
  }
  
  const incrementNeutral = () => {
    let updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  }

  const incrementBad = () => {
    let updatedBad = bad + 1;
    setBad(updatedBad);
  }

  

  return (
    <>
      <Headline text="Give feedback!" />
      <Button text="good" onClickEvent={incrementGood}/>
      <Button text="neutral" onClickEvent={incrementNeutral}/>
      <Button text="bad" onClickEvent={incrementBad}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
  </>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const getAll = () => good+neutral+bad;
  const getAverage = () => (good-bad)/(getAll());
  const getPositive = () => (good/(getAll()) * 100) +" %";

  if(getAll() == 0){
    return (
      <><Headline text="Statistics:" />
      <p>No feedback given</p>
      </>
    )
  }
  return(
    <div>
      <Headline text="Statistics:" />
      <table>
        <tbody>
          <Stat statName="good" value={good}/>
          <Stat statName="neutral" value={neutral}/>
          <Stat statName="bad" value={bad}/>
          <Stat statName="All" value={getAll()} ></Stat>
          <Stat statName="Average" value={getAverage()} ></Stat>
          <Stat statName="positive" value={getPositive()} ></Stat>
        </tbody>
      </table>
    </div>
  )
  
}

const Headline = ({ text }) => <h1>{text}</h1>;

const Button = ({text, onClickEvent}) => <button onClick = {onClickEvent}>{text}</button>

const Stat = ({statName, value}) => <tr><td>{statName}</td><td>{value}</td></tr>
export default App
