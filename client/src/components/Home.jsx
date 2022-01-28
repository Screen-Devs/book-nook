import React from "react";
import ReactDOM from "react-dom"
import Header from "./header.jsx";
import LeftComponent from "./LeftComponent.jsx";
import CenterComponent from "./CenterComponent.jsx";
import RightComponent from "./RightComponent.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <div className = "Home">
    <Header/>
    <div className = "bodyContainer">
    <LeftComponent/>
    <CenterComponent/>
    <RightComponent/>
    </div>
    <Footer/>
    </div>
  );
}
