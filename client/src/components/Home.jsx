import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header.jsx";
import LeftComponent from "./LeftComponent/LeftComponent.jsx";
import RightComponent from "./RightComponent/RightComponent.jsx";
import Footer from "./Footer.jsx";
import CenterComponent from './CenterComponent/CenterComponent.jsx';

import sample from "./RightComponent/TopRankingBooks/sample.js";

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
  let bookSamples = sample.results.books

  const [appLayout, setAppLayout] = useState(profileLayout);
  const [lists, setLists] = useState({
    queue: bookSamples,
    current: bookSamples,
    completed: bookSamples,
    bookClub: []
  })


  useEffect(() => {
    if (!currentUser) return;
    handleGetUserData(currentUser);
  }, [currentUser])

  const handleGetUserData = (user) => {
    // make get request and give username to the server
    console.log('Profile is currently loading ', user);
    // set payload from server into profileLayout
  }

  const handleSearch = (query) => {
    //this route can take a page and count and they can be change, max count is 40
    const count = 10;
    const page = 1;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${count}&nextPageToken=${page}`)
    .then((res) => {
      console.log(res.data)
    })
    .catch(err => console.error(err))
    setAppLayout(searchLayout) // move this inside the promise
  }

  return (
    <div>
      {!authStatus && (<Navigate to="/login" replace={true}/>)}
      {authStatus && (
        <div className = "Home">
          <Header
            authenticate={authenticate}
            handleSearch={handleSearch}/>
          <div className = "bodyContainer">
            <LeftComponent
              currentLayout={appLayout.left}
              lists={lists}/>
            <CenterComponent
              currentLayout={appLayout.center}/>
            <RightComponent
              currentLayout={appLayout.right}
              handleGetUserData={handleGetUserData}/>
          </div>
          <Footer/>
        </div>
      )}
    </div>
  )
}
