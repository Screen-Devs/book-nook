import { Box, Button, Container, Card, Divider, Modal, TextField, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import CommentsWithinReview from './CommentsWithinReview.jsx';

const containerStyle ={
  margin: 0
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 580,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height: '100%',
  padding: 32
}

const CommentsModal = ({commentsInReview}) => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow((prev) => !prev);
  };


  return (
    <Container>
      <Button onClick={handleModal} variant='text' style={{color: 'black'}}>View Comments</Button>
      <Modal
        open={show}
        onClose={handleModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box style={style}>
        <Card style={cardStyle}>
          <CommentsWithinReview comments={commentsInReview}/>
        </Card>
        </Box>
      </Modal>
    </Container>
  );
};

export default CommentsModal;
