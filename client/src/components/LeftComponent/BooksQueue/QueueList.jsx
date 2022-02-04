import React, { useState } from 'react';
import { Card, Paper, Box, CardHeader, Typography, IconButton, Divider } from '@material-ui/core';
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
  // backgroundColor: 'black',
  // color: 'white',
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

const QueueList = ({ queue, removeFromQueue, queueToCurrent, currentView, goToReviews, handleSingleBookSearch }) => {

  const handleClick = (gBookId, title) => {
    //FIXME: If book does not have a gBookId, this will break
    if (!gBookId) return;
    handleSingleBookSearch(gBookId, title);
    goToReviews(gBookId, title);
  }

  return (
    <Paper style={paperStyle} elevation={6}>
      <div style={{color: 'white', backgroundColor: '#212529', width: 300, display: 'flex', justifyContent: 'center', borderRadius: '10px 10px 0px 0px', height: '205px', paddingTop: '8px',}}>
      <div style={{ fontWeight: 800,}}>
        Book Queue{' '}
      </div>
      </div>
      {/* <Divider style={dividerStyle}/> */}
      <Box style={boxStyle} className="hideScroll">
        {queue.length === 0 ? null : (
          <div>
            {queue.map((datum, index) => {
              return (
                <Card style={cardStyle} key={index}>
                  <CardHeader
                    action={currentView === 'self' && <QueueDropdown gBookId={datum.gBookId} bookData={datum} remove={removeFromQueue} move={queueToCurrent}/>}
                    title={
                      <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant='subtitle1' onClick={e => handleClick(datum.gBookId, datum.title)} className="link">
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

export default QueueList;
