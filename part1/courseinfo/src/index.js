import React from "react"
import ReactDOM from "react-dom"

const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.coursePart} {props.courseExercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part coursePart={props.part1} courseExercises={props.exercises1} />
      <Part coursePart={props.part2} courseExercises={props.exercises2} />
      <Part coursePart={props.part3} courseExercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises is{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
