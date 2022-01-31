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
  position: 'relative',
  borderRadius: '5%',
  boxShadow: '0px 0px 32px 4px #000000',
};

const Statistics= ({ completed, current, queue, bookClub }) => {

  let totalRead = completed.length + bookClub.length
  return (
    <Paper style={paperStyle} elevation={6}>
      <div style={{color: 'white', backgroundColor: '#212529', width: 300, display: 'flex', justifyContent: 'center', borderRadius: '10px 10px 0px 0px', height: '205px', paddingTop: '2px',}}>
      <div style={{ fontWeight: 800}}>Statistics</div>
      </div>
      <Donut completed={totalRead} current={current.length} queue={queue.length} bookClub={bookClub.length}/>
    </Paper>
  );
};

export default Statistics;
