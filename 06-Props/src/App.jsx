import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Cards'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Anupam Ghosh",
    age:21,
  }

  return (
    <>
     <h2 className='bg-green-700 text-black p-2 rounded-xl mb-4'>Tailwind Test</h2>
     <Cards myname="Anupam" buttontxt="See profile"/ >
     <Cards myname="Anuska"/>
    </>
  )
}

export default App
