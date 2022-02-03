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

const Comments = ({ allReviews }) => {
  const [commentsInReview, setCommentsInReview] = useState([]);

  console.log('comments in reviews ', commentsInReview)
  return (
    <CommentWrapper className="hideScroll">
      {allReviews.map((comment, index) => {
        return (
          <Grid>
            <Card className=" hideScroll" elevation={6}>
                <TopWrapper>
                    <UsernamdAndTitle>
                      <Username>Written by USERNAME</Username>
                      <Title>{comment.title}</Title>
                    </UsernamdAndTitle>
                    <DropdownComments set={setCommentsInReview}/>
                    </TopWrapper>
                    <div className="aReview hideScroll">
                      {comment.review}
                    </div>
                <CommentAccordian comments={commentsInReview} />
            </Card>
          </Grid>
        );
      })}
    </CommentWrapper>
  );
};

export default Comments;
