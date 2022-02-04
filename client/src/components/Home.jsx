import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.jsx';
import LeftComponent from './LeftComponent/LeftComponent.jsx';
import RightComponent from './RightComponent/RightComponent.jsx';
import Footer from './Footer.jsx';
import CenterComponent from './CenterComponent/CenterComponent.jsx';
import { getUser, searchGoogle, putUserBook, getBookMeta } from '../requests';

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
    right: '', // no right component will render on search
    payload: '',
  };

  const bookLayout = {
    // left: 'bookDetails', // Demo -> keep as userLists to move fromt books
    left: 'userLists',
    center: 'reviews',
    // right: 'addToLists',  // Demo -> keep as siteData
    right: 'siteData',
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
  const [searchToResult, setSearchToResult] = useState({})
  const [bookMeta, setBookMeta] = useState([])
  const [currentFriends, setUserFriends] = useState([]);

  const removeFromQueue = (id, data) => {
    const updateParameters = {
      username: currentUser,
      gBookId: data.gBookId,
      title: data.title,
      authors: data.authors,
      list: 'queued',
      status: false,
    }
    const newList = queue.filter((item) => item.gBookId !== id);
    putUserBook(updateParameters)
      .then(() => {})
    setQueue(newList);
  };

  const removeFromCurrent = (id, data) => {
    const updateParameters = {
      username: currentUser,
      gBookId: data.gBookId,
      title: data.title,
      authors: data.authors,
      list: 'current',
      status: false,
    }
    const newList = current.filter((item) => item.gBookId !== id);
    putUserBook(updateParameters)
      .then(() => {})
    setCurrent(newList);
  };

  const removeFromCompleted = (id, data) => {
    const updateParameters = {
      username: currentUser,
      gBookId: data.gBookId,
      title: data.title,
      authors: data.authors,
      list: 'past',
      status: false,
    }
    const newList = completed.filter((item) => item.gBookId !== id);
    putUserBook(updateParameters)
      .then(() => {})
    setCompleted(newList);
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
    const newList = bookClub.filter((item) => item.gBookId !== id);
    putUserBook(updateParameters)
      .then(() => {})
    setBookClub(newList);
  };

  const queueToCurrent = (id, data) => {
    const updateParameters = {
      username: currentUser,
      gBookId: data.gBookId,
      title: data.title,
      authors: data.authors,
      list: 'current',
      status: true,
    }
    const itemToMove = queue.filter((item) => item.gBookId === id);
    const queueWithItemRemoved = queue.filter((item) => item.gBookId !== id);
    putUserBook(updateParameters)
      .then((response) => {
        removeFromQueue(id, data);
      })
    const newList = current.concat(itemToMove);
    setQueue(queueWithItemRemoved);
    setCurrent(newList);
  };

  const currentToCompleted = (id, data) => {
    const updateParameters = {
      username: currentUser,
      gBookId: data.gBookId,
      title: data.title,
      authors: data.authors,
      list: 'past',
      status: true,
    }
    const itemToMove = current.filter((item) => item.gBookId === id);
    const currentWithItemRemoved = current.filter((item) => item.gBookId !== id);

    putUserBook(updateParameters)
      .then((response) => {
        removeFromCurrent(id, data);
      })
    const newList = completed.concat(itemToMove);
    setCurrent(currentWithItemRemoved);
    setCompleted(newList);
  };

  const completedToBookClub = (id, data) => {
    const updateParameters = {
      username: currentUser,
      gBookId: data.gBookId,
      title: data.title,
      authors: data.authors,
      list: 'clubbed',
      status: true,
    }
    const itemToMove = completed.filter((item) => item.gBookId === id);
    const completedWithItemRemoved = completed.filter((item) => item.gBookId !== id);

    putUserBook(updateParameters)
      .then((response) => {
        removeFromCompleted(id, data);
      })
    const newList = bookClub.concat(itemToMove);
    setCompleted(completedWithItemRemoved);
    setBookClub(newList);
  };


  // This lifecycle method will handle only the initial render of the home profile page once authenticated.
  useEffect(() => {
    if (!currentUser) return;
    // get user data for currentUser
    getUser(currentUser)
      .then((response) => {
        setUserFriends(response[0].friends)
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

  // This function will handle searching for a list of books to render on the search list
  const handleSearch = (query) => {
    //this route can take a page and count and they can be change, max count is 40
    searchGoogle(query, 40)
      .then((res) => {
        const mappedVisible = res.map((book) => {
          const { authors, categories, publisher } = book.volumeInfo;
          if (authors && categories && publisher) {
            book.isVisible = true;
            return book;
          }
        })

        const validSearchResults = mappedVisible.filter(book => {
          if (book) {
            return true;
          }
        });

        setSearchedBooks(validSearchResults);
        setAppLayout({
          ...searchLayout,
          payload: appLayout.payload,
        });
      })
      .catch(err => console.err)
  };

  // This function will handle searching for a specific book to get book details to render
  // on the book layout
  const handleSingleBookSearch = (gBookId, title) => {
    const query = `${gBookId}+intitle:${title}`
    searchGoogle(query)
      .then((res) => {
        handleSearchToResults(res[0]);
      })

  }

  const handleSearchToResults = (book) => {
    setSearchToResult(book)
  }

  const goToReviews = (gBookId, title) => {
    getBookMeta(gBookId, title)
      .then((response) => {
        setAppLayout({
          ...bookLayout,
          payload: appLayout.payload,
        })
        setBookMeta(response.data[0].reviews);
      })
  }

  const handleGetFriendDatad = (user) => {
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

  console.log('cur', currentUserView)

  let navigate;
  return (
    <div>
      {!authStatus && <Navigate to='/login' replace={true} />}
      {authStatus && (
        <div className = "Home">
          <Header
            authenticate={authenticate}
            handleSearch={handleSearch}
            currentUserData={currentUser}
            />
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
              currentUserData={currentUser}
              handleSingleBookSearch={handleSingleBookSearch}
            />
            <CenterComponent
              currentLayout={appLayout.center}
              currentUserView={currentUserView}
              currentView={appLayout.view}
              currentFriends={currentFriends}
              setUserFriends={setUserFriends}
              userData={appLayout.payload}
              searchedBooks={searchedBooks}
              setSearchedBooks={setSearchedBooks}
              currentUserData={currentUser}
              goToReviews={goToReviews}
              handleSearchToResults={handleSearchToResults}
              searchToResult={searchToResult}
              bookMeta={bookMeta}
              queue={queue}
              setQueue={setQueue}
              handleGetFriendData={handleGetFriendData}
            />
            <RightComponent
              currentLayout={appLayout.right}
              currentUserView={currentUserView}
              handleGetFriendData={handleGetFriendData}
              userData={appLayout.payload}
              currentUserData={currentUser}
              searchedBooks={searchedBooks}
            />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
