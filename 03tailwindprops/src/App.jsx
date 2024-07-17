import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myobj = {
    username: "Sadhvi",
    age: 18,
  };
  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-blue-600 p-5 text-black rounded-xl m-5">
        Tailwind test
      </h1>
      <Card channel="Chaiaurcodr" someObj={myobj} /> <br />
      <Card channel="heeehee" someArr={myArr} />
    </>
  );
}

export default App;
