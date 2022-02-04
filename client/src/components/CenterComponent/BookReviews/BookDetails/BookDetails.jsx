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
import 'animate.css';

const BookDetails = ({searchToResult}) => {

  return (
    <Container className="animate__animated animate__flipInX" style={{ height: '100%', padding: 0 }}>
      <Grid container style={{ display: 'flex' }}>
        <Grid item xs={4}>
          <CardMedia
            component='img'
            height='265'
            image={(searchToResult.volumeInfo.imageLinks) ? searchToResult.volumeInfo.imageLinks.smallThumbnail : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
          />
        </Grid>
        <Grid item xs={7}>
          <Container style={{ fontSize: 18 }}>
            <CardHeader
              title={searchToResult.volumeInfo.title}
              subheader={
                <Typography style={{ color: 'white' }}>{(searchToResult.volumeInfo.authors) ? searchToResult.volumeInfo.authors.join(', ') : null}</Typography>
              }
              style={{ padding: '0px 0px 20px', margin: 0 }}
            />
            <CardContent style={{ padding: 0, margin: 0 }}>
              Publisher : {(searchToResult.volumeInfo.publisher) ? searchToResult.volumeInfo.publisher : null}
              <br />
              Published Date : {(searchToResult.volumeInfo.publishedDate) ? searchToResult.volumeInfo.publishedDate : null}
              <br />
              ISBN : {(searchToResult.volumeInfo.industryIdentifiers) ? searchToResult.volumeInfo.industryIdentifiers[0].identifier : null}
              <br />
              Page Count : {(searchToResult.volumeInfo.pageCount) ? searchToResult.volumeInfo.pageCount : null}
              <br />
              <Link underline='none' style={{ color: 'lightblue' }} href={(searchToResult.saleInfo.buyLink) ? searchToResult.saleInfo.buyLink : null }>
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
