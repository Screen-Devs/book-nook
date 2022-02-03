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
  currentUserData,
  //To reviews
  goToReviews,
  // From searchToResult
  handleSearchToResults,
  searchToResult,
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

  let component;
  if (currentLayout === 'search') {
    component = <Search searchedBooks={searchedBooks} currentUserData={currentUserData} goToReviews={goToReviews} handleSearchToResults={handleSearchToResults} />;
  } else if (currentLayout === 'reviews' && Object.keys(searchToResult).length >= 1) {
    // TODO: include userData for books meta data in payload
    component = <BookReviews currentUserData={currentUserData} searchToResult={searchToResult} bookMeta={userData} />;
  }

  // If not a friend or profile, just conditionally render
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
