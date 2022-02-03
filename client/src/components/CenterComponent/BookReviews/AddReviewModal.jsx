import { Box, Button, Container, Card, Divider, Modal, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Rating } from '@material-ui/lab';
import { addBookReview } from '../../../requests';

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

const AddReviewModal = ({ username, bookId, goToReviews }) => {
  const [show, setShow] = useState(false);

  const [review, setReview] = useState({
    rating: 0,
    // title: '',
    review_body: '',
    username,
  })


  const handleModal = () => {
    setShow((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    addBookReview(bookId, review)
      .then(() => {
        goToReviews(bookId);
        setReview({ rating: 0, username, review: '' })
        handleModal()
      })
  }

  return (
    <Container>
      <Button onClick={handleModal} variant='text' style={{color: 'black'}}>Add Review</Button>
      <Modal
        open={show}
        onClose={handleModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
          <form onSubmit={handleSubmit}>
        <Box style={style}>
        <Card style={cardStyle}>
          <Typography variant='h3' component='div' gutterBottom style={{margin:0,padding:1}}>
            Add Review
          </Typography>
          <div>
            <Typography variant='h6' component='div' gutterBottom style={{margin:0,padding:1}}>
              Overall Rating
            </Typography>
            <Rating
              size="large"
              value={review.rating}
              onChange={(e, newValue) => setReview({...review, rating: newValue})}
              precision={0.5}
              style={{marginBottom: 2, paddingLeft: 0.5} }/>
          </div>
          {/* <div style={{width:'100%'}}>
          <Typography variant='h6' component='div' gutterBottom style={{margin:0,padding:1}}>
              Add a title
          </Typography>
          <TextField
            label="Add Title"
            style={{marginBottom: 2}}
            value={review.title}
            variant='filled'
            onChange={(e) => setReview({...review, title : e.target.value})}
            fullWidth
            />
          </div> */}
          <div style={{width:'100%'}}>
          <Typography variant='h6' component='div' gutterBottom style={{margin:0,padding:1}}>
              Add a written review
          </Typography>
          <TextField
            label="Add Review"
            multiline
            rows={10}
            variant='filled'
            style={{marginBottom: 2}}
            value={review.review}
            onChange={(e) => setReview({...review, review_body: e.target.value})}
            fullWidth
            />
          </div>
          <Button type='submit' variant='contained' color='inherit' style={{marginTop: 5, alignSelf:'flex-end'}}>Submit</Button>
        </Card>
        </Box>
          </form>
      </Modal>
    </Container>
  );
};

export default AddReviewModal;
