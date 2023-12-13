const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part name={props.parts[0].name} exercise={props.parts[0].exercise}/>
      <Part name={props.parts[1].name} exercise={props.parts[1].exercise}/>
      <Part name={props.parts[2].name} exercise={props.parts[2].exercise}/>
    </div>
  )
}

const Part = (props) => (
  <>
    <p>{props.name} {props.exercise}</p>
  </>
)

const Total = (props) => {
  let total = 0
  props.parts.forEach((part) => total += part.exercises)
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises:  10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App
