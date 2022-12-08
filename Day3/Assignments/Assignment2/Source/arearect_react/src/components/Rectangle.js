import { useState } from "react";

const Rectangle = () => {
  const [rectangle, setRectangle] = useState({ length: 0, breadth: 0 ,area:0 });
  function ComputeArea() {
     
    setRectangle({ ...rectangle, area: rectangle.length * rectangle.breadth })
    
  }

  return (
    <>
    <label htmlFor="length">Enter Length: </label>
      <input
        type="number"
        name="length"
        id="length"
        
        placeholder="Unit:(cm)"
        onChange={(e) => {
          setRectangle({ ...rectangle, length: parseInt(e.target.value) });
        }}
      />

      <label htmlFor="breadth">Enter Breadth: </label>
      <input
        type="number"
        name="breadth"
        id="breadth"
   
        placeholder="Unit:(cm)"
        onChange={(e) => {
          setRectangle({ ...rectangle, breadth: parseInt(e.target.value) });
        }}
      />
      <button
              
        onClick={ComputeArea}
      >Calculate Area</button>
      {rectangle.area}
    </>
  );
};

export default Rectangle;
