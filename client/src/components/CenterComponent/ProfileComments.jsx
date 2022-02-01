import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import 'animate.css';
import CommentModule from '../CommentModule.jsx';

export default function ProfileComments ({ userData }) {
  const [canvas, setCanvasList] = useState([]);

  useEffect(() => {
    setCanvasList(userData[0].canvas);
  }, userData)

  //TODO: Need to implement a way to add a comment

  return (
    <>
      <div className = "centerComponent" >
      <div className="userDetails animate__animated animate__flipInX"><h5>User: {userData[0].username}</h5></div>
      <div className="writeMe animate__animated animate__flipInX"><h5>Write in my book...</h5></div>
      <div className="userBook animate__animated animate__flipInY">
        {canvas.length === 0 ? <CommentModule body="No comments :(" /> :
        canvas.map((comment) => {
          console.log(comment);
          return <CommentModule username={comment.username} body={comment.comment}/>
        })}
      </div>
    </div >
    </>
  );
}
