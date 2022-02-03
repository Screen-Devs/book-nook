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
    //TODO: Need to implement
  } else if (currentLayout === 'addToLists') {
    component = <SiteData
    currentUserData={currentUserData}
    userData={userData}
    currentUserView={currentUserView}
    handleGetFriendData={handleGetFriendData}/>
  }
<<<<<<< HEAD

=======
>>>>>>> 3b7f6f8ddf79871aec719cb2a712c9a6f43bc9e9
  return (
    <div className = "rightComponent animate__animated animate__fadeInDown" >
      {userData && (component)}
    </div>
  );
}