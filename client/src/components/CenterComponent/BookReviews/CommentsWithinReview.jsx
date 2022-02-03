import { Grid, Paper, styled, Card, Typography, Divider, Button } from '@material-ui/core';
import React from 'react';

const CommentsWithinReview = ({comments}) => {

  let commentsInReview = [
    {username: 'Username 1',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Arcu vitae elementum curabitur vitae. Felis imperdiet proin fermentum leo vel orci porta non pulvinar.'
  }
  ,
  {
    username: 'Username 2',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Arcu vitae elementum curabitur vitae. Felis imperdiet proin fermentum leo vel orci porta non pulvinar.'
  }
  ,
  {
    username: 'Username 2',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Arcu vitae elementum curabitur vitae. Felis imperdiet proin fermentum leo vel orci porta non pulvinar.'
  }
  ,
  {
    username: 'Username 2',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Arcu vitae elementum curabitur vitae. Felis imperdiet proin fermentum leo vel orci porta non pulvinar.'
  }
  ,
  {
    username: 'Username 2',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Arcu vitae elementum curabitur vitae. Felis imperdiet proin fermentum leo vel orci porta non pulvinar.'
  }
  ]

  return (
    <>
    {(comments.length) && (
      <div style={{display: 'flex', gap: 10, flexDirection: 'column'}}>
      {comments.map((info, index) => {
        return (
          <Grid item xs={12}>
            <Card elevation={6}>
              <Card>
                <div style={{ display: 'flex'}}>
                  <div>
                  <div style={{ padding: 5}}>
                    <p style={{ marginBottom: 0, padding: 1.5, fontSize: 13 }}>
                      {info.username}
                    </p>
                    <div>
                    <p
                      style={{
                        padding: 1,
                        margin: 1,
                        fontSize: 15,
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
