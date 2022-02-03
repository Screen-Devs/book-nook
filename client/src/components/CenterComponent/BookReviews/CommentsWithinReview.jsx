import { Grid, Paper, styled, Card, Typography, Divider, Button } from '@material-ui/core';
import React from 'react';

const CommentsWithinReview = ({comments}) => {

  return (
    <>
    {(comments.length > 0) ? (
      <div style={{display: 'flex', gap: '1em', flexDirection: 'column'}}>
      {comments.map((comment, index) => {
        return (
          <Grid item xs={12} style={{gap: '1em', borderRadius: '20px', padding: '3px',}}>
            <Card elevation={6}>
              <Card>
                <div style={{ display: 'flex'}}>
                  <div>
                  <div  style={{ padding: 5, borderRadius: '20px',}}>
                    <p style={{ marginBottom: 0, padding: 1.5, fontSize: 13, boxShadow: '0 4px 2px -2px gray', backgroundColor: '#212529', color: 'white', borderRadius:'20px', paddingLeft: '3px',}}>
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
                    <div>
                      Helpful ({comment.helpful_comment})
                    </div>
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
