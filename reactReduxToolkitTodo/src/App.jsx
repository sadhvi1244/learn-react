import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold "> Your Productivity Hub</h1>
      </div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
