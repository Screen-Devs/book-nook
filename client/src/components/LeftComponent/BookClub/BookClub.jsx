import React, { useState } from 'react';
import { Card, Paper, Box, CardHeader, Typography, IconButton } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';
import BookClubDropdown from './BookClubDropdown.jsx';

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
  width: 300,
  margin: 5,
  border: '0.5px black solid',
  width: '95%',
};

const BookClub = ({ lists }) => {
  let bookClub = lists.bookClub;
  return (
    <Paper style={paperStyle} elevation={6}>
      <div style={{ fontWeight: 800}}>Book Club</div>
      <Box style={boxStyle}>
        {bookClub.length === 0 ? null : (
          <div style={{width:'100%'}}>
            {bookClub.map((datum, index) => {
              return (
                <Card style={cardStyle} key={index}>
                  <CardHeader
                    action={<BookClubDropdown rank={datum.rank} />}
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

export default BookClub;
