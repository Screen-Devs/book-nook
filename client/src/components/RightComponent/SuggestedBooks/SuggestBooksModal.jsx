import { Box, Card, Container, Modal, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import SuggestedBooksModalContent from './SuggestedBooksModalContent.jsx';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 'auto',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '20px',
  boxShadow: '0px 0px 32px 1px #000000',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  maxHeight: '550px',
  padding: 32,
  borderRadius: '20px',
};

const containerStyle = {
  margin: 0,
};

const SuggestBooksModal = ({book, key}) => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <div key={key} onClick={handleModal}>
      <img src={book.imageUrl} className='NYTbookImage' key={key} />
      <Container>
        <Modal
          open={show}
          onClose={handleModal}
          key={key}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box style={style}>
            <Card style={cardStyle}>
              <SuggestedBooksModalContent book={book} />
            </Card>
          </Box>
        </Modal>
      </Container>
    </div>
  );
};

export default SuggestBooksModal;
