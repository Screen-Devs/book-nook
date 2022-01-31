import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Divider
} from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
// import url('./bnLogoSmall.png');

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
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5%',
  boxShadow: '0px 0px 32px 4px #000000',
};

const dividerStyle = {
  border: 'solid',
  borderWidth: '1px',
}

const FriendsModal = ({ friendsList, set, remove }) => {

  const handleRemove = (ID) => {
    const newFriends = friendsList.filter((friend) => friend.ID !== ID);
    set(newFriends);
  };

  return (
    <Paper>
      <Box className="friendsListModal" style={styleM}>
        <div className="modalTitle" style={{ alignSelf: 'center' }}>Friends List</div>
        <Divider style={dividerStyle}/>
        <List>
          {friendsList.map((datum) => {
            return (
              <ListItem key={datum.ID} style={{ height: 60, width: 400 }}>
                <ListItemAvatar>
                  <Avatar alt=" " src="./bnLogoSmall.png" className='bnLogoSmall'>
                    {/* <AccountCircleIcon /> */}
                    {/* <img src={url('./bnLogoSmall.png')}/> */}
                    {/* <div className='bnLogoSmall'/> */}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={datum.FirstNameLastName}
                />
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
