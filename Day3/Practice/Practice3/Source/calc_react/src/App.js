
import './App.css';
import { useState } from 'react';
import Calc from './Calc';

function App() {
  let [num1,setNum1] = useState(0);
  let [num2,setNum2] = useState(0);
  let [opr, setOpr] = useState('');
  return (
    <div className="App">
      <div class="child">
      <div>
        <label for="num1">Enter Num1: </label>
        <input type="number" name="num1" id="num1" onChange={(e)=>setNum1(e.target.value)} />
      </div>
      <div>
        <label for="num2">Enter Num2: </label>
        <input type="number" name="num2" id="num2"  onChange={(e)=>setNum2(e.target.value)}/>
      </div>
      <div>
        <select onChange={(e)=>setOpr(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <Calc num1={num1} num2={num2} opr={opr}/>
      </div>

    </div>
  );
}

export default App;
