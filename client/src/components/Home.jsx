import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";

import Header from "./Header.jsx";
import LeftComponent from "./LeftComponent/LeftComponent.jsx";
import CenterComponent from "./CenterComponent/CenterComponent.jsx";
import RightComponent from "./RightComponent/RightComponent.jsx";
import Footer from "./Footer.jsx";

export default function Home ({ authStatus, authenticate, currentUser }) {


  useEffect(() => {
    if (!currentUser) return;
    handleGetUserData();
  }, [currentUser])

  const handleGetUserData = () => {
    // make get request and give username to the server
    console.log('Current User ', currentUser);
  }

  return (
    <>
      {!authStatus && (<Navigate to="/login" replace={true}/>)}
      {authStatus && (
        <div className = "Home">
          <Header authenticate={authenticate}/>
          <div className = "bodyContainer">
            <LeftComponent/>
            <CenterComponent/>
            <RightComponent/>
          </div>
          <Footer/>
        </div>
      )}
    </>
  )
}
