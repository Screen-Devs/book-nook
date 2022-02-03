import { Box, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import BookDetails from './BookDetails/BookDetails.jsx';
import Comments from './Comments.jsx';
import TopReviews from './TopReviews.jsx';


export default function BookReviews({ searchToResult, bookMeta, username, goToReviews }) {
  console.log('current user logged in ', username);
  console.log('Search result ', searchToResult);
  console.log('Book Meta Data being passed in ', bookMeta);
  // const [allReviews, setAllReviews] = useState([]);

  return (
    <div>
      <div className='bookDetailsTopComponent'>
        <BookDetails searchToResult={searchToResult} />
      </div>
      <div
        className='bookDetailsCenterComponent'
      >
          <TopReviews
            // setAllReviews={setAllReviews}
            allReviews={bookMeta}
            username={username}
            goToReviews={goToReviews}
            bookId={searchToResult.id}
            style={{ height: '220px', width: '100%', marginLeft: 5 }}
          />
        <div className='reviewsScrollBar' style={{ width: '95%', margin: '5px 5px 15px 5px', height: '93%', borderRadius: '20px', overflow: 'auto', alignSelf: 'center', paddingTop: '10px', paddingBottom: '10px',}}>
          <Comments allReviews={bookMeta} />
        </div>
      </div>
    </div>
  );
}
