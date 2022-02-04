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
      <div style={{color: 'white', backgroundColor: '#212529', width: 290, display: 'flex', justifyContent: 'center', borderRadius: '10px 10px 0px 0px', height: '40px', paddingTop: '8px',}}>
        <div style={{ fontWeight: 800 }}>Suggested Books</div>
      </div>
        {/* <Button
          className='sideComponentTitle2'
          style={{ display: 'flex', justifyContent: 'center'}}
          variant='dark'
        >
          Suggested Books
        </Button> */}
      </Title>
      <Content style={{height: 216, paddingTop: '25px',}}>
        <SuggestedCarousel suggestedBooks={suggestedBooks}/>
      </Content>
    </Wrapper>
  );
};

export default SuggstedBooks;
