import { Grid, Paper, styled, Card, Typography, Divider, Button } from '@material-ui/core';
import React from 'react';
import { Rating } from '@material-ui/lab';


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
            <Card style={{ maxheight: 300 }} elevation={6}>
              <Card
                direction='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={0}
                divider={<Divider orientation='vertical' flexItem />}
              >
                <div style={{height: 80, paddingLeft: 10}}>
                  <p style={{marginBottom: 0, paddingTop: 4,paddingLeft: 1.5, fontSize: 13}}>Username</p>
                  <Typography
                    variant='h6'
                    component='div'
                    gutterBottom
                    style={{ paddingBottom:0, paddingLeft: 0.5, margin: 0, fontWeight:700}}
                  >
                    {comment.title}
                  </Typography>
                  <Rating
                    readOnly
                    value={comment.rating}
                    precision={0.5}
                  />
                </div>
                <div>
                <p style={{paddingLeft: 14, paddingTop: 5, fontSize: 15}}>
                  {comment.review}
                </p>
                <div style={{marginLeft: 15, marginBottom: 15}}>
                <Button variant='contained' color='inherit'>Helpful</Button>
                <Button variant='contained' color='inherit' style={{marginLeft: 5}}>Report</Button>
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
