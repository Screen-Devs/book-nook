import { Box, Container, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import Comments from './Comments.jsx';
import TopReviews from './TopReviews.jsx';

const paperStyle = {
  width: 878,
  height: 1200,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  overflowY: "scroll"
}

export default function BookReviews() {
  const [allReviews, setAllReviews] = useState([])

  return (
      <Container className='centerComponentReviews'>
        <Paper style={paperStyle} elevation={24}>
          <Box style={{ width: '100%', paddingBottom: 2 }}>
            <Grid container spacing={1}>
              <TopReviews setAllReviews={setAllReviews} allReviews={allReviews} />
              <Comments allReviews={allReviews} />
            </Grid>
          </Box>
        </Paper>
      </Container>
  );
}
