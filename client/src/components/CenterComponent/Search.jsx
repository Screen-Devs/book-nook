import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import SearchResult from './SearchResultCard.jsx';
import { Divider } from '@material-ui/core';

export default function Search({ searchedBooks, goToReviews, handleSearchToResults }) {

  return (
    <div className='centerComponent'>
      <div className='filterSearchResults animate__animated animate__flipInX'>
        <div>FILTER STUFF</div>
      </div>
      <div className='searchResults hideScroll animate__animated animate__flipInY'>
        {searchedBooks
          ? searchedBooks.map((book) => {
              return <SearchResult book={book} goToReviews={goToReviews} handleSearchToResults={handleSearchToResults}/>;
            })
          : null}
      </div>
    </div>
  );
}
