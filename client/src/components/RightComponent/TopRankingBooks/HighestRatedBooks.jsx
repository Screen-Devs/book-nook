import React, {useState, useEffect} from 'react';
import {
  Paper,
  Box,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
  // Button,
  Modal,
} from '@material-ui/core';
import sample from './sample.js';
import HighestRatedBooksModal from './HighestRatedBooksModal.jsx';
import Button from 'react-bootstrap/Button';
import { getHighestAvgRating, searchGoogle } from '../../../requests/index.js';

const boxStyle = {
  height: 250,
  width: 290,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '5%',
  boxShadow: '0px 0px 32px 4px #000000',
  paddingTop: '10px',
};

// const highestRatedContainer = {
//   height: '250px',
//   background-color: 'white',
//   justify-content: 'center',
//   text-align: 'center',
//   font-weight: 800,
//   margin: '5px',
//   border-radius: '20px',
//   box-shadow: '0px 0px 32px 4px #000000',
//   display: 'flex',
//   justify-content: 'center',
//   align-items: 'center',
//   flex-direction: 'column',
// }

// style={{borderRadius: '20px 20px 20px 20px'}}

const HighestRatedBooks = () => {
  const [show, setShow] = useState(false);
  const [topRated, setTopRated] = useState([]);

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  const fetchTopRated = () => {
    getHighestAvgRating()
      .then((topRated) => {
        const promisedResults = topRated.data.map(book => {
          return searchGoogle(book._id.id);
        });

        Promise.all(promisedResults)
          .then((googleBookData) => {
              const refinedBookData = googleBookData.map((book, rank) => {
                return {
                  rank: rank,
                  title: book[0].volumeInfo.title,
                  authors: book[0].volumeInfo.authors,
                  description: book[0].volumeInfo.description,
                  gBookId: book[0].id,
                };
              });
              setTopRated(refinedBookData);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTopRated();
  }, []);

  return (
    <Paper style={boxStyle} className='placeHolderContainerRight animate__animated animate__fadeInRight' elevation={6}>
      {/* <div style={{color: 'white', backgroundColor: '#212529', width: 300, display: 'flex', justifyContent: 'center', borderRadius: '10px 10px 0px 0px', height: '35px', paddingTop: '5px',}}> */}
      <Button className="sideComponentTitle" style={{display: 'flex', justifyContent: 'center',}} variant="dark" onClick={handleModal} >
      <div>Highest Rated Books</div>
      </Button>
      {/* </div> */}
      <Box className="hideScroll" style={{padding: '2px 0px 10px 0px', overflow: 'scroll',}}>
        <TableContainer component={Paper} style={{borderRadius: '16px 16px 16px 16px', paddingBottom:'0px', boxShadow: '0px 0px 0px 0px #000000',
}}>
          <Table size="small" >
            <TableHead>
              <TableRow>
                  <TableCell style={{fontSize:15, fontWeight: 'bold', padding: '2px 0px 0px 20px',}}>Rank</TableCell>
                  <TableCell style={{fontSize:15, fontWeight: 'bold', padding: '2px 0px 0px 20px',}}>Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{height: '120px', width: '150px',}}>
              {topRated.map((row, index) => {
                return (
                  <TableRow
                    key={index}
                    >
                      <TableCell style={{fontSize:12, paddingLeft:'32px', fontWeight: 'bold', }}>{index + 1}</TableCell>
                      <TableCell style={{fontSize:10 }}>{row.title}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* <Button onClick={handleModal} style={{marginTop: 0.5, fontSize:8, marginBottom: 5}} variant='contained' color='inherit' size='small'>Show More</Button> */}
      <Modal open={show} onClose={handleModal}>
        <HighestRatedBooksModal topRatedBookData={topRated}/>
      </Modal>
    </Paper>
  );
};

export default HighestRatedBooks;
