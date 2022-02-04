import { Grid, Paper, Card, Typography, Divider, Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const HelpfulAndReport = styled.div`
  display: flex;
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

const CommentsWithinReview = ({comments}) => {

  const handleHelpful = () => {
    console.log('This was helpful')
  }

  const handleReport = () => {
    console.log('Ban')
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
                      <b><u>From:</u> {comment.commenter}</b>
                    </p>
                    <div>Written at: {comment.comment_time}</div>
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
                      <Helpful onClick={handleHelpful}>
                        Helpful ({comment.helpful_comment})
                      </Helpful>
                      <Divider orientation="vertical" />
                      <Report onClick={handleReport}>
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
