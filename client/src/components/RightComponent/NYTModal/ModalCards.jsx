import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';
import samplemanga from './samplemanga';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import { getNYTimesCategory, getNYTimesList } from '../../../requests/index.js';


const BookDescription = styled.p`
  font-size: 7px;
  flex: 2;
  padding: 3px;
`;
const BookTitle = styled.p`
  font-size: 9px;
  height: 10px;
  padding: 3px;
`;

const cardStyle = {
  height: 325,
  width: 150,
  // border: 1,
  // marginTop: 1,
  position: 'relative',
  boxShadow: '0px 0px 32px 1px #000000',
  borderRadius: '5%',
  margin: '20px 20px 20px 20px',
  // padding: '10px',
}

const cardContentStyle = {
  padding: 0.5,
  display: 'flex',
  flexDirection: 'column'
}

const ModalCards = ({info}) => {
  let data = samplemanga.results.books;

  console.log('data', info)

  const fetchData = () => {
    getNYTimesCategory(info)
      .then((res) => {
        console.log('ret',res)
        setCategories(res)
      })
      .catch(err => console.error(err))
    }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{margin: '0px 15px 0px 15px'}}>
    <Carousel
      itemsToShow={5}
      itemsToScroll={5}
      easing='cubic-bezier(1,.15,.55,1.54)'
      tiltEasing='cubic-bezier(0.110, 1, 1.000, 0.210)'
    >
      {data.map((book) => (
        <Card style={cardStyle} key={book.rank}>
          <a href={book.amazon_product_url}>
            <CardMedia component='img' height='175' width='50' image={book.book_image} />
          </a>
            <CardContent style={cardContentStyle}>
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
            <CardActions style={{position: 'absolute', bottom: 0}}>
              {/* TODO: ADD functionality to button*/}
              <Button variant='contained' style={{fontSize:10}}>Add to Read List</Button>
            </CardActions>
        </Card>
      ))}
    </Carousel>
    </div>
  );
};

export default ModalCards;
