import { Box, Card, Container, Modal, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { NYT } from '../NYTdummyData';
import sample from './sample.js';
import SuggestBooksModal from './SuggestBooksModal.jsx';
import SuggestedBooksModalContent from './SuggestedBooksModalContent.jsx';

const SuggestedCarousel = () => {

  return (
    <div>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={6000}
        itemsToShow={2}
        itemsToScroll={2}
        easing='cubic-bezier(1,.15,.55,1.54)'
        tiltEasing='cubic-bezier(0.110, 1, 1.000, 0.210)'
        transitionMs={700}
      >
        {sample.map((book, index) => {
          return (
            <SuggestBooksModal book={book} key={index}/>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SuggestedCarousel;
