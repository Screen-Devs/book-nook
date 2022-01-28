import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Check out this bundle.js"
    }
  }
  render(){
    return(
      <div className="App">
        <h1>{this.state.message}</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    );
  }
}

export default App;