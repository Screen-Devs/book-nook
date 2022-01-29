import React from "react";
import ReactDOM from "react-dom";
import ProfileComments from './ProfileComments.jsx';
import Search from './Search.jsx';

export default function CenterComponent({ currentLayout }) {

  // create logic to conditionally render specific center component dependent on what the user is doing
  // need to consider if user visits friend list
  console.log(currentLayout)

  return (
    <div className = "centerComponent" >
      <ProfileComments />
      <Search />
    </div >
  );
}