import React from 'react';
import {
  Box,
  Table,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,

} from '@material-ui/core';
import sample from './sample.js';
import Dropdown from './Dropdown.jsx';


const styleM = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 500,
  bgcolor: 'background.paper',
  border: '0.5px solid lightgrey',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
};

const HighestRatedBooksModal = () => {
  let data = sample.results.books;

  const createData = (rank, title, author, description) => {
    return { rank, title, author, description };
  };

  const rows = data.map((datum) => {
    return createData(`${datum.rank}`, `${datum.title}`, `${datum.author}`, `${datum.description}`);
  });

  return (
    <>
        <Box style={styleM}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align='center'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{row.rank}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.author}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>
                        <Dropdown />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </>
  );
};

export default HighestRatedBooksModal;
