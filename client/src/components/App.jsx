import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

// import Dark from "../stylesDark.css";
import Light from "../styles.css";

export default function App() {

  const [authStatus, setAuthStatus] = useState(false);
  // if user is not authenticated, redirect to login
  useEffect(() => {
    axios.get('/authenticate')
      .then((response) => {
        setAuthStatus(response.data.isAuthenticated);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home authStatus={authStatus}/>} />
        <Route path="/login" element={<Login authStatus={authStatus}/>} />
        <Route path="/signup" element={<Signup authStatus={authStatus}/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
