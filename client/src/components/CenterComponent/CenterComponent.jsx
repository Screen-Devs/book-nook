import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileComments from "./ProfileComments.jsx";
import Search from "./Search.jsx";
import BookReviews from "./BookReviews/BookReviews.jsx";
import CommentModule from "../CommentModule.jsx";
import { addFriend } from "../../requests"

export default function CenterComponent({
  currentLayout,
  // Profile Component
  currentUserView,
  currentView,
  userData,
  currentFriends,
  setUserFriends,
  // Search Component
  searchedBooks,
  setSearchedBooks,
  currentUserData,
  //To reviews
  goToReviews,
  // From searchToResult
  handleSearchToResults,
  searchToResult,
  bookMeta,
  queue,
  setQueue,
  handleGetFriendData
}) {



  const addNewFriend = () => {
    const friendToAdd = {
      username: currentUserData,
      friend: currentUserView,
      action: 'add',
    }
    const updatedFriendsList = [...currentFriends, currentUserView,];
    addFriend(friendToAdd)
      .then((response) => {
        setUserFriends(updatedFriendsList);
      })
      .catch(err => console.error(err));
  }

  const clearFilters = () => {
    const unfilteredBooks = searchedBooks.map((book) => {
      book.isVisible = true;
      return book;
    })
    setSearchedBooks(unfilteredBooks);
  }

  const filterByAuthor = (term) => {
    if (term.length >= 3) {
      const filteredBooks = searchedBooks.map((book) => {
        //for each book if there are authours
        if (book.volumeInfo.authors) {
          //declare a check if some authhors match our term
          const containsTargetAuthor = book.volumeInfo.authors.some((author) => {
            if (author.toLowerCase().includes(term.toLowerCase()))
              return true;
          })
          //if containers make that book visible
          if (!containsTargetAuthor) {
            book.isVisible = false;
          }
        }
        return book;
      })
      setSearchedBooks(filteredBooks);
    }
  }

  const filterByPublisher = (targetPublisher) => {
    if (targetPublisher.length >= 3) {
      const filteredBooks = searchedBooks.map((book) => {
        if (book.volumeInfo.publisher) {
          const containsTargetPublisher = book.volumeInfo.publisher
          .toLowerCase().includes(targetPublisher.toLowerCase());
          if (!containsTargetPublisher) {
            book.isVisible = false;
          }
        }
        return book;
      })
      setSearchedBooks(filteredBooks);
    }
  }

  const filterByGenre = (targetGenre) => {
    if (targetGenre.length >= 3) {
      const filteredBooks = searchedBooks.map((book) => {
        if (book.volumeInfo.categories) {
          const containsTargetGenre = book.volumeInfo.categories
          .some((genre) => {
            if (genre.toLowerCase().includes(targetGenre.toLowerCase()))
              return true;
          })
          if (!containsTargetGenre) {
            book.isVisible = false;
          }
        }
        return book;
      })
      setSearchedBooks(filteredBooks);
    }
}

let component;
        if (currentLayout === 'search') {
  component = <Search
    filterByAuthor={filterByAuthor}
    filterByPublisher={filterByPublisher}
    filterByGenre={filterByGenre}
    clearFilters={clearFilters}
    searchedBooks={searchedBooks}
    currentUserData={currentUserData}
    goToReviews={goToReviews}
    handleSearchToResults={handleSearchToResults}

  />;
} else if (currentLayout === 'reviews' && Object.keys(searchToResult).length >= 1) {
  // TODO: differentiate between bookMeta and userData
  component = <BookReviews username={currentUserData} searchToResult={searchToResult} goToReviews={goToReviews} bookMeta={bookMeta} queue={queue} setQueue={setQueue} handleGetFriendData={handleGetFriendData}/>;
}
// If not a friend or profile, just conditionally render
console.log('This is user data ', userData);
      console.log('This is userView ', currentUserView)
return (
  <div className="centerComponent">
    {currentLayout === "profileComments" && userData ? (
      <Routes>
        <Route
          path="/"
          element={
            <ProfileComments
              addNewFriend={addNewFriend}
              currentFriends={currentFriends}
              currentUserData={currentUserData}
              setUserFriends={setUserFriends}
              currentUserView={currentUserView}
              userData={userData}
              handleSearchToResults={handleSearchToResults}
              handleGetFriendData={handleGetFriendData}
            />
          }
        />
        <Route
          path={`friend/${currentUserView}`}
          element={
            <ProfileComments
              addNewFriend={addNewFriend}
              currentFriends={currentFriends}
              currentUserData={currentUserData}
              setUserFriends={setUserFriends}
              currentUserView={currentUserView}
              userData={userData}
              handleGetFriendData={handleGetFriendData}
            />
          }
        />
      </Routes>
    ) : (
      component
    )}
  </div>
);
}
