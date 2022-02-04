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

//'background.paper'
const styleM = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '950px',
  height: 456,
  // border: '0.5px solid lightgrey',
  // boxShadow: 24,
  // p: 4,
  borderRadius: '20px',
  boxShadow: '0px 0px 32px 4px #000000',
};

const scrolling = {
  overflow: 'scroll',
  width: '950px',
  height: 400,
  // marginLeft: '20px',
  borderRadius: '20px',
}

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
        <Box className="0" style={styleM}>
          <TableContainer className="1" component={Paper} style={{borderRadius: '20px',}}>
            <Table className="2" style={{borderRadius: '20px', width: '100%',}}>
              <div style={{width: '100%', boxShadow: '0px 0px 32px 4px #000000',}}>
              <TableHead className="3" style={{ margin: '10px', width: '100%'}}>
                <TableRow >
                  <TableCell style={{fontWeight: 'bold',}}>Rank</TableCell>
                  <TableCell style={{fontWeight: 'bold', }}>Title</TableCell>
                  <TableCell style={{fontWeight: 'bold', paddingLeft: '180px', }}>Author</TableCell>
                  <TableCell style={{fontWeight: 'bold', paddingLeft: '60px',}}>Description</TableCell>
                  <TableCell style={{width: '100%',}}></TableCell>
                </TableRow>
              </TableHead>
              </div>
              <div className="hideScroll" style={scrolling}>
              <TableBody style={{borderRadius: '20px',}}>
                {rows.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell style={{paddingLeft: '28px',}}>{row.rank}</TableCell>
                      <TableCell style={{paddingLeft: '28px',}}>{row.title}</TableCell>
                      <TableCell style={{paddingLeft: '28px',}}>{row.author}</TableCell>
                      <TableCell style={{paddingLeft: '18px',}}>{row.description}</TableCell>
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

