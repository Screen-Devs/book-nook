import { Card, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Rating } from '@material-ui/lab';

import DropdownReviews from './DropdownReviews.jsx';
import styled from 'styled-components';

const LeftSide = styled.div`

`

const RightSide = styled.div`

`

const Container = styled.div`
  height: 125px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`

//BOOK TITLE
const TopReviews = ({ setAllReviews, allReviews, username, bookId, goToReviews }) => {
  const ratings = allReviews.map((each) => each.rating);

  const average = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  const totalReviews = allReviews.length;

  return (

      <Container>
        <LeftSide>
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
            <p style={{ paddingTop: 5, paddingLeft: 5 }}>{totalReviews} ratings</p>
          </div>
        </LeftSide>
        <RightSide>
          <DropdownReviews bookId={bookId} goToReviews={goToReviews} set={setAllReviews} username={username} style={{ overflow: 'auto' }} />
        </RightSide>
      </Container>

  );
};

export default TopReviews;
