import React, { useState } from 'react';
import { Card, Paper, Box, CardHeader, Typography, IconButton } from '@material-ui/core';
import Donut from './Donut.jsx';

const paperStyle = {
  height: 250,
  width: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 5,
  position: 'relative'
};

const Statistics= ({ completed, current, queue, bookClub }) => {

  let totalRead = completed.length + bookClub.length
  return (
    <Paper style={paperStyle} elevation={6}>
      <div style={{ fontWeight: 800}}>Statistics</div>
      <Donut completed={totalRead} current={current.length} queue={queue.length} bookClub={bookClub.length}/>
    </Paper>
  );
};

export default Statistics;
