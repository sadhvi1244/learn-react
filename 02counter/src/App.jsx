import { useState } from "react"; //hooks ko use krne ke liye ye krna hoga
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); //setCounter name could me anything

  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter); //or we can simply do this, it work same as it is
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
    // setCounter(counter + 1)
    // console.log("Clicked", counter);
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
    // setCounter(counter - 1)
    //console.log("Clicked", counter); //dont need to write
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}> Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}> Remove value {counter}</button>
    </>
  );
}

export default App;
