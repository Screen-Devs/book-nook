import { Paper, Card, Typography, Divider, Button } from '@material-ui/core';
import React, { useState } from 'react';
import CommentAccordian from './BookDetails/CommentAccordian/CommentAccordian.jsx';
import DropdownComments from './DropdownComments.jsx';
import styled from 'styled-components'

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
const TextBody = styled.div`
  padding: 0px 15px;
  font-size: 15px;
  overflow: 'auto';
  max-height: '200px';
`
const CommentWrapper = styled.div`
  margin: 7px 0px;
`
const Grid = styled.div`
  margin: 7px 0px;
`

const Comments = ({ allReviews }) => {
  const [commentsInReview, setCommentsInReview] = useState([]);

  console.log('comments in reviews ', commentsInReview)
  return (
    <CommentWrapper>
      {allReviews.map((comment, index) => {
        return (
          <Grid>
            <Card elevation={6}>
                <TopWrapper>
                    <UsernamdAndTitle>
                      <Username>Username</Username>
                      <Title>{comment.title}</Title>
                    </UsernamdAndTitle>
                    <DropdownComments set={setCommentsInReview}/>
                    </TopWrapper>
                    <TextBody>
                      {comment.review}
                    </TextBody>
                <CommentAccordian comments={commentsInReview} />
            </Card>
          </Grid>
        );
      })}
    </CommentWrapper>
  );
};

export default Comments;
