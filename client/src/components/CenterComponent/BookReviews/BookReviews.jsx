import { Box, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import BookDetails from './BookDetails/BookDetails.jsx';
import Reviews from './Reviews.jsx';
import TopReviews from './TopReviews.jsx';
import 'animate.css';


export default function BookReviews({ handleGetFriendData, searchToResult, bookMeta, username, goToReviews, queue, setQueue }) {
  console.log('current user logged in ', username);
  console.log('Search result ', searchToResult);

  return (
    <div>
      <div className='bookDetailsTopComponent animate__animated animate__fadeInDown'>
        <BookDetails searchToResult={searchToResult} queue={queue} setQueue={setQueue} username={username}/>
      </div>
      <div
        className='bookDetailsCenterComponent animate__animated animate__fadeInUp'
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
          <Reviews
            allReviews={bookMeta}
            username={username}
            goToReviews={goToReviews}
            bookId={searchToResult.id}
            handleGetFriendData={handleGetFriendData}
          />
        </div>
      </div>
    </div>
  );
}
