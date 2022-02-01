import React from "react";
import ReactDOM from "react-dom";
import 'animate.css';
import CommentModule from '../CommentModule.jsx';

export default function ProfileComments ({ userData }) {
  console.log('Current User Data ', userData[0]);
  console.log(userData[0])
  return (
    <>
      <div className = "centerComponent" >
      <div className="userDetails animate__animated animate__flipInX"><h5>User: {userData[0].username}</h5></div>
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
    </>
  );
}
