import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  IconButton,
  Button,
} from '@material-ui/core';
import { MoreVertOutlined } from '@material-ui/icons';
import AddReviewModal from './AddReviewModal.jsx';


const DropdownReviews = ({set, username}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{overflow: 'auto'}}>
    <IconButton onClick={handleMenu} variant='contained' color='inherit' >
      <MoreVertOutlined/>
  </IconButton>
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <AddReviewModal set={set} username={username}/>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Button variant='text' style={{color: 'black', paddingLeft: 5}}>Join Club</Button>
      </MenuItem>
    </Menu>
    </div>
  );
};

export default DropdownReviews;
