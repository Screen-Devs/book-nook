import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Button } from '@material-ui/core';
import { MoreVertOutlined } from '@material-ui/icons';
import AddCommentModal from './AddCommentModal.jsx';
import { markReview } from '../../../requests'

const DropdownComments = ({review, reviewId, bookId, goToReviews, username}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHelpful = (e) => {
    e.preventDefault();
    markReview(bookId, reviewId, 'helpful')
      .then((success) => { goToReviews(bookId) })
  }

  const handleReport = (e) => {
    e.preventDefault();
    markReview(bookId, reviewId, 'report')
      .then((success) => { goToReviews(bookId) })
  }

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
        <MenuItem onClick={handleClose} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {review.reported_review === false ? <Button onClick={(e) => { handleHelpful(e) }}>Helpful</Button> : null}
        </MenuItem>
        <MenuItem onClick={handleClose} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Button onClick={(e) => { handleReport(e) }}>{review.reported_review === false ? "Report" : "Reported"}</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AddCommentModal
            bookId={bookId}
            goToReviews={goToReviews}
            username={username}
            reviewId={reviewId}
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownComments;
