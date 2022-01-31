import React from "react";
import ReactDOM from "react-dom"
import 'animate.css';
import QueueList from "./BooksQueue/QueueList.jsx";

export default function LeftComponent({lists}) {
  return (
    <div className = "leftComponent animate__animated animate__fadeInDown">
      <div className="placeHolderContainerLeft animate__animated animate__fadeInLeft">Place Holder Container</div>
      <div className="placeHolderContainerLeft animate__animated animate__fadeInLeft">Place Holder Container</div>

      <QueueList lists={lists} className="placeHolderContainerLeft animate__animated animate__fadeInLeft"/>

      <div className="placeHolderContainerLeft animate__animated animate__fadeInLeft">Place Holder Container</div>
      <div className="placeHolderContainerLeft animate__animated animate__fadeInLeft">Place Holder Container</div>
    </div>
  );
}
