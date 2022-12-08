import React from "react";
import "./App.css";

const Greater = (props) => {
  const num1 = props.num1,
    num2 = props.num2;
  return (
    <div>
      {num1 > num2 ? (
        <h1>{num1} is Greater </h1>
      ) : (
        <>
          {num2 > num1 ? <h1>{num2} is Greater </h1> : <h1>Both are Equal</h1>}
        </>
      )}
    </div>
  );
};

export default Greater;
