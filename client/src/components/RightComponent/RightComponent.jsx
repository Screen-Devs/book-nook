import React from "react";
import ReactDOM from "react-dom"
import Carousel from 'react-elastic-carousel'
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
        <h4>NYT Best Sellers</h4>
      <NYTbestSellers/>
      </div>
      <div className="placeHolderContainer">Place Holder Container</div>
    </div>
  );
}

  /* <div className="overlay" key={book.rank * book.rank}>
    {book.title}
  </div> */