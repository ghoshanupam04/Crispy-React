import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(15)

  //let counter= 15;
  const addValue=function(){
    console.log("Clicked", counter);
    //counter=counter+1
    setcounter(counter+1)
  }

  const decrease=function(){
    console.log("clicked",counter);
    setcounter(counter-1)
  }
  return (
    <>
    <h2>Hello Coders || Anupam Ghosh</h2>
    <h3>Counter Value : {counter} </h3> 
    <button onClick={addValue}>Add Value</button>
    <button onClick={decrease}>Remove Value</button>
    </>
  )
}

export default App
