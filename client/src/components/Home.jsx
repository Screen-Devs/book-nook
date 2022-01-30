import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header.jsx";
import LeftComponent from "./LeftComponent/LeftComponent.jsx";
import RightComponent from "./RightComponent/RightComponent.jsx";
import Footer from "./Footer.jsx";
import CenterComponent from './CenterComponent/CenterComponent.jsx';

export default function Home ({ authStatus, authenticate, currentUser }) {


  const profileLayout = {
    left: 'userLists',
    center: 'profileComments',
    right: 'siteData', //
    payload: '',
  }

  const searchLayout = {
    left: 'userLists',
    center: 'search',
    right: 'siteData',
    payload: '',
  }

  const bookLayout = {
    left: 'bookDetails',
    center: 'reviews',
    right: 'addToLists',
    payload: '',
  }

  const [appLayout, setAppLayout] = useState(profileLayout);

  useEffect(() => {
    if (!currentUser) return;
    handleGetUserData();
  }, [currentUser])

  const handleGetUserData = () => {
    // make get request and give username to the server
    console.log('Current User ', currentUser);
    // set payload from server into profileLayout
  }

  const handleSearch = (query) => {
    // make get request to server and receive API data instead
    console.log(query)
    // set payload from server into searchLayout
    setAppLayout(searchLayout)
  }

  return (
    <div>
      {!authStatus && (<Navigate to="/login" replace={true}/>)}
      {authStatus && (
        <div className = "Home">
          <Header authenticate={authenticate} handleSearch={handleSearch}/>
          <div className = "bodyContainer">
            <LeftComponent currentLayout={appLayout.left}/>
            <CenterComponent currentLayout={appLayout.center}/>
            <RightComponent currentLayout={appLayout.right}/>
          </div>
          <Footer/>
        </div>
      )}
    </div>
  )
}
