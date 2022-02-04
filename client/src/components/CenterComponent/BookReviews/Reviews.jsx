import { Paper, Card, Typography, Divider, Button } from '@material-ui/core';
import React, { useState } from 'react';
import CommentAccordian from './BookDetails/CommentAccordian/CommentAccordian.jsx';
import DropdownComments from './DropdownComments.jsx';
import styled from 'styled-components';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Rating } from '@material-ui/lab';

dayjs.extend(localizedFormat);

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 2px -2px gray;
`;

const UsernamdAndTitle = styled.div`
  padding: 5px 15px 0px;
`;

const Helpful = styled.div`
  padding: 5px 15px 0px;
`;

const Username = styled.div`
  font-size: 13px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
`;

const CommentWrapper = styled.div`
  margin: 7px 0px;
  max-height: '200px';
`;
//  overflow: 'auto';

const Grid = styled.div`
  margin: 7px 0px;
  background-color: red;
  border-radius: 20px;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Reviews = ({ allReviews, username, goToReviews, bookId }) => {
  return (
    <CommentWrapper className='hideScroll'>
      {allReviews.map((review, index) => {
        return (
          <Grid>
            <Card className=' hideScroll' elevation={6}>
              <TopWrapper>
                <UsernamdAndTitle>
                  <Username>Written by {review.username}</Username>
                  <Rating
                    size='small'
                    readOnly
                    value={review.rating}
                    precision={0.25}
                    style={{ paddingBottom: 5, paddingLeft: 2 }}
                  />
                </UsernamdAndTitle>
                <Time>{dayjs(review.review_date).format('LL')}</Time>
                <DropdownComments
                  reviewId={review._id}
                  username={username}
                  goToReviews={goToReviews}
                  bookId={bookId}
                />
              </TopWrapper>
              <div className='aReview hideScroll' style={{paddingTop: 10}}>{review.review_body}</div>
              <Helpful>Helpful ({review.helpful_review})</Helpful>
              <CommentAccordian comments={review.comments} />
            </Card>
          </Grid>
        );
      })}
    </CommentWrapper>
  );
};

export default Reviews;
