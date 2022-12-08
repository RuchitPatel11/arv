import Profile from "./components/Profile";
import { useState } from "react";

const App = () => {
  const [Name, setName] = useState("");

  const handleChange = (item) => {
    setName(item);
  };
  return (
    <div>
      <h1>Hello, {Name}</h1>
      <Profile keyupChange={handleChange} />
    </div>
  );
};

export default App;
