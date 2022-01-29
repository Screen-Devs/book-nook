import React from "react";
import ReactDOM from "react-dom"
import Carousel from 'react-elastic-carousel'
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/ButtonGroup';
import {NYT} from './NYTdummyData.js';
import NYTModal from "./NYTModal/NYTModal.jsx";
// import Button from 'react-bootstrap/Button';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/ButtonGroup';
import NYTbestSellers from './NYTbestSellers.jsx';
import HighestRatedBooks from './HighestRatedBooks.jsx';
import LeaderBoard from './LeaderBoard.jsx';
import BNleaderBoard from './BNleaderBoard.jsx';

export default function RightComponent() {
  return (
    <div className = "rightComponent" >
       <div className="placeHolderContainer">
        <h4>Friend Leader Board</h4>
        <LeaderBoard/>
      </div>
      <div className="placeHolderContainer">
      <h4>Book Nook Leader Board</h4>
        <BNleaderBoard/>
      </div>
      <div className="placeHolderContainer">
        <h4>Highest Rated Books</h4>
        <HighestRatedBooks/>
      </div>
      <div className="placeHolderContainer">
        <NYTModal/>
        {/* <div>
    {[DropdownButton].map((DropdownType, idx) => (
      <DropdownType
        as={ButtonGroup}
        key={idx}
        id={`dropdown-button-drop-${idx}`}
        size="sm"
        variant="secondary"
        title="Drop small"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      </DropdownType>
    ))}
  </div> */}



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
  return (
    <div key={book.rank ** book.rank}>
      <a href={book.amazon_product_url} key={book.rank * book.rank}>
  <img src={book.book_image} className="NYTbookImage" key={book.rank} />
  </a>
  </div>
  )
})}
</Carousel>
      </div>
      <div className="placeHolderContainer">Place Holder Container</div>
    </div>
  );
}

  /* <div className="overlay" key={book.rank * book.rank}>
    {book.title}
  </div> */