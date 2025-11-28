import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl font-bold py-4 pl-6">03-The Task Tracker</h1>
      <p className="">Hi there</p>
      <p>Click New to add a new task</p>
    </>
  );
}

export default App;
