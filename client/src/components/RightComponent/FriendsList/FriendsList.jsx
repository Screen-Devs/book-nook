import {
  Paper,
  Box,
  Button,
  Modal,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Container,
  ListItemSecondaryAction,
} from '@material-ui/core';
import React, { useState } from 'react';
import FriendsModal from './FriendsModal.jsx';
import samplePeople from './samplepeople.js';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const boxStyle = {
  width: 290,
  height: '510px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingBottom: 50,
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '20px',
  // borderWidth: '10px',
  // border: 'solid',
  margin: '0px',
};

const friendsListContainer = {
  height: '510px',
  backgroundColor: 'white',
  display: 'flex',
  width: '290px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  fontWeight: '800',
  margin: '5px',
  borderRadius: '20px',
  boxShadow: '0px 0px 32px 4px #000000',
  padding: '8px',
}

const data = samplePeople.objects;

const FriendsList = () => {
  const [show, setShow] = useState(false);
  const [friendsList, setFriendsList] = useState(data);

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  const removeFriend = (ID) => {
    const newFriends = friendsList.filter((friend) => friend.ID !== ID);
    setFriendsList(newFriends);
  };

  return (
    <Paper className='animate__animated animate__fadeInRight' style={friendsListContainer}>
      <Box style={boxStyle}>
      <h5 style={{position:'absolute', top: 5, marginBottom: 15}}>Friends Lists</h5>
        {friendsList.length === 0 ? (
          <div style={{ alignSelf: 'center', position: 'absolute', top: '50%' }}>
            {' '}
            No friends :({' '}
          </div>
        ) : (
          <List style={{ width: '100%', paddingTop: 40}}>
            {friendsList.slice(0, 10).map((datum) => {
              return (
                <ListItem
                  key={datum.ID}
                  style={{ height: 42 }}
                >
                  <ListItemAvatar>
                    <Avatar alt=" " src="./bnLogoSmall.png" className='bnLogoSmall'/>
                      {/* <AccountCircleIcon /> */}
                    {/* </Avatar> */}
                  </ListItemAvatar>
                  <ListItemText
                    primary={datum.FirstNameLastName}
                  />
                  <ListItemSecondaryAction>
                  <IconButton edge='end' onClick={() => removeFriend(datum.ID)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
      {friendsList.length > 10 ? (
        <Button
          onClick={handleModal}
          style={{ position: 'absolute', bottom: 10, justifySelf: 'center'}}
          variant='contained'
          color='inherit'
        >
          Show More
        </Button>
      ) : null}
      <Modal open={show} onClose={handleModal}>
        <FriendsModal friendsList={friendsList} remove={removeFriend} set={setFriendsList} />
      </Modal>
    </Paper>
  );
};

export default FriendsList;
