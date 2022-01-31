import React from "react";
import ReactDOM from "react-dom";
import ProfileComments from './ProfileComments.jsx';
import Search from './Search.jsx';
import BookReviews from './BookReviews.jsx'
import CommentModule from '../CommentModule.jsx';


export default function CenterComponent({ currentLayout }) {

  // need to consider if user visits friend list
  let component;
  if (currentLayout === 'profileComments') {
    component = <ProfileComments />;
  } else if (currentLayout === 'search') {
    component = <Search />;
  } else if (currentLayout === 'reviews') {
    component = <BookReviews />;
  }

  return (
    <div className = "centerComponent" >
      {component}
    </div >
  );
}