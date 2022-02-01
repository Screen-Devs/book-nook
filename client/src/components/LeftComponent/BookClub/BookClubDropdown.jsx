import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import { MoreVertOutlined } from '@material-ui/icons';

const BookClubDropdown = ({ gBookId, bookData, remove }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = () => {
    remove(gBookId, bookData);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleMenu} variant='contained' color='inherit'>
        <MoreVertOutlined />
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
        <MenuItem onClick={handleRemove}>Leave Book Club</MenuItem>
      </Menu>
    </>
  );
};

export default BookClubDropdown;
