import React from "react";
import ReactDOM from "react-dom";
import ProfileComments from './ProfileComments.jsx';

export default function CenterComponent() {

  // create logic to conditionally render specific center component dependent on what the user is doing
  // need to consider if user visits friend list

  return (
    <div className = "centerComponent" >
      <ProfileComments />
    </div >
  );
}