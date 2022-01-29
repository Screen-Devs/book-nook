import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Header from "./Header.jsx";
import LeftComponent from "./LeftComponent/LeftComponent.jsx";
import CenterComponent from "./CenterComponent.jsx";
import RightComponent from "./RightComponent/RightComponent.jsx";
import Footer from "./Footer.jsx";

export default function Home () {

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
      <div className = "Home">
      {/* <h2>Home</h2>
        <p>Protect me! >:|</p> */}
        <Header/>
        <div className = "bodyContainer">
          <LeftComponent/>
          <CenterComponent/>
          <RightComponent/>
        </div>
        <Footer/>
      </div>
      <div>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </>
  );
}
