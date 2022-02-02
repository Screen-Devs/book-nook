import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Button } from '@material-ui/core';
import { MoreVertOutlined } from '@material-ui/icons';
import CommentsModal from './CommentsModal.jsx';
import AddCommentModal from './AddCommentModal.jsx';

const DropdownComments = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

    // all comments for a given review
  const [commentsInReview, setCommentsInReview] = useState([])


  console.log('cir', commentsInReview)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ overflow: 'auto' }}>
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
        <MenuItem onClick={handleClose}>
          <Button>Helpful</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button>Report</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CommentsModal commentsInReview={commentsInReview}/>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AddCommentModal set={setCommentsInReview}/>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownComments;
