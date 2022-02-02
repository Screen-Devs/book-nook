import { Grid, Paper, styled, Card, Typography, Divider, Button } from '@material-ui/core';
import React from 'react';

const CommentsWithinReview = ({comments}) => {

  let commentsInReview = [
    {username: 'bob',
    comment: 'this sucks'
  }
  ,
  {
    username: 'man',
    comment: 'this sucks'
  }
  ]


  return (
    <>
    {(comments.length === 0) ? null : (
      <div>
      {comments.map((info, index) => {
        return (
          <Grid item xs={12}>
            <Card elevation={6}>
              <Card
                direction='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={0}
                divider={<Divider orientation='vertical' flexItem />}
              >
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: 8, border: '1px red solid'}}>
                  <div style={{ paddingLeft: 10 }}>
                    <p style={{ marginBottom: 0, paddingTop: 4, paddingLeft: 1.5, fontSize: 13 }}>
                      {info.username}
                    </p>
                    <div>
                    <p
                      style={{
                        paddingLeft: 14,
                        paddingTop: 5,
                        fontSize: 15,
                        backgroundColor: 'green',
                        overflow: 'auto',
                        maxHeight: '200px',
                      }}
                    >
                      {info.comment}
                    </p>
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
      )}
    </>
  );
};

export default CommentsWithinReview
