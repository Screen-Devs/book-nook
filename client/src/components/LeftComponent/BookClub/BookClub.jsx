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
  minHeight: 205,
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
  position: 'relative',
  borderRadius: '5%',
  boxShadow: '0px 0px 32px 4px #000000',
};

const cardStyle = {
  height: 80,
  margin: 5,
  border: '0.5px black solid',
  width: '95%',
};

const dividerStyle = {
  border: 'solid',
  borderWidth: '1px',
  width: 300,
}

const BookClub = ({ bookClub, removeFromBookClub }) => {

  return (
    <Paper style={paperStyle} elevation={6}>
      <div style={{color: 'white', backgroundColor: '#212529', width: 300, display: 'flex', justifyContent: 'center', borderRadius: '10px 10px 0px 0px', height: '205px', paddingTop: '8px',}}>
        <div style={{ fontWeight: 800 }}>Book Club</div>
      </div>
      <Box style={boxStyle}>
        {bookClub.length === 0 ? null : (
          <div>
            {bookClub.map((datum, index) => {
              return (
                <Card style={cardStyle} key={index}>
                  <CardHeader
                    action={<BookClubDropdown gBookId={datum.gBookId} bookData={datum} remove={removeFromBookClub}/>}
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
                          {datum.authors.map((author, idx) => {
                            if (idx !== datum.authors.length - 1) {
                              return author + ', '
                            } else {
                              return author
                            }
                          })}
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
