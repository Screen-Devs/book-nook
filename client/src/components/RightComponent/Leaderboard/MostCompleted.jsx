import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import React from 'react';

const sample = [
  { username: 'Matt', books: 5 },
  { username: 'Pete', books: 2 },
  { username: 'Diane', books: 4 },
  { username: 'Hannah', books: 10 },
  { username: 'John', books: 4 },
];

const createData = (username, books) => {
  return { username, books };
};

const rows = sample.slice(0, 5).map((datum) => {
  return createData(`${datum.username}`, `${datum.books}`);
});

const MostCompleted = () => {
  return (
    <TableContainer
      style={{
        borderRadius: '16px 16px 16px 16px',
        paddingBottom: '0px',
        boxShadow: '0px 0px 0px 0px #000000',
      }}
    >
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{ fontSize: 10, fontWeight: 'bold', padding: '2px 0px 0px' }}>
              Rank
            </TableCell>
            <TableCell align="center" style={{ fontSize: 10, fontWeight: 'bold', padding: '2px 0px 0px ' }}>
              Username
            </TableCell>
            <TableCell align="center" style={{ fontSize: 10, fontWeight: 'bold', padding: '2px 0px 0px' }}>
              Completed
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell align="center" style={{ fontSize: 12, fontWeight: 'bold' }}>
                  {index + 1}
                </TableCell>

                <TableCell align="center" style={{ fontSize: 10 }}>
                  {row.username}
                </TableCell>
                <TableCell align="center" style={{ fontSize: 10 }}>{row.books}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MostCompleted;
