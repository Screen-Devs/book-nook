import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileComments from './ProfileComments.jsx';
import Search from './Search.jsx';
import BookReviews from './BookReviews.jsx'
import CommentModule from '../CommentModule.jsx';


export default function CenterComponent({
  currentLayout,
  // Profile Component
  currentUserViewID,
  currentView,
  userData,
  // Search Component
  searchedBooks,
}) {

  // need to consider if user visits friend list
  let component;
  console.log('current Layout ', currentLayout)
  if (currentLayout === 'profileComments' && currentView === 'self') {
    component = <Route path="/" element={<ProfileComments currentUserViewID={currentUserViewID} userData={userData}/>} />;
  } else if (currentLayout === 'profileComments' && currentView === 'friend') {
    component = <Route path={`friend/${currentUserViewID}`} element={<ProfileComments currentUserViewID={currentUserViewID} userData={userData}/>} />;
  } else if (currentLayout === 'search') {
    component = <Search searchedBooks={searchedBooks} />;
  } else if (currentLayout === 'reviews') {
    component = <BookReviews />;
  }

  // If not a friend or profile, just conditionally render
  return (
    <div className = "centerComponent" >
      {currentLayout === 'profileComments' ?
      (<Routes>{component}</Routes>) :
      component}
    </div >
  );
}