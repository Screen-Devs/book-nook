import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';

const MostClubbed = ({leaderboardData}) => {
  const createData = (username, books) => {
    return { username, books };
  };

  const sorter = (a, b) => {
    const rowA = a.books;
    const rowB = b.books;
    return rowB - rowA;
  };

  const rows = leaderboardData.slice(0, 5).map((datum) => {
    return createData(`${datum.friend}`, `${datum.clubbedCount}`);
  }).sort(sorter);

  let noFriendDataMsg = 'Your friends have not joined any Book Clubs yet.';

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
              Friend
            </TableCell>
            <TableCell align="center" style={{ fontSize: 10, fontWeight: 'bold', padding: '2px 0px 0px' }}>
              Clubs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ height: '120px', width: '150px' }}>
        {rows.length === 0 &&
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center" style={{ fontSize: 10 }}>
                {noFriendDataMsg}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>}
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
