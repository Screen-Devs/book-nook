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
  const [lists, setLists] = useState({
    queue: bookSamples,
    current: bookSamples,
    completed: bookSamples,
    bookClub: [],
  });
  const [queue, setQueue] = useState(bookSamples)
  const [current, setCurrent] = useState(bookSamples)
  const [completed, setCompleted] = useState(bookSamples)
  const [bookClub, setBookClub] = useState(bookSamples)


  // TODO : Change to a books unique id
  const removeFromQueue = (rank) => {
    const newList = lists.queue.filter((item) => item.rank !== rank);
    setLists({ ...lists, queue: newList });
  };

  const removeFromCurrent = (rank) => {
    const newList = lists.current.filter((item) => item.rank !== rank);
    setLists({ ...lists, current: newList });
  };

  const removeFromCompleted = (rank) => {
    const newList = lists.completed.filter((item) => item.rank !== rank);
    setLists({ ...lists, completed: newList });
  };

  const removeFromBookClub = (rank) => {
    const newList = lists.bookClub.filter((item) => item.rank !== rank);
    setLists({ ...lists, bookClub: newList });
  };

  const queueToCurrent = (rank) => {
    const itemToMove = lists.queue.filter((item) => item.rank === rank);
    removeFromQueue(rank);
    let newList = lists.current.concat(itemToMove);
    setLists({ ...lists, current: newList });
  };

  const currentToCompleted = (rank) => {
    const itemToMove = lists.current.filter((item) => item.rank === rank);
    removeFromCurrent(rank);
    let newList = lists.completed.concat(itemToMove);
    setLists({ ...lists, completed: newList });
  };

  const completedToBookClub = (rank) => {
    removeFromCompleted(rank);
    const itemToMove = lists.completed.filter((item) => item.rank === rank);
    let newList = lists.bookClub.concat(itemToMove);
    setLists({ ...lists, bookClub: newList });
  };

  useEffect(() => {
    if (!currentUser) return;
    handleGetUserData();
  }, [currentUser]);

  const handleGetUserData = () => {
    // make get request and give username to the server
    console.log('Current User ', currentUser);
    // set payload from server into profileLayout
  };

  const handleSearch = (query) => {
    //this route can take a page and count and they can be change, max count is 40
    const count = 10;
    const page = 1;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${count}&nextPageToken=${page}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
    setAppLayout(searchLayout);
  };

  return (
    <div>
      {!authStatus && <Navigate to='/login' replace={true} />}
      {authStatus && (
        <div className='Home'>
          <Header authenticate={authenticate} handleSearch={handleSearch} />
          <div className='bodyContainer'>
            <LeftComponent
              currentLayout={appLayout.left}
              lists={lists}
              removeFromQueue={removeFromQueue}
              removeFromCurrent={removeFromCurrent}
              removeFromCompleted={removeFromCompleted}
              removeFromBookClub={removeFromBookClub}
              queueToCurrent={queueToCurrent}
              currentToCompleted={currentToCompleted}
              completedToBookClub={completedToBookClub}
            />
            <CenterComponent currentLayout={appLayout.center} />
            <RightComponent currentLayout={appLayout.right} />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
