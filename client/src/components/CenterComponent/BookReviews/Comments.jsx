import { Grid, Paper, styled, Card, Typography, Divider, Button } from '@material-ui/core';
import React, { useState } from 'react';
import DropdownComments from './DropdownComments.jsx';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Comments = ({ allReviews }) => {

  return (
    <>
      {allReviews.map((comment, index) => {
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
                      Username
                    </p>
                    <Typography
                      variant='h6'
                      component='div'
                      gutterBottom
                      style={{ paddingBottom: 0, paddingLeft: 0.5, margin: 0, fontWeight: 700 }}
                    >
                      {comment.title}
                    </Typography>
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
                      {comment.review}
                    </p>
                    </div>
                  </div>
                  </div>
                  <div style={{ border: '1px pink solid', flex: 1 }}>
                    <DropdownComments/>
                  </div>
                </div>
              </Card>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default Comments;
