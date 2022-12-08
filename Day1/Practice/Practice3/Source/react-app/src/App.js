import "./App.css";
import { useState } from "react";
import Hello from "./component/hello";

function App() {
  const [name, setName] = useState("");
  const handleNameState = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Hello name={name} />
      <input type="text" onChange={handleNameState} />
    </div>
  );
}

export default App;
