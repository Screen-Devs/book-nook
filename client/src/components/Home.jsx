import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";

import Header from "./Header.jsx";
import LeftComponent from "./LeftComponent/LeftComponent.jsx";
import CenterComponent from "./CenterComponent.jsx";
import RightComponent from "./RightComponent/RightComponent.jsx";
import Footer from "./Footer.jsx";

export default function Home ({ authStatus, authenticate }) {
  return (
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
      )
}
