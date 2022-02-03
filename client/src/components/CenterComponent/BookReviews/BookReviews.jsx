import { Box, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import BookDetails from './BookDetails/BookDetails.jsx';
import Comments from './Comments.jsx';
import TopReviews from './TopReviews.jsx';


export default function BookReviews({ searchToResult, bookMeta }) {
  console.log('What is getting passed in here? ', bookMeta);
  const [allReviews, setAllReviews] = useState([]);

  return (
    <div>
      <div className='bookDetailsTopComponent'>
        <BookDetails searchToResult={searchToResult} />
      </div>
      <div className='writeReviewOrComment'>Write a review or comment</div>
      <div
        className='bookDetailsCenterComponent'
        style={{ paddingBottom: 2, backgroundColor: 'white', marginLeft: 5}}
      >
          <TopReviews
            setAllReviews={setAllReviews}
            allReviews={allReviews}
            style={{ overFlow: 'auto', height: '220px', width: '100%', marginLeft: 5 }}
          />
        <div className='divider' style={{ height: '601px', overflow: 'auto' }}>
          <Comments allReviews={allReviews} />
        </div>
      </div>
    </div>
  );
}
