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
import Dropdown from './Dropdown.jsx';


const styleM = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '950px',
  height: 500,
  bgcolor: 'background.paper',
  border: '0.5px solid lightgrey',
  boxShadow: 24,
  p: 4,
  borderRadius: '5%',
  boxShadow: '0px 0px 32px 4px #000000',
};

const scrolling = {
  overflow: 'scroll',
  width: '905px',
  height: '500px',
  marginLeft: '20px',
}

const HighestRatedBooksModal = ({topRatedBookData}) => {

  return (
    <>
        <Box style={styleM}>
          <TableContainer component={Paper}>
            <Table >
              <div >
              <TableHead >
                <TableRow >
                  <TableCell style={{fontWeight: 'bold',}}>Rank</TableCell>
                  <TableCell style={{fontWeight: 'bold',}}>Title</TableCell>
                  <TableCell style={{fontWeight: 'bold',}}>Author</TableCell>
                  <TableCell style={{fontWeight: 'bold',}}>Description</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              </div>
              <div className="hideScroll" style={scrolling}>
              <TableBody >
                {topRatedBookData.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.authors.join(', ')}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>
                        <Dropdown />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              </div>
            </Table>
          </TableContainer>
        </Box>
    </>
  );
};

export default HighestRatedBooksModal;
