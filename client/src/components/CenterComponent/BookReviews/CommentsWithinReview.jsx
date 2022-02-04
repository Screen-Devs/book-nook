import { Grid, Paper, Card, Typography, Divider, Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { markReviewComment } from '../../../requests'

dayjs.extend(localizedFormat)

const HelpfulAndReport = styled.div`
  display: flex;
  padding-left: 3px;
`

const Helpful = styled.div`
  &:hover{
    color: #32de84;
    cursor: pointer;
  }
`

const Report = styled.div`
  margin-left: 5px;
  &:hover{
    color: coral;
    cursor: pointer;
  }
`

const TopWrapper = styled.div``
const UsernameWrapper = styled.div`
  padding-left: 2px;
  &:hover {
    color: grey;
    cursor: pointer;
  }
`

const CommentsWithinReview = ({handleGetFriendData, comments, bookId, reviewId}) => {

  const handleHelpful = (e, commentId) => {
    e.preventDefault();
    markReviewComment(bookId, reviewId, commentId, 'helpful')
      .then((success) => {console.log(`successfully marked ${commentId} helpful`)})
  }

  const handleReport = (e, commentId) => {
    e.preventDefault();
    markReviewComment(bookId, reviewId, commentId, 'report')
      .then((success) => { console.log(`successfully reported ${commentId}`) })
  }
  return (
    <>
    {(comments.length > 0) ? (
      <div style={{display: 'flex', gap: '1em', flexDirection: 'column', width: '100%'}}>
      {comments.map((comment, index) => {
        return (
          <Grid item xs={12} style={{gap: '1em', borderRadius: '20px', padding: '3px', width:'100%'}}>
            <Card elevation={6}>
              <Card>
                <div style={{ width:'100%'}}>
                  <div>
                  <div  style={{ padding: 5, borderRadius: '20px', width:'100%'}}>
                    <p style={{ marginBottom: 0, padding: 1.5, fontSize: 13, boxShadow: '0 4px 2px -2px gray', backgroundColor: '#212529', color: 'white', borderRadius:'20px', paddingLeft: '3px'}}>
                      <b>
                        <TopWrapper style={{display: 'flex'}}>
                        <u>From:</u>
                        <UsernameWrapper onClick={e => handleGetFriendData(comment.commenter)}>
                        {comment.commenter}
                        </UsernameWrapper>
                        </TopWrapper>
                        </b>
                    </p>
                    <div style={{fontSize: 12, paddingTop: 5, paddingLeft: 1, marginLeft: 1}}>Written at: {dayjs(comment.comment_time).format('LL')}</div>
                    <div>
                    <p
                      className="hideScroll"
                      style={{
                        padding: 1,
                        margin: 1,
                        fontSize: 15,
                        overflow: 'auto',
                        maxHeight: '150px',
                      }}
                    >
                      {comment.comment_body}
                    </p>
                    <HelpfulAndReport>
                      <Helpful onClick={(e) => {handleHelpful(e, comment._id)}}>
                        Helpful ({comment.helpful_comment})
                      </Helpful>
                      <Divider orientation="vertical" />
                          <Report onClick={(e) => {handleReport(e, comment._id)}}>
                        Report
                      </Report>
                    </HelpfulAndReport>
                    </div>
                  </div>
                  </div>
                </div>
              </Card>
            </Card>
          </Grid>
        );
      })}
      </div>
      ) :
        <div>There are no comments on this review</div>}
    </>
  );
};

export default CommentsWithinReview
