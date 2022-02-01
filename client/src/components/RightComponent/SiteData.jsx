import React from "react";
import ReactDOM from "react-dom"
import 'animate.css';
import Carousel from 'react-elastic-carousel'
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/ButtonGroup';
import {NYT} from './NYTdummyData.js';
import NYTModal from "./NYTModal/NYTModal.jsx";
// import NYTbestSellers from './NYTbestSellers.jsx';
import HighestRatedBooks from './TopRankingBooks/HighestRatedBooks.jsx';
import LeaderBoard from './LeaderBoard.jsx';
import BNleaderBoard from './BNleaderBoard.jsx';
import FriendsList from './FriendsList/FriendsList.jsx';

export default function SiteData ({ handleGetFriendData, userData }) {
  return (
    <div className = "rightComponent animate__animated animate__fadeInDown" >
      {/* <div className="friendsListContainer animate__animated animate__fadeInRight"> */}
      <FriendsList handleGetFriendData={handleGetFriendData} userData={userData}/>
      {/* </div> */}


      {/* <div className="placeHolderContainerRight animate__animated animate__fadeInRight">
        <h4>Friend Leader Board</h4>
        <LeaderBoard/>
      </div>
      <div className="placeHolderContainerRight animate__animated animate__fadeInRight">
      <h4>Book Nook Leader Board</h4>
        <BNleaderBoard/>
      </div> */}

      <HighestRatedBooks />

      <div className="placeHolderContainerRight animate__animated animate__fadeInRight">
        <NYTModal/>
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
      <div className="placeHolderContainerRight animate__animated animate__fadeInRight">Place Holder Container</div>
    </div>
  );
}

  /* <div className="overlay" key={book.rank * book.rank}>
    {book.title}
  </div> */