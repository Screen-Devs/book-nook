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

const LeaderboardDetailsModal = ({open, onclose}) => {

  return (
      <Modal
        open={show}
        onClose={handleModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box style={style}>
          Hello
        </Box>
      </Modal>
  );
};

export default LeaderboardDetailsModal;
