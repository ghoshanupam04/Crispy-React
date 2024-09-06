import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //let count= 15
  const increase = () => {
    console.log("Hello Coders", count);

    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    console.log("Hello Coders", count);
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h2>Hello Coders || Anupam Ghosh || No: {count} </h2>
      <h3>Start React-JS</h3>
      <button onClick={increase}> Add </button>
      <button onClick={decrease}> Remove </button>
    </>
  );
}

export default App;
