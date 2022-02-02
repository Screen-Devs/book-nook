import React from "react";
import ReactDOM from "react-dom"
import 'animate.css';
import SiteData from './SiteData.jsx';

export default function RightComponent({
  currentLayout, handleGetFriendData, userData, currentUserData
  }) {

  let component;
  if (currentLayout === 'siteData') {
    component = <SiteData
    currentUserData={currentUserData}
    handleGetFriendData={handleGetFriendData}
    userData={userData}/>
  } else if (currentLayout === 'addToLists') {
    //TODO: Need to implement
    component = <SiteData
    currentUserData={currentUserData}
    userData={userData}
    handleGetFriendData={handleGetFriendData}/>
    // return null
  }

  return (
    <div className = "rightComponent animate__animated animate__fadeInDown" >
      {userData && (component)}
    </div>
  );
}