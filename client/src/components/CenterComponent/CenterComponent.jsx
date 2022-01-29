import React from "react";
import ReactDOM from "react-dom"

export default function CenterComponent() {
  return (
    <div className = "centerComponent" >
      <div className="userDetails"><h5>USER DETAILS</h5></div>
      <div className="userBook"><h5>Write in my book...</h5>
        <div className="commentContainer">COMMENT Container</div>
        <div className="commentContainer">COMMENT Container</div>
        <div className="commentContainer">COMMENT Container</div>
        <div className="commentContainer">COMMENT Container</div>
        <div className="commentContainer">COMMENT Container</div>
        <div className="commentContainer">COMMENT Container</div>
        <div className="commentContainer">COMMENT Container</div>
        <div className="commentContainer">COMMENT Container</div>
        <div className="commentContainer">COMMENT Container</div>
      </div>
    </div >
  );
}