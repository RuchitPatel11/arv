import "./App.css";
import { useState } from "react";
import Greater from "./Greater";

function App() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  return (
    <div className="App">
      <h1>Find The Greater</h1>
      <div className="child">
        <div>
          <label for="num1">Enter Num1: </label>
          <input
            type="number"
            name="num1"
            id="num1"
            onChange={(e) => setNum1(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label for="num2">Enter Num2: </label>
          <input
            type="number"
            name="num2"
            id="num2"
            onChange={(e) => setNum2(parseInt(e.target.value))}
          />
        </div>

        <Greater num1={num1} num2={num2} />
      </div>
    </div>
  );
}

export default App;
