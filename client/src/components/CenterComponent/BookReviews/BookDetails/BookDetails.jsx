import { Card, CardContent, CardHeader, CardMedia, Container, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import sample from './sample';

const data = sample

const BookDetails = () => {
  return (
    <Container style={{height: '100%', padding: 0}}>
      <Grid container style={{display:'flex'}}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            height="265"
            image={data.volumeInfo.imageLinks.smallThumbnail}
            />
        </Grid>
        <Grid item xs={8}>
            <Container style={{fontSize: 20 }}>
              <CardHeader
                title={data.volumeInfo.title}
                subheader={<Typography style={{color: 'white'}}>{data.volumeInfo.authors[0]}</Typography>}
                style={{padding: '0px 0px 20px', margin:0}}
              />
              <CardContent style={{padding: 0, margin:0}}>
              Publisher : {data.volumeInfo.publisher}
              <br/>
              Published Date : {data.volumeInfo.publishedDate}
              <br/>
              ISBN : {data.volumeInfo.industryIdentifiers[0].identifier}
              <br/>
              Page Count : {data.volumeInfo.pageCount}
              <br/>
              <Link underline="none" style={{color: 'lightblue'}}href={data.saleInfo.buyLink}>Get book</Link>
              </CardContent>
            </Container>
          </Grid>
      </Grid>
    </Container>

  )
};

export default BookDetails;
