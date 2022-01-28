import React from "react";
import ReactDOM from "react-dom"
import Carousel from 'react-elastic-carousel'
import {NYT} from './Dummy Data/NYTdummyData.js'

export default function RightComponent() {
  return (
    <div className = "rightComponent" >
      <div className="placeHolderContainer">
      <Carousel
      enableAutoPlay autoPlaySpeed={6000}
      itemsToShow={2}
      itemsToScroll={2}
      easing="cubic-bezier(1,.15,.55,1.54)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={700}
      >
        {NYT[0].books.map(book => {
          // console.log("BOOK: ", book)<Carousel itemsToShow={3}>
  return <img src={book.book_image} className="NYTbookImage" key={book.rank} />
})}
</Carousel>
      </div>
      <div className="placeHolderContainer">Place Holder Container</div>
      <div className="placeHolderContainer">Place Holder Container</div>
      <div className="placeHolderContainer">Place Holder Container</div>
      <div className="placeHolderContainer">Place Holder Container</div>
    </div>
  );
}