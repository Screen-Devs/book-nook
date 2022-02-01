import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileComments from './ProfileComments.jsx';
import Search from './Search.jsx';
import BookReviews from './BookReviews/BookReviews.jsx'
import CommentModule from '../CommentModule.jsx';

export default function CenterComponent({
  currentLayout,
  // Profile Component
  currentUserView,
  currentView,
  userData,
  // Search Component
  searchedBooks,
}) {
  let component;
  if (currentLayout === 'search') {
    component = <Search searchedBooks={searchedBooks} />;
  } else if (currentLayout === 'reviews') {
    component = <BookReviews />;
  }

  // If not a friend or profile, just conditionally render
  return (
    <div className = "centerComponent" >
      {currentLayout === 'profileComments' ?
      (<Routes>
        <Route path="/" element={<ProfileComments currentUserView={currentUserView} userData={userData}/>} />
        <Route path={`friend/${currentUserView}`} element={<ProfileComments currentUserView={currentUserView} userData={userData}/>} />;
      </Routes>) :
      component}
    </div >
  );
}
