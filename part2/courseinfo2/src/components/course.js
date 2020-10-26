import React from "react"

const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} parts={part} />
    ))}
  </div>
)

const Part = ({ parts }) => (
  <p>
    {parts.name} {parts.exercises}
  </p>
)

const Total = ({ parts }) => {
  const exercies = parts.map((part) => {
    return part.exercises
  })
  const sum = exercies.reduce((acc, value) => {
    return acc + value
  }, 0)
  return <p>Total of {sum} exercises</p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
