import React from "react";
import ReactDOM from "react-dom"
import 'animate.css';
import SiteData from './SiteData.jsx';

export default function RightComponent({
  currentLayout, handleGetFriendData, userData, currentUser
  }) {

  let component;
  if (currentLayout === 'siteData') {
    component = <SiteData
    currentUser={currentUser}
    handleGetFriendData={handleGetFriendData}
    userData={userData}/>
  } else if (currentLayout === 'addToLists') {
    //TODO: Need to implement
    component = <SiteData
    currentUser={currentUser}
    handleGetFriendData={handleGetFriendData}/>
    // return null
  }

  return (
    <div className = "rightComponent animate__animated animate__fadeInDown" >
      {userData && (component)}
    </div>
  );
}