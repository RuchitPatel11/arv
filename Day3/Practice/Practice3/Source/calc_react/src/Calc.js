import React, { useState } from "react";

const Calc = (props) => {
  let [result, setResult] = useState(0);
  const handleComputation = (e) => {
    const num1 = props.num1,
      num2 = props.num2;
    switch (props.opr) {
      case "+":
        setResult(parseInt(num1) + parseInt(num2));
        break;
      case "-":
        setResult(parseInt(num1) - parseInt(num2));
        break;
      case "*":
        setResult(parseInt(num1) * parseInt(num2));
        break;
      case "/":
        setResult(parseInt(num1) / parseInt(num2));
        break;
      default:
        setResult("Invalid");
        break;
    }
  };
  return (
    <div>
      <button onClick={handleComputation}>Calculate</button>
      <p class="result">Result is {result}</p>
    </div>
  );
};

export default Calc;
