import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Rectangle from "./components/Rectangle";

function App() {
  return (
    <>
      <div className="container mt-5">
        <Login />
      </div>
      <div className="container mt-5">
        <Signup />
      </div>
      <div className="container mt-5">
        <Rectangle />
      </div>
    </>
  );
}

export default App;
