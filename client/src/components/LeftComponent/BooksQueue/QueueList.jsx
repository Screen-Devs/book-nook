import React, { useState } from 'react';
import { Card, Paper, Box, CardHeader, Typography, IconButton } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';
import QueueDropdown from './QueueDropdown.jsx';

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
  maxWidth: 300,
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
  position: 'relative',
};

const cardStyle = {
  height: 80,
  margin: 5,
  border: '0.5px black solid',
  width: '95%',
};

const QueueList = ({ lists }) => {
  let queue = lists.queue;
  return (
    <Paper style={paperStyle} elevation={6}>
      <div style={{ fontWeight: 800}}>
        Book Queue{' '}
      </div>
      <Box style={boxStyle}>
        {queue.length === 0 ? null : (
          <div>
            {queue.map((datum, index) => {
              return (
                <Card style={cardStyle} key={index}>
                  <CardHeader
                    action={<QueueDropdown rank={datum.rank} />}
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

export default QueueList;
