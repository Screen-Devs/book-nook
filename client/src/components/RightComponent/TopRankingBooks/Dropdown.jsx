import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  IconButton,
} from '@material-ui/core';
import { MoreVertOutlined } from '@material-ui/icons';

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
      <MenuItem onClick={handleClose}>Favorite</MenuItem>
      <MenuItem onClick={handleClose}>Completed</MenuItem>
      <MenuItem onClick={handleClose}>Add to read list</MenuItem>
    </Menu>
    </>
  );
};

export default Dropdown;
