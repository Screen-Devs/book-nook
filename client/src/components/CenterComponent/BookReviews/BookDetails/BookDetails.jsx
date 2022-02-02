import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import React, { useState} from 'react';
import BookDetailsDropdown from './BookDetailsDropdown.jsx';

const BookDetails = ({searchToResult}) => {

  return (
    <Container style={{ height: '100%', padding: 0 }}>
      <Grid container style={{ display: 'flex' }}>
        <Grid item xs={4}>
          <CardMedia
            component='img'
            height='265'
            image={searchToResult.volumeInfo.imageLinks.smallThumbnail}
          />
        </Grid>
        <Grid item xs={7}>
          <Container style={{ fontSize: 20 }}>
            <CardHeader
              title={searchToResult.volumeInfo.title}
              subheader={
                <Typography style={{ color: 'white' }}>{searchToResult.volumeInfo.authors[0]}</Typography>
              }
              style={{ padding: '0px 0px 20px', margin: 0 }}
            />
            <CardContent style={{ padding: 0, margin: 0 }}>
              Publisher : {searchToResult.volumeInfo.publisher}
              <br />
              Published Date : {searchToResult.volumeInfo.publishedDate}
              <br />
              ISBN : {searchToResult.volumeInfo.industryIdentifiers[0].identifier}
              <br />
              Page Count : {searchToResult.volumeInfo.pageCount}
              <br />
              <Link underline='none' style={{ color: 'lightblue' }} href={searchToResult.saleInfo.buyLink}>
                Get book
              </Link>
            </CardContent>
          </Container>
        </Grid>
        <Grid item xs={1}>
          <BookDetailsDropdown/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookDetails;
