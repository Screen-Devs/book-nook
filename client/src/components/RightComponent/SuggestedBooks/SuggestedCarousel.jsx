import React from 'react';
import Carousel from 'react-elastic-carousel'
import { NYT } from '../NYTdummyData';


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
        {NYT[0].books.map((book) => {
          return (
            <div key={book.rank ** book.rank}>
              <a href={book.amazon_product_url} key={book.rank * book.rank} target='_blank'>
                <img src={book.book_image} className='NYTbookImage' key={book.rank} />
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SuggestedCarousel;
