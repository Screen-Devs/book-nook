import { Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
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
  bgcolor: 'background.paper',
  border: '0.5px solid lightgrey',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const FriendsModal = ({friendsList, set, remove}) => {

  const handleRemove = (ID) => {
    const newFriends = friendsList.filter((friend) => friend.ID !== ID)
    set(newFriends)
  }

  return (
      <Box style={styleM}>
        <div style={{alignSelf: 'center'}}>Friend List</div>
        <List>
          {friendsList.map((datum) => {
            return (
              <ListItem
                key={datum.ID}
                secondaryAction={
                  <IconButton edge='end' onClick={()=> handleRemove(datum.ID)}>
                    <DeleteIcon/>
                  </IconButton>
                }
                style={{height: 60, width: 400}}
              >
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={datum.FirstNameLastName}
                  />
              </ListItem>
            )
          })}
        </List>
      </Box>
  )
};

export default FriendsModal;
