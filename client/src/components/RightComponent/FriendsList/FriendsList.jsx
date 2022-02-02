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
import { Link } from "react-router-dom";
import FriendsModal from './FriendsModal.jsx';
import samplePeople from './samplepeople.js';
import { dumpFriend } from '../../../requests'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'react-bootstrap/Button';


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

const FriendsList = ({ handleGetFriendData, userData, currentUser }) => {

  const [show, setShow] = useState(false);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    setFriendsList(userData[0].friends);
  }, userData)

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  const removeFriend = (friendToRemove) => {
    const action = {friend: friendToRemove, username: currentUser, action: 'remove'}
    dumpFriend(action)
    .then((res) => {
      const newFriends = friendsList.filter((friend) => friend !== friendToRemove);
      console.log(res)
      setFriendsList(newFriends);
    })
    .catch(err => console.error(err))
  };

  // onClick={}

  return (
    <Paper className='animate__animated animate__fadeInRight' style={friendsListContainer}>
      <Box style={boxStyle}>
      <Button className="sideComponentTitle" variant="dark" onClick={handleModal} style={{marginTop: '60px'}}>Friends List</Button>
      {/* <h5 style={{position:'absolute', top: 5, marginBottom: 15}}>Friends Lists</h5> */}
        {friendsList.length === 0 ? (
          <div style={{ alignSelf: 'center', position: 'absolute', top: '60%' }}>
            {' '}
            No friends :({' '}
          </div>
        ) : (
          <List style={{ width: '100%', paddingTop: 20}}>
            {friendsList.slice(0, 10).map((datum, idx) => {
              return (
                <ListItem
                  key={idx}
                  style={{ height: 42 }}
                >
                  <ListItemAvatar>
                    <Avatar alt=" " src="./bnLogoSmall.png" className='bnLogoSmall'/>
                      {/* <AccountCircleIcon /> */}
                    {/* </Avatar> */}
                  </ListItemAvatar>
                  <Link to={`friend/${datum}`}><ListItemText
                    primary={datum}
                    onClick={e => handleGetFriendData(datum)}
                  /></Link>
                  <ListItemSecondaryAction>
                  <IconButton edge='end' onClick={() => removeFriend(datum)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        )}
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
        <FriendsModal friendsList={friendsList} remove={removeFriend} set={setFriendsList} handleGetFriendData={handleGetFriendData}/>
      </Modal>
    </Paper>
  );
};

export default FriendsList;
