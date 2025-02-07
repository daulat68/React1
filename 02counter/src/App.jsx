import { useState  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  // let counter = 15

  if(counter>0 && counter<20){
    var addValue = () => {
    console.log("value added!", counter);
    // counter += 1;
    // counter += 1;
    // counter += 1;
    setCounter(counter + 1)
  }
  

  var removeValue = () => {
    setCounter(counter-1)
  }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value: {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value: {counter}</button>
    <p>footer: {counter} </p>
    </>
  )
}

export default App
