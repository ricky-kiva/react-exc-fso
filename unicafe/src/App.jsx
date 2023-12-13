import { useState } from "react"

const Statistics = (props) => {
  const { good, neutral, bad, total } = props

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={() => good} />
        <StatisticLine text="neutral" value={() => neutral} />
        <StatisticLine text="bad" value={() => bad} />
        <StatisticLine text="all" value={() => total} />
        <StatisticLine 
          text="average" 
          value={() => Math.round(((good - bad) / total) * 10) / 10}
        />
        <StatisticLine
          text="positive"
          value={() => `${Math.round(((good / total) * 100) * 10) / 10} %`}
        />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) =>
  <tr>
    <td>{text}</td>
    <td>{value()}</td>
  </tr>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    setTotal(newGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setTotal(good + newNeutral + bad)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
    setTotal(good + neutral + newBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
      />
    </div>
  )
}

export default App
