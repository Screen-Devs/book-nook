import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper
} from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const styleM = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  background: 'white',
  border: '0.5px solid lightgrey',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
};

const FriendsModal = ({ friendsList, set, remove }) => {

  const handleRemove = (ID) => {
    const newFriends = friendsList.filter((friend) => friend.ID !== ID);
    set(newFriends);
  };

  return (
    <Paper>
      <Box style={styleM}>
        <div style={{ alignSelf: 'center' }}>Friend List</div>
        <List>
          {friendsList.map((datum) => {
            return (
              <ListItem key={datum.ID} style={{ height: 60, width: 400 }}>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={datum.FirstNameLastName} />
                <ListItemSecondaryAction>
                  <IconButton edge='end' onClick={() => handleRemove(datum.ID)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Paper>
  );
};

export default FriendsModal;
