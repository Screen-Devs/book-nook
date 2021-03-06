import React from "react";
import ReactDOM from "react-dom"
import 'animate.css';
import SiteData from './SiteData.jsx';

export default function RightComponent({
  currentLayout, handleGetFriendData, userData, currentUserData, currentUserView, searchedBooks
  }) {

  let component;
  if (currentLayout === 'siteData') {
    component = <SiteData
    currentUserData={currentUserData}
    handleGetFriendData={handleGetFriendData}
    userData={userData}
    currentUserView={currentUserView}
    userData={userData}/>
  } else if (currentLayout === 'addToLists') {
    component = <SiteData
    currentUserData={currentUserData}
    userData={userData}
    currentUserView={currentUserView}
    handleGetFriendData={handleGetFriendData}/>
  }
  return (
    <div className = "rightComponent animate__animated animate__fadeInDown" >
      {userData && (component)}
    </div>
  );
}