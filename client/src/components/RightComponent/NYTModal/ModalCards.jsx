import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import samplemanga from './samplemanga';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

const BookDescription = styled.p`
  font-size: 7px;
  flex: 2;
`;
const BookTitle = styled.p`
  font-size: 9px;
  height: 10px;
`;

const ModalCards = () => {
  let data = samplemanga.results.books;
  console.log(data);

  return (
    <Carousel
      itemsToShow={5}
      itemsToScroll={5}
      easing='cubic-bezier(1,.15,.55,1.54)'
      tiltEasing='cubic-bezier(0.110, 1, 1.000, 0.210)'
    >
      {data.map((book) => (
        <Card sx={{ height: 325, width: 150, border: 1, marginTop: 1, position: 'relative'}}>
          <a href={book.amazon_product_url}>
            <CardMedia component='img' height='175' width='50' image={book.book_image} />
          </a>
            <CardContent sx={{ padding: 0.5, display: 'flex', flexDirection: 'column'}}>
              <BookTitle>{book.title}</BookTitle>
              <BookDescription>
                {book.author}
                <br />
                <br />
                {book.publisher}
                <br />
                <br />
                {book.description}
              </BookDescription>
            </CardContent>
            <CardActions sx={{position: 'absolute', bottom: 0}}>
              {/* TODO: ADD functionality to button*/}
              <Button variant='contained' sx={{fontSize:10}}>Add to Read List</Button>
            </CardActions>
        </Card>
      ))}
    </Carousel>
  );
};

export default ModalCards;
