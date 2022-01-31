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
      <div className="userDetails animate__animated animate__flipInX"><h5>USER DETAILS</h5></div>
      <div className="writeMe animate__animated animate__flipInX"><h5>Write in my book...</h5></div>
      <div className="userBook animate__animated animate__flipInY">
        <CommentModule/>
        <CommentModule/>
        <CommentModule/>
        <CommentModule/>
        <CommentModule/>
        <CommentModule/>
        <CommentModule/>
        <CommentModule/>
        <CommentModule/>
        <CommentModule/>
      </div>
    </div >
  );
}