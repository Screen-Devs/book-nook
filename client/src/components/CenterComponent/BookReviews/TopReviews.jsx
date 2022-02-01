import { Card, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Rating } from '@material-ui/lab';

import DropdownReviews from './DropdownReviews.jsx';

const TopReviews = ({ setAllReviews, allReviews }) => {
  const ratings = allReviews.map((each) => each.rating);

  const average = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  const totalReviews = allReviews.length

  return (
    <Grid item xs={30} style={{ width: '100%', paddingTop: 5 }}>
      <Card style={{ height: 125, width: '580px', display: 'flex', justifyContent: 'space-between' }} elevation={6}>
        <div>
          <Typography
            variant='h4'
            component='div'
            gutterBottom
            style={{ margin: 0, padding: '5px 10px 0px' }}
          >
            Book Title
          </Typography>
          <p style={{ paddingLeft: 11, marginBottom: 7 }}>Author</p>
          <div style={{ display: 'flex' }}>
            <Rating
              size='large'
              readOnly
              value={average}
              precision={0.25}
              style={{ paddingBottom: 10, paddingLeft: 5 }}
            />
            <p style={{paddingTop: 5, paddingLeft: 5}}>{totalReviews} ratings</p>
          </div>
        </div>



        <DropdownReviews set={setAllReviews} style={{overflow: 'auto'}}/>
      </Card>
    </Grid>
  );
};

export default TopReviews;
