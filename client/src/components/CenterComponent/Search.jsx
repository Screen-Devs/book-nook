import React from "react";
import ReactDOM from "react-dom";

export default function Search ({ searchedBooks }) {
  console.log('searched books ', searchedBooks);
  return (
    <>
      <div>FILTER STUFF</div>
      <div>
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
    </>
  );
}