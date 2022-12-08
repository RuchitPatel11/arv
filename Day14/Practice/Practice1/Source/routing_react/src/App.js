import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import StdDetails from "./components/StdDetails";
import StdList from "./components/StdList";
import StdFees from "./components/StdFees";
import StdResult from "./components/StdResult";

function App() {
  return (
    <div className="App">
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <a href="#" class="navbar-brand text-white">School</a>
          <Link to="/students">
            <button class="btn btn-outline-success">Student List</button>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="/students">
            <Route path="" element={<StdList />} />
            <Route path=":id" element={<StdDetails />} >
                <Route path="fees" element={<StdFees />}/>
                <Route path="result" element={<StdResult />}/>               
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
