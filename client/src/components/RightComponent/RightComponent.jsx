import React from "react";
import ReactDOM from "react-dom"
import 'animate.css';
import SiteData from './SiteData.jsx';

export default function RightComponent({ currentLayout, handleGetFriendData }) {

  let component;
  if (currentLayout === 'siteData') {
    component = <SiteData handleGetFriendData={handleGetFriendData}/>;
  } else if (currentLayout === 'addToLists') {
    //TODO: Need to implement
    component = <AddToLists />;
  }

  return (
    <div className = "rightComponent animate__animated animate__fadeInDown" >
      {component}
    </div>
  );
}