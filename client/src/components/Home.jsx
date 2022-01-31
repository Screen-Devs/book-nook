import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.jsx';
import LeftComponent from './LeftComponent/LeftComponent.jsx';
import RightComponent from './RightComponent/RightComponent.jsx';
import Footer from './Footer.jsx';
import CenterComponent from './CenterComponent/CenterComponent.jsx';

import sample from './RightComponent/TopRankingBooks/sample.js';

export default function Home({ authStatus, authenticate, currentUser }) {
  const profileLayout = {
    left: 'userLists',
    center: 'profileComments',
    right: 'siteData', //
    payload: '',
  };

  const searchLayout = {
    left: 'userLists',
    center: 'search',
    right: 'siteData',
    payload: '',
  };

  const bookLayout = {
    left: 'bookDetails',
    center: 'reviews',
    right: 'addToLists',
    payload: '',
  };
  let bookSamples = sample.results.books;

  const [appLayout, setAppLayout] = useState(profileLayout);
  const [queue, setQueue] = useState(bookSamples)
  const [current, setCurrent] = useState(bookSamples)
  const [completed, setCompleted] = useState(bookSamples)
  const [bookClub, setBookClub] = useState([])
  const [searchedBooks, setSearchedBooks] = useState([])


  // TODO : Change to a books unique id
  const removeFromQueue = (rank) => {
    const newList = queue.filter((item) => item.rank !== rank);
    setQueue(newList)
  };

  const removeFromCurrent = (rank) => {
    const newList = current.filter((item) => item.rank !== rank);
    setCurrent(newList)
  };

  const removeFromCompleted = (rank) => {
    const newList = completed.filter((item) => item.rank !== rank);
    setCompleted(newList)
  };

  const removeFromBookClub = (rank) => {
    const newList = bookClub.filter((item) => item.rank !== rank);
    setBookClub(newList)
  };

  const queueToCurrent = (rank) => {
    const itemToMove = queue.filter((item) => item.rank === rank);
    removeFromQueue(rank);
    let newList = current.concat(itemToMove);
    setCurrent(newList)
  };

  const currentToCompleted = (rank) => {
    const itemToMove = current.filter((item) => item.rank === rank);
    removeFromCurrent(rank);
    let newList = completed.concat(itemToMove);
    setCompleted(newList)
  };

  const completedToBookClub = (rank) => {
    const itemToMove = completed.filter((item) => item.rank === rank);
    removeFromCompleted(rank);
    let newList = bookClub.concat(itemToMove);
    setBookClub(newList)
  };

  useEffect(() => {
    if (!currentUser) return;
    handleGetUserData(currentUser);
  }, [currentUser]);

  const handleGetUserData = (user) => {
    // make get request and give username to the server
    console.log('Profile is currently loading ', user);
    // set payload from server into profileLayout
  };

  const handleSearch = (query) => {
    //this route can take a page and count and they can be change, max count is 40
    const count = 10;
    const page = 1;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${count}&nextPageToken=${page}`)
    .then((res) => {
      setSearchedBooks(res.data.items);
      setAppLayout(searchLayout)
    })
    .catch(err => console.error(err))
  };

  return (
    <div>
      {!authStatus && <Navigate to='/login' replace={true} />}
      {authStatus && (
        <div className = "Home">
          <Header
            authenticate={authenticate}
            handleSearch={handleSearch}/>
          <div className = "bodyContainer">
            <LeftComponent
              currentLayout={appLayout.left}
              removeFromQueue={removeFromQueue}
              removeFromCurrent={removeFromCurrent}
              removeFromCompleted={removeFromCompleted}
              removeFromBookClub={removeFromBookClub}
              queueToCurrent={queueToCurrent}
              currentToCompleted={currentToCompleted}
              completedToBookClub={completedToBookClub}
              queue={queue}
              current={current}
              completed={completed}
              bookClub={bookClub}
            />
            <CenterComponent
              currentLayout={appLayout.center}
              searchedBooks={searchedBooks}
            />
            <RightComponent
              currentLayout={appLayout.right}
              handleGetUserData={handleGetUserData}/>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
