const App = ({counter}) => {
  const course = {name: 'Half Stack application development',
  parts: [{ name: 'Fundamentals of React', exercises: 10} , 
  { name: 'Using props to pass data', exercises:7}, 
  { name: 'State of a component', exercises: 14}]}

  return (
    <div>
      <Header course={course} />
      <Content course = {course}/>
      <Total course = {course}/>
      <p>Count {counter}</p>
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({course}) => {
  const content = [];
  course.parts.forEach(part => {
    content.push(<Part part = {part}/>);
  })
  return (
    <>
      {content}
    </>
    
  )
}

const Total = ({course}) =>{
  let sum = 0;
  course.parts.forEach(part => {
    sum += part.exercises;
  })
  return(
    <p>Number of exercises {sum}</p>
  )
}

const Part = ({part}) =>{
  return(
    <p>{part.name} {part.exercises}</p>
  )
}


export default App
