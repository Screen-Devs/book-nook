import { Paper, Card, Typography, Divider, Button } from '@material-ui/core';
import React, { useState } from 'react';
import CommentAccordian from './BookDetails/CommentAccordian/CommentAccordian.jsx';
import DropdownComments from './DropdownComments.jsx';
import styled from 'styled-components'

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 2px -2px gray;
`

const UsernamdAndTitle = styled.div`
  padding: 5px 15px 0px;
`

const Helpful = styled.div`
  padding: 5px 15px 0px;
`

const Username = styled.div`
  font-size: 13px;
`
const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
`

const CommentWrapper = styled.div`
  margin: 7px 0px;
  max-height: '200px';
`
//  overflow: 'auto';

const Grid = styled.div`
  margin: 7px 0px;
  background-color: red;
  border-radius: 20px;
`

const Reviews = ({ allReviews, username, goToReviews, bookId }) => {
  // const [commentsInReview, setCommentsInReview] = useState([]);
  return (
    <CommentWrapper className="hideScroll">
      {allReviews.map((review, index) => {
        return (
          <Grid>
            <Card className=" hideScroll" elevation={6}>
                <TopWrapper>
                    <UsernamdAndTitle>
                      <Username>Written by {review.username}</Username>
                    </UsernamdAndTitle>
                    <div>{review.review_date}</div>
                    <DropdownComments
                      reviewId={review._id}
                      username={username}
                      goToReviews={goToReviews}
                      bookId={bookId}
                    />
                    </TopWrapper>
                    <div className="aReview hideScroll">
                      {review.review_body}
                    </div>
                    <Helpful>
                      Helpful ({review.helpful_review})
                    </Helpful>
                <CommentAccordian comments={review.comments} />
            </Card>
          </Grid>
        );
      })}
    </CommentWrapper>
  );
};

export default Reviews;
