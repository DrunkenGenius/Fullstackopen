const App = () => {
  const course = 'Half Stack application development'
  const parts = [{ name: 'Fundamentals of React', exercises: 10} , 
  { name: 'Using props to pass data', exercises:7}, 
  { name: 'State of a component', exercises: 14}]

  return (
    <div>
      <Header courseName={course} />
      <Content courseParts = {parts}/>
      <Total courseParts = {parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  const content = [];
  props.courseParts.forEach(part => {
    content.push(<Part coursePart = {part}/>);
  })
  return (
    <>
      {content}
    </>
    
  )
}

const Total = (props) =>{
  let sum = 0;
  props.courseParts.forEach(part => {
    sum += part.exercises;
  })
  return(
    <p>Number of exercises {sum}</p>
  )
}

const Part = (props) =>{
  return(
    <p>{props.coursePart.name} {props.coursePart.exercises}</p>
  )
}


export default App
