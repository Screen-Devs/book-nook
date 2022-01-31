import React, {useState} from 'react';
import {
  Paper,
  Box,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
  Button,
  Modal,
} from '@material-ui/core';
import sample from './sample.js';
import HighestRatedBooksModal from './HighestRatedBooksModal.jsx';

const boxStyle = {
  height: 250,
  width: 290,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const HighestRatedBooks = () => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  let data = sample.results.books;

  const createData = (title) => {
    return { title };
  };

  const rows = data.slice(0,5).map((datum) => {
    return createData(`${datum.title}`);
  });
  return (
    <Paper className='placeHolderContainerRight animate__animated animate__fadeInRight' elevation={6}>
      <div>Highest Rated Books</div>
      <Box style={boxStyle}>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                  <TableCell style={{fontSize:15}}>Rank</TableCell>
                  <TableCell style={{fontSize:15 }}>Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow
                    key={index}
                    >
                      <TableCell style={{fontSize:10 }}>{index + 1}</TableCell>
                      <TableCell style={{fontSize:10 }}>{row.title}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button onClick={handleModal} style={{marginTop: 0.5, fontSize:8, marginBottom: 5}} variant='contained' color='inherit' size='small'>Show More</Button>
      <Modal open={show} onClose={handleModal}>
        <HighestRatedBooksModal/>
      </Modal>
    </Paper>
  );
};

export default HighestRatedBooks;
