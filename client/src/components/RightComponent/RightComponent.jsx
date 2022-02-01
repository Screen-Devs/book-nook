import React from "react";
import ReactDOM from "react-dom"
import 'animate.css';
import SiteData from './SiteData.jsx';
import AddToLists from './AddtoLists.jsx'

export default function RightComponent({ currentLayout, handleGetFriendData, userData }) {

  let component;
  if (currentLayout === 'siteData') {
    component = <SiteData handleGetFriendData={handleGetFriendData} userData={userData}/>;
  } else if (currentLayout === 'addToLists') {
    //TODO: Need to implement
    // component = <AddToLists />;
    return null
  }

  return (
    <div className = "rightComponent animate__animated animate__fadeInDown" >
      {userData && (component)}
    </div>
  );
}