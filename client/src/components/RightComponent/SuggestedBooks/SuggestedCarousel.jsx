import React from 'react';
import Carousel from 'react-elastic-carousel'

const SuggestedCarousel = ({suggestedBooks}) => {
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
        {suggestedBooks.map((book, i) => {
          return (
            <div key={i}>
              <a href='' key={i} target='_blank'>
                <img src={book.imageUrl} className='NYTbookImage' key={i} />
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SuggestedCarousel;
