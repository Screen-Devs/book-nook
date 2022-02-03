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
      <div style={{display: 'flex', gap: '1em', flexDirection: 'column'}}>
      {comments.map((info, index) => {
        return (
          <Grid item xs={12} style={{gap: '1em', borderRadius: '20px', padding: '3px',}}>
            <Card elevation={6}>
              <Card>
                <div style={{ display: 'flex'}}>
                  <div>
                  <div  style={{ padding: 5, borderRadius: '20px',}}>
                    <p style={{ marginBottom: 0, padding: 1.5, fontSize: 13, boxShadow: '0 4px 2px -2px gray', backgroundColor: '#212529', color: 'white', borderRadius:'20px', paddingLeft: '3px',}}>
                      <b><u>From:</u> {info.username}</b>
                    </p>
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
