import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.jsx';
import LeftComponent from './LeftComponent/LeftComponent.jsx';
import RightComponent from './RightComponent/RightComponent.jsx';
import Footer from './Footer.jsx';
import CenterComponent from './CenterComponent/CenterComponent.jsx';
import { searchGoogle, getNYTimesList, getNYTimesCategory } from '../requests';
import sample from './RightComponent/TopRankingBooks/sample.js';
import samplePeople from './RightComponent/FriendsList/samplepeople.js';

export default function Home({ authStatus, authenticate, currentUser }) {
  const profileLayout = {
    left: 'userLists',
    center: 'profileComments',
    right: 'siteData',
    view: 'self', // on click of friend in friend list, set this to 'friend'
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

  // LOOK HERE
  const [appLayout, setAppLayout] = useState(profileLayout);
  const [currentUserView, setCurrentUserView] = useState(null);
  const [queue, setQueue] = useState(bookSamples)
  const [current, setCurrent] = useState(bookSamples) //TODO: Can we make this more descriptive?
  const [completed, setCompleted] = useState(bookSamples) //TODO: Can we make this more descriptive?
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

  // This lifecycle method will handle only the initial render of the home profile page once authenticated.
  useEffect(() => {
    if (!currentUser) return;
    // get user data for currentUser
    axios.get(`/users?username=${currentUser}`)
      .then((response) => {
        console.log(response);
        setAppLayout({
          ...profileLayout,
          payload: response.data
        })
    })

  }, []);

  const handleGetFriendData = (user) => {
    // make get request and give username to the server
    console.log('Profile is currently loading ', user);
    setCurrentUserView(user)
    axios.get(`/users?username=${user}`)
      .then((response) => {
        console.log(response);
        setAppLayout({
            ...profileLayout,
            view: 'friend',
            payload: response.data,
        })
      })
  };

  const handleSearch = (query) => {
    //this route can take a page and count and they can be change, max count is 40
  searchGoogle(query)
  .then((res) => {
    setSearchedBooks(res);
    setAppLayout(searchLayout);
  })
  .catch(err => console.err)
  };

  // temp button
  const goToReviews = () => {
    setAppLayout(bookLayout)
  }

  let navigate;
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
              goToReviews={goToReviews}
              set={setAppLayout}
            />
            <CenterComponent
              currentLayout={appLayout.center}
              // Profile Component
              currentUserView={currentUserView}
              currentView={appLayout.view}
              userData={appLayout.payload}
              // Search Component
              searchedBooks={searchedBooks}
            />
            <RightComponent
              currentLayout={appLayout.right}
              handleGetFriendData={handleGetFriendData}
              userData={appLayout.payload}
            />
          </div>
          <Footer />
          <button onClick={goToReviews}>to reviews</button>
        </div>
      )}
    </div>
  );
}
