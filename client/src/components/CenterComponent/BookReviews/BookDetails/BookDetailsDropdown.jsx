import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import { MoreVertOutlined } from '@material-ui/icons';
import { putUserBook } from '../../../../requests';

const BookDetailsDropdown = ({bookData, queue, setQueue, username}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  console.log(bookData)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  }

  console.log('book data', bookData)

  const addToQueue = () => {
    const params = {
      username: username,
      gBookId: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      list: 'queued',
      status: true
    }

    let newObj = {
      authors: bookData.volumeInfo.authors,
      gBookId: bookData.id,
      title: bookData.volumeInfo.title
    }

    const newList = queue.concat(newObj)
    putUserBook(params)
      .then(() => {})
    console.log('new List', newObj)
    setQueue(newList)
  }

  return (
    <>
      <IconButton onClick={handleMenu} variant='contained' color='inherit'>
        <MoreVertOutlined style={{color:'white'}}/>
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
        <MenuItem onClick={addToQueue}>Add to Read List</MenuItem>
      </Menu>
    </>
  );
};

export default BookDetailsDropdown;
