import React from "react";
import ReactDOM from "react-dom"
import 'animate.css';
import SiteData from './SiteData.jsx';

export default function RightComponent({ currentLayout, handleGetFriendData, userData }) {

  let component;
  if (currentLayout === 'siteData') {
    component = <SiteData handleGetFriendData={handleGetFriendData} userData={userData}/>;
  } else if (currentLayout === 'addToLists') {
    //TODO: Need to implement
<<<<<<< HEAD
    component = <AddToLists />;
=======
    component = <SiteData handleGetFriendData={handleGetFriendData}/>;
>>>>>>> main
    // return null
  }

  return (
    <div className = "rightComponent animate__animated animate__fadeInDown" >
      {userData && (component)}
    </div>
  );
}