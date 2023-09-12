import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0)

  const handleLeftClick = () =>{
    setAll(allClicks.concat("L"))
    const updatedLeft = left+1;
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () =>{
    setAll(allClicks.concat("R"))
    const updatedRight = right+1;
    setRight(updatedRight+1)
    setTotal(left + updatedRight)
  }
  
  return (
    <div>
      <Display counter = {left}/>
      <Button buttonText="Left Click" handleClick = {handleLeftClick} />
      <Button buttonText="Right Click" handleClick = {handleRightClick}/>
      <Display counter = {right}/>
      <History allClicks = {allClicks}/>
      <p>Total {total}</p>
    </div>
  )
}

const Display = ({counter}) =>(<>{counter}</>);

const Button = ({buttonText, handleClick}) => <button onClick={handleClick}>{buttonText}</button>;

const History = (props) =>{
  if(props.allClicks.length ===0){
    return(
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(" ")}
    </div>
  )
}

export default App

/*
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter);

  const increaseByOne =() =>{
    console.log('increasing, value before', counter);
    setCounter(counter + 1)};

  const decreaseByOne =() =>{
    console.log('decreasing, value before', counter);
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    console.log('resetting to zero, value before', counter);
    setCounter(0);
  }
  
  return (
    <div>
      <Display counter = {counter}/>
      <Button buttonText="IncreaseByOne" handleClick = {increaseByOne} />
      <Button buttonText="ResetCounter" handleClick = {resetCounter}/>
      <Button buttonText="DecreaseByOne" handleClick = {decreaseByOne}/>
    </div>
  )
}

const Display = ({counter}) =>(<div>{counter}</div>);

const Button = ({buttonText, handleClick}) => <button onClick={handleClick}>{buttonText}</button>;

export default App

*/
