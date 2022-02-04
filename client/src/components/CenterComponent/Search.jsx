import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "animate.css";
import Button from "react-bootstrap/Button";
import SearchResult from "./SearchResultCard.jsx";
import { Divider } from "@material-ui/core";

export default function Search({
  filterByAuthor,
  filterByGenre,
  filterByPublisher,
  clearFilters,
  searchedBooks,
  goToReviews,
  handleSearchToResults,
}) {
  const filteredBooks = searchedBooks.filter((book) => {
    if (book.isVisible) {
      return true;
    }
  });

  return (
    <div className="centerComponent">
      <div className="filterSearchResults animate__animated animate__flipInX">
        <div id="filter-container">
          <h3 id="filter-header"> Filter Search </h3>
          <div className="filter-input">
            <div className='filter-input-wrap'>
            <input
              className="bookSearchFilterText"
              id="author-filter"
              name="author"
              placeHolder="  Filter By Author"
              onChange={() => {
                const authorFilter =
                  document.querySelector("#author-filter").value;
                filterByAuthor(authorFilter);
              }}
              type="text"
            />
            </div>
            <div className='filter-input-wrap'>
            <input
              className="bookSearchFilterText"
              id="genre-filter"
              name="genre"
              placeHolder="  Filter By Genre"
              onChange={() => {
                const genreFilter =
                  document.querySelector("#genre-filter").value;
                filterByGenre(genreFilter);
              }}
              type="text"
            />
            </div>
            <div className='filter-input-wrap'>
            <input
              className="bookSearchFilterText"
              id="publisher-filter"
              name="publisher"
              placeHolder="  Filter by Publisher"
              onChange={() => {
                const publisherFilter =
                  document.querySelector("#publisher-filter").value;
                filterByPublisher(publisherFilter);
              }}
              type="text"
            />
            </div>
          </div>
          <Button
          className='sideComponentTitle btn btn-light'
            onClick={() => {
              clearFilters();
            }}
            variant="dark"
            style={{width: '160px', alignSelf: 'center',}}
          >
            Clear Filters
          </Button>
        </div>
      </div>
      <div className="searchResults hideScroll animate__animated animate__fadeInUp">
        {filteredBooks ? (
          filteredBooks.map((book, idx) => {
            return (
              <SearchResult
                key={idx}
                book={book}
                goToReviews={goToReviews}
                handleSearchToResults={handleSearchToResults}
              />
            );
          })
        ) : (
          <div>
            <h1> No Books by that name </h1>
          </div>
        )}
      </div>
    </div>
  );
}
