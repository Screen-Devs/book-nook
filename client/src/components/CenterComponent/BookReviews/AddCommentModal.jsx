import { Box, Button, Container, Card, Divider, Modal, TextField, Typography } from '@material-ui/core';
import React, {useState} from 'react';

const containerStyle ={
  margin: 0
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 'auto',
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

const AddCommentModal = ({set}) => {
  const [show, setShow] = useState(false);

  // TODO add current Username
  const [addedComment, setAddedComment] = useState({
    username: 'Sample',
    comment: ''
  })

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setAddedComment({username: 'Sample', comment: ''})
    set(prev => [...prev, addedComment])
    handleModal()
  }

  return (
    <Container>
      <Button onClick={handleModal} variant='text' style={{color: 'black'}}>Add Comment</Button>
      <Modal
        open={show}
        onClose={handleModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
          <form onSubmit={handleSubmit}>
        <Box style={style}>
        <Card style={cardStyle}>
          <div style={{width:'100%'}}>
          <Typography variant='h6' component='div' gutterBottom style={{margin:0,padding:1}}>
              Add a comment
          </Typography>
          <TextField
            label="Add Review"
            multiline
            rows={10}
            variant='filled'
            style={{marginBottom: 2}}
            value={addedComment.comment}
            onChange={(e) => setAddedComment({...addedComment, comment : e.target.value})}
            fullWidth
            />
          </div>
          <Button type='submit' variant='contained' color='inherit' style={{marginTop: 5, alignSelf:'flex-end', marginBottom: 0}}>Submit</Button>
        </Card>
        </Box>
          </form>
      </Modal>
    </Container>
  );
};

export default AddCommentModal;
