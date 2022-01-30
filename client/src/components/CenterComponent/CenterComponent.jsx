import React from "react";
import ReactDOM from "react-dom";
import 'animate.css';
import CommentModule from '../CommentModule.jsx';

export default function CenterComponent() {
  return (
    <div className = "centerComponent" >
      <div className="userDetails animate__animated animate__flipInX"><h5>USER DETAILS</h5></div>
        {/* <div className="writeMe">
        <h4 className="writeInBook">Write In My Book...</h4>
        </div> */}
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