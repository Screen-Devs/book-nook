import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.jsx';
import LeftComponent from './LeftComponent/LeftComponent.jsx';
import RightComponent from './RightComponent/RightComponent.jsx';
import Footer from './Footer.jsx';
import CenterComponent from './CenterComponent/CenterComponent.jsx';
import { getUser, searchGoogle } from '../requests';

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

  // LOOK HERE
  const [appLayout, setAppLayout] = useState(profileLayout);
  const [currentUserView, setCurrentUserView] = useState(null);
  const [queue, setQueue] = useState([])
  const [current, setCurrent] = useState([])
  const [completed, setCompleted] = useState([])
  const [bookClub, setBookClub] = useState([])
  const [searchedBooks, setSearchedBooks] = useState([])

  const removeFromQueue = (id) => {
    const newList = queue.filter((item) => item.gBookId !== id);
    // make put request here
    setQueue(newList)
  };

  const removeFromCurrent = (id) => {
    const newList = current.filter((item) => item.gBookId !== id);
    // make put request here
    setCurrent(newList)
  };

  const removeFromCompleted = (id) => {
    const newList = completed.filter((item) => item.gBookId !== id);
    // make put request here
    setCompleted(newList)
  };

  const removeFromBookClub = (id, data) => {
    const updateParameters = {
      username: currentUser,
      gBookId: data.gBookId,
      title: data.title,
      authors: data.authors,
      list: 'clubbed',
      status: false,
    }
    console.log(updateParameters);
    const newList = bookClub.filter((item) => item.gBookId !== id);
    // make put request here
    setBookClub(newList)
  };

  const queueToCurrent = (id) => {
    const itemToMove = queue.filter((item) => item.gBookId === id);
    removeFromQueue(id);
    let newList = current.concat(itemToMove);
    setCurrent(newList)
  };

  const currentToCompleted = (id) => {
    const itemToMove = current.filter((item) => item.gBookId === id);
    removeFromCurrent(id);
    let newList = completed.concat(itemToMove);
    setCompleted(newList)
  };

  const completedToBookClub = (id) => {
    const itemToMove = completed.filter((item) => item.gBookId === id);
    removeFromCompleted(id);
    let newList = bookClub.concat(itemToMove);
    setBookClub(newList)
  };

  // This lifecycle method will handle only the initial render of the home profile page once authenticated.
  useEffect(() => {
    if (!currentUser) return;
    // get user data for currentUser
    getUser(currentUser)
      .then((response) => {
        setAppLayout({
          ...profileLayout,
          payload: response
        })
        handleCreateLists(response[0].userBooks);
      })
  }, []);

  const handleGetFriendData = (user) => {
    // make get request and give username to the server
    setCurrentUserView(user)
    getUser(user)
      .then((response) => {
        setAppLayout({
            ...profileLayout,
            view: 'friend',
            payload: response,
        })
        handleCreateLists(response[0].userBooks);
      })
  };

  const handleCreateLists = (books) => {
    // filtering
    setBookClub(books.filter((book) => {
      return book.clubbed.status === true;
    }));
    setCurrent(books.filter((book) => {
      return book.current.status === true;
    }));
    setQueue(books.filter((book) => {
      return book.queued.status === true;
    }));
    setCompleted(books.filter((book) => {
      return book.past.status === true;
    }))
  }

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
              currentView={appLayout.view}
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
