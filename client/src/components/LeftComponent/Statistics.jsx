import React, { useState } from 'react';
import { Card, Paper, Box, CardHeader, Typography, IconButton } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 10,
    },
  },
});

const boxStyle = {
  maxHeight: 250,
  minWidth: 300,
  overflowY: 'scroll',
  marginBottom: 5,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

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
  return (
    <Paper style={paperStyle} elevation={6}>
      <div style={{ fontWeight: 800}}>Statistics</div>
      <Box style={boxStyle}>
        Books Read : {completed.length + bookClub.length}
        <br />
        Book Clubs : {bookClub.length}
        <br />
        Reading : {current.length}
        <br />
        Books in Queue : {queue.length}
      </Box>
    </Paper>
  );
};

export default Statistics;
