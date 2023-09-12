const App = () =>{
  return(
    <div>
      <h1>Greetings!</h1>
      <Hello name="Troels" age={10} />
    </div>
  )
}

const Hello = (props) => {
  console.log(props);
  return (<div>
    <p>Hello {props.name}, you are {props.age} years old</p>
  </div>)
}

export default App
