import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileComments from './ProfileComments.jsx';
import Search from './Search.jsx';
import BookReviews from './BookReviews.jsx'
import CommentModule from '../CommentModule.jsx';


export default function CenterComponent({
  currentLayout,
  // Profile Component
  currentUserView,
  // Search Component
  searchedBooks,
}) {

  // need to consider if user visits friend list
  let component;
  if (currentLayout === 'profileComments') {
    component = <Route path={currentUserView} element={<ProfileComments currentUserView={currentUserView}/>} />;
  } else if (currentLayout === 'search') {
    component = <Search searchedBooks={searchedBooks}/>;
  } else if (currentLayout === 'reviews') {
    component = <BookReviews />;
  }

  return (
    <div className = "centerComponent" >
      <Routes>
        {component}
      </Routes>
    </div >
  );
}