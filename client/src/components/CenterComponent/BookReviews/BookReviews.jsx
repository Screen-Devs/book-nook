import { Box, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import Comments from './Comments.jsx';
import TopReviews from './TopReviews.jsx';

<<<<<<< HEAD
const paperStyle = {
  width: '100%',
  height: 1200,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  overflowY: "scroll"
}
=======
// const paperStyle = {
//   width: 878,
//   height: 1200,
//   display: 'flex',
//   alignItems: 'center',
//   flexDirection: 'column',
//   position: 'relative',
//   overflowY: "scroll"
// }
>>>>>>> main

export default function BookReviews() {
  const [allReviews, setAllReviews] = useState([])

  return (
      <div >
        <div className="bookDetailsTopComponent">
          BOOK DETAILS
        </div>
        <div className="writeReviewOrComment">
          Write a review or comment
        </div>
        <Paper className="bookDetailsCenterComponent" elevation={24}>
          <Box className="bookDetailsCenterComponent" style={{ width: '100%', paddingBottom: 2, }}>
            <Grid container spacing={1}>
              <TopReviews setAllReviews={setAllReviews} allReviews={allReviews} />
              <Comments allReviews={allReviews} />
            </Grid>
          </Box>
        </Paper>
      </div>
  );
}

