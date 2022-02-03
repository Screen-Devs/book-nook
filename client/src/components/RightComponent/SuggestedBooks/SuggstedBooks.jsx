import React from 'react';
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
        <SuggestedCarousel/>
      </Content>
    </Wrapper>
  );
};

export default SuggstedBooks;
