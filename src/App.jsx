import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShowData from "./components/FakeData/ShowData";
import FakeData from "./components/FakeData/FakeData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FakeData></FakeData>
    </div>
  );
}

export default App;
