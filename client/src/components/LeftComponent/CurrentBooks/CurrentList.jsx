import React, { useState } from 'react';
import { Card, Paper, Box, CardHeader, Typography, IconButton } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';
import CurrentDropdown from './CurrentDropdown.jsx';

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

const cardStyle = {
  height: 80,
  margin: 5,
  border: '0.5px black solid',
  width: '95%',
};

const CurrentList = ({ current, removeFromCurrent, currentToCompleted }) => {

  return (
    <Paper style={paperStyle} elevation={6}>
      <div style={{ fontWeight: 800}}>Current Books</div>
      <Box style={boxStyle}>
        {current.length === 0 ? null : (
          <div>
            {current.map((datum, index) => {
              return (
                <Card style={cardStyle} key={index}>
                  <CardHeader
                    action={<CurrentDropdown rank={datum.rank} remove={removeFromCurrent} move={currentToCompleted}/>}
                    title={
                      <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant='subtitle1'>
                          {datum.title}
                        </Typography>
                      </ThemeProvider>
                    }
                    subheader={
                      <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant='subtitle2'>
                          {datum.author}
                        </Typography>
                      </ThemeProvider>
                    }
                  />
                </Card>
              );
            })}
          </div>
        )}
      </Box>
    </Paper>
  );
};

export default CurrentList;
