import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import SearchResult from './SearchResultCard.jsx';
import { Divider } from '@material-ui/core';

export default function Search({
  filterByAuthor,
  filterByGenre,
  filterByPublisher,
  clearFilters,
  searchedBooks,
  goToReviews,
  handleSearchToResults }) {

  const filteredBooks = searchedBooks.filter((book) => {
    if (book.isVisible) {
      return true;
    }
  })

  return (
    <div className='centerComponent'>
      <div className='filterSearchResults animate__animated animate__flipInX'>
        <div>Filter Search</div>
        <div>
          {/* <label htmlFor='author'> By Author </label> */}
          <input
            className="bookSearchFilterText"
            id='author-filter'
            name='author'
            placeHolder="Filter by Author"
            onChange={() => {
              const authorFilter = document.querySelector('#author-filter').value;
              filterByAuthor(authorFilter)
            }}
            type='text'
          />
          {/* <label htmlFor='publisher'> By Publisher </label> */}
          <input
            className="bookSearchFilterText"
            id='publisher-filter'
            name='publisher'
            placeHolder="Filter by Publisher"
            onChange={() => {
              const publisherFilter = document.querySelector('#publisher-filter').value;
              filterByPublisher(publisherFilter)
            }}
            type='text'
          />
          {/* <label htmlFor='genre'> By Genre </label> */}
          <input
            className="bookSearchFilterText"
            id='genre-filter'
            name='genre'
            placeHolder="Filter by Genre"
            onChange={() => {
              const genreFilter = document.querySelector('#genre-filter').value;
              filterByGenre(genreFilter)
            }}
            type='text'
          />
        </div>
        <button onClick={() => { clearFilters() }}> Clear Filters </button>
      </div>
      <div className='searchResults hideScroll animate__animated animate__fadeInUp'>
        {
          (filteredBooks) ?
            filteredBooks.map((book, idx) => {
              return <SearchResult key={idx} book={book} goToReviews={goToReviews} handleSearchToResults={handleSearchToResults} />;
            }) :
            <div>
              <h1> No Books by that name </h1>
            </div>
        }
      </div>
    </div>
  );
}
