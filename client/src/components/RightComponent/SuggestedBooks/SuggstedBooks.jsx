import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import SuggestedCarousel from './SuggestedCarousel.jsx';
import { getSuggestedBooks } from '../../../requests/index.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`

`;

const Content = styled.div`
  width: 100%;
`;

const SuggstedBooks = ({currentUserData}) => {
  const [suggestedBooks, setSuggestedBooks] = useState([]);

  const fetchSuggestedBooks = (username) => {
    getSuggestedBooks(username)
      .then((suggestedBookData) => {
        setSuggestedBooks(suggestedBookData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSuggestedBooks(currentUserData);
  }, []);

  return (
    <Wrapper>
      <Title>
        <Button
          className='sideComponentTitle2'
          style={{ display: 'flex', justifyContent: 'center'}}
          variant='dark'
        >
          Suggested Books
        </Button>
      </Title>
      <Content>
        <SuggestedCarousel suggestedBooks={suggestedBooks}/>
      </Content>
    </Wrapper>
  );
};

export default SuggstedBooks;
