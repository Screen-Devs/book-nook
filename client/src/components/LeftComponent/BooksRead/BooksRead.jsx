import React, { useState } from 'react';
import { Card, Paper, Box, CardHeader, Typography, IconButton, Divider } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';
import BooksReadDropdown from './BooksReadDropdown.jsx';

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

const BooksRead = ({ completed, removeFromCompleted, completedToBookClub }) => {
  return (
    <Paper style={paperStyle} elevation={6}>
      <div style={{color: 'white', backgroundColor: '#212529', width: 300, display: 'flex', justifyContent: 'center', borderRadius: '10px 10px 0px 0px', height: '205px', paddingTop: '8px',}}>
      <div style={{ fontWeight: 800}}>Completed Books</div>
      </div>
      <Box style={boxStyle} className="hideScroll">
        {completed.length === 0 ? null : (
          <div>
            {completed.map((datum, index) => {
              return (
                <Card style={cardStyle} key={index}>
                  <CardHeader
                    action={<BooksReadDropdown gBookId={datum.gBookId} remove={removeFromCompleted} move={completedToBookClub}/>}
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
                          {datum.authors[0]}
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

export default BooksRead;
