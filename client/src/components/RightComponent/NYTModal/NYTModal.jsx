import React, { useState } from 'react';
import { Modal, Typography, Box, Tabs, Tab } from '@material-ui/core'
import styled from 'styled-components';
import sample2 from './sample.js'
import ModalCards from './ModalCards.jsx';
import { TabPanel } from './TabPanel.jsx';
import Button from 'react-bootstrap/Button';


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
  boxShadow: '0px 0px 32px 4px #000000',
  borderRadius: '5%',
  p: 4,
};

const NYTModal = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleModal = () => {
    setShow((prev) => !prev);
  };


  let result = sample2.results

  let categories = result.map((cat) => {
    return cat.list_name
  })

  return (
    <Container>
      <Button className="sideComponentTitle" variant="dark" onClick={handleModal}>NYT Best Sellers</Button>
      <Modal
        open={show}
        onClose={handleModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography className="modalTitle" id='modal-modal-title' variant='h6' component='h2'>
            NYT Bestsellers
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
            <TabPanel value={value} index={index} key={index}>
              <ModalCards/>
            </TabPanel>
          ))}
        </Box>
      </Modal>
    </Container>
  );
};

export default NYTModal;
