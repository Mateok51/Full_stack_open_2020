import React, { useState } from "react"
import ReactDOM from "react-dom"

const Button = ({ buttonFunction, btnText }) => {
  return <button onClick={buttonFunction}>{btnText}</button>
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const voteInc = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
  }

  const changeAnecdote = () =>
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))

  const selectMostVotesAnecdote = () => {
    return vote.indexOf(Math.max(...vote))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes </p>
      <Button buttonFunction={voteInc} btnText='Vote' />
      <Button buttonFunction={changeAnecdote} btnText='Next anecdote' />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[selectMostVotesAnecdote()]}</p>
      <p>has {vote[selectMostVotesAnecdote()]} votes</p>
    </div>
  )
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"))
