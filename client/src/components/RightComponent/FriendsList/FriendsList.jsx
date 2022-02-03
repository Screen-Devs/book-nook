import {
  Paper,
  Box,
  // Button,
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
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FriendsModal from './FriendsModal.jsx';
import { dumpFriend } from '../../../requests';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'

const boxStyle = {
  width: 290,
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  paddingBottom: 50,
  backgroundColor: 'white',
  position: 'relative',
  borderRadius: '20px',
  margin: '0px',
};

const friendsListContainer = {
  height: '100%',
  backgroundColor: 'white',
  display: 'flex',
  width: '290px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontWeight: '800',
  margin: '0px',
  borderRadius: '20px',
  boxShadow: '0px 0px 32px 4px #000000',
  padding: '8px',
};

const FriendsListButton = styled.div``;

const FriendsListContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FriendsList = ({ handleGetFriendData, userData, currentUserData, currentUserView }) => {
  const [show, setShow] = useState(false);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    setFriendsList(userData[0].friends);
  }, [userData]);

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  const removeFriend = (friendToRemove) => {
    const action = { friend: friendToRemove, username: currentUserData, action: 'remove' };
    dumpFriend(action)
      .then((res) => {
        const newFriends = friendsList.filter((friend) => friend !== friendToRemove);
        setFriendsList(newFriends);
      })
      .catch((err) => console.error(err));
  };

  // onClick={}

  return (
    <Paper style={friendsListContainer}>
      <Box style={boxStyle}>
        <FriendsListButton>
          <Button
            className='sideComponentTitle'
            variant='dark'
            onClick={handleModal}
          >
            Friends List
          </Button>
        </FriendsListButton>
        <FriendsListContent>
          {/* <h5 style={{position:'absolute', top: 5, marginBottom: 15}}>Friends Lists</h5> */}
          {friendsList.length === 0 ? (
            <div style={{paddingTop: 80}}>
              {' '}
              No friends :({' '}
            </div>
          ) : (
            <List style={{ width: '100%', paddingTop: 20 }}>
              {friendsList.slice(0, 4).map((datum, idx) => {
                return (
                  <ListItem key={idx} style={{ height: 42 }}>
                    <ListItemAvatar>
                      <Avatar alt=' ' src='./bnLogoSmall.png' className='bnLogoSmall' />
                      {/* <AccountCircleIcon /> */}
                      {/* </Avatar> */}
                    </ListItemAvatar>
                    <Link className='link' to={`friend/${datum}`}>
                      <ListItemText primary={datum} onClick={(e) => handleGetFriendData(datum)} />
                    </Link>
                    {currentUserView === null && (
                      <ListItemSecondaryAction>
                        <IconButton edge='end' onClick={() => removeFriend(datum)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    )}
                  </ListItem>
                );
              })}
            </List>
          )}
        </FriendsListContent>
      </Box>
      {/* {friendsList.length > 10 ? (
        // <Button
        //   onClick={handleModal}
        //   style={{ position: 'absolute', bottom: 10, justifySelf: 'center'}}
        //   variant='contained'
        //   color='inherit'
        // >
        //   Show More
        // </Button>
      ) : null} */}
      <Modal open={show} onClose={handleModal}>
        <FriendsModal
          currentUserView={currentUserView}
          friendsList={friendsList}
          removeFriend={removeFriend}
          set={setFriendsList}
          handleGetFriendData={handleGetFriendData}
        />
      </Modal>
    </Paper>
  );
};

export default FriendsList;
