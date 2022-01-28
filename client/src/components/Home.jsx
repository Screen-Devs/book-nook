import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

const Home = () => {

  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    axios.get('/authenticate')
      .then((response) => {
        console.log(response);
        //
      })
      .catch((error) => {
        console.error(error);
      })
  })

  return (
    <>
      <h2>Home</h2>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
      <p>Protect me! >:|</p>
    </>
  )
}

export default Home;