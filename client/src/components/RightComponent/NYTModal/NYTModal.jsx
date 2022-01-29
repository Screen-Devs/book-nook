import React, { useState } from 'react';
import { Modal, Button, Typography, Box, Tabs, Tab } from '@mui/material';
import styled from 'styled-components';
import sample2 from './sample.js'

const Container = styled.div`
  margin: 10px;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

let result = sample2.results

let categories = result.map((cat) => {
  return cat.list_name
})

console.log(categories)

const NYTModal = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <Container>
      <Button sx={{ color: 'black'}}onClick={handleModal}>NYT Best Sellers</Button>
      <Modal
        open={show}
        onClose={handleModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            NYT Bestseller
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs example'
          >
            {categories.map((cat, index) => (
              <Tab label={cat} value={index} key={index}/>
            ))}
          </Tabs>
          {categories.map((info, index) => (
            <TabPanel value={value} index={index} key={index}>{info}</TabPanel>
          ))}
        </Box>
      </Modal>
    </Container>
  );
};

const TabPanel = (props) => {
  const {children, value, index} = props;

  return(
    <div>
      {value === index && (
        <h1>{children}</h1>
      )}
    </div>
  )
}
export default NYTModal;
