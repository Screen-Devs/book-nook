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
import React, { useState} from 'react';

const SuggestedBooksModalContent = ({book}) => {

  return (
    <Container style={{ height: '100%', padding: 0 }}>
      <Grid container style={{ display: 'flex' }}>
        <Grid item xs={4}>
          <CardMedia
            component='img'
            width='260'
            style={{borderRadius: '20px'}}
            image={(book.imageUrl) ? book.imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
          />
        </Grid>
        <Grid item xs={7}>
          <Container style={{ fontSize: 18, }}>
            <CardHeader
              title={book.title}
              style={{fontWeight: '800'}}
              subheader={
                <Typography style={{ color: 'black' }}><i>By {(book.authors) ? book.authors.join(', ') : null}</i></Typography>
              }
              style={{ padding: '0px 0px 20px', margin: 0 }}
            />
            <CardContent style={{ padding: 0, margin: 0, }}>
              Publisher : {(book.publisher) ? book.publisher : null}
              <br />
            </CardContent>
            <CardContent className="hideScroll" style={{ padding: 0, margin: 0, overflow: 'auto', maxHeight: '345px', marginTop: '10px',}}>
              {(book.description) ? book.description : null}
              <br />
            </CardContent>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuggestedBooksModalContent;
