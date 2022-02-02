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
import { Link } from "react-router-dom";
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
  // border: '0.5px solid lightgrey',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  // borderRadius: '5%',
  boxShadow: '0px 0px 32px 4px #000000',
  borderRadius: '5%'
};

const dividerStyle = {
  border: 'solid',
  borderWidth: '1px',
}

const FriendsModal = ({ friendsList, set, removeFriend, handleGetFriendData, currentUserData, currentUserView }) => {

  return (
    <Paper>
      <Box style={styleM}>
      <div  style={{color: 'white', backgroundColor: '#212529', width: '500px', display: 'flex', justifyContent: 'center', borderRadius: '22px 22px 0px 0px', height: '100px', paddingTop: '2px',}}>
        <div className="modalTitle" style={{ alignSelf: 'center', fontWeight: 'bold'}}>Friends List</div>
        </div>
        {/* <Divider style={dividerStyle}/> */}
        <List className="friendsListModal">
          {friendsList.map((datum, idx) => {
            return (
              <ListItem  key={idx} style={{ height: 60, width: 400 }}>
                <ListItemAvatar>
                  <Avatar alt=" " src="./bnLogoSmall.png" className='bnLogoSmall'>
                    {/* <AccountCircleIcon /> */}
                    {/* <img src={url('./bnLogoSmall.png')}/> */}
                    {/* <div className='bnLogoSmall'/> */}
                  </Avatar>
                </ListItemAvatar>
                <Link className='link' to={`friend/${datum}`}><ListItemText
                    primary={datum}
                    onClick={e => handleGetFriendData(datum)}
                  /></Link>
                  {
                    (currentUserView === null) && (
                      <ListItemSecondaryAction>
                      <IconButton edge='end' onClick={() => removeFriend(datum)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                    )
                  }
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Paper>
  );
};

export default FriendsModal;