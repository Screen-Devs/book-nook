import { Box, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import BookDetails from './BookDetails/BookDetails.jsx';
import Comments from './Comments.jsx';
import TopReviews from './TopReviews.jsx';
import 'animate.css';


export default function BookReviews({ searchToResult, bookMeta }) {
  console.log('What is getting passed in here? ', bookMeta);
  const [allReviews, setAllReviews] = useState([]);

  return (
    <div>
      <div className='bookDetailsTopComponent animate__animated animate__fadeInDown'>
        <BookDetails searchToResult={searchToResult} />
      </div>
      <div
        className='bookDetailsCenterComponent animate__animated animate__fadeInUp'
      >
          <TopReviews
            setAllReviews={setAllReviews}
            allReviews={allReviews}
            style={{ height: '220px', width: '100%', marginLeft: 5 }}
          />
        <div className='reviewsScrollBar' style={{ width: '95%', margin: '5px 5px 15px 5px', height: '93%', borderRadius: '20px', overflow: 'auto', alignSelf: 'center', paddingTop: '10px', paddingBottom: '10px',}}>
          <Comments allReviews={allReviews} />
        </div>
      </div>
    </div>
  );
}
