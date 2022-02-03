import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';

const sample = [
  { username: 'Matthew', books: 3 },
  { username: 'Aaron', books: 1 },
  { username: 'Lee', books: 2},
  { username: 'Steve', books: 6 },
  { username: 'Gary', books: 6},
];

const createData = (username, books) => {
  return { username, books };
};

const rows = sample.slice(0, 5).map((datum) => {
  return createData(`${datum.username}`, `${datum.books}`);
});

const MostClubbed = () => {
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
              Clubs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ height: '120px', width: '150px' }}>
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

export default MostClubbed;
