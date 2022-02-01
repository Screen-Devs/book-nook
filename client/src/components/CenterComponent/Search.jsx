import React from "react";
import ReactDOM from "react-dom";
import 'animate.css';
import SearchResult from './SearchResultCard.jsx';
import { Divider } from '@material-ui/core';

export default function Search ({ searchedBooks }) {
  console.log('these are our searched books ', searchedBooks);
  return (
    <div className="centerComponent">
      <div className="filterSearchResults animate__animated animate__flipInX">
      <div>FILTER STUFF</div>
      </div>
      <div className="searchResults hideScroll animate__animated animate__flipInY">
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
    </div>
    </div>
  );
}


      {/* <div>
        SEARCH LIST
        {searchedBooks.map((book) => {
          return (
            <div key={book.id}>
              <p>{book.volumeInfo.title}</p>
              <p>{book.volumeInfo.authors}</p>
              <p>{book.volumeInfo.description}</p>
              <p>{book.volumeInfo.previewLink}</p>
            </div>
          )
        })}
      </div>
      </div> */}