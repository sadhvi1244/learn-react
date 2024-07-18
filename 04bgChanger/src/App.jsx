import { useState } from "react";

function App() {
  const [color, setColor] = useState("purple"); //color change ho kare hai variable change ho raha hai aur vo ui mai bhi reflect ho raha hai to hm log useState karege

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none bg-red-300 px-4 py-1 rounded-full"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none bg-blue-400 px-4 py-1 rounded-full"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none bg-yellow-300 px-4 py-1 rounded-full"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none bg-green-400 px-4 py-1 rounded-full"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none bg-indigo-300 px-4 py-1 rounded-full"
            onClick={() => setColor("indigo")}
          >
            Indigo
          </button>
          <button
            className="outline-none bg-pink-300 px-4 py-1 rounded-full"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none bg-teal-300 px-4 py-1 rounded-full"
            onClick={() => setColor("teal")}
          >
            Teal
          </button>
          <button
            className="outline-none bg-orange-300 px-4 py-1 rounded-full"
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none bg-purple-400 px-4 py-1 rounded-full"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none bg-lavender-400 px-4 py-1 rounded-full"
            onClick={() => setColor("lavender")}
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
