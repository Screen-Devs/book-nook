import { Container, Tab, Tabs, Box, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TabPanel } from '../NYTModal/TabPanel.jsx';
import MostClubbed from './MostClubbed.jsx';
import MostCompleted from './MostCompleted.jsx';

const containerStyle = {
  height: '100%',
  width: '100%',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const Content = styled.div`
  width: 100%
`;

const Leaderboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={containerStyle}>
      <Content>
        <Tabs value={value} onChange={handleChange} style={{width: '100%'}} center>
          <Tab label='Most Completed' style={{fontSize: 10, minWidth:'50%'}} wrapped/>
          <Tab label='Most Clubbed' style={{fontSize: 10, minWidth:'50%'}} wrapped/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <MostCompleted/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MostClubbed/>
        </TabPanel>
      </Content>
    </Container>
  );
};

export default Leaderboard;
