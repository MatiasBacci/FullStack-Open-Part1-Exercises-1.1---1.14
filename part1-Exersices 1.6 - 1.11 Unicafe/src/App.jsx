import { useState } from 'react'

// Component definitions
const Subtitle = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}> {text} </button>

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({good, neutral, bad, allCount, average, positiveAverage})  => {
  // If no feedback was given, we show a messege instead of all statistics in zero
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={allCount} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive Average" value={positiveAverage.toFixed(2) + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state and define variables
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const goodClick = () => setGood(good + 1) 
  const neutralClick = () => setNeutral(neutral + 1) 
  const badClick = () => setBad(bad + 1) 

  let allCount =  + good + neutral + bad 
  let average = (good * 1 + bad * -1) / allCount 
  let positiveAverage = (good/allCount) * 100 

  // We render now the app
  return (
    <div>
      <Subtitle text={"Give Feedback"}/>
      <Button handleClick={goodClick} text="Good" />
      <Button handleClick={neutralClick} text="Neutral" />
      <Button handleClick={badClick} text="Bad" />
      <Subtitle text={"Statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad} allCount={allCount} average={average} positiveAverage={positiveAverage} />
    </div>
  )
}

export default App