import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [inc, setInc] = useState(0)
  
  function Increment() {

    setInc(inc + 1)
  }
  function Decrement() {
    setInc(inc - 1)
  }
  return (
    <div id="main">
      <button id='increment' onClick={Increment} >Increment</button>
      {
        (inc % 15 === 0 && (<div id="counter" className='fizzbuzz' >{inc}</div>)) ||
    (inc % 5 === 0 && (<div id="counter" className='buzz'>{inc}</div>)) ||
    (inc % 3 === 0 && (<div id="counter" className='fizz'>{inc}</div>)) ||
    (inc % 3 !==  0 && inc % 5 !== 0 && inc % 15 !== 0 &&(<div id="counter" className='normal'>{inc}</div>))
   }
      <button id='decrement' onClick={Decrement}>Decrement</button>
    </div>
  )
}




export default App;
