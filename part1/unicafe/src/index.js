import React, { useState } from "react"
import ReactDOM from "react-dom"

const Heading = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
)
const Button = ({ btnName, incrementReview }) => (
  <button onClick={incrementReview}>{btnName}</button>
)

const DisplayReviewNmb = ({ reviewName, reviewNmb }) => (
  <tr>
    <td>{reviewName}</td>
    <td>{reviewNmb}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all == 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <table>
        <tbody>
          <DisplayReviewNmb reviewName={"good"} reviewNmb={good} />
          <DisplayReviewNmb reviewName={"neutral"} reviewNmb={neutral} />
          <DisplayReviewNmb reviewName={"bad"} reviewNmb={bad} />
          <DisplayReviewNmb reviewName={"all"} reviewNmb={all} />
          <DisplayReviewNmb reviewName={"average"} reviewNmb={average} />
          <DisplayReviewNmb
            reviewName={"positive"}
            reviewNmb={positive + "%"}
          />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  const firstHeadin = "give feedback"
  const secondHeding = "statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const increseGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage((good + 1 - bad) / (all + 1))
    setPositive(((good + 1) / (all + 1)) * 100)
  }
  const increseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good - bad) / (all + 1))
    setPositive((good / (all + 1)) * 100)
  }
  const increseBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - (bad + 1)) / (all + 1))
    setPositive((good / (all + 1)) * 100)
  }

  return (
    <div>
      <Heading title={firstHeadin} />

      <Button btnName={"good"} incrementReview={increseGood} />
      <Button btnName={"neutral"} incrementReview={increseNeutral} />
      <Button btnName={"bad"} incrementReview={increseBad} />

      <Heading title={secondHeding} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
