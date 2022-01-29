import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";

import Header from "./Header.jsx";
import LeftComponent from "./LeftComponent.jsx";
import CenterComponent from "./CenterComponent.jsx";
import RightComponent from "./RightComponent.jsx";
import Footer from "./Footer.jsx";

export default function Home ({ authStatus }) {
  return (
    <>
      {!authStatus && (<Navigate to="/login" replace={true}/>)}
      {authStatus && (
        <div className = "Home">
          <h2>Home</h2>
            <Header />
            <div className = "bodyContainer">
              <LeftComponent/>
              <CenterComponent/>
              <RightComponent/>
            </div>
            <Footer/>
        </div>
      )}
    </>
  );
}
