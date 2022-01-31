import React, { useState } from 'react';
import { Modal, Typography, Box, Tabs, Tab, Divider } from '@material-ui/core'
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
  height: 530,
  bgcolor: 'background.paper',
  boxShadow: '0px 0px 32px 4px #000000',
  borderRadius: '5%',
  p: 4,
  padding: '20px',
};

const dividerStyle = {
  border: 'solid',
}

const tabStyle = {
  border: 'outset',
  marginTop: '10px',
  marginBottom: '5px',
  paddingBottom: '4px',
}

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
          <Typography className="modalTitle" id='modal-modal-title' variant='h4' component='h2'>
            NYT Bestsellers
          </Typography>
          <Divider style={dividerStyle}/>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs example'
            style={tabStyle}
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
