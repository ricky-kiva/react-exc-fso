import { useState } from "react"

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

  const Statistics = (props) => {
    const { total } = props

    if (total === 0) {
      return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    }

    const average = (good - bad) / total
    const positive = (good / total) * 100
    
    return (
      <div>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    )
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
      <Statistics total={total} />
    </div>
  )
}

export default App
