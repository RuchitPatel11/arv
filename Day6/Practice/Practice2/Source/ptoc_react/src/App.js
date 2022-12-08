import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";

function App() {
  const [name, setName] = useState("");
  const handleNameState = (e) => {
    setName(e.target.value);
  };

  return (
    <div class="container d-flex flex-column gap-3 align-items-center mt-5">
      <Display name={name} />
      <input type="text" name="name" id="name" class="form-control" placeholder="Enter Name"  onChange={handleNameState} />
    </div>
  );
}

export default App;